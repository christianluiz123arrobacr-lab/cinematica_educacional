import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function OndulatóriaTopicFenomenos() {
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
              <p className="text-xs text-slate-600">Fenômenos Ondulatórios</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Fenômenos Ondulatórios</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Reflexão</h3>
              <p className="text-slate-700 mb-4">
                <strong>Reflexão ocorre quando uma onda encontra um obstáculo e retorna.</strong>
              </p>
              <p className="text-slate-700 mb-4">
                Exemplo: quando você grita em um cânion, o som é refletido pelas paredes e volta para você como eco.
              </p>
              <p className="text-slate-600 text-sm">
                Lei da Reflexão: O ângulo de incidência é igual ao ângulo de reflexão.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Refração</h3>
              <p className="text-slate-700 mb-4">
                <strong>Refração ocorre quando uma onda muda de direção ao passar de um meio para outro.</strong>
              </p>
              <p className="text-slate-700 mb-4">
                Exemplo: quando você coloca uma colher em um copo com água, ela parece quebrada. Isso é refração da luz.
              </p>
              <div className="bg-white border border-green-300 rounded p-4 mt-4">
                <p className="font-bold text-slate-900 mb-2">Lei de Snell:</p>
                <MathFormula formula="n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2" display={true} />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Interferência</h3>
              <p className="text-slate-700 mb-4">
                <strong>Interferência ocorre quando duas ondas se encontram e se sobrepõem.</strong>
              </p>
              <p className="text-slate-700 mb-4">
                Se as ondas estão em fase (crista com crista), elas se reforçam (interferência construtiva). Se estão fora de fase (crista com vale), elas se cancelam (interferência destrutiva).
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Difração</h3>
              <p className="text-slate-700 mb-4">
                <strong>Difração ocorre quando uma onda contorna um obstáculo ou passa por uma fenda.</strong>
              </p>
              <p className="text-slate-700 mb-4">
                Exemplo: quando o som passa por uma porta aberta, ele se espalha para todos os lados da sala, não apenas em linha reta.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Polarização</h3>
              <p className="text-slate-700 mb-4">
                <strong>Polarização é a restrição da vibração a uma única direção.</strong>
              </p>
              <p className="text-slate-700 mb-4">
                Exemplo: óculos de sol polarizados bloqueiam a luz refletida em certas direções.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6">💪 Pontos-Chave</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Princípio da Superposição:</strong> Quando duas ondas se encontram, o deslocamento resultante é a soma dos deslocamentos individuais.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Frequência é invariante:</strong> A frequência não muda quando a onda passa de um meio para outro.
              </p>
            </div>

            <div className="bg-white border border-green-300 rounded p-4">
              <p className="text-slate-700">
                ✓ <strong>Velocidade depende do meio:</strong> Ondas viajam mais rápido em meios mais densos (para ondas mecânicas).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
