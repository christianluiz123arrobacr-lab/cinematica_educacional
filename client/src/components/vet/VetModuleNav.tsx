import { Link, useLocation } from "wouter";
import {
  Target,
  Activity,
  ListChecks,
  BrainCircuit,
  BookOpen,
  Gauge,
  FileCheck,
  BarChart3,
} from "lucide-react";

const items = [
  { href: "/vet/objetivo", label: "Objetivo", icon: Target },
  { href: "/vet/diagnostico", label: "Diagnóstico", icon: Activity },
  { href: "/vet/prioridades", label: "Prioridades", icon: ListChecks },
  { href: "/vet/treino", label: "Treino", icon: BrainCircuit },
  { href: "/vet/questoes", label: "Questões", icon: BookOpen },
  { href: "/vet/nivelamento", label: "Nivelamento", icon: Gauge },
  { href: "/vet/simulado", label: "Simulado", icon: FileCheck },
  { href: "/vet/simulado/resultado", label: "Resultado", icon: BarChart3 },
];

export function VetModuleNav() {
  const [location] = useLocation();

  return (
    <section className="container pt-6">
      <div className="rounded-2xl border border-slate-200 bg-white/85 backdrop-blur-sm p-3 shadow-sm">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              location === item.href ||
              (item.href !== "/vet/simulado/resultado" &&
                location.startsWith(item.href));

            return (
              <Link key={item.href} href={item.href}>
                <button
                  className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold border transition-all ${
                    active
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
