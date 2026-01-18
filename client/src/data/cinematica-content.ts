export const cinematicaContent = {
  introduction: {
    title: "O que é Cinemática?",
    description: "A Cinemática é o ramo da Mecânica que estuda o movimento dos corpos sem considerar as causas que o produzem. Ela descreve como os objetos se movem, analisando posição, velocidade e aceleração ao longo do tempo.",
    sections: [
      {
        subtitle: "Conceitos Fundamentais",
        content: `A Cinemática trabalha com alguns conceitos essenciais que precisam ser compreendidos antes de estudarmos os tipos de movimento.

**Referencial**: É um ponto ou sistema de pontos em relação ao qual observamos o movimento. O conceito de movimento é relativo ao referencial escolhido. Por exemplo, um passageiro dentro de um ônibus está em repouso em relação ao ônibus, mas em movimento em relação à rua.

**Movimento e Repouso**: Um corpo está em movimento quando sua posição muda em relação a um referencial ao longo do tempo. Está em repouso quando sua posição permanece constante em relação ao referencial.

**Trajetória**: É o caminho descrito por um ponto material ao longo do tempo. Pode ser retilínea (em linha reta) ou curvilínea (em curva).

**Deslocamento**: É a distância em linha reta entre a posição inicial e a posição final de um objeto, independentemente do caminho percorrido. Diferencia-se da distância percorrida, que é o comprimento total do caminho.

**Ponto Material (ou Partícula)**: É um corpo cujas dimensões são negligenciáveis em comparação com as distâncias envolvidas no movimento. Permite simplificar o estudo do movimento.

**Corpo Extenso**: É um corpo cujas dimensões são relevantes para o estudo do movimento, como um carro manobrando em uma vaga.`
      }
    ]
  },

  velocidade: {
    title: "Velocidade e Aceleração",
    sections: [
      {
        subtitle: "Velocidade Escalar Média",
        content: `A velocidade escalar média é uma grandeza que mede a rapidez com que um objeto se desloca. Ela é definida como a razão entre a distância percorrida e o intervalo de tempo gasto.

**Fórmula**: vm = Δs / Δt

Onde:
- vm = velocidade média (m/s no SI)
- Δs = variação do espaço (m no SI)
- Δt = intervalo de tempo (s no SI)

**Origem da Fórmula**: A velocidade média surge da necessidade de quantificar o movimento. Se um objeto percorre 100 metros em 10 segundos, intuitivamente sabemos que ele se move a 10 metros por segundo em média. A fórmula formaliza essa intuição.

**Exemplo Prático**: Um carro percorre 300 km em 5 horas. Sua velocidade média é: vm = 300 km / 5 h = 60 km/h.

**Observação Importante**: A velocidade média não nos diz a velocidade instantânea em cada momento. O carro pode ter viajado a 80 km/h em algumas partes e a 40 km/h em outras, mas sua velocidade média foi de 60 km/h.`
      },
      {
        subtitle: "Velocidade Instantânea",
        content: `A velocidade instantânea é a velocidade de um objeto em um instante específico do tempo. É o que o velocímetro de um carro marca.

Matematicamente, é definida como o limite da velocidade média quando o intervalo de tempo tende a zero:

v = lim(Δt→0) Δs/Δt = ds/dt

Em outras palavras, é a derivada da posição em relação ao tempo.`
      },
      {
        subtitle: "Aceleração Escalar Média",
        content: `A aceleração escalar média mede a taxa de variação da velocidade ao longo do tempo. Se a velocidade de um corpo muda, ele está acelerando.

**Fórmula**: a = Δv / Δt

Onde:
- a = aceleração (m/s² no SI)
- Δv = variação da velocidade (m/s no SI)
- Δt = intervalo de tempo (s no SI)

**Origem da Fórmula**: Assim como a velocidade mede a mudança de posição, a aceleração mede a mudança de velocidade. Se um carro aumenta sua velocidade de 0 m/s para 20 m/s em 5 segundos, sua aceleração média é: a = 20 m/s / 5 s = 4 m/s².

**Interpretação**: Uma aceleração positiva indica que a velocidade está aumentando. Uma aceleração negativa (ou desaceleração) indica que a velocidade está diminuindo.`
      }
    ]
  },

  mru: {
    title: "Movimento Retilíneo Uniforme (MRU)",
    description: "O MRU é um movimento em linha reta com velocidade constante.",
    sections: [
      {
        subtitle: "Características do MRU",
        content: `No Movimento Retilíneo Uniforme (MRU):
- O objeto se move em linha reta
- A velocidade é constante (não muda)
- A aceleração é zero
- Em intervalos de tempo iguais, o objeto percorre distâncias iguais

**Exemplos Reais**: Um carro em uma estrada reta a 80 km/h, um trem em trilhos retos, um avião em voo horizontal com velocidade constante.`
      },
      {
        subtitle: "Função Horária da Posição",
        content: `A função horária da posição descreve como a posição de um objeto varia com o tempo no MRU.

**Fórmula**: s = s₀ + v·t

Onde:
- s = posição final (m)
- s₀ = posição inicial (m)
- v = velocidade (m/s)
- t = tempo (s)

**Derivação**: Partindo da definição de velocidade média:
v = Δs / Δt = (s - s₀) / (t - t₀)

Considerando t₀ = 0 (começamos a contar o tempo do início):
v = (s - s₀) / t

Isolando s:
s = s₀ + v·t

**Significado**: Esta é uma equação do primeiro grau. A posição aumenta linearmente com o tempo. O gráfico s vs. t é uma reta.

**Exemplo**: Um objeto começa na posição 10 m e se move a 5 m/s. Após 3 segundos:
s = 10 + 5·3 = 10 + 15 = 25 m`
      },
      {
        subtitle: "Cálculo da Velocidade no MRU",
        content: `Para encontrar a velocidade no MRU, basta isolar v na função horária:

**Fórmula**: v = (s - s₀) / t = Δs / Δt

Onde:
- v = velocidade (m/s)
- s = posição final (m)
- s₀ = posição inicial (m)
- t = tempo (s)

**Exemplo**: Um objeto sai da posição 5 m e chega à posição 35 m em 6 segundos. Sua velocidade é:
v = (35 - 5) / 6 = 30 / 6 = 5 m/s`
      },
      {
        subtitle: "Gráficos no MRU",
        content: `**Gráfico de Velocidade vs. Tempo**: Uma reta horizontal paralela ao eixo do tempo. A velocidade não muda, então a reta é paralela ao eixo t. A área sob a reta representa o deslocamento.

**Gráfico de Posição vs. Tempo**: Uma reta inclinada. A inclinação da reta é a velocidade. Quanto maior a inclinação, maior a velocidade.

**Gráfico de Aceleração vs. Tempo**: Uma reta sobre o eixo do tempo (aceleração = 0).`
      }
    ]
  },

  mruv: {
    title: "Movimento Retilíneo Uniformemente Variado (MRUV)",
    description: "O MRUV é um movimento em linha reta com aceleração constante.",
    sections: [
      {
        subtitle: "Características do MRUV",
        content: `No Movimento Retilíneo Uniformemente Variado (MRUV):
- O objeto se move em linha reta
- A velocidade varia constantemente
- A aceleração é constante (não muda)
- A velocidade muda de forma uniforme (linear)

**Exemplos Reais**: Um carro acelerando do repouso, um objeto caindo sob a gravidade, um carro freando.`
      },
      {
        subtitle: "Função Horária da Velocidade",
        content: `A função horária da velocidade descreve como a velocidade de um objeto varia com o tempo no MRUV.

**Fórmula**: V = V₀ + a·t

Onde:
- V = velocidade final (m/s)
- V₀ = velocidade inicial (m/s)
- a = aceleração (m/s²)
- t = tempo (s)

**Derivação**: Partindo da definição de aceleração:
a = Δv / Δt = (V - V₀) / (t - t₀)

Considerando t₀ = 0:
a = (V - V₀) / t

Isolando V:
V = V₀ + a·t

**Significado**: Esta é uma equação do primeiro grau. A velocidade aumenta (ou diminui, se a for negativa) linearmente com o tempo.

**Exemplo**: Um objeto começa com velocidade 5 m/s e acelera a 2 m/s². Após 4 segundos:
V = 5 + 2·4 = 5 + 8 = 13 m/s`
      },
      {
        subtitle: "Função Horária da Posição",
        content: `A função horária da posição descreve como a posição de um objeto varia com o tempo no MRUV.

**Fórmula**: S = S₀ + V₀·t + (a·t²) / 2

Onde:
- S = posição final (m)
- S₀ = posição inicial (m)
- V₀ = velocidade inicial (m/s)
- a = aceleração (m/s²)
- t = tempo (s)

**Derivação**: No MRUV, a velocidade varia linearmente. A posição é a integral da velocidade:
S = ∫(V₀ + a·t)dt = V₀·t + (a·t²)/2 + C

Onde C = S₀ (constante de integração, a posição inicial).

Portanto: S = S₀ + V₀·t + (a·t²)/2

**Significado**: Esta é uma equação do segundo grau (parábola). O termo (a·t²)/2 é responsável pela curvatura.

**Exemplo**: Um objeto começa na posição 0 m, com velocidade inicial 3 m/s e aceleração 2 m/s². Após 5 segundos:
S = 0 + 3·5 + (2·5²)/2 = 15 + (2·25)/2 = 15 + 25 = 40 m`
      },
      {
        subtitle: "Equação de Torricelli",
        content: `A Equação de Torricelli relaciona velocidade, aceleração e deslocamento, sem depender do tempo.

**Fórmula**: V² = V₀² + 2·a·ΔS

Onde:
- V = velocidade final (m/s)
- V₀ = velocidade inicial (m/s)
- a = aceleração (m/s²)
- ΔS = deslocamento (m)

**Derivação**: Partindo de V = V₀ + a·t, isolamos t:
t = (V - V₀) / a

Substituindo na fórmula S = S₀ + V₀·t + (a·t²)/2:
ΔS = V₀·t + (a·t²)/2
ΔS = V₀·[(V - V₀)/a] + (a/2)·[(V - V₀)/a]²
ΔS = V₀·(V - V₀)/a + (V - V₀)²/(2a)
ΔS = [2V₀·(V - V₀) + (V - V₀)²] / (2a)
ΔS = [(V - V₀)·(2V₀ + V - V₀)] / (2a)
ΔS = [(V - V₀)·(V + V₀)] / (2a)
ΔS = (V² - V₀²) / (2a)

Multiplicando ambos os lados por 2a:
2a·ΔS = V² - V₀²

Portanto: V² = V₀² + 2·a·ΔS

**Utilidade**: Esta equação é muito útil quando não conhecemos o tempo, mas conhecemos o deslocamento.

**Exemplo**: Um objeto começa com velocidade 5 m/s, acelera a 3 m/s² e percorre 20 m. Sua velocidade final é:
V² = 5² + 2·3·20 = 25 + 120 = 145
V = √145 ≈ 12,04 m/s`
      }
    ]
  },

  mcu: {
    title: "Movimento Circular Uniforme (MCU)",
    description: "O MCU é um movimento em trajetória circular com velocidade constante em módulo.",
    sections: [
      {
        subtitle: "Características do MCU",
        content: `No Movimento Circular Uniforme (MCU):
- O objeto se move em uma trajetória circular
- A velocidade tangencial é constante em módulo
- A direção da velocidade muda continuamente
- Existe aceleração centrípeta (dirigida para o centro)
- O período T e a frequência f são constantes

**Exemplos Reais**: Um satélite em órbita, um ventilador ligado, um carrossel, a Lua orbitando a Terra.`
      },
      {
        subtitle: "Conceitos Fundamentais",
        content: `**Período (T)**: Tempo necessário para o objeto completar uma volta completa. Medido em segundos (s).

**Frequência (f)**: Número de voltas completas por unidade de tempo. Medido em Hertz (Hz) ou rotações por segundo (rps). Relaciona-se com o período por: f = 1/T

**Raio (r)**: Distância do centro da circunferência até o objeto.

**Velocidade Tangencial (v)**: Velocidade do objeto ao longo da trajetória circular. É constante em módulo, mas muda de direção continuamente.

**Velocidade Angular (ω)**: Taxa de variação do ângulo em relação ao tempo. Medida em radianos por segundo (rad/s).`
      },
      {
        subtitle: "Fórmulas do MCU",
        content: `**Velocidade Tangencial**: v = 2πr / T = 2πrf

Derivação: O objeto percorre uma circunferência completa (2πr) em um período (T). Portanto, a velocidade é a distância dividida pelo tempo.

**Velocidade Angular**: ω = 2π / T = 2πf

Derivação: Em um período T, o objeto percorre um ângulo de 2π radianos. Portanto, a velocidade angular é 2π dividido por T.

**Relação entre v e ω**: v = ωr

Derivação: A velocidade tangencial é proporcional à velocidade angular multiplicada pelo raio.

**Aceleração Centrípeta**: ac = v² / r = ω²r

Derivação: A aceleração centrípeta é responsável por manter o objeto em movimento circular. Ela é sempre dirigida para o centro e seu módulo é constante.

**Frequência e Período**: f = 1/T ou T = 1/f

Derivação: Se o objeto completa f voltas em um segundo, então cada volta leva 1/f segundos.`
      }
    ]
  },

  quedaLivre: {
    title: "Queda Livre",
    description: "A queda livre é um caso especial de MRUV onde a aceleração é a da gravidade.",
    sections: [
      {
        subtitle: "Características da Queda Livre",
        content: `A Queda Livre é um movimento especial onde:
- O objeto se move verticalmente
- A aceleração é constante e igual à aceleração da gravidade: g ≈ 9,8 m/s² (na Terra)
- Desprezamos a resistência do ar
- É um caso especial de MRUV

**Observação**: A aceleração da gravidade é a mesma para todos os objetos, independentemente de sua massa (no vácuo).`
      },
      {
        subtitle: "Fórmulas da Queda Livre",
        content: `Como a queda livre é um MRUV com a = g, usamos as mesmas fórmulas:

**Velocidade**: V = V₀ + g·t

**Posição**: h = h₀ + V₀·t + (g·t²)/2

**Torricelli**: V² = V₀² + 2·g·Δh

Onde:
- h = altura (m)
- V = velocidade (m/s)
- g = aceleração da gravidade ≈ 9,8 m/s²
- t = tempo (s)

**Caso Especial - Objeto Solto do Repouso**:
Se o objeto é solto do repouso (V₀ = 0) de uma altura h₀:

V = g·t
h = h₀ - (g·t²)/2 (considerando a direção para baixo como negativa)
V² = 2·g·Δh

**Exemplo**: Um objeto é solto de uma altura de 45 m. Quanto tempo leva para chegar ao solo?
Δh = (g·t²)/2
45 = (9,8·t²)/2
90 = 9,8·t²
t² = 90/9,8 ≈ 9,18
t ≈ 3,03 segundos

Qual é a velocidade ao chegar ao solo?
V² = 2·g·Δh = 2·9,8·45 = 882
V = √882 ≈ 29,7 m/s`
      }
    ]
  },

  lancamentos: {
    title: "Lançamentos Horizontais e Oblíquos",
    sections: [
      {
        subtitle: "Lançamento Horizontal",
        content: `No lançamento horizontal, um objeto é lançado com velocidade inicial horizontal e cai sob a influência da gravidade.

**Características**:
- Velocidade inicial é horizontal (V₀ₓ ≠ 0, V₀ᵧ = 0)
- O movimento pode ser decomposto em dois componentes:
  - Horizontal: MRU (velocidade constante)
  - Vertical: Queda livre (aceleração constante = g)

**Fórmulas**:
- Horizontal: x = V₀ₓ·t
- Vertical: y = h₀ - (g·t²)/2
- Velocidade horizontal: Vₓ = V₀ₓ (constante)
- Velocidade vertical: Vᵧ = -g·t

**Tempo de Queda**: O tempo que o objeto leva para atingir o solo depende apenas da altura inicial:
t = √(2·h₀/g)

**Alcance**: A distância horizontal percorrida é:
x = V₀ₓ·√(2·h₀/g)`
      },
      {
        subtitle: "Lançamento Oblíquo",
        content: `No lançamento oblíquo, um objeto é lançado com velocidade inicial em um ângulo θ em relação à horizontal.

**Características**:
- Velocidade inicial tem componentes horizontal e vertical
- V₀ₓ = V₀·cos(θ)
- V₀ᵧ = V₀·sin(θ)
- O movimento pode ser decomposto em dois componentes:
  - Horizontal: MRU
  - Vertical: MRUV com aceleração -g

**Fórmulas**:
- Horizontal: x = V₀ₓ·t = V₀·cos(θ)·t
- Vertical: y = V₀ᵧ·t - (g·t²)/2 = V₀·sin(θ)·t - (g·t²)/2
- Velocidade horizontal: Vₓ = V₀ₓ = V₀·cos(θ)
- Velocidade vertical: Vᵧ = V₀ᵧ - g·t = V₀·sin(θ) - g·t

**Altura Máxima**: Ocorre quando Vᵧ = 0:
t_max = V₀·sin(θ) / g
h_max = (V₀·sin(θ))² / (2·g)

**Alcance Máximo**: A distância horizontal total (quando o objeto retorna à altura inicial):
x_max = (V₀²·sin(2θ)) / g

**Observação**: O alcance máximo ocorre quando θ = 45°.`
      }
    ]
  }
};
