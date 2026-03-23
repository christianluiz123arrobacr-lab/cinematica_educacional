import type { Question } from "@/types/question";

export const questionsMock: Question[] = [
  {
    id: "espcex-fisica-2022-001",
    subject: "fisica",
    topic: "cinematica",
    subtopic: "mru",
    exam: "EsPCEx",
    year: 2022,
    institution: "EsPCEx",
    statement:
      "Um móvel percorre 120 m em 6 s com velocidade constante. Qual é sua velocidade?",
    options: [
      { id: "a", label: "A", text: "10 m/s" },
      { id: "b", label: "B", text: "20 m/s" },
      { id: "c", label: "C", text: "30 m/s" },
      { id: "d", label: "D", text: "40 m/s" },
      { id: "e", label: "E", text: "50 m/s" },
    ],
    correctOptionId: "b",
    explanation:
      "No MRU, v = Δs / Δt. Logo, v = 120 / 6 = 20 m/s.",
    difficulty: "facil",
    tags: ["mru", "velocidade", "cinematica"],
    source: "EsPCEx 2022",
  },
  {
    id: "epcar-fisica-2021-001",
    subject: "fisica",
    topic: "cinematica",
    subtopic: "queda-livre",
    exam: "EPCAR",
    year: 2021,
    institution: "EPCAR",
    statement:
      "Um corpo é abandonado do repouso e leva 4 s para atingir o solo. Adote g = 10 m/s². Qual a altura da queda?",
    options: [
      { id: "a", label: "A", text: "20 m" },
      { id: "b", label: "B", text: "40 m" },
      { id: "c", label: "C", text: "60 m" },
      { id: "d", label: "D", text: "80 m" },
      { id: "e", label: "E", text: "100 m" },
    ],
    correctOptionId: "d",
    explanation:
      "Na queda livre, h = g.t²/2 = 10 × 16 / 2 = 80 m.",
    difficulty: "medio",
    tags: ["queda livre", "gravidade"],
    source: "EPCAR 2021",
  },
];
