import React from "react";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MathFormula } from "@/components/MathFormula";
import { BookOpen, GraduationCap, Calculator } from "lucide-react";

// Exportando a interface para uso externo
export interface Section {
  title: string;
  content: React.ReactNode;
}

interface AdvancedTheoryProps {
  title: string;
  introduction: React.ReactNode;
  sections: Section[];
}

export const AdvancedTheory: React.FC<AdvancedTheoryProps> = ({
  title,
  introduction,
  sections,
}) => {
  return (
    <div className="space-y-6 mt-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <GraduationCap className="w-6 h-6 text-indigo-700" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Teoria Aprofundada (Nível ITA/IME)</h2>
          <p className="text-sm text-slate-600">Fundamentação matemática rigorosa e aplicações avançadas</p>
        </div>
      </div>

      <Card className="p-6 border-l-4 border-l-indigo-500 bg-slate-50">
        <div className="prose prose-slate max-w-none">
          {introduction}
        </div>
      </Card>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {sections.map((section, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg bg-white px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3 text-left">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span className="font-semibold text-slate-800 text-lg">{section.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6">
              <div className="prose prose-slate max-w-none prose-headings:text-indigo-900 prose-a:text-indigo-600">
                {/* Renderizar conteúdo que pode conter MathFormula */}
                {typeof section.content === 'string' ? (
                   // Se for string crua com LaTeX, processar via MathFormula se necessário ou renderizar direto
                   // Aqui assumimos que o conteúdo pode ser misto. 
                   // Para simplificar, vamos renderizar como MathFormula se for string, pois nosso conteúdo usa Markdown + LaTeX
                   <MathFormula formula={section.content} />
                ) : (
                  section.content
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export const ExampleProblem: React.FC<{
  title: string;
  problem: React.ReactNode;
  solution: React.ReactNode;
  difficulty?: "Fácil" | "Médio" | "Difícil" | "ITA/IME";
}> = ({ title, problem, solution, difficulty = "Médio" }) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Fácil": return "bg-green-100 text-green-800 border-green-200";
      case "Médio": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Difícil": return "bg-orange-100 text-orange-800 border-orange-200";
      case "ITA/IME": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <div className="mt-6 border border-slate-200 rounded-lg overflow-hidden">
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-slate-500" />
          <span className="font-bold text-slate-700">{title}</span>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full border font-semibold ${getDifficultyColor(difficulty)}`}>
          {difficulty}
        </span>
      </div>
      <div className="p-4 bg-white">
        <div className="mb-4 text-slate-800 italic">
          {problem}
        </div>
        <div className="bg-slate-50 p-4 rounded border border-slate-100">
          <p className="text-xs font-bold text-slate-500 uppercase mb-2">Resolução:</p>
          <div className="text-slate-700 space-y-2">
            {solution}
          </div>
        </div>
      </div>
    </div>
  );
};
