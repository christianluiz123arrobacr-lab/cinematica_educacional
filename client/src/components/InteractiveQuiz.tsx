import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { MathFormula } from "./MathFormula";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import type { Question } from "@/types/question";
import { supabase } from "@/lib/supabase";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

export type QuizCompletionData = {
  totalQuestions: number;
  totalAnswered: number;
  score: number;
  accuracy: number;
  correctQuestionIds: string[];
  wrongQuestionIds: string[];
  wrongTopics: { topic: string; count: number }[];
  wrongDifficulties: { difficulty: string; count: number }[];
};

type InteractiveQuizProps = {
  questions: Question[];
  onComplete?: (data: QuizCompletionData) => void;
};

export function InteractiveQuiz({ questions, onComplete }: InteractiveQuizProps) {
  const { user } = useSupabaseAuth();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersByQuestion, setAnswersByQuestion] = useState<Record<number, string>>({});
  const [showExplanationByQuestion, setShowExplanationByQuestion] = useState<Record<number, boolean>>({});
  const [questionStartedAt, setQuestionStartedAt] = useState<number>(Date.now());
  const [hasSentCompletion, setHasSentCompletion] = useState(false);

  useEffect(() => {
    if (!questions.length) {
      setCurrentQuestion(0);
      return;
    }

    if (currentQuestion > questions.length - 1) {
      setCurrentQuestion(questions.length - 1);
    }
  }, [questions, currentQuestion]);

  useEffect(() => {
    setQuestionStartedAt(Date.now());
  }, [currentQuestion, questions]);

  useEffect(() => {
    setHasSentCompletion(false);
  }, [questions]);

  if (!questions.length) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">📝 Exercícios Interativos</h3>
        <p className="text-slate-600">Nenhuma questão encontrada.</p>
      </div>
    );
  }

  const question = questions[currentQuestion];

  if (!question) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">📝 Exercícios Interativos</h3>
        <p className="text-slate-600">Carregando questão...</p>
      </div>
    );
  }

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

  const completionData = useMemo<QuizCompletionData | null>(() => {
    if (!isQuizComplete) return null;

    const correctQuestionIds: string[] = [];
    const wrongQuestionIds: string[] = [];
    const wrongTopicMap = new Map<string, number>();
    const wrongDifficultyMap = new Map<string, number>();

    questions.forEach((q, index) => {
      const selected = answersByQuestion[index];
      const correct = selected === q.correctOptionId;

      if (correct) {
        correctQuestionIds.push(q.id);
      } else {
        wrongQuestionIds.push(q.id);

        const topic = q.topic || "Sem conteúdo";
        wrongTopicMap.set(topic, (wrongTopicMap.get(topic) ?? 0) + 1);

        const difficulty =
          q.difficulty === "facil"
            ? "Fácil"
            : q.difficulty === "medio"
              ? "Médio"
              : q.difficulty === "dificil"
                ? "Difícil"
                : "Não informado";

        wrongDifficultyMap.set(difficulty, (wrongDifficultyMap.get(difficulty) ?? 0) + 1);
      }
    });

    return {
      totalQuestions: questions.length,
      totalAnswered,
      score,
      accuracy: questions.length > 0 ? (score / questions.length) * 100 : 0,
      correctQuestionIds,
      wrongQuestionIds,
      wrongTopics: Array.from(wrongTopicMap.entries())
        .map(([topic, count]) => ({ topic, count }))
        .sort((a, b) => b.count - a.count),
      wrongDifficulties: Array.from(wrongDifficultyMap.entries())
        .map(([difficulty, count]) => ({ difficulty, count }))
        .sort((a, b) => b.count - a.count),
    };
  }, [answersByQuestion, isQuizComplete, questions, score, totalAnswered]);

  useEffect(() => {
    if (isQuizComplete && completionData && onComplete && !hasSentCompletion) {
      onComplete(completionData);
      setHasSentCompletion(true);
    }
  }, [completionData, hasSentCompletion, isQuizComplete, onComplete]);

  const saveAttempt = async (optionId: string) => {
    if (!user?.id) return;

    try {
      const elapsedSeconds = Math.max(
        1,
        Math.round((Date.now() - questionStartedAt) / 1000)
      );

      const { count, error: countError } = await supabase
        .from("user_question_attempts")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("question_id", question.id);

      if (countError) {
        console.error("Erro ao contar tentativas:", countError);
        return;
      }

      const attemptNumber = (count ?? 0) + 1;
      const correct = optionId === question.correctOptionId;

      const { error: insertError } = await supabase
        .from("user_question_attempts")
        .insert({
          user_id: user.id,
          question_id: question.id,
          selected_option: optionId,
          is_correct: correct,
          time_spent_seconds: elapsedSeconds,
          attempt_number: attemptNumber,
          subject: question.subject,
          conteudo: question.topic,
          assunto: question.subtopic ?? null,
          banca: question.exam,
          ano: question.year,
          difficulty: question.difficulty,
        });

      if (insertError) {
        console.error("Erro ao salvar tentativa:", insertError);
      }
    } catch (error) {
      console.error("Erro inesperado ao salvar tentativa:", error);
    }
  };

  const handleAnswer = async (optionId: string) => {
    if (answered) return;

    setAnswersByQuestion((prev) => ({
      ...prev,
      [currentQuestion]: optionId,
    }));

    setShowExplanationByQuestion((prev) => ({
      ...prev,
      [currentQuestion]: true,
    }));

    await saveAttempt(optionId);
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
    setQuestionStartedAt(Date.now());
    setHasSentCompletion(false);
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
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-bold text-slate-900">Progresso</span>

          <div className="flex flex-col items-end">
            {question.codigo && (
              <span className="text-xs font-bold text-slate-500 mb-1">
                {question.codigo}
              </span>
            )}
            <span className="text-sm font-bold text-slate-600">
              {currentQuestion + 1} de {questions.length}
            </span>
          </div>
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

        {question.statementAfterImage && (
          <div className="mt-4 text-lg font-bold text-slate-900 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
              components={{
                p: ({ children }) => <p className="mb-3">{children}</p>,
                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
              }}
            >
              {question.statementAfterImage}
            </ReactMarkdown>
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
          {question.explanationBlocks && question.explanationBlocks.length > 0 ? (
            <div className="space-y-4">
              {question.explanationBlocks
                .sort((a, b) => a.order - b.order)
                .map((block, index) => {
                  if (block.type === "imagem" && block.imageUrl) {
                    return (
                      <div key={`${block.type}-${block.order}-${index}`} className="rounded-xl overflow-hidden border border-slate-200 bg-white p-3">
                        <img
                          src={block.imageUrl}
                          alt={`Imagem da resolução ${index + 1}`}
                          className="max-w-full rounded-lg mx-auto"
                        />
                      </div>
                    );
                  }

                  if (block.type === "latex" && block.content) {
                    return (
                      <div
                        key={`${block.type}-${block.order}-${index}`}
                        className="rounded-xl border border-slate-200 bg-white p-4"
                      >
                        <ReactMarkdown
                          remarkPlugins={[remarkMath]}
                          rehypePlugins={[rehypeKatex]}
                          components={{
                            p: ({ children }) => <p className="mb-0">{children}</p>,
                            strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                          }}
                        >
                          {block.content}
                        </ReactMarkdown>
                      </div>
                    );
                  }

                  if (block.content) {
                    return (
                      <ReactMarkdown
                        key={`${block.type}-${block.order}-${index}`}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                          p: ({ children }) => (
                            <p className="mb-3 whitespace-pre-line">{children}</p>
                          ),
                          strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                          ul: ({ children }) => <ul className="list-disc pl-5 mb-3">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal pl-5 mb-3">{children}</ol>,
                          li: ({ children }) => <li className="mb-1">{children}</li>,
                        }}
                      >
                        {block.content}
                      </ReactMarkdown>
                    );
                  }

                  return null;
                })}
            </div>
          ) : (
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
          )}
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

      {isQuizComplete && completionData && (
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-300">
          <h4 className="text-xl font-bold text-slate-900 mb-4">🏆 Resultado Final</h4>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-900 mb-2">
              {score}/{questions.length}
            </p>
            <p className="text-lg font-bold text-slate-700 mb-4">
              {completionData.accuracy.toFixed(0)}% de acerto
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
