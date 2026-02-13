import { useEffect, useRef } from 'react';

interface MathFormulaProps {
  children?: string;
  formula?: string;
  inline?: boolean;
  display?: boolean;
  className?: string;
}

export function MathFormula({ children, formula, inline, display, className = '' }: MathFormulaProps) {
  // Determine display mode: inline prop takes precedence, then display prop, default to true
  const isDisplay = inline !== undefined ? !inline : (display !== undefined ? display : true);
  
  // Use children if provided, otherwise use formula
  const content = children || formula || '';
  // Use a generic ref that can handle both div and span
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Função para renderizar MathJax
    const renderMath = async () => {
      if (typeof window !== 'undefined' && (window as any).MathJax) {
        try {
          // Renderizar o elemento específico
          await (window as any).MathJax.typesetPromise?.([ref.current]);
        } catch (error) {
          console.error('MathJax render error:', error);
        }
      }
    };

    // Renderizar com delay para garantir que o DOM está pronto
    const timer = setTimeout(renderMath, 50);
    return () => clearTimeout(timer);
  }, [formula, display]);

  // Delimitadores corretos: $$ para display, $ para inline
  const delimiter = isDisplay ? '$$' : '$';
  
  // Remover delimitadores se já existirem na fórmula
  let cleanFormula = content.trim();
  if (cleanFormula.startsWith('$$') && cleanFormula.endsWith('$$')) {
    cleanFormula = cleanFormula.slice(2, -2).trim();
  } else if (cleanFormula.startsWith('$') && cleanFormula.endsWith('$')) {
    cleanFormula = cleanFormula.slice(1, -1).trim();
  }
  
  const mathContent = `${delimiter}${cleanFormula}${delimiter}`;

  const style = {
    display: isDisplay ? 'block' : 'inline-block',
    textAlign: isDisplay ? 'center' : ('inherit' as any),
    padding: isDisplay ? '1rem 0' : '0',
    margin: isDisplay ? '0.5rem 0' : '0',
    overflow: 'visible',
    minHeight: isDisplay ? '2.5rem' : 'auto',
    border: 'none',
    background: 'transparent',
    lineHeight: isDisplay ? '1.5' : 'inherit',
    fontFamily: 'inherit'
  };

  if (isDisplay) {
    return (
      <div
        ref={ref as any}
        className={className}
        style={style}
        dangerouslySetInnerHTML={{ __html: mathContent }}
      />
    );
  }

  return (
    <span
      ref={ref as any}
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: mathContent }}
    />
  );
}
