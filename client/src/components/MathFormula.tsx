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
      // Renderizar MathJax imediatamente
      renderMath();
    }
  }, [isReady, formula, renderMath]);

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
        overflow: 'visible',
        minHeight: display ? '2rem' : 'auto'
      }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
