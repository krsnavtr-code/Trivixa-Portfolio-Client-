import { useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import Layout from "./components/Layout";

function App() {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <Layout>
        {/* Your page content will go here */}
      </Layout>
    </>
  );
}

export default App;
