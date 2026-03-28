import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { MathFormula } from "./MathFormula";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import type { Question } from "@/types/question";

type InteractiveQuizProps = {
  questions: Question[];
};

export function InteractiveQuiz({ questions }: InteractiveQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersByQuestion, setAnswersByQuestion] = useState<Record<number, string>>({});
  const [showExplanationByQuestion, setShowExplanationByQuestion] = useState<Record<number, boolean>>({});

  if (!questions.length) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">📝 Exercícios Interativos</h3>
        <p className="text-slate-600">Nenhuma questão encontrada.</p>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answersByQuestion[currentQuestion] ?? null;
  const answered = selectedAnswer !== null;
  const showExplanation = showExplanationByQuestion[currentQuestion] ?? false;
  const isCorrect = selectedAnswer === question.correctOptionId;

  const score = useMemo(() => {
    return questions.reduce((total, q, index) => {
      return answersByQuestion[index] === q.correctOptionId ? total + 1 : total;
    }, 0);
  }, [answersByQuestion, questions]);

  const totalAnswered = useMemo(() => {
    return Object.keys(answersByQuestion).length;
  }, [answersByQuestion]);

  const isQuizComplete = questions.length > 0 && totalAnswered === questions.length;

  const handleAnswer = (optionId: string) => {
    if (answered) return;

    setAnswersByQuestion((prev) => ({
      ...prev,
      [currentQuestion]: optionId,
    }));

    setShowExplanationByQuestion((prev) => ({
      ...prev,
      [currentQuestion]: true,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswersByQuestion({});
    setShowExplanationByQuestion({});
  };

  const difficultyClass =
    question.difficulty === "facil"
      ? "bg-green-100 text-green-900"
      : question.difficulty === "medio"
        ? "bg-yellow-100 text-yellow-900"
        : "bg-red-100 text-red-900";

  const difficultyLabel =
    question.difficulty === "facil"
      ? "FÁCIL"
      : question.difficulty === "medio"
        ? "MÉDIO"
        : "DIFÍCIL";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">📝 Exercícios Interativos</h3>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900">
          {question.exam}
        </span>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-900">
          {question.year}
        </span>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${difficultyClass}`}>
          {difficultyLabel}
        </span>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900">
          {question.topic}
        </span>
        {question.subtopic && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-900">
            {question.subtopic}
          </span>
        )}
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-slate-900">Progresso</span>
          <span className="text-sm font-bold text-slate-600">
            {currentQuestion + 1} de {questions.length}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-300 mb-8">
        <div className="text-lg font-bold text-slate-900 mb-3 leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              p: ({ children }) => <p className="mb-3">{children}</p>,
              strong: ({ children }) => <strong className="font-bold">{children}</strong>,
            }}
          >
            {question.statement}
          </ReactMarkdown>
        </div>

        {question.imageUrl && (
          <div className="mt-4">
            <img
              src={question.imageUrl}
              alt="Imagem da questão"
              className="max-w-full rounded-lg border border-slate-200"
            />
          </div>
        )}

        {question.formula && (
          <div className="mt-4 p-4 bg-white rounded border border-blue-200">
            <p className="text-xs text-slate-600 mb-2">Fórmula útil:</p>
            <MathFormula
              formula={question.formula.replace(/^\$\$?|\$\$?$/g, "").trim()}
              display={true}
            />
          </div>
        )}
      </div>

      <div className="space-y-3 mb-8">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrectOption = option.id === question.correctOptionId;

          return (
            <button
              key={option.id}
              onClick={() => !answered && handleAnswer(option.id)}
              disabled={answered}
              className={`w-full p-4 rounded-lg border-2 text-left font-bold transition-all ${
                !answered
                  ? "border-slate-300 bg-white hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
                  : isSelected
                    ? isCorrectOption
                      ? "border-green-500 bg-green-50 text-green-900"
                      : "border-red-500 bg-red-50 text-red-900"
                    : isCorrectOption
                      ? "border-green-500 bg-green-50 text-green-900"
                      : "border-slate-300 bg-slate-50 text-slate-600"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      p: ({ children }) => <p className="mb-0">{children}</p>,
                      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                    }}
                  >
                    {`${option.label}) ${option.text ?? ""}`}
                  </ReactMarkdown>

                  {option.imageUrl && (
                    <img
                      src={option.imageUrl}
                      alt={`Alternativa ${option.label}`}
                      className="mt-3 max-h-48 max-w-full object-contain rounded border border-slate-200 bg-white"
                    />
                  )}
                </div>

                <div className="flex-shrink-0">
                  {answered && isCorrectOption && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {answered && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div
          className={`p-6 rounded-lg border-2 mb-8 ${
            isCorrect ? "bg-green-50 border-green-300" : "bg-yellow-50 border-yellow-300"
          }`}
        >
          <div className="flex gap-3 items-start">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            ) : (
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            )}

            <div className="w-full">
              <p className={`font-bold mb-3 ${isCorrect ? "text-green-900" : "text-yellow-900"}`}>
                {isCorrect ? "✅ Correto!" : "❌ Incorreto"}
              </p>

              <div className={`text-sm ${isCorrect ? "text-green-800" : "text-yellow-800"}`}>
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    p: ({ children }) => <p className="mb-3 whitespace-pre-line">{children}</p>,
                    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc pl-5 mb-3">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-5 mb-3">{children}</ol>,
                    li: ({ children }) => <li className="mb-1">{children}</li>,
                  }}
                >
                  {question.explanation || "Sem resolução cadastrada."}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        {currentQuestion > 0 && (
          <button
            onClick={handlePrevious}
            className="flex-1 bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-lg transition-all"
          >
            ← Questão Anterior
          </button>
        )}

        {currentQuestion < questions.length - 1 && (
          <button
            onClick={handleNext}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all"
          >
            Próxima Questão →
          </button>
        )}

        {isQuizComplete && currentQuestion === questions.length - 1 && (
          <button
            onClick={handleRestart}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all"
          >
            Recomeçar Quiz
          </button>
        )}
      </div>

      {isQuizComplete && (
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
          <h4 className="text-xl font-bold text-slate-900 mb-4">🏆 Resultado Final</h4>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-900 mb-2">
              {score}/{questions.length}
            </p>
            <p className="text-lg font-bold text-slate-700 mb-4">
              {((score / questions.length) * 100).toFixed(0)}% de acerto
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
