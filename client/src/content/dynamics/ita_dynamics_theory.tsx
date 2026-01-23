import { Section } from "@/components/AdvancedTheory";

export const ITADynamicsTheory: {
  title: string;
  introduction: string;
  sections: Section[];
} = {
  title: "Dinâmica Avançada: Sistemas Não-Inerciais e Massa Variável",
  introduction:
    "A Dinâmica Newtoniana vai muito além de $F=ma$. Neste módulo, exploraremos a formulação mais geral das leis de movimento, permitindo a análise de sistemas com massa variável (foguetes), movimento em referenciais acelerados (forças fictícias) e a interação com fluidos (resistência do ar). A compreensão desses tópicos é o divisor de águas entre a física do ensino médio e a engenharia de ponta.",
  sections: [
    {
      title: "1. A Segunda Lei Generalizada e Massa Variável",
      content: String.raw`
A forma mais fundamental da Segunda Lei de Newton não relaciona força com aceleração, mas sim com a variação da **Quantidade de Movimento Linear** ($\vec{p} = m\vec{v}$):

$$ \vec{F}_{res} = \frac{d\vec{p}}{dt} $$

Se a massa $m$ for constante, recuperamos $\vec{F} = m\vec{a}$. Porém, em sistemas como foguetes e correntes caindo, a massa varia.

### Equação de Tsiolkovsky (Foguetes)
Considere um foguete de massa $M(t)$ expelindo gases com velocidade $\vec{u}$ em relação ao foguete. Pela conservação do momento linear no sistema isolado (foguete + gases):

$$ \vec{F}_{ext} = M\frac{d\vec{v}}{dt} - \vec{u}\frac{dM}{dt} $$

O termo $-\vec{u}\frac{dM}{dt}$ é chamado de **Empuxo do Foguete**.
Integrando no espaço livre ($\vec{F}_{ext}=0$), obtemos a variação de velocidade:
$$ \Delta v = u \ln\left(\frac{M_0}{M_f}\right) $$

**Exemplo ITA:** Uma corrente de comprimento $L$ e massa $M$ está esticada sobre uma mesa, com uma ponta pendurada por um orifício. Calcule a velocidade da corrente quando ela acaba de sair da mesa.
*Solução:* A força peso atua sobre a parte pendente (massa variável). A equação de movimento envolve $d(mv)/dt$.
      `,
    },
    {
      title: "2. Forças Dependentes da Velocidade (Resistência do Ar)",
      content: String.raw`
No mundo real, o atrito com o ar não é desprezível. A força de arrasto $F_d$ depende da velocidade.

### Regimes de Arrasto
1.  **Regime Laminar (Baixas velocidades):** Lei de Stokes ($F_d = -bv$). Comum para gotas de óleo (Millikan) ou poeira.
2.  **Regime Turbulento (Altas velocidades):** Arrasto Quadrático ($F_d = -\frac{1}{2}C_x \rho A v^2$). Comum para carros, projéteis e paraquedistas.

### Equação Diferencial do Movimento (Queda Vertical)
Para o regime linear ($F_d = -kv$):
$$ m\frac{dv}{dt} = mg - kv $$

Esta é uma EDO linear de 1ª ordem. A solução por separação de variáveis nos dá:
$$ v(t) = \frac{mg}{k} \left( 1 - e^{-\frac{k}{m}t} \right) $$

**Velocidade Terminal ($v_T$):** Quando $t \to \infty$ (ou $a=0$):
$$ v_T = \frac{mg}{k} $$

Para o regime quadrático ($F_d = -cv^2$), a velocidade terminal é $v_T = \sqrt{mg/c}$.
      `,
    },
    {
      title: "3. Referenciais Não-Inerciais e Forças Fictícias",
      content: String.raw`
As Leis de Newton valem apenas em Referenciais Inerciais. Se o observador está acelerado (ex: dentro de um carro fazendo curva ou na Terra girando), surgem **Forças Fictícias** (ou Inerciais) para explicar o movimento.

Seja $S$ um referencial inercial e $S'$ um referencial que gira com velocidade angular $\vec{\omega}$ e translada com aceleração $\vec{A}$. A equação de movimento em $S'$ é:

$$ m\vec{a}_{rel} = \vec{F}_{real} + \vec{F}_{fictícia} $$

Onde as forças fictícias são:
1.  **Força de Arrastamento Translacional:** $-m\vec{A}$ (Ex: ser jogado para trás no carro).
2.  **Força Centrífuga:** $-m\vec{\omega} \times (\vec{\omega} \times \vec{r}')$. Aponta para fora da curva.
3.  **Força de Coriolis:** $-2m\vec{\omega} \times \vec{v}_{rel}$. Depende da velocidade do corpo no referencial móvel.

**Aplicações:**
*   **Pêndulo de Foucault:** O plano de oscilação gira devido à força de Coriolis (prova da rotação da Terra).
*   **Ciclones:** O ar que flui para uma zona de baixa pressão é desviado por Coriolis (anti-horário no Hemisfério Norte).
*   **Desvio de Projéteis:** Um tiro de longo alcance para o Norte desvia para o Leste (no Hemisfério Norte).
      `,
    },
    {
      title: "4. Trabalho e Energia em Campos Conservativos",
      content: String.raw`
O trabalho é a integral de linha da força ao longo da trajetória:
$$ W_{A \to B} = \int_{A}^{B} \vec{F} \cdot d\vec{r} $$

### Forças Conservativas
Uma força é conservativa se o trabalho independe da trajetória (apenas dos pontos inicial e final). Matematicamente, isso implica que o rotacional da força é nulo:
$$ \nabla \times \vec{F} = 0 \quad (\text{Rotacional Nulo}) $$

Nesse caso, podemos definir uma **Energia Potencial** $U(\vec{r})$ tal que:
$$ \vec{F} = -\nabla U = -\left( \frac{\partial U}{\partial x}\hat{i} + \frac{\partial U}{\partial y}\hat{j} + \frac{\partial U}{\partial z}\hat{k} \right) $$

### Análise de Estabilidade
Em um gráfico de Energia Potencial $U(x)$:
*   **Equilíbrio:** Pontos onde $F = -dU/dx = 0$ (extremos de U).
*   **Estável:** Mínimo local ($\frac{d^2U}{dx^2} > 0$). Pequenas perturbações geram MHS.
*   **Instável:** Máximo local ($\frac{d^2U}{dx^2} < 0$).
*   **Indiferente:** $U$ constante.

**Exemplo IME:** Uma partícula sob ação de uma força $F(x) = -kx + ax^3$. Determine os pontos de equilíbrio e sua estabilidade.
*Solução:* Achar $U(x)$ integrando $-F(x)$, depois analisar $U'(x)=0$ e o sinal de $U''(x)$.
      `,
    },
    {
      title: "5. Sistema de Partículas e Centro de Massa",
      content: String.raw`
Para um sistema de $N$ partículas, o movimento pode ser decomposto em:
1.  Movimento do **Centro de Massa (CM)** (como se toda massa estivesse lá, sob ação das forças externas).
2.  Movimento interno em relação ao CM.

$$ \vec{R}_{cm} = \frac{\sum m_i \vec{r}_i}{\sum m_i} $$

### Teoremas de König
*   **Energia Cinética:** $E_c = \frac{1}{2}M V_{cm}^2 + E_{c,rel}$ (Energia de translação do CM + Energia interna de rotação/vibração).
*   **Momento Angular:** $\vec{L} = \vec{R}_{cm} \times M\vec{V}_{cm} + \vec{L}_{rel}$.

**Colisões:**
Em um sistema isolado ($\vec{F}_{ext}=0$), o momento linear total $\vec{P}$ se conserva. O CM se move em MRU.
O **Coeficiente de Restituição** ($e$) mede a elasticidade:
$$ e = \frac{|\vec{v}_{afastamento}|}{|\vec{v}_{aproximação}|} $$
*   $e=1$: Colisão Elástica (Conserva Energia Cinética).
*   $0 < e < 1$: Colisão Inelástica.
*   $e=0$: Colisão Perfeitamente Inelástica (Corpos grudam).
      `,
    },
  ],
};
