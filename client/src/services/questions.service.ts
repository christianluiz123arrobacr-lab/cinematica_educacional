import { supabase } from "@/lib/supabase";
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

type QuestaoRow = {
  id: string;
  diciplina?: string;
  disciplina?: string;
  assunto: string;
  conteudo?: string | null;
  banca?: string | null;
  ano: number;
  dificuldade: QuestionDifficulty;
  enunciado?: string | null;
  url_imagem?: string | null;
  formula?: string | null;
  a?: string | null;
  b?: string | null;
  c?: string | null;
  d?: string | null;
  e?: string | null;
  A?: string | null;
  B?: string | null;
  C?: string | null;
  D?: string | null;
  E?: string | null;
  alternativa_correta: string;
  intituição?: string | null;
  instituicao?: string | null;
  fonte?: string | null;
  tag?: string | null;
  publicada?: boolean | null;
  created_at?: string | null;
  resolucoes?: {
    id: string;
    tipo: string;
    texto?: string | null;
    ordem?: number | null;
  }[];
};

function normalizarAlternativas(row: QuestaoRow) {
  const altA = row.a ?? row.A ?? "";
  const altB = row.b ?? row.B ?? "";
  const altC = row.c ?? row.C ?? "";
  const altD = row.d ?? row.D ?? "";
  const altE = row.e ?? row.E ?? "";

  return [
    altA ? { id: "a", label: "A", text: altA } : null,
    altB ? { id: "b", label: "B", text: altB } : null,
    altC ? { id: "c", label: "C", text: altC } : null,
    altD ? { id: "d", label: "D", text: altD } : null,
    altE ? { id: "e", label: "E", text: altE } : null,
  ].filter(Boolean) as Question["options"];
}

function mapQuestao(row: QuestaoRow): Question {
  const resolucaoTexto =
    row.resolucoes
      ?.filter((r) => r.tipo === "texto" && r.texto)
      ?.sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0))
      ?.map((r) => r.texto)
      ?.join("\n\n") || "Sem resolução cadastrada.";

  const disciplina = (row.disciplina ?? row.diciplina ?? "fisica").toLowerCase() as QuestionSubject;

  return {
    id: row.id,
    subject: disciplina,
    topic: (row.conteudo ?? row.assunto ?? "").toLowerCase(),
    subtopic: row.assunto?.toLowerCase(),
    exam: row.banca ?? "Sem banca",
    year: row.ano,
    institution: row.instituicao ?? row.intituição ?? undefined,
    statement: row.enunciado ?? "Sem enunciado cadastrado.",
    formula: row.formula ?? undefined,
    imageUrl: row.url_imagem ?? undefined,
    options: normalizarAlternativas(row),
    correctOptionId: row.alternativa_correta.toLowerCase().trim(),
    explanation: resolucaoTexto,
    difficulty: row.dificuldade,
    tags: row.tag ? row.tag.split(",").map((t) => t.trim()) : [],
    source: row.fonte ?? undefined,
    isPublished: row.publicada ?? true,
    createdAt: row.created_at ?? undefined,
    updatedAt: row.created_at ?? undefined,
  };
}

export async function getQuestions(filters?: QuestionFilters): Promise<Question[]> {
  let query = supabase
    .from("questoes")
    .select(`
      *,
      resolucoes (
        id,
        tipo,
        texto,
        ordem
      )
    `);

  if (filters?.subject) {
    query = query.or(`disciplina.eq.${filters.subject},diciplina.eq.${filters.subject}`);
  }

  if (filters?.topic) {
    query = query.ilike("conteudo", filters.topic);
  }

  if (filters?.subtopic) {
    query = query.ilike("assunto", filters.subtopic);
  }

  if (filters?.exam) {
    query = query.eq("banca", filters.exam);
  }

  if (filters?.year) {
    query = query.eq("ano", filters.year);
  }

  if (filters?.difficulty) {
    query = query.eq("dificuldade", filters.difficulty);
  }

  if (filters?.institution) {
    query = query.or(`instituicao.eq.${filters.institution},intituição.eq.${filters.institution}`);
  }

  if (filters?.isPublished !== undefined) {
    query = query.eq("publicada", filters.isPublished);
  }

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar questões:", error);
    return [];
  }

  return (data as QuestaoRow[]).map(mapQuestao);
}

export async function getQuestionById(id: string): Promise<Question | null> {
  const { data, error } = await supabase
    .from("questoes")
    .select(`
      *,
      resolucoes (
        id,
        tipo,
        texto,
        ordem
      )
    `)
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Erro ao buscar questão por ID:", error);
    return null;
  }

  return mapQuestao(data as QuestaoRow);
}
