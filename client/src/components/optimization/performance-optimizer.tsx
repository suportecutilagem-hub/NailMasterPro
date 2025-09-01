import { useEffect } from 'react';

export function PerformanceOptimizer() {
  useEffect(() => {
    // Prefetch critical resources
    const prefetchResources = () => {
      // Prefetch checkout page
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = 'https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880';
      document.head.appendChild(link);

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach((img) => {
        if (img instanceof HTMLImageElement) {
          img.decoding = 'async';
        }
      });
    };

    // Remove unused CSS on mobile
    const optimizeMobileCSS = () => {
      if (window.innerWidth <= 768) {
        // Remove complex animations on mobile for better performance
        const style = document.createElement('style');
        style.textContent = `
          @media (max-width: 768px) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
            
            .motion-reduce {
              animation: none !important;
              transition: none !important;
            }
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Execute optimizations
    setTimeout(() => {
      prefetchResources();
      optimizeImages();
      optimizeMobileCSS();
    }, 1000);

    // Critical CSS for mobile
    const criticalCSS = document.createElement('style');
    criticalCSS.textContent = `
      @media (max-width: 768px) {
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeSpeed;
        }
        
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
        
        * {
          will-change: auto;
        }
      }
    `;
    document.head.appendChild(criticalCSS);

  }, []);

  return null;
}