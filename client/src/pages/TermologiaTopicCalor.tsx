import { Link } from "wouter";
import { ArrowLeft, Flame, Info, AlertTriangle, CheckCircle2, Lightbulb, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";

export default function TermologiaTopicCalor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/termologia">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Termologia</h1>
              <p className="text-xs text-slate-600">Energia Térmica e Movimento Molecular</p>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🔥 Energia Térmica e Movimento Molecular</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Explicação Simples</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Imagine um salão de baile cheio de pessoas dançando. Quanto mais rápido elas se movem, mais energia o salão tem. **Energia térmica** é exatamente isso: a energia total de todas as moléculas de um objeto se movendo e vibrando.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Cada molécula é como um dançarino microscópico. Elas nunca param de se mover — vibram, giram e colidem umas com as outras bilhões de vezes por segundo. A soma de toda essa energia de movimento é a **energia térmica** do objeto.
              </p>
              <p className="text-slate-700 leading-relaxed">
                **Calor**, por outro lado, é a energia térmica em trânsito — é quando a "dança" de um objeto mais quente faz o objeto mais frio começar a dançar mais rápido também, através de colisões moleculares.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                Três Analogias Práticas
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-bold text-blue-900 mb-2">1. Salão de Baile (Energia Térmica)</p>
                  <p className="text-slate-700 text-sm">
                    Moléculas são como dançarinos. Quanto mais rápido dançam, mais energia térmica o "salão" (objeto) tem. Temperatura mede a velocidade média dos dançarinos.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-bold text-blue-900 mb-2">2. Bolas de Bilhar (Colisões Moleculares)</p>
                  <p className="text-slate-700 text-sm">
                    Moléculas colidem como bolas de bilhar. Quando uma bola rápida (molécula quente) bate em uma lenta (molécula fria), a rápida desacelera e a lenta acelera — isso é transferência de calor!
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-bold text-blue-900 mb-2">3. Multidão em Movimento (Temperatura vs Calor)</p>
                  <p className="text-slate-700 text-sm">
                    Temperatura é a velocidade média da multidão. Calor é quando uma multidão rápida empurra uma multidão lenta, fazendo-a acelerar. Você não "tem" calor — você "transfere" calor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 0: Diferença entre Calor e Temperatura */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">0</div>
            <h2 className="text-3xl font-bold text-slate-900">Diferença entre Calor e Temperatura</h2>
          </div>

          {/* Contexto Histórico */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded p-6 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              Contexto Histórico: A Grande Confusão
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Durante séculos, cientistas confundiram **calor** e **temperatura**, tratando-os como sinônimos. Acreditava-se que "calor" era uma substância material chamada **calórico** que fluia entre objetos.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Foi **Joseph Black** (1728-1799), médico e químico escocês, quem primeiro distinguiu claramente os dois conceitos em 1760. Ele percebeu que:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Dois objetos podem ter a **mesma temperatura** mas conter **quantidades diferentes de calor**</li>
              <li>Um iceberg (0°C) contém **muito mais energia térmica** que um fósforo aceso (600°C), apesar da temperatura menor</li>
              <li>Calor é **energia em trânsito**, não uma propriedade intrínseca</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Essa distinção foi revolucionária e pavimentou o caminho para a termodinâmica moderna. Hoje sabemos que **temperatura** mede a energia cinética média das moléculas, enquanto **calor** é a energia térmica transferida entre sistemas.
            </p>
          </div>

          {/* Explicação Simples com Analogias */}
          <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-8">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              Três Analogias Práticas
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white rounded p-4 border border-blue-100">
                <h5 className="font-bold text-slate-900 mb-2">1. Salão de Baile vs Velocidade Média</h5>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Temperatura</strong> é como a **velocidade média** dos dançarinos em um salão. Dois salões podem ter a mesma velocidade média, mas um salão com 1000 pessoas tem **muito mais energia total** que um com 10 pessoas. <strong>Calor</strong> é a energia que flui quando um salão "rápido" faz um salão "lento" acelerar.
                </p>
              </div>

              <div className="bg-white rounded p-4 border border-blue-100">
                <h5 className="font-bold text-slate-900 mb-2">2. Oceano vs Xícara de Café</h5>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Uma **xícara de café** a 90°C tem temperatura muito maior que o **oceano** a 20°C. Mas o oceano contém trilhões de vezes mais energia térmica total. Se você jogar a xícara no oceano, o oceano não esquenta — a xícara esfria. <strong>Calor</strong> é a energia que flui da xícara para o oceano.
                </p>
              </div>

              <div className="bg-white rounded p-4 border border-blue-100">
                <h5 className="font-bold text-slate-900 mb-2">3. Conta Bancária vs Transação</h5>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Temperatura</strong> é como o **saldo médio por pessoa** em uma conta conjunta. <strong>Energia térmica</strong> é o **saldo total** da conta. <strong>Calor</strong> é a **transferência de dinheiro** entre contas — só existe durante a transação, não é uma propriedade da conta.
                </p>
              </div>
            </div>
          </div>

          {/* Tabela Comparativa */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Tabela Comparativa: Calor vs Temperatura</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">Característica</th>
                    <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">Temperatura (T)</th>
                    <th className="border border-slate-300 px-4 py-3 text-left font-bold text-slate-900">Calor (Q)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3 font-bold text-slate-900">Definição</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Medida da energia cinética <strong>média</strong> das moléculas</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Energia térmica em <strong>trânsito</strong> entre sistemas</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3 font-bold text-slate-900">Natureza</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Propriedade <strong>intrínseca</strong> do sistema (estado)</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Processo de <strong>transferência</strong> (não é propriedade)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3 font-bold text-slate-900">Unidades (SI)</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Kelvin (K), Celsius (°C), Fahrenheit (°F)</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Joule (J), caloria (cal), quilocaloria (kcal)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3 font-bold text-slate-900">Dependência da massa</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700"><strong>Não</strong> depende da massa (propriedade intensiva)</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700"><strong>Sim</strong>, depende da massa (propriedade extensiva)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3 font-bold text-slate-900">Medida</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Termômetro</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Calorímetro</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3 font-bold text-slate-900">Direção de fluxo</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">N/A (não flui)</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Sempre do <strong>quente</strong> para o <strong>frio</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3 font-bold text-slate-900">Equilíbrio</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Dois sistemas em contato têm a <strong>mesma temperatura</strong></td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Fluxo de calor <strong>cessa</strong> no equilíbrio térmico</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3 font-bold text-slate-900">Exemplo</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">"A água está a 25°C"</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">"A água absorveu 5000 J de calor"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Exemplo Numérico Detalhado */}
          <div className="bg-slate-900 text-white rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">Exemplo Numérico: Iceberg vs Fósforo</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Considere:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
              <li><strong>Iceberg:</strong> massa m = 10⁶ kg (1000 toneladas), temperatura T = 0°C = 273 K</li>
              <li><strong>Fósforo aceso:</strong> massa m = 0,001 kg (1 grama), temperatura T = 600°C = 873 K</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mb-4">
              Energia térmica total (aproximando como gases ideais, U = (3/2) nRT):
            </p>
            <div className="bg-slate-800 rounded p-4 mb-4">
              <p className="text-slate-300 mb-2"><strong>Iceberg:</strong></p>
              <MathFormula formula="U_{\text{iceberg}} \approx \frac{3}{2} \cdot \frac{m}{M} \cdot R \cdot T = \frac{3}{2} \cdot \frac{10^6 \text{ kg}}{0.018 \text{ kg/mol}} \cdot 8.314 \text{ J/(mol·K)} \cdot 273 \text{ K}" />
              <p className="text-slate-300 mt-2">U_iceberg ≈ <strong>1.9 × 10¹³ J</strong> (19 trilhões de joules)</p>
            </div>
            <div className="bg-slate-800 rounded p-4 mb-4">
              <p className="text-slate-300 mb-2"><strong>Fósforo:</strong></p>
              <MathFormula formula="U_{\text{fósforo}} \approx \frac{3}{2} \cdot \frac{0.001 \text{ kg}}{0.03 \text{ kg/mol}} \cdot 8.314 \text{ J/(mol·K)} \cdot 873 \text{ K}" />
              <p className="text-slate-300 mt-2">U_fósforo ≈ <strong>360 J</strong></p>
            </div>
            <p className="text-slate-300 leading-relaxed">
              <strong>Conclusão:</strong> O iceberg (0°C) contém <strong>50 bilhões de vezes</strong> mais energia térmica que o fósforo (600°C), apesar da temperatura muito menor. <strong>Temperatura</strong> mede energia <em>média</em> por molécula; <strong>energia térmica total</strong> depende da massa.
            </p>
          </div>

          {/* Alerta sobre Erros Comuns */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-6 mb-8">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              Erros Comuns ao Confundir Calor e Temperatura
            </h4>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Erro 1:</strong> "O objeto contém muito calor" → <strong>Correto:</strong> "O objeto tem alta temperatura" ou "contém muita energia térmica"</li>
              <li><strong>Erro 2:</strong> "Calor flui do objeto A para o B" quando A e B estão em equilíbrio → <strong>Correto:</strong> "Não há fluxo de calor no equilíbrio térmico"</li>
              <li><strong>Erro 3:</strong> "Temperatura é a quantidade de calor" → <strong>Correto:</strong> "Temperatura mede energia cinética média; calor é energia transferida"</li>
              <li><strong>Erro 4:</strong> Usar "calor" e "temperatura" como sinônimos → <strong>Correto:</strong> São conceitos distintos e complementares</li>
            </ul>
          </div>

          {/* Passo-a-Passo para Identificar */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded p-6">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Passo-a-Passo: Como Identificar Calor vs Temperatura
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <p className="font-bold text-slate-900">Pergunte: É uma propriedade do sistema ou uma transferência?</p>
                  <p className="text-slate-700 text-sm">Se é propriedade ("o objeto está a X graus") → <strong>Temperatura</strong>. Se é transferência ("absorveu X joules") → <strong>Calor</strong>.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <p className="font-bold text-slate-900">Verifique a unidade</p>
                  <p className="text-slate-700 text-sm">K, °C, °F → <strong>Temperatura</strong>. J, cal, kcal → <strong>Calor</strong> ou energia térmica.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <p className="font-bold text-slate-900">Depende da massa?</p>
                  <p className="text-slate-700 text-sm">Se <strong>não</strong> depende da massa → <strong>Temperatura</strong> (intensiva). Se <strong>sim</strong> → <strong>Calor</strong> ou energia térmica (extensiva).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <p className="font-bold text-slate-900">Há dois sistemas interagindo?</p>
                  <p className="text-slate-700 text-sm">Se <strong>sim</strong> e há diferença de temperatura → <strong>Calor</strong> flui entre eles. Se estão em equilíbrio → <strong>mesma temperatura</strong>, sem fluxo de calor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 1: Contexto Histórico */}      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded p-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-amber-600" />
              Contexto Histórico: A Revolução da Teoria Cinética
            </h3>
            
            <div className="space-y-4 text-slate-700">
              <p className="leading-relaxed">
                Durante séculos, cientistas acreditavam que calor era uma substância invisível chamada **"calórico"** que fluía de objetos quentes para frios. Essa teoria estava completamente errada!
              </p>
              
              <p className="leading-relaxed">
                Em **1738**, o matemático suíço **Daniel Bernoulli** propôs uma ideia revolucionária: calor não é uma substância, mas sim o **movimento das partículas**. Ele sugeriu que gases são compostos de inúmeras partículas em movimento rápido e aleatório, e que a pressão é causada pelas colisões dessas partículas com as paredes do recipiente.
              </p>

              <p className="leading-relaxed">
                A teoria de Bernoulli foi ignorada por quase um século! Somente em **1843**, o físico inglês **James Prescott Joule** provou experimentalmente que calor e trabalho mecânico são formas equivalentes de energia. Ele demonstrou que agitar água com uma roda de pás aumenta sua temperatura — a energia mecânica se transforma em energia térmica (movimento molecular).
              </p>

              <p className="leading-relaxed">
                Em **1859**, o físico escocês **James Clerk Maxwell** desenvolveu a **teoria cinética dos gases**, derivando matematicamente a relação entre temperatura e energia cinética molecular. Ele mostrou que a temperatura absoluta (Kelvin) é diretamente proporcional à energia cinética média das moléculas:
              </p>

              <div className="bg-white border border-amber-300 rounded p-4 my-4">
                <MathFormula formula={String.raw`\langle E_c \rangle = \frac{3}{2} k_B T`} display={true} />
              </div>

              <p className="leading-relaxed">
                Finalmente, em **1872**, o físico austríaco **Ludwig Boltzmann** completou a teoria, conectando a termodinâmica macroscópica (temperatura, pressão, volume) com a mecânica estatística microscópica (movimento de moléculas individuais). Ele provou que a **entropia** (desordem) de um sistema está relacionada ao número de microestados possíveis das moléculas.
              </p>

              <p className="leading-relaxed font-bold text-amber-900">
                Essa revolução conceitual transformou nossa compreensão da natureza: calor não é uma substância, mas sim energia de movimento molecular. Temperatura não é uma propriedade misteriosa, mas sim a medida da energia cinética média das partículas.
              </p>
            </div>
          </div>
        </div>

        {/* Seção 1: Energia Cinética Molecular */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Energia Cinética Molecular</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">O que é?</h4>
              <p className="text-slate-700 leading-relaxed">
                Cada molécula de um gás (como O₂ ou N₂ no ar) está em movimento constante e aleatório. Ela tem **energia cinética** devido à sua velocidade. A energia cinética de uma única molécula é dada pela fórmula clássica da mecânica:
              </p>
            </div>

            {/* Fórmula Principal */}
            <div className="bg-slate-900 text-white rounded-lg p-6 shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-orange-400">Energia Cinética de Uma Molécula</h4>
              
              <div className="bg-slate-800 rounded p-4 mb-4">
                <MathFormula formula={String.raw`E_c = \frac{1}{2} m v^2`} display={true} />
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">E_c</p>
                  <p className="text-slate-300">Energia cinética da molécula (em Joules, J)</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">m</p>
                  <p className="text-slate-300">Massa da molécula (em kg)</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">v</p>
                  <p className="text-slate-300">Velocidade da molécula (em m/s)</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">1/2</p>
                  <p className="text-slate-300">Fator geométrico da energia cinética translacional</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Interpretação Física
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <strong>1. Movimento Aleatório:</strong> Moléculas de um gás se movem em todas as direções com velocidades diferentes. Algumas são rápidas, outras lentas. A distribuição de velocidades segue a **distribuição de Maxwell-Boltzmann**.
                </p>
                <p className="leading-relaxed">
                  <strong>2. Energia Cinética Média:</strong> Como as velocidades variam, usamos a **média** da energia cinética de todas as moléculas. Essa média está diretamente relacionada à temperatura absoluta (Kelvin).
                </p>
                <p className="leading-relaxed">
                  <strong>3. Relação com Temperatura:</strong> Quanto maior a temperatura, maior a energia cinética média das moléculas. Dobrar a temperatura absoluta (em Kelvin) dobra a energia cinética média.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 2: Relação Energia-Temperatura (Teoria Cinética) */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Relação Energia-Temperatura (Teoria Cinética dos Gases)</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">A Fórmula Fundamental de Maxwell</h4>
              <p className="text-slate-700 leading-relaxed">
                James Clerk Maxwell derivou uma das equações mais importantes da física: a relação entre a **energia cinética média** das moléculas de um gás ideal e sua **temperatura absoluta**. Esta equação conecta o mundo microscópico (moléculas) com o mundo macroscópico (temperatura mensurável).
              </p>
            </div>

            {/* Fórmula Principal */}
            <div className="bg-slate-900 text-white rounded-lg p-6 shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-orange-400">Energia Cinética Média Molecular</h4>
              
              <div className="bg-slate-800 rounded p-4 mb-4">
                <MathFormula formula={String.raw`\langle E_c \rangle = \frac{3}{2} k_B T`} display={true} />
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">⟨E_c⟩</p>
                  <p className="text-slate-300">Energia cinética média de uma molécula (em Joules, J). O símbolo ⟨ ⟩ denota média estatística sobre todas as moléculas.</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">k_B</p>
                  <p className="text-slate-300">Constante de Boltzmann = 1,38 × 10⁻²³ J/K. Conecta temperatura (escala macroscópica) com energia (escala molecular).</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">T</p>
                  <p className="text-slate-300">Temperatura absoluta (em Kelvin, K). DEVE ser Kelvin, não Celsius! T = 0 K é o zero absoluto.</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">3/2</p>
                  <p className="text-slate-300">Fator de graus de liberdade translacionais. Moléculas monoatômicas têm 3 direções de movimento (x, y, z), cada uma contribui com k_B T / 2.</p>
                </div>
              </div>
            </div>

            {/* Dedução Completa */}
            <div className="bg-green-50 border border-green-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Dedução Matemática Completa (Teoria Cinética)
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-green-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-2">Pressão de um Gás Ideal</p>
                      <p className="text-slate-700 text-sm mb-2">
                        A pressão de um gás é causada pelas colisões das moléculas com as paredes do recipiente. Considere um cubo de lado L contendo N moléculas de massa m. A teoria cinética mostra que a pressão P é:
                      </p>
                      <div className="bg-slate-50 rounded p-3">
                        <MathFormula formula={String.raw`P = \frac{1}{3} \frac{N m \langle v^2 \rangle}{V}`} display={true} />
                      </div>
                <p className="text-slate-700 text-sm mt-2">
                  Onde ⟨v²⟩ é a velocidade quadrática média e V = L³ é o volume.
                </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-green-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-2">Lei dos Gases Ideais</p>
                      <p className="text-slate-700 text-sm mb-2">
                        Experimentalmente, sabemos que gases ideais obedecem à equação PV = nRT, onde n é o número de mols e R é a constante dos gases. Podemos reescrever em termos do número de moléculas N:
                      </p>
                      <div className="bg-slate-50 rounded p-3">
                        <MathFormula formula={String.raw`P V = N k_B T`} display={true} />
                      </div>
                <p className="text-slate-700 text-sm mt-2">
                  Onde k_B = R / N_A é a constante de Boltzmann (N_A = 6,02 × 10²³ é o número de Avogadro).
                </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-green-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-2">Igualar as Duas Expressões para PV</p>
                      <p className="text-slate-700 text-sm mb-2">
                        Igualando a pressão da teoria cinética com a lei dos gases ideais:
                      </p>
                      <div className="bg-slate-50 rounded p-3 space-y-2">
                        <MathFormula formula={String.raw`\frac{1}{3} N m \langle v^2 \rangle = N k_B T`} display={true} />
                        <p className="text-slate-700 text-sm text-center">Dividindo ambos os lados por N:</p>
                        <MathFormula formula={String.raw`\frac{1}{3} m \langle v^2 \rangle = k_B T`} display={true} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-green-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-2">Relacionar com Energia Cinética</p>
                      <p className="text-slate-700 text-sm mb-2">
                        Lembrando que a energia cinética de uma molécula é E_c = (1/2) m v². Multiplicando ambos os lados da equação anterior por 3/2:
                      </p>
                      <div className="bg-slate-50 rounded p-3 space-y-2">
                        <MathFormula formula={String.raw`\frac{1}{2} m \langle v^2 \rangle = \frac{3}{2} k_B T`} display={true} />
                        <p className="text-slate-700 text-sm text-center">Mas (1/2) m ⟨v²⟩ = ⟨E_c⟩ (energia cinética média), portanto:</p>
                        <div className="bg-orange-100 p-3 rounded border-2 border-orange-500">
                          <MathFormula formula={String.raw`\langle E_c \rangle = \frac{3}{2} k_B T`} display={true} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Interpretação Física Profunda
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <strong>1. Proporcionalidade Direta:</strong> A energia cinética média é **diretamente proporcional** à temperatura absoluta. Se você dobra a temperatura (em Kelvin), dobra a energia cinética média das moléculas.
                </p>
                <p className="leading-relaxed">
                  <strong>2. Zero Absoluto (0 K):</strong> No zero absoluto, T = 0 K, a energia cinética média seria zero classicamente. Na realidade, a mecânica quântica mostra que moléculas mantêm uma **energia de ponto zero** mínima, mas o movimento térmico clássico cessa.
                </p>
                <p className="leading-relaxed">
                  <strong>3. Graus de Liberdade:</strong> O fator 3/2 vem dos **3 graus de liberdade translacionais** (movimento em x, y, z). Cada grau de liberdade contribui com k_B T / 2 (teorema da equipartição de energia). Moléculas diatômicas (como O₂) têm graus de liberdade adicionais (rotação, vibração) e energia total maior.
                </p>
                <p className="leading-relaxed">
                  <strong>4. Velocidade Típica:</strong> A 300 K (27°C), moléculas de N₂ (m ≈ 4,7 × 10⁻²⁶ kg) têm velocidade média de ~500 m/s — mais rápido que um avião! Moléculas mais leves (H₂) são ainda mais rápidas (~1900 m/s).
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Alertas Importantes
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <strong>⚠️ SEMPRE use Kelvin:</strong> A fórmula ⟨E_c⟩ = (3/2) k_B T só funciona com temperatura em **Kelvin**. Usar Celsius dará resultados completamente errados! Lembre-se: T(K) = T(°C) + 273,15.
                </p>
                <p className="leading-relaxed">
                  <strong>⚠️ Válido para gases ideais:</strong> Esta fórmula é exata apenas para **gases ideais** (moléculas sem interação). Para gases reais a altas pressões ou baixas temperaturas, há correções devido a forças intermoleculares.
                </p>
                <p className="leading-relaxed">
                  <strong>⚠️ Energia cinética MÉDIA:</strong> Nem todas as moléculas têm a mesma energia. A fórmula dá a **média** estatística. Algumas moléculas são muito mais rápidas, outras muito mais lentas (distribuição de Maxwell-Boltzmann).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Energia Térmica Total */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Energia Térmica Total de um Sistema</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Do Microscópico ao Macroscópico</h4>
              <p className="text-slate-700 leading-relaxed">
                Até agora falamos da energia de **uma molécula**. Mas um objeto macroscópico (como 1 litro de ar) contém trilhões de trilhões de moléculas (N ≈ 10²³). A **energia térmica total** U do sistema é a soma das energias cinéticas de todas as moléculas.
              </p>
            </div>

            {/* Fórmula Principal */}
            <div className="bg-slate-900 text-white rounded-lg p-6 shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-orange-400">Energia Térmica Total (Gás Ideal Monoatômico)</h4>
              
              <div className="bg-slate-800 rounded p-4 mb-4">
                <MathFormula formula={String.raw`U = N \langle E_c \rangle = \frac{3}{2} N k_B T = \frac{3}{2} n R T`} display={true} />
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">U</p>
                  <p className="text-slate-300">Energia térmica total do sistema (em Joules, J). É a soma das energias de todas as N moléculas.</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">N</p>
                  <p className="text-slate-300">Número total de moléculas no sistema. Tipicamente N ≈ 10²³ para quantidades macroscópicas.</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">n</p>
                  <p className="text-slate-300">Número de mols (n = N / N_A, onde N_A = 6,02 × 10²³ é o número de Avogadro).</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">R</p>
                  <p className="text-slate-300">Constante universal dos gases = 8,314 J/(mol·K). Relaciona-se com k_B por R = N_A k_B.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Interpretação Física
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <strong>1. Energia Extensiva:</strong> A energia térmica total U é uma **grandeza extensiva** — depende da quantidade de matéria. Dobrar a quantidade de gás (dobrar N ou n) dobra a energia térmica total, mesmo que a temperatura permaneça constante.
                </p>
                <p className="leading-relaxed">
                  <strong>2. Temperatura Intensiva:</strong> A temperatura T é uma **grandeza intensiva** — não depende da quantidade de matéria. Um copo de água a 80°C tem a mesma temperatura que um balde de água a 80°C, mas o balde tem muito mais energia térmica total.
                </p>
                <p className="leading-relaxed">
                  <strong>3. Relação com Calor:</strong> Quando você aquece um gás (adiciona calor Q), você aumenta sua energia térmica U. Para um gás ideal a volume constante, todo o calor vai para aumentar a energia cinética das moléculas: Q = ΔU = (3/2) n R ΔT.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 4: Calor e Transferência de Energia */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              4
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Calor: Energia Térmica em Trânsito</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Definição Precisa de Calor</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                **Calor (Q)** é a energia térmica que flui espontaneamente de um sistema a temperatura mais alta para um sistema a temperatura mais baixa, quando eles estão em contato térmico. Calor **não é uma propriedade** de um objeto — é um **processo de transferência de energia**.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Dizer "este objeto tem muito calor" é tecnicamente incorreto. O correto é "este objeto tem muita **energia térmica**" ou "este objeto está a alta **temperatura**". Calor é o que flui **entre** objetos, não o que um objeto **possui**.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Diferença Crucial: Temperatura vs Calor vs Energia Térmica
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-yellow-300">
                  <p className="font-bold text-yellow-900 mb-2">Temperatura (T)</p>
                  <p className="text-slate-700 text-sm">
                    **Grandeza intensiva** que mede a energia cinética média das moléculas. Não depende da quantidade de matéria. Unidade: Kelvin (K) ou Celsius (°C).
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-yellow-300">
                  <p className="font-bold text-yellow-900 mb-2">Energia Térmica (U)</p>
                  <p className="text-slate-700 text-sm">
                    **Grandeza extensiva** que é a soma das energias cinéticas de todas as moléculas. Depende da quantidade de matéria e da temperatura. Unidade: Joule (J).
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-yellow-300">
                  <p className="font-bold text-yellow-900 mb-2">Calor (Q)</p>
                  <p className="text-slate-700 text-sm">
                    **Processo de transferência** de energia térmica entre sistemas a diferentes temperaturas. Não é uma propriedade, é uma ação. Unidade: Joule (J) ou caloria (cal).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Mecanismo Microscópico da Transferência de Calor</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                Quando dois objetos a temperaturas diferentes entram em contato, as moléculas mais rápidas (objeto quente) colidem com as moléculas mais lentas (objeto frio). Nessas colisões, parte da energia cinética é transferida das moléculas rápidas para as lentas.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                É como bolas de bilhar: uma bola rápida batendo em uma lenta faz a rápida desacelerar e a lenta acelerar. Esse processo continua até que as velocidades médias (e portanto as temperaturas) dos dois objetos se igualem — isso é o **equilíbrio térmico**.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A **Segunda Lei da Termodinâmica** garante que calor flui espontaneamente apenas do quente para o frio, nunca o contrário (sem trabalho externo). Isso define a "seta do tempo" termodinâmica.
              </p>
            </div>
          </div>
        </div>

        {/* Seção 5: Calor Sensível (Mudança de Temperatura) */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              5
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Calor Sensível (Mudança de Temperatura)</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">O que é Calor Sensível?</h4>
              <p className="text-slate-700 leading-relaxed">
                **Calor sensível** é a quantidade de calor necessária para mudar a temperatura de um objeto **sem mudar seu estado físico** (sólido, líquido ou gás). "Sensível" porque você pode **sentir** a mudança de temperatura com um termômetro.
              </p>
            </div>

            {/* Fórmula Principal */}
            <div className="bg-slate-900 text-white rounded-lg p-6 shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-orange-400">Equação do Calor Sensível</h4>
              
              <div className="bg-slate-800 rounded p-4 mb-4">
                <MathFormula formula={String.raw`Q = m \cdot c \cdot \Delta T`} display={true} />
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">Q</p>
                  <p className="text-slate-300">Quantidade de calor transferido (em Joules, J, ou calorias, cal). 1 cal = 4,186 J.</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">m</p>
                  <p className="text-slate-300">Massa do objeto (em kg ou g). Quanto mais massa, mais calor necessário para aquecer.</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">c</p>
                  <p className="text-slate-300">Calor específico do material (em J/(kg·°C) ou J/(kg·K)). Propriedade intrínseca do material.</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-orange-400 font-bold mb-1">ΔT</p>
                  <p className="text-slate-300">Variação de temperatura = T_final - T_inicial (em °C ou K). Se ΔT {'>'} 0, o objeto aquece (Q {'>'} 0). Se ΔT {'<'} 0, o objeto esfria (Q {'<'} 0).</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                O que é Calor Específico (c)?
              </h4>
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  **Calor específico** é a quantidade de calor necessária para aumentar a temperatura de **1 kg** de uma substância em **1°C** (ou 1 K). É uma propriedade intrínseca do material — cada substância tem um valor diferente.
                </p>
                <p className="leading-relaxed">
                  <strong>Interpretação Física:</strong> Materiais com alto calor específico (como água, c = 4.186 J/(kg·°C)) são "difíceis" de aquecer — precisam de muito calor para aumentar a temperatura. Materiais com baixo calor específico (como ferro, c = 450 J/(kg·°C)) aquecem rapidamente com pouco calor.
                </p>
                <p className="leading-relaxed">
                  <strong>Por que a água tem calor específico tão alto?</strong> Moléculas de H₂O formam **ligações de hidrogênio** entre si. Parte do calor fornecido é usada para quebrar essas ligações, não apenas para aumentar a velocidade molecular. Por isso, água é excelente para armazenar energia térmica (radiadores, oceanos regulando clima).
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-300 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">Tabela de Calores Específicos (a 25°C)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-200">
                    <tr>
                      <th className="p-3 text-left">Material</th>
                      <th className="p-3 text-left">Calor Específico (J/(kg·°C))</th>
                      <th className="p-3 text-left">Interpretação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="p-3 font-bold">Água (líquida)</td>
                      <td className="p-3">4.186</td>
                      <td className="p-3 text-slate-600">MUITO alto — difícil de aquecer/esfriar</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-bold">Alumínio</td>
                      <td className="p-3">900</td>
                      <td className="p-3 text-slate-600">Médio — usado em panelas</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold">Ferro</td>
                      <td className="p-3">450</td>
                      <td className="p-3 text-slate-600">Baixo — aquece rapidamente</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-bold">Cobre</td>
                      <td className="p-3">385</td>
                      <td className="p-3 text-slate-600">Baixo — bom condutor térmico</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-bold">Areia</td>
                      <td className="p-3">800</td>
                      <td className="p-3 text-slate-600">Médio — praia aquece/esfria moderadamente</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-bold">Gelo (0°C)</td>
                      <td className="p-3">2.090</td>
                      <td className="p-3 text-slate-600">Alto — metade da água líquida</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 6: Passo-a-Passo para Resolver Problemas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              6
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Passo-a-Passo para Resolver Problemas de Calor</h3>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-green-300">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Identifique o Sistema</p>
                    <p className="text-slate-700 text-sm">
                      Determine quais objetos estão trocando calor. Liste a massa (m), calor específico (c) e temperaturas inicial/final de cada um.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-green-300">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Escreva Q = mcΔT para Cada Objeto</p>
                    <p className="text-slate-700 text-sm">
                      Calcule ΔT = T_final - T_inicial para cada objeto. Se ΔT {'>'} 0, o objeto ganha calor (Q {'>'} 0). Se ΔT {'<'} 0, o objeto perde calor (Q {'<'} 0).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-green-300">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Aplique a Conservação de Energia</p>
                    <p className="text-slate-700 text-sm mb-2">
                      Se o sistema está isolado (sem troca de calor com o ambiente), o calor total é conservado:
                    </p>
                    <div className="bg-slate-50 rounded p-3">
                      <MathFormula formula={String.raw`Q_{perdido} + Q_{ganho} = 0`} display={true} />
                    </div>
                    <p className="text-slate-700 text-sm mt-2">
                      Ou seja: Q_quente (negativo) + Q_frio (positivo) = 0.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-green-300">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Resolva a Equação</p>
                    <p className="text-slate-700 text-sm">
                      Substitua os valores conhecidos e resolva para a incógnita (geralmente T_final ou m). Cuidado com as unidades!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-green-300">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Verifique a Razoabilidade</p>
                    <p className="text-slate-700 text-sm">
                      A temperatura final deve estar **entre** as temperaturas iniciais dos objetos. Se T_final {'>'} T_quente ou T_final {'<'} T_frio, você cometeu um erro!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-green-300">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Considere Mudanças de Fase (se houver)</p>
                    <p className="text-slate-700 text-sm">
                      Se houver fusão, solidificação, vaporização ou condensação, use Q = mL (calor latente) para essas etapas. Durante mudança de fase, a temperatura permanece constante!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-green-300">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    7
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-2">Apresente a Resposta com Unidades</p>
                    <p className="text-slate-700 text-sm">
                      Sempre inclua as unidades corretas (J, cal, °C, K, kg, etc.). Resposta sem unidade está incompleta!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 7: Aplicações Práticas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              7
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Aplicações Práticas no Mundo Real</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">1. Regulação Climática pelos Oceanos</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Oceanos têm calor específico muito alto (água = 4.186 J/(kg·°C)). Eles absorvem enorme quantidade de calor solar no verão sem aquecer muito, e liberam esse calor no inverno sem esfriar muito. Isso **modera o clima** das regiões costeiras — verões mais frescos, invernos mais amenos.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">2. Radiadores de Aquecimento</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Radiadores usam água quente porque água tem alto calor específico — armazena muita energia térmica. A água circula pelo radiador, libera calor para o ambiente (Q = mcΔT), e retorna para ser reaquecida. Eficiente para aquecer casas no inverno.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">3. Panelas de Alumínio vs Ferro</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Alumínio (c = 900 J/(kg·°C)) aquece mais lentamente que ferro (c = 450 J/(kg·°C)), mas distribui calor mais uniformemente. Ferro aquece rápido mas cria "pontos quentes". Chefs preferem alumínio para controle preciso de temperatura.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">4. Areia da Praia</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Areia (c = 800 J/(kg·°C)) tem calor específico menor que água. Por isso, a areia aquece rapidamente durante o dia (fica quente para pisar) e esfria rapidamente à noite. A água do mar permanece mais estável em temperatura.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">5. Motores de Combustão</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Motores de carros usam água (misturada com anticongelante) no sistema de arrefecimento. A água absorve o calor excessivo do motor (Q = mcΔT), passa pelo radiador onde libera esse calor para o ar, e retorna para resfriar o motor novamente.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded p-6">
              <h4 className="font-bold text-slate-900 mb-3">6. Termômetros de Mercúrio</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Mercúrio líquido se expande uniformemente com o aumento de temperatura (dilatação térmica). Quando você coloca o termômetro em contato com um objeto, calor flui para o mercúrio (Q = mcΔT), ele aquece e se expande, indicando a temperatura.
              </p>
            </div>
          </div>
        </div>

        {/* Nota Final */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-lg p-8 border border-orange-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">🎯 Resumo dos Conceitos-Chave</h3>
          <div className="space-y-3 text-slate-700">
            <p className="leading-relaxed">
              <strong>1.</strong> Energia térmica é a soma das energias cinéticas de todas as moléculas de um objeto.
            </p>
            <p className="leading-relaxed">
              <strong>2.</strong> Temperatura mede a energia cinética **média** das moléculas: ⟨E_c⟩ = (3/2) k_B T.
            </p>
            <p className="leading-relaxed">
              <strong>3.</strong> Calor é energia térmica em trânsito — flui do quente para o frio espontaneamente.
            </p>
            <p className="leading-relaxed">
              <strong>4.</strong> Calor sensível (Q = mcΔT) muda a temperatura sem mudar o estado físico.
            </p>
            <p className="leading-relaxed">
              <strong>5.</strong> Calor específico (c) é uma propriedade intrínseca do material — quanto maior, mais "difícil" de aquecer.
            </p>
            <p className="leading-relaxed">
              <strong>6.</strong> Conservação de energia: em um sistema isolado, Q_perdido + Q_ganho = 0.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
