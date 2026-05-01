import { supabase } from "@/lib/supabase";
import type {
  Question,
  QuestionDifficulty,
  QuestionSubject,
} from "@/types/question";

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
  codigo?: string | null;
  diciplina?: string;
  disciplina?: string;
  assunto: string;
  conteudo?: string | null;
  conteudos?: string[] | null;
  assuntos?: string[] | null;
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

function normalizarTexto(valor?: string | null): string | undefined {
  if (!valor) return undefined;

  const limpo = valor.trim();

  return limpo.length > 0 ? limpo : undefined;
}

function normalizarListaTexto(
  valores?: string[] | null,
  fallback?: string | null
): string[] {
  const itens = Array.isArray(valores) ? valores : [];
  const base = itens.length > 0 ? itens : fallback ? [fallback] : [];

  return Array.from(
    new Set(
      base
        .map((item) => String(item ?? "").trim().toLowerCase())
        .filter(Boolean)
    )
  );
}

function questionMatchesListFilter(values: string[] | undefined, filter?: string) {
  if (!filter?.trim()) return true;

  const normalizedFilter = filter.trim().toLowerCase();
  const list = values ?? [];

  return list.some((item) => item.toLowerCase().includes(normalizedFilter));
}

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
      ?.sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0))
      .map((r) => {
        const tipo = (r.tipo || "").toLowerCase().trim();

        if (tipo === "imagem") {
          return {
            type: "imagem" as const,
            imageUrl: r.url_imagem ?? undefined,
            order: r.ordem ?? 0,
          };
        }

        if (tipo === "latex") {
          return {
            type: "latex" as const,
            content: r.texto ?? "",
            order: r.ordem ?? 0,
          };
        }

        return {
          type: "texto" as const,
          content: r.texto ?? "",
          order: r.ordem ?? 0,
        };
      })
      .filter((block) =>
        block.type === "imagem" ? !!block.imageUrl : !!block.content
      ) || [];

  const resolucaoTexto =
    row.resolucoes
      ?.filter((r) => r.texto)
      .sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0))
      .map((r) => r.texto ?? "")
      .join("\n\n") || "Sem resolução cadastrada.";

  const disciplina = (
    row.disciplina ??
    row.diciplina ??
    "fisica"
  )
    .toLowerCase()
    .trim() as QuestionSubject;

  const topics = normalizarListaTexto(row.conteudos, row.conteudo ?? row.assunto);
  const subtopics = normalizarListaTexto(row.assuntos, row.assunto);

  return {
    id: row.id,
    codigo: row.codigo ?? undefined,
    subject: disciplina,

    /**
     * Compatibilidade com o sistema antigo:
     * topic continua existindo, mas agora vem do primeiro conteúdo.
     */
    topic: topics[0] ?? "",
    topics,

    /**
     * Compatibilidade com o sistema antigo:
     * subtopic continua existindo, mas agora vem do primeiro assunto.
     */
    subtopic: subtopics[0],
    subtopics,

    exam: normalizarTexto(row.banca) ?? "Sem banca",
    year: row.ano,
    institution: normalizarTexto(row.instituição),
    statement: row.enunciado ?? "Sem enunciado cadastrado.",
    statementAfterImage: row.enunciado_pos_imagem ?? undefined,
    formula: row.formula ?? undefined,
    imageUrl: row.url_imagem ?? undefined,
    options: normalizarAlternativas(row),
    correctOptionId: row.alternativa_correta.toLowerCase().trim(),
    explanation: resolucaoTexto,
    explanationBlocks,
    difficulty: row.dificuldade,
    tags: row.tag ? row.tag.split(",").map((t) => t.trim()) : [],
    source: row.fonte ?? undefined,
    isPublished: row.publicada ?? true,
    createdAt: row.created_at ?? undefined,
    updatedAt: row.created_at ?? undefined,
  };
}

export async function getQuestions(
  filters?: QuestionFilters
): Promise<Question[]> {
  let query = supabase.from("questoes").select(`
    *,
    resolucoes (
      id,
      tipo,
      texto,
      ordem,
      url_imagem
    )
  `);

  if (filters?.subject) {
    query = query.or(
      `disciplina.eq.${filters.subject},diciplina.eq.${filters.subject}`
    );
  }

  /**
   * Conteúdo e assunto agora podem ser listas.
   *
   * Antes dava para filtrar direto no Supabase:
   * conteudo.eq.cinemática
   *
   * Agora a questão pode ter:
   * conteudos = ["cinemática", "dinâmica"]
   *
   * Por isso, topic/subtopic são filtrados depois do mapQuestao.
   */

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
    query = query.eq("instituição", filters.institution);
  }

  if (filters?.isPublished !== undefined) {
    query = query.eq("publicada", filters.isPublished);
  }

  const { data, error } = await query.order("created_at", {
    ascending: false,
  });

  if (error) {
    console.error("Erro ao buscar questões:", error);
    return [];
  }

  let questions = (data as QuestaoRow[]).map(mapQuestao);

  if (filters?.topic) {
    questions = questions.filter((question) =>
      questionMatchesListFilter(question.topics, filters.topic)
    );
  }

  if (filters?.subtopic) {
    questions = questions.filter((question) =>
      questionMatchesListFilter(question.subtopics, filters.subtopic)
    );
  }

  return questions;
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
        ordem,
        url_imagem
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
