import { useState, useEffect } from "react";
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

\\[v_m = \\frac{\\Delta s}{\\Delta t} = \\frac{s_f - s_i}{t_f - t_i}\\]

Onde:
- \\(v_m\\) = velocidade média (m/s)
- \\(\\Delta s\\) = variação do espaço ou deslocamento (m)
- \\(\\Delta t\\) = intervalo de tempo (s)
- \\(s_f\\) = posição final (m)
- \\(s_i\\) = posição inicial (m)
- \\(t_f\\) = tempo final (s)
- \\(t_i\\) = tempo inicial (s)

Esta fórmula é derivada do conceito de que a velocidade é a taxa de mudança da posição em relação ao tempo. Se considerarmos \\(t_i = 0\\), a fórmula se simplifica para \\(v_m = \\frac{s}{t}\\).`,
    physicalMeaning: "A velocidade média representa a velocidade constante que um objeto precisaria ter para percorrer a mesma distância no mesmo tempo. É um conceito útil para análises gerais de movimento, mas não descreve como o objeto realmente se moveu em cada instante.",
    examples: [
      {
        description: "Um carro percorre 300 km em 5 horas",
        calculation: "\\(v_m = \\frac{300 \\text{ km}}{5 \\text{ h}} = 60 \\text{ km/h}\\)"
      },
      {
        description: "Um corredor percorre 100 m em 10 s",
        calculation: "\\(v_m = \\frac{100 \\text{ m}}{10 \\text{ s}} = 10 \\text{ m/s}\\)"
      },
      {
        description: "Um avião voa 1500 km em 3 horas",
        calculation: "\\(v_m = \\frac{1500 \\text{ km}}{3 \\text{ h}} = 500 \\text{ km/h}\\)"
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
2. **Aceleração centrípeta**: muda a direção da velocidade`,
    derivation: `A aceleração é definida como a taxa de mudança da velocidade em relação ao tempo:

\\[a = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{t_f - t_i}\\]

Onde:
- \\(a\\) = aceleração (m/s²)
- \\(\\Delta v\\) = variação da velocidade (m/s)
- \\(\\Delta t\\) = intervalo de tempo (s)
- \\(v_f\\) = velocidade final (m/s)
- \\(v_i\\) = velocidade inicial (m/s)`,
    physicalMeaning: "A aceleração descreve como rapidamente a velocidade de um objeto está mudando. Uma aceleração positiva significa que a velocidade está aumentando, enquanto uma aceleração negativa significa que está diminuindo.",
    examples: [
      {
        description: "Um carro aumenta sua velocidade de 0 m/s para 20 m/s em 5 segundos",
        calculation: "\\(a = \\frac{20 - 0}{5} = 4 \\text{ m/s}^2\\)"
      },
      {
        description: "Um carro reduz sua velocidade de 30 m/s para 10 m/s em 4 segundos",
        calculation: "\\(a = \\frac{10 - 30}{4} = -5 \\text{ m/s}^2\\) (desaceleração)"
      },
      {
        description: "Um objeto em queda livre após 3 segundos (g = 10 m/s²)",
        calculation: "\\(v = 0 + 10 \\cdot 3 = 30 \\text{ m/s}\\) (aceleração constante)"
      }
    ],
    commonMistakes: [
      "Confundir aceleração com velocidade",
      "Pensar que aceleração sempre significa 'ir mais rápido'",
      "Esquecer que aceleração é uma grandeza vetorial",
      "Não considerar acelerações negativas (desaceleração)"
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
- Velocidade constante
- Aceleração nula
- Trajetória retilínea
- Deslocamentos iguais em tempos iguais`,
    derivation: `Partindo da definição de velocidade média, que no MRU é igual à velocidade instantânea:

\\[v = \\frac{\\Delta s}{\\Delta t} = \\frac{s - s_0}{t - t_0}\\]

Considerando \\(t_0 = 0\\) (começamos a contar o tempo do início do movimento):

\\[v = \\frac{s - s_0}{t}\\]

Multiplicando ambos os lados por \\(t\\):

\\[v \\cdot t = s - s_0\\]

Isolando \\(s\\):

\\[s = s_0 + v \\cdot t\\]

Esta é a função horária da posição no MRU. Ela é linear em \\(t\\), o que significa que o gráfico \\(s\\) vs \\(t\\) é uma reta.`,
    physicalMeaning: "Esta equação nos permite saber exatamente onde um objeto estará em qualquer momento, desde que ele se mova com velocidade constante.",
    examples: [
      {
        description: "Um objeto começa na posição 10 m e se move a 5 m/s. Após 3 segundos:",
        calculation: "\\(s = 10 + 5 \\cdot 3 = 10 + 15 = 25 \\text{ m}\\)"
      },
      {
        description: "Um carro sai da origem (0 m) a 20 m/s. Qual sua posição após 10 s?",
        calculation: "\\(s = 0 + 20 \\cdot 10 = 200 \\text{ m}\\)"
      },
      {
        description: "Um trem começa no km 50 e viaja a 80 km/h. Posição após 2 horas:",
        calculation: "\\(s = 50 + 80 \\cdot 2 = 50 + 160 = 210 \\text{ km}\\)"
      }
    ],
    commonMistakes: [
      "Esquecer a posição inicial s₀",
      "Usar unidades inconsistentes",
      "Confundir deslocamento com distância percorrida"
    ],
    applications: [
      "Cálculo de posição de veículos em movimento",
      "Análise de movimento de trens e aviões",
      "Determinação de tempo de encontro entre objetos",
      "Problemas de perseguição e fuga"
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
- Quando você conhece as posições e o tempo
- Quando precisa calcular a velocidade de um objeto em movimento uniforme

**Velocidade Média vs Velocidade Instantânea:**
No MRU, a velocidade média é igual à velocidade instantânea porque a velocidade não muda. Em movimentos mais complexos, essas são diferentes.`,
    derivation: `Partindo de \\(s = s_0 + v \\cdot t\\), isolamos \\(v\\):

\\[s - s_0 = v \\cdot t\\]

\\[v = \\frac{s - s_0}{t} = \\frac{\\Delta s}{\\Delta t}\\]

Onde \\(\\Delta s = s - s_0\\) é o deslocamento.

Esta fórmula nos permite calcular a velocidade conhecendo o deslocamento e o tempo.`,
    physicalMeaning: "A velocidade é a razão entre o deslocamento e o tempo. Ela nos diz quanta distância um objeto percorre por unidade de tempo.",
    examples: [
      {
        description: "Um objeto se move de 10 m para 40 m em 6 segundos",
        calculation: "\\(v = \\frac{40 - 10}{6} = \\frac{30}{6} = 5 \\text{ m/s}\\)"
      },
      {
        description: "Um carro viaja 150 km em 3 horas",
        calculation: "\\(v = \\frac{150}{3} = 50 \\text{ km/h}\\)"
      },
      {
        description: "Um corredor cobre 100 m em 10 segundos",
        calculation: "\\(v = \\frac{100}{10} = 10 \\text{ m/s}\\)"
      }
    ],
    commonMistakes: [
      "Esquecer de calcular o deslocamento (s - s₀)",
      "Usar a distância total em vez do deslocamento",
      "Não converter unidades adequadamente"
    ],
    applications: [
      "Cálculo de velocidade de veículos",
      "Análise de movimento de atletas",
      "Determinação de velocidade média em trajetos",
      "Problemas de cinemática básica"
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
- Aceleração constante
- Velocidade varia linearmente com o tempo
- Trajetória retilínea
- Deslocamentos diferentes em tempos iguais`,
    derivation: `Partindo da definição de aceleração:

\\[a = \\frac{\\Delta v}{\\Delta t} = \\frac{V - V_0}{t - t_0}\\]

Considerando \\(t_0 = 0\\):

\\[a = \\frac{V - V_0}{t}\\]

Multiplicando ambos os lados por \\(t\\):

\\[a \\cdot t = V - V_0\\]

Isolando \\(V\\):

\\[V = V_0 + a \\cdot t\\]

Esta é a função horária da velocidade no MRUV.`,
    physicalMeaning: "Esta equação nos permite calcular a velocidade de um objeto em qualquer momento, conhecendo sua velocidade inicial e sua aceleração constante.",
    examples: [
      {
        description: "Um objeto começa com velocidade 5 m/s e acelera a 2 m/s². Após 4 segundos:",
        calculation: "\\(V = 5 + 2 \\cdot 4 = 5 + 8 = 13 \\text{ m/s}\\)"
      },
      {
        description: "Um carro começa do repouso (0 m/s) com aceleração 3 m/s². Qual sua velocidade após 8 s?",
        calculation: "\\(V = 0 + 3 \\cdot 8 = 24 \\text{ m/s}\\)"
      },
      {
        description: "Um objeto com V₀ = 10 m/s desacelera a -2 m/s². Velocidade após 3 s:",
        calculation: "\\(V = 10 + (-2) \\cdot 3 = 10 - 6 = 4 \\text{ m/s}\\)"
      }
    ],
    commonMistakes: [
      "Confundir aceleração com velocidade",
      "Esquecer de considerar acelerações negativas",
      "Usar a fórmula do MRU em vez do MRUV"
    ],
    applications: [
      "Cálculo de velocidade em movimento acelerado",
      "Análise de queda livre",
      "Movimento de veículos com aceleração constante",
      "Problemas de lançamento de projéteis"
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
O termo \\(\\frac{a \\cdot t^2}{2}\\) cria uma dependência quadrática com o tempo, resultando em uma trajetória parabólica no gráfico posição vs tempo.

**Interpretação Física:**
- \\(S_0\\) é a posição inicial
- \\(V_0 \\cdot t\\) é o deslocamento devido à velocidade inicial
- \\(\\frac{a \\cdot t^2}{2}\\) é o deslocamento adicional devido à aceleração`,
    derivation: `A posição é a integral da velocidade em relação ao tempo. Como \\(V = V_0 + a \\cdot t\\):

\\[S = \\int(V_0 + a \\cdot t)dt = V_0 \\cdot t + \\frac{a \\cdot t^2}{2} + C\\]

Onde \\(C\\) é a constante de integração, que é a posição inicial \\(S_0\\).

Portanto:

\\[S = S_0 + V_0 \\cdot t + \\frac{a \\cdot t^2}{2}\\]

Alternativamente, pode-se derivar usando a velocidade média:
- Velocidade média = \\(\\frac{V_0 + V}{2}\\)
- \\(S - S_0\\) = velocidade média × \\(t\\) = \\(\\frac{V_0 + V}{2} \\cdot t\\)
- Substituindo \\(V = V_0 + a \\cdot t\\):
- \\(S - S_0 = \\frac{V_0 + V_0 + a \\cdot t}{2} \\cdot t = \\frac{2V_0 + a \\cdot t}{2} \\cdot t = V_0 \\cdot t + \\frac{a \\cdot t^2}{2}\\)`,
    physicalMeaning: "Esta equação nos permite calcular exatamente onde um objeto estará em qualquer momento, considerando tanto sua velocidade inicial quanto sua aceleração. É a ferramenta mais poderosa para análise de movimentos acelerados.",
    examples: [
      {
        description: "Um objeto começa na posição 0 m, com velocidade inicial 3 m/s e aceleração 2 m/s². Após 5 segundos:",
        calculation: "\\(S = 0 + 3 \\cdot 5 + \\frac{2 \\cdot 5^2}{2} = 15 + \\frac{2 \\cdot 25}{2} = 15 + 25 = 40 \\text{ m}\\)"
      },
      {
        description: "Um carro começa na posição 10 m, com velocidade inicial 5 m/s e aceleração 1 m/s². Qual sua posição após 6 s?",
        calculation: "\\(S = 10 + 5 \\cdot 6 + \\frac{1 \\cdot 6^2}{2} = 10 + 30 + 18 = 58 \\text{ m}\\)"
      },
      {
        description: "Um objeto em queda livre começa em 100 m com V₀ = 0 e a = -10 m/s². Posição após 2 s:",
        calculation: "\\(S = 100 + 0 \\cdot 2 + \\frac{-10 \\cdot 2^2}{2} = 100 - 20 = 80 \\text{ m}\\)"
      }
    ],
    commonMistakes: [
      "Esquecer o termo \\(\\frac{a \\cdot t^2}{2}\\)",
      "Usar a fórmula do MRU em vez do MRUV",
      "Não considerar acelerações negativas",
      "Erros com unidades"
    ],
    applications: [
      "Cálculo de posição em movimento acelerado",
      "Análise de queda livre",
      "Movimento de veículos com aceleração",
      "Problemas de lançamento vertical"
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
- Quando não conhecemos o tempo
- Quando queremos relacionar velocidades e deslocamento
- Em problemas de colisão e frenagem`,
    derivation: `Partindo das duas equações fundamentais do MRUV:

1) \\(V = V_0 + a \\cdot t\\) → \\(t = \\frac{V - V_0}{a}\\)

2) \\(S = S_0 + V_0 \\cdot t + \\frac{a \\cdot t^2}{2}\\) → \\(\\Delta S = V_0 \\cdot t + \\frac{a \\cdot t^2}{2}\\)

Substituindo a expressão de \\(t\\) na segunda equação:

\\[\\Delta S = V_0 \\cdot \\frac{V - V_0}{a} + \\frac{a}{2} \\cdot \\left(\\frac{V - V_0}{a}\\right)^2\\]

\\[\\Delta S = \\frac{V_0 \\cdot (V - V_0)}{a} + \\frac{a}{2} \\cdot \\frac{(V - V_0)^2}{a^2}\\]

\\[\\Delta S = \\frac{V_0 \\cdot (V - V_0)}{a} + \\frac{(V - V_0)^2}{2a}\\]

Multiplicando tudo por \\(2a\\):

\\[2a \\cdot \\Delta S = 2V_0 \\cdot (V - V_0) + (V - V_0)^2\\]

\\[2a \\cdot \\Delta S = 2V_0 \\cdot V - 2V_0^2 + V^2 - 2V_0 \\cdot V + V_0^2\\]

\\[2a \\cdot \\Delta S = V^2 - V_0^2\\]

Portanto:

\\[V^2 = V_0^2 + 2 \\cdot a \\cdot \\Delta S\\]`,
    physicalMeaning: "Esta equação nos permite encontrar a velocidade final de um objeto sem precisar saber quanto tempo levou. É particularmente útil quando o tempo não é conhecido ou não é relevante para o problema.",
    examples: [
      {
        description: "Um objeto começa com velocidade 5 m/s, acelera a 3 m/s² e percorre 20 m. Qual sua velocidade final?",
        calculation: "\\(V^2 = 5^2 + 2 \\cdot 3 \\cdot 20 = 25 + 120 = 145\\) → \\(V = \\sqrt{145} \\approx 12,04 \\text{ m/s}\\)"
      },
      {
        description: "Um carro começa do repouso (0 m/s) com aceleração 2 m/s² e percorre 50 m",
        calculation: "\\(V^2 = 0^2 + 2 \\cdot 2 \\cdot 50 = 200\\) → \\(V = \\sqrt{200} \\approx 14,14 \\text{ m/s}\\)"
      },
      {
        description: "Um objeto desacelera de 30 m/s a -5 m/s² e percorre 80 m",
        calculation: "\\(V^2 = 30^2 + 2 \\cdot (-5) \\cdot 80 = 900 - 800 = 100\\) → \\(V = 10 \\text{ m/s}\\)"
      }
    ],
    commonMistakes: [
      "Esquecer de tirar a raiz quadrada",
      "Confundir com outras equações do MRUV",
      "Erros de sinal com aceleração negativa"
    ],
    applications: [
      "Cálculo de velocidade de frenagem",
      "Análise de colisões",
      "Movimento de projéteis",
      "Problemas de queda livre"
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
- A velocidade é sempre tangente ao círculo
- O módulo da velocidade é constante
- A direção muda continuamente

**Relação com Período e Frequência:**
- \\(v = \\frac{2\\pi r}{T}\\) (usando período)
- \\(v = 2\\pi rf\\) (usando frequência)

**Interpretação Física:**
O objeto percorre uma circunferência completa (\\(2\\pi r\\)) em um período (\\(T\\)).`,
    derivation: `O objeto percorre uma circunferência completa (\\(2\\pi r\\)) em um período (\\(T\\)):

\\[v = \\frac{\\text{distância}}{\\text{tempo}} = \\frac{2\\pi r}{T}\\]

Como a frequência \\(f = \\frac{1}{T}\\), podemos escrever:

\\[v = \\frac{2\\pi r}{1/f} = 2\\pi rf\\]

Onde:
- \\(v\\) = velocidade tangencial (m/s)
- \\(r\\) = raio do círculo (m)
- \\(T\\) = período (s)
- \\(f\\) = frequência (Hz)
- \\(\\pi\\) ≈ 3,14159...`,
    physicalMeaning: "A velocidade tangencial é a velocidade linear do objeto em movimento circular. Ela representa quanta distância o objeto percorre ao longo do círculo por unidade de tempo.",
    examples: [
      {
        description: "Um objeto em movimento circular com raio 5 m e período 2 s",
        calculation: "\\(v = \\frac{2\\pi \\cdot 5}{2} = \\frac{10\\pi}{2} = 5\\pi \\approx 15,7 \\text{ m/s}\\)"
      },
      {
        description: "Um objeto com raio 10 m e frequência 0,5 Hz",
        calculation: "\\(v = 2\\pi \\cdot 10 \\cdot 0,5 = 10\\pi \\approx 31,4 \\text{ m/s}\\)"
      },
      {
        description: "Um carrossel com raio 3 m completa uma volta em 4 s",
        calculation: "\\(v = \\frac{2\\pi \\cdot 3}{4} = \\frac{6\\pi}{4} = 1,5\\pi \\approx 4,71 \\text{ m/s}\\)"
      }
    ],
    commonMistakes: [
      "Confundir velocidade tangencial com velocidade angular",
      "Esquecer de converter período para frequência",
      "Usar diâmetro em vez de raio"
    ],
    applications: [
      "Movimento de satélites",
      "Movimento de rodas e engrenagens",
      "Movimento de planetas",
      "Carrosséis e parques de diversão"
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
- Tem módulo constante no MCU
- É perpendicular à velocidade
- Causa a mudança de direção, não de módulo

**Duas Formas da Fórmula:**
1. \\(a_c = \\frac{v^2}{r}\\) (em função da velocidade tangencial)
2. \\(a_c = \\omega^2r\\) (em função da velocidade angular)

**Interpretação Física:**
Sem aceleração centrípeta, o objeto continuaria em linha reta (primeira lei de Newton). É essa aceleração que "puxa" o objeto para o centro, mantendo-o em movimento circular.`,
    derivation: `Usando a definição de aceleração e geometria:

\\[a_c = \\frac{v^2}{r}\\]

Alternativamente, usando velocidade angular \\(\\omega = \\frac{v}{r}\\):

\\[a_c = \\omega^2r\\]

Onde:
- \\(a_c\\) = aceleração centrípeta (m/s²)
- \\(v\\) = velocidade tangencial (m/s)
- \\(r\\) = raio (m)
- \\(\\omega\\) = velocidade angular (rad/s)`,
    physicalMeaning: "A aceleração centrípeta é a aceleração necessária para manter um objeto em movimento circular. Sem ela, o objeto continuaria em linha reta (primeira lei de Newton). É causada por uma força dirigida para o centro.",
    examples: [
      {
        description: "Um objeto com velocidade tangencial 10 m/s em um raio de 5 m",
        calculation: "\\(a_c = \\frac{10^2}{5} = \\frac{100}{5} = 20 \\text{ m/s}^2\\)"
      },
      {
        description: "Um objeto com velocidade angular 2 rad/s e raio 3 m",
        calculation: "\\(a_c = 2^2 \\cdot 3 = 4 \\cdot 3 = 12 \\text{ m/s}^2\\)"
      },
      {
        description: "Um carro em uma curva com raio 50 m a 20 m/s",
        calculation: "\\(a_c = \\frac{20^2}{50} = \\frac{400}{50} = 8 \\text{ m/s}^2\\)"
      }
    ],
    commonMistakes: [
      "Confundir aceleração centrípeta com aceleração tangencial",
      "Esquecer que é sempre dirigida para o centro",
      "Usar diâmetro em vez de raio"
    ],
    applications: [
      "Movimento de satélites",
      "Curvas de estradas",
      "Movimento de planetas",
      "Máquinas centrífugas"
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
- A velocidade aumenta linearmente com o tempo`,
    derivation: `A queda livre segue as mesmas equações do MRUV, mas com \\(a = g\\):

\\[V = V_0 + g \\cdot t\\]

Onde:
- \\(V\\) = velocidade final (m/s)
- \\(V_0\\) = velocidade inicial (m/s)
- \\(g\\) = aceleração da gravidade ≈ 9,8 m/s²
- \\(t\\) = tempo (s)

Para um objeto solto do repouso (\\(V_0 = 0\\)):
\\[V = g \\cdot t\\]`,
    physicalMeaning: "Esta equação descreve como a velocidade de um objeto aumenta durante a queda livre. A velocidade aumenta linearmente com o tempo, aumentando 9,8 m/s a cada segundo.",
    examples: [
      {
        description: "Um objeto é solto do repouso. Qual sua velocidade após 3 segundos?",
        calculation: "\\(V = 0 + 9,8 \\cdot 3 = 29,4 \\text{ m/s}\\)"
      },
      {
        description: "Um objeto é lançado para baixo com velocidade inicial 5 m/s. Qual sua velocidade após 2 s?",
        calculation: "\\(V = 5 + 9,8 \\cdot 2 = 5 + 19,6 = 24,6 \\text{ m/s}\\)"
      },
      {
        description: "Um objeto é lançado para cima com velocidade inicial 20 m/s. Velocidade após 2 s (g = -9,8 m/s² para cima):",
        calculation: "\\(V = 20 + (-9,8) \\cdot 2 = 20 - 19,6 = 0,4 \\text{ m/s}\\)"
      }
    ],
    commonMistakes: [
      "Esquecer que g é sempre 9,8 m/s² (não 10)",
      "Não considerar a direção (positiva ou negativa)",
      "Confundir com outras equações do MRUV"
    ],
    applications: [
      "Cálculo de tempo de queda",
      "Análise de lançamentos verticais",
      "Movimento de objetos em queda",
      "Problemas de impacto"
    ]
  }
];

export default function Formulas() {
  const [selectedFormula, setSelectedFormula] = useState<Formula>(formulas[0]);

  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, [selectedFormula]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              ← Voltar
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Fórmulas com Explicações Completas</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-2">
              {formulas.map((formula) => (
                <button
                  key={formula.id}
                  onClick={() => setSelectedFormula(formula)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedFormula.id === formula.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-slate-900 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <p className="font-semibold text-sm">{formula.name}</p>
                  <p className="text-xs opacity-75">{formula.category}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2">
            <Card className="p-6 md:p-8 shadow-lg border-0">
              {selectedFormula && (
                <>
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
                          <div className="text-lg font-mono font-bold text-green-600">
                            <MathFormula formula={example.calculation} display={false} />
                          </div>
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
                </>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
