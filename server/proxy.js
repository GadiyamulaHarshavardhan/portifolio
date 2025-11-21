// Simple proxy to serve React dev version for admin panel
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to React dev server
app.use('/admin', createProxyMiddleware({
  target: 'http://localhost:5173',
  changeOrigin: true,
}));

// Serve other routes from the main app
app.use('/', (req, res) => {
  res.redirect('http://localhost:5173');
});

app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});