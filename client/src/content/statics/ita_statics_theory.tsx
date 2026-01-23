import { Section } from "@/components/AdvancedTheory";

export const ITAStaticsTheory: {
  title: string;
  introduction: string;
  sections: Section[];
} = {
  title: "Estática e Dinâmica de Rotação: Corpos Rígidos",
  introduction:
    "A mecânica do ponto material é insuficiente para descrever o mundo real. Corpos extensos giram, deformam e rolam. Neste módulo, introduziremos o formalismo do Corpo Rígido, abordando o Momento de Inércia, o Torque Vetorial e a Conservação do Momento Angular, conceitos centrais para resolver os problemas mais difíceis de mecânica.",
  sections: [
    {
      title: "1. Equilíbrio de Corpos Rígidos",
      content: String.raw`
Para um corpo extenso estar em equilíbrio estático, duas condições vetoriais devem ser satisfeitas simultaneamente:

1.  **Equilíbrio Translacional:** A soma das forças externas é nula.
    $$ \sum \vec{F}_{ext} = 0 $$
2.  **Equilíbrio Rotacional:** A soma dos torques externos em relação a *qualquer* ponto é nula.
    $$ \sum \vec{\tau}_{ext} = 0 $$

### Torque (Momento de uma Força)
O torque é definido pelo produto vetorial entre o vetor posição $\vec{r}$ (do ponto de giro até a aplicação da força) e a força $\vec{F}$:
$$ \vec{\tau} = \vec{r} \times \vec{F} $$

O módulo é $\tau = rF\sin\theta$, onde $\theta$ é o ângulo entre $\vec{r}$ e $\vec{F}$. A direção é dada pela Regra da Mão Direita.

**Dica ITA:** Escolha o ponto de cálculo do torque onde há forças desconhecidas que você não quer calcular (ex: reações de apoio), pois o torque delas será zero ($r=0$).
      `,
    },
    {
      title: "2. Momento de Inércia e Teorema de Steiner",
      content: String.raw`
A "massa" para o movimento de rotação é o **Momento de Inércia** ($I$). Ele mede a dificuldade de alterar a velocidade angular de um corpo.
$$ I = \int r^2 dm $$

### Momentos de Inércia Comuns (Eixo no CM)
*   Anel ou Casca Cilíndrica: $I = MR^2$
*   Disco ou Cilindro Maciço: $I = \frac{1}{2}MR^2$
*   Esfera Maciça: $I = \frac{2}{5}MR^2$
*   Barra Fina (comprimento $L$): $I = \frac{1}{12}ML^2$

### Teorema dos Eixos Paralelos (Steiner)
Se conhecemos $I_{cm}$ (em relação ao CM), o momento de inércia em relação a um eixo paralelo a uma distância $d$ é:
$$ I = I_{cm} + Md^2 $$

**Exemplo:** Momento de inércia de uma barra girando pela ponta ($d=L/2$):
$$ I = \frac{1}{12}ML^2 + M\left(\frac{L}{2}\right)^2 = \frac{1}{3}ML^2 $$
      `,
    },
    {
      title: "3. Dinâmica de Rotação (2ª Lei para Rotação)",
      content: String.raw`
A relação fundamental da dinâmica rotacional é análoga à $F=ma$:

$$ \vec{\tau}_{res} = I\vec{\alpha} $$
(Onde $\alpha$ é a aceleração angular).

### Energia Cinética de Rotação
Um corpo que translada e gira tem energia cinética total:
$$ K = \underbrace{\frac{1}{2}MV_{cm}^2}_{\text{Translação}} + \underbrace{\frac{1}{2}I_{cm}\omega^2}_{\text{Rotação}} $$

### Rolamento Puro (Sem Deslizamento)
Se um corpo rola sem deslizar sobre uma superfície parada, o ponto de contato tem velocidade nula instantaneamente. Isso impõe o vínculo:
$$ V_{cm} = \omega R \quad \text{e} \quad a_{cm} = \alpha R $$

Nesse caso, a força de atrito estático realiza trabalho nulo (pois o ponto de aplicação não se desloca), conservando a energia mecânica.
      `,
    },
    {
      title: "4. Momento Angular e sua Conservação",
      content: String.raw`
O Momento Angular ($\vec{L}$) é a grandeza conservada em sistemas isolados de torques externos.
$$ \vec{L} = \vec{r} \times \vec{p} \quad \text{(Partícula)} $$
$$ \vec{L} = I\vec{\omega} \quad \text{(Corpo Rígido simétrico)} $$

A taxa de variação do momento angular é o torque resultante:
$$ \vec{\tau}_{res} = \frac{d\vec{L}}{dt} $$

**Conservação:** Se $\sum \vec{\tau}_{ext} = 0$, então $\vec{L}$ é constante.
Exemplo: Bailarina fechando os braços (diminui $I$, aumenta $\omega$ para manter $L$ constante).

**Precessão de Giroscópio (Nível Avançado):**
Se um torque atua perpendicularmente ao momento angular, o vetor $\vec{L}$ gira sem mudar de módulo. A velocidade de precessão é $\Omega = \tau / L$.
      `,
    },
    {
      title: "5. Hidrostática Avançada: Fluidos em Rotação",
      content: String.raw`
Quando um fluido gira com velocidade angular $\omega$ constante (como um balde girando), ele se comporta como um corpo rígido. A superfície livre assume a forma de um paraboloide de revolução.

A pressão em um ponto $(r, z)$ é dada por:
$$ P(r, z) = P_0 + \rho g (h - z) + \frac{1}{2}\rho \omega^2 r^2 $$

**Estabilidade de Flutuação (Metacentro):**
Para um corpo flutuante ser estável, o **Metacentro** (ponto de interseção da linha de empuxo com o eixo de simetria após pequena inclinação) deve estar **acima** do Centro de Gravidade.
      `,
    },
  ],
};
