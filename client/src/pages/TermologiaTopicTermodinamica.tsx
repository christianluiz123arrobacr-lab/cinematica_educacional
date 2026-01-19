import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermologiaTopicTermodinamica() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-50 to-amber-50">
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
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
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
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">⚡ O que é Termodinâmica?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Termodinâmica é o <strong>estudo das relações entre calor, trabalho e energia</strong>. Ela explica como a energia térmica pode ser convertida em trabalho mecânico (como em motores) e vice-versa. É a base para entender máquinas térmicas, refrigeradores e até o universo!
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              <strong>Analogia:</strong> A termodinâmica é como as "regras do jogo" da energia. Ela nos diz o que é possível e o que é impossível fazer com a energia térmica.
            </p>
          </div>
        </div>

        {/* Primeira Lei */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔥 Primeira Lei da Termodinâmica</h2>
          
          <p className="text-slate-700 mb-6">
            A <strong>Primeira Lei</strong> é uma aplicação do princípio de conservação de energia:
          </p>

          <div className="bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 rounded-lg p-6 mb-6">
            <div className="text-center font-mono text-lg text-slate-800 mb-2">ΔU = Q - W</div>
            <div className="text-center text-sm text-slate-700">
              <p><strong>ΔU:</strong> Variação de energia interna (em J)</p>
              <p><strong>Q:</strong> Calor recebido pelo sistema (em J)</p>
              <p><strong>W:</strong> Trabalho realizado pelo sistema (em J)</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-slate-900 mb-3">Interpretação:</h4>
            <ul className="space-y-2 text-slate-700">
              <li>✓ Se Q {'>'}  0: Sistema recebe calor (aquecimento)</li>
              <li>✓ Se Q {'<'} 0: Sistema cede calor (resfriamento)</li>
              <li>✓ Se W {'>'}  0: Sistema realiza trabalho (expansão)</li>
              <li>✓ Se W {'<'} 0: Sistema recebe trabalho (compressão)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-900">
              <strong>Significado:</strong> A variação de energia interna de um sistema é igual ao calor recebido menos o trabalho realizado. A energia não desaparece; ela apenas muda de forma!
            </p>
          </div>
        </div>

        {/* Segunda Lei */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">❄️ Segunda Lei da Termodinâmica</h2>
          
          <p className="text-slate-700 mb-6">
            A <strong>Segunda Lei</strong> estabelece a direção dos processos termodinâmicos:
          </p>

          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-400 rounded-lg p-6 mb-6">
            <div className="text-center text-slate-800 mb-2">
              <strong>A entropia de um sistema isolado sempre aumenta ou permanece constante.</strong>
            </div>
            <div className="text-center text-sm text-slate-700 mt-3">
              <p>ΔS ≥ 0 (para sistemas isolados)</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-slate-900 mb-3">O que é Entropia?</h4>
            <p className="text-slate-700 mb-3">
              Entropia é uma medida do <strong>grau de desordem</strong> de um sistema. Quanto maior a entropia, maior a desordem.
            </p>
            <div className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <span>🔹</span>
                <span><strong>Baixa entropia:</strong> Sistema organizado (ex: gelo)</span>
              </li>
              <li className="flex gap-2">
                <span>🔹</span>
                <span><strong>Alta entropia:</strong> Sistema desorganizado (ex: vapor)</span>
              </li>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <p className="text-purple-900">
              <strong>Significado:</strong> Processos naturais sempre aumentam a desordem. Por isso, o calor flui do quente para o frio (nunca o contrário), e você não pode "desmesurar" um café com leite!
            </p>
          </div>
        </div>

        {/* Processos Termodinâmicos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔄 Processos Termodinâmicos</h2>
          
          <div className="space-y-6">
            {/* Isobárico */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Processo Isobárico (Pressão Constante)</h3>
              <p className="text-slate-700 mb-3">
                A pressão permanece constante enquanto o volume e temperatura variam.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700 font-mono">W = P · ΔV</p>
              </div>
            </div>

            {/* Isocórico */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Processo Isocórico (Volume Constante)</h3>
              <p className="text-slate-700 mb-3">
                O volume permanece constante. Não há trabalho realizado!
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700 font-mono">W = 0  →  ΔU = Q</p>
              </div>
            </div>

            {/* Isotérmico */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Processo Isotérmico (Temperatura Constante)</h3>
              <p className="text-slate-700 mb-3">
                A temperatura permanece constante. A energia interna não varia!
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700 font-mono">ΔU = 0  →  Q = W</p>
              </div>
            </div>

            {/* Adiabático */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Processo Adiabático (Sem Troca de Calor)</h3>
              <p className="text-slate-700 mb-3">
                Não há troca de calor com o ambiente. Toda a variação de energia interna vira trabalho!
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700 font-mono">Q = 0  →  ΔU = -W</p>
              </div>
            </div>
          </div>
        </div>

        {/* Máquinas Térmicas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔧 Máquinas Térmicas</h2>
          
          <p className="text-slate-700 mb-6">
            Uma máquina térmica converte calor em trabalho. Exemplo: motores de carro, usinas de energia.
          </p>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-400 rounded-lg p-6 mb-6">
            <div className="text-center font-mono text-lg text-slate-800 mb-2">η = W / Q_H = 1 - (Q_C / Q_H)</div>
            <div className="text-center text-sm text-slate-700">
              <p><strong>η:</strong> Rendimento (eficiência) da máquina</p>
              <p><strong>W:</strong> Trabalho realizado</p>
              <p><strong>Q_H:</strong> Calor recebido da fonte quente</p>
              <p><strong>Q_C:</strong> Calor cedido para a fonte fria</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-900">
              <strong>Importante:</strong> Nenhuma máquina térmica tem 100% de rendimento! Sempre há perda de calor para o ambiente.
            </p>
          </div>
        </div>

        {/* Exemplos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplo Prático</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h4 className="font-bold text-slate-900 mb-3">Problema: Primeira Lei da Termodinâmica</h4>
            <p className="text-slate-700 mb-3">
              Um gás recebe 500 J de calor e realiza 200 J de trabalho. Qual é a variação de sua energia interna?
            </p>
            <div className="bg-white p-4 rounded">
              <p className="text-slate-700 mb-2"><strong>Solução:</strong></p>
              <p className="text-slate-600 mb-1">ΔU = Q - W</p>
              <p className="text-slate-600 mb-1">ΔU = 500 - 200</p>
              <p className="text-slate-600"><strong>ΔU = 300 J</strong></p>
              <p className="text-slate-600 mt-3 text-sm">A energia interna do gás aumentou 300 J.</p>
            </div>
          </div>
        </div>

        {/* Erros Comuns */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Erros Comuns</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir Q e W:</strong> Q é calor (energia térmica); W é trabalho (energia mecânica).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer os sinais:</strong> Q positivo = recebe calor; W positivo = realiza trabalho.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Achar que máquinas podem ter 100% de rendimento:</strong> Impossível! A Segunda Lei proíbe.</span>
            </li>
          </ul>
        </div>

        {/* Dicas Práticas */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">💡 Dicas Práticas</h3>
          <ul className="space-y-3 text-green-900">
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Desenhe diagramas P-V:</strong> Ajuda a visualizar os processos termodinâmicos.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Memorize os 4 processos:</strong> Isobárico, Isocórico, Isotérmico, Adiabático.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Sempre use a Primeira Lei:</strong> ΔU = Q - W é a base de tudo em termodinâmica.</span>
            </li>
          </ul>
        </div>

        {/* Próximos Passos */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você entende termodinâmica, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/dilatacao">
              <Button className="bg-blue-600 hover:bg-blue-700">Dilatação Térmica</Button>
            </Link>
            <Link href="/termologia/simulator">
              <Button variant="outline">Usar Simulador</Button>
            </Link>
            <Link href="/termologia/quiz">
              <Button variant="outline">Fazer Quiz</Button>
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
