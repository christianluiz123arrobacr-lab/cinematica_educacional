import { useEffect, useRef, useState } from 'react';

interface MathFormulaProps {
  children?: string;
  formula?: string;
  inline?: boolean;
  display?: boolean;
  className?: string;
}

// Global rendering queue to prevent race conditions
class MathJaxQueue {
  private queue: Array<() => Promise<void>> = [];
  private isProcessing = false;

  async add(renderFn: () => Promise<void>) {
    this.queue.push(renderFn);
    if (!this.isProcessing) {
      await this.process();
    }
  }

  private async process() {
    if (this.queue.length === 0) {
      this.isProcessing = false;
      return;
    }

    this.isProcessing = true;
    const renderFn = this.queue.shift();
    
    if (renderFn) {
      try {
        await renderFn();
      } catch (error) {
        // Silently ignore errors in production
        if (process.env.NODE_ENV === 'development') {
          console.warn('MathJax render warning:', error);
        }
      }
    }

    // Small delay between renders for mobile stability
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Process next item
    await this.process();
  }
}

// Global singleton queue
const mathJaxQueue = new MathJaxQueue();

export function MathFormula({ children, formula, inline, display, className = '' }: MathFormulaProps) {
  // Determine display mode: inline prop takes precedence, then display prop, default to true
  const isDisplay = inline !== undefined ? !inline : (display !== undefined ? display : true);
  
  // Use children if provided, otherwise use formula
  const content = children || formula || '';
  
  // Use a generic ref that can handle both div and span
  const ref = useRef<HTMLElement>(null);
  
  // Track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  
  // Track if this instance has been rendered
  const hasRenderedRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      hasRenderedRef.current = false;
    };
  }, []);

  useEffect(() => {
    // Safety checks before rendering
    if (!isMounted || !ref.current || hasRenderedRef.current) return;
    
    // Check if element is still in the DOM
    if (!document.body.contains(ref.current)) return;

    // Função para renderizar MathJax com segurança
    const renderMath = async () => {
      if (typeof window === 'undefined' || !(window as any).MathJax) return;
      
      // Check again if component is still mounted and element exists
      if (!isMounted || !ref.current || !document.body.contains(ref.current)) return;
      
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
          hasRenderedRef.current = true;
        }
      } catch (error) {
        // Only log in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('MathJax render warning:', error);
        }
      }
    };

    // Add to global queue instead of rendering immediately
    // This prevents race conditions when multiple formulas render simultaneously
    mathJaxQueue.add(renderMath);

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
