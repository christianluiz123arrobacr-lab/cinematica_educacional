import { Link } from "wouter";
import { ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function EletricidadeTopicEletrostatica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/eletricidade">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Eletricidade</h1>
              <p className="text-xs text-slate-600">Eletrostática</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ Introdução à Eletrostática</h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Eletrostática?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Eletrostática</strong> é o ramo da física que estuda as cargas elétricas em repouso e os fenômenos relacionados a elas, como a força elétrica, o campo elétrico e o potencial elétrico.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Toda a matéria é composta por átomos, que contêm partículas carregadas: prótons (carga positiva) e elétrons (carga negativa). A interação entre essas cargas é a base de quase todos os fenômenos que observamos no dia a dia, desde a estrutura da matéria até a eletricidade que usamos.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Princípios Fundamentais</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Princípio da Atração e Repulsão:</strong> Cargas de mesmo sinal se repelem, e cargas de sinais opostos se atraem.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Princípio da Conservação da Carga Elétrica:</strong> Em um sistema isolado, a soma algébrica das cargas elétricas é constante.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Quantização da Carga Elétrica:</strong> A carga elétrica de um corpo é sempre um múltiplo inteiro da carga elementar ($e \approx 1,6 \cdot 10^{-19} C$).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Lei de Coulomb</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A Força Elétrica</h3>
              <p className="text-slate-700 mb-4">
                A Lei de Coulomb descreve a força de interação entre duas cargas elétricas pontuais em repouso. A magnitude da força é diretamente proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância entre elas.
              </p>
              <div className="bg-white border border-slate-300 rounded p-4 mb-4">
                <MathFormula formula="F = k \cdot \frac{|q_1 \cdot q_2|}{d^2}" display={true} />
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Onde:
                <br/>$F$ = Força elétrica (N)
                <br/>$k$ = Constante eletrostática do meio ($k_0 \approx 9 \cdot 10^9 N \cdot m^2/C^2$ no vácuo)
                <br/>$q_1, q_2$ = Cargas elétricas (C)
                <br/>$d$ = Distância entre as cargas (m)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌐 Campo Elétrico</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Definição de Campo</h3>
              <p className="text-slate-700 mb-4">
                O campo elétrico é uma região do espaço onde uma carga elétrica de prova sofre a ação de uma força elétrica. É uma grandeza vetorial, possuindo módulo, direção e sentido.
              </p>
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="\vec{E} = \frac{\vec{F}}{q}" display={true} />
              </div>
              <p className="text-slate-700 mb-4">
                Para uma carga pontual $Q$, o módulo do campo elétrico a uma distância $d$ é dado por:
              </p>
              <div className="bg-white border border-orange-300 rounded p-4 mb-4">
                <MathFormula formula="E = k \cdot \frac{|Q|}{d^2}" display={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for Interactive Tools */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col items-center justify-center text-center opacity-70">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">Simulador de Cargas</h3>
            <p className="text-slate-500">Em breve: Visualize as linhas de campo e forças entre cargas.</p>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col items-center justify-center text-center opacity-70">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">Calculadora de Coulomb</h3>
            <p className="text-slate-500">Em breve: Calcule forças e campos elétricos automaticamente.</p>
          </div>
        </div>

      </section>
    </div>
  );
}
