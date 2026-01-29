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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultEndRef = useRef<HTMLDivElement>(null);

  const solveMutation = trpc.ai.solvePhysics.useMutation();

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

      const data = await solveMutation.mutateAsync({
        text: text || undefined,
        imageBase64,
        imageMimeType,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center shadow-indigo-200 shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Física Educacional</h1>
                <p className="text-xs text-indigo-600 font-medium">IA Resolutora Premium</p>
              </div>
            </div>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="gap-2 hover:bg-slate-100">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Inteligência Artificial de Elite
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Sua Dúvida Resolvida <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">em Segundos</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nossa IA avançada analisa textos e imagens para criar resoluções didáticas, completas e formatadas em LaTeX.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Input Card */}
            <Card className="border-slate-200 shadow-2xl rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm">
              <CardHeader className="bg-slate-50/50 border-b border-slate-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Brain className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Entrada da Questão</CardTitle>
                    <CardDescription>Envie o enunciado ou uma foto nítida do problema.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Target className="w-4 h-4 text-indigo-500" />
                    Enunciado da Questão
                  </label>
                  <Textarea
                    placeholder="Ex: Um carro percorre 100km em 2h, qual sua velocidade média?"
                    className="min-h-[120px] resize-none border-slate-200 focus:ring-indigo-500 rounded-xl bg-white"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-indigo-500" />
                    Imagem da Questão (Opcional)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <Button
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1 border-dashed border-2 border-slate-300 hover:border-indigo-400 hover:bg-indigo-50 rounded-xl"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {image ? "Trocar Imagem" : "Carregar Imagem"}
                    </Button>
                    {image && (
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setImage(null);
                          setPreview(null);
                        }}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Remover
                      </Button>
                    )}
                  </div>
                  {preview && (
                    <div className="mt-4 relative rounded-xl overflow-hidden border border-slate-200 shadow-md">
                      <img src={preview} alt="Preview" className="w-full max-h-64 object-contain bg-slate-50" />
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleSolve}
                  disabled={(!text && !image) || solveMutation.isPending}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  {solveMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Resolver Questão
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Status Message */}
            {status && (
              <div className="flex items-center justify-center gap-3 text-indigo-700 bg-indigo-50 p-4 rounded-xl border border-indigo-200 animate-pulse">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="font-medium">{status}</span>
              </div>
            )}

            {/* Result Card */}
            {result && (
              <Card className="border-slate-200 shadow-2xl rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-slate-200 p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-green-900">Resolução Completa</CardTitle>
                      <CardDescription>Análise detalhada e didática da questão</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 bg-white">
                  <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900 prose-code:text-indigo-600 prose-pre:bg-slate-900">
                    <ReactMarkdown
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                    >
                      {result}
                    </ReactMarkdown>
                  </div>
                  <div ref={resultEndRef} />
                </CardContent>
              </Card>
            )}
          </div>

          {/* Features Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Análise Profunda</h3>
              <p className="text-sm text-slate-600">Explicações passo a passo com fundamentação teórica completa</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">LaTeX Automático</h3>
              <p className="text-sm text-slate-600">Todas as fórmulas renderizadas em notação matemática profissional</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Visão Computacional</h3>
              <p className="text-sm text-slate-600">Reconhecimento de texto e diagramas em imagens de questões</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
