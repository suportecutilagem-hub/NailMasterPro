import { useEffect } from 'react';

export function PerformanceOptimizer() {
  useEffect(() => {
    // Prefetch critical resources
    const prefetchResources = () => {
      // Fontes e conexão do checkout já são declaradas no HTML inicial.
      // Evita disputar banda com os recursos críticos depois do primeiro paint.
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
          image-rendering: auto;
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