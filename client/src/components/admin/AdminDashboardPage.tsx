import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";
import {
  Users,
  FileText,
  Blocks,
  Image,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

function StatCard({
  title,
  value,
  icon: Icon,
  tone,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  tone: "blue" | "purple" | "orange" | "emerald";
}) {
  const tones = {
    blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-700",
    purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-700",
    orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-700",
    emerald: "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-700",
  };

  return (
    <Card className={`p-6 bg-gradient-to-br ${tones[tone]}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
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

export default function AdminDashboardPage() {
  return (
    <AdminGuard>
      <AdminLayout
        title="Dashboard ADM"
        subtitle="Gerencie usuários, questões, resoluções, uploads e a estrutura estratégica do sistema."
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard title="Usuários" value="--" icon={Users} tone="blue" />
          <StatCard title="Questões" value="--" icon={FileText} tone="purple" />
          <StatCard title="Resoluções" value="--" icon={Blocks} tone="orange" />
          <StatCard title="Imagens" value="--" icon={Image} tone="emerald" />
        </div>

        <Card className="p-6 bg-white border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Ações rápidas
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Este é o núcleo do sistema administrativo. Os módulos vão crescer em cima dessa base.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            <QuickLinkCard
              title="Gerenciar usuários"
              description="Criar, buscar, editar permissões e acompanhar usuários do sistema."
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
      </AdminLayout>
    </AdminGuard>
  );
}
