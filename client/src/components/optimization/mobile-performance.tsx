import { useEffect } from 'react';

export function MobilePerformance() {
  useEffect(() => {
    // Detectar mobile
    const isMobile = window.innerWidth <= 768 || 
                    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Reduzir animações em dispositivos móveis
      const reduceMotion = () => {
        const style = document.createElement('style');
        style.textContent = `
          @media (max-width: 768px) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `;
        document.head.appendChild(style);
      };

      // Otimizar imagens para mobile
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          img.style.imageRendering = 'optimizeSpeed';
          img.setAttribute('decoding', 'async');
          img.setAttribute('importance', 'auto');
        });
      };

      // Lazy load de scripts não críticos
      const lazyLoadScripts = () => {
        setTimeout(() => {
          // Scripts de tracking podem ser carregados depois
          const scripts = document.querySelectorAll('script[data-lazy]');
          scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.src = script.getAttribute('data-src') || '';
            newScript.async = true;
            document.head.appendChild(newScript);
          });
        }, 3000);
      };

      // Resource hints para mobile
      const addResourceHints = () => {
        // Preconnect para checkout
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = 'https://pay.cutilagemrussa.com';
        document.head.appendChild(preconnect);

        // DNS prefetch para fonts
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = '//fonts.googleapis.com';
        document.head.appendChild(dnsPrefetch);
      };

      // Otimizar viewport para mobile
      const optimizeViewport = () => {
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
          viewport = document.createElement('meta');
          viewport.setAttribute('name', 'viewport');
          document.head.appendChild(viewport);
        }
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no'
        );
      };

      // Service Worker para cache (simulado)
      const setupCaching = () => {
        if ('serviceWorker' in navigator) {
          // Cache básico de recursos críticos
          const criticalResources = [
            '/',
            '/static/js/main.js',
            '/static/css/main.css'
          ];
          
          // Implementar cache strategy
          localStorage.setItem('cachedResources', JSON.stringify(criticalResources));
        }
      };

      // Executar otimizações
      reduceMotion();
      optimizeImages();
      addResourceHints();
      optimizeViewport();
      setupCaching();
      
      setTimeout(lazyLoadScripts, 2000);

      // Monitorar performance
      if ('web-vitals' in window || true) {
        setTimeout(() => {
          console.log('Mobile performance optimizations applied');
        }, 1000);
      }
    }

    // Cleanup não necessário para esta implementação
    return () => {};
  }, []);

  return null;
}