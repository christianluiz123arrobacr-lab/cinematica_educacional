import { Section } from "@/components/AdvancedTheory";

export const ITAWavesTheory: {
  title: string;
  introduction: string;
  sections: Section[];
} = {
  title: "Ondulatória Completa: Do MHS à Equação de Onda",
  introduction:
    "A Ondulatória estuda a propagação de energia sem transporte de matéria. Iniciamos com o Movimento Harmônico Simples (MHS), base de todas as oscilações, e evoluímos para a Equação de Onda diferencial, fenômenos de interferência, difração e acústica, com o rigor matemático exigido em exames de alto nível.",
  sections: [
    {
      title: "1. Movimento Harmônico Simples (MHS)",
      content: String.raw`
### 1.1. Definição e Equação Diferencial
O MHS ocorre quando a força restauradora é proporcional ao deslocamento ($F = -kx$).
Equação diferencial:
$$ m\frac{d^2x}{dt^2} + kx = 0 \Rightarrow \frac{d^2x}{dt^2} + \omega^2 x = 0 $$
Onde $\omega = \sqrt{k/m}$ é a frequência angular natural.

### 1.2. Solução e Energia
Solução geral: $x(t) = A \cos(\omega t + \phi_0)$.
Energia Mecânica (conservada):
$$ E = \frac{1}{2}kA^2 = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 $$

### 1.3. Pêndulo Simples
Para pequenas oscilações ($\sin\theta \approx \theta$):
$$ T = 2\pi \sqrt{\frac{L}{g}} $$
O período independe da massa.
      `,
    },
    {
      title: "2. Ondas Mecânicas e a Equação de Onda",
      content: String.raw`
### 2.1. Classificação das Ondas
*   **Natureza:** Mecânicas (precisam de meio) vs. Eletromagnéticas (vácuo).
*   **Direção de Vibração:** Transversais (corda, luz) vs. Longitudinais (som, mola).
*   **Dimensões:** 1D (corda), 2D (lago), 3D (som).

### 2.2. A Equação de Onda Unidimensional
Dedução dinâmica para corda tensa leva à equação diferencial parcial:
$$ \frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 y}{\partial t^2} $$
A velocidade de propagação na corda (Fórmula de Taylor) é $v = \sqrt{T/\mu}$.

### 2.3. Função de Onda Harmônica
Solução para onda progressiva no sentido $+x$:
$$ y(x,t) = A \cos(kx - \omega t + \phi_0) $$
Relações fundamentais:
*   $v = \lambda f = \frac{\omega}{k}$
*   $k = \frac{2\pi}{\lambda}$ (Número de onda)
*   $\omega = \frac{2\pi}{T}$ (Frequência angular)
      `,
    },
    {
      title: "3. Fenômenos Ondulatórios",
      content: String.raw`
### 3.1. Reflexão e Refração
*   **Reflexão:** Inversão de fase ocorre em extremidade fixa (ou meio mais rígido). Sem inversão em extremidade livre.
*   **Refração:** A frequência $f$ permanece constante. A velocidade e o comprimento de onda mudam.
    $$ \frac{v_1}{v_2} = \frac{\lambda_1}{\lambda_2} = \frac{n_2}{n_1} $$

### 3.2. Interferência e Ondas Estacionárias
Superposição linear: $y_{res} = y_1 + y_2$.
Ondas estacionárias (interferência de ondas opostas idênticas):
$$ y(x,t) = [2A\sin(kx)]\cos(\omega t) $$
Condição de ressonância em corda fixa-fixa (comprimento $L$):
$$ L = n \frac{\lambda}{2} \Rightarrow f_n = \frac{n v}{2L} $$

### 3.3. Difração e Princípio de Huygens
Capacidade da onda de contornar obstáculos ($d \approx \lambda$).
Cada ponto de uma frente de onda funciona como fonte de ondaletas secundárias.
      `,
    },
    {
      title: "4. Acústica",
      content: String.raw`
### 4.1. Velocidade e Qualidades Fisiológicas
Velocidade em gases: $v = \sqrt{\gamma RT/M}$ (Laplace).
*   **Altura:** Frequência (Grave/Agudo).
*   **Intensidade:** Amplitude/Energia (Forte/Fraco). Nível sonoro $\beta = 10 \log(I/I_0)$.
*   **Timbre:** Formato da onda (harmônicos presentes).

### 4.2. Tubos Sonoros
*   **Aberto-Aberto:** Harmônicos pares e ímpares ($f_n = nv/2L$).
*   **Aberto-Fechado:** Apenas harmônicos ímpares ($f_n = nv/4L$, com $n=1,3,5\dots$).

### 4.3. Efeito Doppler
Variação aparente da frequência devido ao movimento relativo.
$$ f_{obs} = f_{fonte} \left( \frac{v_{som} \pm v_{obs}}{v_{som} \mp v_{fonte}} \right) $$
Referencial positivo: **Observador $\to$ Fonte**.
      `,
    },
  ],
};
