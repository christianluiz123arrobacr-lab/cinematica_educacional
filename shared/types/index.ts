/**
 * Barrel Export - Sistema de Tipagem Centralizado
 * 
 * Exporta todos os tipos do sistema para facilitar imports.
 * Uso: import { DomainModule, Topic, ContentBlock } from '@/shared/types';
 */

// Tipos de domínio
export type {
  // Módulo principal
  DomainModule,
  
  // Teoria
  TheoryModule,
  Topic,
  Section,
  TopicMetadata,
  
  // Blocos de conteúdo
  ContentBlock,
  TextBlock,
  FormulaBlock,
  TermExplanation,
  ExampleBlock,
  SolutionStep,
  ListBlock,
  ListItem,
  ImageBlock,
  VideoBlock,
  TableBlock,
  QuoteBlock,
  AlertBlock,
  DividerBlock,
  InteractiveBlock,
  
  // Exercícios
  ExerciseModule,
  ExerciseSet,
  Exercise,
  ExerciseOption,
  
  // Simuladores
  SimulatorModule,
  SimulatorDefinition,
  PhysicsEngine,
  Equation,
  Constraint,
  SimulatorState,
  SimulatorControl,
  VisualizationConfig,
  
  // Calculadoras
  CalculatorModule,
  CalculatorDefinition,
  CalculatorInput,
  CalculatorOutput,
  
  // Gráficos
  GraphModule,
  GraphDefinition,
  AxisConfig,
  GraphDataPoint,
  
  // Progresso (futuro)
  TopicProgress,
  DomainProgress,
} from './domain';

// Tipos de renderização
export type {
  ContentRendererProps,
  BlockRendererProps,
  BlockRendererRegistry,
  RenderTheme,
  RenderContext,
} from './content-renderer';
