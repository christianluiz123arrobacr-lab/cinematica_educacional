/**
 * Tipos para o Sistema de Renderização de Conteúdo
 * 
 * Define contratos para renderização genérica de blocos de conteúdo.
 */

import type { ContentBlock } from './domain';

/**
 * Props do renderizador principal
 */
export interface ContentRendererProps {
  /** Blocos de conteúdo a serem renderizados */
  blocks: ContentBlock[];
  
  /** Classe CSS adicional (opcional) */
  className?: string;
}

/**
 * Props genéricas para renderizadores de blocos individuais
 */
export interface BlockRendererProps<T extends ContentBlock> {
  /** Dados do bloco */
  block: T;
  
  /** Índice do bloco na lista */
  index: number;
  
  /** Classe CSS adicional (opcional) */
  className?: string;
}

/**
 * Registro de renderizadores por tipo de bloco
 */
export type BlockRendererRegistry = {
  [K in ContentBlock['type']]: React.ComponentType<BlockRendererProps<Extract<ContentBlock, { type: K }>>>;
};

/**
 * Configuração de tema para renderização
 */
export interface RenderTheme {
  /** Cores */
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
  
  /** Espaçamentos */
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  
  /** Tipografia */
  typography: {
    fontFamily: string;
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

/**
 * Contexto de renderização (para passar dados entre blocos)
 */
export interface RenderContext {
  /** Tema atual */
  theme: RenderTheme;
  
  /** Modo de renderização */
  mode: 'web' | 'pdf' | 'mobile' | 'print';
  
  /** Callbacks personalizados */
  callbacks?: {
    onFormulaClick?: (latex: string) => void;
    onExampleExpand?: (exampleId: string) => void;
    onImageClick?: (url: string) => void;
  };
}
