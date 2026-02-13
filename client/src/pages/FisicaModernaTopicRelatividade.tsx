import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, Lightbulb, BookOpen, Rocket } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";

export default function FisicaModernaTopicRelatividade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/fisica-moderna" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar para Física Moderna
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Relatividade Restrita</h1>
          <Button variant="outline" size="sm">Progresso</Button>
        </div>
      </header>

      <main className="container py-12 max-w-4xl">
        {/* Postulados de Einstein */}
        <section className="mb-16">
          <Card className="p-8 border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Postulados de Einstein</h2>
                <p className="text-slate-600">Os dois pilares da Relatividade Restrita (1905)</p>
              </div>
            </div>

            {/* Explicação Simples */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">Explicação Simples</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Imagine que você está em um trem em movimento constante, sem janelas. **Você conseguiria descobrir se está parado ou em movimento?** A resposta de Einstein é **não** — todas as leis da física funcionam exatamente igual dentro do trem e fora dele. Não existe um "referencial absoluto" no universo que diga "este ponto está parado de verdade".
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Agora imagine que você acende uma lanterna dentro desse trem. A luz viaja a 300.000 km/s. Se o trem está se movendo a 100.000 km/s, a luz deveria viajar a 400.000 km/s para quem está fora do trem, certo? **Errado!** Einstein descobriu que a luz **sempre** viaja a 300.000 km/s, não importa quão rápido você esteja se movendo. Isso parece impossível, mas é exatamente o que acontece na natureza.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Para que isso funcione, algo precisa "ceder": o **tempo** e o **espaço** precisam se ajustar. Se você está em movimento rápido, seu relógio anda mais devagar (dilatação do tempo) e as distâncias encolhem (contração do espaço). Não é uma ilusão — é real e mensurável!
                  </p>
                </div>
              </div>
            </div>

            {/* Contexto Histórico */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <h3 className="text-2xl font-bold text-slate-900">Contexto Histórico: A Crise do Éter</h3>
              </div>
              
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  No final do século XIX, a física clássica enfrentava uma **crise profunda**. Os físicos acreditavam que a luz, como uma onda, precisava de um **meio material** para se propagar — assim como o som precisa do ar. Esse meio hipotético foi chamado de **éter luminífero**, uma substância invisível que permearia todo o universo.
                </p>

                <div className="p-4 bg-slate-100 rounded-lg border-l-4 border-slate-400">
                  <p className="font-semibold text-slate-900 mb-2">🔬 Experimento de Michelson-Morley (1887)</p>
                  <p>
                    Albert Michelson e Edward Morley realizaram o experimento mais famoso da história da física: tentaram detectar o movimento da Terra através do éter. A ideia era simples: se a Terra se move através do éter a 30 km/s (velocidade orbital), a luz deveria viajar mais rápido em uma direção e mais devagar na direção oposta — como nadar a favor ou contra a correnteza.
                  </p>
                  <p className="mt-2">
                    **Resultado:** A velocidade da luz foi **exatamente a mesma** em todas as direções, independentemente do movimento da Terra. O éter não foi detectado. Este resultado negativo foi um dos maiores choques da física e permaneceu inexplicável por quase 20 anos.
                  </p>
                </div>

                <p>
                  Várias tentativas foram feitas para "salvar" a teoria do éter. Hendrik Lorentz propôs que os objetos em movimento através do éter se contraem na direção do movimento (contração de Lorentz), o que explicaria o resultado nulo. Mas essa explicação era artificial e não tinha base física clara.
                </p>

                <p>
                  Em **1905**, Albert Einstein, então um jovem funcionário do escritório de patentes em Berna (Suíça), publicou um artigo revolucionário: **"Sobre a Eletrodinâmica dos Corpos em Movimento"**. Ele não tentou salvar o éter — ele o **aboliu completamente**. Einstein percebeu que o problema não estava nas equações, mas nas **suposições fundamentais** sobre espaço e tempo.
                </p>

                <p>
                  A solução de Einstein foi radical: **não existe éter**. A luz não precisa de meio material para se propagar. E mais importante: **o tempo e o espaço não são absolutos** — eles dependem do observador. Esta foi a **Teoria da Relatividade Restrita**, que revolucionou a física e mudou para sempre nossa compreensão do universo.
                </p>
              </div>
            </div>

            {/* Postulado 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Postulado 1: Princípio da Relatividade</h3>
              
              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300 mb-6">
                <p className="text-lg font-semibold text-slate-900 mb-2">
                  "As leis da física são as mesmas em todos os referenciais inerciais."
                </p>
                <p className="text-slate-700 italic">
                  (Ou: Não existe um referencial privilegiado ou "absoluto" no universo)
                </p>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Este postulado estende o **Princípio da Relatividade de Galileu** (válido para a mecânica) para **todas as leis da física**, incluindo eletromagnetismo e óptica.
                </p>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-2">📖 Termo-a-Termo:</p>
                  <ul className="space-y-2 ml-4">
                    <li><strong>Leis da física:</strong> Todas as equações que descrevem fenômenos naturais (mecânica, eletromagnetismo, termodinâmica, etc.)</li>
                    <li><strong>São as mesmas:</strong> Têm a mesma forma matemática, produzem os mesmos resultados experimentais</li>
                    <li><strong>Referenciais inerciais:</strong> Sistemas de coordenadas que se movem com velocidade constante (sem aceleração) em relação uns aos outros</li>
                  </ul>
                </div>

                <p>
                  **Consequência prática:** Se você realizar qualquer experimento dentro de um laboratório em movimento uniforme (avião, trem, nave espacial), os resultados serão **idênticos** aos obtidos em um laboratório "parado" na Terra. Não há como detectar movimento absoluto — apenas movimento **relativo** entre referenciais.
                </p>

                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-900 mb-2">💡 Exemplo Cotidiano:</p>
                  <p>
                    Quando você está em um avião em cruzeiro (velocidade constante), pode jogar uma bola para cima e ela cai de volta na sua mão — exatamente como se estivesse no chão. A bola não "fica para trás" porque o avião está se movendo a 900 km/h. Do ponto de vista de quem está dentro do avião, as leis da mecânica funcionam normalmente.
                  </p>
                </div>

                <p>
                  Este postulado implica que **não existe um referencial privilegiado** no universo. Não podemos dizer que a Terra está "realmente parada" e o Sol está "realmente se movendo" — ambos estão em movimento relativo. O conceito de "repouso absoluto" não tem significado físico.
                </p>
              </div>
            </div>

            {/* Postulado 2 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Postulado 2: Constância da Velocidade da Luz</h3>
              
              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300 mb-6">
                <p className="text-lg font-semibold text-slate-900 mb-2">
                  "A velocidade da luz no vácuo é a mesma em todos os referenciais inerciais, independentemente do movimento da fonte ou do observador."
                </p>
                <p className="text-slate-700 italic mt-2">
                  (Matematicamente: <MathFormula inline>{`c = 299.792.458 \\text{ m/s}`}</MathFormula> = constante universal)
                </p>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Este é o postulado **mais revolucionário e contra-intuitivo** da Relatividade. Ele contradiz completamente nossa experiência cotidiana com velocidades.
                </p>

                <div className="p-4 bg-slate-100 rounded-lg">
                  <p className="font-semibold text-slate-900 mb-2">📖 Termo-a-Termo:</p>
                  <ul className="space-y-2 ml-4">
                    <li><strong>Velocidade da luz no vácuo (<MathFormula inline>c</MathFormula>):</strong> 299.792.458 m/s (aproximadamente 300.000 km/s)</li>
                    <li><strong>É a mesma:</strong> Tem exatamente o mesmo valor numérico</li>
                    <li><strong>Em todos os referenciais inerciais:</strong> Não importa se você está parado, movendo-se a 1 km/s ou a 99% da velocidade da luz</li>
                    <li><strong>Independentemente do movimento da fonte:</strong> A velocidade da luz não depende da velocidade da lanterna que a emitiu</li>
                    <li><strong>Independentemente do movimento do observador:</strong> A velocidade da luz não depende da velocidade de quem a mede</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-900 mb-2">⚠️ Contradição com a Intuição Clássica:</p>
                  <p className="mb-2">
                    Na mecânica clássica (Galileu/Newton), velocidades se **somam**. Se você está em um carro a 100 km/h e joga uma bola para frente a 50 km/h, a bola se move a 150 km/h em relação ao chão.
                  </p>
                  <p>
                    **Mas com a luz, isso não acontece!** Se você está em uma nave espacial a 200.000 km/s e acende uma lanterna para frente, a luz **não** viaja a 500.000 km/s (200.000 + 300.000). Ela viaja a exatamente **300.000 km/s**, tanto para você quanto para um observador "parado".
                  </p>
                </div>

                <p>
                  **Como isso é possível?** A única maneira de conciliar esses dois postulados é abandonar a ideia de que tempo e espaço são absolutos. Se a velocidade da luz é sempre <MathFormula inline>{`c = \\frac{\\text{distância}}{\\text{tempo}}`}</MathFormula>, e <MathFormula inline>c</MathFormula> é constante, então **distância e tempo precisam variar** de forma coordenada para diferentes observadores.
                </p>

                <p>
                  Esta é a origem da **dilatação do tempo** (relógios em movimento andam mais devagar) e da **contração do espaço** (objetos em movimento encolhem na direção do movimento). Não são efeitos ilusórios — são propriedades fundamentais do espaço-tempo.
                </p>
              </div>
            </div>

            {/* Consequências Revolucionárias */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Consequências Revolucionárias</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">1. Dilatação do Tempo</h4>
                  <p className="text-slate-700 text-sm mb-3">
                    Relógios em movimento andam mais devagar em relação a relógios "parados". Um astronauta viajando a 90% da velocidade da luz envelhece mais devagar que alguém na Terra.
                  </p>
                  <div className="p-3 bg-purple-50 rounded">
                    <MathFormula>
                      {`\\Delta t' = \\gamma \\Delta t \\quad \\text{onde} \\quad \\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}`}
                    </MathFormula>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-pink-500">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">2. Contração do Espaço</h4>
                  <p className="text-slate-700 text-sm mb-3">
                    Objetos em movimento encolhem na direção do movimento. Uma nave de 100 m viajando a 90% de <MathFormula inline>c</MathFormula> tem apenas 43,6 m de comprimento para um observador externo.
                  </p>
                  <div className="p-3 bg-pink-50 rounded">
                    <MathFormula>
                      {`L' = \\frac{L_0}{\\gamma} = L_0 \\sqrt{1 - v^2/c^2}`}
                    </MathFormula>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">3. Relatividade da Simultaneidade</h4>
                  <p className="text-slate-700 text-sm mb-3">
                    Eventos que são simultâneos para um observador podem não ser simultâneos para outro em movimento. O conceito de "agora" é relativo!
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    Exemplo: Dois relâmpagos que caem "ao mesmo tempo" para você podem cair em momentos diferentes para alguém em movimento.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-pink-500">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">4. Equivalência Massa-Energia</h4>
                  <p className="text-slate-700 text-sm mb-3">
                    Massa e energia são duas formas da mesma coisa. A famosa equação <MathFormula inline>{`E = mc^2`}</MathFormula> mostra que uma pequena quantidade de massa contém energia enorme.
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    Aplicação: Energia nuclear (fissão e fusão), aniquilação matéria-antimatéria.
                  </p>
                </Card>
              </div>
            </div>

            {/* Passo-a-Passo Prático */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Passo-a-Passo Prático: Como Aplicar os Postulados</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Identifique os referenciais inerciais</h4>
                    <p className="text-slate-700 text-sm">
                      Determine quais são os sistemas de referência envolvidos no problema. Exemplo: Terra (referencial S) e nave espacial (referencial S') movendo-se com velocidade <MathFormula inline>v</MathFormula> constante.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Escolha um referencial como "parado"</h4>
                    <p className="text-slate-700 text-sm">
                      Por convenção, escolha um referencial como S (geralmente o observador na Terra ou no laboratório). O outro referencial S' está em movimento com velocidade <MathFormula inline>v</MathFormula> em relação a S.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Calcule o fator de Lorentz (<MathFormula inline>\gamma</MathFormula>)</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      Este fator aparece em todas as equações relativísticas:
                    </p>
                    <div className="p-3 bg-slate-100 rounded">
                      <MathFormula>
                        {`\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}`}
                      </MathFormula>
                      <p className="text-xs text-slate-600 mt-2">
                        Onde <MathFormula inline>v</MathFormula> é a velocidade relativa entre os referenciais e <MathFormula inline>c</MathFormula> é a velocidade da luz.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Aplique as transformações de Lorentz</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      Para converter coordenadas e tempos entre referenciais:
                    </p>
                    <div className="p-3 bg-slate-100 rounded">
                      <MathFormula>
                        {`\\begin{aligned}
                        x' &= \\gamma(x - vt) \\\\
                        t' &= \\gamma\\left(t - \\frac{vx}{c^2}\\right)
                        \\end{aligned}`}
                      </MathFormula>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Calcule dilatação do tempo (se necessário)</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      Se o problema envolve intervalos de tempo:
                    </p>
                    <div className="p-3 bg-slate-100 rounded">
                      <MathFormula>
                        {`\\Delta t' = \\gamma \\Delta t_0`}
                      </MathFormula>
                      <p className="text-xs text-slate-600 mt-2">
                        Onde <MathFormula inline>{`\\Delta t_0`}</MathFormula> é o tempo próprio (medido no referencial em repouso em relação ao evento).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Calcule contração do espaço (se necessário)</h4>
                    <p className="text-slate-700 text-sm mb-2">
                      Se o problema envolve comprimentos:
                    </p>
                    <div className="p-3 bg-slate-100 rounded">
                      <MathFormula>
                        {`L' = \\frac{L_0}{\\gamma} = L_0\\sqrt{1 - v^2/c^2}`}
                      </MathFormula>
                      <p className="text-xs text-slate-600 mt-2">
                        Onde <MathFormula inline>{`L_0`}</MathFormula> é o comprimento próprio (medido no referencial em repouso em relação ao objeto).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Verifique a consistência com <MathFormula inline>c</MathFormula> constante</h4>
                    <p className="text-slate-700 text-sm">
                      Sempre confirme que a velocidade da luz é a mesma em ambos os referenciais. Se você obtiver <MathFormula inline>{`c' \\neq c`}</MathFormula>, há um erro no cálculo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aplicações Práticas */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Aplicações Práticas no Mundo Real</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🛰️</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900">GPS e Navegação</h4>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Os satélites GPS orbitam a 20.000 km de altitude a 14.000 km/h. Devido à dilatação do tempo relativística, os relógios atômicos nos satélites atrasam 7 microssegundos por dia em relação aos relógios na Terra. Sem correção relativística, o GPS acumularia erro de 10 km por dia!
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⚛️</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900">Aceleradores de Partículas</h4>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    No LHC (Large Hadron Collider), prótons são acelerados a 99,9999991% da velocidade da luz. Devido à dilatação do tempo, múons (partículas instáveis) que deveriam decair em 2,2 microssegundos vivem 30 vezes mais, permitindo sua detecção.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">☢️</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900">Energia Nuclear</h4>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    A equação <MathFormula inline>{`E = mc^2`}</MathFormula> explica como usinas nucleares e bombas atômicas funcionam. Quando um núcleo de urânio-235 sofre fissão, perde 0,1% de sua massa — essa massa é convertida em energia gigantesca.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900">Fusão Solar</h4>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    O Sol converte 4 milhões de toneladas de massa em energia **a cada segundo** através de fusão nuclear. Essa energia (luz e calor) é o que mantém a vida na Terra. Sem <MathFormula inline>{`E = mc^2`}</MathFormula>, não entenderíamos como o Sol brilha.
                  </p>
                </Card>
              </div>
            </div>

            {/* Alert de Continuação */}
            <Alert className="mt-8">
              <Info className="h-4 w-4" />
              <AlertDescription>
                **Próximos tópicos:** Transformações de Lorentz (dedução completa), Dilatação do Tempo (exemplos numéricos), Paradoxo dos Gêmeos, Contração do Espaço, Adição Relativística de Velocidades, e E=mc² (derivação completa).
              </AlertDescription>
            </Alert>
          </Card>
        </section>
      </main>
    </div>
  );
}
