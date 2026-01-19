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
    const renderMath = async () => {
      // Aguardar MathJax estar completamente carregado
      if (typeof window !== 'undefined' && (window as any).MathJax) {
        try {
          // Renderizar novo conteúdo
          await (window as any).MathJax.typesetPromise([ref.current]);
        } catch (err) {
          console.log('MathJax render error:', err);
        }
      }
    };

    // Renderizar imediatamente
    renderMath();
    
    // Renderizar novamente após delay para garantir
    const timer = setTimeout(renderMath, 100);
    
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
      style={{ wordBreak: 'break-word', display: display ? 'block' : 'inline-block', overflow: 'auto' }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
