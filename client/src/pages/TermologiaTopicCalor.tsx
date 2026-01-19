import { Link } from "wouter";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermologiaTopicCalor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-red-50">
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
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Calor e Energia Térmica</h1>
              <p className="text-xs text-slate-600">Termologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🔥 O que é Calor?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Calor é a <strong>transferência de energia térmica</strong> entre dois corpos com temperaturas diferentes. Importante: <strong>calor e temperatura não são a mesma coisa!</strong> Temperatura mede a intensidade do movimento das moléculas, enquanto calor é a energia que flui de um corpo quente para um corpo frio.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-slate-700">
              <strong>Analogia:</strong> Se temperatura é como medir o "agito" das moléculas, calor é como medir a "quantidade de energia" que flui de um corpo para outro. Um copo de água quente tem alta temperatura, mas pouca energia (pouco calor). Uma piscina morna tem baixa temperatura, mas muita energia (muito calor).
            </p>
          </div>
        </div>

        {/* Formas de Transferência */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📤 Formas de Transferência de Calor</h2>
          
          <div className="space-y-6">
            {/* Condução */}
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">1. Condução</h3>
              <p className="text-slate-700 mb-4">
                O calor se propaga através do material, de molécula para molécula, <strong>sem movimento do material</strong>. Exemplo: quando você coloca uma colher em uma xícara de chá quente, a colher aquece porque o calor se propaga pelo metal.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700"><strong>Materiais condutores:</strong> Metais (cobre, alumínio, ferro)</p>
                <p className="text-slate-700"><strong>Materiais isolantes:</strong> Madeira, plástico, ar</p>
              </div>
            </div>

            {/* Convecção */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">2. Convecção</h3>
              <p className="text-slate-700 mb-4">
                O calor se propaga através do <strong>movimento do fluido</strong> (líquido ou gás). Exemplo: quando você aquece água em uma panela, o calor sobe pela água quente e desce pela água fria, criando correntes de convecção.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700"><strong>Ocorre em:</strong> Líquidos e gases</p>
                <p className="text-slate-700"><strong>Exemplos:</strong> Aquecimento de água, brisa marítima, ar-condicionado</p>
              </div>
            </div>

            {/* Radiação */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">3. Radiação</h3>
              <p className="text-slate-700 mb-4">
                O calor se propaga através de <strong>ondas eletromagnéticas</strong>, <strong>sem necessidade de um meio</strong>. Exemplo: o calor do Sol chega até nós através do vácuo do espaço por radiação.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-700"><strong>Ocorre em:</strong> Vácuo e qualquer meio</p>
                <p className="text-slate-700"><strong>Exemplos:</strong> Radiação solar, calor de um fogo, radiação infravermelha</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calor Sensível */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📊 Calor Sensível</h2>
          
          <p className="text-slate-700 mb-6">
            Calor sensível é o calor que <strong>causa variação de temperatura</strong> em um corpo. É calculado pela fórmula:
          </p>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-400 rounded-lg p-6 mb-6">
            <div className="text-center font-mono text-lg text-slate-800 mb-2">Q = m · c · ΔT</div>
            <div className="text-center text-sm text-slate-700">
              <p><strong>Q:</strong> Calor sensível (em Joules - J)</p>
              <p><strong>m:</strong> Massa do corpo (em kg)</p>
              <p><strong>c:</strong> Calor específico (em J/(kg·K))</p>
              <p><strong>ΔT:</strong> Variação de temperatura (em K ou °C)</p>
            </div>
          </div>

          {/* Calor Específico */}
          <div className="bg-slate-50 rounded-lg p-6 mb-6">
            <h4 className="font-bold text-slate-900 mb-4">Calor Específico de Materiais Comuns</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-slate-700">
                <thead>
                  <tr className="border-b-2 border-slate-300">
                    <th className="text-left p-2">Material</th>
                    <th className="text-left p-2">Calor Específico (J/(kg·K))</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-2">Água</td>
                    <td className="p-2">4.186</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2">Ferro</td>
                    <td className="p-2">448</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2">Alumínio</td>
                    <td className="p-2">897</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-2">Vidro</td>
                    <td className="p-2">840</td>
                  </tr>
                  <tr>
                    <td className="p-2">Ar</td>
                    <td className="p-2">1.005</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Exemplo */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-bold text-slate-900 mb-3">📝 Exemplo Prático</h4>
            <p className="text-slate-700 mb-3">
              <strong>Problema:</strong> Quanto calor é necessário para aquecer 2 kg de água de 20°C para 80°C?
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <p className="text-slate-700 mb-2"><strong>Dados:</strong></p>
              <p className="text-slate-600">m = 2 kg</p>
              <p className="text-slate-600">c = 4.186 J/(kg·K)</p>
              <p className="text-slate-600">ΔT = 80 - 20 = 60 K</p>
              <p className="text-slate-700 mt-3 mb-2"><strong>Cálculo:</strong></p>
              <p className="text-slate-600">Q = 2 × 4.186 × 60 = <strong>502.320 J ≈ 502,3 kJ</strong></p>
            </div>
          </div>
        </div>

        {/* Erros Comuns */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ Erros Comuns</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Confundir calor com temperatura:</strong> Calor é energia que flui; temperatura é a intensidade do movimento molecular.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Esquecer de usar ΔT (variação):</strong> Use sempre a diferença de temperatura, não a temperatura absoluta.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">❌</span>
              <span><strong>Usar unidades inconsistentes:</strong> Certifique-se que massa está em kg, calor específico em J/(kg·K) e temperatura em K.</span>
            </li>
          </ul>
        </div>

        {/* Dicas Práticas */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">💡 Dicas Práticas</h3>
          <ul className="space-y-3 text-green-900">
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Água tem alto calor específico:</strong> Por isso demora para aquecer e para esfriar. É um ótimo isolante térmico.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Metais têm baixo calor específico:</strong> Por isso aquecem rápido quando você coloca uma colher em chá quente.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">✅</span>
              <span><strong>Sempre use Kelvin ou Celsius?</strong> Para ΔT, tanto faz! Mas para fórmulas com temperatura absoluta, use Kelvin.</span>
            </li>
          </ul>
        </div>

        {/* Próximos Passos */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 Próximos Passos</h3>
          <p className="text-blue-900 mb-4">Agora que você entende calor e energia térmica, estude:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/termologia/topic/calorimetria">
              <Button className="bg-blue-600 hover:bg-blue-700">Calorimetria</Button>
            </Link>
            <Link href="/termologia/topic/termodinamica">
              <Button variant="outline">Termodinâmica</Button>
            </Link>
            <Link href="/termologia/simulator">
              <Button variant="outline">Usar Simulador</Button>
            </Link>
          </div>
        </div>
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
