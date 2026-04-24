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
              <div className="text-slate-300 leading-relaxed mb-4">
                Um atleta parte da posição <MathFormula formula="s_0 = 0" display={false} />, corre até a posição <MathFormula formula="s = 10 \text{ m}" display={false} /> e então retorna até a posição <MathFormula formula="s = 4 \text{ m}" display={false} />.
              </div>
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
                <div className="text-slate-300 text-sm mt-1">
                  <MathFormula formula="\Delta s = 4 \text{ m} \neq d = 16 \text{ m}" display={false} />. Deslocamento e distância percorrida só são iguais quando o móvel <strong>nunca muda de sentido</strong>.
                </div>
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
              <div className="text-slate-700 leading-relaxed mt-4">
                Onde <MathFormula formula="\vec{v}_A" display={false} /> e <MathFormula formula="\vec{v}_B" display={false} /> são as velocidades de A e B em relação a um referencial comum (geralmente a Terra).
              </div>
            </div>

            {/* Dois casos */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                <h4 className="font-semibold text-blue-400 mb-3">Caso 1: Mesmo Sentido</h4>
                <div className="text-sm text-slate-300 leading-relaxed mb-3">
                  Dois móveis A e B se movem no mesmo sentido com velocidades <MathFormula formula="v_A" display={false} /> e <MathFormula formula="v_B" display={false} />.
                </div>
                <MathFormula formula="v_{A/B} = v_A - v_B" display={true} />
                <div className="text-xs text-slate-400 mt-2">
                  Se <MathFormula formula="v_A > v_B" display={false} />, A se afasta de B. Se <MathFormula formula="v_A < v_B" display={false} />, A se aproxima de B.
                </div>
                <div className="mt-3 bg-slate-800/70 p-3 rounded text-xs text-slate-300">
                  <strong>Ex:</strong> Dois carros na mesma direção: 80 km/h e 60 km/h. Velocidade relativa = 20 km/h.
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-xl p-6 shadow-xl">
                <h4 className="font-semibold text-orange-400 mb-3">Caso 2: Sentidos Opostos</h4>
                <div className="text-sm text-slate-300 leading-relaxed mb-3">
                  Dois móveis A e B se movem em sentidos opostos com velocidades <MathFormula formula="v_A" display={false} /> e <MathFormula formula="v_B" display={false} />.
                </div>
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
                <div className="text-sm leading-relaxed">
                  <strong>Enunciado:</strong> Um carro parte da posição <MathFormula formula="s_0 = 20 \text{ m}" display={false} />, avança até <MathFormula formula="s = 80 \text{ m}" display={false} /> e então recua até <MathFormula formula="s = 35 \text{ m}" display={false} />. Determine: (a) o deslocamento total e (b) a distância percorrida.
                </div>
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
                    <div className="font-bold text-green-900 text-sm">Resposta: <MathFormula formula="\Delta s = 15 \text{ m}" display={false} /> e <MathFormula formula="d = 105 \text{ m}" display={false} /></div>
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

        {/* ===================== INTERPRETAÇÃO GRÁFICA ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Interpretação Gráfica</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            A análise gráfica é uma das ferramentas mais poderosas da Cinemática. Em provas de alto nível, muitas questões são resolvidas <strong>exclusivamente</strong> pela leitura e interpretação de gráficos, sem a necessidade de aplicar fórmulas diretamente. Dominar a linguagem gráfica é, portanto, tão importante quanto dominar as equações. Nesta seção, apresentamos os gráficos fundamentais que descrevem a posição de um móvel ao longo do tempo.
          </p>

          {/* Gráfico s x t */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Gráfico Posição × Tempo (s × t)</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              O gráfico <strong>s × t</strong> (posição em função do tempo) é a representação mais básica e fundamental do movimento. Cada ponto do gráfico indica a posição do móvel em um determinado instante. A forma da curva revela a <em>natureza</em> do movimento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-blue-100 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">Inclinação da Reta Tangente = Velocidade</h4>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  A <strong>inclinação</strong> (coeficiente angular) da reta tangente à curva em qualquer ponto fornece a <strong>velocidade instantânea</strong> naquele instante. Se a curva é uma reta, a inclinação é constante e a velocidade é constante (MRU). Se a curva é uma parábola, a inclinação varia e a velocidade muda ao longo do tempo (MRUV).
                </p>
                <div className="bg-blue-100 rounded p-2 text-center">
                  <MathFormula formula="v(t) = \frac{ds}{dt} = \text{inclinação da tangente ao gráfico } s \times t" />
                </div>
              </div>
              <div className="bg-white border border-blue-100 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 mb-2">Leitura Qualitativa</h4>
                <ul className="text-slate-700 text-sm space-y-2">
                  <li><strong>Reta horizontal:</strong> Móvel em repouso (v = 0). A posição não muda.</li>
                  <li><strong>Reta inclinada para cima:</strong> Velocidade positiva constante (MRU progressivo).</li>
                  <li><strong>Reta inclinada para baixo:</strong> Velocidade negativa constante (MRU retrógrado).</li>
                  <li><strong>Parábola com concavidade para cima:</strong> Aceleração positiva (MRUV acelerado).</li>
                  <li><strong>Parábola com concavidade para baixo:</strong> Aceleração negativa (MRUV retardado).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gráfico Deslocamento vs Distância */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">Deslocamento vs. Distância no Gráfico</h3>
            <div className="text-slate-700 leading-relaxed mb-4">
              Uma das armadilhas gráficas mais exploradas em provas é a diferença entre <strong>deslocamento</strong> e <strong>distância percorrida</strong> a partir do gráfico s × t. O deslocamento é simplesmente a diferença entre a posição final e a inicial: <MathFormula formula="\Delta s = s_f - s_i" display={false} />. Já a distância percorrida exige a análise de <em>cada trecho</em> do movimento, somando os módulos dos deslocamentos parciais.
            </div>
            <div className="bg-white border border-indigo-100 rounded-lg p-4">
              <h4 className="font-bold text-indigo-800 mb-2">Exemplo Visual</h4>
              <div className="text-slate-700 text-sm leading-relaxed mb-2">
                Considere um móvel que parte de s = 0, vai até s = 10 m e depois retorna até s = 4 m. No gráfico s × t, veríamos a curva subir até 10 e depois descer até 4. O deslocamento é <MathFormula formula="\Delta s = 4 - 0 = 4 \text{ m}" display={false} />, mas a distância percorrida é <MathFormula formula="d = 10 + 6 = 16 \text{ m}" display={false} />. A curva "sobe e desce", mas o deslocamento só vê o ponto inicial e o final.
              </div>
            </div>
          </div>

          {/* Gráfico v x t para posição */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-green-900 mb-4">Área sob o Gráfico v × t = Deslocamento</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Embora o gráfico v × t seja estudado em profundidade no tópico de Velocidade, é fundamental já saber que a <strong>área</strong> entre a curva v(t) e o eixo do tempo fornece o <strong>deslocamento escalar</strong> do móvel naquele intervalo. Se a curva está acima do eixo t, a área é positiva (deslocamento no sentido positivo). Se está abaixo, a área é negativa (deslocamento no sentido negativo).
            </p>
            <div className="bg-white border border-green-100 rounded-lg p-4 text-center">
              <MathFormula formula="\Delta s = \int_{t_1}^{t_2} v(t) \, dt = \text{área (com sinal) sob a curva } v \times t" />
              <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-green-100 rounded p-2">
                  <p className="text-green-800 font-semibold">Área acima do eixo t</p>
                  <p className="text-slate-700">Deslocamento positivo (avanço)</p>
                </div>
                <div className="bg-red-100 rounded p-2">
                  <p className="text-red-800 font-semibold">Área abaixo do eixo t</p>
                  <p className="text-slate-700">Deslocamento negativo (recuo)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== ARMADILHAS E ERROS CONCEITUAIS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-red-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Armadilhas e Erros Conceituais Clássicos</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            As provas de vestibulares de alto nível são projetadas para testar não apenas o conhecimento das fórmulas, mas a <strong>compreensão profunda dos conceitos</strong>. Muitos alunos bem preparados perdem pontos por cair em armadilhas conceituais que exploram confusões sutis. Conhecer esses erros de antemão é uma vantagem estratégica enorme.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5">
              <h4 className="font-bold text-red-800 mb-2">Erro 1: Confundir Deslocamento com Distância Percorrida</h4>
              <div className="text-slate-700 text-sm leading-relaxed mb-2">
                Este é o erro mais comum e mais explorado. O deslocamento (<MathFormula formula="\Delta s = s_f - s_i" display={false} />) pode ser zero mesmo que o móvel tenha percorrido quilômetros (basta voltar ao ponto de partida). A distância percorrida (<MathFormula formula="d" display={false} />) é sempre positiva e cumulativa. Em problemas de "ida e volta", a distância é a soma dos trechos, enquanto o deslocamento é a diferença entre a posição final e a inicial.
              </div>
              <div className="bg-red-100 rounded p-3 text-sm">
                <strong>Como evitar:</strong> Sempre pergunte: "O enunciado pede o deslocamento ou a distância?" Se houver inversão de sentido, calcule cada trecho separadamente.
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5">
              <h4 className="font-bold text-red-800 mb-2">Erro 2: Esquecer que a Trajetória Depende do Referencial</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-2">
                A trajetória <strong>não é uma propriedade intrínseca do movimento</strong>. Ela depende do referencial adotado. Uma gota de chuva que cai verticalmente para um observador parado descreve uma trajetória oblíqua (ou parabólica) para um observador dentro de um carro em movimento. Muitos alunos assumem que a trajetória é "fixa", o que é um erro grave.
              </p>
              <div className="bg-red-100 rounded p-3 text-sm">
                <strong>Como evitar:</strong> Antes de descrever qualquer trajetória, identifique explicitamente o referencial. Se o problema não especifica, assuma o referencial do solo (inercial).
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5">
              <h4 className="font-bold text-red-800 mb-2">Erro 3: Usar Ponto Material Quando o Tamanho Importa</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-2">
                O modelo de ponto material simplifica enormemente os cálculos, mas <strong>não pode ser usado quando as dimensões do corpo são relevantes</strong> para o problema. O exemplo clássico é o trem passando por um túnel: se o enunciado menciona o comprimento do trem e do túnel, o corpo extenso é essencial. Tratar o trem como ponto material nesse caso leva a respostas erradas.
              </p>
              <div className="bg-red-100 rounded p-3 text-sm">
                <strong>Como evitar:</strong> Se o enunciado fornece as dimensões do corpo (comprimento, raio, diâmetro), é um sinal claro de que o modelo de corpo extenso deve ser usado.
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5">
              <h4 className="font-bold text-red-800 mb-2">Erro 4: Confundir Posição (s) com Deslocamento (Δs)</h4>
              <div className="text-slate-700 text-sm leading-relaxed mb-2">
                A posição <MathFormula formula="s" display={false} /> é a coordenada do móvel em relação à origem da trajetória em um dado instante. O deslocamento <MathFormula formula="\Delta s" display={false} /> é a <em>variação</em> dessa posição entre dois instantes. Um móvel pode estar na posição s = -5 m (atrás da origem) e ter um deslocamento positivo (se estiver se movendo para frente). Posição e deslocamento são conceitos distintos.
              </div>
              <div className="bg-red-100 rounded p-3 text-sm">
                <strong>Como evitar:</strong> Lembre-se: posição é um "endereço" na trajetória; deslocamento é a "mudança de endereço". Um é absoluto (depende da origem), o outro é relativo (depende dos dois instantes).
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5">
              <h4 className="font-bold text-red-800 mb-2">Erro 5: Assumir que Repouso é Absoluto</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-2">
                Na física clássica, <strong>não existe repouso absoluto</strong>. Todo repouso é relativo a um referencial. Um passageiro sentado em um avião está em repouso em relação ao avião, mas em movimento a 900 km/h em relação ao solo. Dizer que algo "está parado" sem especificar o referencial é fisicamente impreciso.
              </p>
              <div className="bg-red-100 rounded p-3 text-sm">
                <strong>Como evitar:</strong> Sempre complete a frase: "O corpo está em repouso <em>em relação a...</em>". Isso elimina a ambiguidade e demonstra domínio conceitual.
              </div>
            </div>
          </div>
        </div>

        {/* ===================== CONEXÃO VETORIAL ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Conexão Vetorial — Posição, Deslocamento e Trajetória</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Embora a Cinemática Escalar (unidimensional) seja suficiente para muitos problemas, a visão vetorial é indispensável para compreender fenômenos em duas ou três dimensões. A conexão entre a descrição escalar e a vetorial é um dos pontos mais cobrados em provas de alto nível, pois exige que o aluno transite fluentemente entre as duas linguagens.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Vetor Posição e Vetor Deslocamento</h3>
            <div className="text-slate-700 leading-relaxed mb-4">
              No espaço tridimensional, a posição de um ponto material é descrita pelo <strong>vetor posição</strong> <MathFormula formula="\vec{r}(t)" display={false} />, que liga a origem do sistema de coordenadas ao ponto onde o móvel se encontra no instante t. O <strong>vetor deslocamento</strong> é a diferença entre dois vetores posição:
            </div>
            <div className="bg-white border border-purple-100 rounded-lg p-4 text-center mb-4">
              <MathFormula formula="\Delta \vec{r} = \vec{r}(t_2) - \vec{r}(t_1) = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j} + (z_2 - z_1)\hat{k}" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white border border-purple-100 rounded p-3 text-center">
                <div className="font-bold text-purple-800 mb-1"><MathFormula formula="\vec{r}(t)" display={false} /></div>
                <p className="text-slate-600">Vetor posição: liga a origem ao móvel. Depende do sistema de coordenadas escolhido.</p>
              </div>
              <div className="bg-white border border-purple-100 rounded p-3 text-center">
                <div className="font-bold text-purple-800 mb-1"><MathFormula formula="\Delta \vec{r}" display={false} /></div>
                <p className="text-slate-600">Vetor deslocamento: liga a posição inicial à final. Independe da trajetória.</p>
              </div>
              <div className="bg-white border border-purple-100 rounded p-3 text-center">
                <div className="font-bold text-purple-800 mb-1"><MathFormula formula="|\Delta \vec{r}| \leq d" display={false} /></div>
                <p className="text-slate-600">O módulo do deslocamento é sempre menor ou igual à distância percorrida.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">Relação Geométrica: Corda vs. Arco</h3>
            <div className="text-slate-700 leading-relaxed mb-4">
              A relação <MathFormula formula="|\Delta \vec{r}| \leq d" display={false} /> tem uma interpretação geométrica elegante. O módulo do vetor deslocamento é o comprimento da <strong>corda</strong> que liga o ponto inicial ao ponto final da trajetória. A distância percorrida é o comprimento do <strong>arco</strong> (o caminho real). Como a corda é sempre menor ou igual ao arco (pela desigualdade triangular generalizada), temos a relação acima.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-indigo-100 rounded-lg p-4">
                <h4 className="font-bold text-indigo-800 mb-2">Igualdade: Movimento Retilíneo Sem Inversão</h4>
                <div className="text-slate-700 text-sm leading-relaxed">
                  Se o móvel se move em linha reta e <strong>não inverte o sentido</strong>, a corda coincide com o arco. Nesse caso, <MathFormula formula="|\Delta \vec{r}| = d" display={false} />. Este é o único caso em que o módulo do deslocamento é igual à distância percorrida.
                </div>
              </div>
              <div className="bg-white border border-indigo-100 rounded-lg p-4">
                <h4 className="font-bold text-indigo-800 mb-2">Desigualdade Estrita: Curva ou Inversão</h4>
                <div className="text-slate-700 text-sm leading-relaxed">
                  Se a trajetória é curva (a corda "corta por dentro") ou se há inversão de sentido (o móvel "vai e volta"), então <MathFormula formula="|\Delta \vec{r}| < d" display={false} />. No caso extremo de uma volta completa, o deslocamento é zero mas a distância é o perímetro inteiro.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Composição de Movimentos e Referencial</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Quando analisamos o movimento de um corpo em relação a diferentes referenciais, a <strong>composição vetorial</strong> de velocidades é essencial. Se um barco navega em um rio, sua velocidade em relação ao solo é a soma vetorial da velocidade do barco em relação à água e da velocidade da água em relação ao solo:
            </p>
            <div className="bg-white border border-amber-100 rounded-lg p-4 text-center mb-4">
              <MathFormula formula="\vec{v}_{B/S} = \vec{v}_{B/A} + \vec{v}_{A/S}" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-white border border-amber-100 rounded p-3 text-center">
                <div className="font-bold text-amber-800 mb-1"><MathFormula formula="\vec{v}_{B/S}" display={false} /></div>
                <p className="text-slate-600">Velocidade do barco em relação ao solo (referencial "absoluto").</p>
              </div>
              <div className="bg-white border border-amber-100 rounded p-3 text-center">
                <div className="font-bold text-amber-800 mb-1"><MathFormula formula="\vec{v}_{B/A}" display={false} /></div>
                <p className="text-slate-600">Velocidade do barco em relação à água (o que o velocímetro do barco marca).</p>
              </div>
              <div className="bg-white border border-amber-100 rounded p-3 text-center">
                <div className="font-bold text-amber-800 mb-1"><MathFormula formula="\vec{v}_{A/S}" display={false} /></div>
                <p className="text-slate-600">Velocidade da água em relação ao solo (velocidade da correnteza).</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== EXERCÍCIOS PROGRESSIVOS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Exercícios Progressivos</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            A prática é o caminho para a maestria. Os exercícios abaixo estão organizados em ordem crescente de dificuldade, partindo de questões conceituais básicas até problemas que exigem raciocínio avançado e integração de múltiplos conceitos. Tente resolver cada um antes de consultar a resposta.
          </p>

          {/* Exercício 1 - Básico */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Nível 1 — Conceitual</span>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Exercício 1:</strong> Um passageiro está sentado em um trem que se move com velocidade constante de 80 km/h em relação ao solo. Ele joga uma bola verticalmente para cima. Descreva a trajetória da bola: (a) no referencial do passageiro; (b) no referencial de uma pessoa parada na plataforma da estação.
            </p>
            <details className="bg-white border border-green-100 rounded-lg p-4">
              <summary className="font-bold text-green-800 cursor-pointer">Ver Resposta</summary>
              <div className="mt-3 text-slate-700 text-sm leading-relaxed">
                <p className="mb-2"><strong>(a)</strong> No referencial do passageiro (que se move junto com o trem), a bola sobe e desce verticalmente. A trajetória é uma <strong>reta vertical</strong>.</p>
                <p><strong>(b)</strong> No referencial da plataforma, a bola possui velocidade horizontal (80 km/h, a mesma do trem) e velocidade vertical (variável, devido à gravidade). A trajetória é uma <strong>parábola</strong>. Este é um exemplo clássico de como a trajetória depende do referencial.</p>
              </div>
            </details>
          </div>

          {/* Exercício 2 - Intermediário */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">Nível 2 — Aplicação</span>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Exercício 2:</strong> Um ciclista percorre uma pista retilínea. Ele parte da posição s = 2 m, avança até s = 14 m, depois retorna até s = 6 m. Determine: (a) o deslocamento escalar total; (b) a distância total percorrida.
            </p>
            <details className="bg-white border border-yellow-100 rounded-lg p-4">
              <summary className="font-bold text-yellow-800 cursor-pointer">Ver Resposta</summary>
              <div className="mt-3 text-slate-700 text-sm leading-relaxed space-y-2">
                <p><strong>(a) Deslocamento escalar:</strong></p>
                <div className="bg-yellow-100 rounded p-2 text-center">
                  <MathFormula formula="\Delta s = s_f - s_i = 6 - 2 = 4 \text{ m}" />
                </div>
                <p><strong>(b) Distância percorrida:</strong></p>
                <p>Trecho 1 (ida): de 2 m até 14 m → <MathFormula formula="d_1 = |14 - 2| = 12 \text{ m}" display={false} /></p>
                <p>Trecho 2 (volta): de 14 m até 6 m → <MathFormula formula="d_2 = |6 - 14| = 8 \text{ m}" display={false} /></p>
                <div className="bg-yellow-100 rounded p-2 text-center">
                  <MathFormula formula="d_{total} = d_1 + d_2 = 12 + 8 = 20 \text{ m}" />
                </div>
                <p>Note que a distância (20 m) é muito maior que o deslocamento (4 m), pois houve inversão de sentido.</p>
              </div>
            </details>
          </div>

          {/* Exercício 3 - Avançado */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">Nível 3 — Avançado</span>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Exercício 3:</strong> Um trem de comprimento L = 200 m move-se com velocidade constante v = 72 km/h. Ele precisa atravessar completamente uma ponte de comprimento D = 300 m. Determine: (a) a distância total percorrida pela locomotiva desde o instante em que ela entra na ponte até o instante em que o último vagão sai da ponte; (b) o tempo total de travessia.
            </p>
            <details className="bg-white border border-orange-100 rounded-lg p-4">
              <summary className="font-bold text-orange-800 cursor-pointer">Ver Resposta</summary>
              <div className="mt-3 text-slate-700 text-sm leading-relaxed space-y-2">
                <p>Este é um problema clássico de <strong>corpo extenso</strong>. O trem não pode ser tratado como ponto material porque seu comprimento é relevante.</p>
                <p><strong>(a)</strong> A locomotiva precisa percorrer o comprimento da ponte <strong>mais</strong> o comprimento do próprio trem para que o último vagão saia completamente:</p>
                <div className="bg-orange-100 rounded p-2 text-center">
                  <MathFormula formula="d = L + D = 200 + 300 = 500 \text{ m}" />
                </div>
                <p><strong>(b)</strong> Convertendo a velocidade: <MathFormula formula="v = 72 \text{ km/h} = 20 \text{ m/s}" display={false} /></p>
                <div className="bg-orange-100 rounded p-2 text-center">
                  <MathFormula formula="t = \frac{d}{v} = \frac{500}{20} = 25 \text{ s}" />
                </div>
                <p><strong>Observação:</strong> Se o problema pedisse apenas o tempo para a locomotiva cruzar a ponte (sem considerar o resto do trem), a distância seria apenas D = 300 m e o tempo seria 15 s. A diferença entre essas duas interpretações é exatamente o que separa ponto material de corpo extenso.</p>
              </div>
            </details>
          </div>

          {/* Exercício 4 - Desafio */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Nível 4 — Desafio</span>
            </div>
            <div className="text-slate-700 leading-relaxed mb-4">
              <strong>Exercício 4:</strong> Dois trens, A e B, movem-se em sentidos opostos em trilhos paralelos. O trem A tem comprimento <MathFormula formula="L_A = 150 \text{ m}" display={false} /> e velocidade <MathFormula formula="v_A = 90 \text{ km/h}" display={false} />. O trem B tem comprimento <MathFormula formula="L_B = 250 \text{ m}" display={false} /> e velocidade <MathFormula formula="v_B = 54 \text{ km/h}" display={false} />. Determine o tempo que um passageiro no trem A leva para ver o trem B passar completamente pela sua janela.
            </div>
            <details className="bg-white border border-red-100 rounded-lg p-4">
              <summary className="font-bold text-red-800 cursor-pointer">Ver Resposta</summary>
              <div className="mt-3 text-slate-700 text-sm leading-relaxed space-y-2">
                <p>O passageiro no trem A é um <strong>ponto material</strong> (observador). O trem B é um <strong>corpo extenso</strong> que precisa passar completamente por ele. A distância que o trem B precisa percorrer em relação ao passageiro é o comprimento do próprio trem B.</p>
                <p><strong>Velocidade relativa:</strong> Como os trens se movem em sentidos opostos, as velocidades se somam:</p>
                <div className="bg-red-100 rounded p-2 text-center">
                  <MathFormula formula="v_{rel} = v_A + v_B = 90 + 54 = 144 \text{ km/h} = 40 \text{ m/s}" />
                </div>
                <p><strong>Tempo:</strong> O trem B precisa percorrer seu próprio comprimento em relação ao passageiro:</p>
                <div className="bg-red-100 rounded p-2 text-center">
                  <MathFormula formula="t = \frac{L_B}{v_{rel}} = \frac{250}{40} = 6{,}25 \text{ s}" />
                </div>
                <p><strong>Observação crucial:</strong> Note que usamos apenas <MathFormula formula="L_B" display={false} /> (e não <MathFormula formula="L_A + L_B" display={false} />) porque o passageiro é um ponto. Se o problema pedisse o tempo para os dois trens se cruzarem completamente, aí sim usaríamos <MathFormula formula="L_A + L_B = 400 \text{ m}" display={false} /> e o tempo seria 10 s.</p>
              </div>
            </details>
          </div>
        </div>

        {/* ===================== SÍNTESE E CONEXÃO ENTRE CONCEITOS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Síntese — Conexão Entre os Conceitos</h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Antes de avançar para os tópicos de Velocidade e Aceleração, é fundamental consolidar como todos os conceitos desta seção se conectam. A Cinemática é uma construção lógica onde cada conceito depende dos anteriores.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Cadeia Lógica da Cinemática</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <p className="font-bold text-slate-900">Referencial</p>
                  <p className="text-slate-700 text-sm">Sem referencial, não há como definir movimento ou repouso. É o ponto de partida absoluto.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <p className="font-bold text-slate-900">Ponto Material ou Corpo Extenso</p>
                  <p className="text-slate-700 text-sm">Decidimos se as dimensões do corpo importam. Isso define a complexidade do problema.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <p className="font-bold text-slate-900">Trajetória</p>
                  <p className="text-slate-700 text-sm">Definido o referencial, a trajetória é determinada. Ela é o "palco" onde o movimento acontece.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <p className="font-bold text-slate-900">Posição (s) e Deslocamento (Δs)</p>
                  <p className="text-slate-700 text-sm">Com a trajetória definida, localizamos o móvel (posição) e medimos quanto ele se moveu (deslocamento).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                <div>
                  <p className="font-bold text-slate-900">Velocidade → Aceleração → Tipos de Movimento</p>
                  <p className="text-slate-700 text-sm">Com posição e tempo, definimos velocidade. Com velocidade e tempo, definimos aceleração. Com aceleração, classificamos o movimento (MRU, MRUV, etc.).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h4 className="font-bold text-amber-900 mb-3">Resumo das Relações Fundamentais</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="border border-amber-300 p-2 text-left">Conceito</th>
                    <th className="border border-amber-300 p-2 text-left">Depende de</th>
                    <th className="border border-amber-300 p-2 text-left">Fornece base para</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-amber-200 p-2">Referencial</td><td className="border border-amber-200 p-2">Nada (é o ponto de partida)</td><td className="border border-amber-200 p-2">Trajetória, Posição, Movimento</td></tr>
                  <tr><td className="border border-amber-200 p-2">Ponto Material</td><td className="border border-amber-200 p-2">Dimensões do corpo vs. dimensões do problema</td><td className="border border-amber-200 p-2">Simplificação dos cálculos</td></tr>
                  <tr><td className="border border-amber-200 p-2">Trajetória</td><td className="border border-amber-200 p-2">Referencial</td><td className="border border-amber-200 p-2">Posição, Deslocamento, Distância</td></tr>
                  <tr><td className="border border-amber-200 p-2">Posição (s)</td><td className="border border-amber-200 p-2">Trajetória + Origem + Sentido</td><td className="border border-amber-200 p-2">Deslocamento, Velocidade</td></tr>
                  <tr><td className="border border-amber-200 p-2">Deslocamento (Δs)</td><td className="border border-amber-200 p-2">Posição inicial e final</td><td className="border border-amber-200 p-2">Velocidade Média</td></tr>
                  <tr><td className="border border-amber-200 p-2">Distância (d)</td><td className="border border-amber-200 p-2">Trajetória completa</td><td className="border border-amber-200 p-2">Velocidade Escalar Média</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

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
