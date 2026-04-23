import React, { useMemo, useState } from "react";
import {
  BookOpen,
  ChevronLeft,
  Info,
  Target,
  Sigma,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  Wrench,
  Orbit,
  Rocket,
  CheckCircle2,
  Calculator,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MathFormula } from "@/components/MathFormula";
import { MRUSimulator } from "@/components/MRUSimulator";

type CinematicaTopicMRUProps = {
  onBack?: () => void;
};

type TheorySection = {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  tone?: "default" | "tip" | "warning";
};

type SolvedExercise = {
  id: string;
  title: string;
  level: "Fácil" | "Médio" | "Difícil";
  statement: React.ReactNode;
  solution: React.ReactNode;
};

const toneClasses: Record<NonNullable<TheorySection["tone"]>, string> = {
  default: "border-slate-200 bg-white",
  tip: "border-emerald-200 bg-emerald-50/60",
  warning: "border-amber-200 bg-amber-50/70",
};

const levelBadgeClasses: Record<SolvedExercise["level"], string> = {
  Fácil: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Médio: "bg-amber-100 text-amber-800 border-amber-200",
  Difícil: "bg-rose-100 text-rose-800 border-rose-200",
};

const SectionCard: React.FC<{
  section: TheorySection;
}> = ({ section }) => {
  return (
    <Card className={`rounded-2xl shadow-sm border ${toneClasses[section.tone ?? "default"]}`}>
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
            {section.icon}
          </div>

          <div>
            <p className="text-sm font-semibold text-violet-700 mb-1">
              {section.number}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              {section.title}
            </h2>
          </div>
        </div>

        <div className="space-y-5 text-slate-700 leading-8 text-[17px]">
          {section.content}
        </div>
      </CardContent>
    </Card>
  );
};

const FormulaBox: React.FC<{ formula: string }> = ({ formula }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 overflow-x-auto">
      <div className="flex justify-center min-w-max">
        <MathFormula formula={formula} display={true} />
      </div>
    </div>
  );
};

const BulletItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="w-5 h-5 text-violet-600 mt-1 shrink-0" />
    <span>{children}</span>
  </li>
);

const CinematicaTopicMRU: React.FC<CinematicaTopicMRUProps> = ({ onBack }) => {
  const [simIsRunning, setSimIsRunning] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);

  const theorySections: TheorySection[] = useMemo(
    () => [
      {
        id: "contexto",
        number: "1. Contexto Histórico",
        title: "Como o MRU entra na construção da Cinemática",
        icon: <BookOpen className="w-6 h-6" />,
        content: (
          <>
            <p>
              O Movimento Retilíneo Uniforme, ou MRU, é o primeiro grande modelo
              matemático da Cinemática escalar. Ele descreve a situação em que um
              corpo se move em trajetória reta com velocidade constante.
            </p>

            <p>
              A importância disso não está só na simplicidade. Está no fato de que
              o MRU ensina a Física a traduzir um fenômeno real em linguagem
              matemática. Foi esse tipo de organização que ajudou a separar duas
              coisas que muita gente mistura até hoje: <strong>descrever</strong> o
              movimento e <strong>explicar</strong> o movimento.
            </p>

            <p>
              Galileu foi crucial nesse amadurecimento. A partir dele, a análise
              quantitativa do movimento passou a ganhar forma rigorosa. Depois,
              Newton aprofundaria a parte dinâmica, isto é, a explicação das
              causas. Mas antes de perguntar “por que o corpo se move assim?”, a
              Física precisa responder “como esse movimento acontece?”. O MRU é um
              dos primeiros passos nessa resposta.
            </p>

            <p>
              E não se engane com a cara inocente do assunto. Em prova, MRU aparece
              em encontros, ultrapassagens, leitura de gráficos, função horária,
              velocidade relativa e interpretação de sinais. O aluno que acha que
              isso aqui é só “decoreba de fórmula” geralmente descobre tarde
              demais que não era.
            </p>
          </>
        ),
      },
      {
        id: "definicoes",
        number: "2. Definições Precisas",
        title: "O que caracteriza, de fato, um MRU",
        icon: <Target className="w-6 h-6" />,
        content: (
          <>
            <p>
              Dizemos que um móvel realiza <strong>Movimento Retilíneo Uniforme</strong> quando:
            </p>

            <ul className="space-y-3 pl-1">
              <BulletItem>a trajetória é retilínea;</BulletItem>
              <BulletItem>a velocidade escalar permanece constante;</BulletItem>
              <BulletItem>a aceleração escalar é nula.</BulletItem>
            </ul>

            <FormulaBox formula={"v = \\text{constante}"} />
            <FormulaBox formula={"a = 0"} />

            <p>
              A palavra <strong>uniforme</strong> significa que o móvel percorre
              deslocamentos iguais em intervalos de tempo iguais. Já a palavra
              <strong> retilíneo</strong> indica que a trajetória é uma reta.
            </p>

            <p>
              Então, se a trajetória for curva, não é MRU. Se a velocidade variar,
              também não é MRU. Parece óbvio, mas prova adora cobrar erro bobo
              fantasiado de interpretação.
            </p>
          </>
        ),
      },
      {
        id: "deducao",
        number: "3. Deduções Matemáticas",
        title: "Dedução da função horária do espaço",
        icon: <Sigma className="w-6 h-6" />,
        content: (
          <>
            <p>
              A dedução começa pela definição de velocidade escalar média:
            </p>

            <FormulaBox formula={"v_m = \\frac{\\Delta s}{\\Delta t}"} />

            <p>
              No MRU, como a velocidade não varia, a velocidade média coincide com
              a própria velocidade escalar do movimento:
            </p>

            <FormulaBox formula={"v = \\frac{\\Delta s}{\\Delta t}"} />

            <p>
              Agora escrevemos a variação de espaço como:
            </p>

            <FormulaBox formula={"\\Delta s = s - s_0"} />

            <p>
              E, tomando o instante inicial como origem dos tempos:
            </p>

            <FormulaBox formula={"\\Delta t = t"} />

            <p>
              Substituindo:
            </p>

            <FormulaBox formula={"v = \\frac{s - s_0}{t}"} />

            <p>
              Multiplicando ambos os lados por <MathFormula formula={"t"} />:
            </p>

            <FormulaBox formula={"vt = s - s_0"} />

            <p>
              Logo, obtemos a função horária do espaço:
            </p>

            <div className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-5 overflow-x-auto">
              <div className="flex justify-center min-w-max">
                <MathFormula formula={"s = s_0 + vt"} display={true} />
              </div>
            </div>

            <p>
              Essa expressão mostra a posição do móvel em qualquer instante.
              É uma função do primeiro grau no tempo, e por isso o gráfico
              <MathFormula formula={"\\; s \\times t"} /> é uma reta.
            </p>
          </>
        ),
      },
      {
        id: "termo-termo",
        number: "4. Termo a termo",
        title: "O significado físico de cada símbolo",
        icon: <Calculator className="w-6 h-6" />,
        content: (
          <>
            <FormulaBox formula={"s = s_0 + vt"} />

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 font-semibold text-slate-900">Símbolo</th>
                    <th className="p-4 font-semibold text-slate-900">Significado</th>
                    <th className="p-4 font-semibold text-slate-900">Unidade no SI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200">
                    <td className="p-4">
                      <MathFormula formula={"s"} />
                    </td>
                    <td className="p-4">posição no instante analisado</td>
                    <td className="p-4">m</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="p-4">
                      <MathFormula formula={"s_0"} />
                    </td>
                    <td className="p-4">posição inicial</td>
                    <td className="p-4">m</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="p-4">
                      <MathFormula formula={"v"} />
                    </td>
                    <td className="p-4">velocidade escalar constante</td>
                    <td className="p-4">m/s</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="p-4">
                      <MathFormula formula={"t"} />
                    </td>
                    <td className="p-4">tempo decorrido</td>
                    <td className="p-4">s</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              O termo <MathFormula formula={"s_0"} /> informa onde o móvel estava
              no instante inicial. Já o termo <MathFormula formula={"vt"} />
              representa a variação de posição produzida pelo movimento uniforme ao
              longo do tempo.
            </p>

            <p>
              Em linguagem de gráfico, <MathFormula formula={"s_0"} /> é o
              coeficiente linear e <MathFormula formula={"v"} /> é o coeficiente
              angular da reta.
            </p>
          </>
        ),
      },
      {
        id: "classificacoes",
        number: "5. Classificações",
        title: "Movimento progressivo e retrógrado",
        icon: <Orbit className="w-6 h-6" />,
        content: (
          <>
            <p>
              No MRU, a classificação mais importante depende do sinal da velocidade:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 font-semibold text-slate-900">Tipo</th>
                    <th className="p-4 font-semibold text-slate-900">Condição</th>
                    <th className="p-4 font-semibold text-slate-900">Interpretação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200">
                    <td className="p-4 font-medium">Progressivo</td>
                    <td className="p-4">
                      <MathFormula formula={"v > 0"} />
                    </td>
                    <td className="p-4">os espaços aumentam com o tempo</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="p-4 font-medium">Retrógrado</td>
                    <td className="p-4">
                      <MathFormula formula={"v < 0"} />
                    </td>
                    <td className="p-4">os espaços diminuem com o tempo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Isso depende da orientação escolhida para a trajetória. Não existe
              “para frente” universal em Física. Existe sentido positivo e sentido
              negativo de acordo com o referencial adotado. Sim, os humanos
              conseguiram transformar até uma reta em motivo para errar sinal.
            </p>
          </>
        ),
      },
      {
        id: "graficos",
        number: "6. Interpretação Gráfica",
        title: "Como ler os gráficos do MRU",
        icon: <BarChart3 className="w-6 h-6" />,
        content: (
          <>
            <p>
              Como a função horária do MRU é
              <MathFormula formula={"\\; s = s_0 + vt"} />, o gráfico da posição em
              função do tempo é uma reta.
            </p>

            <ul className="space-y-3 pl-1">
              <BulletItem>
                se <MathFormula formula={"v > 0"} />, a reta é crescente;
              </BulletItem>
              <BulletItem>
                se <MathFormula formula={"v < 0"} />, a reta é decrescente;
              </BulletItem>
              <BulletItem>
                o coeficiente angular da reta é a velocidade;
              </BulletItem>
              <BulletItem>
                o coeficiente linear da reta é a posição inicial <MathFormula formula={"s_0"} />.
              </BulletItem>
            </ul>

            <p>
              Já o gráfico <MathFormula formula={"v \\times t"} /> é uma reta
              horizontal, porque a velocidade é constante:
            </p>

            <FormulaBox formula={"v = \\text{constante}"} />

            <p>
              E como a aceleração é nula, o gráfico <MathFormula formula={"a \\times t"} />
              coincide com o eixo do tempo:
            </p>

            <FormulaBox formula={"a = 0"} />

            <p>
              Existe ainda uma propriedade valiosa:
            </p>

            <FormulaBox formula={"\\Delta s = v\\,\\Delta t"} />

            <p>
              Isso significa que a área sob o gráfico da velocidade pelo tempo
              fornece a variação de espaço. Esse detalhe simples resolve muita
              questão sem precisar ficar se debatendo em conta desnecessária.
            </p>
          </>
        ),
      },
      {
        id: "casos-especiais",
        number: "7. Casos Especiais",
        title: "Situações clássicas que mais aparecem em prova",
        icon: <Wrench className="w-6 h-6" />,
        content: (
          <>
            <ul className="space-y-3 pl-1">
              <BulletItem>encontro entre dois móveis;</BulletItem>
              <BulletItem>ultrapassagem no mesmo sentido;</BulletItem>
              <BulletItem>partida com atraso;</BulletItem>
              <BulletItem>funções horárias já dadas no enunciado;</BulletItem>
              <BulletItem>conversão entre m/s e km/h.</BulletItem>
            </ul>

            <FormulaBox formula={"1\\,\\text{m/s} = 3{,}6\\,\\text{km/h}"} />
            <FormulaBox formula={"1\\,\\text{km/h} = \\frac{1}{3{,}6}\\,\\text{m/s}"} />

            <p>
              Em vestibular mais forte, MRU quase nunca aparece “sozinho”. Ele vem
              disfarçado em contexto narrativo. O desafio real costuma ser montar a
              equação certa, e não fazer a conta. A conta, convenhamos, até uma
              calculadora sonolenta faria.
            </p>
          </>
        ),
      },
      {
        id: "conexao-vetorial",
        number: "8. Conexão Vetorial",
        title: "A escrita vetorial do MRU",
        icon: <Rocket className="w-6 h-6" />,
        content: (
          <>
            <p>
              Embora o MRU seja estudado inicialmente de forma escalar, ele pode ser
              escrito vetorialmente como:
            </p>

            <FormulaBox formula={"\\vec{r}(t) = \\vec{r}_0 + \\vec{v}\\,t"} />

            <p>
              Nessa expressão, o vetor posição varia linearmente com o tempo, enquanto
              o vetor velocidade permanece constante.
            </p>

            <FormulaBox formula={"\\vec{a} = \\vec{0}"} />

            <p>
              Essa forma é especialmente útil quando o movimento precisa ser tratado em
              duas ou três dimensões, ou quando aparece velocidade relativa em análise
              mais elaborada.
            </p>
          </>
        ),
      },
      {
        id: "aplicacoes",
        number: "9. Aplicações Práticas",
        title: "Onde o modelo aparece no mundo real",
        icon: <Info className="w-6 h-6" />,
        content: (
          <>
            <p>
              O MRU é uma idealização, mas uma idealização extremamente útil. Ele
              aparece como boa aproximação em várias situações:
            </p>

            <ul className="space-y-3 pl-1">
              <BulletItem>carro em estrada reta com velocidade estabilizada;</BulletItem>
              <BulletItem>esteira rolante;</BulletItem>
              <BulletItem>trem em trecho retilíneo com velocidade praticamente constante;</BulletItem>
              <BulletItem>sistemas de transporte automatizado;</BulletItem>
              <BulletItem>modelos iniciais em engenharia e robótica.</BulletItem>
            </ul>

            <p>
              O mundo real quase nunca é perfeitamente uniforme, mas o modelo continua
              sendo valioso porque simplifica a análise sem destruir a essência do
              fenômeno.
            </p>
          </>
        ),
      },
      {
        id: "armadilhas",
        number: "10. Armadilhas e Erros Comuns",
        title: "Onde o aluno costuma escorregar",
        icon: <AlertTriangle className="w-6 h-6" />,
        tone: "warning",
        content: (
          <>
            <ul className="space-y-3 pl-1">
              <BulletItem>confundir posição com distância percorrida;</BulletItem>
              <BulletItem>achar que velocidade negativa significa desaceleração;</BulletItem>
              <BulletItem>misturar m/s com km/h;</BulletItem>
              <BulletItem>ignorar sinais na função horária;</BulletItem>
              <BulletItem>igualar velocidades quando deveria igualar posições no encontro.</BulletItem>
            </ul>

            <p>
              Esse último erro é particularmente comum. Em problema de encontro,
              o critério físico correto é: <strong>no instante do encontro, os móveis
              ocupam a mesma posição</strong>. Não é “as velocidades ficam iguais”.
              Isso seria conveniente demais, e prova odeia conveniência.
            </p>
          </>
        ),
      },
      {
        id: "dicas",
        number: "11. Dicas de Elite",
        title: "Macetes que economizam tempo e reduzem erro",
        icon: <Lightbulb className="w-6 h-6" />,
        tone: "tip",
        content: (
          <>
            <ul className="space-y-3 pl-1">
              <BulletItem>
                para encontro, escreva uma função horária para cada móvel e iguale as posições;
              </BulletItem>
              <BulletItem>
                para ultrapassagem, faça o mesmo, observando comprimento quando houver;
              </BulletItem>
              <BulletItem>
                escolha a orientação da trajetória de forma inteligente;
              </BulletItem>
              <BulletItem>
                padronize unidades antes da conta;
              </BulletItem>
              <BulletItem>
                em gráfico <MathFormula formula={"s \\times t"} />, reta significa velocidade constante.
              </BulletItem>
            </ul>

            <p>
              Um bom aluno não é só quem sabe resolver. É quem sabe montar o problema
              da forma menos burra possível. Escolher bem referencial, sinais e unidade
              muitas vezes vale mais do que sair correndo para a conta.
            </p>
          </>
        ),
      },
      {
        id: "ex-base",
        number: "12. Preparação para exercícios",
        title: "Como pensar antes de resolver",
        icon: <BookOpen className="w-6 h-6" />,
        content: (
          <>
            <p>
              Antes de resolver uma questão de MRU, siga esta ordem:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>identifique a trajetória e a orientação escolhida;</li>
              <li>defina a posição inicial de cada móvel;</li>
              <li>padronize todas as unidades;</li>
              <li>monte a função horária de cada móvel;</li>
              <li>aplique a condição física correta: encontro, ultrapassagem, retorno, atraso etc.</li>
            </ol>

            <p>
              Esse procedimento parece simples porque é simples mesmo. O problema é que
              muita gente pula a etapa da interpretação e depois tenta compensar no desespero
              algébrico. Não costuma acabar bem.
            </p>
          </>
        ),
      },
    ],
    []
  );

  const solvedExercises: SolvedExercise[] = useMemo(
    () => [
      {
        id: "ex1",
        title: "Leitura direta da função horária",
        level: "Fácil",
        statement: (
          <>
            <p className="mb-4">
              Um móvel obedece à função horária:
            </p>
            <FormulaBox formula={"s = 10 + 4t"} />
            <p className="mt-4">
              Determine:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>a posição inicial;</li>
              <li>a velocidade escalar;</li>
              <li>a posição no instante <MathFormula formula={"t = 5\\,s"} />.</li>
            </ul>
          </>
        ),
        solution: (
          <>
            <p className="mb-4">
              A forma geral do MRU é:
            </p>
            <FormulaBox formula={"s = s_0 + vt"} />

            <p className="mt-4 mb-3">
              Comparando com <MathFormula formula={"s = 10 + 4t"} />, temos:
            </p>
            <FormulaBox formula={"s_0 = 10\\,m \\qquad ; \\qquad v = 4\\,m/s"} />

            <p className="mt-4 mb-3">
              Para <MathFormula formula={"t = 5\\,s"} />:
            </p>
            <FormulaBox formula={"s = 10 + 4\\cdot 5 = 30\\,m"} />

            <p className="mt-4">
              Portanto, a posição inicial é <strong>10 m</strong>, a velocidade é
              <strong> 4 m/s</strong> e a posição no instante de 5 s é <strong>30 m</strong>.
            </p>
          </>
        ),
      },
      {
        id: "ex2",
        title: "Encontro entre dois móveis",
        level: "Médio",
        statement: (
          <>
            <p className="mb-4">
              Dois móveis A e B percorrem a mesma trajetória e obedecem às funções:
            </p>
            <FormulaBox formula={"s_A = 20 + 5t"} />
            <div className="my-4" />
            <FormulaBox formula={"s_B = 80 - 3t"} />
            <p className="mt-4">
              Determine o instante e a posição do encontro.
            </p>
          </>
        ),
        solution: (
          <>
            <p className="mb-4">
              No encontro, os móveis ocupam a mesma posição:
            </p>
            <FormulaBox formula={"s_A = s_B"} />

            <p className="mt-4 mb-3">
              Então:
            </p>
            <FormulaBox formula={"20 + 5t = 80 - 3t"} />

            <p className="mt-4 mb-3">
              Reorganizando:
            </p>
            <FormulaBox formula={"8t = 60 \\qquad \\Rightarrow \\qquad t = 7{,}5\\,s"} />

            <p className="mt-4 mb-3">
              Agora substituímos em qualquer uma das funções. Usando a de A:
            </p>
            <FormulaBox formula={"s = 20 + 5\\cdot 7{,}5 = 57{,}5\\,m"} />

            <p className="mt-4">
              Logo, o encontro ocorre em <strong>7,5 s</strong>, na posição
              <strong> 57,5 m</strong>.
            </p>
          </>
        ),
      },
      {
        id: "ex3",
        title: "Perseguição com partida atrasada",
        level: "Difícil",
        statement: (
          <>
            <p className="mb-4">
              Um carro A passa por um ponto com velocidade constante de
              <MathFormula formula={"72\\,\\text{km/h}"} />.
              Quatro minutos depois, um carro B passa pelo mesmo ponto, no mesmo sentido,
              com velocidade constante de <MathFormula formula={"90\\,\\text{km/h}"} />.
            </p>

            <p>
              Depois de quanto tempo, contado a partir da partida de B, ele alcança A?
            </p>
          </>
        ),
        solution: (
          <>
            <p className="mb-4">
              Primeiro, convertemos as velocidades:
            </p>
            <FormulaBox formula={"72\\,\\text{km/h} = 20\\,\\text{m/s} \\qquad ; \\qquad 90\\,\\text{km/h} = 25\\,\\text{m/s}"} />

            <p className="mt-4 mb-3">
              Em 4 minutos, isto é, 240 s, o carro A abre vantagem de:
            </p>
            <FormulaBox formula={"\\Delta s = 20\\cdot 240 = 4800\\,m"} />

            <p className="mt-4 mb-3">
              A velocidade relativa de B em relação a A é:
            </p>
            <FormulaBox formula={"v_{rel} = 25 - 20 = 5\\,\\text{m/s}"} />

            <p className="mt-4 mb-3">
              O tempo necessário para eliminar essa vantagem é:
            </p>
            <FormulaBox formula={"t = \\frac{4800}{5} = 960\\,s"} />

            <p className="mt-4 mb-3">
              Convertendo:
            </p>
            <FormulaBox formula={"960\\,s = 16\\,\\text{min}"} />

            <p className="mt-4">
              Portanto, o carro B alcança o carro A <strong>16 minutos</strong>
              após sua própria partida.
            </p>
          </>
        ),
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            {onBack && (
              <Button
                variant="outline"
                size="sm"
                onClick={onBack}
                className="rounded-xl"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Voltar
              </Button>
            )}

            <Badge className="bg-violet-100 text-violet-800 border border-violet-200">
              Cinemática
            </Badge>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-700 text-white p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7" />
              </div>

              <div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
                  Movimento Retilíneo Uniforme
                </h1>
                <p className="text-violet-100 text-base md:text-lg max-w-4xl leading-7">
                  Base da Cinemática escalar. Aqui você consolida função horária,
                  interpretação de sinais, leitura de gráficos e as situações clássicas
                  de encontro, perseguição e ultrapassagem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="teoria" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full rounded-2xl h-auto p-1 bg-white border border-slate-200">
            <TabsTrigger value="teoria" className="rounded-xl py-3 text-sm md:text-base">
              Teoria Completa
            </TabsTrigger>
            <TabsTrigger value="simulador" className="rounded-xl py-3 text-sm md:text-base">
              Simulador Interativo
            </TabsTrigger>
            <TabsTrigger value="exercicios" className="rounded-xl py-3 text-sm md:text-base">
              Exercícios Resolvidos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="teoria" className="space-y-6">
            <Card className="rounded-2xl border-violet-200 bg-violet-50 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Introdução
                </h2>
                <div className="space-y-4 text-slate-700 leading-8 text-[17px]">
                  <p>
                    O MRU é o modelo mais simples da Cinemática, mas está longe de ser
                    um conteúdo descartável. Ele é o ponto de partida para entender a
                    relação entre posição, tempo e velocidade de forma matemática e
                    organizada.
                  </p>
                  <p>
                    Em essência, o MRU descreve um corpo que se move em linha reta com
                    velocidade constante. A partir disso surgem a função horária do
                    espaço, a leitura geométrica dos gráficos e toda a estrutura lógica
                    necessária para resolver problemas mais complexos.
                  </p>
                  <p>
                    Nesta página, a teoria foi reorganizada em seções didáticas no mesmo
                    estilo das outras explicações do projeto: blocos limpos, fórmulas em
                    destaque, alertas visuais e foco real em entendimento, não em enfeite.
                  </p>
                </div>
              </CardContent>
            </Card>

            {theorySections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </TabsContent>

          <TabsContent value="simulador" className="space-y-6">
            <Card className="rounded-2xl border-slate-200 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      Simulador Interativo
                    </h2>
                    <p className="text-slate-600 leading-7">
                      Ajuste os parâmetros e observe como a função horária
                      <MathFormula formula={"\\; s = s_0 + vt"} /> governa o movimento.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setSimIsRunning((prev) => !prev)}
                      className="rounded-xl"
                    >
                      {simIsRunning ? "Pausar" : "Iniciar"}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => {
                        setSimIsRunning(false);
                        setResetTrigger((prev) => prev + 1);
                      }}
                      className="rounded-xl"
                    >
                      Reiniciar
                    </Button>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-6">
                  <MRUSimulator
                    isRunning={simIsRunning}
                    resetTrigger={resetTrigger}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exercicios" className="space-y-6">
            <Card className="rounded-2xl border-slate-200 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  Exercícios Resolvidos
                </h2>
                <p className="text-slate-600 leading-7 mb-6">
                  As resoluções ficam recolhidas para não transformar a página numa parede
                  de texto. Civilização mínima, finalmente.
                </p>

                <Accordion type="single" collapsible className="space-y-4">
                  {solvedExercises.map((exercise) => (
                    <AccordionItem
                      key={exercise.id}
                      value={exercise.id}
                      className="border border-slate-200 rounded-2xl bg-white px-5"
                    >
                      <AccordionTrigger className="hover:no-underline py-5">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 text-left">
                          <span className="font-bold text-slate-900 text-lg">
                            {exercise.title}
                          </span>
                          <Badge className={levelBadgeClasses[exercise.level]}>
                            {exercise.level}
                          </Badge>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pb-6">
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">
                              Enunciado
                            </h3>
                            <div className="text-slate-700 leading-8 text-[16px]">
                              {exercise.statement}
                            </div>
                          </div>

                          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">
                              Resolução comentada
                            </h3>
                            <div className="text-slate-700 leading-8 text-[16px]">
                              {exercise.solution}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CinematicaTopicMRU;
