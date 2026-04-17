import { supabase } from "@/lib/supabase";
import type { Question, QuestionDifficulty } from "@/types/question";

type QuestaoRow = {
  id: string;
  codigo?: string | null;
  diciplina?: string;
  disciplina?: string;
  assunto: string;
  conteudo?: string | null;
  banca?: string | null;
  ano: number;
  dificuldade: QuestionDifficulty;
  enunciado?: string | null;
  enunciado_pos_imagem?: string | null;
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
  a_url_imagem?: string | null;
  b_url_imagem?: string | null;
  c_url_imagem?: string | null;
  d_url_imagem?: string | null;
  e_url_imagem?: string | null;
  alternativa_correta: string;
  instituição?: string | null;
  fonte?: string | null;
  tag?: string | null;
  publicada?: boolean | null;
  created_at?: string | null;
  resolucoes?: {
    id: string;
    tipo: string;
    texto?: string | null;
    ordem?: number | null;
    url_imagem?: string | null;
  }[];
};

function normalizarAlternativas(row: QuestaoRow): Question["options"] {
  const altA = row.a ?? row.A ?? "";
  const altB = row.b ?? row.B ?? "";
  const altC = row.c ?? row.C ?? "";
  const altD = row.d ?? row.D ?? "";
  const altE = row.e ?? row.E ?? "";

  return [
    altA || row.a_url_imagem
      ? {
          id: "a",
          label: "A",
          text: altA || undefined,
          imageUrl: row.a_url_imagem ?? undefined,
        }
      : null,
    altB || row.b_url_imagem
      ? {
          id: "b",
          label: "B",
          text: altB || undefined,
          imageUrl: row.b_url_imagem ?? undefined,
        }
      : null,
    altC || row.c_url_imagem
      ? {
          id: "c",
          label: "C",
          text: altC || undefined,
          imageUrl: row.c_url_imagem ?? undefined,
        }
      : null,
    altD || row.d_url_imagem
      ? {
          id: "d",
          label: "D",
          text: altD || undefined,
          imageUrl: row.d_url_imagem ?? undefined,
        }
      : null,
    altE || row.e_url_imagem
      ? {
          id: "e",
          label: "E",
          text: altE || undefined,
          imageUrl: row.e_url_imagem ?? undefined,
        }
      : null,
  ].filter(Boolean) as Question["options"];
}

function mapQuestao(row: QuestaoRow): Question {
  const explanationBlocks =
    row.resolucoes
      ?.map((resolucao) => ({
        type:
          (resolucao.tipo || "").toLowerCase() === "imagem"
            ? "imagem"
            : (resolucao.tipo || "").toLowerCase() === "latex"
              ? "latex"
              : "texto",
        content: resolucao.texto || "",
        imageUrl: resolucao.url_imagem || undefined,
        order: resolucao.ordem ?? 0,
      }))
      .sort((a, b) => a.order - b.order) || [];

  const explanationFallback = explanationBlocks
    .filter((block) => block.type !== "imagem" && block.content)
    .map((block) => block.content)
    .join("\n\n");

  return {
    id: row.id,
    codigo: row.codigo ?? undefined,
    subject: (row.disciplina ?? row.diciplina ?? "fisica") as Question["subject"],
    topic: row.conteudo || "Sem conteúdo",
    subtopic: row.assunto || undefined,
    exam: row.banca || "Sem banca",
    year: row.ano,
    institution: row["instituição"] || undefined,
    statement: row.enunciado || "",
    statementAfterImage: row.enunciado_pos_imagem || undefined,
    formula: row.formula || undefined,
    imageUrl: row.url_imagem || undefined,
    options: normalizarAlternativas(row),
    correctOptionId: (row.alternativa_correta || "").toLowerCase(),
    explanation: explanationFallback || "Sem resolução cadastrada.",
    explanationBlocks,
    difficulty: row.dificuldade,
    tags: row.tag ? [row.tag] : [],
    source: row.fonte || undefined,
    isPublished: row.publicada ?? true,
    createdAt: row.created_at || undefined,
    updatedAt: undefined,
  };
}

export async function fetchQuestions(): Promise<Question[]> {
  const { data, error } = await supabase
    .from("questoes")
    .select(`
      *,
      resolucoes (
        id,
        tipo,
        texto,
        ordem,
        url_imagem
      )
    `)
    .eq("publicada", true)
    .order("ano", { ascending: false });

  if (error) {
    console.error("Erro ao buscar questões:", error);
    throw error;
  }

  return ((data as QuestaoRow[]) || []).map(mapQuestao);
}

export async function fetchQuestionsBySubject(
  subject: Question["subject"]
): Promise<Question[]> {
  const { data, error } = await supabase
    .from("questoes")
    .select(`
      *,
      resolucoes (
        id,
        tipo,
        texto,
        ordem,
        url_imagem
      )
    `)
    .eq("publicada", true)
    .or(`disciplina.eq.${subject},diciplina.eq.${subject}`)
    .order("ano", { ascending: false });

  if (error) {
    console.error("Erro ao buscar questões por disciplina:", error);
    throw error;
  }

  return ((data as QuestaoRow[]) || []).map(mapQuestao);
}
