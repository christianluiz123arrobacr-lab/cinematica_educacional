import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicSom() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-slate-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/ondulatoria">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Ondulatória</h1>
              <p className="text-xs text-slate-600">Ondas Sonoras</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔊 Ondas Sonoras</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O Que é Som?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Som é uma onda mecânica longitudinal que se propaga através de um meio (ar, água, sólidos).</strong>
              </p>
              <p className="text-slate-700 leading-relaxed">
                O som é criado quando algo vibra. Essa vibração causa que as moléculas do meio se comprimam e se expandam, criando uma onda que viaja até nossos ouvidos.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Velocidade do Som</h3>
              <p className="text-slate-700 mb-4">
                A velocidade do som depende do meio:
              </p>
              <div className="bg-white border border-purple-300 rounded p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-purple-300">
                      <th className="text-left p-2 font-bold">Meio</th>
                      <th className="text-center p-2 font-bold">Velocidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-purple-200">
                      <td className="p-2">Ar (20°C)</td>
                      <td className="text-center p-2"><MathFormula formula="343 \\text{ m/s}" display={false} /></td>
                    </tr>
                    <tr className="border-b border-purple-200">
                      <td className="p-2">Água</td>
                      <td className="text-center p-2"><MathFormula formula="1480 \\text{ m/s}" display={false} /></td>
                    </tr>
                    <tr>
                      <td className="p-2">Aço</td>
                      <td className="text-center p-2"><MathFormula formula="5000 \\text{ m/s}" display={false} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Efeito Doppler</h3>
              <p className="text-slate-700 mb-4">
                <strong>O Efeito Doppler é a mudança de frequência quando a fonte de som se move em relação ao observador.</strong>
              </p>
              <p className="text-slate-700 mb-4">
                Exemplo: quando uma ambulância se aproxima, o som é mais agudo (frequência maior). Quando se afasta, o som é mais grave (frequência menor).
              </p>
              <div className="bg-white border border-green-300 rounded p-4 mt-4">
                <p className="font-bold text-slate-900 mb-2">Frequência Observada (fonte se aproximando):</p>
                <MathFormula formula="f' = f \\frac{v + v_o}{v - v_s}" display={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Pontos-Chave</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Som precisa de um meio:</strong> Não há som no vácuo!
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Som viaja mais rápido em meios mais densos:</strong> Ar &lt; Água &lt; Aço
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Frequência audível humana:</strong> <MathFormula formula="20 \\text{ Hz a } 20000 \\text{ Hz}" display={false} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
