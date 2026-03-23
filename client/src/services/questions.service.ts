import { questionsMock } from "@/data/questions";
import type { Question } from "@/types/question";

type QuestionFilters = {
  subject?: string;
  topic?: string;
  exam?: string;
  year?: number;
};

export async function getQuestions(filters?: QuestionFilters): Promise<Question[]> {
  let result = [...questionsMock];

  if (filters?.subject) {
    result = result.filter((q) => q.subject === filters.subject);
  }

  if (filters?.topic) {
    result = result.filter((q) => q.topic === filters.topic);
  }

  if (filters?.exam) {
    result = result.filter((q) => q.exam === filters.exam);
  }

  if (filters?.year) {
    result = result.filter((q) => q.year === filters.year);
  }

  return result;
}

export async function getQuestionById(id: string): Promise<Question | null> {
  return questionsMock.find((q) => q.id === id) ?? null;
}
