import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb, Activity, Target, Zap, TrendingUp, Box, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicVelocidade() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Velocidade e Aceleração</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* ===================== 1. CONTEXTO HISTÓRICO E CONCEITUAL ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">1. Contexto Histórico e Conceitual</h2>
          </div>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              A compreensão do movimento é um dos pilares da física clássica. Historicamente, a transição do pensamento aristotélico para o galileano marcou o nascimento da ciência moderna. Para <strong>Aristóteles</strong>, o movimento era uma "qualidade" intrínseca do objeto, e a velocidade dependia da "força" aplicada. Foi <strong>Galileu Galilei</strong> quem, através de experimentos rigorosos com planos inclinados, percebeu que a velocidade é uma relação geométrica e temporal, independente da natureza do objeto em queda livre (no vácuo).
            </p>
            <p>
              Na física de elite, como exigido pelo <strong>ITA e IME</strong>, a velocidade não é apenas um número. Ela é a <strong>taxa de variação da posição</strong>. A grande sacada conceitual, explorada profundamente por autores como <strong>Renato Brito</strong>, é entender que o movimento pode ser analisado sob duas óticas: a <strong>escalar</strong>, que se preocupa com o "rastro" deixado na trajetória (o caminho percorrido), e a <strong>vetorial</strong>, que foca na mudança líquida de posição no espaço tridimensional.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 italic">
              "A velocidade média é uma abstração matemática que substitui um movimento complexo e variável por um movimento uniforme hipotético que produziria o mesmo efeito (deslocamento ou distância) no mesmo intervalo de tempo." — <em>Reflexão baseada no Tópicos de Física.</em>
            </div>
          </div>
        </div>

        {/* ===================== 2. DEFINIÇÕES PRECISAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">2. Definições Precisas</h2>
          </div>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Velocidade Escalar Média (<MathFormula formula="v_{em}" inline={true} />)</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  É a grandeza escalar que mede a rapidez com que um móvel percorre uma <strong>distância total</strong> (<MathFormula formula="d" inline={true} />) ao longo de uma trajetória, independentemente da direção ou sentido. Ela ignora o caráter vetorial e foca apenas no "comprimento do rastro".
                </p>
                <div className="bg-blue-100/50 p-4 rounded-xl text-blue-900 font-medium text-sm border border-blue-200">
                  <strong>Nota de Elite:</strong> Em um movimento de "vai e vem", a velocidade escalar média nunca será zero se houve movimento, pois a distância <MathFormula formula="d" inline={true} /> é sempre cumulativa e positiva.
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Velocidade Vetorial Média (<MathFormula formula="\vec{v}_m" inline={true} />)</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  É a grandeza vetorial definida pela razão entre o <strong>vetor deslocamento</strong> (<MathFormula formula="\Delta \vec{r}" inline={true} />) e o intervalo de tempo. Ela aponta sempre na mesma direção e sentido do vetor deslocamento (da posição inicial para a final).
                </p>
                <div className="bg-purple-100/50 p-4 rounded-xl text-purple-900 font-medium text-sm border border-purple-200">
                  <strong>Nota de Elite:</strong> Se um móvel completa uma volta e retorna ao ponto de partida, seu deslocamento é nulo (<MathFormula formula="\Delta \vec{r} = \vec{0}" inline={true} />), logo sua velocidade vetorial média é <strong>zero</strong>, mesmo que ele tenha corrido a 100 km/h.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 3. DEDUÇÕES MATEMÁTICAS COMPLETAS ===================== */}
        <div className="bg-slate-900 rounded-3xl shadow-2xl p-10 mb-8 text-white border border-slate-800">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">3. Deduções Matemáticas Completas</h2>
          </div>
          <div className="space-y-10">
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <h4 className="text-xl font-semibold text-blue-300 mb-4">A Abstração da Velocidade Escalar</h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Considere um móvel que percorre sucessivos trechos <MathFormula formula="\Delta s_1, \Delta s_2, \dots, \Delta s_n" inline={true} /> em intervalos <MathFormula formula="\Delta t_1, \Delta t_2, \dots, \Delta t_n" inline={true} />. A distância total <MathFormula formula="d" inline={true} /> é a soma dos módulos desses deslocamentos:
              </p>
              <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 text-center shadow-inner">
                <MathFormula formula="v_{em} = \frac{\sum_{i=1}^{n} |\Delta s_i|}{\sum_{i=1}^{n} \Delta t_i} = \frac{d_{total}}{\Delta t_{total}}" className="text-3xl" />
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-purple-500/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">O Rigor do Vetor Deslocamento</h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                No espaço tridimensional, a posição é dada pelo vetor <MathFormula formula="\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k}" inline={true} />. O deslocamento entre <MathFormula formula="t_1" inline={true} /> e <MathFormula formula="t_2" inline={true} /> é a diferença vetorial:
              </p>
              <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 text-center shadow-inner">
                <MathFormula formula="\vec{v}_m = \frac{\vec{r}(t_2) - \vec{r}(t_1)}{t_2 - t_1} = \frac{\Delta \vec{r}}{\Delta t}" className="text-3xl" />
              </div>
              <p className="mt-6 text-sm text-slate-500 italic">
                *Observe que o módulo da velocidade vetorial média <MathFormula formula="|\vec{v}_m|" inline={true} /> NÃO é necessariamente igual à velocidade escalar média <MathFormula formula="v_{em}" inline={true} />.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== 4. TERMO-A-TERMO EM GRID 2 COLUNAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
              <Box className="w-6 h-6 text-slate-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">4. Termo-a-termo</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600/20 group-hover:text-blue-600/40 transition-colors"><MathFormula formula="v_m" inline={true} /></div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">Velocidade Média</p>
                  <p className="text-sm text-slate-600 leading-relaxed">Representa a taxa média de variação da posição. No SI, é expressa em <MathFormula formula="m/s" inline={true} />. Para converter de <MathFormula formula="km/h" inline={true} /> para <MathFormula formula="m/s" inline={true} />, dividimos por 3,6.</p>
                </div>
              </div>
            </div>
            <div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600/20 group-hover:text-blue-600/40 transition-colors"><MathFormula formula="\Delta s" inline={true} /></div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">Deslocamento Escalar</p>
                  <p className="text-sm text-slate-600 leading-relaxed">É a diferença entre a posição final e a inicial na trajetória (<MathFormula formula="s_f - s_i" inline={true} />). Pode ser negativo se o móvel se mover contra a orientação da trajetória.</p>
                </div>
              </div>
            </div>
            <div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600/20 group-hover:text-blue-600/40 transition-colors"><MathFormula formula="d" inline={true} /></div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">Distância Percorrida</p>
                  <p className="text-sm text-slate-600 leading-relaxed">É o comprimento real do caminho percorrido. É sempre maior ou igual ao módulo do deslocamento escalar (<MathFormula formula="d \geq |\Delta s|" inline={true} />).</p>
                </div>
              </div>
            </div>
            <div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600/20 group-hover:text-blue-600/40 transition-colors"><MathFormula formula="\Delta t" inline={true} /></div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">Intervalo de Tempo</p>
                  <p className="text-sm text-slate-600 leading-relaxed">Duração do fenômeno observado. Na física clássica, o tempo é absoluto e flui uniformemente para todos os referenciais inerciais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 5. RELAÇÃO MATEMÁTICA ===================== */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-10 mb-8 rounded-3xl shadow-xl text-white">
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="w-10 h-10 text-blue-200" />
            <h3 className="text-3xl font-bold">5. Relação Matemática Fundamental</h3>
          </div>
          <div className="space-y-6">
            <p className="text-blue-100 text-lg leading-relaxed">
              A relação entre a velocidade escalar e a vetorial é uma das questões conceituais mais cobradas em provas de alto nível. A regra de ouro é:
            </p>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center">
              <MathFormula formula="v_{em} \geq |\vec{v}_m|" className="text-4xl font-bold" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-green-300 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Igualdade (=)
                </h4>
                <p className="text-sm text-blue-100">Ocorre <strong>apenas</strong> se o movimento for retilíneo e mantiver o mesmo sentido durante todo o intervalo. Nesse caso, a distância é igual ao módulo do deslocamento.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-amber-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> Desigualdade (&gt;)
                </h4>
                <p className="text-sm text-blue-100">Ocorre se a trajetória for <strong>curva</strong> (pois a corda é menor que o arco) ou se houver <strong>inversão de sentido</strong> (pois a distância continua somando enquanto o deslocamento subtrai).</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 6. TABELAS COMPARATIVAS ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-slate-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">6. Tabela Comparativa de Elite</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-5 text-left font-bold uppercase tracking-wider">Propriedade</th>
                  <th className="p-5 text-center font-bold uppercase tracking-wider">Velocidade Escalar Média</th>
                  <th className="p-5 text-center font-bold uppercase tracking-wider">Velocidade Vetorial Média</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-slate-800 bg-slate-50/50">Natureza Física</td>
                  <td className="p-5 text-center text-slate-600 italic">Escalar (apenas módulo)</td>
                  <td className="p-5 text-center text-slate-600 italic">Vetorial (módulo, direção e sentido)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-slate-800 bg-slate-50/50">Dependência da Trajetória</td>
                  <td className="p-5 text-center text-slate-600">Total (depende de cada curva e desvio)</td>
                  <td className="p-5 text-center text-slate-600">Nula (depende apenas dos pontos inicial e final)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-slate-800 bg-slate-50/50">Sinal Matemático</td>
                  <td className="p-5 text-center text-green-700 font-semibold">Sempre <MathFormula formula="\geq 0" inline={true} /></td>
                  <td className="p-5 text-center text-slate-600">Pode ser <MathFormula formula="< 0" inline={true} /> (conforme o eixo)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-slate-800 bg-slate-50/50">Significado Prático</td>
                  <td className="p-5 text-center text-slate-600">Consumo de combustível / Cansaço</td>
                  <td className="p-5 text-center text-slate-600">Eficácia da navegação / Objetivo final</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ===================== 7. EXEMPLOS RESOLVIDOS ITA/IME ===================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">7. Exemplos Resolvidos (Nível ITA/IME)</h2>
          </div>
          <div className="space-y-10">
            {/* Exemplo 1 */}
            <div className="bg-green-50/30 border border-green-100 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Desafio Renato Brito</span>
                <h4 className="text-xl font-bold text-green-900">A Armadilha da Média Aritmética</h4>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                Um avião percorre a distância entre duas cidades A e B com velocidade constante <MathFormula formula="v_1" inline={true} /> e retorna de B para A com velocidade constante <MathFormula formula="v_2" inline={true} />. Determine a velocidade escalar média para a viagem completa de ida e volta.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-green-200 shadow-inner">
                <p className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" /> Resolução de Elite:
                </p>
                <div className="space-y-6 text-slate-700">
                  <div className="flex gap-4 items-start">
                    <span className="bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1">1</span>
                    <p>Seja <MathFormula formula="L" inline={true} /> a distância entre A e B. A distância total percorrida é <MathFormula formula="d = 2L" inline={true} />.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1">2</span>
                    <p>O tempo de ida é <MathFormula formula="t_1 = L/v_1" inline={true} /> e o tempo de volta é <MathFormula formula="t_2 = L/v_2" inline={true} />.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1">3</span>
                    <p>O tempo total é <MathFormula formula="T = t_1 + t_2 = \frac{L}{v_1} + \frac{L}{v_2} = L \left( \frac{v_1 + v_2}{v_1 v_2} \right)" inline={true} />.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1">4</span>
                    <p>Aplicando a definição: <MathFormula formula="v_m = \frac{2L}{T} = \frac{2L}{L \frac{v_1 + v_2}{v_1 v_2}} = \frac{2 v_1 v_2}{v_1 + v_2}" inline={true} />.</p>
                  </div>
                  <div className="bg-green-900 text-white p-6 rounded-2xl mt-6 shadow-lg">
                    <p className="text-xs uppercase tracking-widest text-green-400 mb-2 font-bold">Conclusão Estratégica:</p>
                    <p className="text-lg leading-relaxed">
                      A velocidade média em trechos de <strong>distâncias iguais</strong> é a <strong>Média Harmônica</strong> das velocidades. Nunca use a média aritmética (<MathFormula formula="(v_1+v_2)/2" inline={true} />), pois o móvel passa mais tempo no trecho mais lento!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemplo 2 */}
            <div className="bg-blue-50/30 border border-blue-100 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Nível ITA</span>
                <h4 className="text-xl font-bold text-blue-900">Velocidade Vetorial em Trajetória Curva</h4>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                Uma partícula percorre uma semicircunferência de raio <MathFormula formula="R = 10 \text{ m}" inline={true} /> em um intervalo de tempo <MathFormula formula="\Delta t = 5 \text{ s}" inline={true} /> com velocidade escalar constante. Determine a velocidade escalar média e o módulo da velocidade vetorial média. (Use <MathFormula formula="\pi = 3" inline={true} />).
              </p>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-inner">
                <p className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" /> Resolução de Elite:
                </p>
                <div className="space-y-6 text-slate-700">
                  <p><strong>1. Velocidade Escalar Média:</strong> A distância percorrida é o comprimento do arco (metade da circunferência): <MathFormula formula="d = \pi R = 3 \cdot 10 = 30 \text{ m}" inline={true} />.</p>
                  <div className="bg-slate-50 p-4 rounded-lg text-center font-mono">
                    <MathFormula formula="v_{em} = \frac{30}{5} = 6 \text{ m/s}" />
                  </div>
                  <p><strong>2. Velocidade Vetorial Média:</strong> O deslocamento é o vetor que liga o início ao fim do diâmetro: <MathFormula formula="|\Delta \vec{r}| = 2R = 20 \text{ m}" inline={true} />.</p>
                  <div className="bg-slate-50 p-4 rounded-lg text-center font-mono">
                    <MathFormula formula="|\vec{v}_m| = \frac{20}{5} = 4 \text{ m/s}" />
                  </div>
                  <div className="bg-blue-900 text-white p-6 rounded-2xl mt-6 shadow-lg">
                    <p className="text-xs uppercase tracking-widest text-blue-400 mb-2 font-bold">Análise Crítica:</p>
                    <p className="text-lg leading-relaxed">
                      Note que <MathFormula formula="6 \text{ m/s} > 4 \text{ m/s}" inline={true} />, confirmando a relação <MathFormula formula="v_{em} > |\vec{v}_m|" inline={true} /> para trajetórias curvas. O vetor velocidade média "corta caminho" por dentro da curva!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 8. APLICAÇÕES PRÁTICAS ===================== */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl p-10 mb-8 text-white border border-slate-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">8. Aplicações Práticas e Engenharia</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
              <h4 className="text-xl font-bold text-blue-300 mb-4">Sistemas de GPS</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Os algoritmos de GPS utilizam a velocidade vetorial instantânea para recalcular rotas em tempo real, mas usam a velocidade escalar média histórica para prever o tempo de chegada (ETA) com precisão.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
              <h4 className="text-xl font-bold text-blue-300 mb-4">Monitoramento de Tráfego</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Radares de trecho (comuns na Europa e em testes no Brasil) medem a velocidade escalar média entre dois pontos distantes, impedindo que motoristas freiem apenas "em cima" do radar.</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
              <h4 className="text-xl font-bold text-blue-300 mb-4">Balística e Defesa</h4>
              <p className="text-sm text-slate-400 leading-relaxed">No cálculo de trajetórias de projéteis, a distinção entre a velocidade escalar (que afeta o arrasto do ar) e a vetorial (que define o ponto de impacto) é vital para a precisão do disparo.</p>
            </div>
          </div>
        </div>

      </section>

      <footer className="bg-slate-900 text-white py-12 mt-12">
        <div className="container text-center">
          <p className="text-slate-400 mb-4">Projeto ITA - Do Zero a Aprovação</p>
          <div className="flex justify-center gap-6">
            <Link href="/cinematica/topic/bases" className="text-blue-400 hover:text-blue-300 transition-colors">Bases da Cinemática</Link>
            <span className="text-slate-700">|</span>
            <Link href="/cinematica" className="text-blue-400 hover:text-blue-300 transition-colors">Menu Principal</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
