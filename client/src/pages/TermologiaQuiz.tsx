import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermologiaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: "Qual é a relação entre as escalas Celsius e Kelvin?",
      options: [
        "K = °C + 273,15",
        "K = °C × 1,8 + 32",
        "K = °C / 1,8",
        "K = °C - 273,15",
      ],
      correct: 0,
      explanation: "A conversão correta é K = °C + 273,15. O zero absoluto (0 K) corresponde a -273,15°C.",
    },
    {
      question: "O que é calor latente?",
      options: [
        "Calor que aumenta a temperatura de um corpo",
        "Calor que causa mudança de estado sem variar a temperatura",
        "Calor que não pode ser medido",
        "Calor que desaparece do universo",
      ],
      correct: 1,
      explanation: "Calor latente é o calor necessário para mudança de estado (fusão, vaporização, sublimação) sem variar a temperatura.",
    },
    {
      question: "Qual é a fórmula da Primeira Lei da Termodinâmica?",
      options: [
        "Q = m · c · ΔT",
        "ΔU = Q - W",
        "P · V = n · R · T",
        "F = m · a",
      ],
      correct: 1,
      explanation: "A Primeira Lei da Termodinâmica é ΔU = Q - W, onde ΔU é variação de energia interna, Q é calor recebido e W é trabalho realizado.",
    },
    {
      question: "O que afirma a Segunda Lei da Termodinâmica?",
      options: [
        "A energia é sempre conservada",
        "A entropia de um sistema isolado sempre aumenta ou permanece constante",
        "O calor flui sempre do frio para o quente",
        "A temperatura é proporcional ao volume",
      ],
      correct: 1,
      explanation: "A Segunda Lei estabelece que a entropia (desordem) de um sistema isolado sempre aumenta ou permanece constante, nunca diminui.",
    },
    {
      question: "Qual é a fórmula da dilatação linear?",
      options: [
        "ΔL = L₀ · α · ΔT",
        "ΔV = V₀ · γ · ΔT",
        "Q = m · L",
        "ΔU = Q - W",
      ],
      correct: 0,
      explanation: "A dilatação linear é calculada por ΔL = L₀ · α · ΔT, onde α é o coeficiente de dilatação linear.",
    },
    {
      question: "Qual material tem o maior coeficiente de dilatação linear?",
      options: [
        "Ferro (α = 12 × 10⁻⁶ K⁻¹)",
        "Vidro (α = 8 × 10⁻⁶ K⁻¹)",
        "Alumínio (α = 23 × 10⁻⁶ K⁻¹)",
        "Invar (α = 0,9 × 10⁻⁶ K⁻¹)",
      ],
      correct: 2,
      explanation: "O alumínio tem o maior coeficiente de dilatação linear entre os materiais comuns (23 × 10⁻⁶ K⁻¹).",
    },
  ];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setCompleted(false);
  };

  if (completed) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/termologia">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Quiz de Termologia</h1>
                <p className="text-xs text-slate-600">Resultado Final</p>
              </div>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-slate-200">
            <div className="mb-8">
              {percentage >= 80 ? (
                <div className="text-6xl mb-4">🎉</div>
              ) : percentage >= 60 ? (
                <div className="text-6xl mb-4">👍</div>
              ) : (
                <div className="text-6xl mb-4">📚</div>
              )}
            </div>

            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {percentage >= 80 ? "Excelente!" : percentage >= 60 ? "Bom Trabalho!" : "Continue Estudando!"}
            </h2>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8 mb-8">
              <p className="text-6xl font-bold text-purple-600 mb-2">{percentage.toFixed(0)}%</p>
              <p className="text-slate-700 text-lg">
                Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong> questões
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {percentage >= 80 && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded text-left">
                  <p className="text-green-900 font-bold mb-2">🏆 Certificado de Conclusão</p>
                  <p className="text-green-800 text-sm">
                    Parabéns! Você demonstrou excelente compreensão de Termologia. Você está pronto para estudos avançados!
                  </p>
                </div>
              )}
              {percentage >= 60 && percentage < 80 && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-left">
                  <p className="text-blue-900 font-bold mb-2">📖 Recomendação</p>
                  <p className="text-blue-800 text-sm">
                    Revise os tópicos onde você teve dúvidas e tente o quiz novamente para melhorar seu desempenho!
                  </p>
                </div>
              )}
              {percentage < 60 && (
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded text-left">
                  <p className="text-yellow-900 font-bold mb-2">📚 Sugestão</p>
                  <p className="text-yellow-800 text-sm">
                    Estude novamente os tópicos de Termologia e use os simuladores para melhor compreensão. Tente o quiz novamente!
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} className="bg-purple-600 hover:bg-purple-700">
                Tentar Novamente
              </Button>
              <Link href="/termologia">
                <Button variant="outline">Voltar para Termologia</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50">
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
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Quiz de Termologia</h1>
              <p className="text-xs text-slate-600">Questão {currentQuestion + 1} de {questions.length}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">Progresso</span>
            <span className="text-sm font-semibold text-slate-700">
              {currentQuestion + 1}/{questions.length}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg text-left font-semibold transition-all ${
                  selectedAnswer === index
                    ? index === questions[currentQuestion].correct
                      ? "bg-green-100 border-2 border-green-500 text-green-900"
                      : "bg-red-100 border-2 border-red-500 text-red-900"
                    : index === questions[currentQuestion].correct && showResult
                    ? "bg-green-100 border-2 border-green-500 text-green-900"
                    : "bg-slate-100 border-2 border-slate-200 text-slate-900 hover:border-purple-400"
                } ${showResult ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-center gap-3">
                  {selectedAnswer === index && showResult && (
                    <>
                      {index === questions[currentQuestion].correct ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </>
                  )}
                  {index === questions[currentQuestion].correct && showResult && selectedAnswer !== index && (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  )}
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
              <p className="text-blue-900 font-semibold mb-2">Explicação:</p>
              <p className="text-blue-800">{questions[currentQuestion].explanation}</p>
            </div>
          )}

          {showResult && (
            <Button
              onClick={handleNext}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima Questão"}
            </Button>
          )}
        </div>

        {/* Score Display */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 text-center">
          <p className="text-slate-700 font-semibold">Pontuação Atual</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {score}/{questions.length}
          </p>
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
