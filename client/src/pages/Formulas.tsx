import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface Formula {
  id: string;
  name: string;
  category: string;
  latex: string;
  explanation: string;
  derivation: string;
  examples: { description: string; calculation: string }[];
}

const formulas: Formula[] = [
  {
    id: "vm",
    name: "Velocidade Média",
    category: "Conceitos Básicos",
    latex: "v_m = Δs / Δt",
    explanation: "A velocidade média mede a rapidez com que um objeto se desloca. É definida como a razão entre a distância percorrida e o intervalo de tempo gasto.",
    derivation: `A velocidade média surge da necessidade de quantificar o movimento. Se um objeto percorre 100 metros em 10 segundos, intuitivamente sabemos que ele se move a 10 metros por segundo em média. A fórmula formaliza essa intuição.

Onde:
- vm = velocidade média (m/s)
- Δs = variação do espaço (m)
- Δt = intervalo de tempo (s)`,
    examples: [
      {
        description: "Um carro percorre 300 km em 5 horas",
        calculation: "vm = 300 km / 5 h = 60 km/h"
      },
      {
        description: "Um corredor percorre 100 m em 10 s",
        calculation: "vm = 100 m / 10 s = 10 m/s"
      }
    ]
  },
  {
    id: "aceleracao",
    name: "Aceleração",
    category: "Conceitos Básicos",
    latex: "a = Δv / Δt",
    explanation: "A aceleração mede a taxa de variação da velocidade ao longo do tempo. Se a velocidade de um corpo muda, ele está acelerando.",
    derivation: `Assim como a velocidade mede a mudança de posição, a aceleração mede a mudança de velocidade.

Onde:
- a = aceleração (m/s²)
- Δv = variação da velocidade (m/s)
- Δt = intervalo de tempo (s)

Uma aceleração positiva indica que a velocidade está aumentando. Uma aceleração negativa (ou desaceleração) indica que a velocidade está diminuindo.`,
    examples: [
      {
        description: "Um carro aumenta sua velocidade de 0 m/s para 20 m/s em 5 segundos",
        calculation: "a = 20 m/s / 5 s = 4 m/s²"
      },
      {
        description: "Um carro reduz sua velocidade de 30 m/s para 10 m/s em 4 segundos",
        calculation: "a = (10 - 30) m/s / 4 s = -5 m/s²"
      }
    ]
  },
  {
    id: "mru-posicao",
    name: "MRU - Posição",
    category: "Movimento Retilíneo Uniforme",
    latex: "s = s₀ + v·t",
    explanation: "A função horária da posição descreve como a posição de um objeto varia com o tempo no MRU. É uma equação do primeiro grau.",
    derivation: `Partindo da definição de velocidade média:
v = Δs / Δt = (s - s₀) / (t - t₀)

Considerando t₀ = 0:
v = (s - s₀) / t

Isolando s:
s = s₀ + v·t

Onde:
- s = posição final (m)
- s₀ = posição inicial (m)
- v = velocidade (m/s)
- t = tempo (s)

O gráfico s vs. t é uma reta. A inclinação da reta é a velocidade.`,
    examples: [
      {
        description: "Um objeto começa na posição 10 m e se move a 5 m/s. Após 3 segundos:",
        calculation: "s = 10 + 5·3 = 10 + 15 = 25 m"
      },
      {
        description: "Um carro sai da origem (0 m) a 20 m/s. Qual sua posição após 10 s?",
        calculation: "s = 0 + 20·10 = 200 m"
      }
    ]
  },
  {
    id: "mru-velocidade",
    name: "MRU - Velocidade",
    category: "Movimento Retilíneo Uniforme",
    latex: "v = Δs / Δt = (s - s₀) / t",
    explanation: "Para encontrar a velocidade no MRU, basta isolar v na função horária da posição.",
    derivation: `Partindo de s = s₀ + v·t, isolamos v:
s - s₀ = v·t
v = (s - s₀) / t = Δs / Δt

Onde:
- v = velocidade (m/s)
- s = posição final (m)
- s₀ = posição inicial (m)
- t = tempo (s)
- Δs = deslocamento (m)`,
    examples: [
      {
        description: "Um objeto sai da posição 5 m e chega à posição 35 m em 6 segundos",
        calculation: "v = (35 - 5) / 6 = 30 / 6 = 5 m/s"
      },
      {
        description: "Um carro sai do km 100 e chega ao km 250 em 3 horas",
        calculation: "v = (250 - 100) / 3 = 150 / 3 = 50 km/h"
      }
    ]
  },
  {
    id: "mruv-velocidade",
    name: "MRUV - Velocidade",
    category: "Movimento Uniformemente Variado",
    latex: "V = V₀ + a·t",
    explanation: "A função horária da velocidade descreve como a velocidade varia com o tempo no MRUV. É uma equação do primeiro grau.",
    derivation: `Partindo da definição de aceleração:
a = Δv / Δt = (V - V₀) / (t - t₀)

Considerando t₀ = 0:
a = (V - V₀) / t

Isolando V:
V = V₀ + a·t

Onde:
- V = velocidade final (m/s)
- V₀ = velocidade inicial (m/s)
- a = aceleração (m/s²)
- t = tempo (s)

A velocidade aumenta (ou diminui, se a for negativa) linearmente com o tempo.`,
    examples: [
      {
        description: "Um objeto começa com velocidade 5 m/s e acelera a 2 m/s². Após 4 segundos:",
        calculation: "V = 5 + 2·4 = 5 + 8 = 13 m/s"
      },
      {
        description: "Um carro começa do repouso (0 m/s) com aceleração 3 m/s². Qual sua velocidade após 8 s?",
        calculation: "V = 0 + 3·8 = 24 m/s"
      }
    ]
  },
  {
    id: "mruv-posicao",
    name: "MRUV - Posição",
    category: "Movimento Uniformemente Variado",
    latex: "S = S₀ + V₀·t + (a·t²) / 2",
    explanation: "A função horária da posição descreve como a posição varia com o tempo no MRUV. É uma equação do segundo grau (parábola).",
    derivation: `No MRUV, a velocidade varia linearmente. A posição é a integral da velocidade:
S = ∫(V₀ + a·t)dt = V₀·t + (a·t²)/2 + C

Onde C = S₀ (constante de integração, a posição inicial).

Portanto: S = S₀ + V₀·t + (a·t²)/2

Onde:
- S = posição final (m)
- S₀ = posição inicial (m)
- V₀ = velocidade inicial (m/s)
- a = aceleração (m/s²)
- t = tempo (s)

O termo (a·t²)/2 é responsável pela curvatura da parábola.`,
    examples: [
      {
        description: "Um objeto começa na posição 0 m, com velocidade inicial 3 m/s e aceleração 2 m/s². Após 5 segundos:",
        calculation: "S = 0 + 3·5 + (2·5²)/2 = 15 + (2·25)/2 = 15 + 25 = 40 m"
      },
      {
        description: "Um carro começa na posição 10 m, com velocidade inicial 5 m/s e aceleração 1 m/s². Qual sua posição após 6 s?",
        calculation: "S = 10 + 5·6 + (1·6²)/2 = 10 + 30 + 18 = 58 m"
      }
    ]
  },
  {
    id: "torricelli",
    name: "Equação de Torricelli",
    category: "Movimento Uniformemente Variado",
    latex: "V² = V₀² + 2·a·ΔS",
    explanation: "A Equação de Torricelli relaciona velocidade, aceleração e deslocamento, sem depender do tempo. Muito útil quando não conhecemos o tempo.",
    derivation: `Partindo de V = V₀ + a·t, isolamos t:
t = (V - V₀) / a

Substituindo na fórmula S = S₀ + V₀·t + (a·t²)/2:
ΔS = V₀·t + (a·t²)/2
ΔS = V₀·[(V - V₀)/a] + (a/2)·[(V - V₀)/a]²
ΔS = [2V₀·(V - V₀) + (V - V₀)²] / (2a)
ΔS = [(V - V₀)·(V + V₀)] / (2a)
ΔS = (V² - V₀²) / (2a)

Multiplicando ambos os lados por 2a:
2a·ΔS = V² - V₀²

Portanto: V² = V₀² + 2·a·ΔS`,
    examples: [
      {
        description: "Um objeto começa com velocidade 5 m/s, acelera a 3 m/s² e percorre 20 m. Qual sua velocidade final?",
        calculation: "V² = 5² + 2·3·20 = 25 + 120 = 145 → V = √145 ≈ 12,04 m/s"
      },
      {
        description: "Um carro começa do repouso (0 m/s) com aceleração 2 m/s² e percorre 50 m",
        calculation: "V² = 0² + 2·2·50 = 200 → V = √200 ≈ 14,14 m/s"
      }
    ]
  },
  {
    id: "mcu-velocidade",
    name: "MCU - Velocidade Tangencial",
    category: "Movimento Circular Uniforme",
    latex: "v = 2πr / T = 2πrf",
    explanation: "A velocidade tangencial é a velocidade do objeto ao longo da trajetória circular. É constante em módulo no MCU.",
    derivation: `O objeto percorre uma circunferência completa (2πr) em um período (T). Portanto, a velocidade é a distância dividida pelo tempo:

v = distância / tempo = 2πr / T

Como a frequência f = 1/T, podemos escrever:
v = 2πrf

Onde:
- v = velocidade tangencial (m/s)
- r = raio (m)
- T = período (s)
- f = frequência (Hz)`,
    examples: [
      {
        description: "Um objeto em movimento circular com raio 5 m e período 2 s",
        calculation: "v = 2π·5 / 2 = 10π / 2 = 5π ≈ 15,7 m/s"
      },
      {
        description: "Um objeto com raio 10 m e frequência 0,5 Hz",
        calculation: "v = 2π·10·0,5 = 10π ≈ 31,4 m/s"
      }
    ]
  },
  {
    id: "mcu-aceleracao",
    name: "MCU - Aceleração Centrípeta",
    category: "Movimento Circular Uniforme",
    latex: "a_c = v² / r = ω²r",
    explanation: "A aceleração centrípeta é responsável por manter o objeto em movimento circular. É sempre dirigida para o centro.",
    derivation: `A aceleração centrípeta é a taxa de variação da direção da velocidade. Ela é sempre dirigida para o centro da circunferência.

Pode ser expressa de duas formas:
a_c = v² / r  (em função da velocidade tangencial)
a_c = ω²r     (em função da velocidade angular)

Onde:
- a_c = aceleração centrípeta (m/s²)
- v = velocidade tangencial (m/s)
- r = raio (m)
- ω = velocidade angular (rad/s)

Derivação (v² / r):
A aceleração é a variação da velocidade. No MCU, a velocidade muda de direção continuamente. A aceleração necessária para manter o objeto em movimento circular é proporcional ao quadrado da velocidade e inversamente proporcional ao raio.`,
    examples: [
      {
        description: "Um objeto com velocidade tangencial 10 m/s em um raio de 5 m",
        calculation: "a_c = 10² / 5 = 100 / 5 = 20 m/s²"
      },
      {
        description: "Um objeto com velocidade angular 2 rad/s e raio 3 m",
        calculation: "a_c = 2²·3 = 4·3 = 12 m/s²"
      }
    ]
  },
  {
    id: "quedalivre",
    name: "Queda Livre - Velocidade",
    category: "Queda Livre",
    latex: "V = V₀ + g·t",
    explanation: "A queda livre é um caso especial de MRUV onde a aceleração é a da gravidade (g ≈ 9,8 m/s²).",
    derivation: `A queda livre segue as mesmas equações do MRUV, mas com a = g:

V = V₀ + g·t

Onde:
- V = velocidade (m/s)
- V₀ = velocidade inicial (m/s)
- g = aceleração da gravidade ≈ 9,8 m/s²
- t = tempo (s)

Para um objeto solto do repouso (V₀ = 0):
V = g·t`,
    examples: [
      {
        description: "Um objeto é solto do repouso. Qual sua velocidade após 3 segundos?",
        calculation: "V = 0 + 9,8·3 = 29,4 m/s"
      },
      {
        description: "Um objeto é lançado para baixo com velocidade inicial 5 m/s. Qual sua velocidade após 2 s?",
        calculation: "V = 5 + 9,8·2 = 5 + 19,6 = 24,6 m/s"
      }
    ]
  }
];

export default function Formulas() {
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(formulas[0]);
  const categories = Array.from(new Set(formulas.map(f => f.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Explicação das Fórmulas</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar - Fórmulas */}
          <div className="md:col-span-1">
            <div className="space-y-4 sticky top-24">
              {categories.map(category => (
                <div key={category}>
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">{category}</h3>
                  <div className="space-y-2">
                    {formulas.filter(f => f.category === category).map(formula => (
                      <button
                        key={formula.id}
                        onClick={() => setSelectedFormula(formula)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedFormula?.id === formula.id
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200"
                        }`}
                      >
                        <p className="text-sm font-semibold">{formula.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content - Fórmula Selecionada */}
          <div className="md:col-span-2">
            {selectedFormula && (
              <Card className="p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{selectedFormula.name}</h2>
                
                {/* Fórmula em LaTeX */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
                  <p className="text-sm text-slate-600 mb-2">Fórmula:</p>
                  <code className="text-2xl font-mono font-bold text-blue-600">{selectedFormula.latex}</code>
                </div>

                {/* Explicação */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">O que significa?</h3>
                  <p className="text-slate-700 leading-relaxed">{selectedFormula.explanation}</p>
                </div>

                {/* Derivação */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">De onde vem?</h3>
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap font-mono text-sm">
                      {selectedFormula.derivation}
                    </p>
                  </div>
                </div>

                {/* Exemplos */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Exemplos Práticos</h3>
                  <div className="space-y-4">
                    {selectedFormula.examples.map((example, idx) => (
                      <Card key={idx} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
                        <p className="text-sm text-slate-700 mb-2"><strong>Exemplo {idx + 1}:</strong> {example.description}</p>
                        <code className="text-lg font-mono font-bold text-green-600">{example.calculation}</code>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
