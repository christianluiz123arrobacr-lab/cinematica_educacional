import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

interface ProgressItem {
  id: string;
  name: string;
  completed: boolean;
  category: "cinematica" | "dinamica";
}

export function ProgressTracker() {
  const [progress, setProgress] = useState<ProgressItem[]>([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  // Inicializar progresso do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("physics_progress");
    if (saved) {
      setProgress(JSON.parse(saved));
    } else {
      const defaultProgress: ProgressItem[] = [
        // Cinemática
        { id: "cin-learn", name: "Guia de Cinemática", completed: false, category: "cinematica" },
        { id: "cin-calc", name: "Calculadora de Cinemática", completed: false, category: "cinematica" },
        { id: "cin-formulas", name: "Fórmulas de Cinemática", completed: false, category: "cinematica" },
        { id: "cin-quiz", name: "Quiz de Cinemática", completed: false, category: "cinematica" },
        { id: "cin-graphs", name: "Gráficos de Cinemática", completed: false, category: "cinematica" },
        { id: "cin-sim", name: "Simulador de Cinemática", completed: false, category: "cinematica" },
        // Dinâmica
        { id: "din-learn", name: "Guia de Dinâmica", completed: false, category: "dinamica" },
        { id: "din-calc", name: "Calculadora de Dinâmica", completed: false, category: "dinamica" },
        { id: "din-formulas", name: "Fórmulas de Dinâmica", completed: false, category: "dinamica" },
        { id: "din-quiz", name: "Quiz de Dinâmica", completed: false, category: "dinamica" },
        { id: "din-graphs", name: "Gráficos de Dinâmica", completed: false, category: "dinamica" },
        { id: "din-sim", name: "Simulador de Dinâmica", completed: false, category: "dinamica" },
      ];
      setProgress(defaultProgress);
      localStorage.setItem("physics_progress", JSON.stringify(defaultProgress));
    }
  }, []);

  // Calcular percentual de conclusão
  useEffect(() => {
    if (progress.length > 0) {
      const completed = progress.filter((p) => p.completed).length;
      const percentage = Math.round((completed / progress.length) * 100);
      setCompletionPercentage(percentage);
    }
  }, [progress]);

  const markAsCompleted = (id: string) => {
    const updated = progress.map((p) => (p.id === id ? { ...p, completed: true } : p));
    setProgress(updated);
    localStorage.setItem("physics_progress", JSON.stringify(updated));
  };

  const cinematicaProgress = progress.filter((p) => p.category === "cinematica");
  const dinamicaProgress = progress.filter((p) => p.category === "dinamica");

  const cinematicaCompleted = cinematicaProgress.filter((p) => p.completed).length;
  const dinamicaCompleted = dinamicaProgress.filter((p) => p.completed).length;

  return (
    <div className="space-y-6">
      {/* Overall Progress */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Seu Progresso Geral</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">Conclusão</span>
            <span className="text-lg font-bold text-blue-600">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-xs text-slate-600">
            {progress.filter((p) => p.completed).length} de {progress.length} tópicos concluídos
          </p>
        </div>
      </Card>

      {/* Cinemática Progress */}
      <Card className="p-6 border-0">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-slate-900">Cinemática</h4>
            <span className="text-sm font-semibold text-blue-600">
              {cinematicaCompleted}/{cinematicaProgress.length}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-500 h-full transition-all duration-500"
              style={{ width: `${(cinematicaCompleted / cinematicaProgress.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="space-y-2">
          {cinematicaProgress.map((item) => (
            <button
              key={item.id}
              onClick={() => markAsCompleted(item.id)}
              className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors text-left"
            >
              {item.completed ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-slate-300 flex-shrink-0" />
              )}
              <span className={`text-sm ${item.completed ? "text-slate-500 line-through" : "text-slate-700"}`}>
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </Card>

      {/* Dinâmica Progress */}
      <Card className="p-6 border-0">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-slate-900">Dinâmica</h4>
            <span className="text-sm font-semibold text-purple-600">
              {dinamicaCompleted}/{dinamicaProgress.length}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-purple-500 h-full transition-all duration-500"
              style={{ width: `${(dinamicaCompleted / dinamicaProgress.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="space-y-2">
          {dinamicaProgress.map((item) => (
            <button
              key={item.id}
              onClick={() => markAsCompleted(item.id)}
              className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors text-left"
            >
              {item.completed ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-slate-300 flex-shrink-0" />
              )}
              <span className={`text-sm ${item.completed ? "text-slate-500 line-through" : "text-slate-700"}`}>
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
