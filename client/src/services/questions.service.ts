import { questionsMock } from "@/data/questions";
import type { Question, QuestionDifficulty, QuestionSubject } from "@/types/question";

export type QuestionFilters = {
  subject?: QuestionSubject;
  topic?: string;
  subtopic?: string;
  exam?: string;
  year?: number;
  difficulty?: QuestionDifficulty;
  institution?: string;
  isPublished?: boolean;
};

export async function getQuestions(filters?: QuestionFilters): Promise<Question[]> {
  let result = [...questionsMock];

  if (filters?.subject) {
    result = result.filter((q) => q.subject === filters.subject);
  }

  if (filters?.topic) {
    result = result.filter((q) => q.topic === filters.topic);
  }

  if (filters?.subtopic) {
    result = result.filter((q) => q.subtopic === filters.subtopic);
  }

  if (filters?.exam) {
    result = result.filter((q) => q.exam === filters.exam);
  }

  if (filters?.year) {
    result = result.filter((q) => q.year === filters.year);
  }

  if (filters?.difficulty) {
    result = result.filter((q) => q.difficulty === filters.difficulty);
  }

  if (filters?.institution) {
    result = result.filter((q) => q.institution === filters.institution);
  }

  if (filters?.isPublished !== undefined) {
    result = result.filter((q) => q.isPublished === filters.isPublished);
  }

  return result;
}

export async function getQuestionById(id: string): Promise<Question | null> {
  return questionsMock.find((q) => q.id === id) ?? null;
}
