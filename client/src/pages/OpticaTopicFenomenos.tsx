import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAOpticsPhenomenaTheory } from "@/content/optics/ita_optics_phenomena";

export default function OpticaTopicFenomenos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/optica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-slate-900">Fenômenos Ópticos (ITA/IME)</h1>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <AdvancedTheory 
          title={ITAOpticsPhenomenaTheory.title}
          introduction={ITAOpticsPhenomenaTheory.introduction}
          sections={ITAOpticsPhenomenaTheory.sections}
        />
      </section>
    </div>
  );
}
