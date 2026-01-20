import React, { useEffect } from "react";
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
  image?: string;
}

const formulas: Formula[] = [
  {
    id: "f-ma",
    name: "Segunda Lei de Newton",
    category: "Leis de Newton",
    latex: "\\vec{F} = m \\cdot \\vec{a}",
    explanation: "A força resultante aplicada a um corpo é proporcional à sua aceleração, sendo a massa a constante de proporcionalidade.",
    deepExplanation: `A Segunda Lei de Newton é a base fundamental da dinâmica clássica. Ela estabelece a relação quantitativa entre força, massa e aceleração, permitindo-nos prever como os objetos se moverão quando submetidos a forças.

**Conceito Fundamental:**
A Segunda Lei de Newton afirma que a aceleração de um objeto é diretamente proporcional à força resultante aplicada e inversamente proporcional à sua massa. Em outras palavras, quanto maior a força, maior a aceleração; quanto maior a massa, menor a aceleração para a mesma força.

**Interpretação Física:**
- Uma força de 1 Newton (N) é definida como a força necessária para acelerar uma massa de 1 kg a 1 m/s²
- Se você dobrar a força, a aceleração dobra
- Se você dobrar a massa, a aceleração cai pela metade
- A força e a aceleração têm sempre a mesma direção

**Características Importantes:**
- É uma equação vetorial (força e aceleração têm direção e sentido)
- A força resultante é a soma vetorial de todas as forças aplicadas
- É válida para qualquer tipo de movimento (retilíneo, circular, etc.)
- É a base para entender dinâmica de máquinas, veículos, estruturas, etc.`,
    derivation: `A Segunda Lei de Newton surge da definição de força como taxa de mudança do momentum (quantidade de movimento):

\\[\\vec{F} = \\frac{d\\vec{p}}{dt} = \\frac{d(m\\vec{v})}{dt}\\]

Para massa constante:

\\[\\vec{F} = m \\frac{d\\vec{v}}{dt} = m \\cdot \\vec{a}\\]

Onde:
- \\(\\vec{F}\\) = força resultante (N)
- \\(m\\) = massa (kg)
- \\(\\vec{a}\\) = aceleração (m/s²)

Derivações úteis:
\\[m = \\frac{F}{a} \\quad \\text{ou} \\quad a = \\frac{F}{m}\\]

Para múltiplas forças:
\\[\\vec{F}_{\\text{resultante}} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + ... = m \\cdot \\vec{a}\\]`,
    physicalMeaning: "A Segunda Lei de Newton quantifica como as forças causam mudanças no movimento. Ela nos permite calcular a aceleração de um objeto quando conhecemos as forças aplicadas, ou vice-versa.",
    examples: [
      {
        description: "Uma força de 20 N é aplicada a uma massa de 4 kg. Qual é a aceleração?",
        calculation: "\\(a = \\frac{F}{m} = \\frac{20 \\text{ N}}{4 \\text{ kg}} = 5 \\text{ m/s}^2\$"
      },
      {
        description: "Um carro de 1000 kg acelera a 2 m/s². Qual é a força resultante?",
        calculation: "\\(F = m \\cdot a = 1000 \\text{ kg} \\times 2 \\text{ m/s}^2 = 2000 \\text{ N}\$"
      },
      {
        description: "Qual é a massa de um objeto que acelera a 3 m/s² quando submetido a 60 N?",
        calculation: "\\(m = \\frac{F}{a} = \\frac{60 \\text{ N}}{3 \\text{ m/s}^2} = 20 \\text{ kg}\$"
      }
    ],
    commonMistakes: [
      "Confundir força com aceleração (força causa aceleração, mas não são a mesma coisa)",
      "Esquecer que é a força RESULTANTE que causa aceleração",
      "Não considerar todas as forças aplicadas (incluindo atrito, resistência do ar, etc.)",
      "Usar a equação sem considerar que é uma equação vetorial (direção importa!)"
    ],
    applications: [
      "Cálculo de força de frenagem em veículos",
      "Projeto de estruturas e máquinas",
      "Análise de movimento de satélites",
      "Engenharia aeronáutica e astronáutica",
      "Segurança em colisões (airbags, cintos de segurança)"
    ]
  },
  {
    id: "trabalho",
    name: "Trabalho de uma Força",
    category: "Energia",
    latex: "W = F \\cdot d \\cdot \\cos(\\theta)",
    explanation: "O trabalho mede a energia transferida por uma força. Depende da força, do deslocamento e do ângulo entre eles.",
    deepExplanation: `O trabalho é um conceito fundamental em física que quantifica a energia transferida por uma força. Diferentemente do conceito cotidiano de trabalho (esforço), o trabalho em física tem uma definição precisa e matemática.

**Conceito Fundamental:**
O trabalho é realizado quando uma força atua sobre um objeto e o move na direção da força. Se a força é perpendicular ao movimento, nenhum trabalho é realizado (mesmo que haja esforço).

**Interpretação Física:**
- Trabalho positivo: força e deslocamento têm a mesma direção (energia é transferida para o objeto)
- Trabalho negativo: força e deslocamento têm direções opostas (energia é removida do objeto)
- Trabalho nulo: força é perpendicular ao deslocamento

**Características Importantes:**
- É uma grandeza escalar (não tem direção)
- Medido em joules (J), onde 1 J = 1 N·m
- Depende do ângulo entre força e deslocamento
- Apenas a componente da força na direção do movimento realiza trabalho`,
    derivation: `O trabalho é definido como o produto escalar da força pelo deslocamento:

\\[W = \\vec{F} \\cdot \\vec{d} = F \\cdot d \\cdot \\cos(\\theta)\\]

Onde:
- \\(W\\) = trabalho (J)
- \\(F\\) = magnitude da força (N)
- \\(d\\) = deslocamento (m)
- \\(\\theta\\) = ângulo entre força e deslocamento

Casos especiais:
- Se \\(\\theta = 0°\\): \\(W = F \\cdot d\\) (máximo trabalho)
- Se \\(\\theta = 90°\\): \\(W = 0\\) (nenhum trabalho)
- Se \\(\\theta = 180°\\): \\(W = -F \\cdot d\\) (trabalho negativo)

Para força variável:
\\[W = \\int_0^d F \\, dx\\]`,
    physicalMeaning: "O trabalho representa a energia transferida por uma força. É a base para entender como as forças modificam a energia cinética e potencial dos objetos.",
    examples: [
      {
        description: "Uma força de 50 N empurra um objeto 10 m na mesma direção da força",
        calculation: "\\(W = 50 \\times 10 \\times \\cos(0°) = 500 \\text{ J}\$"
      },
      {
        description: "Uma força de 30 N atua em um ângulo de 60° sobre um deslocamento de 5 m",
        calculation: "\\(W = 30 \\times 5 \\times \\cos(60°) = 30 \\times 5 \\times 0.5 = 75 \\text{ J}\$"
      },
      {
        description: "Uma força de 20 N atua perpendicular ao deslocamento de 8 m",
        calculation: "\\(W = 20 \\times 8 \\times \\cos(90°) = 0 \\text{ J}\$"
      }
    ],
    commonMistakes: [
      "Confundir trabalho com força (força causa trabalho, mas não são iguais)",
      "Esquecer do ângulo entre força e deslocamento",
      "Usar o deslocamento total em vez da componente na direção da força",
      "Não considerar que trabalho pode ser negativo"
    ],
    applications: [
      "Cálculo de energia em máquinas",
      "Análise de eficiência de motores",
      "Determinação de potência necessária",
      "Projeto de sistemas de elevação e transporte",
      "Análise de colisões e impactos"
    ]
  },
  {
    id: "energia-cinetica",
    name: "Energia Cinética",
    category: "Energia",
    latex: "E_c = \\frac{1}{2} \\cdot m \\cdot v^2",
    explanation: "A energia cinética é a energia do movimento. Depende da massa e do quadrado da velocidade.",
    deepExplanation: `A energia cinética é a energia que um objeto possui devido ao seu movimento. É uma das formas mais importantes de energia e está diretamente relacionada ao trabalho realizado sobre o objeto.

**Conceito Fundamental:**
A energia cinética aumenta com a massa e com o quadrado da velocidade. Isso significa que dobrar a velocidade quadruplica a energia cinética, enquanto dobrar a massa apenas a duplica.

**Interpretação Física:**
- Qualquer objeto em movimento possui energia cinética
- A energia cinética é sempre positiva (nunca negativa)
- Depende do referencial (velocidade é relativa)
- É a energia necessária para acelerar um objeto do repouso até uma certa velocidade

**Características Importantes:**
- É uma grandeza escalar
- Medida em joules (J)
- Aumenta com o quadrado da velocidade (efeito muito significativo)
- Está relacionada ao trabalho pelo Teorema do Trabalho-Energia`,
    derivation: `A energia cinética pode ser derivada do Teorema do Trabalho-Energia. Se um objeto é acelerado do repouso até uma velocidade v por uma força F:

\\[W = F \\cdot d = m \\cdot a \\cdot d\\]

Usando a equação cinemática \\(v^2 = v_0^2 + 2ad\\), com \\(v_0 = 0\\):

\\[v^2 = 2ad \\Rightarrow ad = \\frac{v^2}{2}\\]

Portanto:

\\[W = m \\cdot \\frac{v^2}{2} = \\frac{1}{2}mv^2 = E_c\\]

Teorema do Trabalho-Energia:
\\[W = \\Delta E_c = E_{c,f} - E_{c,i} = \\frac{1}{2}m(v_f^2 - v_i^2)\\]`,
    physicalMeaning: "A energia cinética representa a capacidade de um objeto em movimento realizar trabalho. É a energia que seria necessária para parar o objeto ou que foi necessária para acelerá-lo.",
    examples: [
      {
        description: "Um objeto de 2 kg se move a 5 m/s. Qual é sua energia cinética?",
        calculation: "\\(E_c = \\frac{1}{2} \\times 2 \\times 5^2 = \\frac{1}{2} \\times 2 \\times 25 = 25 \\text{ J}\$"
      },
      {
        description: "Um carro de 1000 kg se move a 20 m/s. Qual é sua energia cinética?",
        calculation: "\\(E_c = \\frac{1}{2} \\times 1000 \\times 20^2 = \\frac{1}{2} \\times 1000 \\times 400 = 200000 \\text{ J}\$"
      },
      {
        description: "Se a velocidade de um objeto dobra, como muda sua energia cinética?",
        calculation: "\\(E_c' = \\frac{1}{2}m(2v)^2 = \\frac{1}{2}m \\times 4v^2 = 4 \\times \\frac{1}{2}mv^2 = 4E_c\\) (quadruplica!)"
      }
    ],
    commonMistakes: [
      "Confundir energia cinética com velocidade",
      "Esquecer que a velocidade está ao quadrado (pequenas mudanças têm grandes efeitos)",
      "Usar velocidade em km/h sem converter para m/s",
      "Pensar que energia cinética pode ser negativa"
    ],
    applications: [
      "Cálculo de distância de frenagem em veículos",
      "Análise de colisões e impactos",
      "Projeto de sistemas de segurança",
      "Determinação de energia em máquinas",
      "Análise de movimentos de projéteis"
    ]
  },
  {
    id: "energia-potencial",
    name: "Energia Potencial Gravitacional",
    category: "Energia",
    latex: "E_p = m \\cdot g \\cdot h",
    explanation: "A energia potencial gravitacional é a energia armazenada em um objeto devido à sua altura. Depende da massa, da gravidade e da altura.",
    deepExplanation: `A energia potencial gravitacional é a energia que um objeto possui devido à sua posição em um campo gravitacional. Representa a capacidade do objeto de realizar trabalho ao cair.

**Conceito Fundamental:**
A energia potencial gravitacional depende da altura do objeto em relação a um ponto de referência. Quanto maior a altura, maior a energia potencial. Quando o objeto cai, essa energia potencial é convertida em energia cinética.

**Interpretação Física:**
- A energia potencial é relativa ao ponto de referência escolhido
- Objetos mais altos têm maior energia potencial
- A energia potencial é convertida em cinética quando o objeto cai
- É a energia "armazenada" que pode ser liberada

**Características Importantes:**
- É uma grandeza escalar
- Medida em joules (J)
- Depende do ponto de referência (pode ser positiva, negativa ou zero)
- Está relacionada ao trabalho realizado contra a gravidade`,
    derivation: `A energia potencial gravitacional é definida como o trabalho realizado contra a gravidade para elevar um objeto a uma altura h:

\\[E_p = W = F \\cdot h = m \\cdot g \\cdot h\\]

Onde:
- \\(E_p\\) = energia potencial (J)
- \\(m\\) = massa (kg)
- \\(g\\) = aceleração da gravidade (m/s²)
- \\(h\\) = altura em relação ao ponto de referência (m)

Variação de energia potencial:
\\[\\Delta E_p = m \\cdot g \\cdot \\Delta h = m \\cdot g \\cdot (h_f - h_i)\\]

Relação com trabalho:
\\[W = -\\Delta E_p = -(E_{p,f} - E_{p,i})\\]`,
    physicalMeaning: "A energia potencial gravitacional representa a energia armazenada em um objeto devido à sua posição. É a energia que será convertida em cinética quando o objeto cair.",
    examples: [
      {
        description: "Um objeto de 5 kg está a uma altura de 10 m. Qual é sua energia potencial? (g = 10 m/s²)",
        calculation: "\\(E_p = 5 \\times 10 \\times 10 = 500 \\text{ J}\$"
      },
      {
        description: "Um livro de 2 kg é levantado de 1 m para 3 m de altura. Qual é a variação de energia potencial?",
        calculation: "\\(\\Delta E_p = 2 \\times 10 \\times (3 - 1) = 2 \\times 10 \\times 2 = 40 \\text{ J}\$"
      },
      {
        description: "Se um objeto cai de uma altura de 20 m, qual é a energia potencial perdida?",
        calculation: "\\(\\Delta E_p = m \\times 10 \\times 20 = 200m \\text{ J}\\) (depende da massa)"
      }
    ],
    commonMistakes: [
      "Esquecer que energia potencial depende do ponto de referência",
      "Confundir energia potencial com altura (altura é a causa, energia é o efeito)",
      "Usar altura em cm em vez de metros",
      "Não considerar que a energia potencial pode ser negativa em relação ao ponto de referência"
    ],
    applications: [
      "Cálculo de energia em sistemas de elevação",
      "Análise de barragens e reservatórios",
      "Projeto de montanhas-russas",
      "Determinação de energia em quedas de água",
      "Análise de sistemas de armazenamento de energia"
    ]
  },
  {
    id: "momentum",
    name: "Momentum (Quantidade de Movimento)",
    category: "Leis de Conservação",
    latex: "\\vec{p} = m \\cdot \\vec{v}",
    explanation: "O momentum é o produto da massa pela velocidade. Representa a quantidade de movimento de um objeto.",
    deepExplanation: `O momentum (ou quantidade de movimento) é uma grandeza fundamental que quantifica o movimento de um objeto. É especialmente importante para análise de colisões e interações entre objetos.

**Conceito Fundamental:**
O momentum é o produto da massa pela velocidade. Um objeto pesado se movendo lentamente pode ter o mesmo momentum que um objeto leve se movendo rapidamente. O momentum é conservado em sistemas isolados, o que o torna extremamente útil para análise de colisões.

**Interpretação Física:**
- Representa a "quantidade" de movimento de um objeto
- Quanto maior o momentum, mais difícil é parar o objeto
- É uma grandeza vetorial (tem direção e sentido)
- Está relacionado à força pelo conceito de impulso

**Características Importantes:**
- Medido em kg·m/s
- É conservado em colisões (se não há forças externas)
- Está relacionado à força pela Segunda Lei de Newton: \\(F = \\frac{dp}{dt}\\)
- É fundamental para entender colisões e explosões`,
    derivation: `O momentum é definido como o produto da massa pela velocidade:

\\[\\vec{p} = m \\cdot \\vec{v}\\]

Onde:
- \\(\\vec{p}\\) = momentum (kg·m/s)
- \\(m\\) = massa (kg)
- \\(\\vec{v}\\) = velocidade (m/s)

Relação com força (Segunda Lei de Newton):
\\[\\vec{F} = \\frac{d\\vec{p}}{dt} = \\frac{d(m\\vec{v})}{dt} = m \\frac{d\\vec{v}}{dt} = m \\cdot \\vec{a}\\]

Impulso (mudança de momentum):
\\[\\vec{I} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m(\\vec{v}_f - \\vec{v}_i)\\]`,
    physicalMeaning: "O momentum quantifica a dificuldade de parar um objeto. Um objeto com grande momentum (grande massa ou alta velocidade) é difícil de parar.",
    examples: [
      {
        description: "Um carro de 1000 kg se move a 20 m/s. Qual é seu momentum?",
        calculation: "\\(p = 1000 \\times 20 = 20000 \\text{ kg·m/s}\$"
      },
      {
        description: "Uma bola de 0.5 kg se move a 30 m/s. Qual é seu momentum?",
        calculation: "\\(p = 0.5 \\times 30 = 15 \\text{ kg·m/s}\$"
      },
      {
        description: "Qual é a velocidade de um objeto de 2 kg com momentum de 50 kg·m/s?",
        calculation: "\\(v = \\frac{p}{m} = \\frac{50}{2} = 25 \\text{ m/s}\$"
      }
    ],
    commonMistakes: [
      "Confundir momentum com energia cinética (são diferentes!)",
      "Esquecer que momentum é vetorial (direção importa)",
      "Não considerar que momentum é conservado em colisões",
      "Usar velocidade em km/h sem converter para m/s"
    ],
    applications: [
      "Análise de colisões de veículos",
      "Projeto de sistemas de segurança",
      "Análise de explosões e fragmentação",
      "Movimento de foguetes e propulsão",
      "Análise de esportes (impacto em bolas, etc.)"
    ]
  },
  {
    id: "plano-inclinado",
    name: "Força em um Plano Inclinado",
    category: "Força e Atrito",
    latex: "F_{\\parallel} = m \\cdot g \\cdot \\sin(\\theta) \\quad \\text{e} \\quad N = m \\cdot g \\cdot \\cos(\\theta)",
    explanation: "Em um plano inclinado, o peso de um objeto é decomposto em duas componentes: uma paralela ao plano (que causa deslizamento) e outra perpendicular ao plano (que causa a força normal).",
    deepExplanation: `O plano inclinado é um dos sistemas mais importantes em física, pois demonstra como as forças podem ser decompostas em componentes. Quando um objeto está em um plano inclinado, seu peso não atua apenas na direção vertical, mas precisa ser analisado em relação ao plano.

**Conceito Fundamental:**
O peso de um objeto em um plano inclinado pode ser decomposto em duas componentes perpendiculares:
1. **Componente paralela ao plano** (F_paralelo): causa o deslizamento do objeto para baixo
2. **Componente perpendicular ao plano** (F_perpendicular): comprime o objeto contra o plano

**Interpretação Física:**
- A componente paralela aumenta com o ângulo (quanto mais inclinado, maior a tendência de deslizar)
- A componente perpendicular diminui com o ângulo (quanto mais inclinado, menor a pressão sobre o plano)
- Quando θ = 0° (plano horizontal): F_paralelo = 0, N = mg (todo o peso é normal)
- Quando θ = 90° (plano vertical): F_paralelo = mg, N = 0 (todo o peso é paralelo)
- A força normal é sempre perpendicular ao plano, não à vertical

**Características Importantes:**
- As duas componentes são perpendiculares entre si
- Sua soma vetorial é igual ao peso (mg)
- A força de atrito depende da força normal, não do peso total
- O ângulo θ é medido entre o plano e a horizontal`,
    derivation: `A decomposição do peso em um plano inclinado é feita usando trigonometria. Se o ângulo entre o plano e a horizontal é θ:

O peso atua verticalmente para baixo: \\(P = m \\cdot g\\)

Componente paralela ao plano (ao longo da inclinação):
\\[F_{\\parallel} = m \\cdot g \\cdot \\sin(\\theta)\\]

Componente perpendicular ao plano (normal):
\\[F_{\\perp} = m \\cdot g \\cdot \\cos(\\theta)\\]

Força Normal (reação do plano):
\\[N = F_{\\perp} = m \\cdot g \\cdot \\cos(\\theta)\\]

Força de Atrito (se houver movimento):
\\[f = \\mu \\cdot N = \\mu \\cdot m \\cdot g \\cdot \\cos(\\theta)\\]

Aceleração do objeto (sem atrito):
\\[a = g \\cdot \\sin(\\theta)\\]

Aceleração do objeto (com atrito):
\\[a = g(\\sin(\\theta) - \\mu \\cdot \\cos(\\theta))\\]`,
    physicalMeaning: "O plano inclinado mostra como as forças se comportam em diferentes orientações. A decomposição em componentes paralela e perpendicular é essencial para entender o movimento em superfícies inclinadas e para calcular a força de atrito.",
    examples: [
      {
        description: "Um bloco de 10 kg em um plano inclinado a 30°. Qual é a componente paralela do peso?",
        calculation: "\\(F_{\\parallel} = 10 \\times 10 \\times \\sin(30°) = 10 \\times 10 \\times 0.5 = 50 \\text{ N}\$"
      },
      {
        description: "Qual é a força normal do mesmo bloco?",
        calculation: "\\(N = 10 \\times 10 \\times \\cos(30°) = 10 \\times 10 \\times 0.866 = 86.6 \\text{ N}\$"
      },
      {
        description: "Se o coeficiente de atrito é 0.2, qual é a força de atrito?",
        calculation: "\\(f = 0.2 \\times 86.6 = 17.32 \\text{ N}\$"
      },
      {
        description: "Qual é a aceleração do bloco (sem atrito)?",
        calculation: "\\(a = 10 \\times \\sin(30°) = 10 \\times 0.5 = 5 \\text{ m/s}^2\$"
      }
    ],
    commonMistakes: [
      "Confundir o ângulo do plano com o ângulo que o peso faz com o plano (são complementares!)",
      "Usar o peso total em vez das componentes para calcular atrito",
      "Esquecer que a força normal não é igual ao peso em um plano inclinado",
      "Não considerar que a aceleração depende do ângulo do plano"
    ],
    applications: [
      "Análise de objetos deslizando em rampas",
      "Projeto de escadas e rampas de acessibilidade",
      "Cálculo de força em correias transportadoras inclinadas",
      "Análise de segurança em estradas com declive",
      "Projeto de sistemas de frenagem em veículos"
    ],
    image: "/images/plano-inclinado-forcas.png"
  },
  {
    id: "potencia",
    name: "Potência",
    category: "Energia",
    latex: "P = \\frac{W}{\\Delta t}",
    explanation: "A potência mede a taxa de realização de trabalho. É a quantidade de energia transferida por unidade de tempo.",
    deepExplanation: `A potência é uma grandeza que quantifica a rapidez com que o trabalho é realizado ou a energia é transferida. Dois motores podem realizar o mesmo trabalho, mas um pode ser mais potente se fizer o trabalho em menos tempo.

**Conceito Fundamental:**
A potência é a taxa de mudança de energia. Quanto maior a potência, mais rápido o trabalho é realizado. A potência é medida em watts (W), onde 1 W = 1 J/s.

**Interpretação Física:**
- Um motor de alta potência realiza trabalho rapidamente
- A potência depende tanto da quantidade de trabalho quanto do tempo
- Potência constante significa trabalho proporcional ao tempo
- A potência instantânea pode variar, enquanto a potência média é constante

**Características Importantes:**
- Medida em watts (W) ou quilowatts (kW)
- 1 cavalo-vapor (hp) ≈ 746 W
- Está relacionada à força e velocidade: \\(P = F \\cdot v\\)
- É fundamental para projeto de máquinas e motores`,
    derivation: `A potência média é definida como o trabalho realizado dividido pelo tempo:

\\[P = \\frac{W}{\\Delta t}\\]

Onde:
- \\(P\\) = potência (W)
- \\(W\\) = trabalho (J)
- \\(\\Delta t\\) = intervalo de tempo (s)

Potência instantânea:
\\[P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v} = F \\cdot v \\cdot \\cos(\\theta)\\]

Relação com energia:
\\[P = \\frac{dE}{dt}\\]

Para força constante:
\\[P = F \\cdot v\\]`,
    physicalMeaning: "A potência representa a rapidez com que a energia é transferida ou o trabalho é realizado. É uma medida de eficiência e capacidade de uma máquina ou motor.",
    examples: [
      {
        description: "Um motor realiza 1000 J de trabalho em 5 segundos. Qual é sua potência?",
        calculation: "\\(P = \\frac{1000}{5} = 200 \\text{ W}\$"
      },
      {
        description: "Uma lâmpada de 60 W funciona por 2 horas. Quanto de energia ela consome?",
        calculation: "\\(E = P \\times t = 60 \\times (2 \\times 3600) = 60 \\times 7200 = 432000 \\text{ J} = 0.12 \\text{ kWh}\$"
      },
      {
        description: "Uma força de 50 N atua sobre um objeto que se move a 10 m/s. Qual é a potência?",
        calculation: "\\(P = F \\times v = 50 \\times 10 = 500 \\text{ W}\$"
      }
    ],
    commonMistakes: [
      "Confundir potência com energia (potência é taxa de energia)",
      "Esquecer de converter tempo para segundos",
      "Não considerar que potência pode variar com o tempo",
      "Usar velocidade em km/h sem converter para m/s"
    ],
    applications: [
      "Especificação de motores e máquinas",
      "Cálculo de consumo de energia elétrica",
      "Análise de performance de veículos",
      "Projeto de sistemas de elevação",
      "Análise de eficiência energética"
    ]
  }
];

export default function DynamicsFormulas() {
  const [selectedFormula, setSelectedFormula] = React.useState(formulas[0]);

  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, [selectedFormula]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/dinamica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Fórmulas de Dinâmica</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Formula Selector */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-lg md:text-2xl font-bold text-slate-900 mb-6">Selecione uma Fórmula</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {formulas.map((formula) => (
              <button
                key={formula.id}
                onClick={() => setSelectedFormula(formula)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedFormula.id === formula.id
                    ? "border-purple-500 bg-purple-50"
                    : "border-slate-200 bg-white hover:border-purple-300"
                }`}
              >
                <p className="font-semibold text-slate-900">{formula.name}</p>
                <p className="text-sm text-slate-600">{formula.category}</p>
              </button>
            ))}
          </div>
        </Card>

        {/* Selected Formula Details */}
        {selectedFormula && (
          <Card className="p-4 md:p-8 shadow-lg border-0">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">{selectedFormula.name}</h2>

            {/* Formula */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200 overflow-x-auto mb-8">
              <p className="text-center text-sm md:text-lg font-semibold mb-4">Fórmula Principal:</p>
              <MathFormula formula={selectedFormula.latex} className="text-center text-2xl md:text-4xl mb-4" />
            </div>

            {/* Image if available */}
            {selectedFormula.image && (
              <div className="mb-8 flex justify-center">
                <img src={selectedFormula.image} alt={selectedFormula.name} className="max-w-2xl w-full rounded-lg shadow-md" />
              </div>
            )}

            {/* Explanation */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Explicação Simples</h3>
                <p className="text-slate-700 leading-relaxed">{selectedFormula.explanation}</p>
              </div>

              {/* Deep Explanation */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Explicação Detalhada</h3>
                <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">{selectedFormula.deepExplanation}</div>
              </div>

              {/* Derivation */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 overflow-x-auto">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Derivação Matemática</h3>
                <div className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedFormula.derivation }} />
              </div>

              {/* Physical Meaning */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Significado Físico</h3>
                <p className="text-slate-700 leading-relaxed">{selectedFormula.physicalMeaning}</p>
              </div>

              {/* Examples */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Exemplos Práticos</h3>
                <div className="space-y-4">
                  {selectedFormula.examples.map((example, idx) => (
                    <div key={idx} className="bg-white p-4 rounded border border-orange-100">
                      <p className="font-semibold text-slate-900 mb-2">{example.description}</p>
                      <div className="bg-orange-50 p-3 rounded overflow-x-auto">
                        <MathFormula formula={example.calculation} className="text-slate-700" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Erros Comuns</h3>
                <ul className="space-y-2">
                  {selectedFormula.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Aplicações Práticas</h3>
                <ul className="space-y-2">
                  {selectedFormula.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <span className="text-indigo-500 font-bold mt-1">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        )}
      </section>
    </div>
  );
}
