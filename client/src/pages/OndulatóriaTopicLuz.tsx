import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicLuz() {
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
              <p className="text-xs text-slate-600">Ondas Eletromagnéticas e Luz</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">💡 Ondas Eletromagnéticas</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O Que é uma Onda Eletromagnética?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Uma onda eletromagnética é uma onda que não precisa de um meio para se propagar.</strong> Ela é uma oscilação de campos elétricos e magnéticos que viajam pelo espaço.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A luz é um tipo de onda eletromagnética. Outras ondas eletromagnéticas incluem ondas de rádio, micro-ondas, raios X e raios gama.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Velocidade da Luz</h3>
              <p className="text-slate-700 mb-4">
                A velocidade de todas as ondas eletromagnéticas no vácuo é a mesma:
              </p>
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula="c = 3 \\times 10^8 \\text{ m/s}" display={true} />
              </div>
              <p className="text-slate-600 text-sm">
                Essa é uma das constantes mais importantes da física!
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Espectro Eletromagnético</h3>
              <p className="text-slate-700 mb-4">
                As ondas eletromagnéticas são classificadas por sua frequência (ou comprimento de onda):
              </p>
              <div className="bg-white border border-green-300 rounded p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-green-300">
                      <th className="text-left p-2 font-bold">Tipo</th>
                      <th className="text-center p-2 font-bold">Comprimento de Onda</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-200">
                      <td className="p-2">Ondas de Rádio</td>
                      <td className="text-center p-2"><MathFormula formula="> 1 \\text{ m}" display={false} /></td>
                    </tr>
                    <tr className="border-b border-green-200">
                      <td className="p-2">Micro-ondas</td>
                      <td className="text-center p-2"><MathFormula formula="1 \\text{ mm} - 1 \\text{ m}" display={false} /></td>
                    </tr>
                    <tr className="border-b border-green-200">
                      <td className="p-2">Luz Infravermelha</td>
                      <td className="text-center p-2"><MathFormula formula="700 \\text{ nm} - 1 \\text{ mm}" display={false} /></td>
                    </tr>
                    <tr className="border-b border-green-200">
                      <td className="p-2">Luz Visível</td>
                      <td className="text-center p-2"><MathFormula formula="400 \\text{ nm} - 700 \\text{ nm}" display={false} /></td>
                    </tr>
                    <tr className="border-b border-green-200">
                      <td className="p-2">Luz Ultravioleta</td>
                      <td className="text-center p-2"><MathFormula formula="10 \\text{ nm} - 400 \\text{ nm}" display={false} /></td>
                    </tr>
                    <tr className="border-b border-green-200">
                      <td className="p-2">Raios X</td>
                      <td className="text-center p-2"><MathFormula formula="0,01 \\text{ nm} - 10 \\text{ nm}" display={false} /></td>
                    </tr>
                    <tr>
                      <td className="p-2">Raios Gama</td>
                      <td className="text-center p-2"><MathFormula formula="< 0,01 \\text{ nm}" display={false} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Luz Visível</h3>
              <p className="text-slate-700 mb-4">
                A luz visível é apenas uma pequena parte do espectro eletromagnético:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Vermelho:</strong> <MathFormula formula="\\approx 700 \\text{ nm}" display={false} /> (menor frequência, maior comprimento de onda)</li>
                <li>• <strong>Laranja:</strong> <MathFormula formula="\\approx 620 \\text{ nm}" display={false} /></li>
                <li>• <strong>Amarelo:</strong> <MathFormula formula="\\approx 580 \\text{ nm}" display={false} /></li>
                <li>• <strong>Verde:</strong> <MathFormula formula="\\approx 530 \\text{ nm}" display={false} /></li>
                <li>• <strong>Azul:</strong> <MathFormula formula="\\approx 470 \\text{ nm}" display={false} /></li>
                <li>• <strong>Violeta:</strong> <MathFormula formula="\\approx 400 \\text{ nm}" display={false} /> (maior frequência, menor comprimento de onda)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Pontos-Chave</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Ondas eletromagnéticas não precisam de meio:</strong> Viajam no vácuo!
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Todas viajam à mesma velocidade:</strong> <MathFormula formula="c = 3 \\times 10^8 \\text{ m/s}" display={false} />
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Luz visível é apenas uma pequena parte:</strong> Do infravermelho ao ultravioleta.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Frequência mais alta = maior energia:</strong> Raios gama são mais perigosos que ondas de rádio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
