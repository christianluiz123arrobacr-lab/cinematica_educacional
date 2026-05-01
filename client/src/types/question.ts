export type QuestionOption = {
  id: string;
  label: string;
  text?: string;
  imageUrl?: string;
};

export type QuestionDifficulty = "facil" | "medio" | "dificil";

export type QuestionSubject = "fisica" | "matematica" | "quimica";

export type ExplanationBlock = {
  type: "texto" | "latex" | "imagem";
  content?: string;
  imageUrl?: string;
  order: number;
};

export type Question = {
  id: string;
  codigo?: string;
  subject: QuestionSubject;

  /**
   * Campo legado/principal único usado por componentes antigos.
   * Ele continua sendo preenchido com o primeiro item de topics.
   */
  topic: string;

  /**
   * Nova lista de conteúdos da questão.
   * Ex.: ["cinemática", "dinâmica"].
   */
  topics?: string[];

  /**
   * Campo legado/principal único usado por componentes antigos.
   * Ele continua sendo preenchido com o primeiro item de subtopics.
   */
  subtopic?: string;

  /**
   * Nova lista de assuntos da questão.
   * Ex.: ["mru", "gráficos", "leis de newton"].
   */
  subtopics?: string[];

  exam: string;
  year: number;
  institution?: string;
  statement: string;
  statementAfterImage?: string;
  formula?: string;
  imageUrl?: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  explanationBlocks: ExplanationBlock[];
  difficulty: QuestionDifficulty;
  tags?: string[];
  source?: string;
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
