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
  topic: string;
  subtopic?: string;
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
