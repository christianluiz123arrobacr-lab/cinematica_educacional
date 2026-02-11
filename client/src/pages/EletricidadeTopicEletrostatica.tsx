import { Link } from "wouter";
import { ArrowLeft, Zap, Info, AlertTriangle, CheckCircle2, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

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
                <strong>Eletrostática</strong> é o ramo da física que estuda as cargas elétricas em repouso e os fenômenos relacionados a elas, como a força elétrica, o campo elétrico e o potencial elétrico. É a base fundamental para entender toda a eletricidade e o magnetismo.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Toda a matéria é composta por átomos, que contêm partículas carregadas: prótons (carga positiva) no núcleo e elétrons (carga negativa) orbitando ao redor. A interação entre essas cargas é a base de quase todos os fenômenos que observamos no dia a dia, desde a estrutura da matéria até a eletricidade que usamos em casa.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Quando você esfrega um balão no cabelo e ele gruda na parede, ou quando leva um "choque" ao tocar em uma maçaneta metálica em um dia seco, você está experimentando os efeitos da eletrostática!
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                Princípios Fundamentais
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-blue-100">
                  <p className="font-bold text-slate-900 mb-2">1. Princípio da Atração e Repulsão</p>
                  <p className="text-slate-700 text-sm">
                    Cargas de mesmo sinal se repelem (positivo-positivo ou negativo-negativo), e cargas de sinais opostos se atraem (positivo-negativo). É como ímãs: polos iguais se repelem, polos opostos se atraem!
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-blue-100">
                  <p className="font-bold text-slate-900 mb-2">2. Princípio da Conservação da Carga Elétrica</p>
                  <p className="text-slate-700 text-sm mb-2">
                    Em um sistema isolado (sem troca de matéria com o exterior), a soma algébrica das cargas elétricas é constante. Ou seja, carga não pode ser criada nem destruída, apenas transferida de um corpo para outro.
                  </p>
                  <div className="bg-slate-50 p-3 rounded">
                    <MathFormula formula="\sum Q_{\text{antes}} = \sum Q_{\text{depois}}" />
                  </div>
                  <p className="text-slate-700 text-sm mt-2">
                    <strong>Exemplo prático:</strong> Se você esfregar um balão no cabelo, elétrons são transferidos do cabelo para o balão. O balão fica negativo (ganhou elétrons) e o cabelo fica positivo (perdeu elétrons), mas a carga total do sistema (balão + cabelo) continua zero!
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-blue-100">
                  <p className="font-bold text-slate-900 mb-2">3. Quantização da Carga Elétrica</p>
                  <p className="text-slate-700 text-sm mb-2">
                    A carga elétrica de um corpo é sempre um múltiplo inteiro da carga elementar (a carga de um elétron ou próton). Não existe "meia carga" ou "um terço de carga" - a carga vem em "pacotes" discretos!
                  </p>
                  <div className="bg-slate-50 p-3 rounded space-y-2">
                    <MathFormula formula="Q = n \cdot e" />
                    <div className="text-xs text-slate-600 space-y-1">
                      <p><strong>Onde:</strong></p>
                      <p>• <MathFormula formula="Q" /> = carga total do corpo (em Coulombs, C)</p>
                      <p>• <MathFormula formula="n" /> = número inteiro de elétrons ganhos ou perdidos (pode ser positivo ou negativo)</p>
                      <p>• <MathFormula formula="e \approx 1,6 \times 10^{-19} \, C" /> = carga elementar (carga de um elétron ou próton)</p>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm mt-2">
                    <strong>Exemplo numérico:</strong> Se um corpo perde 1 milhão de elétrons, sua carga será <MathFormula formula="Q = 10^6 \times 1,6 \times 10^{-19} = 1,6 \times 10^{-13} \, C" /> (positiva, pois perdeu elétrons negativos).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lei de Coulomb com Didática Superior */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📏 Lei de Coulomb (Didática Superior)</h2>
          
          <div className="space-y-8">
            {/* Explicação Simples */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                O que é a Lei de Coulomb? (Explicação Simples)
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Imagine duas bolas carregadas eletricamente flutuando no espaço. A Lei de Coulomb nos diz <strong>quão forte</strong> é a força (de atração ou repulsão) entre essas duas bolas. É como a lei da gravidade, mas para cargas elétricas!
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>Analogia prática:</strong> Pense em duas pessoas em patins de gelo. Se elas se empurrarem (repulsão), a força depende de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li><strong>Quão forte cada uma empurra</strong> → corresponde ao produto das cargas <MathFormula formula="q_1 \cdot q_2" /></li>
                <li><strong>Quão longe elas estão</strong> → corresponde à distância <MathFormula formula="d" />. Quanto mais longe, mais fraca a interação!</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                A Lei de Coulomb quantifica exatamente isso: a força entre duas cargas é proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância entre elas.
              </p>
            </div>

            {/* Contexto Histórico */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Contexto Histórico
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                A Lei de Coulomb foi formulada pelo físico francês <strong>Charles-Augustin de Coulomb</strong> em <strong>1785</strong>, após uma série de experimentos meticulosos usando uma balança de torção (similar à que Henry Cavendish usou para medir a constante gravitacional).
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                Coulomb suspendeu pequenas esferas carregadas em fios finos e mediu a torção (torque) necessária para equilibrar a força elétrica entre elas. Ele descobriu que a força seguia uma lei matemática simples e elegante, análoga à Lei da Gravitação Universal de Newton (1687).
              </p>
              <p className="text-slate-700 leading-relaxed">
                Essa descoberta foi fundamental para o desenvolvimento da teoria eletromagnética e abriu caminho para os trabalhos de Faraday, Maxwell e outros gigantes da física do século XIX.
              </p>
            </div>

            {/* Formulação Escalar com Termo-a-Termo */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                Formulação Escalar (Módulo da Força)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A forma escalar da Lei de Coulomb nos dá o <strong>módulo</strong> (intensidade) da força elétrica entre duas cargas pontuais em repouso. Vamos entender cada termo da fórmula:
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-lg">
                <MathFormula formula="F = k \cdot \frac{|q_1 \cdot q_2|}{d^2}" className="text-2xl mb-6" />
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="F" /></p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>O que é:</strong> Módulo (intensidade) da força elétrica entre as duas cargas.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Unidade:</strong> Newton (N) = kg·m/s²
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Significado físico:</strong> É a "força de empurrão" ou "força de puxão" que uma carga exerce sobre a outra. Se F = 10 N, significa que a força tem intensidade de 10 Newtons (aproximadamente o peso de 1 kg na Terra).
                    </p>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="k" /></p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>O que é:</strong> Constante eletrostática (ou constante de Coulomb) do meio.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Valor no vácuo:</strong> <MathFormula formula="k_0 \approx 9,0 \times 10^9 \, N \cdot m^2/C^2" />
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Significado físico:</strong> É um "fator de escala" que depende do meio onde as cargas estão. No vácuo (ou ar), k é máximo. Em outros meios (água, óleo), k é menor, o que significa que a força elétrica é "amortecida" pelo meio.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Analogia:</strong> É como o coeficiente de atrito - depende do "ambiente" onde a interação acontece!
                    </p>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="q_1" /> e <MathFormula formula="q_2" /></p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>O que são:</strong> Cargas elétricas das duas partículas (em Coulombs, C).
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Sinal:</strong> Podem ser positivas (+) ou negativas (-).
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Significado físico:</strong> Representam "quanta carga" cada partícula possui. Quanto maior a carga, mais forte a interação. O produto <MathFormula formula="q_1 \cdot q_2" /> determina se a força é de atração (sinais opostos, produto negativo) ou repulsão (sinais iguais, produto positivo).
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Exemplo:</strong> Se <MathFormula formula="q_1 = +2 \, \mu C" /> e <MathFormula formula="q_2 = -3 \, \mu C" />, então <MathFormula formula="q_1 \cdot q_2 = -6 \, \mu C^2" /> (negativo → atração).
                    </p>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="d" /></p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>O que é:</strong> Distância entre as duas cargas (em metros, m).
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Significado físico:</strong> Quanto mais longe as cargas estão, mais fraca é a força entre elas. A força cai com o <strong>quadrado</strong> da distância: se você dobra a distância (d → 2d), a força cai para 1/4 do valor original!
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Analogia:</strong> É como a luz de uma lâmpada - quanto mais longe você está, mais fraca é a iluminação (e segue a mesma lei do inverso do quadrado da distância!).
                    </p>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg md:col-span-2">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="|q_1 \cdot q_2|" /> (valor absoluto)</p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>Por que o valor absoluto?</strong> Na forma escalar, estamos calculando apenas o <strong>módulo</strong> (intensidade) da força, sem considerar a direção. O valor absoluto garante que F seja sempre positivo. A direção (atração ou repulsão) é determinada separadamente pelos sinais das cargas.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Regra prática:</strong> Se <MathFormula formula="q_1 \cdot q_2 > 0" /> (sinais iguais) → repulsão. Se <MathFormula formula="q_1 \cdot q_2 < 0" /> (sinais opostos) → atração.
                    </p>
                  </div>
                </div>
              </div>

              {/* Box sobre Constante Eletrostática e Permissividade */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5" />
                  Constante Eletrostática e Permissividade Elétrica
                </h4>
                <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                  A constante <MathFormula formula="k" /> depende do meio onde as cargas estão imersas. No vácuo (ou ar, que é praticamente igual), ela é denotada por <MathFormula formula="k_0" /> e vale:
                </p>
                <div className="bg-white p-4 rounded border border-yellow-200 mb-3">
                  <MathFormula formula="k_0 \approx 9,0 \times 10^9 \, N \cdot m^2/C^2" />
                </div>
                <p className="text-slate-700 text-sm mb-3 leading-relaxed">
                  Formalmente, <MathFormula formula="k" /> é definida em termos da <strong>permissividade elétrica</strong> (<MathFormula formula="\epsilon" />) do meio:
                </p>
                <div className="bg-white p-4 rounded border border-yellow-200 mb-3">
                  <MathFormula formula="k = \frac{1}{4\pi\epsilon}" />
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  <p><strong>Onde:</strong></p>
                  <p>• <MathFormula formula="\epsilon" /> = permissividade elétrica do meio (em C²/(N·m²) ou F/m)</p>
                  <p>• <MathFormula formula="\epsilon_0 \approx 8,85 \times 10^{-12} \, C^2/(N \cdot m^2)" /> = permissividade do vácuo</p>
                  <p>• <MathFormula formula="\epsilon = \epsilon_r \cdot \epsilon_0" />, onde <MathFormula formula="\epsilon_r" /> é a constante dielétrica relativa do meio</p>
                </div>
                <p className="text-slate-700 text-sm mt-3 leading-relaxed">
                  <strong>Significado físico:</strong> A permissividade mede "quão fácil" é para o meio ser polarizado por um campo elétrico. Meios com alta permissividade (como água, <MathFormula formula="\epsilon_r \approx 80" />) "blindam" as cargas, reduzindo a força entre elas. Meios com baixa permissividade (como vácuo, <MathFormula formula="\epsilon_r = 1" />) não interferem na interação.
                </p>
                <p className="text-slate-700 text-sm mt-3 leading-relaxed">
                  <strong>Exemplo numérico:</strong> Na água (<MathFormula formula="\epsilon_r \approx 80" />), a força elétrica entre duas cargas é 80 vezes menor do que no vácuo! Por isso soluções aquosas são boas para dissolver sais iônicos.
                </p>
              </div>
            </div>

            {/* Formulação Vetorial */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                Formulação Vetorial (Direção e Sentido)
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                A forma vetorial da Lei de Coulomb nos dá não apenas a intensidade, mas também a <strong>direção e sentido</strong> da força elétrica. Isso é essencial para problemas em 2D e 3D!
              </p>
              
              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 mb-6 shadow-lg">
                <MathFormula formula="\vec{F}_{12} = k \cdot \frac{q_1 \cdot q_2}{|\vec{r}_{21}|^2} \cdot \hat{r}_{21} = k \cdot \frac{q_1 \cdot q_2}{|\vec{r}_{21}|^3} \cdot \vec{r}_{21}" className="text-xl mb-6" />
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="\vec{F}_{12}" /></p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>O que é:</strong> Força vetorial que a carga 1 exerce sobre a carga 2.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Significado:</strong> É um vetor com módulo, direção e sentido. O módulo é dado pela forma escalar, e a direção/sentido são dados pelo versor <MathFormula formula="\hat{r}_{21}" />.
                    </p>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="\vec{r}_1" /> e <MathFormula formula="\vec{r}_2" /></p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>O que são:</strong> Vetores posição das cargas 1 e 2 no espaço.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Exemplo:</strong> Se a carga 1 está em (1, 2, 0) e a carga 2 está em (4, 6, 0), então <MathFormula formula="\vec{r}_1 = (1, 2, 0)" /> e <MathFormula formula="\vec{r}_2 = (4, 6, 0)" />.
                    </p>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="\vec{r}_{21} = \vec{r}_2 - \vec{r}_1" /></p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>O que é:</strong> Vetor deslocamento de 1 para 2.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Significado:</strong> Aponta da carga 1 para a carga 2. No exemplo acima, <MathFormula formula="\vec{r}_{21} = (4-1, 6-2, 0) = (3, 4, 0)" />.
                    </p>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="|\vec{r}_{21}| = d" /></p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>O que é:</strong> Módulo (comprimento) do vetor <MathFormula formula="\vec{r}_{21}" />, que é a distância entre as cargas.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Cálculo:</strong> <MathFormula formula="|\vec{r}_{21}| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}" />. No exemplo, <MathFormula formula="|\vec{r}_{21}| = \sqrt{3^2 + 4^2} = 5 \, m" />.
                    </p>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-lg md:col-span-2">
                    <p className="font-bold text-yellow-400 mb-2">📌 Termo: <MathFormula formula="\hat{r}_{21} = \frac{\vec{r}_{21}}{|\vec{r}_{21}|}" /></p>
                    <p className="text-slate-300 leading-relaxed">
                      <strong>O que é:</strong> Versor (vetor unitário) que aponta de 1 para 2.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Significado:</strong> Tem módulo 1 e indica apenas a direção e sentido (de 1 para 2). No exemplo, <MathFormula formula="\hat{r}_{21} = (3/5, 4/5, 0) = (0,6, 0,8, 0)" />.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-2">
                      <strong>Interpretação física:</strong> Se <MathFormula formula="q_1 \cdot q_2 > 0" /> (sinais iguais), <MathFormula formula="\vec{F}_{12}" /> tem o mesmo sentido de <MathFormula formula="\hat{r}_{21}" /> → repulsão (empurra 2 para longe de 1). Se <MathFormula formula="q_1 \cdot q_2 < 0" /> (sinais opostos), <MathFormula formula="\vec{F}_{12}" /> tem sentido oposto a <MathFormula formula="\hat{r}_{21}" /> → atração (puxa 2 em direção a 1).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm mb-2">⚠️ Atenção: Terceira Lei de Newton!</h4>
                    <p className="text-sm text-orange-700 leading-relaxed">
                      Pela Terceira Lei de Newton (ação e reação), a força que a carga 2 exerce sobre a carga 1 é <MathFormula formula="\vec{F}_{21} = -\vec{F}_{12}" />. Ou seja, as forças são iguais em módulo, mesma direção, mas sentidos opostos!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Princípio da Superposição */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                Princípio da Superposição
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Quando temos <strong>múltiplas cargas</strong> interagindo com uma carga de prova, a força resultante é a <strong>soma vetorial</strong> de todas as forças individuais. Cada par de cargas interage independentemente, como se as outras não existissem!
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
                <MathFormula formula="\vec{F}_R = \vec{F}_{10} + \vec{F}_{20} + ... + \vec{F}_{N0} = \sum_{i=1}^{N} \vec{F}_{i0}" />
                <div className="mt-4 text-sm text-slate-700 space-y-2">
                  <p><strong>Onde:</strong></p>
                  <p>• <MathFormula formula="\vec{F}_R" /> = força resultante sobre a carga de prova <MathFormula formula="q_0" /></p>
                  <p>• <MathFormula formula="\vec{F}_{i0}" /> = força que a carga <MathFormula formula="q_i" /> exerce sobre <MathFormula formula="q_0" /></p>
                  <p>• <MathFormula formula="N" /> = número total de cargas no sistema</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-orange-800 text-sm mb-2">⚠️ Cuidado: Soma Vetorial, NÃO Escalar!</h4>
                    <p className="text-sm text-orange-700 leading-relaxed mb-2">
                      Você <strong>NUNCA</strong> pode simplesmente somar os módulos das forças, a menos que elas tenham exatamente a mesma direção e sentido. Em geral, você deve:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-orange-700 ml-4">
                      <li>Calcular cada força individual <MathFormula formula="\vec{F}_{i0}" /> (módulo, direção, sentido)</li>
                      <li>Decompor cada força em componentes x, y (e z, se 3D)</li>
                      <li>Somar as componentes: <MathFormula formula="F_{Rx} = \sum F_{ix}" />, <MathFormula formula="F_{Ry} = \sum F_{iy}" /></li>
                      <li>Calcular o módulo da resultante: <MathFormula formula="|\vec{F}_R| = \sqrt{F_{Rx}^2 + F_{Ry}^2}" /></li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-bold text-blue-800 text-sm mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Exemplo Prático: 3 Cargas em Linha
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-2">
                  Imagine 3 cargas positivas alinhadas no eixo x: <MathFormula formula="q_1" /> em x=0, <MathFormula formula="q_0" /> em x=1m, <MathFormula formula="q_2" /> em x=2m. A força sobre <MathFormula formula="q_0" /> é:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 ml-4">
                  <li><MathFormula formula="\vec{F}_{10}" /> aponta para a direita (repulsão de <MathFormula formula="q_1" />)</li>
                  <li><MathFormula formula="\vec{F}_{20}" /> aponta para a esquerda (repulsão de <MathFormula formula="q_2" />)</li>
                  <li>Como estão na mesma linha, basta fazer: <MathFormula formula="F_R = F_{10} - F_{20}" /> (com sinal!)</li>
                </ul>
              </div>
            </div>

            {/* Passo-a-Passo Prático */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-green-600" />
                Passo-a-Passo Prático para Resolver Problemas
              </h3>
              <ol className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <p className="font-bold">Identifique todas as cargas e suas posições</p>
                    <p className="text-sm text-slate-600">Desenhe um diagrama com todas as cargas, suas posições (coordenadas x, y, z) e seus sinais (+/-).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <p className="font-bold">Calcule as distâncias entre as cargas</p>
                    <p className="text-sm text-slate-600">Use a fórmula da distância: <MathFormula formula="d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}" />.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <p className="font-bold">Calcule o módulo de cada força individual</p>
                    <p className="text-sm text-slate-600">Use <MathFormula formula="F = k \cdot \frac{|q_1 \cdot q_2|}{d^2}" /> para cada par de cargas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <div>
                    <p className="font-bold">Determine a direção e sentido de cada força</p>
                    <p className="text-sm text-slate-600">Se sinais iguais → repulsão (afasta). Se sinais opostos → atração (aproxima). Use o versor <MathFormula formula="\hat{r}_{21}" /> para determinar a direção exata.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                  <div>
                    <p className="font-bold">Decomponha cada força em componentes x, y (e z, se 3D)</p>
                    <p className="text-sm text-slate-600">Use trigonometria: <MathFormula formula="F_x = F \cdot \cos\theta" />, <MathFormula formula="F_y = F \cdot \sin\theta" />.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
                  <div>
                    <p className="font-bold">Some as componentes para obter a força resultante</p>
                    <p className="text-sm text-slate-600"><MathFormula formula="F_{Rx} = \sum F_{ix}" />, <MathFormula formula="F_{Ry} = \sum F_{iy}" />. Depois calcule o módulo: <MathFormula formula="|\vec{F}_R| = \sqrt{F_{Rx}^2 + F_{Ry}^2}" />.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">7</span>
                  <div>
                    <p className="font-bold">Verifique as unidades e a ordem de grandeza</p>
                    <p className="text-sm text-slate-600">Certifique-se de que todas as unidades estão no SI (m, C, N) e que o resultado faz sentido fisicamente!</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Exemplos Resolvidos */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
                Exemplos Resolvidos (Nível ITA/IME)
              </h3>

              {/* Exemplo 1 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 1: Duas Cargas em Linha</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded p-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                    <p className="text-slate-700 text-sm">
                      Duas cargas pontuais <MathFormula formula="q_1 = +2,0 \, \mu C" /> e <MathFormula formula="q_2 = -3,0 \, \mu C" /> estão separadas por uma distância de 30 cm no vácuo. Calcule o módulo da força elétrica entre elas.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                    <div className="space-y-3 text-sm text-slate-700">
                      <div>
                        <p className="font-bold mb-1">Passo 1: Identificar os dados</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li><MathFormula formula="q_1 = +2,0 \, \mu C = +2,0 \times 10^{-6} \, C" /></li>
                          <li><MathFormula formula="q_2 = -3,0 \, \mu C = -3,0 \times 10^{-6} \, C" /></li>
                          <li><MathFormula formula="d = 30 \, cm = 0,30 \, m" /></li>
                          <li><MathFormula formula="k_0 = 9,0 \times 10^9 \, N \cdot m^2/C^2" /> (vácuo)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 2: Aplicar a Lei de Coulomb (forma escalar)</p>
                        <div className="bg-slate-50 p-3 rounded my-2">
                          <MathFormula formula="F = k \cdot \frac{|q_1 \cdot q_2|}{d^2}" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 3: Substituir os valores</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="F = 9,0 \times 10^9 \cdot \frac{|(+2,0 \times 10^{-6}) \cdot (-3,0 \times 10^{-6})|}{(0,30)^2}" />
                          <MathFormula formula="F = 9,0 \times 10^9 \cdot \frac{|-6,0 \times 10^{-12}|}{0,09}" />
                          <MathFormula formula="F = 9,0 \times 10^9 \cdot \frac{6,0 \times 10^{-12}}{0,09}" />
                          <MathFormula formula="F = 9,0 \times 10^9 \cdot 6,67 \times 10^{-11}" />
                          <MathFormula formula="F = 0,60 \, N" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 4: Interpretar o resultado</p>
                        <p>A força tem módulo de <strong>0,60 N</strong>. Como as cargas têm sinais opostos (<MathFormula formula="q_1 \cdot q_2 < 0" />), a força é de <strong>atração</strong>.</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <p className="font-bold text-green-800">✅ Resposta Final:</p>
                        <p className="text-green-700"><MathFormula formula="F = 0,60 \, N" /> (atração)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemplo 2 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 2: Três Cargas no Triângulo Equilátero</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded p-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                    <p className="text-slate-700 text-sm">
                      Três cargas pontuais idênticas <MathFormula formula="q = +2,0 \, \mu C" /> são fixadas nos vértices de um triângulo equilátero de lado <MathFormula formula="L = 10 \, cm" />. Determine o módulo da força elétrica resultante sobre uma quarta carga <MathFormula formula="Q = +1,0 \, \mu C" /> colocada no centroide do triângulo.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                    <div className="space-y-3 text-sm text-slate-700">
                      <div>
                        <p className="font-bold mb-1">Passo 1: Simetria do problema</p>
                        <p>O centroide de um triângulo equilátero é equidistante dos três vértices. A distância <MathFormula formula="d" /> de cada vértice ao centro é:</p>
                        <div className="bg-slate-50 p-3 rounded my-2">
                          <MathFormula formula="d = \frac{L}{\sqrt{3}} = \frac{0,10}{\sqrt{3}} \approx 0,0577 \, m" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 2: Forças individuais</p>
                        <p>Cada carga <MathFormula formula="q" /> exerce uma força repulsiva sobre <MathFormula formula="Q" /> (ambas positivas). O módulo de cada força é:</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="F = k \cdot \frac{qQ}{d^2} = 9,0 \times 10^9 \cdot \frac{(2,0 \times 10^{-6})(1,0 \times 10^{-6})}{(0,0577)^2}" />
                          <MathFormula formula="F = 9,0 \times 10^9 \cdot \frac{2,0 \times 10^{-12}}{3,33 \times 10^{-3}}" />
                          <MathFormula formula="F \approx 5,4 \, N" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 3: Direções das forças</p>
                        <p>As três forças apontam do vértice para o centro (repulsão), formando ângulos de <MathFormula formula="120^\circ" /> entre si.</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 4: Soma vetorial</p>
                        <p>A soma de três vetores de mesmo módulo com ângulos de <MathFormula formula="120^\circ" /> entre si é <strong>nula</strong>! Isso pode ser verificado decompondo em componentes x e y:</p>
                        <div className="bg-slate-50 p-3 rounded my-2">
                          <MathFormula formula="\vec{F}_R = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 = \vec{0}" />
                        </div>
                        <p className="mt-2">Cada componente x e y se cancela devido à simetria do triângulo equilátero.</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <p className="font-bold text-green-800">✅ Resposta Final:</p>
                        <p className="text-green-700"><MathFormula formula="|\vec{F}_R| = 0 \, N" /> (força resultante nula devido à simetria)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemplo 3 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 3: Duas Cargas em 2D (Decomposição Vetorial)</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded p-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                    <p className="text-slate-700 text-sm">
                      Uma carga <MathFormula formula="q_1 = +4,0 \, \mu C" /> está na origem (0, 0). Uma carga <MathFormula formula="q_2 = +3,0 \, \mu C" /> está no ponto (3, 4) m. Calcule o módulo, direção e sentido da força que <MathFormula formula="q_1" /> exerce sobre <MathFormula formula="q_2" />.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                    <div className="space-y-3 text-sm text-slate-700">
                      <div>
                        <p className="font-bold mb-1">Passo 1: Calcular a distância</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="d = \sqrt{(3-0)^2 + (4-0)^2} = \sqrt{9 + 16} = \sqrt{25} = 5 \, m" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 2: Calcular o módulo da força</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="F = k \cdot \frac{|q_1 \cdot q_2|}{d^2} = 9,0 \times 10^9 \cdot \frac{(4,0 \times 10^{-6})(3,0 \times 10^{-6})}{(5)^2}" />
                          <MathFormula formula="F = 9,0 \times 10^9 \cdot \frac{12 \times 10^{-12}}{25}" />
                          <MathFormula formula="F = 9,0 \times 10^9 \cdot 4,8 \times 10^{-13} = 4,32 \times 10^{-3} \, N = 4,32 \, mN" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 3: Determinar a direção e sentido</p>
                        <p>Como ambas as cargas são positivas, a força é de <strong>repulsão</strong>. <MathFormula formula="\vec{F}_{12}" /> aponta de <MathFormula formula="q_1" /> para <MathFormula formula="q_2" />, ou seja, na direção do vetor <MathFormula formula="\vec{r}_{21} = (3, 4)" />.</p>
                        <p className="mt-2">O versor é:</p>
                        <div className="bg-slate-50 p-3 rounded my-2">
                          <MathFormula formula="\hat{r}_{21} = \frac{(3, 4)}{5} = (0,6, 0,8)" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 4: Escrever a força vetorial</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="\vec{F}_{12} = F \cdot \hat{r}_{21} = 4,32 \times 10^{-3} \cdot (0,6, 0,8)" />
                          <MathFormula formula="\vec{F}_{12} = (2,59 \times 10^{-3}, 3,46 \times 10^{-3}) \, N" />
                          <MathFormula formula="\vec{F}_{12} = (2,59, 3,46) \, mN" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 5: Calcular o ângulo com o eixo x</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="\theta = \arctan\left(\frac{F_y}{F_x}\right) = \arctan\left(\frac{3,46}{2,59}\right) = \arctan(1,336) \approx 53,1^\circ" />
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <p className="font-bold text-green-800">✅ Resposta Final:</p>
                        <p className="text-green-700">Módulo: <MathFormula formula="F = 4,32 \, mN" /></p>
                        <p className="text-green-700">Direção: <MathFormula formula="53,1^\circ" /> acima do eixo x positivo</p>
                        <p className="text-green-700">Sentido: De (0, 0) para (3, 4) (repulsão)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemplo 4 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 4: Equilíbrio de Três Cargas em Linha</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded p-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                    <p className="text-slate-700 text-sm">
                      Três cargas pontuais <MathFormula formula="q_1 = +Q" />, <MathFormula formula="q_2 = -4Q" /> e <MathFormula formula="q_3 = +Q" /> estão alinhadas no eixo x. <MathFormula formula="q_1" /> está na origem, <MathFormula formula="q_3" /> está em x = L. Determine a posição de equilíbrio de <MathFormula formula="q_2" /> (onde a força resultante sobre ela é nula).
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                    <div className="space-y-3 text-sm text-slate-700">
                      <div>
                        <p className="font-bold mb-1">Passo 1: Analisar as forças</p>
                        <p>Seja <MathFormula formula="x" /> a posição de <MathFormula formula="q_2" /> no eixo x (com <MathFormula formula="0 < x < L" />). As forças sobre <MathFormula formula="q_2" /> são:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                          <li><MathFormula formula="F_{12}" />: força de <MathFormula formula="q_1" /> sobre <MathFormula formula="q_2" /> (atração, pois sinais opostos) → aponta para a esquerda (direção -x)</li>
                          <li><MathFormula formula="F_{32}" />: força de <MathFormula formula="q_3" /> sobre <MathFormula formula="q_2" /> (atração, pois sinais opostos) → aponta para a direita (direção +x)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 2: Escrever as forças em módulo</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="F_{12} = k \cdot \frac{|q_1 \cdot q_2|}{x^2} = k \cdot \frac{|Q \cdot (-4Q)|}{x^2} = k \cdot \frac{4Q^2}{x^2}" />
                          <MathFormula formula="F_{32} = k \cdot \frac{|q_3 \cdot q_2|}{(L-x)^2} = k \cdot \frac{|Q \cdot (-4Q)|}{(L-x)^2} = k \cdot \frac{4Q^2}{(L-x)^2}" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 3: Condição de equilíbrio</p>
                        <p>Para que <MathFormula formula="q_2" /> esteja em equilíbrio, as forças devem se cancelar:</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="F_{12} = F_{32}" />
                          <MathFormula formula="k \cdot \frac{4Q^2}{x^2} = k \cdot \frac{4Q^2}{(L-x)^2}" />
                          <MathFormula formula="\frac{1}{x^2} = \frac{1}{(L-x)^2}" />
                          <MathFormula formula="(L-x)^2 = x^2" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Passo 4: Resolver a equação</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="L - x = \pm x" />
                        </div>
                        <p className="mt-2">Temos duas soluções:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                          <li>Caso 1: <MathFormula formula="L - x = x \Rightarrow x = L/2" /></li>
                          <li>Caso 2: <MathFormula formula="L - x = -x \Rightarrow L = 0" /> (sem sentido físico)</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <p className="font-bold text-green-800">✅ Resposta Final:</p>
                        <p className="text-green-700"><MathFormula formula="x = \frac{L}{2}" /> (no ponto médio entre <MathFormula formula="q_1" /> e <MathFormula formula="q_3" />)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemplo 5 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 5: Força em Meio Dielétrico (Água)</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded p-4">
                    <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                    <p className="text-slate-700 text-sm">
                      Duas cargas pontuais <MathFormula formula="q_1 = +5,0 \, \mu C" /> e <MathFormula formula="q_2 = -5,0 \, \mu C" /> estão separadas por 20 cm. Calcule a força elétrica entre elas: (a) no vácuo, (b) na água (<MathFormula formula="\epsilon_r \approx 80" />).
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200">
                    <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                    <div className="space-y-3 text-sm text-slate-700">
                      <div>
                        <p className="font-bold mb-1">Parte (a): No vácuo</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="F_{\text{vácuo}} = k_0 \cdot \frac{|q_1 \cdot q_2|}{d^2} = 9,0 \times 10^9 \cdot \frac{(5,0 \times 10^{-6})(5,0 \times 10^{-6})}{(0,20)^2}" />
                          <MathFormula formula="F_{\text{vácuo}} = 9,0 \times 10^9 \cdot \frac{25 \times 10^{-12}}{0,04}" />
                          <MathFormula formula="F_{\text{vácuo}} = 9,0 \times 10^9 \cdot 6,25 \times 10^{-10} = 5,625 \, N" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Parte (b): Na água</p>
                        <p className="mb-2">A constante eletrostática na água é:</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="k_{\text{água}} = \frac{k_0}{\epsilon_r} = \frac{9,0 \times 10^9}{80} = 1,125 \times 10^8 \, N \cdot m^2/C^2" />
                        </div>
                        <p className="mt-2 mb-2">A força na água é:</p>
                        <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                          <MathFormula formula="F_{\text{água}} = k_{\text{água}} \cdot \frac{|q_1 \cdot q_2|}{d^2} = 1,125 \times 10^8 \cdot \frac{25 \times 10^{-12}}{0,04}" />
                          <MathFormula formula="F_{\text{água}} = 1,125 \times 10^8 \cdot 6,25 \times 10^{-10} = 0,0703 \, N \approx 70,3 \, mN" />
                        </div>
                      </div>
                      <div>
                        <p className="font-bold mb-1">Comparação</p>
                        <div className="bg-slate-50 p-3 rounded my-2">
                          <MathFormula formula="\frac{F_{\text{vácuo}}}{F_{\text{água}}} = \frac{5,625}{0,0703} \approx 80" />
                        </div>
                        <p className="mt-2">A força na água é <strong>80 vezes menor</strong> do que no vácuo! Isso explica por que soluções aquosas são boas para dissolver sais iônicos: a água "blinda" as cargas, reduzindo drasticamente a atração entre íons.</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <p className="font-bold text-green-800">✅ Resposta Final:</p>
                        <p className="text-green-700">(a) No vácuo: <MathFormula formula="F = 5,625 \, N" /> (atração)</p>
                        <p className="text-green-700">(b) Na água: <MathFormula formula="F = 0,0703 \, N = 70,3 \, mN" /> (atração, 80× menor)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-purple-600" />
                Aplicações Práticas da Lei de Coulomb
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <p className="font-bold text-purple-800 mb-2">1. Impressoras a Laser e Xerox</p>
                  <p className="text-sm text-slate-700">
                    Usam forças eletrostáticas para atrair partículas de toner (carregadas negativamente) para regiões carregadas positivamente no tambor, formando a imagem.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <p className="font-bold text-purple-800 mb-2">2. Precipitadores Eletrostáticos</p>
                  <p className="text-sm text-slate-700">
                    Removem partículas de poluição do ar em chaminés industriais. Partículas são carregadas e atraídas para placas coletoras por força de Coulomb.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <p className="font-bold text-purple-800 mb-2">3. Pintura Eletrostática</p>
                  <p className="text-sm text-slate-700">
                    Partículas de tinta são carregadas eletricamente e atraídas para a superfície metálica aterrada, resultando em cobertura uniforme e economia de tinta.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <p className="font-bold text-purple-800 mb-2">4. Estrutura de Moléculas e Cristais</p>
                  <p className="text-sm text-slate-700">
                    Ligações iônicas (NaCl) e covalentes são governadas por forças de Coulomb entre elétrons e núcleos atômicos. A Lei de Coulomb é fundamental na química quântica!
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <p className="font-bold text-purple-800 mb-2">5. Aceleradores de Partículas</p>
                  <p className="text-sm text-slate-700">
                    Usam campos elétricos (derivados da Lei de Coulomb) para acelerar prótons e elétrons a velocidades próximas à da luz em experimentos de física de partículas.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-100">
                  <p className="font-bold text-purple-800 mb-2">6. Eletricidade Estática no Dia a Dia</p>
                  <p className="text-sm text-slate-700">
                    Choques ao tocar maçanetas, cabelo arrepiado após esfregar balão, atração de papel por régua eletrizada - todos explicados pela Lei de Coulomb!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campo Elétrico com Didática Superior */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🌊 Campo Elétrico (Didática Superior)</h2>
          
          {/* 1. Explicação Simples */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">O que é Campo Elétrico? (Explicação Simples)</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Imagine que você está em uma piscina e alguém joga uma pedra na água. Você sente as ondas chegando até você, mesmo sem tocar na pedra diretamente. O <strong>campo elétrico</strong> funciona de forma similar: uma carga elétrica "perturba" o espaço ao seu redor, criando uma "influência invisível" que pode ser sentida por outras cargas.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pense no campo elétrico como um "mapa de forças": em cada ponto do espaço, o campo elétrico indica a direção e a intensidade da força que uma carga de teste positiva sentiria se fosse colocada ali. É como um mapa de ventos que mostra a direção e a velocidade do vento em cada região - mas aqui estamos falando de forças elétricas!
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Analogia prática:</strong> Se você espalhar limalha de ferro perto de um ímã, as limalhas se alinham mostrando o "campo magnético". Da mesma forma, cargas elétricas criam um "campo elétrico" ao seu redor, que pode ser visualizado através de linhas de campo (que veremos adiante).
            </p>
          </div>

          {/* 2. Contexto Histórico */}
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">📜 Contexto Histórico</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              O conceito de <strong>campo elétrico</strong> foi introduzido pelo físico e químico inglês <strong>Michael Faraday</strong> (1791-1867) na década de 1830. Antes de Faraday, os físicos pensavam em termos de "ação à distância" - uma carga simplesmente exercia força sobre outra, instantaneamente, sem nenhum mecanismo intermediário.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Faraday, que tinha formação de encadernador e era autodidata em ciências, revolucionou a física ao propor que o espaço ao redor de uma carga não é "vazio", mas sim preenchido por um <strong>campo</strong> - uma entidade física real que transmite forças. Essa ideia foi inicialmente recebida com ceticismo pela comunidade científica, mas foi matematicamente formalizada por <strong>James Clerk Maxwell</strong> (1831-1879) nas suas famosas equações de eletromagnetismo (1865).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A introdução do conceito de campo foi uma das maiores revoluções conceituais da física. Hoje, sabemos que campos (elétrico, magnético, gravitacional, quântico) são fundamentais para descrever todas as interações da natureza. O campo elétrico não é apenas uma ferramenta matemática conveniente - ele é uma entidade física real que armazena energia e momento!
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Curiosidade:</strong> Faraday visualizava os campos através de "linhas de força" (hoje chamadas linhas de campo), que ele desenhava meticulosamente em seus cadernos de laboratório. Essas visualizações intuitivas foram essenciais para o desenvolvimento da teoria eletromagnética moderna.
            </p>
          </div>

          {/* 3. Definição e Fórmulas */}
          <div className="space-y-6 mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Definição e Fórmulas</h3>
            
            {/* Definição Geral */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Definição Geral de Campo Elétrico</h4>
              <p className="text-slate-700 text-sm mb-4">
                O <strong>campo elétrico</strong> <MathFormula formula="\vec{E}" /> em um ponto do espaço é definido como a força elétrica <MathFormula formula="\vec{F}" /> que atuaria sobre uma <strong>carga de teste positiva</strong> <MathFormula formula="q_0" /> colocada nesse ponto, dividida pelo valor dessa carga:
              </p>
              <div className="bg-white p-4 rounded border border-yellow-300 mb-4">
                <MathFormula formula="\vec{E} = \frac{\vec{F}}{q_0}" />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded p-4 space-y-2 text-sm">
                <p className="font-bold text-slate-900">📖 Explicação Termo-a-Termo:</p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>• <MathFormula formula="\vec{E}" /></strong> = Campo elétrico (grandeza vetorial, medida em Newton por Coulomb, N/C, ou Volt por metro, V/m). É a "força por unidade de carga" - indica quanta força uma carga unitária sentiria em cada ponto.</p>
                  <p><strong>• <MathFormula formula="\vec{F}" /></strong> = Força elétrica que atua sobre a carga de teste (em Newtons, N). É a força que a carga <MathFormula formula="q_0" /> realmente sente devido às outras cargas presentes.</p>
                  <p><strong>• <MathFormula formula="q_0" /></strong> = Carga de teste positiva (em Coulombs, C). Deve ser muito pequena para não perturbar a distribuição de cargas que cria o campo. Por convenção, usamos carga positiva para definir a direção do campo.</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm mt-4">
                <strong>Interpretação física:</strong> O campo elétrico é uma propriedade do espaço criada pelas cargas fontes. Uma vez que sabemos <MathFormula formula="\vec{E}" /> em um ponto, podemos calcular a força sobre qualquer carga <MathFormula formula="q" /> colocada ali: <MathFormula formula="\vec{F} = q \vec{E}" />. Se <MathFormula formula="q > 0" />, a força tem a mesma direção do campo; se <MathFormula formula="q < 0" />, a força é oposta ao campo.
              </p>
            </div>

            {/* Campo de Carga Pontual */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Campo Elétrico de uma Carga Pontual</h4>
              <p className="text-slate-700 text-sm mb-4">
                Para uma carga pontual <MathFormula formula="Q" /> (a carga fonte), o campo elétrico a uma distância <MathFormula formula="r" /> dela é dado por:
              </p>
              <div className="bg-white p-4 rounded border border-blue-300 mb-4 space-y-3">
                <div>
                  <p className="text-xs text-slate-600 mb-2">Forma Escalar (módulo):</p>
                  <MathFormula formula="E = k \cdot \frac{|Q|}{r^2}" />
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-2">Forma Vetorial:</p>
                  <MathFormula formula="\vec{E} = k \cdot \frac{Q}{r^2} \hat{r}" />
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-4 space-y-2 text-sm">
                <p className="font-bold text-slate-900">📖 Explicação Termo-a-Termo (Forma Escalar):</p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>• <MathFormula formula="E" /></strong> = Módulo (intensidade) do campo elétrico no ponto considerado (em N/C ou V/m). Quanto maior <MathFormula formula="E" />, maior a força por unidade de carga.</p>
                  <p><strong>• <MathFormula formula="k \approx 9,0 \times 10^9 \, N \cdot m^2/C^2" /></strong> = Constante eletrostática de Coulomb (mesma da Lei de Coulomb). Depende do meio: no vácuo é <MathFormula formula="k_0" />, em outros meios é <MathFormula formula="k = k_0/\epsilon_r" />.</p>
                  <p><strong>• <MathFormula formula="Q" /></strong> = Carga fonte que cria o campo (em Coulombs, C). Pode ser positiva ou negativa. O módulo <MathFormula formula="|Q|" /> garante que <MathFormula formula="E \geq 0" />.</p>
                  <p><strong>• <MathFormula formula="r" /></strong> = Distância do ponto onde queremos calcular o campo até a carga fonte <MathFormula formula="Q" /> (em metros, m). Quanto maior a distância, menor o campo (decai com <MathFormula formula="1/r^2" />).</p>
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded p-4 space-y-2 text-sm mt-4">
                <p className="font-bold text-slate-900">📖 Explicação Termo-a-Termo (Forma Vetorial):</p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>• <MathFormula formula="\vec{E}" /></strong> = Campo elétrico vetorial (tem módulo, direção e sentido). Aponta radialmente para fora se <MathFormula formula="Q > 0" /> (carga positiva repele carga de teste positiva) e radialmente para dentro se <MathFormula formula="Q < 0" /> (carga negativa atrai carga de teste positiva).</p>
                  <p><strong>• <MathFormula formula="\hat{r}" /></strong> = Vetor unitário radial (módulo 1) que aponta da carga fonte <MathFormula formula="Q" /> para o ponto onde calculamos o campo. Define a direção do campo.</p>
                  <p><strong>• Sinal de <MathFormula formula="Q" /></strong>: Se <MathFormula formula="Q > 0" />, <MathFormula formula="\vec{E}" /> aponta no sentido de <MathFormula formula="\hat{r}" /> (para fora). Se <MathFormula formula="Q < 0" />, <MathFormula formula="\vec{E}" /> aponta no sentido oposto a <MathFormula formula="\hat{r}" /> (para dentro).</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm mt-4">
                <strong>Interpretação física:</strong> O campo elétrico de uma carga pontual diminui com o quadrado da distância (<MathFormula formula="E \propto 1/r^2" />), assim como a força de Coulomb. Isso significa que o campo é muito intenso perto da carga e enfraquece rapidamente ao nos afastarmos. Por exemplo, ao dobrar a distância, o campo cai para 1/4 do valor original!
              </p>
            </div>

            {/* Princípio da Superposição */}
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Princípio da Superposição para Campos Elétricos</h4>
              <p className="text-slate-700 text-sm mb-4">
                Quando temos <strong>múltiplas cargas</strong> <MathFormula formula="Q_1, Q_2, Q_3, \ldots, Q_n" /> criando campos elétricos, o campo elétrico resultante em um ponto é a <strong>soma vetorial</strong> dos campos criados por cada carga individualmente:
              </p>
              <div className="bg-white p-4 rounded border border-pink-300 mb-4">
                <MathFormula formula="\vec{E}_{\text{total}} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + \cdots + \vec{E}_n = \sum_{i=1}^{n} \vec{E}_i" />
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded p-4 space-y-2 text-sm">
                <p className="font-bold text-slate-900">📖 Explicação Termo-a-Termo:</p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>• <MathFormula formula="\vec{E}_{\text{total}}" /></strong> = Campo elétrico resultante (total) no ponto considerado (em N/C). É o campo que uma carga de teste realmente "sente".</p>
                  <p><strong>• <MathFormula formula="\vec{E}_i" /></strong> = Campo elétrico criado pela carga <MathFormula formula="Q_i" /> no ponto considerado. Calculado usando <MathFormula formula="\vec{E}_i = k Q_i / r_i^2 \hat{r}_i" />, onde <MathFormula formula="r_i" /> é a distância de <MathFormula formula="Q_i" /> ao ponto.</p>
                  <p><strong>• <MathFormula formula="\sum_{i=1}^{n}" /></strong> = Símbolo de somatório - significa "some todos os campos de i=1 até i=n". É uma soma vetorial, não escalar!</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm mt-4">
                <strong>Como fazer a soma vetorial:</strong> Decomponha cada campo <MathFormula formula="\vec{E}_i" /> em componentes x, y (e z, se 3D). Some todas as componentes x para obter <MathFormula formula="E_x" />, todas as componentes y para obter <MathFormula formula="E_y" />. O módulo do campo total é <MathFormula formula="E_{\text{total}} = \sqrt{E_x^2 + E_y^2}" /> e a direção é <MathFormula formula="\theta = \arctan(E_y/E_x)" />.
              </p>
            </div>
          </div>

          {/* 4. Linhas de Campo Elétrico */}
          <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">🌀 Linhas de Campo Elétrico</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              As <strong>linhas de campo elétrico</strong> são uma ferramenta visual poderosa para representar o campo elétrico. Elas foram introduzidas por Faraday e são essenciais para entender a estrutura do campo.
            </p>
            <div className="bg-white border border-indigo-200 rounded-lg p-5 mb-4">
              <h4 className="font-bold text-slate-900 mb-3">Propriedades das Linhas de Campo</h4>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="bg-indigo-50 p-4 rounded">
                  <p className="font-bold text-indigo-900 mb-2">1. Direção e Sentido</p>
                  <p>A <strong>tangente</strong> à linha de campo em cada ponto indica a <strong>direção</strong> do campo elétrico naquele ponto. O <strong>sentido</strong> da linha (indicado por setas) mostra para onde uma carga positiva seria empurrada.</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded">
                  <p className="font-bold text-indigo-900 mb-2">2. Origem e Término</p>
                  <p>Linhas de campo <strong>nascem</strong> (originam-se) em cargas positivas e <strong>morrem</strong> (terminam) em cargas negativas. Se não há carga negativa próxima, as linhas vão até o infinito. Linhas nunca começam ou terminam no espaço vazio!</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded">
                  <p className="font-bold text-indigo-900 mb-2">3. Densidade de Linhas</p>
                  <p>A <strong>densidade</strong> (número de linhas por unidade de área) é proporcional à <strong>intensidade</strong> do campo. Onde as linhas estão mais próximas, o campo é mais forte. Onde estão mais espaçadas, o campo é mais fraco.</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded">
                  <p className="font-bold text-indigo-900 mb-2">4. Linhas Nunca se Cruzam</p>
                  <p>Duas linhas de campo <strong>nunca se cruzam</strong>. Se cruzassem, haveria duas direções diferentes para o campo no ponto de cruzamento, o que é impossível (o campo tem uma única direção em cada ponto).</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded">
                  <p className="font-bold text-indigo-900 mb-2">5. Perpendiculares a Superfícies Condutoras</p>
                  <p>Linhas de campo são sempre <strong>perpendiculares</strong> à superfície de um condutor em equilíbrio eletrostático. Se não fossem, haveria componente tangencial do campo, causando movimento de cargas (contradizendo o equilíbrio).</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-indigo-200 rounded-lg p-5">
              <h4 className="font-bold text-slate-900 mb-3">Padrões Comuns de Linhas de Campo</h4>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="bg-slate-50 p-4 rounded">
                  <p className="font-bold text-slate-900 mb-2">• Carga Positiva Isolada</p>
                  <p>Linhas radiais apontando para fora em todas as direções (como raios do Sol). Simetria esférica.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <p className="font-bold text-slate-900 mb-2">• Carga Negativa Isolada</p>
                  <p>Linhas radiais apontando para dentro em todas as direções (convergindo para a carga). Simetria esférica.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <p className="font-bold text-slate-900 mb-2">• Dipolo Elétrico (+Q e -Q próximas)</p>
                  <p>Linhas saem da carga positiva e entram na negativa, formando curvas suaves. Padrão assimétrico com concentração de linhas entre as cargas.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <p className="font-bold text-slate-900 mb-2">• Duas Cargas Positivas</p>
                  <p>Linhas saem de ambas as cargas e se repelem mutuamente, criando uma "zona de exclusão" entre elas.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <p className="font-bold text-slate-900 mb-2">• Campo Uniforme (placas paralelas)</p>
                  <p>Linhas paralelas e igualmente espaçadas, apontando da placa positiva para a negativa. Campo constante entre as placas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Passo-a-Passo Prático */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 rounded-r-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-cyan-600" />
              Passo-a-Passo Prático para Calcular Campo Elétrico
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <p className="font-bold text-cyan-900 mb-2">Passo 1: Identificar as cargas fontes</p>
                <p className="text-sm text-slate-700">
                  Liste todas as cargas <MathFormula formula="Q_1, Q_2, \ldots, Q_n" /> que criam o campo. Anote seus valores (com sinal!) e posições no espaço.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <p className="font-bold text-cyan-900 mb-2">Passo 2: Escolher o ponto de interesse</p>
                <p className="text-sm text-slate-700">
                  Defina o ponto P onde você quer calcular o campo elétrico. Estabeleça um sistema de coordenadas (x, y) ou (x, y, z).
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <p className="font-bold text-cyan-900 mb-2">Passo 3: Calcular distâncias</p>
                <p className="text-sm text-slate-700">
                  Para cada carga <MathFormula formula="Q_i" />, calcule a distância <MathFormula formula="r_i" /> até o ponto P usando <MathFormula formula="r_i = \sqrt{(x_P - x_i)^2 + (y_P - y_i)^2}" /> (em 2D).
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <p className="font-bold text-cyan-900 mb-2">Passo 4: Calcular campos individuais</p>
                <p className="text-sm text-slate-700">
                  Para cada carga, calcule o módulo do campo: <MathFormula formula="E_i = k |Q_i| / r_i^2" />. Determine a direção: o campo aponta radialmente para fora se <MathFormula formula="Q_i > 0" />, para dentro se <MathFormula formula="Q_i < 0" />.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <p className="font-bold text-cyan-900 mb-2">Passo 5: Decompor em componentes</p>
                <p className="text-sm text-slate-700">
                  Para cada campo <MathFormula formula="\vec{E}_i" />, encontre as componentes: <MathFormula formula="E_{ix} = E_i \cos(\theta_i)" /> e <MathFormula formula="E_{iy} = E_i \sin(\theta_i)" />, onde <MathFormula formula="\theta_i" /> é o ângulo com o eixo x. Atenção ao sinal (direção)!
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <p className="font-bold text-cyan-900 mb-2">Passo 6: Somar componentes</p>
                <p className="text-sm text-slate-700">
                  Some todas as componentes x: <MathFormula formula="E_x = \sum E_{ix}" />. Some todas as componentes y: <MathFormula formula="E_y = \sum E_{iy}" />.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <p className="font-bold text-cyan-900 mb-2">Passo 7: Calcular módulo e direção do campo resultante</p>
                <p className="text-sm text-slate-700">
                  Módulo: <MathFormula formula="E = \sqrt{E_x^2 + E_y^2}" />. Direção: <MathFormula formula="\theta = \arctan(E_y / E_x)" /> (ângulo com eixo x). Verifique o quadrante correto!
                </p>
              </div>
            </div>
          </div>

          {/* 6. Exemplos Resolvidos */}
          <div className="space-y-6 mb-6">
            <h3 className="text-2xl font-bold text-slate-900">📝 Exemplos Resolvidos (Nível ITA/IME)</h3>
            
            {/* Exemplo 1 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 1: Campo de uma Carga Pontual</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                  <p className="text-slate-700 text-sm">
                    Uma carga pontual <MathFormula formula="Q = +8,0 \, \mu C" /> está localizada na origem. Calcule o campo elétrico (módulo, direção e sentido) no ponto P = (3,0 m, 4,0 m).
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div>
                      <p className="font-bold mb-1">Passo 1: Dados do problema</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Carga fonte: <MathFormula formula="Q = +8,0 \, \mu C = 8,0 \times 10^{-6} \, C" /></li>
                        <li>Posição da carga: origem (0, 0)</li>
                        <li>Ponto de interesse: P = (3,0 m, 4,0 m)</li>
                        <li>Constante: <MathFormula formula="k = 9,0 \times 10^9 \, N \cdot m^2/C^2" /></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 2: Calcular distância r</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="r = \sqrt{(3,0)^2 + (4,0)^2} = \sqrt{9 + 16} = \sqrt{25} = 5,0 \, m" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 3: Calcular módulo do campo</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E = k \cdot \frac{|Q|}{r^2} = 9,0 \times 10^9 \cdot \frac{8,0 \times 10^{-6}}{(5,0)^2}" />
                        <MathFormula formula="E = 9,0 \times 10^9 \cdot \frac{8,0 \times 10^{-6}}{25} = 9,0 \times 10^9 \cdot 3,2 \times 10^{-7}" />
                        <MathFormula formula="E = 2,88 \times 10^3 \, N/C = 2880 \, N/C" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 4: Determinar direção e sentido</p>
                      <p className="mb-2">Como <MathFormula formula="Q > 0" /> (carga positiva), o campo aponta radialmente para fora, ou seja, da origem (0, 0) para o ponto P (3,0 m, 4,0 m).</p>
                      <p className="mb-2">Ângulo com o eixo x:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="\theta = \arctan\left(\frac{4,0}{3,0}\right) = \arctan(1,333) \approx 53,1^\circ" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 5: Componentes do campo (opcional)</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E_x = E \cos(53,1^\circ) = 2880 \times 0,6 = 1728 \, N/C" />
                        <MathFormula formula="E_y = E \sin(53,1^\circ) = 2880 \times 0,8 = 2304 \, N/C" />
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="font-bold text-green-800">✅ Resposta Final:</p>
                      <p className="text-green-700">Módulo: <MathFormula formula="E = 2880 \, N/C = 2,88 \, kN/C" /></p>
                      <p className="text-green-700">Direção: <MathFormula formula="53,1^\circ" /> acima do eixo x positivo</p>
                      <p className="text-green-700">Sentido: Radialmente para fora (da origem para P)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 2: Campo de Duas Cargas (Dipolo)</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                  <p className="text-slate-700 text-sm">
                    Duas cargas <MathFormula formula="q_1 = +6,0 \, nC" /> em (-3,0 cm, 0) e <MathFormula formula="q_2 = -6,0 \, nC" /> em (+3,0 cm, 0) formam um dipolo elétrico. Calcule o campo elétrico no ponto P = (0, 4,0 cm) (no eixo y, equidistante das cargas).
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div>
                      <p className="font-bold mb-1">Passo 1: Converter unidades e organizar dados</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><MathFormula formula="q_1 = +6,0 \, nC = 6,0 \times 10^{-9} \, C" /> em (-0,03 m, 0)</li>
                        <li><MathFormula formula="q_2 = -6,0 \, nC = -6,0 \times 10^{-9} \, C" /> em (+0,03 m, 0)</li>
                        <li>Ponto P = (0, 0,04 m)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 2: Calcular distâncias</p>
                      <p className="mb-2">Distância de <MathFormula formula="q_1" /> a P:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="r_1 = \sqrt{(0 - (-0,03))^2 + (0,04 - 0)^2} = \sqrt{(0,03)^2 + (0,04)^2}" />
                        <MathFormula formula="r_1 = \sqrt{0,0009 + 0,0016} = \sqrt{0,0025} = 0,05 \, m = 5,0 \, cm" />
                      </div>
                      <p className="mb-2">Por simetria, <MathFormula formula="r_2 = r_1 = 0,05 \, m" />.</p>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 3: Calcular módulos dos campos</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E_1 = k \cdot \frac{|q_1|}{r_1^2} = 9,0 \times 10^9 \cdot \frac{6,0 \times 10^{-9}}{(0,05)^2}" />
                        <MathFormula formula="E_1 = 9,0 \times 10^9 \cdot \frac{6,0 \times 10^{-9}}{0,0025} = 9,0 \times 10^9 \cdot 2,4 \times 10^{-6}" />
                        <MathFormula formula="E_1 = 21600 \, N/C = 21,6 \, kN/C" />
                      </div>
                      <p className="mb-2">Por simetria, <MathFormula formula="E_2 = E_1 = 21,6 \, kN/C" />.</p>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 4: Analisar direções</p>
                      <p className="mb-2"><strong>Campo <MathFormula formula="\vec{E}_1" /></strong> (de <MathFormula formula="q_1 = +6,0 \, nC" />): Aponta de <MathFormula formula="q_1" /> para P, ou seja, da esquerda-baixo para cima-direita.</p>
                      <p className="mb-2"><strong>Campo <MathFormula formula="\vec{E}_2" /></strong> (de <MathFormula formula="q_2 = -6,0 \, nC" />): Aponta de P para <MathFormula formula="q_2" /> (atração), ou seja, de cima para baixo-direita.</p>
                      <p className="mb-2">Ângulos com a vertical (eixo y):</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="\alpha = \arctan\left(\frac{0,03}{0,04}\right) = \arctan(0,75) \approx 36,9^\circ" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 5: Decompor em componentes</p>
                      <p className="mb-2"><strong>Para <MathFormula formula="\vec{E}_1" /></strong> (carga positiva à esquerda):</p>
                      <ul className="list-disc list-inside ml-4 space-y-1 mb-2">
                        <li>Componente x: <MathFormula formula="E_{1x} = E_1 \sin(\alpha) = 21600 \times \sin(36,9^\circ) = 21600 \times 0,6 = 12960 \, N/C" /> (para direita, +x)</li>
                        <li>Componente y: <MathFormula formula="E_{1y} = E_1 \cos(\alpha) = 21600 \times \cos(36,9^\circ) = 21600 \times 0,8 = 17280 \, N/C" /> (para cima, +y)</li>
                      </ul>
                      <p className="mb-2"><strong>Para <MathFormula formula="\vec{E}_2" /></strong> (carga negativa à direita):</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Componente x: <MathFormula formula="E_{2x} = E_2 \sin(\alpha) = 21600 \times 0,6 = 12960 \, N/C" /> (para direita, +x)</li>
                        <li>Componente y: <MathFormula formula="E_{2y} = -E_2 \cos(\alpha) = -21600 \times 0,8 = -17280 \, N/C" /> (para baixo, -y, pois aponta para <MathFormula formula="q_2" />)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 6: Somar componentes</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E_x = E_{1x} + E_{2x} = 12960 + 12960 = 25920 \, N/C" />
                        <MathFormula formula="E_y = E_{1y} + E_{2y} = 17280 + (-17280) = 0 \, N/C" />
                      </div>
                      <p className="mt-2"><strong>Observação importante:</strong> A componente y se cancela por simetria! O campo resultante é puramente horizontal (na direção x).</p>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 7: Módulo e direção do campo resultante</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E = \sqrt{E_x^2 + E_y^2} = \sqrt{(25920)^2 + 0^2} = 25920 \, N/C = 25,9 \, kN/C" />
                      </div>
                      <p className="mt-2">Direção: Puramente horizontal, apontando para a direita (+x).</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="font-bold text-green-800">✅ Resposta Final:</p>
                      <p className="text-green-700">Módulo: <MathFormula formula="E = 25,9 \, kN/C" /></p>
                      <p className="text-green-700">Direção: Horizontal (eixo +x)</p>
                      <p className="text-green-700">Sentido: Para a direita (da carga negativa para a positiva)</p>
                      <p className="text-green-700 mt-2"><strong>Interpretação física:</strong> No eixo de simetria de um dipolo, as componentes perpendiculares se cancelam e o campo aponta na direção do dipolo (de - para +).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 3 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 3: Campo de Três Cargas em Triângulo</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                  <p className="text-slate-700 text-sm">
                    Três cargas idênticas <MathFormula formula="q = +5,0 \, \mu C" /> estão nos vértices de um triângulo equilátero de lado <MathFormula formula="L = 10 \, cm" />. Calcule o campo elétrico no centro do triângulo.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div>
                      <p className="font-bold mb-1">Passo 1: Geometria do triângulo equilátero</p>
                      <p className="mb-2">Em um triângulo equilátero, o centro (centróide) está a uma distância <MathFormula formula="r" /> de cada vértice, onde:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="r = \frac{L}{\sqrt{3}} = \frac{0,10}{\sqrt{3}} = \frac{0,10}{1,732} \approx 0,0577 \, m = 5,77 \, cm" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 2: Calcular módulo do campo de cada carga</p>
                      <p className="mb-2">Como as três cargas são idênticas e equidistantes do centro:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E_1 = E_2 = E_3 = k \cdot \frac{q}{r^2} = 9,0 \times 10^9 \cdot \frac{5,0 \times 10^{-6}}{(0,0577)^2}" />
                        <MathFormula formula="E = 9,0 \times 10^9 \cdot \frac{5,0 \times 10^{-6}}{0,00333} = 9,0 \times 10^9 \cdot 1,50 \times 10^{-3}" />
                        <MathFormula formula="E = 1,35 \times 10^7 \, N/C = 13,5 \, MN/C" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 3: Analisar simetria</p>
                      <p className="mb-2">As três cargas são positivas e idênticas, dispostas simetricamente ao redor do centro. Cada campo aponta radialmente para fora (do vértice para o centro é a direção de repulsão, então do centro para fora).</p>
                      <p className="mb-2">Os três vetores campo formam ângulos de <MathFormula formula="120^\circ" /> entre si (simetria trigonal).</p>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 4: Aplicar princípio da superposição</p>
                      <p className="mb-2">Por simetria, a soma vetorial dos três campos é <strong>zero</strong>! Vamos verificar:</p>
                      <p className="mb-2">Escolhendo um sistema de coordenadas com um vértice no eixo +x:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1 mb-2">
                        <li><MathFormula formula="\vec{E}_1" />: aponta na direção <MathFormula formula="0^\circ" /> (eixo +x)</li>
                        <li><MathFormula formula="\vec{E}_2" />: aponta na direção <MathFormula formula="120^\circ" /></li>
                        <li><MathFormula formula="\vec{E}_3" />: aponta na direção <MathFormula formula="240^\circ" /></li>
                      </ul>
                      <p className="mb-2">Componentes x:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E_x = E(\cos 0^\circ + \cos 120^\circ + \cos 240^\circ)" />
                        <MathFormula formula="E_x = E(1 + (-0,5) + (-0,5)) = E \times 0 = 0" />
                      </div>
                      <p className="mb-2">Componentes y:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E_y = E(\sin 0^\circ + \sin 120^\circ + \sin 240^\circ)" />
                        <MathFormula formula="E_y = E(0 + 0,866 + (-0,866)) = E \times 0 = 0" />
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="font-bold text-green-800">✅ Resposta Final:</p>
                      <p className="text-green-700"><MathFormula formula="\vec{E}_{\text{total}} = \vec{0}" /> (campo nulo no centro)</p>
                      <p className="text-green-700 mt-2"><strong>Interpretação física:</strong> Devido à simetria perfeita (três cargas idênticas igualmente espaçadas), os campos se cancelam completamente no centro. Este é um ponto de equilíbrio (instável) para uma carga de teste.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 4 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 4: Força sobre Carga em Campo Elétrico</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                  <p className="text-slate-700 text-sm">
                    Um elétron (<MathFormula formula="q = -1,6 \times 10^{-19} \, C" />, <MathFormula formula="m = 9,1 \times 10^{-31} \, kg" />) é colocado em um campo elétrico uniforme <MathFormula formula="\vec{E} = 5,0 \times 10^4 \, N/C" /> apontando para cima (+y). Calcule: (a) a força sobre o elétron, (b) a aceleração do elétron.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div>
                      <p className="font-bold mb-1">Parte (a): Força sobre o elétron</p>
                      <p className="mb-2">A força elétrica sobre uma carga em um campo é:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="\vec{F} = q \vec{E}" />
                      </div>
                      <p className="mb-2">Substituindo os valores:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="\vec{F} = (-1,6 \times 10^{-19}) \times (5,0 \times 10^4 \, \hat{j})" />
                        <MathFormula formula="\vec{F} = -8,0 \times 10^{-15} \, \hat{j} \, N" />
                      </div>
                      <p className="mb-2">O sinal negativo indica que a força aponta para baixo (-y), <strong>oposta ao campo</strong> (pois a carga é negativa).</p>
                      <p className="mb-2">Módulo da força:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="F = 8,0 \times 10^{-15} \, N" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Parte (b): Aceleração do elétron</p>
                      <p className="mb-2">Usando a Segunda Lei de Newton:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="\vec{a} = \frac{\vec{F}}{m} = \frac{-8,0 \times 10^{-15}}{9,1 \times 10^{-31}} \, \hat{j}" />
                        <MathFormula formula="\vec{a} = -8,79 \times 10^{15} \, \hat{j} \, m/s^2" />
                      </div>
                      <p className="mb-2">Módulo da aceleração:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="a = 8,79 \times 10^{15} \, m/s^2 \approx 8,8 \times 10^{15} \, m/s^2" />
                      </div>
                      <p className="mt-2"><strong>Observação:</strong> Essa aceleração é <strong>gigantesca</strong> - cerca de <MathFormula formula="10^{15}" /> vezes a gravidade terrestre! Isso mostra como as forças elétricas são intensas em escala atômica.</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="font-bold text-green-800">✅ Resposta Final:</p>
                      <p className="text-green-700">(a) Força: <MathFormula formula="F = 8,0 \times 10^{-15} \, N" />, apontando para baixo (-y)</p>
                      <p className="text-green-700">(b) Aceleração: <MathFormula formula="a = 8,8 \times 10^{15} \, m/s^2" />, apontando para baixo (-y)</p>
                      <p className="text-green-700 mt-2"><strong>Interpretação:</strong> O elétron (carga negativa) é acelerado na direção oposta ao campo elétrico.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 5 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 5: Campo no Eixo de um Dipolo</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                  <p className="text-slate-700 text-sm">
                    Um dipolo elétrico é formado por cargas <MathFormula formula="+q" /> e <MathFormula formula="-q" /> separadas por uma distância <MathFormula formula="d = 2,0 \, mm" />, onde <MathFormula formula="q = 1,0 \, nC" />. Calcule o campo elétrico em um ponto P no eixo do dipolo, a uma distância <MathFormula formula="x = 10 \, cm" /> do centro do dipolo (com <MathFormula formula="x \gg d" />).
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div>
                      <p className="font-bold mb-1">Passo 1: Configuração do problema</p>
                      <p className="mb-2">Considere o dipolo orientado ao longo do eixo x, com a carga <MathFormula formula="+q" /> em <MathFormula formula="x = +d/2" /> e a carga <MathFormula formula="-q" /> em <MathFormula formula="x = -d/2" />. O ponto P está em <MathFormula formula="x = 10 \, cm = 0,10 \, m" />.</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Distância de <MathFormula formula="+q" /> a P: <MathFormula formula="r_+ = x - d/2 = 0,10 - 0,001 = 0,099 \, m" /></li>
                        <li>Distância de <MathFormula formula="-q" /> a P: <MathFormula formula="r_- = x + d/2 = 0,10 + 0,001 = 0,101 \, m" /></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 2: Campos individuais</p>
                      <p className="mb-2">Campo de <MathFormula formula="+q" /> em P (aponta para +x):</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E_+ = k \cdot \frac{q}{r_+^2} = 9,0 \times 10^9 \cdot \frac{1,0 \times 10^{-9}}{(0,099)^2}" />
                        <MathFormula formula="E_+ = 9,0 \times 10^9 \cdot \frac{1,0 \times 10^{-9}}{0,0098} = 918,4 \, N/C" />
                      </div>
                      <p className="mb-2">Campo de <MathFormula formula="-q" /> em P (aponta para -x, em direção à carga negativa):</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E_- = k \cdot \frac{q}{r_-^2} = 9,0 \times 10^9 \cdot \frac{1,0 \times 10^{-9}}{(0,101)^2}" />
                        <MathFormula formula="E_- = 9,0 \times 10^9 \cdot \frac{1,0 \times 10^{-9}}{0,0102} = 882,4 \, N/C" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 3: Campo resultante</p>
                      <p className="mb-2">Ambos os campos apontam na mesma direção (+x), então somamos:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E_{\text{total}} = E_+ - E_- = 918,4 - 882,4 = 36,0 \, N/C" />
                      </div>
                      <p className="mt-2"><strong>Observação:</strong> Subtraímos porque <MathFormula formula="E_-" /> aponta para -x (oposto a <MathFormula formula="E_+" />).</p>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Passo 4: Aproximação para <MathFormula formula="x \gg d" /></p>
                      <p className="mb-2">Quando <MathFormula formula="x \gg d" />, existe uma fórmula aproximada para o campo no eixo do dipolo:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="E \approx k \cdot \frac{2qd}{x^3} = k \cdot \frac{2p}{x^3}" />
                      </div>
                      <p className="mb-2">onde <MathFormula formula="p = qd" /> é o <strong>momento de dipolo elétrico</strong>. Verificando:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="p = qd = (1,0 \times 10^{-9})(0,002) = 2,0 \times 10^{-12} \, C \cdot m" />
                        <MathFormula formula="E \approx 9,0 \times 10^9 \cdot \frac{2 \times 2,0 \times 10^{-12}}{(0,10)^3}" />
                        <MathFormula formula="E \approx 9,0 \times 10^9 \cdot \frac{4,0 \times 10^{-12}}{0,001} = 36,0 \, N/C" />
                      </div>
                      <p className="mt-2">A aproximação concorda perfeitamente com o cálculo exato!</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="font-bold text-green-800">✅ Resposta Final:</p>
                      <p className="text-green-700">Campo elétrico: <MathFormula formula="E = 36,0 \, N/C" />, apontando na direção +x (da carga negativa para a positiva)</p>
                      <p className="text-green-700 mt-2"><strong>Interpretação:</strong> O campo de um dipolo decai com <MathFormula formula="1/x^3" /> (mais rápido que <MathFormula formula="1/x^2" /> de uma carga isolada), pois as contribuições das duas cargas quase se cancelam a grandes distâncias.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 6 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Exemplo 6: Campo Elétrico Uniforme entre Placas Paralelas</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <p className="text-slate-700 text-sm font-bold mb-2">📝 Enunciado:</p>
                  <p className="text-slate-700 text-sm">
                    Duas placas metálicas paralelas estão separadas por <MathFormula formula="d = 2,0 \, cm" />. A placa superior tem carga <MathFormula formula="+Q" /> e a inferior <MathFormula formula="-Q" />, criando um campo uniforme <MathFormula formula="E = 1,5 \times 10^5 \, N/C" /> entre elas. Um próton (<MathFormula formula="q = +1,6 \times 10^{-19} \, C" />, <MathFormula formula="m = 1,67 \times 10^{-27} \, kg" />) é liberado do repouso na placa positiva. Calcule: (a) a aceleração do próton, (b) a velocidade ao atingir a placa negativa.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-slate-200">
                  <p className="text-slate-700 text-sm mb-3"><strong>🔍 Resolução Detalhada:</strong></p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div>
                      <p className="font-bold mb-1">Parte (a): Aceleração do próton</p>
                      <p className="mb-2">Força sobre o próton:</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="F = qE = (1,6 \times 10^{-19})(1,5 \times 10^5) = 2,4 \times 10^{-14} \, N" />
                      </div>
                      <p className="mb-2">Aceleração (Segunda Lei de Newton):</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="a = \frac{F}{m} = \frac{2,4 \times 10^{-14}}{1,67 \times 10^{-27}} = 1,44 \times 10^{13} \, m/s^2" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold mb-1">Parte (b): Velocidade final</p>
                      <p className="mb-2">Usando cinemática (MUV com <MathFormula formula="v_0 = 0" />, <MathFormula formula="\Delta x = d = 0,02 \, m" />):</p>
                      <div className="bg-slate-50 p-3 rounded my-2 space-y-2">
                        <MathFormula formula="v^2 = v_0^2 + 2a\Delta x = 0 + 2(1,44 \times 10^{13})(0,02)" />
                        <MathFormula formula="v^2 = 5,76 \times 10^{11}" />
                        <MathFormula formula="v = \sqrt{5,76 \times 10^{11}} = 7,59 \times 10^5 \, m/s \approx 759 \, km/s" />
                      </div>
                      <p className="mt-2"><strong>Observação:</strong> Essa velocidade é cerca de 0,25% da velocidade da luz! Em aplicações reais (aceleradores de partículas), seria necessário usar relatividade.</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="font-bold text-green-800">✅ Resposta Final:</p>
                      <p className="text-green-700">(a) Aceleração: <MathFormula formula="a = 1,44 \times 10^{13} \, m/s^2" /></p>
                      <p className="text-green-700">(b) Velocidade final: <MathFormula formula="v = 7,59 \times 10^5 \, m/s = 759 \, km/s" /></p>
                      <p className="text-green-700 mt-2"><strong>Aplicação:</strong> Este é o princípio básico de aceleradores lineares de partículas e tubos de raios catódicos (TVs antigas).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Aplicações Práticas */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded-r-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-purple-600" />
              Aplicações Práticas do Campo Elétrico
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-100">
                <p className="font-bold text-purple-800 mb-2">1. Tubos de Raios Catódicos (CRT)</p>
                <p className="text-sm text-slate-700">
                  TVs e monitores antigos usam campos elétricos para acelerar e direcionar elétrons contra uma tela fluorescente, criando imagens. O canhão de elétrons usa campo uniforme para aceleração.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100">
                <p className="font-bold text-purple-800 mb-2">2. Impressoras a Jato de Tinta</p>
                <p className="text-sm text-slate-700">
                  Gotículas de tinta carregadas são desviadas por campos elétricos para atingir posições precisas no papel, permitindo impressão de alta resolução.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100">
                <p className="font-bold text-purple-800 mb-2">3. Aceleradores de Partículas</p>
                <p className="text-sm text-slate-700">
                  LHC (CERN) e outros aceleradores usam campos elétricos intensos para acelerar prótons e elétrons a velocidades próximas à da luz, permitindo estudar a estrutura fundamental da matéria.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100">
                <p className="font-bold text-purple-800 mb-2">4. Microscópios Eletrônicos</p>
                <p className="text-sm text-slate-700">
                  Usam campos elétricos (e magnéticos) para focar feixes de elétrons, permitindo visualizar estruturas em escala nanométrica (vírus, moléculas, átomos).
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100">
                <p className="font-bold text-purple-800 mb-2">5. Sensores de Toque Capacitivos</p>
                <p className="text-sm text-slate-700">
                  Telas de smartphones e tablets detectam mudanças no campo elétrico quando seu dedo (condutor) se aproxima, permitindo interação sem pressão mecânica.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100">
                <p className="font-bold text-purple-800 mb-2">6. Gaiola de Faraday</p>
                <p className="text-sm text-slate-700">
                  Estruturas metálicas que bloqueiam campos elétricos externos, protegendo equipamentos sensíveis de interferências. Usadas em laboratórios, aviões e salas de ressonância magnética.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100">
                <p className="font-bold text-purple-800 mb-2">7. Raios em Tempestades</p>
                <p className="text-sm text-slate-700">
                  Campos elétricos intensos (até <MathFormula formula="3 \times 10^6 \, V/m" />) se formam entre nuvens e o solo durante tempestades, causando descargas elétricas (raios) quando o ar ioniza.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-100">
                <p className="font-bold text-purple-800 mb-2">8. Eletroforese (Bioquímica)</p>
                <p className="text-sm text-slate-700">
                  Técnica que usa campos elétricos para separar moléculas carregadas (DNA, proteínas) em gel, essencial para análise genética e diagnóstico médico.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box Final */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">📚 Conteúdo em Desenvolvimento</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                Esta página está sendo expandida com conteúdo de nível ITA/IME. Em breve, adicionaremos seções sobre <strong>Potencial Elétrico</strong>, <strong>Energia Potencial Elétrica</strong>, <strong>Trabalho da Força Elétrica</strong> e muito mais, todas com a mesma didática superior (termo-a-termo, sem poupar palavras, múltiplos exemplos resolvidos)!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
