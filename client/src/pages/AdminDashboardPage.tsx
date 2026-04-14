import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";
import { supabase } from "@/lib/supabase";
import {
  Users,
  FileText,
  Blocks,
  Image,
  ArrowRight,
  Loader2,
  AlertTriangle,
  Clock3,
} from "lucide-react";
import { Link } from "wouter";

type DashboardStats = {
  totalAdmins: number;
  totalQuestions: number;
  totalResolutions: number;
  totalResolutionImages: number;
};

type LatestQuestion = {
  id: string;
  codigo?: string | null;
  enunciado?: string | null;
  banca?: string | null;
  ano?: number | null;
  created_at?: string | null;
};

type LatestResolution = {
  id: string;
  questao_id: string;
  tipo?: string | null;
  ordem?: number | null;
  codigo_resolucao?: string | null;
  created_at?: string | null;
};

function StatCard({
  title,
  value,
  icon: Icon,
  tone,
  helper,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  tone: "blue" | "purple" | "orange" | "emerald";
  helper?: string;
}) {
  const tones = {
    blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-700",
    purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-700",
    orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-700",
    emerald:
      "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-700",
  };

  return (
    <Card className={`p-6 bg-gradient-to-br ${tones[tone]}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
          {helper ? (
            <p className="text-xs text-slate-500 mt-2">{helper}</p>
          ) : null}
        </div>

        <div className="w-12 h-12 rounded-2xl bg-white/70 flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </Card>
  );
}

function QuickLinkCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <button className="w-full text-left rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {description}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
        </div>
      </button>
    </Link>
  );
}

function formatDate(date?: string | null) {
  if (!date) return "Sem data";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "Sem data";

  return parsed.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function truncateText(text?: string | null, max = 110) {
  const value = (text || "").trim();
  if (!value) return "Sem descrição";
  if (value.length <= max) return value;
  return `${value.slice(0, max)}...`;
}

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [stats, setStats] = useState<DashboardStats>({
    totalAdmins: 0,
    totalQuestions: 0,
    totalResolutions: 0,
    totalResolutionImages: 0,
  });

  const [latestQuestions, setLatestQuestions] = useState<LatestQuestion[]>([]);
  const [latestResolutions, setLatestResolutions] = useState<LatestResolution[]>(
    []
  );

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true);
        setError("");

        const [
          adminsCountResult,
          questionsCountResult,
          resolutionsCountResult,
          resolutionImagesResult,
          latestQuestionsResult,
          latestResolutionsResult,
        ] = await Promise.all([
          supabase
            .from("admin_users")
            .select("*", { count: "exact", head: true }),

          supabase
            .from("questoes")
            .select("*", { count: "exact", head: true }),

          supabase
            .from("resolucoes")
            .select("*", { count: "exact", head: true }),

          supabase
            .from("resolucoes")
            .select("*", { count: "exact", head: true })
            .not("url_imagem", "is", null),

          supabase
            .from("questoes")
            .select("id, codigo, enunciado, banca, ano, created_at")
            .order("created_at", { ascending: false })
            .limit(5),

          supabase
            .from("resolucoes")
            .select("id, questao_id, tipo, ordem, codigo_resolucao, created_at")
            .order("created_at", { ascending: false })
            .limit(5),
        ]);

        const possibleError =
          adminsCountResult.error ||
          questionsCountResult.error ||
          resolutionsCountResult.error ||
          resolutionImagesResult.error ||
          latestQuestionsResult.error ||
          latestResolutionsResult.error;

        if (possibleError) {
          console.error("Erro ao carregar dashboard ADM:", possibleError);
          setError("Não foi possível carregar os dados reais do dashboard.");
          return;
        }

        setStats({
          totalAdmins: adminsCountResult.count ?? 0,
          totalQuestions: questionsCountResult.count ?? 0,
          totalResolutions: resolutionsCountResult.count ?? 0,
          totalResolutionImages: resolutionImagesResult.count ?? 0,
        });

        setLatestQuestions((latestQuestionsResult.data as LatestQuestion[]) ?? []);
        setLatestResolutions(
          (latestResolutionsResult.data as LatestResolution[]) ?? []
        );
      } catch (err) {
        console.error("Erro inesperado no dashboard ADM:", err);
        setError("Ocorreu um erro inesperado ao carregar o dashboard.");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return (
    <AdminGuard>
      <AdminLayout
        title="Dashboard ADM"
        subtitle="Gerencie usuários, perfis, acessos administrativos, questões, resoluções, uploads e a estrutura estratégica do sistema."
      >
        {loading ? (
          <Card className="p-10 flex items-center justify-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin text-slate-500" />
            <p className="text-slate-600">Carregando dados reais do dashboard...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-red-700 mb-1">
                  Erro no dashboard
                </h2>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          </Card>
        ) : (
          <>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              <StatCard
                title="Acessos administrativos"
                value={String(stats.totalAdmins)}
                icon={Users}
                tone="blue"
                helper="Contagem da tabela admin_users"
              />
              <StatCard
                title="Questões cadastradas"
                value={String(stats.totalQuestions)}
                icon={FileText}
                tone="purple"
                helper="Contagem real da tabela questoes"
              />
              <StatCard
                title="Blocos de resolução"
                value={String(stats.totalResolutions)}
                icon={Blocks}
                tone="orange"
                helper="Contagem real da tabela resolucoes"
              />
              <StatCard
                title="Imagens nas resoluções"
                value={String(stats.totalResolutionImages)}
                icon={Image}
                tone="emerald"
                helper="Blocos com url_imagem preenchida"
              />
            </div>

            <div className="grid xl:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Clock3 className="w-5 h-5 text-slate-500" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Últimas questões
                  </h2>
                </div>

                {latestQuestions.length > 0 ? (
                  <div className="space-y-3">
                    {latestQuestions.map((question) => (
                      <div
                        key={question.id}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <p className="font-bold text-slate-900">
                              {question.codigo || "Sem código"}
                            </p>
                            <p className="text-xs text-slate-500">
                              {question.banca || "Sem banca"} • {question.ano || "Sem ano"}
                            </p>
                          </div>

                          <span className="text-xs text-slate-500 whitespace-nowrap">
                            {formatDate(question.created_at)}
                          </span>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {truncateText(question.enunciado)}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">
                    Nenhuma questão cadastrada ainda.
                  </p>
                )}
              </Card>

              <Card className="p-6 bg-white border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Clock3 className="w-5 h-5 text-slate-500" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Últimos blocos de resolução
                  </h2>
                </div>

                {latestResolutions.length > 0 ? (
                  <div className="space-y-3">
                    {latestResolutions.map((resolution) => (
                      <div
                        key={resolution.id}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <p className="font-bold text-slate-900">
                              {resolution.codigo_resolucao || "Sem código"}
                            </p>
                            <p className="text-xs text-slate-500">
                              Questão: {resolution.questao_id}
                            </p>
                          </div>

                          <span className="text-xs text-slate-500 whitespace-nowrap">
                            {formatDate(resolution.created_at)}
                          </span>
                        </div>

                        <p className="text-sm text-slate-600">
                          Tipo:{" "}
                          <span className="font-semibold">
                            {resolution.tipo || "não informado"}
                          </span>{" "}
                          • Ordem:{" "}
                          <span className="font-semibold">
                            {resolution.ordem ?? "-"}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">
                    Nenhum bloco de resolução cadastrado ainda.
                  </p>
                )}
              </Card>
            </div>

            <Card className="p-6 bg-white border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Ações rápidas
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Esse painel centraliza o núcleo do sistema administrativo e a gestão dos principais módulos do site.
              </p>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                <QuickLinkCard
                  title="Gerenciar usuários"
                  description="Acessar a central de usuários, perfis e acessos administrativos do sistema."
                  href="/admin/usuarios"
                />
                <QuickLinkCard
                  title="Gerenciar questões"
                  description="Cadastrar, editar, publicar e organizar questões do banco."
                  href="/admin/questoes"
                />
                <QuickLinkCard
                  title="Gerenciar resoluções"
                  description="Montar explicações por blocos com texto, latex e imagem."
                  href="/admin/resolucoes"
                />
                <QuickLinkCard
                  title="Gerenciar uploads"
                  description="Enviar imagens para o bucket e reutilizar assets visuais."
                  href="/admin/uploads"
                />
                <QuickLinkCard
                  title="Gerenciar VET"
                  description="Ajustar pesos, prioridades e estrutura estratégica do VET."
                  href="/admin/vet"
                />
                <QuickLinkCard
                  title="Ver logs"
                  description="Acompanhar ações administrativas e histórico do sistema."
                  href="/admin/logs"
                />
              </div>
            </Card>
          </>
        )}
      </AdminLayout>
    </AdminGuard>
  );
}
