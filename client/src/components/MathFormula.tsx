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
    if (ref.current && (window as any).MathJax) {
      (window as any).MathJax.typesetPromise([ref.current]).catch((err: any) => console.log(err));
    }
  }, [formula]);

  const displayStyle = display ? '$$' : '$';
  const content = `${displayStyle}${formula}${displayStyle}`;

  return (
    <div ref={ref} className={className}>
      {content}
    </div>
  );
}
