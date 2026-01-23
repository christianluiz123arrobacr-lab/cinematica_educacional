import { Section } from "@/components/AdvancedTheory";

export const ITAOpticsTheory: {
  title: string;
  introduction: string;
  sections: Section[];
} = {
  title: "Óptica Completa: Geométrica e Física",
  introduction:
    "A Óptica estuda a luz e sua interação com a matéria. Abordamos desde os princípios geométricos de propagação retilínea, reflexão e refração, até a natureza ondulatória da luz, explicando fenômenos como difração, interferência e polarização, essenciais para a física moderna.",
  sections: [
    {
      title: "1. Óptica Geométrica: Fundamentos",
      content: String.raw`
### 1.1. Princípios Básicos
*   **Propagação Retilínea:** Em meios homogêneos e transparentes. Gera sombra e penumbra.
*   **Independência dos Raios:** O cruzamento não altera a propagação.
*   **Reversibilidade:** O caminho de ida é igual ao de volta.

### 1.2. Reflexão e Espelhos Planos
Lei da Reflexão: $i = r$. Raios coplanares.
Espelhos Planos: Imagem virtual, direita, mesmo tamanho (enantiomorfa), simétrica ao objeto.
Associação de Espelhos (ângulo $\alpha$): $N = \frac{360^\circ}{\alpha} - 1$.
Translação e Rotação: Se espelho gira $\alpha$, raio refletido gira $2\alpha$.

### 1.3. Espelhos Esféricos (Gauss)
Condições de Nitidez de Gauss: Pequena abertura ($<10^\circ$) e raios paraxiais.
Equação dos Pontos Conjugados:
$$ \frac{1}{f} = \frac{1}{p} + \frac{1}{p'} $$
Foco: $f = R/2$.
Convenção de Sinais:
*   Côncavo: $f > 0$. Convexo: $f < 0$.
*   Real: $p, p' > 0$. Virtual: $p, p' < 0$.
Aumento Linear Transversal: $A = \frac{i}{o} = -\frac{p'}{p}$.
      `,
    },
    {
      title: "2. Refração e Lentes",
      content: String.raw`
### 2.1. Lei de Snell-Descartes
$$ n_1 \sin i = n_2 \sin r $$
Índice de refração absoluto: $n = c/v \ge 1$.
Reflexão Total Interna: Ocorre do meio mais para o menos refringente ($n_1 > n_2$) se $i > L$, onde $\sin L = n_2/n_1$.

### 2.2. Dioptro Plano e Lâmina de Faces Paralelas
Dioptro (visão aparente): $d_{ap} = d_{real} \frac{n_{obs}}{n_{obj}}$.
Lâmina (desvio lateral $d$):
$$ d = \frac{e \sin(i-r)}{\cos r} $$

### 2.3. Lentes Esféricas Delgadas
Equação dos Fabricantes de Lentes (Halley):
$$ \frac{1}{f} = (n_{rel} - 1) \left( \frac{1}{R_1} + \frac{1}{R_2} \right) $$
Convenção: Face convexa $R > 0$, côncava $R < 0$.
Vergência: $V = 1/f$ (dioptrias).

### 2.4. Instrumentos Ópticos
*   **Lupa:** Lente convergente, objeto entre F e O. Imagem virtual, direita e maior.
*   **Microscópio Composto:** Objetiva (pequena distância focal) + Ocular (lupa).
*   **Telescópio:** Objetiva (grande distância focal) + Ocular.
      `,
    },
    {
      title: "3. Óptica Física",
      content: String.raw`
### 3.1. Interferência (Experimento de Young)
Fenda dupla. Diferença de caminho $\Delta x = d \sin\theta$.
Máximos (Construtiva): $\Delta x = m\lambda$.
Mínimos (Destrutiva): $\Delta x = (m + 1/2)\lambda$.
Posição na tela ($y$): $y = \frac{m \lambda D}{d}$ (para $D \gg d$).

### 3.2. Difração
Fenda simples de largura $a$.
Mínimos de difração: $a \sin\theta = m\lambda$ ($m \ne 0$).
Critério de Rayleigh (Resolução): $\theta_{min} = 1,22 \lambda/D$.

### 3.3. Polarização
Luz é onda transversal. Polarização seleciona plano de vibração do campo elétrico.
Lei de Malus (Intensidade após polarizador): $I = I_0 \cos^2\theta$.
Ângulo de Brewster (Polarização por reflexão): $\tan \theta_B = n_2/n_1$.
      `,
    },
    {
      title: "4. Tópicos Avançados (ITA/IME)",
      content: String.raw`
### 4.1. Princípio de Fermat
A luz percorre o caminho de tempo mínimo (ou estacionário).
$$ \delta \int n \, ds = 0 $$
Dedução das leis da óptica geométrica via cálculo variacional.

### 4.2. Matrizes Ópticas (ABCD)
Para sistemas paraxiais, relação entre altura $y$ e ângulo $\alpha$:
$$ \begin{pmatrix} y_2 \\ \alpha_2 \end{pmatrix} = \begin{pmatrix} A & B \\ C & D \end{pmatrix} \begin{pmatrix} y_1 \\ \alpha_1 \end{pmatrix} $$
Permite calcular sistemas complexos de lentes e espelhos multiplicando matrizes.
      `,
    },
  ],
};
