import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicMRU() {
  useEffect(() => {
    if ((window as any).MathJax) {
      (window as any).MathJax.contentDocument = document;
      (window as any).MathJax.typesetPromise().catch((err: any) => console.log(err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/cinematica">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Movimento Retilíneo Uniforme (MRU)</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-green-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Movimento Mais Simples do Mundo</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Imagine um carro viajando em uma rodovia reta, mantendo sempre 100 km/h. Sem acelerar, sem frear, sem fazer curvas. Isso é MRU!</p>
            <p>MRU é o movimento mais fácil de entender e calcular. É como se o objeto tivesse "preguiça" de mudar de velocidade. Ele sai com uma velocidade e mantém essa velocidade para sempre (enquanto nada o perturbar).</p>
          </div>
        </Card>

        {/* O Que é MRU */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">O Que Significa MRU?</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p><strong>M</strong> = Movimento (está se movendo)</p>
              <p><strong>R</strong> = Retilíneo (em linha reta)</p>
              <p><strong>U</strong> = Uniforme (velocidade constante)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">As Características Principais</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Velocidade Constante:</strong> Não muda. Se é 80 km/h, continua 80 km/h para sempre.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Sem Aceleração:</strong> Como a velocidade não muda, a aceleração é zero.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Linha Reta:</strong> Sem curvas, sem mudança de direção.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Distâncias Iguais em Tempos Iguais:</strong> A cada hora, percorre a mesma distância.</span>
              </li>
            </ul>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p className="mb-2"><strong>Exemplo prático:</strong></p>
              <p>Se você viaja a 100 km/h, em 1 hora percorre 100 km. Em 2 horas, 200 km. Em 3 horas, 300 km. Sempre a mesma distância por hora!</p>
            </div>
          </div>
        </Card>

        {/* A Fórmula Principal */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">A Fórmula Mágica do MRU</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Existe apenas <strong>uma fórmula principal</strong> no MRU. É muito simples:</p>
            
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto my-4">
              <MathFormula formula="$$$$s = s_0 + v \\cdot t$$$$" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600 text-center"><strong>Lê-se:</strong> "Posição final = Posição inicial + Velocidade × Tempo"</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">O Que Cada Letra Significa?</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-green-600">s =</span>
                <span>Posição final (onde o objeto está agora). Medida em metros (m).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">s₀ =</span>
                <span>Posição inicial (onde o objeto começou). Medida em metros (m).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">v =</span>
                <span>Velocidade (constante!). Medida em m/s ou km/h.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600">t =</span>
                <span>Tempo decorrido. Medida em segundos (s) ou horas (h).</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Como Usar a Fórmula?</h3>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p className="mb-3"><strong>Exemplo:</strong> Um carro sai do km 0 de uma rodovia e viaja a 100 km/h. Onde ele estará após 3 horas?</p>
              <p className="mb-2"><strong>Dados:</strong> s₀ = 0 km, v = 100 km/h, t = 3 h</p>
              <p className="mb-2"><strong>Cálculo:</strong></p>
              <div className="bg-white p-3 rounded border border-slate-300 overflow-x-auto mb-2">
                <MathFormula formula="$$$$s = 0 + 100 \\times 3 = 300 \\text{ km}$$$$" className="text-center text-lg" />
              </div>
              <p><strong>Resposta:</strong> O carro estará no km 300.</p>
            </div>
          </div>
        </Card>

        {/* Gráficos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Os Gráficos do MRU</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Gráfico 1: Posição vs. Tempo</h3>
            <p>Imagine um gráfico onde o tempo está no eixo horizontal (x) e a posição no eixo vertical (y). No MRU, esse gráfico é sempre uma <strong>reta inclinada</strong>.</p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <p><strong>Por quê?</strong> Porque a cada unidade de tempo, você percorre a mesma distância. É como subir uma escada: cada degrau tem a mesma altura.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Gráfico 2: Velocidade vs. Tempo</h3>
            <p>No MRU, a velocidade é constante. Então esse gráfico é uma <strong>reta horizontal</strong> (uma linha plana).</p>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 my-4">
              <p><strong>Por quê?</strong> Porque a velocidade não muda. Se é 100 km/h no início, continua 100 km/h no final.</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Gráfico 3: Aceleração vs. Tempo</h3>
            <p>No MRU, a aceleração é zero. Então esse gráfico é uma <strong>reta no zero</strong> (uma linha plana no chão).</p>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos do Mundo Real</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">1.</span>
                <div>
                  <strong>Carro em rodovia reta:</strong> Você viaja a 120 km/h em uma rodovia reta, sem acelerar nem frear. Isso é MRU.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">2.</span>
                <div>
                  <strong>Corredor em pista:</strong> Um corredor mantém 8 m/s durante toda a volta. Isso é MRU.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">3.</span>
                <div>
                  <strong>Trem de alta velocidade:</strong> Entre duas cidades, o trem viaja a velocidade constante. Isso é MRU.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">4.</span>
                <div>
                  <strong>Satélite em órbita:</strong> Um satélite viaja ao redor da Terra em órbita circular com velocidade constante. Isso é MRU (em trajetória circular).
                </div>
              </li>
            </ul>
          </div>
        </Card>

        {/* Erros Comuns */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-red-50">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-4">⚠️ Erros Comuns</h3>
              <ul className="space-y-3 text-red-900">
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "MRU é quando o objeto não se move"<br/><strong>Verdade:</strong> MRU é quando o objeto se move com velocidade constante. Ele está se movendo, mas sem acelerar!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Se a aceleração é zero, não há movimento"<br/><strong>Verdade:</strong> Se a aceleração é zero, a velocidade é constante. O objeto pode estar se movendo muito rápido!</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">❌</span>
                  <span><strong>Erro:</strong> "Usar a fórmula do MRU quando o objeto está acelerando"<br/><strong>Verdade:</strong> A fórmula do MRU só funciona quando a velocidade é constante. Se está acelerando, use MRUV!</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Dicas Práticas */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-yellow-50">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-yellow-900 mb-4">💡 Dicas para Resolver Problemas</h3>
              <ul className="space-y-3 text-yellow-900">
                <li><strong>Passo 1:</strong> Identifique se é MRU (velocidade constante, sem aceleração)</li>
                <li><strong>Passo 2:</strong> Organize os dados: s₀, v, t</li>
                <li><strong>Passo 3:</strong> Use a fórmula: s = s₀ + v·t</li>
                <li><strong>Passo 4:</strong> Cuidado com as unidades! Se v está em km/h, t deve estar em horas.</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Resumo */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-green-50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📌 Resumo Rápido</h3>
          <div className="space-y-3 text-slate-700">
            <p><strong>MRU:</strong> Movimento em linha reta com velocidade constante</p>
            <p><strong>Fórmula:</strong> s = s₀ + v·t</p>
            <p><strong>Gráficos:</strong> Posição é uma reta inclinada, velocidade é uma reta horizontal, aceleração é zero</p>
            <p><strong>Quando usar:</strong> Quando a velocidade não muda</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
