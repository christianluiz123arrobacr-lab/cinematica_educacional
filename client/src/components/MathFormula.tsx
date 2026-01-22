import { useEffect, useRef } from 'react';

interface MathFormulaProps {
  formula: string;
  display?: boolean;
  className?: string;
}

export function MathFormula({ formula, display = true, className = '' }: MathFormulaProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Função para renderizar MathJax
    const renderMath = async () => {
      if (typeof window !== 'undefined' && (window as any).MathJax) {
        try {
          // Limpar renderizações anteriores
          (window as any).MathJax.typesetClear?.([ref.current]);
          
          // Renderizar o elemento específico
          await (window as any).MathJax.typesetPromise?.([ref.current]);
        } catch (error) {
          console.log('MathJax render error:', error);
        }
      }
    };

    // Renderizar imediatamente
    renderMath();

    // Também renderizar após um pequeno delay para garantir
    const timer = setTimeout(renderMath, 100);
    return () => clearTimeout(timer);
  }, [formula]);

  // Delimitadores corretos: $$ para display, $ para inline
  const delimiter = display ? '$$' : '$';
  const content = `${delimiter}${formula}${delimiter}`;

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
        minHeight: display ? '2.5rem' : 'auto',
        border: 'none',
        background: 'transparent',
        lineHeight: display ? '1.5' : 'inherit'
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
