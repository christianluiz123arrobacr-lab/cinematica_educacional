import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { supabase } from "@/lib/supabase";
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

export default function AdminQuestionsPage() {
  const [questions, setQuestions] = useState<AdminQuestionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadQuestions() {
      try {
        setLoading(true);
        setError("");

        const { data, error } = await supabase
          .from("questoes")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Erro ao carregar questões ADM:", error);
          setError("Não foi possível carregar as questões.");
          return;
        }

        setQuestions((data as AdminQuestionRow[]) || []);
      } catch (err) {
        console.error("Erro inesperado ao carregar questões ADM:", err);
        setError("Ocorreu um erro inesperado ao carregar as questões.");
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

  const filteredQuestions = useMemo(() => {
    const termo = search.trim().toLowerCase();

    if (!termo) return questions;

    return questions.filter((q) => {
      const disciplina = normalizarDisciplina(q).toLowerCase();
      const codigo = (q.codigo || "").toLowerCase();
      const conteudo = (q.conteudo || "").toLowerCase();
      const assunto = (q.assunto || "").toLowerCase();
      const banca = (q.banca || "").toLowerCase();
      const instituicao = (q.instituição || "").toLowerCase();
      const enunciado = (q.enunciado || "").toLowerCase();
      const ano = String(q.ano || "");

      return (
        codigo.includes(termo) ||
        disciplina.includes(termo) ||
        conteudo.includes(termo) ||
        assunto.includes(termo) ||
        banca.includes(termo) ||
        instituicao.includes(termo) ||
        enunciado.includes(termo) ||
        ano.includes(termo)
      );
    });
  }, [questions, search]);

  return (
    <AdminGuard>
      <AdminLayout
        title="Questões ADM"
        subtitle="Gerencie as questões do banco com busca, leitura rápida e acesso à edição."
      >
        <Card className="p-6 bg-white border-slate-200">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Banco de questões administrativo
              </h2>
              <p className="text-sm text-slate-500">
                Total carregado: {filteredQuestions.length} de {questions.length} questões
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

              <Button className="rounded-2xl">
                <Plus className="w-4 h-4 mr-2" />
                Nova questão
              </Button>
            </div>
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
              Tente outro termo de busca.
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((question) => (
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
                    </div>

                    <p className="text-base font-semibold text-slate-900 mb-2">
                      {textoCurto(question.enunciado, 140)}
                    </p>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 text-sm text-slate-600">
                      <p>
                        <span className="font-semibold text-slate-800">Conteúdo:</span>{" "}
                        {question.conteudo || "—"}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">Assunto:</span>{" "}
                        {question.assunto || "—"}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">Banca:</span>{" "}
                        {question.banca || "—"}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">Ano:</span>{" "}
                        {question.ano || "—"}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">Instituição:</span>{" "}
                        {question.instituição || "—"}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">ID:</span>{" "}
                        {question.id}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link href={`/admin/questoes/${question.id}`}>
                      <Button variant="outline" className="rounded-2xl">
                        <Pencil className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </AdminLayout>
    </AdminGuard>
  );
}
