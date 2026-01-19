export const dinamicaTopics = [
  {
    id: "forcas",
    title: "Força e Leis de Newton",
    icon: "⚡",
    description: "Compreenda o conceito de força e as três leis fundamentais do movimento",
    sections: [
      {
        title: "O que é Força?",
        content: `Força é uma grandeza vetorial que causa mudanças no estado de movimento de um objeto. É medida em Newtons (N) no Sistema Internacional de Unidades.

Uma força pode:
- Alterar a velocidade de um objeto
- Mudar a direção do movimento
- Deformar um objeto
- Produzir rotação

As forças podem ser de contato (como um empurrão) ou de ação à distância (como a gravidade).`
      },
      {
        title: "Primeira Lei de Newton (Lei da Inércia)",
        content: `Um objeto em repouso permanece em repouso, e um objeto em movimento permanece em movimento com velocidade constante, a menos que uma força externa atue sobre ele.

Isso significa que:
- Objetos tendem a manter seu estado de movimento
- É necessária uma força para mudar o movimento
- A inércia é a resistência de um objeto a mudanças de movimento

Exemplo: Um carro que freia repentinamente. Os passageiros tendem a continuar se movendo para frente devido à inércia.`,
        formula: "\\sum F = 0 \\Rightarrow v = \\text{constante}"
      },
      {
        title: "Segunda Lei de Newton (Lei da Aceleração)",
        content: `A aceleração de um objeto é diretamente proporcional à força resultante que atua sobre ele e inversamente proporcional à sua massa.

Isso significa que:
- Quanto maior a força, maior a aceleração
- Quanto maior a massa, menor a aceleração
- A aceleração ocorre na mesma direção da força

Exemplo: Empurrar um carrinho vazio é mais fácil do que empurrar um carrinho cheio, pois o carrinho vazio tem menor massa.`,
        formula: "F = m \\cdot a"
      },
      {
        title: "Terceira Lei de Newton (Lei da Ação e Reação)",
        content: `Para toda ação, existe uma reação igual e oposta. As forças sempre atuam em pares.

Isso significa que:
- Se um objeto A exerce força em B, B exerce força igual em A
- As forças têm mesma magnitude mas direções opostas
- Nunca há uma força isolada na natureza

Exemplo: Quando você pula, você empurra o chão para baixo, e o chão empurra você para cima com a mesma força.`,
        formula: "F_{AB} = -F_{BA}"
      }
    ]
  },
  {
    id: "atrito",
    title: "Força de Atrito",
    icon: "🔄",
    description: "Entenda como o atrito afeta o movimento dos objetos",
    sections: [
      {
        title: "O que é Atrito?",
        content: `Atrito é uma força que se opõe ao movimento relativo entre duas superfícies em contato. Sempre atua contrária à direção do movimento.

Características do atrito:
- Depende da natureza das superfícies
- Depende da força normal entre as superfícies
- Não depende da área de contato
- Não depende da velocidade do objeto`
      },
      {
        title: "Atrito Estático",
        content: `É a força de atrito que atua quando um objeto está em repouso e tende a se mover.

Características:
- Aumenta com a força aplicada até um máximo
- Máximo quando o objeto está prestes a se mover
- Pode variar de zero até μₛ·N

Exemplo: Empurrar uma caixa no chão. Enquanto ela não se move, o atrito estático equilibra a força aplicada.`,
        formula: "f_s \\leq \\mu_s \\cdot N"
      },
      {
        title: "Atrito Cinético",
        content: `É a força de atrito que atua quando um objeto está em movimento.

Características:
- É constante enquanto o objeto se move
- Sempre menor que o atrito estático máximo
- Depende do coeficiente de atrito cinético

Exemplo: Uma caixa deslizando no chão. O atrito cinético é constante enquanto ela se move.`,
        formula: "f_k = \\mu_k \\cdot N"
      }
    ]
  },
  {
    id: "trabalho",
    title: "Trabalho e Potência",
    icon: "💪",
    description: "Aprenda sobre trabalho realizado por forças e potência",
    sections: [
      {
        title: "O que é Trabalho?",
        content: `Trabalho é a energia transferida para um objeto por uma força que o desloca. É uma grandeza escalar medida em Joules (J).

O trabalho é realizado quando:
- Uma força atua sobre um objeto
- O objeto se desloca na direção (ou componente) da força
- Há transferência de energia

Trabalho nulo quando:
- A força é perpendicular ao deslocamento
- Não há deslocamento
- A força e o deslocamento são opostos`,
        formula: "W = F \\cdot d \\cdot \\cos(\\theta)"
      },
      {
        title: "Potência",
        content: `Potência é a taxa de realização de trabalho. Indica quão rapidamente o trabalho é realizado. Medida em Watts (W).

Características:
- Potência alta: trabalho realizado rapidamente
- Potência baixa: trabalho realizado lentamente
- Depende do trabalho e do tempo

Exemplo: Subir escadas correndo (alta potência) vs. subir escadas lentamente (baixa potência).`,
        formula: "P = \\frac{W}{t} = F \\cdot v"
      }
    ]
  },
  {
    id: "energia",
    title: "Energia Cinética e Potencial",
    icon: "⚡",
    description: "Explore os tipos de energia e conservação de energia",
    sections: [
      {
        title: "Energia Cinética",
        content: `É a energia que um objeto possui devido ao seu movimento. Todo objeto em movimento tem energia cinética.

Características:
- Depende da massa do objeto
- Depende do quadrado da velocidade
- Sempre positiva ou nula
- Aumenta com a velocidade

Exemplo: Uma bola em movimento tem energia cinética. Quanto mais rápido ela se move, maior sua energia cinética.`,
        formula: "E_c = \\frac{1}{2} m v^2"
      },
      {
        title: "Energia Potencial Gravitacional",
        content: `É a energia que um objeto possui devido à sua posição em um campo gravitacional.

Características:
- Depende da massa do objeto
- Depende da altura em relação a um ponto de referência
- Depende da aceleração da gravidade
- Aumenta com a altura

Exemplo: Um livro em cima de uma mesa tem energia potencial. Se cair, essa energia é convertida em energia cinética.`,
        formula: "E_p = m \\cdot g \\cdot h"
      },
      {
        title: "Conservação de Energia",
        content: `A energia total de um sistema isolado permanece constante. A energia pode ser convertida de uma forma para outra, mas não pode ser criada ou destruída.

Em um sistema sem atrito:
- Energia cinética + Energia potencial = Constante
- Quando a altura diminui, a velocidade aumenta
- Quando a altura aumenta, a velocidade diminui

Exemplo: Um pêndulo. No ponto mais alto, tem máxima energia potencial e mínima cinética. No ponto mais baixo, tem mínima potencial e máxima cinética.`,
        formula: "E_c + E_p = \\text{constante}"
      }
    ]
  },
  {
    id: "momentum",
    title: "Momentum e Impulso",
    icon: "💥",
    description: "Compreenda momentum, impulso e colisões",
    sections: [
      {
        title: "Momentum (Quantidade de Movimento)",
        content: `Momentum é o produto da massa de um objeto pela sua velocidade. É uma grandeza vetorial medida em kg·m/s.

Características:
- Depende da massa e da velocidade
- Objetos mais pesados têm mais momentum
- Objetos mais rápidos têm mais momentum
- Sempre na mesma direção da velocidade

Exemplo: Um caminhão em movimento tem muito momentum. Um carro com mesma velocidade tem menos momentum porque tem menor massa.`,
        formula: "p = m \\cdot v"
      },
      {
        title: "Impulso",
        content: `Impulso é o produto da força pelo tempo de atuação. Causa mudança no momentum.

Características:
- Relaciona força e tempo
- Quanto maior a força ou o tempo, maior o impulso
- Causa mudança no momentum
- Medido em N·s

Exemplo: Um soco rápido (força grande, tempo pequeno) pode ter o mesmo impulso que um empurrão lento (força pequena, tempo grande).`,
        formula: "I = F \\cdot \\Delta t = \\Delta p"
      },
      {
        title: "Conservação de Momentum",
        content: `Em um sistema isolado, o momentum total é conservado. Se nenhuma força externa atua, o momentum antes é igual ao momentum depois.

Aplicações:
- Colisões entre objetos
- Explosões
- Reações químicas
- Propulsão de foguetes

Exemplo: Em uma colisão entre dois carros, o momentum total antes da colisão é igual ao momentum total depois.`,
        formula: "p_{\\text{inicial}} = p_{\\text{final}}"
      }
    ]
  }
];

export const dinamicaFormulas = [
  {
    id: "segunda-lei",
    name: "Segunda Lei de Newton",
    latex: "F = m \\cdot a",
    explanation: "A força resultante é igual à massa multiplicada pela aceleração.",
    variables: {
      F: "Força resultante (N)",
      m: "Massa (kg)",
      a: "Aceleração (m/s²)"
    },
    derivation: "Partindo do conceito de que força causa aceleração, e que a aceleração é proporcional à força e inversamente proporcional à massa.",
    examples: [
      {
        description: "Um objeto de 5 kg é empurrado com uma força de 20 N. Qual é a aceleração?",
        solution: "a = F/m = 20/5 = 4 m/s²"
      }
    ]
  },
  {
    id: "atrito-cinetico",
    name: "Atrito Cinético",
    latex: "f_k = \\mu_k \\cdot N",
    explanation: "A força de atrito cinético é o coeficiente de atrito multiplicado pela força normal.",
    variables: {
      "f_k": "Força de atrito cinético (N)",
      "\\mu_k": "Coeficiente de atrito cinético (adimensional)",
      N: "Força normal (N)"
    },
    derivation: "O atrito é proporcional à força normal entre as superfícies, com constante de proporcionalidade μₖ.",
    examples: [
      {
        description: "Um bloco de 10 kg desliza em uma superfície com μₖ = 0,2. Qual é a força de atrito?",
        solution: "N = m·g = 10·10 = 100 N; f_k = 0,2·100 = 20 N"
      }
    ]
  },
  {
    id: "trabalho",
    name: "Trabalho",
    latex: "W = F \\cdot d \\cdot \\cos(\\theta)",
    explanation: "O trabalho é a força multiplicada pela distância e pelo cosseno do ângulo entre eles.",
    variables: {
      W: "Trabalho (J)",
      F: "Força (N)",
      d: "Deslocamento (m)",
      "\\theta": "Ângulo entre força e deslocamento"
    },
    derivation: "Apenas a componente da força na direção do deslocamento realiza trabalho.",
    examples: [
      {
        description: "Uma força de 50 N é aplicada em um ângulo de 30° para deslocar um objeto 10 m. Qual é o trabalho?",
        solution: "W = 50·10·cos(30°) = 50·10·0,866 = 433 J"
      }
    ]
  },
  {
    id: "potencia",
    name: "Potência",
    latex: "P = \\frac{W}{t}",
    explanation: "A potência é o trabalho dividido pelo tempo.",
    variables: {
      P: "Potência (W)",
      W: "Trabalho (J)",
      t: "Tempo (s)"
    },
    derivation: "Potência mede a taxa de realização de trabalho.",
    examples: [
      {
        description: "Um trabalho de 1000 J é realizado em 5 segundos. Qual é a potência?",
        solution: "P = 1000/5 = 200 W"
      }
    ]
  },
  {
    id: "energia-cinetica",
    name: "Energia Cinética",
    latex: "E_c = \\frac{1}{2} m v^2",
    explanation: "A energia cinética é metade da massa multiplicada pelo quadrado da velocidade.",
    variables: {
      "E_c": "Energia cinética (J)",
      m: "Massa (kg)",
      v: "Velocidade (m/s)"
    },
    derivation: "Derivada do trabalho necessário para acelerar um objeto do repouso até uma velocidade v.",
    examples: [
      {
        description: "Um objeto de 2 kg se move a 10 m/s. Qual é sua energia cinética?",
        solution: "E_c = (1/2)·2·10² = 1·100 = 100 J"
      }
    ]
  },
  {
    id: "energia-potencial",
    name: "Energia Potencial Gravitacional",
    latex: "E_p = m \\cdot g \\cdot h",
    explanation: "A energia potencial é a massa multiplicada pela gravidade e pela altura.",
    variables: {
      "E_p": "Energia potencial (J)",
      m: "Massa (kg)",
      g: "Aceleração da gravidade (m/s²)",
      h: "Altura (m)"
    },
    derivation: "Trabalho necessário para elevar um objeto de massa m a uma altura h contra a gravidade.",
    examples: [
      {
        description: "Um objeto de 5 kg está a 20 m de altura. Qual é sua energia potencial? (g = 10 m/s²)",
        solution: "E_p = 5·10·20 = 1000 J"
      }
    ]
  },
  {
    id: "momentum",
    name: "Momentum",
    latex: "p = m \\cdot v",
    explanation: "O momentum é a massa multiplicada pela velocidade.",
    variables: {
      p: "Momentum (kg·m/s)",
      m: "Massa (kg)",
      v: "Velocidade (m/s)"
    },
    derivation: "Grandeza que mede a quantidade de movimento de um objeto.",
    examples: [
      {
        description: "Um objeto de 10 kg se move a 5 m/s. Qual é seu momentum?",
        solution: "p = 10·5 = 50 kg·m/s"
      }
    ]
  },
  {
    id: "impulso",
    name: "Impulso",
    latex: "I = F \\cdot \\Delta t",
    explanation: "O impulso é a força multiplicada pelo intervalo de tempo.",
    variables: {
      I: "Impulso (N·s)",
      F: "Força (N)",
      "\\Delta t": "Intervalo de tempo (s)"
    },
    derivation: "Impulso causa mudança no momentum de um objeto.",
    examples: [
      {
        description: "Uma força de 100 N atua por 2 segundos. Qual é o impulso?",
        solution: "I = 100·2 = 200 N·s"
      }
    ]
  }
];

export const dinamicaQuestions = [
  {
    id: 1,
    question: "Um objeto de 5 kg é empurrado com uma força de 25 N. Qual é a aceleração?",
    options: [
      { text: "5 m/s²", correct: true },
      { text: "10 m/s²", correct: false },
      { text: "2 m/s²", correct: false },
      { text: "20 m/s²", correct: false }
    ],
    explanation: "Usando F = m·a, temos a = F/m = 25/5 = 5 m/s²"
  },
  {
    id: 2,
    question: "Qual é a energia cinética de um objeto de 2 kg movendo-se a 10 m/s?",
    options: [
      { text: "20 J", correct: false },
      { text: "100 J", correct: true },
      { text: "200 J", correct: false },
      { text: "50 J", correct: false }
    ],
    explanation: "E_c = (1/2)·m·v² = (1/2)·2·10² = 1·100 = 100 J"
  },
  {
    id: 3,
    question: "Um objeto de 10 kg está a 5 m de altura. Qual é sua energia potencial? (g = 10 m/s²)",
    options: [
      { text: "50 J", correct: false },
      { text: "500 J", correct: true },
      { text: "100 J", correct: false },
      { text: "1000 J", correct: false }
    ],
    explanation: "E_p = m·g·h = 10·10·5 = 500 J"
  },
  {
    id: 4,
    question: "Qual é o momentum de um objeto de 8 kg movendo-se a 3 m/s?",
    options: [
      { text: "11 kg·m/s", correct: false },
      { text: "24 kg·m/s", correct: true },
      { text: "5 kg·m/s", correct: false },
      { text: "16 kg·m/s", correct: false }
    ],
    explanation: "p = m·v = 8·3 = 24 kg·m/s"
  },
  {
    id: 5,
    question: "Uma força de 50 N atua sobre um objeto por 4 segundos. Qual é o impulso?",
    options: [
      { text: "12,5 N·s", correct: false },
      { text: "200 N·s", correct: true },
      { text: "54 N·s", correct: false },
      { text: "46 N·s", correct: false }
    ],
    explanation: "I = F·Δt = 50·4 = 200 N·s"
  },
  {
    id: 6,
    question: "Um trabalho de 500 J é realizado em 10 segundos. Qual é a potência?",
    options: [
      { text: "50 W", correct: true },
      { text: "5000 W", correct: false },
      { text: "5 W", correct: false },
      { text: "510 W", correct: false }
    ],
    explanation: "P = W/t = 500/10 = 50 W"
  }
];
