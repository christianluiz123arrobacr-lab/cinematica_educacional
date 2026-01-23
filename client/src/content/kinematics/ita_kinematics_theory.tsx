import { Section } from "@/components/AdvancedTheory";

export const ITAKinematicsTheory: {
  title: string;
  introduction: string;
  sections: Section[];
} = {
  title: "Cinemática Avançada: Do Cálculo aos Vínculos Geométricos",
  introduction:
    "Neste módulo, abandonaremos as simplificações do ensino médio convencional. A Cinemática será tratada com o rigor do Cálculo Diferencial e Integral e da Álgebra Vetorial, ferramentas indispensáveis para a resolução de problemas de alto nível (ITA, IME, Olimpíadas). Analisaremos o movimento não apenas por fórmulas decoradas, mas pela compreensão profunda das taxas de variação e da geometria das trajetórias.",
  sections: [
    {
      title: "1. A Natureza Vetorial e Diferencial do Movimento",
      content: String.raw`
### 1.1 Vetor Posição e Deslocamento
O estado cinemático de uma partícula é definido pelo seu vetor posição $\vec{r}(t)$ em relação a uma origem $O$. Em coordenadas cartesianas:
$$ \vec{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k} $$

O deslocamento $\Delta\vec{r}$ é a variação da posição entre dois instantes:
$$ \Delta\vec{r} = \vec{r}(t_2) - \vec{r}(t_1) $$

### 1.2 Velocidade Instantânea como Derivada
A velocidade não é apenas "distância sobre tempo". Ela é a taxa de variação temporal instantânea do vetor posição. Definimos a velocidade instantânea $\vec{v}$ como o limite:
$$ \vec{v}(t) = \lim_{\Delta t \to 0} \frac{\Delta\vec{r}}{\Delta t} = \frac{d\vec{r}}{dt} $$

Em componentes:
$$ \vec{v} = \frac{dx}{dt}\hat{i} + \frac{dy}{dt}\hat{j} + \frac{dz}{dt}\hat{k} = v_x\hat{i} + v_y\hat{j} + v_z\hat{k} $$

**Interpretação Geométrica:** O vetor velocidade $\vec{v}$ é sempre **tangente à trajetória** no ponto considerado.

### 1.3 Aceleração Instantânea
Analogamente, a aceleração é a taxa de variação da velocidade:
$$ \vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2} $$

**Atenção:** Ter aceleração não significa apenas mudar o módulo da velocidade (frear/acelerar). Mudar a **direção** da velocidade também requer aceleração (componente centrípeta).

### 1.4 O Problema Inverso: Integração
Se conhecemos a aceleração $\vec{a}(t)$ e as condições iniciais ($\vec{v}_0, \vec{r}_0$), podemos determinar o movimento integrando:
1.  $\vec{v}(t) = \vec{v}_0 + \int_{t_0}^{t} \vec{a}(\tau) d\tau$
2.  $\vec{r}(t) = \vec{r}_0 + \int_{t_0}^{t} \vec{v}(\tau) d\tau$

Essas são as "fórmulas gerais". As equações do MRUV ($v = v_0 + at$, $S = S_0 + v_0t + \frac{1}{2}at^2$) são apenas casos particulares onde $\vec{a}$ é constante.
      `,
    },
    {
      title: "2. Coordenadas Intrínsecas: Tangencial e Normal",
      content: String.raw`
Para movimentos curvilíneos, as coordenadas cartesianas ($x, y$) nem sempre são as mais convenientes. É mais físico projetar a aceleração sobre a própria trajetória.

Definimos dois vetores unitários móveis:
*   $\hat{t}$: Versor tangente (aponta na direção da velocidade).
*   $\hat{n}$: Versor normal (aponta para o centro de curvatura, perpendicular a $\hat{t}$).

Escrevemos a velocidade como $\vec{v} = v\hat{t}$ (onde $v = |\vec{v}|$). Derivando em relação ao tempo (regra da cadeia):
$$ \vec{a} = \frac{d\vec{v}}{dt} = \frac{d(v\hat{t})}{dt} = \frac{dv}{dt}\hat{t} + v\frac{d\hat{t}}{dt} $$

Demonstra-se geometricamente que $\frac{d\hat{t}}{dt} = \frac{v}{R}\hat{n}$, onde $R$ é o **Raio de Curvatura** local. Assim, chegamos à **Decomposição Intrínseca da Aceleração**:

$$ \vec{a} = \underbrace{\left( \frac{dv}{dt} \right)}_{\text{Acel. Tangencial } (a_t)} \hat{t} + \underbrace{\left( \frac{v^2}{R} \right)}_{\text{Acel. Centrípeta } (a_{cp})} \hat{n} $$

### Análise Profunda:
1.  **Aceleração Tangencial ($a_t$):** Responsável por variar o **módulo** da velocidade.
    *   Se $a_t > 0$: Movimento acelerado.
    *   Se $a_t < 0$: Movimento retardado.
    *   Se $a_t = 0$: Movimento Uniforme (MCU, MRU).
2.  **Aceleração Centrípeta ($a_{cp}$):** Responsável por variar a **direção** da velocidade.
    *   Sempre aponta para o centro da curva.
    *   Se $a_{cp} = 0$: Trajetória retilínea ($R \to \infty$).
    *   Se $a_{cp} \neq 0$: Trajetória curvilínea.

**Exemplo ITA:** Uma partícula se move em uma espiral dada por $r = b\theta$ com velocidade angular constante $\omega$. Determine os vetores velocidade e aceleração em coordenadas polares.
*Solução:* Requer derivar vetores unitários polares $\hat{e}_r$ e $\hat{e}_\theta$.
      `,
    },
    {
      title: "3. Vínculos Geométricos e Movimento Dependente",
      content: String.raw`
Em problemas com polias, fios e corpos rígidos em contato, as posições dos corpos não são independentes. Elas estão ligadas por **equações de vínculo**.

### Método da Derivada do Comprimento
Para fios inextensíveis, o comprimento total $L$ é constante.
1.  Estabeleça um sistema de coordenadas fixo.
2.  Escreva o comprimento $L$ em função das coordenadas de posição dos blocos ($x_A, x_B, \dots$).
3.  Derive em relação ao tempo: $\frac{dL}{dt} = 0$.

**Exemplo: Máquina de Atwood Móvel**
Seja um fio passando por uma polia móvel que sustenta um bloco B, e a outra ponta fixa no teto. A polia móvel está ligada a um bloco A.
*   Coordenada da polia/bloco A: $y_A$.
*   Coordenada do bloco B (em relação à polia? Não, use referencial fixo): $y_B$.
*   Equação do fio: $y_A + (y_B - y_A) + \dots$ (Cuidado com a geometria).

**Regra Prática (Polias Móveis):**
Se um bloco está pendurado em uma polia móvel sustentada por $N$ segmentos de corda paralelos, sua velocidade é $1/N$ da velocidade da corda que está sendo puxada.
$$ \sum \vec{v} \cdot \vec{T} = 0 \quad (\text{Trabalho Virtual}) $$

### Vínculo de Contato (Cunha)
Se um bloco A desliza sobre uma cunha B que se move horizontalmente, a velocidade relativa de A em relação a B deve ser tangente à superfície de contato.
$$ \vec{v}_{A} = \vec{v}_{B} + \vec{v}_{A/B} $$
Projetando na direção normal à superfície, as velocidades devem ser iguais (para não descolar nem penetrar).
      `,
    },
    {
      title: "4. Movimento Relativo Geral",
      content: String.raw`
A relação entre as grandezas cinemáticas medidas em dois referenciais $S$ (fixo) e $S'$ (móvel) é dada por:

$$ \vec{r}_{P/S} = \vec{r}_{P/S'} + \vec{r}_{S'/S} $$

Derivando em relação ao tempo:

### Teorema da Composição de Velocidades
$$ \vec{v}_{abs} = \vec{v}_{rel} + \vec{v}_{arr} $$
*   $\vec{v}_{abs}$: Velocidade da partícula em relação ao solo (S).
*   $\vec{v}_{rel}$: Velocidade da partícula em relação ao referencial móvel (S').
*   $\vec{v}_{arr}$: Velocidade de arrastamento (velocidade da origem de S' em relação a S + rotação).

### Teorema da Composição de Acelerações
Se o referencial $S'$ apenas translada (sem rotação) com aceleração $\vec{A}$:
$$ \vec{a}_{abs} = \vec{a}_{rel} + \vec{A} $$

**Caso Avançado (Com Rotação - Nível IME/Olimpíada):**
Se $S'$ gira com velocidade angular $\vec{\omega}$ e aceleração angular $\vec{\alpha}$, surge a **Aceleração de Coriolis**:
$$ \vec{a}_{abs} = \vec{a}_{rel} + \vec{a}_{trans} + \vec{a}_{centrífuga} + \vec{a}_{Coriolis} $$
$$ \vec{a}_{Coriolis} = 2\vec{\omega} \times \vec{v}_{rel} $$

Essa aceleração explica o desvio de projéteis de longo alcance e o sentido de rotação de ciclones.
      `,
    },
    {
      title: "5. Desafio Resolvido: O Problema da Raposa e do Coelho",
      content: String.raw`
**Enunciado:** Um coelho corre em linha reta com velocidade constante $v_c$. Uma raposa o persegue com velocidade constante $v_r$ ($v_r > v_c$), mantendo seu vetor velocidade sempre apontado para o coelho. Qual o tempo de captura e a distância percorrida?

**Solução (Abordagem via Componentes Relativas):**
Este é um problema clássico de "Curva de Perseguição".
Seja $r$ a distância entre a raposa e o coelho. A taxa de aproximação é a velocidade relativa na direção da linha de visada:
$$ \frac{dr}{dt} = -v_r + v_c \cos\theta $$
(Onde $\theta$ é o ângulo entre a velocidade do coelho e a linha de visada).

Podemos resolver integrando ou usando um truque de referencial relativo na direção do movimento do coelho.
A solução elegante envolve notar que a componente da velocidade da raposa na direção perpendicular ao movimento do coelho deve "pagar" o deslocamento lateral.

Resultado (Tempo de captura):
$$ T = \frac{L_0 v_r}{v_r^2 - v_c^2} $$
Onde $L_0$ é a distância inicial (assumindo $\vec{v}_r \perp \vec{v}_c$ inicialmente).
      `,
    },
  ],
};
