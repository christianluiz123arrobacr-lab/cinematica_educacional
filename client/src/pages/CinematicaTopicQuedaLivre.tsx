import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

export default function CinematicaTopicQuedaLivre() {
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
          <h1 className="text-2xl font-bold text-slate-900">Queda Livre</h1>
        </div>
      </header>

      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* Introdução */}
        <Card className="p-4 md:p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-red-50">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Movimento Sob a Ação da Gravidade</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>A queda livre é um caso especial de Movimento Uniformemente Variado onde a única força atuante é a gravidade. Quando um objeto é solto (ou lançado) no vácuo, ele cai com uma aceleração constante chamada aceleração da gravidade (g ≈ 9,8 m/s² na superfície da Terra).</p>
            <p>A queda livre é fundamental para entender a dinâmica dos projéteis, o movimento dos satélites e muitos fenômenos naturais. Apesar de sua importância, a queda livre é frequentemente idealizada ignorando a resistência do ar, o que simplifica bastante os cálculos.</p>
          </div>
        </Card>

        {/* Definição */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Características da Queda Livre</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-lg font-semibold text-slate-800 italic">
              "Queda livre é o movimento de um objeto sob a ação exclusiva da força gravitacional, sem resistência do ar."
            </p>
            
            <h3 className="text-lg font-bold text-slate-900 mt-6">Propriedades Principais</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Aceleração Constante:</strong> a = g ≈ 9,8 m/s² (dirigida para baixo)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Velocidade Inicial Variável:</strong> Pode ser zero (solto) ou diferente de zero (lançado)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Trajetória Vertical:</strong> Movimento em linha reta na vertical</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span><strong>Velocidade Aumenta Uniformemente:</strong> Δv = g·Δt</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Aceleração da Gravidade</h3>
            <p>A aceleração da gravidade varia ligeiramente com a latitude e altitude, mas é aproximadamente 9,8 m/s² na superfície da Terra. Para simplificar cálculos, frequentemente usamos g = 10 m/s².</p>
          </div>
        </Card>

        {/* Equações da Queda Livre */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Equações da Queda Livre</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>As equações da queda livre são as mesmas do MRUV, mas com a = g (ou a = -g, dependendo da orientação do eixo).</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">1. Velocidade em Função do Tempo</h3>
            <div className="bg-red-50 p-3 md:p-6 rounded-lg border border-red-200 overflow-x-auto">
              <MathFormula formula="v = v_0 + g \\cdot t" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: v = velocidade final (m/s), v₀ = velocidade inicial (m/s), g = aceleração da gravidade (m/s²), t = tempo (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">2. Posição em Função do Tempo</h3>
            <div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-blue-200 overflow-x-auto">
              <MathFormula formula="h = h_0 + v_0 \\cdot t + \\frac{g \\cdot t^2}{2}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: h = altura final (m), h₀ = altura inicial (m), v₀ = velocidade inicial (m/s), g = aceleração da gravidade (m/s²), t = tempo (s)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">3. Equação de Torricelli para Queda Livre</h3>
            <div className="bg-green-50 p-3 md:p-6 rounded-lg border border-green-200 overflow-x-auto">
              <MathFormula formula="v^2 = v_0^2 + 2 \\cdot g \\cdot \\Delta h" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: v = velocidade final (m/s), v₀ = velocidade inicial (m/s), g = aceleração da gravidade (m/s²), Δh = variação de altura (m)</p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-6">4. Tempo de Queda (Objeto Solto)</h3>
            <p>Quando um objeto é solto do repouso (v₀ = 0), o tempo para cair de uma altura h é:</p>
            <div className="bg-purple-50 p-3 md:p-6 rounded-lg border border-purple-200 overflow-x-auto">
              <MathFormula formula="t = \\sqrt{\\frac{2h}{g}}" className="text-center text-lg md:text-2xl mb-4" />
              <p className="text-sm text-slate-600">Onde: t = tempo (s), h = altura (m), g = aceleração da gravidade (m/s²)</p>
            </div>
          </div>
        </Card>

        {/* Casos Especiais */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Casos Especiais de Queda Livre</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">Objeto Solto do Repouso</h3>
            <p>Quando v₀ = 0, as equações simplificam-se. O objeto parte do repouso e sua velocidade aumenta linearmente com o tempo.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Lançamento Vertical para Cima</h3>
            <p>Um objeto lançado verticalmente para cima tem velocidade inicial positiva. Ele desacelera até parar no ponto mais alto, depois cai. O tempo de subida é igual ao tempo de descida.</p>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Lançamento Vertical para Baixo</h3>
            <p>Um objeto lançado verticalmente para baixo tem velocidade inicial negativa (ou positiva, dependendo da convenção). Ele acelera durante a queda.</p>
          </div>
        </Card>

        {/* Exemplos Práticos */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Exemplos Práticos de Queda Livre</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">1.</span>
                <div>
                  <strong>Objeto caindo de um prédio:</strong> Um objeto solto de uma altura de 45 m leva aproximadamente 3 segundos para cair (usando g = 10 m/s²).
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">2.</span>
                <div>
                  <strong>Bola lançada para cima:</strong> Uma bola lançada para cima com velocidade inicial de 20 m/s atinge uma altura máxima e retorna ao ponto de partida.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">3.</span>
                <div>
                  <strong>Pingo de chuva:</strong> Um pingo de chuva caindo de uma nuvem a 1000 m de altura (sem resistência do ar) levaria cerca de 14 segundos para cair.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">4.</span>
                <div>
                  <strong>Astronauta na Lua:</strong> Na Lua, onde g ≈ 1,6 m/s², um objeto cai muito mais lentamente do que na Terra.
                </div>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6">Problema Resolvido</h3>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="font-semibold mb-3">Um objeto é solto de uma altura de 80 m. Qual é sua velocidade ao atingir o solo? (Use g = 10 m/s²)</p>
              <p className="mb-2"><strong>Dados:</strong> h = 80 m, v₀ = 0 m/s, g = 10 m/s²</p>
              <p className="mb-2"><strong>Solução:</strong></p>
              <div className="bg-white p-3 rounded border border-slate-300 overflow-x-auto mb-2">
                <MathFormula formula="v^2 = v_0^2 + 2gh = 0 + 2 \\times 10 \\times 80 = 1600" className="text-center text-lg" />
              </div>
              <div className="bg-white p-3 rounded border border-slate-300 overflow-x-auto mb-2">
                <MathFormula formula="v = \\sqrt{1600} = 40 \\text{ m/s}" className="text-center text-lg" />
              </div>
              <p><strong>Resposta:</strong> A velocidade ao atingir o solo é 40 m/s.</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
