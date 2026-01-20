import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, X } from "lucide-react";
import { Link } from "wouter";

export default function EstaticaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "O que significa um corpo estar em equilíbrio?",
      options: [
        "A força resultante é zero",
        "O corpo está parado",
        "Não há forças atuando",
        "A velocidade é máxima",
      ],
      correct: 0,
      explanation: "Um corpo está em equilíbrio quando a força resultante é zero. Isso pode significar repouso (equilíbrio estático) ou movimento com velocidade constante (equilíbrio dinâmico).",
    },
    {
      question: "Qual é a fórmula para torque?",
      options: [
        "τ = F × d",
        "τ = m × a",
        "τ = F / d",
        "τ = m × g",
      ],
      correct: 0,
      explanation: "Torque é calculado como τ = r × F × sin(θ). Quando a força é perpendicular ao braço de alavanca, sin(θ) = 1, então τ = r × F.",
    },
    {
      question: "Uma criança de 40 kg está a 2 m do fulcro. Onde deve ficar uma criança de 20 kg para equilibrar?",
      options: [
        "1 m do fulcro",
        "2 m do fulcro",
        "4 m do fulcro",
        "0,5 m do fulcro",
      ],
      correct: 2,
      explanation: "Para equilíbrio: 40 × 2 = 20 × d. Resolvendo: d = 80 / 20 = 4 m. A criança mais leve deve ficar mais longe!",
    },
    {
      question: "Qual é a vantagem mecânica de uma alavanca com braço de resistência de 0,5 m e braço de aplicação de 2 m?",
      options: [
        "0,25",
        "2",
        "4",
        "1",
      ],
      correct: 2,
      explanation: "VM = braço de aplicação / braço de resistência = 2 / 0,5 = 4. Você precisa de apenas 1/4 da força!",
    },
    {
      question: "Qual máquina simples tem a maior vantagem mecânica?",
      options: [
        "Alavanca",
        "Polia",
        "Parafuso",
        "Cunha",
      ],
      correct: 2,
      explanation: "O parafuso, sendo um plano inclinado enrolado, tem uma vantagem mecânica muito alta. Pode ser 10 ou mais!",
    },
    {
      question: "O que é o centro de massa?",
      options: [
        "O ponto mais pesado do objeto",
        "O ponto onde toda a massa pode ser considerada concentrada",
        "O ponto onde o objeto está em repouso",
        "O ponto no meio do objeto",
      ],
      correct: 1,
      explanation: "Centro de massa é o ponto onde toda a massa de um objeto pode ser considerada concentrada. Para objetos simétricos, é no meio. Para objetos irregulares, pode estar em qualquer lugar.",
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
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
          <div className="container py-4 flex items-center gap-4">
            <Link href="/estatica">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Quiz de Estática</h1>
          </div>
        </header>

        <section className="container py-12">
          <Card className="p-8 shadow-lg max-w-2xl mx-auto">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">Parabéns! 🎉</h2>
              <p className="text-xl text-slate-600">Você completou o quiz!</p>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-lg">
                <p className="text-6xl font-bold text-amber-700">{score}/{questions.length}</p>
                <p className="text-2xl font-bold text-amber-600 mt-2">{percentage.toFixed(0)}%</p>
              </div>

              <div className="space-y-3 text-left">
                {percentage >= 80 && (
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-900 font-bold">Excelente! Você domina os conceitos de Estática!</p>
                  </div>
                )}
                {percentage >= 60 && percentage < 80 && (
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-yellow-900 font-bold">Bom trabalho! Revise alguns conceitos e tente novamente.</p>
                  </div>
                )}
                {percentage < 60 && (
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-red-900 font-bold">Continue estudando! Você consegue melhorar!</p>
                  </div>
                )}
              </div>

              <Button onClick={resetQuiz} size="lg" className="bg-amber-600 hover:bg-amber-700 w-full">
                Fazer Quiz Novamente
              </Button>
            </div>
          </Card>
        </section>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/estatica">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Quiz de Estática</h1>
          </div>
          <div className="text-sm font-bold text-slate-600">
            Questão {currentQuestion + 1}/{questions.length}
          </div>
        </div>
      </header>

      <section className="container py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Barra de Progresso */}
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-amber-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Questão */}
          <Card className="p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{question.question}</h2>

            {/* Opções */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? isCorrect
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                      : "border-slate-200 hover:border-amber-400 bg-white"
                  } ${showResult ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900">{option}</span>
                    {showResult && selectedAnswer === index && (
                      <div>
                        {isCorrect ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <X className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Explicação */}
            {showResult && (
              <div className={`mt-6 p-4 rounded-lg ${isCorrect ? "bg-green-50 border-l-4 border-green-500" : "bg-red-50 border-l-4 border-red-500"}`}>
                <p className={`font-bold ${isCorrect ? "text-green-900" : "text-red-900"}`}>
                  {isCorrect ? "✓ Correto!" : "✗ Incorreto"}
                </p>
                <p className={`mt-2 ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Botão Próximo */}
            {showResult && (
              <Button
                onClick={handleNext}
                size="lg"
                className="w-full mt-6 bg-amber-600 hover:bg-amber-700"
              >
                {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima Questão"}
              </Button>
            )}
          </Card>

          {/* Pontuação */}
          <div className="text-center text-slate-600">
            <p>Pontuação: {score}/{currentQuestion}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
