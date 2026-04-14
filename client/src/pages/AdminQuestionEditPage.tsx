import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { supabase } from "@/lib/supabase";
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
} from "lucide-react";
import { Link } from "wouter";

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

function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
        props.className || ""
      }`}
    />
  );
}

function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
        props.className || ""
      }`}
    />
  );
}

function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement>
) {
  return (
    <select
      {...props}
      className={`w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
        props.className || ""
      }`}
    />
  );
}

export default function AdminQuestionEditPage() {
  const [match, params] = useRoute("/admin/questoes/:id");
  const questionId = match ? params.id : null;

  const [form, setForm] = useState<QuestionFormData>(initialForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    async function loadQuestion() {
      if (!questionId) {
        setError("ID da questão não encontrado.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");
        setSuccessMessage("");

        const { data, error } = await supabase
          .from("questoes")
          .select("*")
          .eq("id", questionId)
          .single();

        if (error || !data) {
          console.error("Erro ao carregar questão:", error);
          setError("Não foi possível carregar a questão.");
          return;
        }

        setForm({
          codigo: data.codigo ?? "",
          disciplina: data.disciplina ?? data.diciplina ?? "",
          conteudo: data.conteudo ?? "",
          assunto: data.assunto ?? "",
          banca: data.banca ?? "",
          ano: data.ano ? String(data.ano) : "",
          dificuldade: data.dificuldade ?? "",
          instituicao: data["instituição"] ?? "",
          publicada: data.publicada ?? true,
          enunciado: data.enunciado ?? "",
          enunciado_pos_imagem: data.enunciado_pos_imagem ?? "",
          formula: data.formula ?? "",
          url_imagem: data.url_imagem ?? "",
          alternativa_a: data.a ?? data.A ?? "",
          alternativa_b: data.b ?? data.B ?? "",
          alternativa_c: data.c ?? data.C ?? "",
          alternativa_d: data.d ?? data.D ?? "",
          alternativa_e: data.e ?? data.E ?? "",
          alternativa_correta: data.alternativa_correta ?? "",
        });
      } catch (err) {
        console.error("Erro inesperado ao carregar questão:", err);
        setError("Ocorreu um erro inesperado ao carregar a questão.");
      } finally {
        setLoading(false);
      }
    }

    loadQuestion();
  }, [questionId]);

  function updateField<K extends keyof QuestionFormData>(
    field: K,
    value: QuestionFormData[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSave() {
    if (!questionId) return;

    try {
      setSaving(true);
      setError("");
      setSuccessMessage("");

      const payload = {
        codigo: form.codigo || null,
        disciplina: form.disciplina || null,
        conteudo: form.conteudo || null,
        assunto: form.assunto || null,
        banca: form.banca || null,
        ano: form.ano ? Number(form.ano) : null,
        dificuldade: form.dificuldade || null,
        instituição: form.instituicao || null,
        publicada: form.publicada,
        enunciado: form.enunciado || null,
        enunciado_pos_imagem: form.enunciado_pos_imagem || null,
        formula: form.formula || null,
        url_imagem: form.url_imagem || null,
        A: form.alternativa_a || null,
        B: form.alternativa_b || null,
        C: form.alternativa_c || null,
        D: form.alternativa_d || null,
        E: form.alternativa_e || null,
        alternativa_correta: form.alternativa_correta || null,
      };

      const { error } = await supabase
        .from("questoes")
        .update(payload)
        .eq("id", questionId);

      if (error) {
        console.error("Erro ao salvar questão:", error);
        setError("Não foi possível salvar as alterações.");
        return;
      }

      setSuccessMessage("Questão salva com sucesso.");
    } catch (err) {
      console.error("Erro inesperado ao salvar questão:", err);
      setError("Ocorreu um erro inesperado ao salvar.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AdminGuard>
      <AdminLayout
        title="Editar questão"
        subtitle="Edite os dados estruturais da questão diretamente no banco."
      >
        <Card className="p-6 bg-white border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500 mb-1">ID da questão</p>
              <p className="text-sm font-mono text-slate-800 break-all">
                {questionId || "—"}
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

        {loading ? (
          <Card className="p-10 flex items-center justify-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin text-slate-500" />
            <p className="text-slate-600">Carregando dados da questão...</p>
          </Card>
        ) : error ? (
          <Card className="p-8 border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-red-700 mb-1">
                  Erro na edição
                </h2>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          </Card>
        ) : (
          <>
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

                <div>
                  <FieldLabel>URL da imagem</FieldLabel>
                  <TextInput
                    value={form.url_imagem}
                    onChange={(e) => updateField("url_imagem", e.target.value)}
                    placeholder="https://..."
                  />
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
                    onChange={(e) =>
                      updateField("alternativa_a", e.target.value)
                    }
                  />
                </div>

                <div>
                  <FieldLabel>Alternativa B</FieldLabel>
                  <TextArea
                    rows={3}
                    value={form.alternativa_b}
                    onChange={(e) =>
                      updateField("alternativa_b", e.target.value)
                    }
                  />
                </div>

                <div>
                  <FieldLabel>Alternativa C</FieldLabel>
                  <TextArea
                    rows={3}
                    value={form.alternativa_c}
                    onChange={(e) =>
                      updateField("alternativa_c", e.target.value)
                    }
                  />
                </div>

                <div>
                  <FieldLabel>Alternativa D</FieldLabel>
                  <TextArea
                    rows={3}
                    value={form.alternativa_d}
                    onChange={(e) =>
                      updateField("alternativa_d", e.target.value)
                    }
                  />
                </div>

                <div>
                  <FieldLabel>Alternativa E</FieldLabel>
                  <TextArea
                    rows={3}
                    value={form.alternativa_e}
                    onChange={(e) =>
                      updateField("alternativa_e", e.target.value)
                    }
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
                onClick={handleSave}
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
                    Salvar alterações
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </AdminLayout>
    </AdminGuard>
  );
}
