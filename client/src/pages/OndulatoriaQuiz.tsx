import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { Link } from "wouter";
import { MathFormula } from "@/components/MathFormula";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Uma onda harmônica propaga-se em uma corda com equação y(x,t) = 0,05 cos(4πx - 20πt) (SI). Qual é a velocidade de propagação da onda?",
    options: ["0,2 m/s", "5 m/s", "20 m/s", "80 m/s"],
    correct: 1,
    explanation: "A equação geral é y = A cos(kx - ωt). Comparando: k = 4π rad/m e ω = 20π rad/s. A velocidade é v = ω/k = 20π/4π = 5 m/s."
  },
  {
    id: 2,
    question: "Um tubo sonoro aberto em ambas as extremidades tem comprimento L = 0,85 m. Sabendo que a velocidade do som é 340 m/s, qual é a frequência do harmônico fundamental?",
    options: ["100 Hz", "200 Hz", "400 Hz", "340 Hz"],
    correct: 1,
    explanation: "Para tubos abertos, fₙ = nv/2L. O fundamental é n=1. f₁ = 1*340 / (2*0,85) = 340 / 1,7 = 200 Hz."
  },
  {
    id: 3,
    question: "Uma fonte sonora aproxima-se de um observador parado com velocidade v/4, onde v é a velocidade do som. Se a frequência emitida é f₀, qual a frequência percebida?",
    options: ["4f₀/3", "3f₀/4", "5f₀/4", "4f₀/5"],
    correct: 0,
    explanation: "Efeito Doppler: f = f₀ [v / (v - v_fonte)]. f = f₀ [v / (v - v/4)] = f₀ [v / (3v/4)] = f₀ * 4/3 = 4f₀/3."
  },
  {
    id: 4,
    question: "Duas ondas coerentes com diferença de caminho Δx chegam a um ponto P. Para que ocorra interferência destrutiva total, Δx deve ser igual a:",
    options: ["nλ", "(n + 1/2)λ", "2nλ", "nλ/2"],
    correct: 1,
    explanation: "Interferência destrutiva ocorre quando a diferença de caminho é um múltiplo ímpar de meio comprimento de onda: Δx = (n + 1/2)λ, onde n é inteiro."
  },
  {
    id: 5,
    question: "A intensidade de uma onda sonora esférica a 2m da fonte é I. Qual será a intensidade a 6m da fonte?",
    options: ["I/3", "I/4", "I/9", "I/6"],
    correct: 2,
    explanation: "Para ondas esféricas, a intensidade decai com o quadrado da distância (I ∝ 1/r²). Se a distância triplica (2m -> 6m), a intensidade torna-se (1/3)² = 1/9 da original."
  }
];

export default function OndulatoriaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleAnswer = (index: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = index;
    setSelectedAnswers(newAnswers);

    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const generateCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 1200;
    const height = 800;
    canvas.width = width;
    canvas.height = height;

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    // Border
    ctx.strokeStyle = "#9333ea"; // Roxo Ondulatória
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // Inner border
    ctx.strokeStyle = "#d8b4fe";
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Title
    ctx.fillStyle = "#1e293b";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.fillText("CERTIFICADO DE CONCLUSÃO", width / 2, 120);

    // Subtitle
    ctx.fillStyle = "#64748b";
    ctx.font = "24px Arial";
    ctx.fillText("Quiz de Ondulatória - Nível ITA/IME", width / 2, 170);

    // Decorative line
    ctx.strokeStyle = "#9333ea";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(width - 200, 200);
    ctx.stroke();

    // Content
    ctx.fillStyle = "#334155";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Parabéns! Você completou o módulo de Ondas.", width / 2, 280);

    // Score
    ctx.fillStyle = "#9333ea";
    ctx.font = "bold 36px Arial";
    ctx.fillText(`Pontuação: ${score}/${quizQuestions.length}`, width / 2, 360);

    // Percentage
    const percentage = Math.round((score / quizQuestions.length) * 100);
    ctx.fillStyle = "#334155";
    ctx.font = "24px Arial";
    ctx.fillText(`${percentage}% de acerto`, width / 2, 420);

    // Footer
    ctx.fillStyle = "#64748b";
    ctx.font = "16px Arial";
    ctx.fillText("Projeto ITA - Do Zero a Aprovação", width / 2, 700);
    ctx.fillText(new Date().toLocaleDateString("pt-BR"), width / 2, 750);

    // Download
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `certificado-ondulatoria-${Date.now()}.png`;
    link.click();
  };

  const handleShare = () => {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    window.open(`https://wa.me/?text=Consegui ${percentage}% de acerto no Quiz de Ondulatória do Projeto ITA!`, "_blank");
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers([]);
  };

  if (showResults) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
          <div className="container py-4 flex items-center gap-4">
            <Link href="/ondulatoria">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Resultados do Quiz</h1>
          </div>
        </header>

        <section className="container py-12 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <Card className="w-full max-w-md p-8 shadow-xl">
            <div className="text-center space-y-6">
              <div className={`text-6xl font-bold ${passed ? "text-green-600" : "text-orange-600"}`}>
                {percentage}%
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 mb-2">
                  {passed ? "Excelente! 🎉" : "Bom esforço! 💪"}
                </p>
                <p className="text-slate-600">
                  Você acertou {score} de {quizQuestions.length} questões
                </p>
              </div>

              {passed && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 font-semibold">✓ Você conquistou o certificado!</p>
                </div>
              )}

              <div className="space-y-3">
                {passed && (
                  <>
                    <Button onClick={generateCertificate} className="w-full bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Certificado
                    </Button>
                    <Button onClick={handleShare} variant="outline" className="w-full">
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartilhar no WhatsApp
                    </Button>
                  </>
                )}
                <Button onClick={resetQuiz} variant="outline" className="w-full">
                  Tentar Novamente
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/ondulatoria">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Quiz de Ondulatória</h1>
          </div>
          <div className="text-sm font-semibold text-slate-600">
            Questão {currentQuestion + 1}/{quizQuestions.length}
          </div>
        </div>
      </header>

      <section className="container py-12 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Card className="w-full max-w-2xl p-8 shadow-xl">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-100 to-fuchsia-100 p-4 rounded-lg">
              <p className="text-lg font-semibold text-slate-900">{question.question}</p>
            </div>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-4 text-left border-2 border-slate-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-transparent group-hover:bg-purple-600" />
                    </div>
                    <span className="font-medium text-slate-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>
        </Card>
      </section>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
