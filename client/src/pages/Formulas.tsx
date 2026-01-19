import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

interface Formula {
  id: string;
  name: string;
  category: string;
  latex: string;
  explanation: string;
  deepExplanation: string;
  derivation: string;
  physicalMeaning: string;
  examples: { description: string; calculation: string }[];
  commonMistakes: string[];
  applications: string[];
}

const formulas: Formula[] = [
  {
    id: "vm",
    name: "Velocidade Média",
    category: "Conceitos Básicos",
    latex: "v_m = \\frac{\\Delta s}{\\Delta t}",
    explanation: "A velocidade média mede a rapidez com que um objeto se desloca. É definida como a razão entre a distância percorrida e o intervalo de tempo gasto.",
    deepExplanation: `A velocidade média é um conceito fundamental em cinemática que quantifica o quão rápido um objeto se move em relação ao tempo. Diferentemente da velocidade instantânea (que é a velocidade em um momento específico), a velocidade média considera o trajeto completo.

**Interpretação Física:**
A velocidade média não nos diz como o objeto se moveu em cada momento específico, mas sim qual seria a velocidade constante necessária para percorrer a mesma distância no mesmo tempo. Por exemplo, se você viaja 300 km em 5 horas, sua velocidade média é 60 km/h, mesmo que em alguns trechos você tenha ido mais rápido ou mais lentamente.

**Características Importantes:**
- É uma grandeza vetorial (tem direção e sentido)
- Depende apenas do deslocamento total e do tempo total
- É sempre positiva para movimentos na mesma direção
- Não fornece informações sobre a trajetória específica percorrida

**Relação com Outras Grandezas:**
A velocidade média é o ponto de partida para entender conceitos mais complexos como aceleração e velocidade instantânea. Ela estabelece a base para análise de movimentos mais complexos.`,
    derivation: `A velocidade média surge da definição básica de velocidade como taxa de mudança de posição:

v_m = Δs / Δt = (s_f - s_i) / (t_f - t_i)

Onde:
- v_m = velocidade média (m/s)
- Δs = variação do espaço ou deslocamento (m)
- Δt = intervalo de tempo (s)
- s_f = posição final (m)
- s_i = posição inicial (m)
- t_f = tempo final (s)
- t_i = tempo inicial (s)

Esta fórmula é derivada do conceito de que a velocidade é a taxa de mudança da posição em relação ao tempo. Se considerarmos t_i = 0, a fórmula se simplifica para v_m = s / t.`,
    physicalMeaning: "A velocidade média representa a velocidade constante que um objeto precisaria ter para percorrer a mesma distância no mesmo tempo. É um conceito útil para análises gerais de movimento, mas não descreve como o objeto realmente se moveu em cada instante.",
    examples: [
      {
        description: "Um carro percorre 300 km em 5 horas",
        calculation: "v_m = 300 km / 5 h = 60 km/h"
      },
      {
        description: "Um corredor percorre 100 m em 10 s",
        calculation: "v_m = 100 m / 10 s = 10 m/s"
      },
      {
        description: "Um avião voa 1500 km em 3 horas",
        calculation: "v_m = 1500 km / 3 h = 500 km/h"
      }
    ],
    commonMistakes: [
      "Confundir velocidade média com a média das velocidades (são diferentes!)",
      "Não considerar a direção do movimento (velocidade é vetorial)",
      "Usar velocidades instantâneas em vez do deslocamento total",
      "Esquecer de converter unidades (km/h para m/s, por exemplo)"
    ],
    applications: [
      "Calcular tempo de viagem em trajetos conhecidos",
      "Analisar performance de atletas em competições",
      "Determinar velocidades de veículos em acidentes",
      "Planejamento de rotas e horários de transporte"
    ]
  },
  {
    id: "aceleracao",
    name: "Aceleração",
    category: "Conceitos Básicos",
    latex: "a = \\frac{\\Delta v}{\\Delta t}",
    explanation: "A aceleração mede a taxa de variação da velocidade ao longo do tempo. Se a velocidade de um corpo muda, ele está acelerando.",
    deepExplanation: `A aceleração é uma das grandezas mais importantes em cinemática, pois descreve como a velocidade de um objeto muda com o tempo. É fundamental para entender o comportamento de objetos em movimento.

**Conceito Fundamental:**
Aceleração não significa necessariamente "ir mais rápido". Significa qualquer mudança na velocidade, incluindo:
- Aumentar de velocidade (aceleração positiva)
- Diminuir de velocidade (aceleração negativa ou desaceleração)
- Mudar de direção (mesmo com velocidade constante em módulo)

**Tipos de Aceleração:**
1. **Aceleração tangencial**: muda o módulo da velocidade
2. **Aceleração centrípeta**: muda a direção da velocidade
3. **Aceleração total**: combinação das duas anteriores

**Unidades:**
A aceleração é medida em m/s² (metros por segundo ao quadrado), o que significa "metros por segundo, por segundo". Isso indica que a velocidade muda de m/s a cada segundo.

**Significado Físico:**
Uma aceleração de 5 m/s² significa que a velocidade aumenta 5 m/s a cada segundo. Após 1 segundo, a velocidade aumentou 5 m/s; após 2 segundos, aumentou 10 m/s, e assim por diante.`,
    derivation: `A aceleração é definida como a taxa de mudança da velocidade em relação ao tempo:

a = Δv / Δt = (v_f - v_i) / (t_f - t_i)

Onde:
- a = aceleração (m/s²)
- Δv = variação da velocidade (m/s)
- Δt = intervalo de tempo (s)
- v_f = velocidade final (m/s)
- v_i = velocidade inicial (m/s)

Se considerarmos t_i = 0, a fórmula se simplifica para a = v / t.

**Aceleração Instantânea:**
Para movimentos com aceleração variável, usamos o limite:
a = dv/dt (derivada da velocidade em relação ao tempo)`,
    physicalMeaning: "A aceleração descreve como rapidamente a velocidade de um objeto está mudando. Uma aceleração positiva indica aumento de velocidade, enquanto uma negativa indica diminuição. A aceleração é a causa das mudanças no movimento de um objeto.",
    examples: [
      {
        description: "Um carro aumenta sua velocidade de 0 m/s para 20 m/s em 5 segundos",
        calculation: "a = (20 - 0) / 5 = 4 m/s²"
      },
      {
        description: "Um carro reduz sua velocidade de 30 m/s para 10 m/s em 4 segundos",
        calculation: "a = (10 - 30) / 4 = -5 m/s² (desaceleração)"
      },
      {
        description: "Um objeto em queda livre após 3 segundos (g = 10 m/s²)",
        calculation: "v = 0 + 10·3 = 30 m/s (aceleração constante)"
      }
    ],
    commonMistakes: [
      "Pensar que aceleração sempre significa 'ir mais rápido'",
      "Confundir aceleração com velocidade",
      "Esquecer que aceleração pode ser negativa (desaceleração)",
      "Não considerar mudanças de direção como aceleração"
    ],
    applications: [
      "Análise de segurança em veículos (airbags, freios)",
      "Cálculo de forças em estruturas (F = m·a)",
      "Movimento de projéteis e satélites",
      "Dinâmica de máquinas e motores"
    ]
  },
  {
    id: "mru-posicao",
    name: "MRU - Posição",
    category: "Movimento Retilíneo Uniforme",
    latex: "s = s_0 + v \\cdot t",
    explanation: "A função horária da posição descreve como a posição de um objeto varia com o tempo no MRU. É uma equação do primeiro grau.",
    deepExplanation: `O Movimento Retilíneo Uniforme (MRU) é o tipo mais simples de movimento, onde um objeto se move em linha reta com velocidade constante. A função horária da posição é a equação fundamental que descreve este movimento.

**Características do MRU:**
- Trajetória é uma linha reta
- Velocidade é constante (não muda com o tempo)
- Aceleração é zero
- O objeto percorre distâncias iguais em tempos iguais

**Interpretação Gráfica:**
Se você plotar a posição (s) versus o tempo (t), obtém uma reta. A inclinação dessa reta é exatamente a velocidade do objeto. Uma reta mais inclinada significa maior velocidade.

**Significado dos Termos:**
- s₀: posição inicial (onde o objeto começa)
- v: velocidade (constante durante todo o movimento)
- t: tempo decorrido
- s: posição final

**Aplicações Práticas:**
Esta equação é usada em inúmeras situações: carros em estradas retas, aviões em voo de cruzeiro, trens em linhas retas, e qualquer objeto movendo-se com velocidade constante.`,
    derivation: `Partindo da definição de velocidade média, que no MRU é igual à velocidade instantânea:

v = Δs / Δt = (s - s₀) / (t - t₀)

Considerando t₀ = 0 (começamos a contar o tempo do início do movimento):

v = (s - s₀) / t

Multiplicando ambos os lados por t:

v·t = s - s₀

Isolando s:

s = s₀ + v·t

Esta é a função horária da posição no MRU. Ela é linear em t, o que significa que o gráfico s vs t é uma reta.`,
    physicalMeaning: "Esta equação nos diz exatamente onde um objeto estará em qualquer momento futuro, desde que ele continue se movendo com a mesma velocidade constante. É uma ferramenta poderosa para prever o movimento de objetos.",
    examples: [
      {
        description: "Um objeto começa na posição 10 m e se move a 5 m/s. Após 3 segundos:",
        calculation: "s = 10 + 5·3 = 10 + 15 = 25 m"
      },
      {
        description: "Um carro sai da origem (0 m) a 20 m/s. Qual sua posição após 10 s?",
        calculation: "s = 0 + 20·10 = 200 m"
      },
      {
        description: "Um trem começa no km 50 e viaja a 80 km/h. Posição após 2 horas:",
        calculation: "s = 50 + 80·2 = 50 + 160 = 210 km"
      }
    ],
    commonMistakes: [
      "Confundir posição com distância percorrida",
      "Esquecer de incluir a posição inicial s₀",
      "Usar a fórmula quando a velocidade não é constante",
      "Não converter unidades corretamente (km para m, horas para segundos)"
    ],
    applications: [
      "Cálculo de posição de veículos em movimento",
      "Previsão de encontros entre dois objetos",
      "Análise de movimento em gráficos posição-tempo",
      "Planejamento de trajetórias de objetos"
    ]
  },
  {
    id: "mru-velocidade",
    name: "MRU - Velocidade",
    category: "Movimento Retilíneo Uniforme",
    latex: "v = \\frac{\\Delta s}{\\Delta t} = \\frac{s - s_0}{t}",
    explanation: "Para encontrar a velocidade no MRU, basta isolar v na função horária da posição.",
    deepExplanation: `Esta é a forma inversa da equação do MRU, usada quando queremos encontrar a velocidade de um objeto a partir de sua posição inicial, posição final e tempo decorrido.

**Quando Usar:**
Use esta fórmula quando você conhece:
- Posição inicial (s₀)
- Posição final (s)
- Tempo decorrido (t)

E quer encontrar a velocidade (v).

**Interpretação:**
A velocidade é simplesmente o deslocamento dividido pelo tempo. Quanto maior o deslocamento em um tempo fixo, maior a velocidade. Quanto menor o tempo para um deslocamento fixo, maior a velocidade.

**Velocidade Média vs Velocidade Instantânea:**
No MRU, a velocidade média é igual à velocidade instantânea porque a velocidade não muda. Em movimentos mais complexos, essas são diferentes.`,
    derivation: `Partindo de s = s₀ + v·t, isolamos v:

s - s₀ = v·t

v = (s - s₀) / t = Δs / Δt

Onde Δs = s - s₀ é o deslocamento.

Esta fórmula nos permite calcular a velocidade conhecendo o deslocamento e o tempo.`,
    physicalMeaning: "Esta equação nos permite determinar a velocidade de um objeto observando sua mudança de posição ao longo do tempo. É fundamental para análises de movimento em situações práticas.",
    examples: [
      {
        description: "Um objeto sai da posição 5 m e chega à posição 35 m em 6 segundos",
        calculation: "v = (35 - 5) / 6 = 30 / 6 = 5 m/s"
      },
      {
        description: "Um carro sai do km 100 e chega ao km 250 em 3 horas",
        calculation: "v = (250 - 100) / 3 = 150 / 3 = 50 km/h"
      },
      {
        description: "Uma bola rola de 2 m para 12 m em 2 segundos",
        calculation: "v = (12 - 2) / 2 = 10 / 2 = 5 m/s"
      }
    ],
    commonMistakes: [
      "Usar distância total em vez de deslocamento",
      "Não considerar a direção (velocidade é vetorial)",
      "Confundir com velocidade média em movimentos variados",
      "Erros em conversão de unidades"
    ],
    applications: [
      "Determinação de velocidade de veículos em radares",
      "Análise de movimento em vídeos",
      "Cálculo de velocidade de corredores e atletas",
      "Investigação de acidentes de trânsito"
    ]
  },
  {
    id: "mruv-velocidade",
    name: "MRUV - Velocidade",
    category: "Movimento Uniformemente Variado",
    latex: "V = V_0 + a \\cdot t",
    explanation: "A função horária da velocidade descreve como a velocidade varia com o tempo no MRUV. É uma equação do primeiro grau.",
    deepExplanation: `No Movimento Uniformemente Variado (MRUV), a aceleração é constante, o que significa que a velocidade muda de forma linear com o tempo. Esta é a equação que descreve essa mudança.

**Características do MRUV:**
- Aceleração é constante
- Velocidade muda linearmente com o tempo
- A mudança de velocidade é proporcional ao tempo decorrido

**Interpretação Gráfica:**
Se você plotar velocidade (V) versus tempo (t), obtém uma reta. A inclinação dessa reta é exatamente a aceleração do objeto.

**Significado Prático:**
Se um carro tem aceleração de 2 m/s², isso significa que sua velocidade aumenta 2 m/s a cada segundo. Após 1 segundo, a velocidade aumentou 2 m/s; após 2 segundos, aumentou 4 m/s, e assim por diante.`,
    derivation: `Partindo da definição de aceleração:

a = Δv / Δt = (V - V₀) / (t - t₀)

Considerando t₀ = 0:

a = (V - V₀) / t

Multiplicando ambos os lados por t:

a·t = V - V₀

Isolando V:

V = V₀ + a·t

Esta é a função horária da velocidade no MRUV.`,
    physicalMeaning: "Esta equação nos permite prever a velocidade de um objeto em qualquer momento futuro, desde que a aceleração permaneça constante. É essencial para análise de movimentos acelerados.",
    examples: [
      {
        description: "Um objeto começa com velocidade 5 m/s e acelera a 2 m/s². Após 4 segundos:",
        calculation: "V = 5 + 2·4 = 5 + 8 = 13 m/s"
      },
      {
        description: "Um carro começa do repouso (0 m/s) com aceleração 3 m/s². Qual sua velocidade após 8 s?",
        calculation: "V = 0 + 3·8 = 24 m/s"
      },
      {
        description: "Um objeto com V₀ = 10 m/s desacelera a -2 m/s². Velocidade após 3 s:",
        calculation: "V = 10 + (-2)·3 = 10 - 6 = 4 m/s"
      }
    ],
    commonMistakes: [
      "Confundir aceleração com velocidade",
      "Esquecer que a aceleração pode ser negativa",
      "Usar esta fórmula quando a aceleração não é constante",
      "Erros de sinal ao trabalhar com desaceleração"
    ],
    applications: [
      "Cálculo de velocidade de veículos em aceleração",
      "Análise de movimento de projéteis",
      "Dinâmica de queda de objetos",
      "Movimento de partículas carregadas em campos elétricos"
    ]
  },
  {
    id: "mruv-posicao",
    name: "MRUV - Posição",
    category: "Movimento Uniformemente Variado",
    latex: "S = S_0 + V_0 \\cdot t + \\frac{a \\cdot t^2}{2}",
    explanation: "A função horária da posição descreve como a posição varia com o tempo no MRUV. É uma equação do segundo grau (parábola).",
    deepExplanation: `Esta é uma das equações mais importantes da cinemática. Ela descreve a posição de um objeto em movimento uniformemente variado, levando em conta tanto a velocidade inicial quanto a aceleração.

**Por que é uma parábola?**
O termo (a·t²)/2 torna esta uma equação quadrática. Isso significa que o gráfico posição-tempo é uma parábola, não uma reta como no MRU.

**Interpretação Física:**
- S₀: posição inicial
- V₀·t: distância que seria percorrida se não houvesse aceleração
- (a·t²)/2: distância adicional causada pela aceleração

**Aplicações Comuns:**
Queda de objetos, lançamento de projéteis, movimento de veículos acelerados, etc.

**Importância:**
Esta equação é fundamental para resolver problemas de cinemática envolvendo aceleração constante.`,
    derivation: `A posição é a integral da velocidade em relação ao tempo. Como V = V₀ + a·t:

S = ∫(V₀ + a·t)dt = V₀·t + (a·t²)/2 + C

Onde C é a constante de integração, que é a posição inicial S₀.

Portanto:

S = S₀ + V₀·t + (a·t²)/2

Alternativamente, pode-se derivar usando a velocidade média:
- Velocidade média = (V₀ + V)/2
- S - S₀ = velocidade média × t = [(V₀ + V)/2]·t
- Substituindo V = V₀ + a·t:
- S - S₀ = [(V₀ + V₀ + a·t)/2]·t = [2V₀ + a·t]/2 · t = V₀·t + (a·t²)/2`,
    physicalMeaning: "Esta equação nos permite calcular exatamente onde um objeto estará em qualquer momento, considerando tanto sua velocidade inicial quanto sua aceleração. É a ferramenta mais poderosa para análise de movimentos acelerados.",
    examples: [
      {
        description: "Um objeto começa na posição 0 m, com velocidade inicial 3 m/s e aceleração 2 m/s². Após 5 segundos:",
        calculation: "S = 0 + 3·5 + (2·5²)/2 = 15 + (2·25)/2 = 15 + 25 = 40 m"
      },
      {
        description: "Um carro começa na posição 10 m, com velocidade inicial 5 m/s e aceleração 1 m/s². Qual sua posição após 6 s?",
        calculation: "S = 10 + 5·6 + (1·6²)/2 = 10 + 30 + 18 = 58 m"
      },
      {
        description: "Um objeto em queda livre começa em 100 m com V₀ = 0 e a = -10 m/s². Posição após 2 s:",
        calculation: "S = 100 + 0·2 + (-10·2²)/2 = 100 - 20 = 80 m"
      }
    ],
    commonMistakes: [
      "Esquecer o fator 1/2 no termo (a·t²)/2",
      "Confundir com a fórmula de MRU",
      "Erros de sinal com aceleração negativa",
      "Não considerar a posição inicial S₀"
    ],
    applications: [
      "Cálculo de altura de objetos em queda",
      "Análise de movimento de projéteis",
      "Movimento de veículos em aceleração",
      "Dinâmica de partículas em campos de força"
    ]
  },
  {
    id: "torricelli",
    name: "Equação de Torricelli",
    category: "Movimento Uniformemente Variado",
    latex: "V^2 = V_0^2 + 2 \\cdot a \\cdot \\Delta S",
    explanation: "A Equação de Torricelli relaciona velocidade, aceleração e deslocamento, sem depender do tempo. Muito útil quando não conhecemos o tempo.",
    deepExplanation: `A Equação de Torricelli é uma das mais elegantes da cinemática. Ela relaciona velocidade final, velocidade inicial, aceleração e deslocamento, sem necessidade de conhecer o tempo. Isso a torna extremamente útil em muitos problemas práticos.

**Quando Usar:**
Use esta fórmula quando você conhece:
- Velocidade inicial (V₀)
- Aceleração (a)
- Deslocamento (ΔS)

E quer encontrar a velocidade final (V), sem conhecer o tempo.

**Vantagens:**
- Elimina a necessidade de calcular o tempo intermediário
- Simplifica muitos problemas práticos
- Fornece resultados diretos

**Aplicações Práticas:**
Determinar a velocidade de um carro ao final de uma rampa, velocidade de um objeto ao atingir o solo, etc.`,
    derivation: `Partindo das duas equações fundamentais do MRUV:

1) V = V₀ + a·t  →  t = (V - V₀) / a

2) S = S₀ + V₀·t + (a·t²)/2  →  ΔS = V₀·t + (a·t²)/2

Substituindo a expressão de t na segunda equação:

ΔS = V₀·[(V - V₀)/a] + (a/2)·[(V - V₀)/a]²

ΔS = [V₀·(V - V₀)]/a + (a/2)·[(V - V₀)²/a²]

ΔS = [V₀·(V - V₀)]/a + [(V - V₀)²]/(2a)

Multiplicando tudo por 2a:

2a·ΔS = 2V₀·(V - V₀) + (V - V₀)²

2a·ΔS = 2V₀·V - 2V₀² + V² - 2V₀·V + V₀²

2a·ΔS = V² - V₀²

Portanto:

V² = V₀² + 2·a·ΔS`,
    physicalMeaning: "Esta equação nos permite encontrar a velocidade final de um objeto sem precisar saber quanto tempo levou. É particularmente útil quando o tempo não é conhecido ou não é relevante para o problema.",
    examples: [
      {
        description: "Um objeto começa com velocidade 5 m/s, acelera a 3 m/s² e percorre 20 m. Qual sua velocidade final?",
        calculation: "V² = 5² + 2·3·20 = 25 + 120 = 145 → V = √145 ≈ 12,04 m/s"
      },
      {
        description: "Um carro começa do repouso (0 m/s) com aceleração 2 m/s² e percorre 50 m",
        calculation: "V² = 0² + 2·2·50 = 200 → V = √200 ≈ 14,14 m/s"
      },
      {
        description: "Um objeto desacelera de 30 m/s a -5 m/s² e percorre 80 m",
        calculation: "V² = 30² + 2·(-5)·80 = 900 - 800 = 100 → V = 10 m/s"
      }
    ],
    commonMistakes: [
      "Esquecer que V² é o quadrado da velocidade (não é V)",
      "Usar distância em vez de deslocamento",
      "Erros de sinal com aceleração negativa",
      "Confundir com outras equações do MRUV"
    ],
    applications: [
      "Cálculo de velocidade ao final de uma rampa",
      "Determinação de velocidade de impacto",
      "Análise de freios de emergência",
      "Movimento de projéteis sem conhecer o tempo"
    ]
  },
  {
    id: "mcu-velocidade",
    name: "MCU - Velocidade Tangencial",
    category: "Movimento Circular Uniforme",
    latex: "v = \\frac{2\\pi r}{T} = 2\\pi rf",
    explanation: "A velocidade tangencial é a velocidade do objeto ao longo da trajetória circular. É constante em módulo no MCU.",
    deepExplanation: `No Movimento Circular Uniforme, o objeto se move em um círculo com velocidade constante em módulo. A velocidade tangencial é a velocidade instantânea do objeto em qualquer ponto da trajetória, sempre tangente ao círculo.

**Conceitos Importantes:**
- A velocidade tangencial é sempre perpendicular ao raio
- Seu módulo é constante, mas sua direção muda continuamente
- Período (T): tempo para completar uma volta
- Frequência (f): número de voltas por unidade de tempo (f = 1/T)

**Relação com Período e Frequência:**
- v = 2πr / T (usando período)
- v = 2πrf (usando frequência)

**Interpretação Física:**
A velocidade tangencial representa quão rápido o objeto se move ao longo do círculo. Um objeto em um círculo maior com o mesmo período terá maior velocidade tangencial.`,
    derivation: `O objeto percorre uma circunferência completa (2πr) em um período (T):

v = distância / tempo = 2πr / T

Como a frequência f = 1/T, podemos escrever:

v = 2πr / (1/f) = 2πrf

Onde:
- v = velocidade tangencial (m/s)
- r = raio (m)
- T = período (s)
- f = frequência (Hz)
- π ≈ 3,14159...`,
    physicalMeaning: "A velocidade tangencial descreve quão rápido o objeto se move ao longo da trajetória circular. Embora o módulo seja constante, a direção muda continuamente, o que causa a aceleração centrípeta.",
    examples: [
      {
        description: "Um objeto em movimento circular com raio 5 m e período 2 s",
        calculation: "v = 2π·5 / 2 = 10π / 2 = 5π ≈ 15,7 m/s"
      },
      {
        description: "Um objeto com raio 10 m e frequência 0,5 Hz",
        calculation: "v = 2π·10·0,5 = 10π ≈ 31,4 m/s"
      },
      {
        description: "Um carrossel com raio 3 m completa uma volta em 4 s",
        calculation: "v = 2π·3 / 4 = 6π / 4 = 1,5π ≈ 4,71 m/s"
      }
    ],
    commonMistakes: [
      "Confundir velocidade tangencial com velocidade angular",
      "Esquecer de usar 2π na fórmula",
      "Usar diâmetro em vez de raio",
      "Confundir período com frequência"
    ],
    applications: [
      "Cálculo de velocidade em carrosséis e rodas gigantes",
      "Movimento de satélites em órbita",
      "Velocidade de pontos em rodas e engrenagens",
      "Análise de movimento planetário"
    ]
  },
  {
    id: "mcu-aceleracao",
    name: "MCU - Aceleração Centrípeta",
    category: "Movimento Circular Uniforme",
    latex: "a_c = \\frac{v^2}{r} = \\omega^2 r",
    explanation: "A aceleração centrípeta é responsável por manter o objeto em movimento circular. É sempre dirigida para o centro.",
    deepExplanation: `A aceleração centrípeta é a aceleração que aponta para o centro do círculo. Ela é responsável por mudar continuamente a direção da velocidade, mantendo o objeto em movimento circular.

**Características Importantes:**
- Sempre aponta para o centro do círculo
- Seu módulo é constante no MCU
- É perpendicular à velocidade tangencial
- É causada por uma força (força centrípeta)

**Duas Formas da Fórmula:**
1. a_c = v² / r (em função da velocidade tangencial)
2. a_c = ω²r (em função da velocidade angular)

**Interpretação Física:**
A aceleração centrípeta mede a taxa de mudança da direção da velocidade. Quanto maior a velocidade ou menor o raio, maior a aceleração centrípeta necessária.`,
    derivation: `A aceleração centrípeta é a taxa de mudança da direção da velocidade. Para um movimento circular uniforme:

Usando a definição de aceleração e geometria:
a_c = v² / r

Alternativamente, usando velocidade angular ω = v/r:
a_c = ω²r

Onde:
- a_c = aceleração centrípeta (m/s²)
- v = velocidade tangencial (m/s)
- r = raio (m)
- ω = velocidade angular (rad/s)`,
    physicalMeaning: "A aceleração centrípeta é a aceleração necessária para manter um objeto em movimento circular. Sem ela, o objeto continuaria em linha reta (primeira lei de Newton). É causada por uma força dirigida para o centro.",
    examples: [
      {
        description: "Um objeto com velocidade tangencial 10 m/s em um raio de 5 m",
        calculation: "a_c = 10² / 5 = 100 / 5 = 20 m/s²"
      },
      {
        description: "Um objeto com velocidade angular 2 rad/s e raio 3 m",
        calculation: "a_c = 2²·3 = 4·3 = 12 m/s²"
      },
      {
        description: "Um carro em uma curva com raio 50 m a 20 m/s",
        calculation: "a_c = 20² / 50 = 400 / 50 = 8 m/s²"
      }
    ],
    commonMistakes: [
      "Confundir aceleração centrípeta com aceleração tangencial",
      "Pensar que a aceleração centrípeta aumenta a velocidade",
      "Usar diâmetro em vez de raio",
      "Confundir com aceleração angular"
    ],
    applications: [
      "Cálculo de forças em curvas de estradas",
      "Movimento de satélites em órbita",
      "Análise de movimento em carrosséis",
      "Dinâmica de partículas em campos magnéticos"
    ]
  },
  {
    id: "quedalivre",
    name: "Queda Livre - Velocidade",
    category: "Queda Livre",
    latex: "V = V_0 + g \\cdot t",
    explanation: "A queda livre é um caso especial de MRUV onde a aceleração é a da gravidade (g ≈ 9,8 m/s²).",
    deepExplanation: `A queda livre é um dos movimentos mais importantes e comuns na natureza. É um caso especial do MRUV onde a única força atuante é a gravidade.

**Características da Queda Livre:**
- Aceleração é constante (g = 9,8 m/s² na Terra)
- A resistência do ar é negligenciada
- Todos os objetos caem com a mesma aceleração (independente da massa)
- A velocidade aumenta linearmente com o tempo

**Valor de g:**
- Na Terra: g ≈ 9,8 m/s² (ou 10 m/s² para aproximações)
- Na Lua: g ≈ 1,6 m/s²
- Em Júpiter: g ≈ 24,8 m/s²

**Importante:**
Galileu descobriu que todos os objetos caem com a mesma aceleração, independente de sua massa. Isso foi revolucionário na época!`,
    derivation: `A queda livre segue as mesmas equações do MRUV, mas com a = g:

V = V₀ + g·t

Onde:
- V = velocidade final (m/s)
- V₀ = velocidade inicial (m/s)
- g = aceleração da gravidade ≈ 9,8 m/s²
- t = tempo (s)

Para um objeto solto do repouso (V₀ = 0):
V = g·t`,
    physicalMeaning: "Esta equação descreve como a velocidade de um objeto aumenta durante a queda livre. A velocidade aumenta linearmente com o tempo, aumentando 9,8 m/s a cada segundo.",
    examples: [
      {
        description: "Um objeto é solto do repouso. Qual sua velocidade após 3 segundos?",
        calculation: "V = 0 + 9,8·3 = 29,4 m/s"
      },
      {
        description: "Um objeto é lançado para baixo com velocidade inicial 5 m/s. Qual sua velocidade após 2 s?",
        calculation: "V = 5 + 9,8·2 = 5 + 19,6 = 24,6 m/s"
      },
      {
        description: "Um objeto é lançado para cima com velocidade inicial 20 m/s. Velocidade após 2 s (g = -9,8 m/s² para cima):",
        calculation: "V = 20 + (-9,8)·2 = 20 - 19,6 = 0,4 m/s"
      }
    ],
    commonMistakes: [
      "Pensar que objetos mais pesados caem mais rápido",
      "Esquecer que g é uma aceleração (não uma velocidade)",
      "Usar g positivo quando o objeto é lançado para cima",
      "Não considerar a resistência do ar em situações reais"
    ],
    applications: [
      "Cálculo de tempo de queda de objetos",
      "Análise de lançamentos verticais",
      "Determinação de altura de edifícios",
      "Movimento de projéteis"
    ]
  }
];

export default function Formulas() {
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(formulas[0]);
  const categories = Array.from(new Set(formulas.map(f => f.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              ← Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Explicação Detalhada das Fórmulas</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar - Fórmulas */}
          <div className="md:col-span-1">
            <div className="space-y-4 sticky top-24">
              {categories.map(category => (
                <div key={category}>
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">{category}</h3>
                  <div className="space-y-2">
                    {formulas.filter(f => f.category === category).map(formula => (
                      <button
                        key={formula.id}
                        onClick={() => setSelectedFormula(formula)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm ${
                          selectedFormula?.id === formula.id
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200"
                        }`}
                      >
                        <p className="font-semibold">{formula.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content - Fórmula Selecionada */}
          <div className="md:col-span-2">
            {selectedFormula && (
              <div className="space-y-8">
                <Card className="p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{selectedFormula.name}</h2>
                  
                  {/* Fórmula em LaTeX */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
                    <p className="text-sm text-slate-600 mb-2">Fórmula:</p>
                    <MathFormula formula={selectedFormula.latex} className="text-2xl" />
                  </div>

                  {/* Explicação Simples */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">O que significa?</h3>
                    <p className="text-slate-700 leading-relaxed">{selectedFormula.explanation}</p>
                  </div>

                  {/* Explicação Aprofundada */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Explicação Aprofundada</h3>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap font-serif text-sm">
                        {selectedFormula.deepExplanation}
                      </p>
                    </div>
                  </div>

                  {/* Significado Físico */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Significado Físico</h3>
                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                      <p className="text-slate-700 leading-relaxed">{selectedFormula.physicalMeaning}</p>
                    </div>
                  </div>

                  {/* Derivação */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">De onde vem? (Derivação)</h3>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap font-mono text-sm">
                        {selectedFormula.derivation}
                      </p>
                    </div>
                  </div>

                  {/* Exemplos */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Exemplos Práticos</h3>
                    <div className="space-y-4">
                      {selectedFormula.examples.map((example, idx) => (
                        <Card key={idx} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
                          <p className="text-sm text-slate-700 mb-2"><strong>Exemplo {idx + 1}:</strong> {example.description}</p>
                          <code className="text-lg font-mono font-bold text-green-600">{example.calculation}</code>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Erros Comuns */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">⚠️ Erros Comuns</h3>
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <ul className="space-y-2">
                        {selectedFormula.commonMistakes.map((mistake, idx) => (
                          <li key={idx} className="text-sm text-slate-700">• {mistake}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Aplicações */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">💡 Aplicações Práticas</h3>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <ul className="space-y-2">
                        {selectedFormula.applications.map((app, idx) => (
                          <li key={idx} className="text-sm text-slate-700">• {app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
