import { useEffect, useRef } from 'react';

interface MathFormulaProps {
  formula: string;
  display?: boolean;
  className?: string;
}

declare global {
  interface Window {
    MathJax: any;
  }
}

export function MathFormula({ formula, display = true, className = '' }: MathFormulaProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Esperar um pouco para garantir que o DOM foi atualizado
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.MathJax) {
        try {
          // Forçar renderização de todo o conteúdo
          window.MathJax.typesetPromise().catch((err: any) => {
            console.log('MathJax error:', err);
          });
        } catch (err) {
          console.log('MathJax error:', err);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [formula]);

  // Usar delimitadores corretos para MathJax
  const displayStyle = display ? '\\[' : '\\(';
  const endStyle = display ? '\\]' : '\\)';
  const htmlContent = `${displayStyle}${formula}${endStyle}`;

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ 
        wordBreak: 'break-word', 
        display: display ? 'block' : 'inline-block',
        overflow: 'auto'
      }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
