import { Card } from "@/components/ui/card";
import { BookOpen, ArrowLeft, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function EletricidadeTopicOndasEletromagneticas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/eletricidade" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Início
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Ondas Eletromagnéticas</h1>
              <p className="text-xs text-slate-500">Projeto ITA - Do Zero a Aprovação</p>
            </div>
          </div>
          <Link href="/ia-resolver">
            <Button variant="outline" size="sm">IA Resolutora</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ondas Eletromagnéticas</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Ondas eletromagnéticas são perturbações que se propagam através do espaço, transportando energia e momento. Elas são geradas por cargas aceleradas e consistem em campos elétricos e magnéticos oscilantes perpendiculares entre si e à direção de propagação. A luz visível, as ondas de rádio, os raios-X e a radiação gama são todos exemplos de ondas eletromagnéticas. Compreender essas ondas é fundamental para entender fenômenos como radiação, comunicação sem fio e a estrutura do universo.
          </p>
        </section>

        {/* 1. Equações de Maxwell */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Equações de Maxwell</h3>
          
          <p className="text-slate-700 mb-6">
            As Equações de Maxwell descrevem como campos elétricos e magnéticos se comportam e interagem. Na forma integral, as quatro equações são:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Lei de Gauss</p>
              <div className="bg-white p-4 rounded border border-blue-200 mb-3">
                <p className="text-center text-lg font-mono">Fluxo de E = Q_enc / ε₀</p>
              </div>
              <p className="text-slate-700">
                Relaciona o campo elétrico à carga elétrica. Cargas elétricas são fontes de campos elétricos.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Lei de Gauss para Magnetismo</p>
              <div className="bg-white p-4 rounded border border-green-200 mb-3">
                <p className="text-center text-lg font-mono">Fluxo de B = 0</p>
              </div>
              <p className="text-slate-700">
                Não existem monopólos magnéticos. As linhas de campo magnético sempre formam loops fechados.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Lei de Faraday</p>
              <div className="bg-white p-4 rounded border border-purple-200 mb-3">
                <p className="text-center text-lg font-mono">Circulação de E = -dΦ_B / dt</p>
              </div>
              <p className="text-slate-700">
                Um campo magnético variável no tempo gera um campo elétrico. Este é o princípio dos transformadores e geradores.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <p className="font-bold text-slate-900 mb-2">Lei de Ampère-Maxwell</p>
              <div className="bg-white p-4 rounded border border-orange-200 mb-3">
                <p className="text-center text-lg font-mono">Circulação de B = μ₀*I + μ₀*ε₀*dΦ_E / dt</p>
              </div>
              <p className="text-slate-700">
                Um campo elétrico variável no tempo gera um campo magnético. Este termo foi adicionado por Maxwell e é crucial para a existência de ondas eletromagnéticas.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Propagação de Ondas Eletromagnéticas */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Propagação de Ondas Eletromagnéticas</h3>
          
          <p className="text-slate-700 mb-6">
            A partir das Equações de Maxwell, pode-se demonstrar que campos elétricos e magnéticos podem se propagar como ondas. A velocidade de propagação no vácuo é:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">c = 1 / sqrt(μ₀*ε₀) = 3 × 10^8 m/s</p>
            <p className="text-sm text-slate-600 text-center">
              Esta é a velocidade da luz! Maxwell percebeu que a velocidade da onda eletromagnética coincidia com a velocidade da luz, levando à conclusão de que a luz é uma onda eletromagnética.
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            Uma onda eletromagnética senoidal pode ser descrita por:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">E(x,t) = E₀ * sin(kx - ωt)</p>
            <p className="text-center text-lg font-mono mb-2">B(x,t) = B₀ * sin(kx - ωt)</p>
            <p className="text-sm text-slate-600 text-center">
              Onde k = 2π/λ é o número de onda, ω = 2πf é a frequência angular, e E₀, B₀ são as amplitudes
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
            <p className="font-bold text-slate-900 mb-2">Propriedades das Ondas Eletromagnéticas:</p>
            <ul className="space-y-2 text-slate-700">
              <li>• Os campos E e B são perpendiculares entre si</li>
              <li>• Ambos são perpendiculares à direção de propagação</li>
              <li>• Os campos oscilam em fase (atingem máximos simultaneamente)</li>
              <li>• A razão entre as amplitudes é: E₀ / B₀ = c</li>
              <li>• Transportam energia e momento</li>
            </ul>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-slate-100 mb-6">
            <img 
              src="/images/ondas-eletromagneticas-espectro-pt.jpg" 
              alt="Ondas Eletromagnéticas e Espectro"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 3. Espectro Eletromagnético */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Espectro Eletromagnético</h3>
          
          <p className="text-slate-700 mb-6">
            O espectro eletromagnético é a classificação de todas as ondas eletromagnéticas por frequência ou comprimento de onda. Todas as ondas viajam à velocidade da luz e estão relacionadas por:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">c = λ * f</p>
            <p className="text-sm text-slate-600 text-center">
              Onde λ é o comprimento de onda (em metros) e f é a frequência (em Hz)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="p-4 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400">
              <p className="font-bold text-slate-900 mb-2">Ondas de Rádio</p>
              <p className="text-slate-700 text-sm">
                Frequência: 10^3 - 10^9 Hz. Usadas em comunicação, TV e rádio.
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400">
              <p className="font-bold text-slate-900 mb-2">Micro-ondas</p>
              <p className="text-slate-700 text-sm">
                Frequência: 10^9 - 10^12 Hz. Usadas em fornos de micro-ondas e comunicação.
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400">
              <p className="font-bold text-slate-900 mb-2">Infravermelho</p>
              <p className="text-slate-700 text-sm">
                Frequência: 10^12 - 10^14 Hz. Radiação térmica, sensores infravermelhos.
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400">
              <p className="font-bold text-slate-900 mb-2">Luz Visível</p>
              <p className="text-slate-700 text-sm">
                Frequência: 4 × 10^14 - 8 × 10^14 Hz. A única radiação que nossos olhos podem detectar.
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400">
              <p className="font-bold text-slate-900 mb-2">Ultravioleta</p>
              <p className="text-slate-700 text-sm">
                Frequência: 10^15 - 10^17 Hz. Causa queimaduras solares, esterilização.
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-400">
              <p className="font-bold text-slate-900 mb-2">Raios-X e Gama</p>
              <p className="text-slate-700 text-sm">
                Frequência: 10^17 - 10^24 Hz. Radiação ionizante, muito penetrante.
              </p>
            </Card>
          </div>
        </section>

        {/* 4. Energia e Intensidade */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Energia e Intensidade de Ondas Eletromagnéticas</h3>
          
          <p className="text-slate-700 mb-6">
            Ondas eletromagnéticas transportam energia. A densidade de energia é:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">u = (1/2) * (ε₀*E² + B²/μ₀)</p>
            <p className="text-sm text-slate-600 text-center">
              Densidade de energia (em J/m³), com contribuições iguais dos campos E e B
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            O vetor de Poynting descreve o fluxo de energia:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">S = (1/μ₀) * (E × B)</p>
            <p className="text-sm text-slate-600 text-center">
              Vetor de Poynting (em W/m²), apontando na direção de propagação da onda
            </p>
          </div>

          <p className="text-slate-700 mb-6">
            A intensidade é o valor médio do módulo do vetor de Poynting:
          </p>

          <div className="bg-white p-6 rounded border-2 border-yellow-400 mb-6">
            <p className="text-center text-lg font-mono mb-2">I = (1/2) * c * ε₀ * E₀²</p>
            <p className="text-sm text-slate-600 text-center">
              Intensidade (em W/m²), proporcional ao quadrado da amplitude do campo elétrico
            </p>
          </div>
        </section>

        {/* 5. Exemplo Resolvido - Nível ITA/IME */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Exemplo Resolvido - Nível ITA/IME</h3>
          
          <Card className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400">
            <p className="font-bold text-lg text-slate-900 mb-4">
              Problema: Uma onda eletromagnética senoidal tem frequência f = 100 MHz e amplitude do campo elétrico E₀ = 1000 V/m. Calcule:
            </p>
            <ul className="space-y-2 mb-6 text-slate-700">
              <li><strong>a)</strong> O comprimento de onda</li>
              <li><strong>b)</strong> A amplitude do campo magnético</li>
              <li><strong>c)</strong> A intensidade da onda</li>
            </ul>

            <div className="bg-white p-6 rounded border border-yellow-300 space-y-4">
              <p className="font-bold text-slate-900">Solução:</p>
              
              <p className="text-slate-700">
                <strong>Parte a) Comprimento de onda:</strong>
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                <p>f = 100 MHz = 100 × 10^6 Hz = 10^8 Hz</p>
                <p>λ = c / f = (3 × 10^8) / (10^8) = 3 m</p>
              </div>

              <p className="text-slate-700">
                <strong>Parte b) Amplitude do campo magnético:</strong>
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                <p>E₀ / B₀ = c</p>
                <p>B₀ = E₀ / c = 1000 / (3 × 10^8) = 3,33 × 10^-6 T = 3,33 μT</p>
              </div>

              <p className="text-slate-700">
                <strong>Parte c) Intensidade da onda:</strong>
              </p>
              <div className="bg-slate-100 p-4 rounded font-mono text-sm">
                <p>I = (1/2) * c * ε₀ * E₀²</p>
                <p>ε₀ = 8,854 × 10^-12 F/m</p>
                <p>I = (1/2) * (3 × 10^8) * (8,854 × 10^-12) * (1000)²</p>
                <p>I = (1/2) * (3 × 10^8) * (8,854 × 10^-12) * (10^6)</p>
                <p>I = 1328 W/m² ≈ 1,33 kW/m²</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <section className="mt-16 pt-8 border-t border-slate-300 flex justify-between">
          <Link href="/eletricidade/topic/circuitos-ac">
            <Button variant="outline">← Anterior</Button>
          </Link>
          <Link href="/eletricidade">
            <Button className="bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-700 hover:to-orange-600 text-white">
              Voltar ao Início →
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
