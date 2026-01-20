import { useEffect, useRef } from 'react';
import { useMathJax } from '@/hooks/useMathJax';

interface MathFormulaProps {
  formula: string;
  display?: boolean;
  className?: string;
}

export function MathFormula({ formula, display = true, className = '' }: MathFormulaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isReady, renderMath } = useMathJax();

  useEffect(() => {
    if (isReady && ref.current) {
      // Renderizar MathJax após um pequeno delay para garantir que o DOM foi atualizado
      const timer = setTimeout(() => {
        renderMath();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isReady, formula, renderMath]);

  // Usar delimitadores corretos para MathJax
  // Importante: usar \[ e \] para display math, \( e \) para inline math
  const displayStyle = display ? '\\[' : '\\(';
  const endStyle = display ? '\\]' : '\\)';
  
  // Construir o HTML com a fórmula LaTeX
  const htmlContent = `${displayStyle}${formula}${endStyle}`;

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ 
        wordBreak: 'break-word', 
        display: display ? 'block' : 'inline-block',
        overflow: 'visible',
        minHeight: display ? '2rem' : 'auto',
        textAlign: display ? 'center' : 'inherit'
      }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
