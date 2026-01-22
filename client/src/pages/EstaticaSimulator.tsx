import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { ForceBalanceSimulator } from "@/components/ForceBalanceSimulator";
import { TorqueSimulator } from "@/components/TorqueSimulator";
import { SimpleMachinesSimulator } from "@/components/SimpleMachinesSimulator";
import { HydrostaticsSimulator } from "@/components/HydrostaticsSimulator";

export default function EstaticaSimulator() {
  const [activeTab, setActiveTab] = useState("equilibrio");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/estatica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Simulador de Estática</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12">
        <div className="space-y-6">
          {/* Abas de Navegação */}
          <div className="flex gap-2 flex-wrap">
            {[
              { id: "equilibrio", label: "Equilíbrio de Forças" },
              { id: "torque", label: "Torque e Momento" },
              { id: "maquinas", label: "Máquinas Simples" },
              { id: "hidrostatica", label: "Hidrostática" },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* ===== EQUILÍBRIO DE FORÇAS ===== */}
          {activeTab === "equilibrio" && (
            <Card className="p-6 shadow-lg border-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Equilíbrio de Forças</h2>
                  <p className="text-slate-600">Ajuste as forças e ângulos para alcançar o equilíbrio (resultante ≈ 0)</p>
                </div>
                <ForceBalanceSimulator />
              </div>
            </Card>
          )}

          {/* ===== TORQUE ===== */}
          {activeTab === "torque" && (
            <Card className="p-6 shadow-lg border-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Torque e Momento</h2>
                  <p className="text-slate-600">Equilibre a gangorra ajustando forças e distâncias.</p>
                </div>
                <TorqueSimulator />
              </div>
            </Card>
          )}

          {/* ===== MÁQUINAS SIMPLES ===== */}
          {activeTab === "maquinas" && (
            <Card className="p-6 shadow-lg border-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Máquinas Simples</h2>
                  <p className="text-slate-600">Explore como alavancas, planos inclinados e polias facilitam o trabalho.</p>
                </div>
                <SimpleMachinesSimulator />
              </div>
            </Card>
          )}

          {/* ===== HIDROSTÁTICA ===== */}
          {activeTab === "hidrostatica" && (
            <Card className="p-6 shadow-lg border-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Hidrostática (Lei de Stevin)</h2>
                  <p className="text-slate-600">Veja como a pressão varia com a profundidade e a densidade do fluido.</p>
                </div>
                <HydrostaticsSimulator />
              </div>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
