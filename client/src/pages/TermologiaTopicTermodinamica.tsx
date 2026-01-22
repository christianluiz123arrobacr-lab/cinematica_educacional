import { Link } from "wouter";
import { ArrowLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { PVDiagramSimulator } from "@/components/PVDiagramSimulator";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";

export default function TermologiaTopicTermodinamica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/termologia">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Termodinâmica</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* ===== SEÇÃO 1: INTRODUÇÃO ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">⚡ O que é Termodinâmica?</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Definição</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                <strong>Termodinâmica é a ciência que estuda as transformações de energia, especialmente a conversão entre calor e trabalho.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Ela responde perguntas como: "Como um motor de carro transforma calor em movimento?" ou "Por que não podemos criar uma máquina 100% eficiente?"
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">💡 Exemplos Práticos:</h4>
              <div className="space-y-2 text-slate-700 text-sm">
                <p>• Motor de carro: Queima gasolina (calor) para fazer o carro se mover (trabalho)</p>
                <p>• Refrigerador: Usa trabalho para transferir calor de dentro para fora</p>
                <p>• Usina termelétrica: Queima combustível para gerar eletricidade</p>
                <p>• Seu corpo: Queima alimento para gerar calor e movimento</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2: 1ª LEI DA TERMODINÂMICA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📜 1ª Lei da Termodinâmica</h2>
          
          <p className="text-slate-700 mb-6">
            A 1ª Lei é a Lei da Conservação de Energia aplicada à termodinâmica. Ela diz que a energia não pode ser criada nem destruída, apenas transformada.
          </p>

          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A Fórmula</h3>
              
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula={String.raw`$$$$\\Delta U = Q - W$$$$`} display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>ΔU</strong> = Variação de energia interna (em Joules - J)</p>
                <p>• <strong>Q</strong> = Calor absorvido pelo sistema (em Joules - J)</p>
                <p>• <strong>W</strong> = Trabalho realizado pelo sistema (em Joules - J)</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm">
                  <strong>Interpretação:</strong> A variação de energia interna é igual ao calor que entra menos o trabalho que sai. Se você aquece um gás em um cilindro, parte da energia vai aumentar a temperatura (energia interna) e parte vai fazer o gás expandir (trabalho).
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg border border-blue-300">
              <p className="font-bold mb-3">📝 Exemplo Prático:</p>
              <p className="text-slate-700 text-sm mb-3">Um gás absorve 1.000 J de calor e realiza 600 J de trabalho. Qual é a variação de energia interna?</p>
              
              <div className="bg-white p-3 rounded mt-2">
                <MathFormula formula={String.raw`$$$$\\Delta U = Q - W = 1.000 - 600 = 400 \\text{ J}$$$$`} display={true} />
                <p className="text-slate-700 text-sm mt-2">Resposta: A energia interna aumentou em 400 J.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 3: 2ª LEI DA TERMODINÂMICA ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📜 2ª Lei da Termodinâmica</h2>
          
          <p className="text-slate-700 mb-6">
            A 2ª Lei fala sobre a direção dos processos termodinâmicos. Ela diz que o calor sempre flui do quente para o frio, e que a entropia (desordem) sempre aumenta.
          </p>

          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A Fórmula</h3>
              
              <div className="bg-white border border-red-300 rounded p-4 mb-4">
                <MathFormula formula={String.raw`$$$$\\Delta S \\geq 0$$$$`} display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>ΔS</strong> = Variação de entropia (em J/K)</p>
                <p>• A entropia nunca diminui em um processo natural</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm">
                  <strong>Interpretação:</strong> A entropia é uma medida da desordem. Um quarto arrumado tem baixa entropia. Um quarto bagunçado tem alta entropia. Naturalmente, as coisas tendem a ficar mais desordenadas (entropia aumenta).
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg border border-red-300">
              <p className="font-bold mb-3">💡 Consequências Importantes:</p>
              <div className="space-y-2 text-slate-700 text-sm">
                <p>• <strong>Calor flui do quente para o frio:</strong> Nunca o contrário, sem trabalho externo</p>
                <p>• <strong>Máquinas não são 100% eficientes:</strong> Sempre há perda de calor para o ambiente</p>
                <p>• <strong>Morte térmica do universo:</strong> Eventualmente, tudo terá a mesma temperatura</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 4: PROCESSOS TERMODINÂMICOS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 4 Processos Termodinâmicos</h2>
          
          <p className="text-slate-700 mb-6">
            Existem 4 processos principais que um gás pode sofrer. Cada um tem características especiais.
          </p>

          <div className="space-y-8">
            {/* ISOTÉRMICO */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1️⃣ Processo Isotérmico (T = constante)</h3>
              <p className="text-slate-700 mb-3">Temperatura constante. Pressão e volume variam inversamente.</p>
              <div className="bg-white border border-blue-300 rounded p-3 mb-3">
                <MathFormula formula={String.raw`$$$$P \\cdot V = \\text{constante}$$$$`} display={true} />
              </div>
              <p className="text-slate-700 text-sm">Exemplo: Comprimir um gás muito lentamente, deixando ele resfriar.</p>
            </div>

            {/* ADIABÁTICO */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2️⃣ Processo Adiabático (Q = 0)</h3>
              <p className="text-slate-700 mb-3">Sem troca de calor com o ambiente. Pressão, volume e temperatura variam.</p>
              <div className="bg-white border border-red-300 rounded p-3 mb-3">
                <MathFormula formula={String.raw`$$$$P \\cdot V^\\gamma = \\text{constante}$$$$`} display={true} />
              </div>
              <p className="text-slate-700 text-sm">Exemplo: Bomba de ar - quando você comprime rápido, esquenta.</p>
            </div>

            {/* ISOBÁRICO */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3️⃣ Processo Isobárico (P = constante)</h3>
              <p className="text-slate-700 mb-3">Pressão constante. Volume e temperatura variam proporcionalmente.</p>
              <div className="bg-white border border-green-300 rounded p-3 mb-3">
                <MathFormula formula={String.raw`$$$$\\frac{V}{T} = \\text{constante}$$$$`} display={true} />
              </div>
              <p className="text-slate-700 text-sm">Exemplo: Aquecedor de água aberto - pressão atmosférica constante.</p>
            </div>

            {/* ISOCÓRICO */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4️⃣ Processo Isocórico (V = constante)</h3>
              <p className="text-slate-700 mb-3">Volume constante. Pressão e temperatura variam proporcionalmente.</p>
              <div className="bg-white border border-orange-300 rounded p-3 mb-3">
                <MathFormula formula={String.raw`$$$$\\frac{P}{T} = \\text{constante}$$$$`} display={true} />
              </div>
              <p className="text-slate-700 text-sm">Exemplo: Panela de pressão - volume fixo, pressão aumenta com temperatura.</p>
            </div>
          </div>
        </div>

        {/* ===== SIMULADOR: DIAGRAMA P-V ===== */}
        <PVDiagramSimulator />

        {/* ===== SEÇÃO 5: MÁQUINAS TÉRMICAS ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 my-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🚗 Máquinas Térmicas</h2>
          
          <p className="text-slate-700 mb-6">
            Uma máquina térmica transforma calor em trabalho. Exemplos: motores de carro, turbinas, etc.
          </p>

          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Eficiência de uma Máquina Térmica</h3>
              
              <div className="bg-white border border-blue-300 rounded p-4 mb-4">
                <MathFormula formula={String.raw`$$$$\\eta = \\frac{W}{Q_h} = \\frac{Q_h - Q_c}{Q_h} = 1 - \\frac{Q_c}{Q_h}$$$$`} display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>η</strong> = Eficiência (0 a 1, ou 0% a 100%)</p>
                <p>• <strong>W</strong> = Trabalho realizado (em Joules)</p>
                <p>• <strong>Q_h</strong> = Calor absorvido da fonte quente (em Joules)</p>
                <p>• <strong>Q_c</strong> = Calor rejeitado para a fonte fria (em Joules)</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm">
                  <strong>Interpretação:</strong> A eficiência é a fração do calor que se transforma em trabalho útil. O resto é desperdiçado como calor.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg border border-blue-300">
              <p className="font-bold mb-3">📝 Exemplo Prático:</p>
              <p className="text-slate-700 text-sm mb-3">Um motor absorve 1.000 J de calor e realiza 300 J de trabalho. Qual é a eficiência?</p>
              
              <div className="bg-white p-3 rounded mt-2">
                <MathFormula formula={String.raw`$$$$\\eta = \\frac{W}{Q_h} = \\frac{300}{1.000} = 0,3 = 30\\%$$$$`} display={true} />
                <p className="text-slate-700 text-sm mt-2">Resposta: O motor tem 30% de eficiência. 700 J são desperdiçados como calor.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 6: CICLO DE CARNOT ===== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🏆 Ciclo de Carnot</h2>
          
          <p className="text-slate-700 mb-6">
            O Ciclo de Carnot é a máquina térmica mais eficiente possível. Nenhuma máquina real pode ser mais eficiente que Carnot.
          </p>

          <div className="space-y-8">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Eficiência Máxima de Carnot</h3>
              
              <div className="bg-white border border-purple-300 rounded p-4 mb-4">
                <MathFormula formula={String.raw`$$$$\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}$$$$`} display={true} />
              </div>

              <div className="space-y-3 text-slate-700 mb-4">
                <p><strong>Onde:</strong></p>
                <p>• <strong>T_c</strong> = Temperatura da fonte fria (em Kelvin)</p>
                <p>• <strong>T_h</strong> = Temperatura da fonte quente (em Kelvin)</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="text-slate-700 text-sm">
                  <strong>Interpretação:</strong> A eficiência depende apenas das temperaturas das fontes. Quanto maior a diferença de temperatura, maior a eficiência possível.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border border-purple-300">
              <p className="font-bold mb-3">📝 Exemplo Prático:</p>
              <p className="text-slate-700 text-sm mb-3">Uma máquina de Carnot opera entre 600 K (quente) e 300 K (frio). Qual é a eficiência máxima?</p>
              
              <div className="bg-white p-3 rounded mt-2">
                <MathFormula formula={String.raw`$$$$\\eta_{Carnot} = 1 - \\frac{300}{600} = 1 - 0,5 = 0,5 = 50\\%$$$$`} display={true} />
                <p className="text-slate-700 text-sm mt-2">Resposta: A eficiência máxima é 50%. Nenhuma máquina real pode fazer melhor.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== EXERCÍCIOS INTERATIVOS ===== */}
        <div className="my-8">
          <InteractiveQuiz />
        </div>

        {/* ===== RESUMO RÁPIDO ===== */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">📋 Resumo Rápido</h3>
          <div className="space-y-3 text-green-900">
            <p><strong>1ª Lei:</strong> ΔU = Q - W (Energia se conserva)</p>
            
            <p className="mt-4"><strong>2ª Lei:</strong> ΔS ≥ 0 (Entropia aumenta)</p>
            
            <p className="mt-4"><strong>4 Processos:</strong></p>
            <p className="ml-4">• Isotérmico: T = const</p>
            <p className="ml-4">• Adiabático: Q = 0</p>
            <p className="ml-4">• Isobárico: P = const</p>
            <p className="ml-4">• Isocórico: V = const</p>
            
            <p className="mt-4"><strong>Eficiência de Carnot:</strong> η = 1 - (T_c / T_h)</p>
          </div>
        </div>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Você completou Termologia! Explore:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia">
              <Button className="bg-blue-600 hover:bg-blue-700">Voltar para Termologia</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Projeto ITA - Do Zero a Aprovação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
