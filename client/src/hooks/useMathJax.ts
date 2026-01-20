import { useEffect, useState, useCallback } from 'react';

declare global {
  interface Window {
    MathJax?: any;
  }
}

export function useMathJax() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkMathJax = async () => {
      // Esperar MathJax estar disponível
      let attempts = 0;
      const maxAttempts = 100; // 10 segundos máximo

      while (!window.MathJax && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }

      if (window.MathJax) {
        // Configurar MathJax se ainda não foi configurado
        if (!window.MathJax.startup) {
          window.MathJax = {
            tex: {
              inlineMath: [['$', '$'], ['\\(', '\\)']],
              displayMath: [['$$', '$$'], ['\\[', '\\]']]
            },
            svg: {
              fontCache: 'global'
            }
          };
        }

        // Esperar MathJax estar completamente inicializado
        if (window.MathJax.typesetPromise) {
          try {
            await window.MathJax.typesetPromise();
            setIsReady(true);
          } catch (err) {
            console.log('MathJax initialization error:', err);
            setIsReady(true); // Mesmo com erro, marcar como pronto
          }
        } else {
          setIsReady(true);
        }
      } else {
        console.warn('MathJax não carregou');
        setIsReady(true); // Marcar como pronto mesmo se não carregou
      }
    };

    checkMathJax();
  }, []);

  const renderMath = useCallback(async () => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      try {
        await window.MathJax.typesetPromise();
      } catch (err) {
        console.log('MathJax render error:', err);
      }
    }
  }, []);

  return { isReady, renderMath };
}
