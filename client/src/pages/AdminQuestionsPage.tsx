import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabase";
import { logAdminAction } from "@/lib/adminLogs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";
import {
  Search,
  Plus,
  Loader2,
  AlertTriangle,
  Pencil,
  FileText,
  Blocks,
  Image,
  Eye,
  EyeOff,
  Trash2,
} from "lucide-react";

type AdminQuestionRow = {
  id: string;
  codigo?: string | null;
  disciplina?: string | null;
  diciplina?: string | null;
  conteudo?: string | null;
  assunto?: string | null;
  banca?: string | null;
  ano?: number | null;
  dificuldade?: string | null;
  instituição?: string | null;
  publicada?: boolean | null;
  enunciado?: string | null;
  created_at?: string | null;
};

type ResolutionRow = {
  id: string;
  questao_id: string;
  tipo?: string | null;
  url_imagem?: string | null;
};

type ResolutionSummary = {
  totalBlocks: number;
  totalImages: number;
};

type PublishFilter = "todas" | "publicadas" | "nao_publicadas";

function normalizarDisciplina(row: AdminQuestionRow) {
  return row.disciplina || row.diciplina || "—";
}

function textoCurto(texto?: string | null, limite = 90) {
  const valor = (texto || "").trim();
  if (!valor) return "Sem enunciado";
  if (valor.length <= limite) return valor;
  return `${valor.slice(0, limite)}...`;
}

function corDificuldade(dificuldade?: string | null) {
  const valor = (dificuldade || "").toLowerCase().trim();

  if (valor === "facil") {
    return "bg-green-100 text-green-700 border-green-200";
  }

  if (valor === "medio") {
    return "bg-yellow-100 text-yellow-700 border-yellow-200";
  }

  if (valor === "dificil") {
    return "bg-red-100 text-red-700 border-red-200";
  }

  return "bg-slate-100 text-slate-700 border-slate-200";
}

function statusResolucao(summary?: ResolutionSummary) {
  if (!summary || summary.totalBlocks === 0) {
    return {
      label: "Sem resolução",
      className: "bg-red-100 text-red-700 border-red-200",
    };
  }

  if (summary.totalBlocks <= 2) {
    return {
      label: "Resolução inicial",
      className: "bg-yellow-100 text-yellow-700 border-yellow-200",
    };
  }

  return {
    label: "Com resolução",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };
}

export default function AdminQuestionsPage() {
  const [questions, setQuestions] = useState<AdminQuestionRow[]>([]);
  const [resolutions, setResolutions] = useState<ResolutionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyQuestionId, setBusyQuestionId] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [disciplinaFiltro, setDisciplinaFiltro] = useState("");
  const [dificuldadeFiltro, setDificuldadeFiltro] = useState("");
  const [publicacaoFiltro, setPublicacaoFiltro] =
    useState<PublishFilter>("todas");
  const [instituicaoFiltro, setInstituicaoFiltro] = useState("");
  const [anoFiltro, setAnoFiltro] = useState("");

  useEffect(() => {
    async function loadQuestions() {
      try {
        setLoading(true);
        setError("");

        const [questionsResult, resolutionsResult] = await Promise.all([
          supabase
            .from("questoes")
            .select("*")
            .order("created_at", { ascending: false }),

          supabase.from("resolucoes").select("id, questao_id, tipo, url_imagem"),
        ]);

        if (questionsResult.error) {
          console.error("Erro ao carregar questões ADM:", questionsResult.error);
          setError("Não foi possível carregar as questões.");
          return;
        }

        if (resolutionsResult.error) {
          console.error(
            "Erro ao carregar resoluções ADM:",
            resolutionsResult.error
          );
          setError("Não foi possível carregar os resumos das resoluções.");
          return;
        }

        setQuestions((questionsResult.data as AdminQuestionRow[]) || []);
        setResolutions((resolutionsResult.data as ResolutionRow[]) || []);
      } catch (err) {
        console.error("Erro inesperado ao carregar questões ADM:", err);
        setError("Ocorreu um erro inesperado ao carregar as questões.");
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

  const resolutionMap = useMemo(() => {
    const map = new Map<string, ResolutionSummary>();

    for (const item of resolutions) {
      const current = map.get(item.questao_id) || {
        totalBlocks: 0,
        totalImages: 0,
      };

      current.totalBlocks += 1;

      if (
        (item.tipo || "").toLowerCase().trim() === "imagem" ||
        !!item.url_imagem
      ) {
        current.totalImages += 1;
      }

      map.set(item.questao_id, current);
    }

    return map;
  }, [resolutions]);

  const disciplinasDisponiveis = useMemo(() => {
    return [
      ...new Set(questions.map((q) => normalizarDisciplina(q)).filter(Boolean)),
    ]
      .filter((valor) => valor !== "—")
      .sort((a, b) => a.localeCompare(b));
  }, [questions]);

  const dificuldadesDisponiveis = useMemo(() => {
    return [
      ...new Set(
        questions.map((q) => (q.dificuldade || "").trim()).filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b));
  }, [questions]);

  const instituicoesDisponiveis = useMemo(() => {
    return [
      ...new Set(
        questions.map((q) => (q.instituição || "").trim()).filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b));
  }, [questions]);

  const anosDisponiveis = useMemo(() => {
    return [...new Set(questions.map((q) => q.ano).filter(Boolean) as number[])]
      .sort((a, b) => b - a)
      .map(String);
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    const termo = search.trim().toLowerCase();

    return questions.filter((q) => {
      const disciplina = normalizarDisciplina(q).toLowerCase();
      const codigo = (q.codigo || "").toLowerCase();
      const conteudo = (q.conteudo || "").toLowerCase();
      const assunto = (q.assunto || "").toLowerCase();
      const banca = (q.banca || "").toLowerCase();
      const instituicao = (q.instituição || "").toLowerCase();
      const enunciado = (q.enunciado || "").toLowerCase();
      const ano = String(q.ano || "");
      const dificuldade = (q.dificuldade || "").toLowerCase();

      const passouBusca =
        !termo ||
        codigo.includes(termo) ||
        disciplina.includes(termo) ||
        conteudo.includes(termo) ||
        assunto.includes(termo) ||
        banca.includes(termo) ||
        instituicao.includes(termo) ||
        enunciado.includes(termo) ||
        ano.includes(termo);

      const passouDisciplina =
        !disciplinaFiltro ||
        normalizarDisciplina(q).toLowerCase() === disciplinaFiltro.toLowerCase();

      const passouDificuldade =
        !dificuldadeFiltro ||
        dificuldade === dificuldadeFiltro.toLowerCase();

      const passouInstituicao =
        !instituicaoFiltro ||
        (q.instituição || "").toLowerCase() ===
          instituicaoFiltro.toLowerCase();

      const passouAno = !anoFiltro || String(q.ano || "") === anoFiltro;

      const passouPublicacao =
        publicacaoFiltro === "todas" ||
        (publicacaoFiltro === "publicadas" && q.publicada === true) ||
        (publicacaoFiltro === "nao_publicadas" && q.publicada !== true);

      return (
        passouBusca &&
        passouDisciplina &&
        passouDificuldade &&
        passouInstituicao &&
        passouAno &&
        passouPublicacao
      );
    });
  }, [
    questions,
    search,
    disciplinaFiltro,
    dificuldadeFiltro,
    instituicaoFiltro,
    anoFiltro,
    publicacaoFiltro,
  ]);

  function limparFiltros() {
    setSearch("");
    setDisciplinaFiltro("");
    setDificuldadeFiltro("");
    setPublicacaoFiltro("todas");
    setInstituicaoFiltro("");
    setAnoFiltro("");
  }

  async function alternarPublicacao(question: AdminQuestionRow) {
    try {
      setBusyQuestionId(question.id);
      setError("");

      const novoStatus = !(question.publicada === true);

      const { error } = await supabase
        .from("questoes")
        .update({ publicada: novoStatus })
        .eq("id", question.id);

      if (error) {
        console.error("Erro ao alterar publicação:", error);
        setError("Não foi possível alterar o status de publicação.");
        return;
      }

      await logAdminAction({
        action: novoStatus ? "question_published" : "question_unpublished",
        entityType: "questao",
        entityId: question.id,
        description: `Questão ${question.codigo || question.id} ${
          novoStatus ? "publicada" : "despublicada"
        } no ADM`,
        level: "info",
        metadata: {
          codigo: question.codigo || null,
          disciplina: normalizarDisciplina(question),
          conteudo: question.conteudo || null,
          assunto: question.assunto || null,
          banca: question.banca || null,
          ano: question.ano || null,
          dificuldade: question.dificuldade || null,
          instituicao: question.instituição || null,
          publicada: novoStatus,
        },
      });

      setQuestions((prev) =>
        prev.map((item) =>
          item.id === question.id ? { ...item, publicada: novoStatus } : item
        )
      );
    } catch (err) {
      console.error("Erro inesperado ao alterar publicação:", err);
      setError("Ocorreu um erro inesperado ao alterar o status.");
    } finally {
      setBusyQuestionId(null);
    }
  }

  async function excluirQuestao(question: AdminQuestionRow) {
    const confirmado = window.confirm(
      `Tem certeza que deseja excluir a questão ${question.codigo || question.id}?\n\nIsso também vai apagar as resoluções ligadas a ela.`
    );

    if (!confirmado) return;

    try {
      setBusyQuestionId(question.id);
      setError("");

      const { error: deleteResolutionsMetaError } = await supabase
        .from("resolucoes_meta")
        .delete()
        .eq("questao_id", question.id);

      if (deleteResolutionsMetaError) {
        console.error(
          "Erro ao excluir meta da resolução:",
          deleteResolutionsMetaError
        );
        setError("Não foi possível excluir os metadados da resolução.");
        return;
      }

      const { error: deleteResolutionsError } = await supabase
        .from("resolucoes")
        .delete()
        .eq("questao_id", question.id);

      if (deleteResolutionsError) {
        console.error(
          "Erro ao excluir resoluções da questão:",
          deleteResolutionsError
        );
        setError("Não foi possível excluir as resoluções vinculadas à questão.");
        return;
      }

      const { error: deleteQuestionError } = await supabase
        .from("questoes")
        .delete()
        .eq("id", question.id);

      if (deleteQuestionError) {
        console.error("Erro ao excluir questão:", deleteQuestionError);
        setError("Não foi possível excluir a questão.");
        return;
      }

      await logAdminAction({
        action: "question_deleted",
        entityType: "questao",
        entityId: question.id,
        description: `Questão ${question.codigo || question.id} excluída no ADM`,
        level: "warning",
        metadata: {
          codigo: question.codigo || null,
          disciplina: normalizarDisciplina(question),
          conteudo: question.conteudo || null,
          assunto: question.assunto || null,
          banca: question.banca || null,
          ano: question.ano || null,
          dificuldade: question.dificuldade || null,
          instituicao: question.instituição || null,
        },
      });

      setQuestions((prev) => prev.filter((item) => item.id !== question.id));
      setResolutions((prev) =>
        prev.filter((item) => item.questao_id !== question.id)
      );
    } catch (err) {
      console.error("Erro inesperado ao excluir questão:", err);
      setError("Ocorreu um erro inesperado ao excluir a questão.");
    } finally {
      setBusyQuestionId(null);
    }
  }

  return (
    <AdminGuard>
      <AdminLayout
        title="Questões ADM"
        subtitle="Gerencie as questões do banco com filtros, leitura rápida e acesso direto à resolução."
      >
        <Card className="p-6 bg-white border-slate-200">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Banco de questões administrativo
              </h2>
              <p className="text-sm text-slate-500">
                Total carregado: {filteredQuestions.length} de {questions.length}{" "}
                questões
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
              <div className="relative w-full xl:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por código, disciplina, conteúdo, assunto, banca..."
                  className="w-full rounded-2xl border border-slate-300 bg-white pl-11 pr-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <Link href="/admin/questoes/nova">
                <Button className="rounded-2xl w-full sm:w-auto">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova questão
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-slate-200">
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Disciplina
              </label>
              <select
                value={disciplinaFiltro}
                onChange={(e) => setDisciplinaFiltro(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="">Todas</option>
                {disciplinasDisponiveis.map((disciplina) => (
                  <option key={disciplina} value={disciplina}>
                    {disciplina}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Dificuldade
              </label>
              <select
                value={dificuldadeFiltro}
                onChange={(e) => setDificuldadeFiltro(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="">Todas</option>
                {dificuldadesDisponiveis.map((dificuldade) => (
                  <option key={dificuldade} value={dificuldade}>
                    {dificuldade}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Publicação
              </label>
              <select
                value={publicacaoFiltro}
                onChange={(e) =>
                  setPublicacaoFiltro(e.target.value as PublishFilter)
                }
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="todas">Todas</option>
                <option value="publicadas">Publicadas</option>
                <option value="nao_publicadas">Não publicadas</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Instituição
              </label>
              <select
                value={instituicaoFiltro}
                onChange={(e) => setInstituicaoFiltro(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="">Todas</option>
                {instituicoesDisponiveis.map((instituicao) => (
                  <option key={instituicao} value={instituicao}>
                    {instituicao}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Ano
              </label>
              <select
                value={anoFiltro}
                onChange={(e) => setAnoFiltro(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="">Todos</option>
                {anosDisponiveis.map((ano) => (
                  <option key={ano} value={ano}>
                    {ano}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              className="rounded-2xl"
              onClick={limparFiltros}
            >
              Limpar filtros
            </Button>
          </div>
        </Card>

        {loading ? (
          <Card className="p-10 flex items-center justify-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin text-slate-500" />
            <p className="text-slate-600">Carregando questões...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-red-700 mb-1">
                  Erro ao carregar questões
                </h2>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          </Card>
        ) : filteredQuestions.length === 0 ? (
          <Card className="p-10 text-center">
            <FileText className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Nenhuma questão encontrada
            </h2>
            <p className="text-slate-500">
              Ajuste os filtros ou tente outro termo de busca.
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((question) => {
              const summary = resolutionMap.get(question.id);
              const status = statusResolucao(summary);
              const busy = busyQuestionId === question.id;

              return (
                <Card
                  key={question.id}
                  className="p-5 bg-white border-slate-200 shadow-sm"
                >
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold">
                          {question.codigo || "Sem código"}
                        </span>

                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200">
                          {normalizarDisciplina(question)}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${corDificuldade(
                            question.dificuldade
                          )}`}
                        >
                          {question.dificuldade || "sem dificuldade"}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            question.publicada
                              ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                              : "bg-slate-100 text-slate-600 border-slate-200"
                          }`}
                        >
                          {question.publicada ? "Publicada" : "Não publicada"}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${status.className}`}
                        >
                          {status.label}
                        </span>
                      </div>

                      <p className="text-base font-semibold text-slate-900 mb-2">
                        {textoCurto(question.enunciado, 140)}
                      </p>

                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 text-sm text-slate-600">
                        <p>
                          <span className="font-semibold text-slate-800">
                            Conteúdo:
                          </span>{" "}
                          {question.conteudo || "—"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">
                            Assunto:
                          </span>{" "}
                          {question.assunto || "—"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">
                            Banca:
                          </span>{" "}
                          {question.banca || "—"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">
                            Ano:
                          </span>{" "}
                          {question.ano || "—"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">
                            Instituição:
                          </span>{" "}
                          {question.instituição || "—"}
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">
                            ID:
                          </span>{" "}
                          {question.id}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-4">
                        <div className="inline-flex items-center gap-2 rounded-2xl bg-orange-50 border border-orange-200 px-3 py-2 text-sm font-semibold text-orange-700">
                          <Blocks className="w-4 h-4" />
                          {summary?.totalBlocks || 0} bloco(s)
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200 px-3 py-2 text-sm font-semibold text-emerald-700">
                          <Image className="w-4 h-4" />
                          {summary?.totalImages || 0} imagem(ns)
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <Button
                        variant="outline"
                        className="rounded-2xl"
                        onClick={() => alternarPublicacao(question)}
                        disabled={busy}
                      >
                        {busy ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : question.publicada ? (
                          <EyeOff className="w-4 h-4 mr-2" />
                        ) : (
                          <Eye className="w-4 h-4 mr-2" />
                        )}
                        {question.publicada ? "Despublicar" : "Publicar"}
                      </Button>

                      <Link href={`/admin/questoes/${question.id}`}>
                        <Button variant="outline" className="rounded-2xl">
                          <Pencil className="w-4 h-4 mr-2" />
                          Editar questão
                        </Button>
                      </Link>

                      <Link href={`/admin/resolucoes/${question.id}`}>
                        <Button className="rounded-2xl">
                          <Blocks className="w-4 h-4 mr-2" />
                          Editar resolução
                        </Button>
                      </Link>

                      <Button
                        variant="outline"
                        className="rounded-2xl border-red-200 text-red-600 hover:bg-red-50"
                        onClick={() => excluirQuestao(question)}
                        disabled={busy}
                      >
                        {busy ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4 mr-2" />
                        )}
                        Excluir questão
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </AdminLayout>
    </AdminGuard>
  );
}
