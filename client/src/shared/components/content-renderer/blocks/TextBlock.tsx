/**
 * Renderizador de Bloco de Texto
 */

import type { TextBlock } from '@/shared/types';
import type { BlockRendererProps } from '@/shared/types/content-renderer';

export function TextBlockRenderer({ block }: BlockRendererProps<TextBlock>) {
  const { content, style = 'normal' } = block;
  
  const styleClasses = {
    normal: 'text-slate-700',
    highlight: 'bg-yellow-50 border-l-4 border-yellow-400 pl-4 py-2',
    bold: 'font-semibold text-slate-900',
    italic: 'italic text-slate-600',
  };
  
  return (
    <p className={`leading-relaxed ${styleClasses[style]}`}>
      {content}
    </p>
  );
}
