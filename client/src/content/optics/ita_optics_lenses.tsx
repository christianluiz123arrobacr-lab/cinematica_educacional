import { Section } from "@/components/AdvancedTheory";

export const ITAOpticsLensesTheory: {
  title: string;
  introduction: string;
  sections: Section[];
} = {
  title: "Lentes e Espelhos: Óptica Geométrica Avançada",
  introduction:
    "Neste módulo, aprofundamos o estudo de sistemas ópticos, partindo da aproximação paraxial de Gauss até as aberrações ópticas e sistemas compostos. A abordagem matricial (Método ABCD) é introduzida como ferramenta poderosa para resolver problemas complexos de múltiplos elementos ópticos, comum em exames do ITA e IME.",
  sections: [
    {
      title: "1. Espelhos Esféricos e Referencial de Gauss",
      content: String.raw`
### 1.1. Condições de Nitidez de Gauss
Para que as imagens sejam nítidas, os raios devem ser paraxiais (pequena inclinação com o eixo principal) e a abertura do espelho deve ser pequena ($< 10^\circ$).
Sob essas condições:
$$ \sin\theta \approx \tan\theta \approx \theta $$

### 1.2. Equação dos Pontos Conjugados
$$ \frac{1}{f} = \frac{1}{p} + \frac{1}{p'} $$
Onde $f = R/2$.
**Convenção de Sinais (Referencial de Gauss):**
*   Luz incide da esquerda para a direita.
*   Vértice do espelho é a origem ($0,0$).
*   Abscissas reais (objeto/imagem real) são positivas a favor da luz incidente? **Cuidado!** No referencial de Gauss clássico brasileiro:
    *   Real $\Rightarrow p, p' > 0$.
    *   Virtual $\Rightarrow p, p' < 0$.
    *   Côncavo $\Rightarrow f > 0$. Convexo $\Rightarrow f < 0$.

### 1.3. Aumento Linear Transversal
$$ A = \frac{i}{o} = -\frac{p'}{p} $$
*   $A > 0$: Imagem direita.
*   $A < 0$: Imagem invertida.
      `,
    },
    {
      title: "2. Lentes Esféricas Delgadas",
      content: String.raw`
### 2.1. Equação dos Fabricantes de Lentes (Halley)
Relaciona a geometria da lente com seu foco:
$$ V = \frac{1}{f} = (n_{rel} - 1) \left( \frac{1}{R_1} + \frac{1}{R_2} \right) $$
**Convenção de Sinais para Raios:**
*   Face Convexa: $R > 0$.
*   Face Côncava: $R < 0$.
*   Face Plana: $R \to \infty$ ($1/R = 0$).

### 2.2. Vergência e Dioptria
A potência de uma lente é medida em dioptrias ($di = m^{-1}$).
$$ V_{eq} = V_1 + V_2 $$
Para lentes justapostas.

### 2.3. Newton e a Forma Referenciada nos Focos
$$ x \cdot x' = f^2 $$
Onde $x$ e $x'$ são as distâncias do objeto e da imagem aos respectivos focos. Útil para problemas onde as distâncias focais são dadas explicitamente.
      `,
    },
    {
      title: "3. Método Matricial (Óptica ABCD)",
      content: String.raw`
### 3.1. O Formalismo
Para sistemas complexos, representamos cada elemento óptico como uma matriz $2 \times 2$ que transforma o vetor raio $\mathbf{r} = \begin{pmatrix} y \\ \alpha \end{pmatrix}$ (altura e ângulo).

### 3.2. Matrizes Fundamentais
*   **Propagação Livre (distância $d$):**
    $$ M_T = \begin{pmatrix} 1 & d \\ 0 & 1 \end{pmatrix} $$
*   **Refração em Superfície Plana:**
    $$ M_R = \begin{pmatrix} 1 & 0 \\ 0 & n_1/n_2 \end{pmatrix} $$
*   **Lente Delgada (foco $f$):**
    $$ M_L = \begin{pmatrix} 1 & 0 \\ -1/f & 1 \end{pmatrix} $$

### 3.3. Aplicação
A matriz do sistema total é o produto das matrizes individuais, na ordem inversa da propagação da luz:
$$ M_{total} = M_n \cdot M_{n-1} \dots M_1 $$
A posição da imagem final pode ser encontrada impondo que a altura final $y_f$ seja independente do ângulo inicial $\alpha_i$ (condição de foco), ou simplesmente calculando o vetor de saída.
      `,
    },
    {
      title: "4. Aberrações Ópticas (Qualitativo)",
      content: String.raw`
### 4.1. Aberração Esférica
Raios distantes do eixo (marginais) focam em pontos diferentes dos raios paraxiais. Corrige-se com diafragmas ou lentes asféricas.

### 4.2. Aberração Cromática
O índice de refração depende da frequência ($n(\lambda)$). A luz azul foca antes da vermelha em uma lente convergente. Corrige-se com sistemas acromáticos (combinação de lentes convergente e divergente de materiais diferentes).
      `,
    },
  ],
};
