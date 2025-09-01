import { useEffect, useState } from 'react';

export function useMobileOptimization() {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Detectar dispositivo mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 
                    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    // Detectar preferência de redução de movimento
    const checkMotionPreference = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setShouldReduceMotion(prefersReducedMotion || isMobile);
    };

    checkMobile();
    checkMotionPreference();

    // Listeners para mudanças
    window.addEventListener('resize', checkMobile);
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionMediaQuery.addEventListener('change', checkMotionPreference);

    return () => {
      window.removeEventListener('resize', checkMobile);
      motionMediaQuery.removeEventListener('change', checkMotionPreference);
    };
  }, [isMobile]);

  // Configurações otimizadas para mobile
  const getMotionConfig = () => {
    if (shouldReduceMotion) {
      return {
        initial: false,
        animate: false,
        transition: { duration: 0 },
        exit: false
      };
    }

    if (isMobile) {
      return {
        transition: { 
          duration: 0.2, 
          ease: "easeOut" 
        }
      };
    }

    return {};
  };

  return {
    isMobile,
    shouldReduceMotion,
    getMotionConfig
  };
}