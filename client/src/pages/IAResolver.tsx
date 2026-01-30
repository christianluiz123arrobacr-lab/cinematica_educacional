import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { BookOpen, Upload, Send, Loader2, Image as ImageIcon, ArrowLeft, Sparkles, Brain, Target, Calculator, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { trpc } from "@/lib/trpc";

export default function IAResolver() {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [mode, setMode] = useState<"calculations" | "detailed">("detailed");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultEndRef = useRef<HTMLDivElement>(null);

  const solveMutation = trpc.ai.solvePhysics.useMutation();

  const modeOptions = [
    { 
      value: "calculations" as const, 
      label: "Somente as Contas", 
      icon: "🧮", 
      description: "Apenas cálculos e resultados" 
    },
    { 
      value: "detailed" as const, 
      label: "Com Explicação", 
      icon: "📚", 
      description: "Resolução completa e didática" 
    },
  ];

  // Auto-scroll para acompanhar a geração do texto
  useEffect(() => {
    if (result && resultEndRef.current) {
      resultEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateTyping = async (fullText: string) => {
    setStatus(null);
    let currentText = "";
    const words = fullText.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      currentText += words[i] + " ";
      setResult(currentText);
      // Velocidade variável para parecer mais natural
      await new Promise(resolve => setTimeout(resolve, 15 + Math.random() * 25));
    }
  };

  const handleSolve = async () => {
    if (!text && !image) {
      toast.error("Por favor, forneça um texto ou imagem da questão.");
      return;
    }

    setResult("");
    setStatus("Analisando sua questão...");

    try {
      let imageBase64: string | undefined;
      let imageMimeType: string | undefined;

      if (image) {
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve) => {
          reader.onloadend = () => {
            const base64String = reader.result as string;
            // Remove o prefixo "data:image/...;base64,"
            const base64Data = base64String.split(",")[1];
            resolve(base64Data || "");
          };
        });
        reader.readAsDataURL(image);
        imageBase64 = await base64Promise;
        imageMimeType = image.type;
      }

      const systemPrompt = mode === "calculations" 
        ? "Você é um professor de elite especialista em competições científicas (ITA, IME, IMO, IPhO). Resolva o problema mostrando APENAS os cálculos passo a passo, as fórmulas utilizadas e o resultado final. Não inclua explicações teóricas ou conceituais. Use LaTeX com '$$' para equações em bloco e '$' para inline. Seja conciso e direto."
        : "Você é um professor de elite e especialista em competições científicas (ITA, IME, IMO, IPhO). Sua missão é resolver problemas complexos de forma EXTREMAMENTE EXPLICATIVA e DIDÁTICA. Para cada passo da resolução, explique o 'porquê' físico ou matemático, os conceitos fundamentais envolvidos e a estratégia adotada. Não apenas mostre o cálculo, mas ensine o raciocínio. OBRIGATORIAMENTE, use '$$' para equações em bloco e '$' para matemática inline. Toda variável, unidade ou fórmula deve estar em LaTeX. A resolução deve ser profunda, clara e chegar ao resultado final com uma conclusão pedagógica.";

      const data = await solveMutation.mutateAsync({
        text: text || undefined,
        imageBase64,
        imageMimeType,
        systemPrompt,
      });

      setStatus("Organizando raciocínio...");
      await new Promise(resolve => setTimeout(resolve, 800));
      
      await simulateTyping(data.result);
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast.error(`Erro: ${errorMessage}`);
      setStatus(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">IA Resolutora</h1>
              <p className="text-xs text-slate-600">Resolva questões de Física com IA</p>
            </div>
          </div>
          <div className="w-10" />
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Sua Questão
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Mode Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-indigo-500" />
                    Tipo de Resolução
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {modeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setMode(option.value)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          mode === option.value
                            ? "border-indigo-500 bg-indigo-50"
                            : "border-slate-200 bg-white hover:border-indigo-300"
                        }`}
                      >
                        <div className="text-2xl mb-2">{option.icon}</div>
                        <div className="font-semibold text-slate-900 text-sm">{option.label}</div>
                        <div className="text-xs text-slate-600 mt-1">{option.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Target className="w-4 h-4 text-indigo-500" />
                    Enunciado da Questão
                  </label>
                  <Textarea
                    placeholder="Digite aqui o enunciado completo da questão de Física..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="min-h-32 resize-none border-slate-300 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-indigo-500" />
                    Ou Envie uma Foto
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full p-4 border-2 border-dashed border-slate-300 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all"
                  >
                    <Upload className="w-6 h-6 mx-auto text-slate-400 mb-2" />
                    <p className="text-sm text-slate-600">Clique para enviar imagem</p>
                  </button>
                </div>

                {/* Image Preview */}
                {preview && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-700">Imagem Selecionada:</p>
                    <img src={preview} alt="Preview" className="w-full rounded-lg border border-slate-300" />
                    <button
                      onClick={() => {
                        setImage(null);
                        setPreview(null);
                      }}
                      className="w-full text-sm text-red-600 hover:text-red-700 font-semibold"
                    >
                      Remover Imagem
                    </button>
                  </div>
                )}

                {/* Solve Button */}
                <Button
                  onClick={handleSolve}
                  disabled={(!text && !image) || solveMutation.isPending}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold gap-2 h-12"
                >
                  {solveMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Resolvendo...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Resolver Questão
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Output Panel */}
          <div className="lg:col-span-2">
            {status && (
              <div className="mb-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg flex items-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
                <p className="text-indigo-900 font-semibold">{status}</p>
              </div>
            )}

            {result && (
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Resolução
                  </CardTitle>
                  <CardDescription className="text-indigo-100 mt-2">
                    {mode === "calculations" ? "Cálculos e Resultados" : "Explicação Completa"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-10 bg-white">
                  <div className="space-y-8 text-slate-800">
                    <ReactMarkdown
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                      components={{
                        h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-slate-900 mt-10 mb-6 border-b-3 border-indigo-400 pb-3" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-3" {...props} />,
                        p: ({node, ...props}) => <p className="text-slate-800 leading-relaxed my-4 text-base" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-outside space-y-3 my-4 ml-6 text-slate-800" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal list-outside space-y-3 my-4 ml-6 text-slate-800" {...props} />,
                        li: ({node, ...props}) => <li className="text-slate-800 leading-relaxed" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-slate-700 my-4 bg-indigo-50 py-4 rounded-r-lg" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />,
                        em: ({node, ...props}) => <em className="italic text-slate-700" {...props} />,
                      }}
                    >
                      {result}
                    </ReactMarkdown>
                  </div>
                  <div ref={resultEndRef} />
                </CardContent>
              </Card>
            )}

            {!result && !status && (
              <Card className="shadow-lg border-dashed">
                <CardContent className="p-12 text-center">
                  <Calculator className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-600 text-lg font-semibold">
                    Envie uma questão para começar
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    Escolha o tipo de resolução e envie o enunciado ou uma foto da questão
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
