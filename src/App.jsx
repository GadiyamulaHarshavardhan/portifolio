// src/App.jsx
import React, { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Buddyse from './components/Buddyse';
import Contact from './components/Contact';

function App() {
  const [data, setData] = useState(null);
  const [threeError, setThreeError] = useState(false);

  useEffect(() => {
    // Fetch portfolio data from backend API
    fetch('/api/portfolio')
      .then(response => response.json())
      .then(data => {
        setData(data.website);
        // Record page view
        fetch('/api/analytics/record-view', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .catch(error => console.error('Error recording view:', error));
      })
      .catch(error => {
        console.error('Error fetching portfolio data:', error);
        // Fallback to local data if API fails
        import('./portfolio.json').then(module => {
          setData(module.default.website);
        });
      });
  }, []);

  if (!data) return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] text-[#f5f5f5]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f5f5f5] mx-auto mb-4"></div>
        <p className="font-nunito">Loading Portfolio...</p>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#121212] text-[#f5f5f5]">
      {/* Three.js Background */}
      {!threeError ? (
        <ThreeBackground onError={() => setThreeError(true)} />
      ) : (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212]"></div>
      )}
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {data.sections.map((section) => {
          switch (section.type) {
            case 'intro':
              return <Hero key={section.id} data={section} />;
            case 'about':
              return <About key={section.id} data={section} />;
            case 'experience':
              return <Work key={section.id} data={section} />;
            case 'services':
              return <Services key={section.id} data={section} />;
            case 'showcase':
              return <Projects key={section.id} data={section} />;
            case 'testimonials':
              return <Testimonials key={section.id} data={section} />;
            case 'about_services':
              return <Buddyse key={section.id} data={section} />;
            case 'contact':
              return <Contact key={section.id} data={section} />;
            default:
              return null;
          }
        })}
      </main>
    </div>
  );
}

export default App;