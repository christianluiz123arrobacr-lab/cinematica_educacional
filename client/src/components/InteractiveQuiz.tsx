import { useState } from "react";
import { MathFormula } from "./MathFormula";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  formula?: string;
  options: { text: string; value: number; isCorrect: boolean }[];
  correctAnswer: number;
  explanation: string;
  difficulty: "fácil" | "médio" | "difícil";
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual é a temperatura em Kelvin equivalente a 25°C?",
    formula: "K = °C + 273,15",
    options: [
      { text: "248,15 K", value: 248.15, isCorrect: false },
      { text: "298,15 K", value: 298.15, isCorrect: true },
      { text: "325,15 K", value: 325.15, isCorrect: false },
      { text: "373,15 K", value: 373.15, isCorrect: false },
    ],
    correctAnswer: 298.15,
    explanation: "Usando a fórmula K = °C + 273,15, temos: K = 25 + 273,15 = 298,15 K. Esta é a temperatura ambiente em Kelvin.",
    difficulty: "fácil",
  },
  {
    id: 2,
    question: "Quanto calor é necessário para aquecer 2 kg de água de 20°C para 80°C? (c_água = 4.200 J/(kg·°C))",
    formula: "Q = m \\cdot c \\cdot \\Delta T",
    options: [
      { text: "168.000 J", value: 168000, isCorrect: false },
      { text: "336.000 J", value: 336000, isCorrect: false },
      { text: "504.000 J", value: 504000, isCorrect: true },
      { text: "672.000 J", value: 672000, isCorrect: false },
    ],
    correctAnswer: 504000,
    explanation: "Q = m·c·ΔT = 2 × 4.200 × (80 - 20) = 2 × 4.200 × 60 = 504.000 J. Este é o calor necessário para aquecer a água.",
    difficulty: "médio",
  },
  {
    id: 3,
    question: "Em qual processo termodinâmico a temperatura permanece constante?",
    options: [
      { text: "Processo Isobárico", value: 1, isCorrect: false },
      { text: "Processo Isotérmico", value: 2, isCorrect: true },
      { text: "Processo Adiabático", value: 3, isCorrect: false },
      { text: "Processo Isocórico", value: 4, isCorrect: false },
    ],
    correctAnswer: 2,
    explanation: "No processo isotérmico, a temperatura permanece constante (T = const). A pressão e o volume variam inversamente, mantendo PV = constante.",
    difficulty: "fácil",
  },
  {
    id: 4,
    question: "Qual é a fórmula da 1ª Lei da Termodinâmica?",
    options: [
      { text: "ΔU = Q + W", value: 1, isCorrect: false },
      { text: "ΔU = Q - W", value: 2, isCorrect: true },
      { text: "ΔU = W - Q", value: 3, isCorrect: false },
      { text: "ΔU = Q × W", value: 4, isCorrect: false },
    ],
    correctAnswer: 2,
    explanation: "A 1ª Lei da Termodinâmica é ΔU = Q - W, onde ΔU é a variação de energia interna, Q é o calor absorvido e W é o trabalho realizado pelo sistema.",
    difficulty: "médio",
  },
  {
    id: 5,
    question: "Se você mistura 1 kg de água a 80°C com 1 kg de água a 20°C, qual será a temperatura final de equilíbrio?",
    formula: "Q_{perdido} = Q_{ganho}",
    options: [
      { text: "40°C", value: 40, isCorrect: false },
      { text: "50°C", value: 50, isCorrect: true },
      { text: "60°C", value: 60, isCorrect: false },
      { text: "70°C", value: 70, isCorrect: false },
    ],
    correctAnswer: 50,
    explanation: "No equilíbrio térmico, o calor perdido pela água quente iguala o calor ganho pela água fria. Como as massas e calores específicos são iguais, a temperatura final é a média: (80 + 20) / 2 = 50°C.",
    difficulty: "médio",
  },
];

export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleAnswer = (value: number) => {
    setSelectedAnswer(value);
    setAnswered(true);
    if (value === question.correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const isQuizComplete = currentQuestion === questions.length - 1 && answered;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">📝 Exercícios Interativos</h3>
      
      {/* PROGRESSO */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-slate-900">Progresso</span>
          <span className="text-sm font-bold text-slate-600">{currentQuestion + 1} de {questions.length}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* DIFICULDADE */}
      <div className="mb-6">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
          question.difficulty === "fácil" ? "bg-green-100 text-green-900" :
          question.difficulty === "médio" ? "bg-yellow-100 text-yellow-900" :
          "bg-red-100 text-red-900"
        }`}>
          {question.difficulty.toUpperCase()}
        </span>
      </div>

      {/* PERGUNTA */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-300 mb-8">
        <h4 className="text-lg font-bold text-slate-900 mb-3">{question.question}</h4>
        {question.formula && (
          <div className="mt-4 p-4 bg-white rounded border border-blue-200">
            <p className="text-xs text-slate-600 mb-2">Fórmula útil:</p>
            <MathFormula formula={question.formula} display={true} />
          </div>
        )}
      </div>

      {/* OPÇÕES */}
      <div className="space-y-3 mb-8">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => !answered && handleAnswer(option.value)}
            disabled={answered}
            className={`w-full p-4 rounded-lg border-2 text-left font-bold transition-all ${
              !answered
                ? "border-slate-300 bg-white hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
                : selectedAnswer === option.value
                ? option.isCorrect
                  ? "border-green-500 bg-green-50 text-green-900"
                  : "border-red-500 bg-red-50 text-red-900"
                : option.isCorrect
                ? "border-green-500 bg-green-50 text-green-900"
                : "border-slate-300 bg-slate-50 text-slate-600"
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option.text}</span>
              {answered && option.isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
              {answered && selectedAnswer === option.value && !option.isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
            </div>
          </button>
        ))}
      </div>

      {/* EXPLICAÇÃO */}
      {showExplanation && (
        <div className={`p-6 rounded-lg border-2 mb-8 ${
          isCorrect
            ? "bg-green-50 border-green-300"
            : "bg-yellow-50 border-yellow-300"
        }`}>
          <div className="flex gap-3 items-start">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            ) : (
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            )}
            <div>
              <p className={`font-bold mb-2 ${isCorrect ? "text-green-900" : "text-yellow-900"}`}>
                {isCorrect ? "✅ Correto!" : "❌ Incorreto"}
              </p>
              <p className={`text-sm ${isCorrect ? "text-green-800" : "text-yellow-800"}`}>
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* BOTÕES DE AÇÃO */}
      <div className="flex gap-4">
        {answered && !isQuizComplete && (
          <button
            onClick={handleNext}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all"
          >
            Próxima Questão →
          </button>
        )}
        {isQuizComplete && (
          <button
            onClick={handleRestart}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all"
          >
            Recomeçar Quiz
          </button>
        )}
      </div>

      {/* PLACAR FINAL */}
      {isQuizComplete && (
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
          <h4 className="text-xl font-bold text-slate-900 mb-4">🏆 Resultado Final</h4>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-900 mb-2">{score}/{questions.length}</p>
            <p className="text-lg font-bold text-slate-700 mb-4">
              {((score / questions.length) * 100).toFixed(0)}% de acerto
            </p>
            <p className={`text-sm ${
              score === questions.length ? "text-green-700" :
              score >= 3 ? "text-yellow-700" :
              "text-red-700"
            }`}>
              {score === questions.length ? "🎉 Perfeito! Você domina o assunto!" :
               score >= 3 ? "👍 Bom desempenho! Continue estudando." :
               "📚 Estude mais e tente novamente."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
