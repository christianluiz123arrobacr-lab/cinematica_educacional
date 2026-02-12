/**
 * Sistema de Tipagem Centralizado - Contratos de Domínio
 * 
 * Define contratos explícitos para todos os módulos educacionais do sistema.
 * Garante consistência, escalabilidade e facilita manutenção futura.
 */

// ============================================================================
// MÓDULO DE DOMÍNIO PRINCIPAL
// ============================================================================

/**
 * Contrato principal de um módulo de domínio (ex: Cinemática, Dinâmica)
 */
export interface DomainModule {
  /** Identificador único do domínio (ex: 'kinematics', 'dynamics') */
  id: string;
  
  /** Nome exibido ao usuário */
  name: string;
  
  /** Descrição breve do domínio */
  description: string;
  
  /** Ícone do domínio (lucide-react icon name) */
  icon: string;
  
  /** Cor temática do domínio (hex ou tailwind class) */
  color: string;
  
  /** Módulo de teoria (obrigatório) */
  theory: TheoryModule;
  
  /** Módulo de exercícios (opcional) */
  exercises?: ExerciseModule;
  
  /** Módulo de simuladores (opcional) */
  simulators?: SimulatorModule;
  
  /** Módulo de calculadoras (opcional) */
  calculators?: CalculatorModule;
  
  /** Módulo de gráficos (opcional) */
  graphs?: GraphModule;
}

// ============================================================================
// MÓDULO DE TEORIA
// ============================================================================

/**
 * Módulo de teoria contendo tópicos educacionais
 */
export interface TheoryModule {
  /** Lista de tópicos do domínio */
  topics: Topic[];
}

/**
 * Tópico individual de teoria (ex: "Velocidade", "MRU")
 */
export interface Topic {
  /** Identificador único do tópico */
  id: string;
  
  /** Título do tópico */
  title: string;
  
  /** Descrição breve */
  description: string;
  
  /** Seções do tópico */
  sections: Section[];
  
  /** Metadados para versionamento e progresso */
  metadata: TopicMetadata;
}

/**
 * Seção dentro de um tópico
 */
export interface Section {
  /** Identificador único da seção */
  id: string;
  
  /** Título da seção */
  title: string;
  
  /** Ícone da seção (opcional) */
  icon?: string;
  
  /** Conteúdo serializável da seção */
  content: ContentBlock[];
}

/**
 * Metadados de um tópico para versionamento e progresso
 */
export interface TopicMetadata {
  /** Versão do conteúdo (semver: "1.0.0") */
  version: string;
  
  /** Data da última atualização */
  lastUpdated: Date;
  
  /** Nível de dificuldade */
  difficulty: 'basic' | 'intermediate' | 'advanced' | 'ita-ime';
  
  /** Tempo estimado de estudo (minutos) */
  estimatedTime: number;
  
  /** IDs de tópicos pré-requisitos */
  prerequisites: string[];
  
  /** Tags para busca e categorização */
  tags: string[];
  
  /** Autores/contribuidores */
  authors?: string[];
}

// ============================================================================
// SISTEMA DE BLOCOS DE CONTEÚDO SERIALIZÁVEL
// ============================================================================

/**
 * União de todos os tipos de blocos de conteúdo
 * Permite serialização para JSON, exportação para PDF, API, etc.
 */
export type ContentBlock =
  | TextBlock
  | FormulaBlock
  | ExampleBlock
  | ListBlock
  | ImageBlock
  | VideoBlock
  | TableBlock
  | QuoteBlock
  | AlertBlock
  | DividerBlock
  | InteractiveBlock;

/**
 * Bloco de texto simples
 */
export interface TextBlock {
  type: 'text';
  content: string;
  style?: 'normal' | 'highlight' | 'bold' | 'italic';
}

/**
 * Bloco de fórmula matemática (LaTeX)
 */
export interface FormulaBlock {
  type: 'formula';
  
  /** Fórmula em LaTeX */
  latex: string;
  
  /** Explicação termo-a-termo */
  explanation: TermExplanation[];
  
  /** Modo de exibição */
  display: 'inline' | 'block';
  
  /** Título da fórmula (opcional) */
  title?: string;
}

/**
 * Explicação de um termo em uma fórmula
 */
export interface TermExplanation {
  /** Símbolo/termo (ex: "v", "Δt") */
  term: string;
  
  /** Significado do termo */
  meaning: string;
  
  /** Unidade de medida (opcional) */
  unit?: string;
  
  /** Exemplo numérico (opcional) */
  example?: string;
}

/**
 * Bloco de exemplo resolvido
 */
export interface ExampleBlock {
  type: 'example';
  
  /** Título do exemplo */
  title: string;
  
  /** Enunciado do problema */
  problem: string;
  
  /** Dados fornecidos (opcional) */
  givenData?: string[];
  
  /** Passos da solução */
  solution: SolutionStep[];
  
  /** Nível de dificuldade */
  difficulty: 'basic' | 'intermediate' | 'advanced' | 'ita-ime';
  
  /** Origem (opcional, ex: "ITA 2020", "IME 2019") */
  source?: string;
}

/**
 * Passo de uma solução
 */
export interface SolutionStep {
  /** Descrição do passo */
  description: string;
  
  /** Fórmula usada (LaTeX, opcional) */
  formula?: string;
  
  /** Cálculo realizado (opcional) */
  calculation?: string;
  
  /** Resultado do passo (opcional) */
  result?: string;
}

/**
 * Bloco de lista
 */
export interface ListBlock {
  type: 'list';
  
  /** Tipo de lista */
  listType: 'ordered' | 'unordered';
  
  /** Itens da lista */
  items: ListItem[];
  
  /** Título da lista (opcional) */
  title?: string;
}

/**
 * Item de lista (pode conter sub-itens)
 */
export interface ListItem {
  content: string;
  subItems?: ListItem[];
}

/**
 * Bloco de imagem
 */
export interface ImageBlock {
  type: 'image';
  
  /** URL da imagem */
  url: string;
  
  /** Texto alternativo */
  alt: string;
  
  /** Legenda (opcional) */
  caption?: string;
  
  /** Largura (opcional, ex: "100%", "500px") */
  width?: string;
}

/**
 * Bloco de vídeo
 */
export interface VideoBlock {
  type: 'video';
  
  /** URL do vídeo */
  url: string;
  
  /** Título do vídeo */
  title: string;
  
  /** Descrição (opcional) */
  description?: string;
}

/**
 * Bloco de tabela
 */
export interface TableBlock {
  type: 'table';
  
  /** Cabeçalhos das colunas */
  headers: string[];
  
  /** Linhas da tabela */
  rows: string[][];
  
  /** Título da tabela (opcional) */
  title?: string;
}

/**
 * Bloco de citação
 */
export interface QuoteBlock {
  type: 'quote';
  
  /** Texto da citação */
  content: string;
  
  /** Autor (opcional) */
  author?: string;
  
  /** Fonte (opcional) */
  source?: string;
}

/**
 * Bloco de alerta/aviso
 */
export interface AlertBlock {
  type: 'alert';
  
  /** Conteúdo do alerta */
  content: string;
  
  /** Tipo de alerta */
  variant: 'info' | 'warning' | 'success' | 'error';
  
  /** Título do alerta (opcional) */
  title?: string;
}

/**
 * Bloco divisor
 */
export interface DividerBlock {
  type: 'divider';
}

/**
 * Bloco interativo (placeholder para futuras interações)
 */
export interface InteractiveBlock {
  type: 'interactive';
  
  /** Tipo de interação */
  interactionType: 'quiz' | 'drag-drop' | 'fill-blank' | 'custom';
  
  /** Dados da interação (formato livre) */
  data: Record<string, unknown>;
}

// ============================================================================
// MÓDULO DE EXERCÍCIOS
// ============================================================================

/**
 * Módulo de exercícios e quizzes
 */
export interface ExerciseModule {
  /** Lista de conjuntos de exercícios */
  exerciseSets: ExerciseSet[];
}

/**
 * Conjunto de exercícios sobre um tema
 */
export interface ExerciseSet {
  /** Identificador único */
  id: string;
  
  /** Título do conjunto */
  title: string;
  
  /** Descrição */
  description: string;
  
  /** Lista de exercícios */
  exercises: Exercise[];
}

/**
 * Exercício individual
 */
export interface Exercise {
  /** Identificador único */
  id: string;
  
  /** Enunciado */
  question: string;
  
  /** Tipo de exercício */
  type: 'multiple-choice' | 'numeric' | 'open-ended';
  
  /** Opções (para múltipla escolha) */
  options?: ExerciseOption[];
  
  /** Resposta correta */
  correctAnswer: string | number;
  
  /** Explicação da resposta */
  explanation?: string;
  
  /** Dificuldade */
  difficulty: 'basic' | 'intermediate' | 'advanced' | 'ita-ime';
  
  /** Pontos */
  points: number;
}

/**
 * Opção de exercício de múltipla escolha
 */
export interface ExerciseOption {
  id: string;
  text: string;
}

// ============================================================================
// MÓDULO DE SIMULADORES
// ============================================================================

/**
 * Módulo de simuladores interativos
 */
export interface SimulatorModule {
  /** Lista de simuladores */
  simulators: SimulatorDefinition[];
}

/**
 * Definição completa de um simulador
 */
export interface SimulatorDefinition {
  /** Identificador único */
  id: string;
  
  /** Título do simulador */
  title: string;
  
  /** Descrição */
  description: string;
  
  /** Motor de física (lógica pura) */
  physics: PhysicsEngine;
  
  /** Estado inicial */
  initialState: SimulatorState;
  
  /** Controles do usuário */
  controls: SimulatorControl[];
  
  /** Configuração de visualização */
  visualization: VisualizationConfig;
}

/**
 * Motor de física (lógica pura, sem UI)
 */
export interface PhysicsEngine {
  /** Equações físicas */
  equations: Equation[];
  
  /** Restrições do sistema */
  constraints: Constraint[];
  
  /** Função de atualização do estado */
  update: (state: SimulatorState, dt: number) => SimulatorState;
}

/**
 * Equação física
 */
export interface Equation {
  /** Nome da equação */
  name: string;
  
  /** Fórmula em LaTeX */
  formula: string;
  
  /** Função de cálculo */
  compute: (state: SimulatorState) => number;
}

/**
 * Restrição do sistema
 */
export interface Constraint {
  /** Nome da restrição */
  name: string;
  
  /** Função de validação */
  validate: (state: SimulatorState) => boolean;
  
  /** Mensagem de erro */
  errorMessage: string;
}

/**
 * Estado do simulador (valores das variáveis)
 */
export interface SimulatorState {
  [key: string]: number | number[] | boolean | string;
}

/**
 * Controle do simulador
 */
export interface SimulatorControl {
  /** Identificador único */
  id: string;
  
  /** Label exibido */
  label: string;
  
  /** Tipo de controle */
  type: 'slider' | 'input' | 'toggle' | 'select';
  
  /** Valor mínimo (para slider/input) */
  min?: number;
  
  /** Valor máximo (para slider/input) */
  max?: number;
  
  /** Passo (para slider/input) */
  step?: number;
  
  /** Unidade de medida */
  unit?: string;
  
  /** Valor padrão */
  defaultValue: number | boolean | string;
  
  /** Opções (para select) */
  options?: { value: string; label: string }[];
}

/**
 * Configuração de visualização
 */
export interface VisualizationConfig {
  /** Tipo de visualização */
  type: 'canvas' | 'svg' | 'chart';
  
  /** Dimensões */
  width: number;
  height: number;
  
  /** Configurações específicas do tipo */
  config: Record<string, unknown>;
}

// ============================================================================
// MÓDULO DE CALCULADORAS
// ============================================================================

/**
 * Módulo de calculadoras
 */
export interface CalculatorModule {
  /** Lista de calculadoras */
  calculators: CalculatorDefinition[];
}

/**
 * Definição de calculadora
 */
export interface CalculatorDefinition {
  /** Identificador único */
  id: string;
  
  /** Título */
  title: string;
  
  /** Descrição */
  description: string;
  
  /** Campos de entrada */
  inputs: CalculatorInput[];
  
  /** Campos de saída */
  outputs: CalculatorOutput[];
  
  /** Função de cálculo */
  calculate: (inputs: Record<string, number>) => Record<string, number>;
}

/**
 * Campo de entrada de calculadora
 */
export interface CalculatorInput {
  id: string;
  label: string;
  unit?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
}

/**
 * Campo de saída de calculadora
 */
export interface CalculatorOutput {
  id: string;
  label: string;
  unit?: string;
  precision?: number;
}

// ============================================================================
// MÓDULO DE GRÁFICOS
// ============================================================================

/**
 * Módulo de gráficos
 */
export interface GraphModule {
  /** Lista de gráficos */
  graphs: GraphDefinition[];
}

/**
 * Definição de gráfico
 */
export interface GraphDefinition {
  /** Identificador único */
  id: string;
  
  /** Título */
  title: string;
  
  /** Descrição */
  description: string;
  
  /** Tipo de gráfico */
  type: 'line' | 'scatter' | 'bar' | 'area';
  
  /** Configuração dos eixos */
  axes: {
    x: AxisConfig;
    y: AxisConfig;
  };
  
  /** Função geradora de dados */
  dataGenerator: (params: Record<string, number>) => GraphDataPoint[];
}

/**
 * Configuração de eixo
 */
export interface AxisConfig {
  label: string;
  unit?: string;
  min?: number;
  max?: number;
}

/**
 * Ponto de dados do gráfico
 */
export interface GraphDataPoint {
  x: number;
  y: number;
  label?: string;
}

// ============================================================================
// SISTEMA DE PROGRESSO (PREPARAÇÃO FUTURA)
// ============================================================================

/**
 * Progresso do usuário em um tópico
 */
export interface TopicProgress {
  topicId: string;
  completed: boolean;
  progress: number; // 0-100
  timeSpent: number; // minutos
  lastAccessed: Date;
  exercisesCompleted: number;
  exercisesTotal: number;
}

/**
 * Progresso do usuário em um domínio
 */
export interface DomainProgress {
  domainId: string;
  topics: TopicProgress[];
  overallProgress: number; // 0-100
}
