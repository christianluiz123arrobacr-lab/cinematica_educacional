import { Link, useLocation } from "wouter";
import {
  LayoutDashboard,
  Users,
  FileText,
  Blocks,
  Image,
  BrainCircuit,
  ScrollText,
  ShieldCheck,
  MessageSquareWarning,
  CreditCard,
} from "lucide-react";

const adminItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/usuarios", label: "Usuários", icon: Users },
  { href: "/admin/questoes", label: "Questões", icon: FileText },
  { href: "/admin/resolucoes", label: "Resoluções", icon: Blocks },
  { href: "/admin/reports", label: "Erros reportados", icon: MessageSquareWarning },
  { href: "/admin/uploads", label: "Uploads", icon: Image },
  { href: "/admin/vet", label: "VET", icon: BrainCircuit },
  { href: "/admin/logs", label: "Logs", icon: ScrollText },
  { href: "/admin/assinaturas", label: "Assinaturas", icon: CreditCard },
];

export default function AdminSidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3 px-3 py-3 mb-3 border-b border-slate-100">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">Painel ADM</h2>
            <p className="text-xs text-slate-500">Controle administrativo</p>
          </div>
        </div>

        <nav className="space-y-2">
          {adminItems.map((item) => {
            const Icon = item.icon;
            const active =
              location === item.href ||
              (item.href !== "/admin" && location.startsWith(item.href));

            return (
              <Link key={item.href} href={item.href}>
                <button
                  className={`w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                    active
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
