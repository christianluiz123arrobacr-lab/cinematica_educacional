import { Section } from "@/components/AdvancedTheory";

export const ITAThermologyTheory: {
  title: string;
  introduction: string;
  sections: Section[];
} = {
  title: "Termologia Completa: Do Básico à Termodinâmica Estatística",
  introduction:
    "A Termologia é o ramo da física que estuda o calor, a temperatura e suas implicações na matéria. Nesta abordagem completa, partimos das definições fenomenológicas fundamentais (escalas, calorimetria) e avançamos rigorosamente até a Termodinâmica Estatística e os potenciais termodinâmicos, ferramentas essenciais para a compreensão profunda de sistemas físicos complexos no nível ITA/IME.",
  sections: [
    {
      title: "1. Termometria e Dilatação Térmica",
      content: String.raw`
### 1.1. O Conceito de Temperatura e Lei Zero
A temperatura é a grandeza física escalar associada à energia cinética média translacional das partículas de um sistema ($E_c \propto T$).
*   **Lei Zero da Termodinâmica:** Se dois corpos A e B estão em equilíbrio térmico com um terceiro corpo C, então A e B estão em equilíbrio térmico entre si. Isso permite a definição de escalas termométricas.

### 1.2. Escalas Termométricas
Relação geral entre escalas arbitrárias $E_1$ e $E_2$:
$$ \frac{T - T_{fusão}}{T_{ebulição} - T_{fusão}} = \text{constante} $$
A escala absoluta (Kelvin) é fundamental pois $0 K$ representa o estado de energia cinética mínima (não nula, devido ao Princípio da Incerteza).

### 1.3. Dilatação Térmica: Do Escalar ao Tensorial
No nível macroscópico básico, temos $\Delta L = L_0 \alpha \Delta T$.
No nível avançado, para sólidos anisotrópicos (cristais), a dilatação depende da direção. Definimos o **Tensor de Dilatação Térmica** $\alpha_{ij}$:
$$ \epsilon_{ij} = \alpha_{ij} \Delta T $$
Onde $\epsilon_{ij}$ é o tensor de deformação (strain). A variação de volume é o traço do tensor: $\beta = \text{Tr}(\alpha_{ij})$.

### 1.4. Dilatação de Líquidos e Recipientes
Para líquidos, a dilatação é sempre volumétrica. A relação fundamental considera a dilatação do recipiente:
$$ \Delta V_{real} = \Delta V_{aparente} + \Delta V_{recipiente} $$
$$ \gamma_{real} = \gamma_{ap} + \gamma_{rec} $$
**Análise Diferencial:** Se o coeficiente $\gamma$ varia com a temperatura, a dilatação real é obtida por integração:
$$ V(T) = V_0 \exp\left( \int_{T_0}^T \gamma(T') dT' \right) $$
      `,
    },
    {
      title: "2. Calorimetria e Mudanças de Fase",
      content: String.raw`
### 2.1. Calor Sensível e Capacidade Térmica
O calor sensível causa variação de temperatura. Para sólidos e líquidos:
$$ Q = m c \Delta T $$
No rigor do cálculo, a capacidade térmica específica $c$ depende da temperatura ($c(T)$):
$$ Q = m \int_{T_i}^{T_f} c(T) \, dT $$
Pela Lei de Dulong-Petit, para sólidos a altas temperaturas, a capacidade térmica molar tende a $3R$.

### 2.2. Calor Latente e Transições de Fase
O calor latente ($L$) é a energia necessária para mudança de fase (quebra ou formação de ligações) sem variação de temperatura:
$$ Q = m L $$
**Diagramas de Fase:** O ponto triplo é onde as três fases coexistem. O ponto crítico é onde a distinção entre líquido e vapor desaparece. A inclinação da curva de fusão no diagrama P-T é dada pela **Equação de Clapeyron**:
$$ \frac{dP}{dT} = \frac{L}{T \Delta V} $$
Isso explica por que o gelo funde sob pressão (água contrai na fusão, $\Delta V < 0 \Rightarrow dP/dT < 0$).

### 2.3. Trocas de Calor e Equivalente em Água
Em sistemas isolados adiabaticamente: $\sum Q = 0$.
O equivalente em água ($E$) de um corpo é a massa de água que possui a mesma capacidade térmica que o corpo: $E = C_{corpo} / c_{água}$.
      `,
    },
    {
      title: "3. Teoria Cinética dos Gases",
      content: String.raw`
### 3.1. Modelo do Gás Ideal
Premissas: Partículas pontuais, movimento aleatório, colisões perfeitamente elásticas, sem forças intermoleculares.
Equação de Estado: $PV = nRT$.

### 3.2. Interpretação Microscópica da Pressão e Temperatura
A pressão resulta da variação de momento linear nas colisões com as paredes:
$$ P = \frac{1}{3} \rho \langle v^2 \rangle $$
A temperatura é proporcional à energia cinética média por grau de liberdade:
$$ \langle E_c \rangle = \frac{3}{2} k_B T $$
$$ v_{rms} = \sqrt{\frac{3RT}{M}} $$

### 3.3. Teorema da Equipartição da Energia
Cada grau de liberdade quadrático na energia contribui com $\frac{1}{2}k_B T$ para a energia interna média.
*   Monoatômico (3 translações): $U = \frac{3}{2}nRT$ ($C_v = \frac{3}{2}R$)
*   Diatômico (3 translações + 2 rotações): $U = \frac{5}{2}nRT$ ($C_v = \frac{5}{2}R$)
*   Sólidos (3 translações + 3 vibrações potenciais): $U = 3nRT$ (Dulong-Petit).

### 3.4. Distribuição de Maxwell-Boltzmann
A probabilidade de encontrar uma molécula com velocidade $v$ é:
$$ f(v) = 4\pi \left(\frac{M}{2\pi RT}\right)^{3/2} v^2 \exp\left(-\frac{Mv^2}{2RT}\right) $$
      `,
    },
    {
      title: "4. Termodinâmica",
      content: String.raw`
### 4.1. Primeira Lei: Conservação da Energia
$$ dU = \delta Q - \delta W $$
*   Trabalho ($W$): Área sob a curva no diagrama P-V ($W = \int P dV$).
*   Energia Interna ($U$): Função de estado. Para gás ideal, depende apenas de $T$.

### 4.2. Processos Termodinâmicos Notáveis
*   **Isotérmico:** $\Delta U = 0 \Rightarrow Q = W = nRT \ln(V_f/V_i)$.
*   **Adiabático:** $Q = 0 \Rightarrow PV^\gamma = \text{cte}$. Trabalho: $W = -\Delta U = n C_v (T_i - T_f)$.
*   **Isobárico:** $W = P\Delta V$, $Q = n C_p \Delta T$.
*   **Relação de Mayer:** $C_p - C_v = R$.

### 4.3. Segunda Lei e Entropia
*   **Enunciado de Kelvin-Planck:** Impossível converter todo calor em trabalho ciclicamente.
*   **Enunciado de Clausius:** Calor flui espontaneamente do quente para o frio.
*   **Entropia ($S$):** Medida da desordem ou multiplicidade de microestados ($\Omega$):
    $$ S = k_B \ln \Omega $$
    Variação macroscópica: $dS = \delta Q_{rev}/T$.
    Para processos irreversíveis em sistemas isolados: $\Delta S > 0$.

### 4.4. Ciclo de Carnot e Máquinas Térmicas
Ciclo reversível composto por duas isotérmicas e duas adiabáticas.
Rendimento máximo teórico:
$$ \eta = 1 - \frac{T_{fria}}{T_{quente}} $$
Qualquer máquina real operando entre as mesmas temperaturas tem $\eta_{real} < \eta_{Carnot}$.
      `,
    },
    {
      title: "5. Transmissão de Calor",
      content: String.raw`
### 5.1. Condução (Lei de Fourier)
Fluxo de calor através de um meio material:
$$ \Phi = \frac{dQ}{dt} = -kA \frac{dT}{dx} $$
O sinal negativo indica fluxo contrário ao gradiente de temperatura.

### 5.2. Convecção (Lei de Newton do Resfriamento)
Transferência por movimento de fluidos:
$$ \Phi = h A (T_{superfície} - T_{fluido}) $$

### 5.3. Irradiação (Lei de Stefan-Boltzmann)
Emissão de ondas eletromagnéticas por corpos aquecidos. Potência irradiada por um corpo negro:
$$ P = \sigma A T^4 $$
Lei de Wien para o pico de emissão: $\lambda_{max} T = b$ (explica a cor das estrelas).
      `,
    },
  ],
};
