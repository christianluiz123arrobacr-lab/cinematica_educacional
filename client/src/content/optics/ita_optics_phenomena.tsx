import { Section } from "@/components/AdvancedTheory";

export const ITAOpticsPhenomenaTheory: {
  title: string;
  introduction: string;
  sections: Section[];
} = {
  title: "Fenômenos Ópticos: A Natureza Ondulatória da Luz",
  introduction:
    "Quando as dimensões dos obstáculos são comparáveis ao comprimento de onda da luz, a Óptica Geométrica falha e precisamos recorrer à Óptica Física. Aqui, tratamos a luz como uma onda eletromagnética, explorando fenômenos de interferência, difração e polarização com o rigor matemático necessário para o ITA e IME.",
  sections: [
    {
      title: "1. Interferência (Experimento de Young)",
      content: String.raw`
### 1.1. Condições para Interferência
Para observar padrões estáveis de interferência, as fontes devem ser **coerentes** (diferença de fase constante) e monocromáticas.

### 1.2. Fenda Dupla de Young
A diferença de caminho óptico $\Delta x$ entre os raios que saem das fendas (distância $d$) e atingem um ponto na tela (ângulo $\theta$) é:
$$ \Delta x = d \sin\theta \approx d \tan\theta = d \frac{y}{D} $$
(Para $D \gg d$ e pequenos ângulos).

*   **Máximos (Construtiva):** $\Delta x = m\lambda \Rightarrow y_m = \frac{m \lambda D}{d}$
*   **Mínimos (Destrutiva):** $\Delta x = (m + 1/2)\lambda \Rightarrow y_m = \frac{(m + 1/2) \lambda D}{d}$
Onde $m \in \mathbb{Z}$ é a ordem da interferência.

### 1.3. Intensidade na Tela
A intensidade varia cosinusoidalmente:
$$ I = I_0 \cos^2\left(\frac{\pi d \sin\theta}{\lambda}\right) $$
      `,
    },
    {
      title: "2. Interferência em Filmes Finos",
      content: String.raw`
### 2.1. Mudança de Fase na Reflexão
*   Reflexão "Duro" (menor $n$ para maior $n$): Inversão de fase ($\pi$ rad ou $\lambda/2$).
*   Reflexão "Mole" (maior $n$ para menor $n$): Sem inversão de fase.

### 2.2. Condições de Máximo e Mínimo
Para um filme de espessura $e$ e índice $n$, imerso no ar (incidência quase normal):
A diferença de caminho geométrico é $2e$. O caminho óptico considera o índice $n$.
*   Se houver **uma** inversão de fase (ex: bolha de sabão no ar):
    *   Construtiva (Brilhante): $2ne = (m + 1/2)\lambda$
    *   Destrutiva (Escura): $2ne = m\lambda$
*   Se houver **zero ou duas** inversões:
    *   Construtiva: $2ne = m\lambda$
    *   Destrutiva: $2ne = (m + 1/2)\lambda$
      `,
    },
    {
      title: "3. Difração",
      content: String.raw`
### 3.1. Difração de Fraunhofer (Fenda Simples)
A luz se espalha ao passar por uma fenda de largura $a$.
Condição para **Mínimos** de intensidade (Escuro):
$$ a \sin\theta = m\lambda \quad (m = \pm 1, \pm 2, \dots) $$
O máximo central é largo (ocupa o espaço entre $m=1$ e $m=-1$) e contém a maior parte da energia.

### 3.2. Critério de Rayleigh (Resolução)
Dois pontos luminosos são apenas distinguíveis se o centro do disco de difração de um coincide com o primeiro mínimo do outro.
Para abertura circular de diâmetro $D$:
$$ \theta_{min} = 1,22 \frac{\lambda}{D} $$
Isso impõe o limite fundamental de resolução de telescópios e microscópios.
      `,
    },
    {
      title: "4. Polarização",
      content: String.raw`
### 4.1. Natureza Transversal
A luz é uma onda eletromagnética transversal. A polarização define a direção de oscilação do campo elétrico $\vec{E}$.

### 4.2. Lei de Malus
Se luz linearmente polarizada incide em um polarizador cujo eixo faz ângulo $\theta$ com a polarização incidente:
$$ I = I_0 \cos^2\theta $$

### 4.3. Lei de Brewster
Ao refletir na interface entre dois meios dielétricos, a luz refletida é totalmente polarizada (perpendicular ao plano de incidência) se o ângulo de incidência for $\theta_B$:
$$ \tan\theta_B = \frac{n_2}{n_1} $$
Neste ângulo, o raio refletido e o refratado são perpendiculares.
      `,
    },
  ],
};
