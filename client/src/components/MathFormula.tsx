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
    // Aguardar um pouco para garantir que MathJax está pronto
    const timer = setTimeout(() => {
      if (ref.current && (window as any).MathJax) {
        try {
          (window as any).MathJax.typesetPromise([ref.current]).catch((err: any) => console.log('MathJax error:', err));
        } catch (e) {
          console.log('MathJax not ready yet');
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [formula]);

  const displayStyle = display ? '$$' : '$';
  const content = `${displayStyle}${formula}${displayStyle}`;

  return (
    <div ref={ref} className={className} style={{ wordBreak: 'break-word' }}>
      {content}
    </div>
  );
}
