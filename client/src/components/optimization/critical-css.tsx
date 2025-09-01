import { useEffect } from 'react';

export function CriticalCSS() {
  useEffect(() => {
    // Injetar CSS crítico diretamente no head para carregamento mais rápido
    const criticalCSS = `
      /* CSS crítico inline para mobile */
      @media (max-width: 768px) {
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, sans-serif;
          line-height: 1.4;
          color: #1a1a1a;
          background: #ffffff;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeSpeed;
        }
        
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
        
        button {
          cursor: pointer;
          border: none;
          outline: none;
          user-select: none;
        }
        
        .container {
          max-width: 100%;
          padding: 0 1rem;
          margin: 0 auto;
        }
        
        /* Above-the-fold otimizações */
        .hero-section {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #e91e63, #ad1457);
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          text-align: center;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* Lazy loading placeholders */
        .lazy-placeholder {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);

    // Resource hints para performance
    const addResourceHints = () => {
      const hints = [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'dns-prefetch', href: '//pay.cutilagemrussa.com' },
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500&display=swap', as: 'style' }
      ];

      hints.forEach(hint => {
        const existing = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          Object.entries(hint).forEach(([key, value]) => {
            if (key === 'crossorigin' && value === true) {
              link.setAttribute(key, '');
            } else {
              link.setAttribute(key, value);
            }
          });
          document.head.appendChild(link);
        }
      });
    };

    addResourceHints();

  }, []);

  return null;
}