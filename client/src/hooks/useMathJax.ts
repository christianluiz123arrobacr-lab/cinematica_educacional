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
      const maxAttempts = 200; // 20 segundos máximo

      while (!window.MathJax && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }

      if (window.MathJax) {
        // Esperar MathJax estar completamente inicializado
        if (window.MathJax.typesetPromise) {
          try {
            await window.MathJax.typesetPromise();
            setIsReady(true);
          } catch (err) {
            console.log('MathJax initialization error:', err);
            setIsReady(true);
          }
        } else {
          setIsReady(true);
        }
      } else {
        console.warn('MathJax não carregou');
        setIsReady(true);
      }
    };

    checkMathJax();
  }, []);

  const renderMath = useCallback((element?: HTMLElement | null) => {
    if (!window.MathJax || !window.MathJax.typesetPromise) {
      return;
    }

    try {
      if (element) {
        window.MathJax.typesetPromise([element])
          .catch((err: any) => console.log('MathJax element render error:', err));
      } else {
        window.MathJax.typesetPromise()
          .catch((err: any) => console.log('MathJax page render error:', err));
      }
    } catch (error) {
      console.log('Erro ao chamar renderMath:', error);
    }
  }, []);

  return { isReady, renderMath };
}
