export type QuestionOption = {
  id: string;
  label: string;
  text: string;
};

export type QuestionDifficulty = "facil" | "medio" | "dificil";

export type Question = {
  id: string;
  subject: "fisica" | "matematica";
  topic: string;
  subtopic?: string;
  exam: string;
  year: number;
  institution?: string;
  statement: string;
  formula?: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  difficulty: QuestionDifficulty;
  tags?: string[];
  source?: string;
};
