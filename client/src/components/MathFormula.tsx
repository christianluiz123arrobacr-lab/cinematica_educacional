import { useEffect, useRef, useState } from 'react';

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
  
  // Track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  
  // Track rendering state to prevent multiple renders
  const isRenderingRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      isRenderingRef.current = false;
    };
  }, []);

  useEffect(() => {
    // Safety checks before rendering
    if (!isMounted || !ref.current || isRenderingRef.current) return;
    
    // Check if element is still in the DOM
    if (!document.body.contains(ref.current)) return;

    // Função para renderizar MathJax com segurança
    const renderMath = async () => {
      if (typeof window === 'undefined' || !(window as any).MathJax) return;
      
      // Check again if component is still mounted and element exists
      if (!isMounted || !ref.current || !document.body.contains(ref.current)) return;
      
      // Mark as rendering to prevent concurrent renders
      isRenderingRef.current = true;
      
      try {
        // Clear any existing MathJax content first
        const mjxContainers = ref.current.querySelectorAll('mjx-container');
        mjxContainers.forEach(container => {
          try {
            if (container.parentNode === ref.current) {
              container.remove();
            }
          } catch (e) {
            // Silently ignore removal errors
          }
        });
        
        // Render the element with safety checks
        if (ref.current && document.body.contains(ref.current)) {
          await (window as any).MathJax.typesetPromise?.([ref.current]);
        }
      } catch (error) {
        // Only log in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('MathJax render warning:', error);
        }
      } finally {
        isRenderingRef.current = false;
      }
    };

    // Use requestAnimationFrame for better mobile performance
    const rafId = requestAnimationFrame(() => {
      // Add small delay to ensure DOM is ready
      const timer = setTimeout(renderMath, 100);
      return () => clearTimeout(timer);
    });

    return () => {
      cancelAnimationFrame(rafId);
      isRenderingRef.current = false;
    };
  }, [content, isDisplay, isMounted]);

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
