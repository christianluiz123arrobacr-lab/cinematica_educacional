import { Link } from "wouter";
import { ArrowLeft, Compass, Lightbulb, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function CinematicaTopicBases() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Cinemática</h1>
              <p className="text-xs text-slate-600">Bases da Cinemática — Referencial e Movimento</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">

        {/* ===================== INTRODUÇÃO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🧭 Bases da Cinemática</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Cinemática?</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Cinemática</strong> é o ramo da Mecânica que estuda o movimento dos corpos <em>sem se preocupar com as causas</em> desse movimento. Em outras palavras, ela descreve <strong>como</strong> um objeto se move — sua posição, velocidade e aceleração ao longo do tempo — mas não pergunta <strong>por que</strong> ele se move (isso é tarefa da Dinâmica).
              </p>
              <p className="text-slate-700 leading-relaxed">
                Para descrever qualquer movimento de forma precisa, precisamos antes estabelecer três conceitos fundamentais: o <strong>referencial</strong> (em relação a quem observamos), o <strong>ponto material</strong> (o que observamos) e a <strong>trajetória</strong> (o caminho percorrido). Esses três pilares formam a base de toda a Cinemática.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-600" />
                Conceitos Fundamentais
              </h4>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">1.</span>
                  <p><strong>Referencial:</strong> Todo movimento é relativo. Para descrever o movimento de um corpo, precisamos sempre especificar em relação a qual outro corpo estamos observando.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">2.</span>
                  <p><strong>Ponto Material:</strong> Simplificação fundamental que permite tratar um corpo como um único ponto, quando suas dimensões são desprezíveis em relação às distâncias envolvidas.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">3.</span>
                  <p><strong>Trajetória:</strong> O conjunto de todas as posições ocupadas por um ponto material ao longo do tempo. Sua forma depende do referencial escolhido.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== CONTEXTO HISTÓRICO ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📜 Contexto Histórico</h2>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Da Visão Absoluta à Visão Relativa do Movimento
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              Durante quase dois mil anos, o filósofo grego <strong>Aristóteles (384–322 a.C.)</strong> dominou o pensamento científico sobre o movimento. Para ele, o movimento era algo <em>absoluto</em>: um corpo ou estava em repouso ou estava em movimento, sem depender de nenhum observador. Além disso, ele acreditava que corpos mais pesados caíam mais rápido que os leves — uma ideia que parecia óbvia, mas estava errada.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              A revolução veio com <strong>Galileu Galilei (1564–1642)</strong>. Através de experimentos cuidadosos — incluindo os famosos experimentos com planos inclinados e a lendária (embora provavelmente apócrifa) queda de objetos da Torre de Pisa — Galileu demonstrou que todos os corpos, independentemente de sua massa, caem com a mesma aceleração no vácuo. Mais importante ainda, ele formulou o <strong>Princípio da Relatividade do Movimento</strong>: não existe movimento absoluto; todo movimento é relativo a um referencial.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Isaac Newton (1643–1727)</strong> consolidou esses conceitos ao formalizar as Leis do Movimento, introduzindo o conceito de <strong>referencial inercial</strong> — um referencial em que a Primeira Lei de Newton é válida. A Terra, em primeira aproximação, é tratada como um referencial inercial na maioria dos problemas do Ensino Médio.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <p className="font-bold text-slate-800 text-sm">Aristóteles</p>
              <p className="text-xs text-slate-500 mb-2">384–322 a.C.</p>
              <p className="text-xs text-slate-600">Movimento absoluto. Corpos pesados caem mais rápido.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔭</div>
              <p className="font-bold text-slate-800 text-sm">Galileu Galilei</p>
              <p className="text-xs text-slate-500 mb-2">1564–1642</p>
              <p className="text-xs text-slate-600">Movimento relativo ao referencial. Todos os corpos caem igual no vácuo.</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🍎</div>
              <p className="font-bold text-slate-800 text-sm">Isaac Newton</p>
              <p className="text-xs text-slate-500 mb-2">1643–1727</p>
              <p className="text-xs text-slate-600">Formaliza as Leis do Movimento e o referencial inercial.</p>
            </div>
          </div>
        </div>

        {/* ===================== REFERENCIAL ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📍 Referencial</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Definição Precisa</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                O <strong>referencial</strong> é o corpo (ou sistema de corpos) em relação ao qual se observa e descreve o movimento de outro corpo. Dizer que um corpo está "em movimento" ou "em repouso" sem especificar o referencial é uma afirmação incompleta e sem sentido físico.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-slate-700 text-sm">
                  <strong>Exemplo clássico:</strong> Um passageiro sentado num trem em movimento está <em>em repouso</em> em relação ao referencial do trem, mas está <em>em movimento</em> em relação ao referencial da Terra (o chão).
                </p>
              </div>
            </div>

            {/* Grid 2 colunas - Movimento vs. Repouso */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Movimento e Repouso são Relativos</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Em Repouso
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Um corpo está em <strong>repouso</strong> em relação a um referencial quando sua posição <strong>não se altera</strong> com o passar do tempo em relação a esse referencial.
                  </p>
                  <div className="mt-3 bg-white rounded p-3 text-xs text-slate-600">
                    <strong>Ex:</strong> Um livro sobre uma mesa está em repouso em relação à mesa e à Terra.
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Em Movimento
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Um corpo está em <strong>movimento</strong> em relação a um referencial quando sua posição <strong>se altera</strong> com o passar do tempo em relação a esse referencial.
                  </p>
                  <div className="mt-3 bg-white rounded p-3 text-xs text-slate-600">
                    <strong>Ex:</strong> O mesmo livro está em movimento em relação ao Sol (pois a Terra orbita o Sol).
                  </div>
                </div>
              </div>
            </div>

            {/* Caixa de destaque */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">💡 O Pulo do Gato — Princípio da Relatividade de Galileu</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                Galileu percebeu algo revolucionário: <strong>não é possível determinar, por experimentos mecânicos realizados dentro de um sistema, se esse sistema está em repouso ou em movimento retilíneo uniforme.</strong>
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Isso significa que, se você estiver num navio se movendo com velocidade constante em mar calmo, sem olhar para fora, não há nenhum experimento mecânico que você possa fazer para saber se o navio está parado ou em movimento. Esse princípio é a base da Teoria da Relatividade de Einstein.
              </p>
              <div className="bg-slate-800/70 p-4 rounded-lg">
                <p className="text-blue-300 font-semibold text-sm">Aplicação em provas ITA/IME:</p>
                <p className="text-slate-300 text-sm mt-1">
                  Problemas de "velocidade relativa" exploram exatamente esse princípio. A velocidade de A em relação a B é:
                </p>
                <MathFormula formula="\vec{v}_{A/B} = \vec{v}_A - \vec{v}_B" display={true} className="text-lg my-2" />
              </div>
            </div>
          </div>
        </div>

        {/* ===================== PONTO MATERIAL ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📌 Ponto Material vs. Corpo Extenso</h2>

          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Na Cinemática, frequentemente simplificamos os corpos reais tratando-os como <strong>pontos materiais</strong>. Essa simplificação é válida quando as dimensões do corpo são muito pequenas em comparação com as distâncias envolvidas no problema.
            </p>

            {/* Grid comparativo */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                <h4 className="font-semibold text-blue-400 mb-3">Ponto Material</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Corpo cujas dimensões são <strong>desprezíveis</strong> em relação às distâncias percorridas ou às dimensões do sistema em estudo. Todo o corpo é representado por um único ponto.
                </p>
                <div className="space-y-2 text-sm text-slate-400">
                  <p className="text-blue-300 font-semibold">Exemplos:</p>
                  <p>• Um avião voando de São Paulo ao Rio de Janeiro (distância ≈ 430 km; avião ≈ 70 m).</p>
                  <p>• A Terra orbitando o Sol (distância ≈ 150 milhões de km; Terra ≈ 12.700 km).</p>
                  <p>• Um carro numa rodovia de 500 km.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-3">Corpo Extenso</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Corpo cujas dimensões <strong>não podem ser desprezadas</strong> em relação às distâncias ou dimensões do sistema. Cada ponto do corpo pode ter velocidade e aceleração diferentes.
                </p>
                <div className="space-y-2 text-sm text-slate-400">
                  <p className="text-orange-300 font-semibold">Exemplos:</p>
                  <p>• Um navio atracando num porto (as extremidades do navio têm posições muito diferentes).</p>
                  <p>• Uma roda girando (cada ponto da roda tem velocidade diferente).</p>
                  <p>• Um satélite sendo lançado (rotação importa).</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Atenção — Erro Comum em Provas
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Em questões do ITA e IME, é comum o enunciado descrever um trem de comprimento L passando por um túnel de comprimento D. Nesse caso, o trem <strong>não pode</strong> ser tratado como ponto material, pois seu comprimento é comparável ao do túnel. O tempo de passagem completa é calculado considerando que o trem percorre uma distância de <strong>L + D</strong>, não apenas D.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== TRAJETÓRIA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🛤️ Trajetória</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Definição Precisa</h4>
              <p className="text-slate-700 leading-relaxed">
                A <strong>trajetória</strong> é o conjunto de todas as posições sucessivas ocupadas por um ponto material ao longo do tempo. Ela representa o "caminho" deixado pelo móvel no espaço. A forma da trajetória <strong>depende do referencial</strong> escolhido pelo observador.
              </p>
            </div>

            {/* Tipos de Trajetória */}
            <h3 className="text-xl font-bold text-slate-800 mb-4">Tipos de Trajetória</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                <div className="text-3xl mb-3">➡️</div>
                <h5 className="font-bold text-blue-800 mb-2">Retilínea</h5>
                <p className="text-xs text-slate-600">Trajetória em linha reta. Ocorre quando a força resultante é paralela à velocidade (ou nula).</p>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h5 className="font-bold text-indigo-800 mb-2">Circular</h5>
                <p className="text-xs text-slate-600">Trajetória em forma de circunferência. Ocorre quando a força resultante é sempre perpendicular à velocidade.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 text-center">
                <div className="text-3xl mb-3">🌊</div>
                <h5 className="font-bold text-purple-800 mb-2">Curvilínea</h5>
                <p className="text-xs text-slate-600">Qualquer trajetória que não seja reta nem circular. Ex: parábola do lançamento oblíquo.</p>
              </div>
            </div>

            {/* Trajetória depende do referencial */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">📐 A Trajetória Depende do Referencial</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                Este é um dos conceitos mais importantes e mais cobrados em provas de elite. A mesma situação física pode gerar trajetórias completamente diferentes dependendo do referencial do observador.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/70 p-4 rounded-lg">
                  <p className="font-semibold text-blue-300 mb-2">Situação: Pedra lançada horizontalmente de um trem em movimento</p>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p><strong className="text-blue-300">Referencial = Trem:</strong> O observador no trem vê a pedra cair em linha reta (trajetória retilínea vertical).</p>
                    <p><strong className="text-orange-300">Referencial = Terra:</strong> O observador no chão vê a pedra descrever uma parábola (trajetória curvilínea).</p>
                  </div>
                </div>
                <div className="bg-slate-800/70 p-4 rounded-lg">
                  <p className="font-semibold text-blue-300 mb-2">Situação: Ponta de um ponteiro de relógio</p>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p><strong className="text-blue-300">Referencial = Relógio:</strong> A ponta descreve uma circunferência.</p>
                    <p><strong className="text-orange-300">Referencial = Terra:</strong> A ponta descreve a mesma circunferência (pois o relógio está parado em relação à Terra).</p>
                    <p><strong className="text-green-300">Referencial = Sol:</strong> A ponta descreve uma espiral complexa (pois a Terra orbita o Sol).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== ESPAÇO, DESLOCAMENTO E DISTÂNCIA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Espaço, Deslocamento e Distância Percorrida</h2>

          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed">
              Três grandezas distintas descrevem a posição e o caminho de um móvel. Confundi-las é um dos erros mais comuns em provas — e o ITA e o IME adoram explorar exatamente essa distinção.
            </p>

            {/* Grid 3 colunas */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-5 shadow-xl">
                <h4 className="font-semibold text-blue-400 mb-3">Espaço (s)</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Posição do móvel na trajetória em relação à origem escolhida. Pode ser positivo ou negativo, dependendo do sentido adotado.
                </p>
                <MathFormula formula="s \in \mathbb{R}" display={true} className="text-base" />
                <p className="text-xs text-slate-400 mt-2">Unidade SI: metro (m)</p>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-5 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-3">Deslocamento (Δs)</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Variação de posição entre dois instantes. É a diferença entre a posição final e a inicial. Pode ser negativo (retrocesso).
                </p>
                <MathFormula formula="\Delta s = s_f - s_i" display={true} className="text-base" />
                <p className="text-xs text-slate-400 mt-2">Pode ser negativo!</p>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-5 shadow-xl">
                <h4 className="font-semibold text-green-400 mb-3">Distância Percorrida (d)</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Comprimento total do caminho percorrido pelo móvel. Sempre positiva ou nula, independentemente do sentido do movimento.
                </p>
                <MathFormula formula="d \geq 0" display={true} className="text-base" />
                <p className="text-xs text-slate-400 mt-2">Sempre não-negativa!</p>
              </div>
            </div>

            {/* Dedução com exemplo numérico */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
              <h4 className="font-semibold text-blue-400 mb-4">📐 Exemplo Numérico — A Diferença que Cai no ITA</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                Um atleta parte da posição <MathFormula formula="s_0 = 0" display={false} />, corre até a posição <MathFormula formula="s = 10 \text{ m}" display={false} /> e então retorna até a posição <MathFormula formula="s = 4 \text{ m}" display={false} />.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                  <p className="font-semibold text-orange-400">Calculando o Deslocamento (Δs):</p>
                  <MathFormula formula="\Delta s = s_f - s_i = 4 - 0 = 4 \text{ m}" display={true} />
                  <p className="text-sm text-slate-300">O deslocamento é <strong className="text-orange-300">+4 m</strong>. O sinal positivo indica que o atleta terminou à frente da posição inicial.</p>
                </div>
                <div className="bg-slate-800/70 p-4 rounded-lg space-y-3">
                  <p className="font-semibold text-green-400">Calculando a Distância Percorrida (d):</p>
                  <MathFormula formula="d = 10 + (10 - 4) = 10 + 6 = 16 \text{ m}" display={true} />
                  <p className="text-sm text-slate-300">A distância percorrida é <strong className="text-green-300">16 m</strong>. Somamos os trechos de ida (10 m) e de volta (6 m).</p>
                </div>
              </div>
              <div className="mt-4 bg-blue-900/30 p-4 rounded-lg border border-blue-700">
                <p className="text-blue-300 font-semibold text-sm">Conclusão:</p>
                <p className="text-slate-300 text-sm mt-1">
                  <MathFormula formula="\Delta s = 4 \text{ m} \neq d = 16 \text{ m}" display={false} />. Deslocamento e distância percorrida só são iguais quando o móvel <strong>nunca muda de sentido</strong>.
                </p>
              </div>
            </div>

            {/* Tabela comparativa */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-3 text-left rounded-tl-lg">Grandeza</th>
                    <th className="p-3 text-left">Símbolo</th>
                    <th className="p-3 text-left">Sinal</th>
                    <th className="p-3 text-left">Natureza</th>
                    <th className="p-3 text-left rounded-tr-lg">Fórmula</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <td className="p-3 font-semibold text-slate-800">Espaço</td>
                    <td className="p-3 font-mono text-blue-700">s</td>
                    <td className="p-3 text-slate-600">Positivo ou negativo</td>
                    <td className="p-3 text-slate-600">Escalar</td>
                    <td className="p-3 text-slate-600">Posição em relação à origem</td>
                  </tr>
                  <tr className="bg-white border-b border-slate-200">
                    <td className="p-3 font-semibold text-slate-800">Deslocamento</td>
                    <td className="p-3 font-mono text-orange-700">Δs</td>
                    <td className="p-3 text-slate-600">Pode ser negativo</td>
                    <td className="p-3 text-slate-600">Vetorial</td>
                    <td className="p-3 font-mono text-slate-600">s_f − s_i</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-slate-800">Distância percorrida</td>
                    <td className="p-3 font-mono text-green-700">d</td>
                    <td className="p-3 text-slate-600">Sempre ≥ 0</td>
                    <td className="p-3 text-slate-600">Escalar</td>
                    <td className="p-3 text-slate-600">Soma dos trechos percorridos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ===================== VELOCIDADE RELATIVA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🚀 Velocidade Relativa — O Diferencial do ITA</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">O Princípio de Galileu</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                A <strong>velocidade relativa</strong> de um corpo A em relação a um corpo B é a velocidade que um observador posicionado em B (e em repouso em relação a B) mediria para o corpo A. Matematicamente, é simplesmente a diferença vetorial das velocidades:
              </p>
              <MathFormula formula="\vec{v}_{A/B} = \vec{v}_A - \vec{v}_B" display={true} className="text-2xl" />
              <p className="text-slate-700 leading-relaxed mt-4">
                Onde <MathFormula formula="\vec{v}_A" display={false} /> e <MathFormula formula="\vec{v}_B" display={false} /> são as velocidades de A e B em relação a um referencial comum (geralmente a Terra).
              </p>
            </div>

            {/* Dois casos */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                <h4 className="font-semibold text-blue-400 mb-3">Caso 1: Mesmo Sentido</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Dois móveis A e B se movem no mesmo sentido com velocidades <MathFormula formula="v_A" display={false} /> e <MathFormula formula="v_B" display={false} />.
                </p>
                <MathFormula formula="v_{A/B} = v_A - v_B" display={true} />
                <p className="text-xs text-slate-400 mt-2">
                  Se <MathFormula formula="v_A > v_B" display={false} />, A se afasta de B. Se <MathFormula formula="v_A < v_B" display={false} />, A se aproxima de B.
                </p>
                <div className="mt-3 bg-slate-800/70 p-3 rounded text-xs text-slate-300">
                  <strong>Ex:</strong> Dois carros na mesma direção: 80 km/h e 60 km/h. Velocidade relativa = 20 km/h.
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-3">Caso 2: Sentidos Opostos</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Dois móveis A e B se movem em sentidos opostos com velocidades <MathFormula formula="v_A" display={false} /> e <MathFormula formula="v_B" display={false} />.
                </p>
                <MathFormula formula="v_{A/B} = v_A + v_B" display={true} />
                <p className="text-xs text-slate-400 mt-2">
                  Os módulos se somam. Eles se aproximam (ou se afastam) mais rapidamente.
                </p>
                <div className="mt-3 bg-slate-800/70 p-3 rounded text-xs text-slate-300">
                  <strong>Ex:</strong> Dois trens em sentidos opostos: 100 km/h e 80 km/h. Velocidade relativa = 180 km/h.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== EXEMPLOS RESOLVIDOS ITA/IME ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📝 Exemplos Resolvidos (Nível ITA/IME)</h2>

          <div className="space-y-6">
            {/* Exemplo 1 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 1 — Deslocamento vs. Distância Percorrida
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um carro parte da posição <MathFormula formula="s_0 = 20 \text{ m}" display={false} />, avança até <MathFormula formula="s = 80 \text{ m}" display={false} /> e então recua até <MathFormula formula="s = 35 \text{ m}" display={false} />. Determine: (a) o deslocamento total e (b) a distância percorrida.
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Resolução (a) — Deslocamento:</p>
                    <div className="space-y-1">
                      <MathFormula formula="\Delta s = s_f - s_i = 35 - 20 = +15 \text{ m}" display={true} />
                    </div>
                    <p className="text-sm text-slate-600 mt-1">O sinal positivo indica que o carro terminou à frente da posição inicial.</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Resolução (b) — Distância Percorrida:</p>
                    <div className="space-y-1">
                      <MathFormula formula="d_1 = 80 - 20 = 60 \text{ m} \quad \text{(trecho de avanço)}" display={true} />
                      <MathFormula formula="d_2 = 80 - 35 = 45 \text{ m} \quad \text{(trecho de recuo)}" display={true} />
                      <MathFormula formula="d = d_1 + d_2 = 60 + 45 = 105 \text{ m}" display={true} />
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded border border-green-300">
                    <p className="font-bold text-green-900 text-sm">Resposta: <MathFormula formula="\Delta s = 15 \text{ m}" display={false} /> e <MathFormula formula="d = 105 \text{ m}" display={false} /></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 2 — Velocidade Relativa (Estilo ITA)
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Dois trens A e B partem simultaneamente de estações opostas, separadas por 600 km, movendo-se um em direção ao outro. O trem A tem velocidade de 80 km/h e o trem B tem velocidade de 70 km/h. Após quanto tempo eles se encontram? A que distância da estação de A ocorre o encontro?
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 1: Calcular a velocidade de aproximação (relativa)</p>
                    <p className="text-sm text-slate-600 mb-2">Como os trens se movem em sentidos opostos:</p>
                    <MathFormula formula="v_{rel} = v_A + v_B = 80 + 70 = 150 \text{ km/h}" display={true} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 2: Calcular o tempo de encontro</p>
                    <MathFormula formula="t = \frac{d}{v_{rel}} = \frac{600}{150} = 4 \text{ h}" display={true} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">Passo 3: Calcular a distância percorrida por A</p>
                    <MathFormula formula="d_A = v_A \cdot t = 80 \times 4 = 320 \text{ km}" display={true} />
                  </div>
                  <div className="bg-green-100 p-3 rounded border border-green-300">
                    <p className="font-bold text-green-900 text-sm">Resposta: Os trens se encontram após <strong>4 horas</strong>, a <strong>320 km</strong> da estação de A.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 3 - Trajetória depende do referencial */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Exemplo 3 — Trajetória e Referencial (Clássico ITA)
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um passageiro dentro de um trem em movimento retilíneo uniforme joga uma bola verticalmente para cima. Descreva a trajetória da bola para: (a) um observador dentro do trem e (b) um observador parado na plataforma.
                </p>
                <div className="bg-white rounded p-4 space-y-3">
                  <div>
                    <p className="font-bold text-slate-800 mb-2">(a) Referencial = Trem (observador dentro do trem):</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      O observador no trem está em repouso em relação ao passageiro. Para ele, a bola sobe verticalmente e desce verticalmente. A trajetória é uma <strong>reta vertical</strong>.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 mb-2">(b) Referencial = Terra (observador na plataforma):</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      O observador na plataforma vê a bola com dois movimentos simultâneos: o movimento vertical (para cima e para baixo) e o movimento horizontal (junto com o trem). A composição desses dois movimentos resulta numa trajetória <strong>parabólica</strong>.
                    </p>
                  </div>
                  <div className="bg-green-100 p-3 rounded border border-green-300">
                    <p className="font-bold text-green-900 text-sm">Conclusão: A mesma situação física gera trajetórias diferentes dependendo do referencial. Isso demonstra que a trajetória é uma propriedade relativa, não absoluta.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* ===================== ESPAÇO, DESLOCAMENTO E TRAJETÓRIA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📍 Espaço, Deslocamento e Trajetória</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">A Tríade Fundamental</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Três conceitos frequentemente confundidos — mas absolutamente distintos — formam a base para descrever qualquer movimento: <strong>trajetória</strong>, <strong>espaço</strong> e <strong>deslocamento</strong>. O ITA e o IME adoram explorar essas diferenças, especialmente em problemas onde um móvel se move "para frente e para trás".
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded p-4">
                <p className="text-slate-700 text-sm"><strong>Regra de Ouro:</strong> A <em>trajetória</em> é o caminho. O <em>deslocamento</em> é a variação de posição (pode ser negativo). A <em>distância</em> é o comprimento total (sempre positiva).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trajetória */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">🔄 Trajetória</h3>
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-800 mb-3">Definição Precisa</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                A <strong>trajetória</strong> é o <em>conjunto de todas as posições ocupadas por um ponto material ao longo do tempo</em>.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
                <p className="text-slate-700 text-sm"><strong>Propriedade Fundamental:</strong> A trajetória <strong>depende do referencial</strong> escolhido.</p>
              </div>
              <div className="space-y-3">
                <p className="text-slate-700 font-semibold">Tipos de trajetória:</p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="font-bold text-blue-900 text-sm">Retilínea</p>
                    <p className="text-xs text-slate-600">Linha reta</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <p className="font-bold text-purple-900 text-sm">Circular</p>
                    <p className="text-xs text-slate-600">Circunferência</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded p-3">
                    <p className="font-bold text-orange-900 text-sm">Curvilínea</p>
                    <p className="text-xs text-slate-600">Curva qualquer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Espaço, Deslocamento e Distância */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">📏 Espaço, Deslocamento e Distância</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl p-5 text-white">
              <h4 className="text-lg font-bold text-blue-200 mb-3">Espaço (s)</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                A <strong>posição</strong> do móvel na trajetória em relação a uma origem.
              </p>
              <div className="bg-blue-800/50 rounded-lg p-3 mb-3">
                <p className="text-xs text-blue-200 font-semibold mb-2">Fórmula:</p>
                <MathFormula formula="s = \text{posição}" />
              </div>
              <p className="text-xs text-slate-400">Pode ser positivo ou negativo.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-5 text-white">
              <h4 className="text-lg font-bold text-purple-200 mb-3">Deslocamento (Δs)</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                A <strong>variação de posição</strong>: diferença entre final e inicial.
              </p>
              <div className="bg-purple-800/50 rounded-lg p-3 mb-3">
                <p className="text-xs text-purple-200 font-semibold mb-2">Fórmula:</p>
                <MathFormula formula="\Delta s = s_f - s_i" />
              </div>
              <p className="text-xs text-slate-400">Pode ser negativo!</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-xl p-5 text-white">
              <h4 className="text-lg font-bold text-orange-200 mb-3">Distância (d)</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                O <strong>comprimento total do caminho</strong> percorrido.
              </p>
              <div className="bg-orange-800/50 rounded-lg p-3 mb-3">
                <p className="text-xs text-orange-200 font-semibold mb-2">Fórmula:</p>
                <MathFormula formula="d = \sum |\Delta s_i|" />
              </div>
              <p className="text-xs text-slate-400">Sempre ≥ 0!</p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              ⚠️ Erro Comum em Provas
            </h4>
            <p className="text-slate-700 text-sm">
              Muitos alunos confundem <strong>deslocamento com distância</strong>. Quando um móvel "vai e vem", o deslocamento é menor que a distância.
            </p>
          </div>
        </div>


        {/* ===================== APLICAÇÕES PRÁTICAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌍 Aplicações Práticas</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h4 className="font-bold text-blue-900 mb-3">✈️ Aviação</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Pilotos precisam calcular a velocidade do avião em relação ao solo (não apenas ao ar). Um avião com velocidade de 800 km/h em relação ao ar, voando contra um vento de 100 km/h, tem velocidade de apenas 700 km/h em relação ao solo. O referencial muda o resultado do cálculo de tempo de viagem.
              </p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
              <h4 className="font-bold text-indigo-900 mb-3">🚢 Navegação</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Um barco que precisa atravessar um rio deve levar em conta a velocidade da correnteza. A velocidade resultante (em relação ao solo) é a composição vetorial da velocidade do barco em relação à água e da velocidade da água em relação ao solo — um problema clássico de velocidade relativa.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h4 className="font-bold text-purple-900 mb-3">🛰️ Satélites</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Para calcular a órbita de um satélite, os engenheiros precisam especificar o referencial (geralmente o centro da Terra). Um satélite geoestacionário está em repouso em relação a um observador na Terra, mas em movimento em relação ao Sol.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h4 className="font-bold text-green-900 mb-3">🏎️ Corridas</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Em corridas de Fórmula 1, a telemetria mede a velocidade do carro em relação ao asfalto (referencial = pista). Mas o piloto sente as forças em relação ao referencial do carro. A distinção entre referenciais inerciais e não-inerciais é fundamental para a análise das forças.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
