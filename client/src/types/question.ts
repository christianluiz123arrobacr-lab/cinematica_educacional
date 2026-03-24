export type QuestionOption = {
  id: string;
  label: string;
  text: string;
};

export type QuestionDifficulty = "I" | "II" | "III";

export type QuestionSubject = "fisica" | "matematica" | "quimica";

export type Question = {
  id: string;
  subject: QuestionSubject;
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
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
