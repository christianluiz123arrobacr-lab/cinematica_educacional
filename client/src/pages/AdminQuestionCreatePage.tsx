import { ChangeEvent, useState } from "react";
import { Link, useLocation } from "wouter";
import { supabase } from "@/lib/supabase";
import { logAdminAction } from "@/lib/adminLogs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";
import {
  Loader2,
  AlertTriangle,
  Save,
  ArrowLeft,
  CheckCircle2,
  Upload,
  Image as ImageIcon,
} from "lucide-react";

type QuestionFormData = {
  codigo: string;
  disciplina: string;
  conteudo: string;
  assunto: string;
  banca: string;
  ano: string;
  dificuldade: string;
  instituicao: string;
  publicada: boolean;
  enunciado: string;
  enunciado_pos_imagem: string;
  formula: string;
  url_imagem: string;
  alternativa_a: string;
  alternativa_b: string;
  alternativa_c: string;
  alternativa_d: string;
  alternativa_e: string;
  alternativa_correta: string;
};

const QUESTION_IMAGES_BUCKET = "questoes-imagens";

const initialForm: QuestionFormData = {
  codigo: "",
  disciplina: "",
  conteudo: "",
  assunto: "",
  banca: "",
  ano: "",
  dificuldade: "",
  instituicao: "",
  publicada: true,
  enunciado: "",
  enunciado_pos_imagem: "",
  formula: "",
  url_imagem: "",
  alternativa_a: "",
  alternativa_b: "",
  alternativa_c: "",
  alternativa_d: "",
  alternativa_e: "",
  alternativa_correta: "",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      {children}
    </label>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
        props.className || ""
      }`}
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
        props.className || ""
      }`}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
        props.className || ""
      }`}
    />
  );
}

function valorLimpo(texto: string) {
  const valor = texto.trim();
  return valor.length > 0 ? valor : null;
}

function gerarNomeArquivo(originalName: string) {
  const extensao = originalName.includes(".")
    ? originalName.split(".").pop()
    : "png";

  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}.${extensao}`;
}

export default function AdminQuestionCreatePage() {
  const [, setLocation] = useLocation();

  const [form, setForm] = useState<QuestionFormData>(initialForm);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function updateField<K extends keyof QuestionFormData>(
    field: K,
    value: QuestionFormData[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
    async function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      setError("");
      setSuccessMessage("");

      const pastaBase =
        form.codigo.trim() || `questao-${Date.now().toString()}`;
      const fileName = gerarNomeArquivo(file.name);
      const path = `${pastaBase}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(QUESTION_IMAGES_BUCKET)
        .upload(path, file, {
          upsert: true,
        });

      if (uploadError) {
        console.error("Erro ao enviar imagem da questão:", uploadError);
        setError("Não foi possível enviar a imagem da questão.");
        return;
      }

      const { data } = supabase.storage
        .from(QUESTION_IMAGES_BUCKET)
        .getPublicUrl(path);

      if (!data?.publicUrl) {
        setError("Não foi possível gerar a URL pública da imagem.");
        return;
      }

      updateField("url_imagem", data.publicUrl);
      setSuccessMessage("Imagem da questão enviada com sucesso.");
    } catch (err) {
      console.error("Erro inesperado ao enviar imagem da questão:", err);
      setError("Ocorreu um erro inesperado ao enviar a imagem.");
    } finally {
      setUploadingImage(false);
      event.target.value = "";
    }
  }

  async function handleCreate() {
    if (saving) return;

    try {
      setSaving(true);
      setError("");
      setSuccessMessage("");

      const anoNumero = Number(form.ano);

      if (!form.disciplina.trim()) {
        setError("Preencha a disciplina.");
        return;
      }

      if (!form.assunto.trim()) {
        setError("Preencha o assunto.");
        return;
      }

      if (!form.dificuldade.trim()) {
        setError("Preencha a dificuldade.");
        return;
      }

      if (!form.instituicao.trim()) {
        setError("Preencha a instituição.");
        return;
      }

      if (!form.ano.trim() || Number.isNaN(anoNumero)) {
        setError("Preencha um ano válido.");
        return;
      }

      if (!form.alternativa_a.trim()) {
        setError("Preencha a alternativa A.");
        return;
      }

      if (!form.alternativa_b.trim()) {
        setError("Preencha a alternativa B.");
        return;
      }

      if (!form.alternativa_correta.trim()) {
        setError("Selecione a alternativa correta.");
        return;
      }

      const payload = {
        codigo: valorLimpo(form.codigo),
        disciplina: valorLimpo(form.disciplina),
        conteudo: valorLimpo(form.conteudo),
        assunto: valorLimpo(form.assunto),
        banca: valorLimpo(form.banca),
        ano: anoNumero,
        dificuldade: valorLimpo(form.dificuldade),
        instituição: valorLimpo(form.instituicao),
        publicada: form.publicada,
        enunciado: valorLimpo(form.enunciado),
        enunciado_pos_imagem: valorLimpo(form.enunciado_pos_imagem),
        formula: valorLimpo(form.formula),
        url_imagem: valorLimpo(form.url_imagem),
        A: valorLimpo(form.alternativa_a),
        B: valorLimpo(form.alternativa_b),
        C: valorLimpo(form.alternativa_c),
        D: valorLimpo(form.alternativa_d),
        E: valorLimpo(form.alternativa_e),
        alternativa_correta: valorLimpo(form.alternativa_correta),
      };

      const { data, error } = await supabase
        .from("questoes")
        .insert([payload])
        .select("id")
        .single();

      if (error) {
        console.error("Erro ao criar questão:", error);
        setError(
          error.message
            ? `Não foi possível criar a questão: ${error.message}`
            : "Não foi possível criar a questão."
        );
        return;
      }

      if (!data?.id) {
        setError("A questão foi criada, mas o ID não retornou como esperado.");
        return;
      }

      await logAdminAction({
        action: "question_created",
        entityType: "questao",
        entityId: data.id,
        description: `Questão ${form.codigo || data.id} criada no ADM`,
        level: "info",
        metadata: {
          codigo: form.codigo || null,
          disciplina: form.disciplina || null,
          conteudo: form.conteudo || null,
          assunto: form.assunto || null,
          banca: form.banca || null,
          ano: form.ano ? Number(form.ano) : null,
          dificuldade: form.dificuldade || null,
          instituicao: form.instituicao || null,
          publicada: form.publicada,
          urlImagem: form.url_imagem || null,
        },
      });

      setSuccessMessage("Questão criada com sucesso. Indo para a resolução...");
      setLocation(`/admin/resolucoes/${data.id}`);
    } catch (err) {
      console.error("Erro inesperado ao criar questão:", err);
      setError("Ocorreu um erro inesperado ao criar a questão.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AdminGuard>
      <AdminLayout
        title="Nova questão"
        subtitle="Cadastre uma nova questão diretamente pelo painel administrativo."
      >
        <Card className="p-6 bg-white border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500 mb-1">Criação de questão</p>
              <p className="text-sm text-slate-800">
                Preencha os campos e salve para inserir direto no Supabase.
              </p>
            </div>

            <Link href="/admin/questoes">
              <Button variant="outline" className="rounded-2xl">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para questões
              </Button>
            </Link>
          </div>
        </Card>

        {error ? (
          <Card className="p-5 border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-red-700 mb-1">
                  Erro ao criar questão
                </h2>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          </Card>
        ) : null}

        {successMessage ? (
          <Card className="p-5 border-emerald-200 bg-emerald-50">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <p className="text-emerald-700 font-medium">{successMessage}</p>
            </div>
          </Card>
        ) : null}

        <Card className="p-6 bg-white border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Dados principais
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div>
              <FieldLabel>Código</FieldLabel>
              <TextInput
                value={form.codigo}
                onChange={(e) => updateField("codigo", e.target.value)}
                placeholder="Q00001"
              />
            </div>

            <div>
              <FieldLabel>Disciplina</FieldLabel>
              <Select
                value={form.disciplina}
                onChange={(e) => updateField("disciplina", e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="fisica">Física</option>
                <option value="matematica">Matemática</option>
                <option value="quimica">Química</option>
              </Select>
            </div>

            <div>
              <FieldLabel>Ano</FieldLabel>
              <TextInput
                value={form.ano}
                onChange={(e) => updateField("ano", e.target.value)}
                placeholder="2024"
              />
            </div>

            <div>
              <FieldLabel>Dificuldade</FieldLabel>
              <Select
                value={form.dificuldade}
                onChange={(e) => updateField("dificuldade", e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="facil">Fácil</option>
                <option value="medio">Médio</option>
                <option value="dificil">Difícil</option>
              </Select>
            </div>

            <div>
              <FieldLabel>Conteúdo</FieldLabel>
              <TextInput
                value={form.conteudo}
                onChange={(e) => updateField("conteudo", e.target.value)}
                placeholder="cinemática"
              />
            </div>

            <div>
              <FieldLabel>Assunto</FieldLabel>
              <TextInput
                value={form.assunto}
                onChange={(e) => updateField("assunto", e.target.value)}
                placeholder="mru"
              />
            </div>

            <div>
              <FieldLabel>Banca</FieldLabel>
              <TextInput
                value={form.banca}
                onChange={(e) => updateField("banca", e.target.value)}
                placeholder="eear"
              />
            </div>

            <div>
              <FieldLabel>Instituição</FieldLabel>
              <TextInput
                value={form.instituicao}
                onChange={(e) => updateField("instituicao", e.target.value)}
                placeholder="eear"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="inline-flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.publicada}
                onChange={(e) => updateField("publicada", e.target.checked)}
                className="h-4 w-4"
              />
              <span className="text-sm font-medium text-slate-700">
                Questão publicada
              </span>
            </label>
          </div>
        </Card>

        <Card className="p-6 bg-white border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Enunciado e imagem
          </h2>

          <div className="space-y-5">
            <div>
              <FieldLabel>Enunciado</FieldLabel>
              <TextArea
                rows={6}
                value={form.enunciado}
                onChange={(e) => updateField("enunciado", e.target.value)}
                placeholder="Digite o enunciado da questão"
              />
            </div>

            <div>
              <FieldLabel>Enunciado pós-imagem</FieldLabel>
              <TextArea
                rows={4}
                value={form.enunciado_pos_imagem}
                onChange={(e) =>
                  updateField("enunciado_pos_imagem", e.target.value)
                }
                placeholder="Texto que aparece depois da imagem da questão"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <label className="inline-flex">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <span className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm cursor-pointer hover:bg-slate-50">
                  {uploadingImage ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando imagem...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Enviar imagem da questão
                    </>
                  )}
                </span>
              </label>
            </div>

            <div>
              <FieldLabel>URL da imagem</FieldLabel>
              <TextInput
                value={form.url_imagem}
                onChange={(e) => updateField("url_imagem", e.target.value)}
                placeholder="https://..."
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 mb-3">
                <ImageIcon className="w-4 h-4 text-emerald-600" />
                <p className="text-sm font-semibold text-slate-700">
                  Preview da imagem da questão
                </p>
              </div>

              {form.url_imagem ? (
                <img
                  src={form.url_imagem}
                  alt="Preview da imagem da questão"
                  className="max-w-full rounded-xl border border-slate-200 bg-white"
                />
              ) : (
                <p className="text-sm text-slate-500">
                  Envie uma imagem ou cole uma URL para visualizar o preview.
                </p>
              )}
            </div>

            <div>
              <FieldLabel>Fórmula</FieldLabel>
              <TextArea
                rows={4}
                value={form.formula}
                onChange={(e) => updateField("formula", e.target.value)}
                placeholder="Ex.: $$ v = \frac{\Delta s}{\Delta t} $$"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Alternativas
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <FieldLabel>Alternativa A</FieldLabel>
              <TextArea
                rows={3}
                value={form.alternativa_a}
                onChange={(e) => updateField("alternativa_a", e.target.value)}
              />
            </div>

            <div>
              <FieldLabel>Alternativa B</FieldLabel>
              <TextArea
                rows={3}
                value={form.alternativa_b}
                onChange={(e) => updateField("alternativa_b", e.target.value)}
              />
            </div>

            <div>
              <FieldLabel>Alternativa C</FieldLabel>
              <TextArea
                rows={3}
                value={form.alternativa_c}
                onChange={(e) => updateField("alternativa_c", e.target.value)}
              />
            </div>

            <div>
              <FieldLabel>Alternativa D</FieldLabel>
              <TextArea
                rows={3}
                value={form.alternativa_d}
                onChange={(e) => updateField("alternativa_d", e.target.value)}
              />
            </div>

            <div>
              <FieldLabel>Alternativa E</FieldLabel>
              <TextArea
                rows={3}
                value={form.alternativa_e}
                onChange={(e) => updateField("alternativa_e", e.target.value)}
              />
            </div>

            <div>
              <FieldLabel>Alternativa correta</FieldLabel>
              <Select
                value={form.alternativa_correta}
                onChange={(e) =>
                  updateField("alternativa_correta", e.target.value)
                }
              >
                <option value="">Selecione</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
              </Select>
            </div>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button
            onClick={handleCreate}
            disabled={saving}
            className="rounded-2xl min-w-[180px]"
          >
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Criar questão
              </>
            )}
          </Button>
        </div>
      </AdminLayout>
    </AdminGuard>
  );
                }
  }
