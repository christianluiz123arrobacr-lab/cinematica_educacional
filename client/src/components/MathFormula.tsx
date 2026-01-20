import { useEffect, useRef } from 'react';
import { useMathJax } from '@/hooks/useMathJax';

interface MathFormulaProps {
  formula: string;
  display?: boolean;
  className?: string;
}

export function MathFormula({ formula, display = true, className = '' }: MathFormulaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { renderMath } = useMathJax();

  useEffect(() => {
    if (ref.current) {
      // Renderizar MathJax no elemento específico após um pequeno delay
      const timer = setTimeout(() => {
        renderMath(ref.current);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [formula, renderMath]);

  // Usar delimitadores corretos: $ $ para inline, $$ $$ para display
  const delimiter = display ? '$$' : '$';
  const htmlContent = `${delimiter}${formula}${delimiter}`;

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        display: display ? 'block' : 'inline-block',
        textAlign: display ? 'center' : 'inherit',
        padding: display ? '1rem 0' : '0',
        margin: display ? '0.5rem 0' : '0',
        overflow: 'visible',
        minHeight: display ? '2rem' : 'auto',
        border: 'none',
        background: 'transparent'
      }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
