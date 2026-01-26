import { useEffect, useRef } from 'react';

interface MathFormulaProps {
  formula: string;
  display?: boolean;
  className?: string;
}

export function MathFormula({ formula, display = true, className = '' }: MathFormulaProps) {
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
  const delimiter = display ? '$$' : '$';
  
  // Remover delimitadores se já existirem na fórmula
  let cleanFormula = formula.trim();
  if (cleanFormula.startsWith('$$') && cleanFormula.endsWith('$$')) {
    cleanFormula = cleanFormula.slice(2, -2).trim();
  } else if (cleanFormula.startsWith('$') && cleanFormula.endsWith('$')) {
    cleanFormula = cleanFormula.slice(1, -1).trim();
  }
  
  const content = `${delimiter}${cleanFormula}${delimiter}`;

  const style = {
    display: display ? 'block' : 'inline-block',
    textAlign: display ? 'center' : ('inherit' as any),
    padding: display ? '1rem 0' : '0',
    margin: display ? '0.5rem 0' : '0',
    overflow: 'visible',
    minHeight: display ? '2.5rem' : 'auto',
    border: 'none',
    background: 'transparent',
    lineHeight: display ? '1.5' : 'inherit',
    fontFamily: 'inherit'
  };

  if (display) {
    return (
      <div
        ref={ref as any}
        className={className}
        style={style}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <span
      ref={ref as any}
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
