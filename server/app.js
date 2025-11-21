const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

// Session configuration
app.use(session({
  secret: 'your-secret-key-change-this',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Initialize SQLite database
const dbPath = path.join(__dirname, 'portfolio.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Initialize database tables
function initializeDatabase() {
  // Portfolio data table
  db.run(`CREATE TABLE IF NOT EXISTS portfolio_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    section_type TEXT NOT NULL,
    data TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Admin users table
  db.run(`CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Analytics table
  db.run(`CREATE TABLE IF NOT EXISTS analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATE NOT NULL,
    page_views INTEGER DEFAULT 0,
    unique_visitors INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(date)
  )`);

  // Insert default admin user if not exists
  const saltRounds = 10;
  const defaultPassword = 'admin123'; // Change this after first login
  bcrypt.hash(defaultPassword, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return;
    }
    
    db.run(
      `INSERT OR IGNORE INTO admin_users (username, password_hash) VALUES (?, ?)`,
      ['admin', hash],
      (err) => {
        if (err) {
          console.error('Error creating admin user:', err);
        } else {
          console.log('Admin user created/verified. Username: admin, Password: admin123');
        }
      }
    );
  });
}

// Middleware to check if user is authenticated
function requireAuth(req, res, next) {
  if (req.session && req.session.authenticated) {
    next();
  } else {
    res.status(401).json({ error: 'Authentication required' });
  }
}

// API Routes

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  db.get(
    'SELECT id, username, password_hash FROM admin_users WHERE username = ?',
    [username],
    (err, user) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      bcrypt.compare(password, user.password_hash, (err, result) => {
        if (err) {
          console.error('Password comparison error:', err);
          return res.status(500).json({ error: 'Authentication error' });
        }

        if (result) {
          req.session.authenticated = true;
          req.session.userId = user.id;
          res.json({ success: true, message: 'Login successful' });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      });
    }
  );
});

// Admin logout
app.post('/api/admin/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ success: true, message: 'Logged out successfully' });
  });
});

// Get portfolio data
app.get('/api/portfolio', (req, res) => {
  db.all(
    'SELECT section_type, data FROM portfolio_data ORDER BY id',
    [],
    (err, rows) => {
      if (err) {
        console.error('Error fetching portfolio data:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      const portfolio = {
        website: {
          title: "Tushar Joshi - Full Stack Developer Portfolio",
          theme: {
            primaryColor: "#121212",
            accentColor: "#f5f5f5",
            backgroundColor: "#000000",
            borderRadius: "rounded-2xl",
            fontFamily: "Nunito, sans-serif"
          },
          sections: []
        }
      };

      // Parse the stored data and reconstruct the portfolio
      rows.forEach(row => {
        try {
          const parsedData = JSON.parse(row.data);
          portfolio.website.sections.push(parsedData);
        } catch (e) {
          console.error('Error parsing portfolio data:', e);
        }
      });

      res.json(portfolio);
    }
  );
});

// Update portfolio data
app.put('/api/portfolio', requireAuth, (req, res) => {
  const { sections } = req.body;

  if (!Array.isArray(sections)) {
    return res.status(400).json({ error: 'Invalid sections data' });
  }

  // Begin transaction to ensure data consistency
  db.serialize(() => {
    // Delete existing data
    db.run('DELETE FROM portfolio_data', (err) => {
      if (err) {
        console.error('Error deleting portfolio data:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      // Insert new data
      sections.forEach((section, index) => {
        db.run(
          'INSERT INTO portfolio_data (section_type, data) VALUES (?, ?)',
          [section.type, JSON.stringify(section)],
          (err) => {
            if (err) {
              console.error('Error inserting portfolio data:', err);
            }
          }
        );
      });

      res.json({ success: true, message: 'Portfolio updated successfully' });
    });
  });
});

// Get analytics data
app.get('/api/analytics', requireAuth, (req, res) => {
  db.all(
    'SELECT date, page_views, unique_visitors FROM analytics ORDER BY date DESC LIMIT 30',
    [],
    (err, rows) => {
      if (err) {
        console.error('Error fetching analytics:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      // Calculate summary statistics
      const totalViews = rows.reduce((sum, row) => sum + row.page_views, 0);
      const totalVisitors = rows.reduce((sum, row) => sum + row.unique_visitors, 0);
      const avgDailyViews = totalViews > 0 ? Math.round(totalViews / rows.length) : 0;

      res.json({
        summary: {
          totalViews,
          totalVisitors,
          avgDailyViews,
          dateRange: rows.length > 0 ? `${rows[rows.length - 1].date} to ${rows[0].date}` : 'No data'
        },
        dailyData: rows
      });
    }
  );
});

// Record page view (called from frontend)
app.post('/api/analytics/record-view', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  
  db.run(
    `INSERT OR REPLACE INTO analytics (date, page_views, unique_visitors) 
     VALUES (?, 
             COALESCE((SELECT page_views FROM analytics WHERE date = ?), 0) + 1,
             COALESCE((SELECT unique_visitors FROM analytics WHERE date = ?), 0) + 1)`,
    [today, today, today],
    (err) => {
      if (err) {
        console.error('Error recording view:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ success: true });
    }
  );
});

// Serve admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/admin/index.html'));
});

// Serve admin panel assets
app.use('/admin/assets', express.static(path.join(__dirname, '../src/admin/assets')));

// Serve the main portfolio page
app.get('/', (req, res) => {
  // In development, redirect to Vite dev server
  if (process.env.NODE_ENV !== 'production') {
    res.redirect('http://localhost:5173');
  } else {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  }
});

// Handle 404 for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Admin panel available at http://localhost:${PORT}/admin`);
});