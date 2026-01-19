import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TermologiaGraphs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/termologia">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Gráficos de Termologia</h1>
              <p className="text-xs text-slate-600">Visualize dados térmicos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <Tabs defaultValue="temperatura" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="temperatura">Temperatura</TabsTrigger>
            <TabsTrigger value="calor">Calor</TabsTrigger>
            <TabsTrigger value="dilatacao">Dilatação</TabsTrigger>
            <TabsTrigger value="transicao">Transição</TabsTrigger>
            <TabsTrigger value="comparacao">Comparação</TabsTrigger>
          </TabsList>

          {/* Gráfico 1: Conversão de Temperatura */}
          <TabsContent value="temperatura" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Conversão de Escalas de Temperatura</h2>
              <div className="bg-slate-50 rounded-lg p-6 h-96 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-600 font-semibold mb-4">Gráfico: Relação entre Celsius, Fahrenheit e Kelvin</p>
                  <svg viewBox="0 0 600 300" className="w-full h-full max-w-2xl mx-auto">
                    {/* Eixos */}
                    <line x1="50" y1="250" x2="550" y2="250" stroke="#333" strokeWidth="2"/>
                    <line x1="50" y1="250" x2="50" y2="50" stroke="#333" strokeWidth="2"/>
                    
                    {/* Labels dos eixos */}
                    <text x="560" y="255" fontSize="14" fill="#333">Celsius (°C)</text>
                    <text x="20" y="40" fontSize="14" fill="#333">Temperatura</text>
                    
                    {/* Linhas de grade */}
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <line key={`grid-${i}`} x1="50" y1={250 - i * 40} x2="550" y2={250 - i * 40} stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5"/>
                    ))}
                    
                    {/* Linha Celsius (referência) */}
                    <line x1="50" y1="250" x2="550" y2="50" stroke="#ef4444" strokeWidth="3" opacity="0.7"/>
                    <text x="520" y="60" fontSize="12" fill="#ef4444" fontWeight="bold">Celsius</text>
                    
                    {/* Linha Fahrenheit */}
                    <line x1="50" y1="220" x2="550" y2="80" stroke="#3b82f6" strokeWidth="3" opacity="0.7"/>
                    <text x="520" y="90" fontSize="12" fill="#3b82f6" fontWeight="bold">Fahrenheit</text>
                    
                    {/* Linha Kelvin */}
                    <line x1="50" y1="240" x2="550" y2="60" stroke="#10b981" strokeWidth="3" opacity="0.7"/>
                    <text x="520" y="70" fontSize="12" fill="#10b981" fontWeight="bold">Kelvin</text>
                    
                    {/* Pontos de referência */}
                    <circle cx="50" cy="250" r="4" fill="#ef4444"/>
                    <circle cx="50" cy="220" r="4" fill="#3b82f6"/>
                    <circle cx="50" cy="240" r="4" fill="#10b981"/>
                  </svg>
                </div>
              </div>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="font-bold text-slate-900">Ponto de Congelamento da Água</p>
                  <p className="text-slate-700 mt-2">0°C = 32°F = 273,15 K</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-bold text-slate-900">Temperatura Ambiente</p>
                  <p className="text-slate-700 mt-2">20°C = 68°F = 293,15 K</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-bold text-slate-900">Ponto de Ebulição da Água</p>
                  <p className="text-slate-700 mt-2">100°C = 212°F = 373,15 K</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Gráfico 2: Calor vs Temperatura */}
          <TabsContent value="calor" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Calor Sensível: Q = m·c·ΔT</h2>
              <div className="bg-slate-50 rounded-lg p-6 h-96 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-600 font-semibold mb-4">Gráfico: Relação entre Calor e Variação de Temperatura</p>
                  <svg viewBox="0 0 600 300" className="w-full h-full max-w-2xl mx-auto">
                    {/* Eixos */}
                    <line x1="50" y1="250" x2="550" y2="250" stroke="#333" strokeWidth="2"/>
                    <line x1="50" y1="250" x2="50" y2="50" stroke="#333" strokeWidth="2"/>
                    
                    {/* Labels */}
                    <text x="560" y="255" fontSize="14" fill="#333">ΔT (K)</text>
                    <text x="15" y="40" fontSize="14" fill="#333">Q (J)</text>
                    
                    {/* Linhas de grade */}
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <line key={`grid-${i}`} x1="50" y1={250 - i * 40} x2="550" y2={250 - i * 40} stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5"/>
                    ))}
                    
                    {/* Linha água (c = 4186 J/kg·K) */}
                    <line x1="50" y1="250" x2="550" y2="70" stroke="#3b82f6" strokeWidth="3"/>
                    <text x="520" y="80" fontSize="12" fill="#3b82f6" fontWeight="bold">Água</text>
                    
                    {/* Linha ferro (c = 448 J/kg·K) */}
                    <line x1="50" y1="250" x2="550" y2="150" stroke="#ef4444" strokeWidth="3"/>
                    <text x="520" y="160" fontSize="12" fill="#ef4444" fontWeight="bold">Ferro</text>
                    
                    {/* Pontos */}
                    <circle cx="50" cy="250" r="4" fill="#333"/>
                    <circle cx="300" cy="160" r="5" fill="#ef4444"/>
                    <circle cx="300" cy="110" r="5" fill="#3b82f6"/>
                  </svg>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-slate-700">
                  <strong>Interpretação:</strong> A água tem maior calor específico que o ferro. Para a mesma variação de temperatura, a água absorve mais calor. Por isso, a água é usada como refrigerante em radiadores de carros!
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Gráfico 3: Dilatação Térmica */}
          <TabsContent value="dilatacao" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Dilatação Linear: ΔL = L₀·α·ΔT</h2>
              <div className="bg-slate-50 rounded-lg p-6 h-96 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-600 font-semibold mb-4">Gráfico: Dilatação de Diferentes Materiais</p>
                  <svg viewBox="0 0 600 300" className="w-full h-full max-w-2xl mx-auto">
                    {/* Eixos */}
                    <line x1="50" y1="250" x2="550" y2="250" stroke="#333" strokeWidth="2"/>
                    <line x1="50" y1="250" x2="50" y2="50" stroke="#333" strokeWidth="2"/>
                    
                    {/* Labels */}
                    <text x="560" y="255" fontSize="14" fill="#333">ΔT (K)</text>
                    <text x="10" y="40" fontSize="14" fill="#333">ΔL/L₀ (%)</text>
                    
                    {/* Linhas de grade */}
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <line key={`grid-${i}`} x1="50" y1={250 - i * 40} x2="550" y2={250 - i * 40} stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5"/>
                    ))}
                    
                    {/* Alumínio (α = 23) */}
                    <line x1="50" y1="250" x2="550" y2="80" stroke="#f59e0b" strokeWidth="3"/>
                    <text x="520" y="90" fontSize="12" fill="#f59e0b" fontWeight="bold">Alumínio</text>
                    
                    {/* Cobre (α = 17) */}
                    <line x1="50" y1="250" x2="550" y2="120" stroke="#ef4444" strokeWidth="3"/>
                    <text x="520" y="130" fontSize="12" fill="#ef4444" fontWeight="bold">Cobre</text>
                    
                    {/* Ferro (α = 12) */}
                    <line x1="50" y1="250" x2="550" y2="150" stroke="#6366f1" strokeWidth="3"/>
                    <text x="520" y="160" fontSize="12" fill="#6366f1" fontWeight="bold">Ferro</text>
                    
                    {/* Vidro (α = 8) */}
                    <line x1="50" y1="250" x2="550" y2="180" stroke="#10b981" strokeWidth="3"/>
                    <text x="520" y="190" fontSize="12" fill="#10b981" fontWeight="bold">Vidro</text>
                  </svg>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-slate-700">
                  <strong>Curiosidade:</strong> O alumínio dilata mais que o ferro! Por isso, os trilhos de trem usam ferro, que dilata menos. Vidro dilata ainda menos, sendo ideal para instrumentos de precisão.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Gráfico 4: Transição de Fase */}
          <TabsContent value="transicao" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Mudança de Estado: Temperatura vs Calor</h2>
              <div className="bg-slate-50 rounded-lg p-6 h-96 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-600 font-semibold mb-4">Gráfico: Aquecimento de Gelo até Vapor</p>
                  <svg viewBox="0 0 600 300" className="w-full h-full max-w-2xl mx-auto">
                    {/* Eixos */}
                    <line x1="50" y1="250" x2="550" y2="250" stroke="#333" strokeWidth="2"/>
                    <line x1="50" y1="250" x2="50" y2="50" stroke="#333" strokeWidth="2"/>
                    
                    {/* Labels */}
                    <text x="560" y="255" fontSize="14" fill="#333">Calor (J)</text>
                    <text x="15" y="40" fontSize="14" fill="#333">T (°C)</text>
                    
                    {/* Etapa 1: Aquecimento do gelo */}
                    <line x1="50" y1="200" x2="150" y2="100" stroke="#3b82f6" strokeWidth="3"/>
                    <text x="100" y="120" fontSize="11" fill="#3b82f6" fontWeight="bold">Gelo</text>
                    
                    {/* Etapa 2: Fusão */}
                    <line x1="150" y1="100" x2="250" y2="100" stroke="#10b981" strokeWidth="3"/>
                    <text x="200" y="90" fontSize="11" fill="#10b981" fontWeight="bold">Fusão</text>
                    
                    {/* Etapa 3: Aquecimento da água */}
                    <line x1="250" y1="100" x2="400" y2="50" stroke="#ef4444" strokeWidth="3"/>
                    <text x="320" y="70" fontSize="11" fill="#ef4444" fontWeight="bold">Água</text>
                    
                    {/* Etapa 4: Vaporização */}
                    <line x1="400" y1="50" x2="550" y2="50" stroke="#f59e0b" strokeWidth="3"/>
                    <text x="475" y="40" fontSize="11" fill="#f59e0b" fontWeight="bold">Vapor</text>
                    
                    {/* Pontos de transição */}
                    <circle cx="150" cy="100" r="5" fill="#10b981"/>
                    <circle cx="400" cy="50" r="5" fill="#f59e0b"/>
                  </svg>
                </div>
              </div>
              <div className="mt-6 grid md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p className="font-bold text-sm text-slate-900">Etapa 1</p>
                  <p className="text-xs text-slate-700 mt-1">Aquecimento do gelo (T aumenta)</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="font-bold text-sm text-slate-900">Etapa 2</p>
                  <p className="text-xs text-slate-700 mt-1">Fusão (T constante = 0°C)</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <p className="font-bold text-sm text-slate-900">Etapa 3</p>
                  <p className="text-xs text-slate-700 mt-1">Aquecimento da água (T aumenta)</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <p className="font-bold text-sm text-slate-900">Etapa 4</p>
                  <p className="text-xs text-slate-700 mt-1">Vaporização (T constante = 100°C)</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Gráfico 5: Comparação */}
          <TabsContent value="comparacao" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Comparação: Calor Sensível vs Latente</h2>
              <div className="bg-slate-50 rounded-lg p-6 h-96 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-600 font-semibold mb-4">Gráfico: Quantidade de Calor Necessária</p>
                  <svg viewBox="0 0 600 300" className="w-full h-full max-w-2xl mx-auto">
                    {/* Eixos */}
                    <line x1="50" y1="250" x2="550" y2="250" stroke="#333" strokeWidth="2"/>
                    <line x1="50" y1="250" x2="50" y2="50" stroke="#333" strokeWidth="2"/>
                    
                    {/* Labels */}
                    <text x="560" y="255" fontSize="14" fill="#333">Processo</text>
                    <text x="15" y="40" fontSize="14" fill="#333">Calor (J)</text>
                    
                    {/* Barras */}
                    {/* Aquecimento gelo */}
                    <rect x="70" y="200" width="40" height="50" fill="#3b82f6" opacity="0.7"/>
                    <text x="90" y="270" fontSize="11" textAnchor="middle" fill="#333">Aq. Gelo</text>
                    
                    {/* Fusão */}
                    <rect x="130" y="80" width="40" height="170" fill="#10b981" opacity="0.7"/>
                    <text x="150" y="270" fontSize="11" textAnchor="middle" fill="#333">Fusão</text>
                    
                    {/* Aquecimento água */}
                    <rect x="190" y="180" width="40" height="70" fill="#ef4444" opacity="0.7"/>
                    <text x="210" y="270" fontSize="11" textAnchor="middle" fill="#333">Aq. Água</text>
                    
                    {/* Vaporização */}
                    <rect x="250" y="30" width="40" height="220" fill="#f59e0b" opacity="0.7"/>
                    <text x="270" y="270" fontSize="11" textAnchor="middle" fill="#333">Vapor.</text>
                    
                    {/* Linhas de referência */}
                    <line x1="45" y1="100" x2="550" y2="100" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5"/>
                    <line x1="45" y1="150" x2="550" y2="150" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5"/>
                    <line x1="45" y1="200" x2="550" y2="200" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="5,5"/>
                  </svg>
                </div>
              </div>
              <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-slate-700">
                  <strong>Interpretação:</strong> A vaporização requer muito mais calor que a fusão! Por isso, é muito mais fácil derreter gelo do que fazer água ferver. O calor latente de vaporização é muito maior que o de fusão.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Projeto ITA - Do Zero a Aprovação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
