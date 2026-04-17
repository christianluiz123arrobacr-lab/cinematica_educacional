import { ChangeEvent, useEffect, useState } from "react";
import { useRoute, useLocation, Link } from "wouter";
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
  Blocks,
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

  alternativa_a_imagem: string;
  alternativa_b_imagem: string;
  alternativa_c_imagem: string;
  alternativa_d_imagem: string;
  alternativa_e_imagem: string;

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

  alternativa_a_imagem: "",
  alternativa_b_imagem: "",
  alternativa_c_imagem: "",
  alternativa_d_imagem: "",
  alternativa_e_imagem: "",

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

export default function AdminQuestionEditPage() {
  const [match, params] = useRoute("/admin/questoes/:id");
  const [, setLocation] = useLocation();
  const questionId = match ? params.id : null;

  const [form, setForm] = useState<QuestionFormData>(initialForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingAlternative, setUploadingAlternative] = useState<string | null>(null);
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

          alternativa_a_imagem: data.a_url_imagem ?? "",
          alternativa_b_imagem: data.b_url_imagem ?? "",
          alternativa_c_imagem: data.c_url_imagem ?? "",
          alternativa_d_imagem: data.d_url_imagem ?? "",
          alternativa_e_imagem: data.e_url_imagem ?? "",

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

  async function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file || !questionId) return;

    try {
      setUploadingImage(true);
      setError("");
      setSuccessMessage("");

      const pastaBase =
        form.codigo.trim() || questionId || `questao-${Date.now().toString()}`;
      const fileName = gerarNomeArquivo(file.name);
      const path = `${pastaBase}/enunciado/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(QUESTION_IMAGES_BUCKET)
        .upload(path, file, {
          upsert: true,
        });

      if (uploadError) {
        console.error("Erro ao enviar imagem da questão:", uploadError);
        setError(
          uploadError.message
            ? `Não foi possível enviar a imagem da questão: ${uploadError.message}`
            : "Não foi possível enviar a imagem da questão."
        );
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

      await logAdminAction({
        action: "question_image_uploaded",
        entityType: "questao_imagem",
        entityId: questionId,
        description: `Imagem principal enviada para a questão ${form.codigo || questionId}`,
        level: "info",
        metadata: {
          questionId,
          codigo: form.codigo || null,
          disciplina: form.disciplina || null,
          conteudo: form.conteudo || null,
          assunto: form.assunto || null,
          bucket: QUESTION_IMAGES_BUCKET,
          path,
          fileName: file.name,
          publicUrl: data.publicUrl,
          tipoImagem: "enunciado",
        },
      });

      setSuccessMessage("Imagem da questão enviada com sucesso.");
    } catch (err) {
      console.error("Erro inesperado ao enviar imagem da questão:", err);
      setError("Ocorreu um erro inesperado ao enviar a imagem.");
    } finally {
      setUploadingImage(false);
      event.target.value = "";
    }
  }

  async function handleAlternativeImageUpload(
    field:
      | "alternativa_a_imagem"
      | "alternativa_b_imagem"
      | "alternativa_c_imagem"
      | "alternativa_d_imagem"
      | "alternativa_e_imagem",
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];
    if (!file || !questionId) return;

    try {
      setUploadingAlternative(field);
      setError("");
      setSuccessMessage("");

      const pastaBase =
        form.codigo.trim() || questionId || `questao-${Date.now().toString()}`;
      const fileName = gerarNomeArquivo(file.name);
      const path = `${pastaBase}/alternativas/${field}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(QUESTION_IMAGES_BUCKET)
        .upload(path, file, {
          upsert: true,
        });

      if (uploadError) {
        console.error("Erro ao enviar imagem da alternativa:", uploadError);
        setError(
          uploadError.message
            ? `Não foi possível enviar a imagem da alternativa: ${uploadError.message}`
            : "Não foi possível enviar a imagem da alternativa."
        );
        return;
      }

      const { data } = supabase.storage
        .from(QUESTION_IMAGES_BUCKET)
        .getPublicUrl(path);

      if (!data?.publicUrl) {
        setError("Não foi possível gerar a URL pública da imagem da alternativa.");
        return;
      }

      updateField(field, data.publicUrl);

      const letraAlternativa =
        field === "alternativa_a_imagem"
          ? "A"
          : field === "alternativa_b_imagem"
            ? "B"
            : field === "alternativa_c_imagem"
              ? "C"
              : field === "alternativa_d_imagem"
                ? "D"
                : "E";

      await logAdminAction({
        action: "question_alternative_image_uploaded",
        entityType: "questao_alternativa_imagem",
        entityId: questionId,
        description: `Imagem enviada para a alternativa ${letraAlternativa} da questão ${form.codigo || questionId}`,
        level: "info",
        metadata: {
          questionId,
          codigo: form.codigo || null,
          disciplina: form.disciplina || null,
          conteudo: form.conteudo || null,
          assunto: form.assunto || null,
          alternativa: letraAlternativa,
          field,
          bucket: QUESTION_IMAGES_BUCKET,
          path,
          fileName: file.name,
          publicUrl: data.publicUrl,
          tipoImagem: "alternativa",
        },
      });

      setSuccessMessage("Imagem da alternativa enviada com sucesso.");
    } catch (err) {
      console.error("Erro inesperado ao enviar imagem da alternativa:", err);
      setError("Ocorreu um erro inesperado ao enviar a imagem da alternativa.");
    } finally {
      setUploadingAlternative(null);
      event.target.value = "";
    }
  }

  async function saveQuestion() {
    if (!questionId) {
      return { ok: false };
    }

    const anoNumero = Number(form.ano);

    if (!form.disciplina.trim()) {
      setError("Preencha a disciplina.");
      return { ok: false };
    }

    if (!form.assunto.trim()) {
      setError("Preencha o assunto.");
      return { ok: false };
    }

    if (!form.dificuldade.trim()) {
      setError("Preencha a dificuldade.");
      return { ok: false };
    }

    if (!form.instituicao.trim()) {
      setError("Preencha a instituição.");
      return { ok: false };
    }

    if (!form.ano.trim() || Number.isNaN(anoNumero)) {
      setError("Preencha um ano válido.");
      return { ok: false };
    }

    const temA = form.alternativa_a.trim() || form.alternativa_a_imagem.trim();
    const temB = form.alternativa_b.trim() || form.alternativa_b_imagem.trim();

    if (!temA) {
      setError("Preencha a alternativa A com texto ou imagem.");
      return { ok: false };
    }

    if (!temB) {
      setError("Preencha a alternativa B com texto ou imagem.");
      return { ok: false };
    }

    if (!form.alternativa_correta.trim()) {
      setError("Selecione a alternativa correta.");
      return { ok: false };
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

      a_url_imagem: valorLimpo(form.alternativa_a_imagem),
      b_url_imagem: valorLimpo(form.alternativa_b_imagem),
      c_url_imagem: valorLimpo(form.alternativa_c_imagem),
      d_url_imagem: valorLimpo(form.alternativa_d_imagem),
      e_url_imagem: valorLimpo(form.alternativa_e_imagem),

      alternativa_correta: valorLimpo(form.alternativa_correta),
    };

    const { error } = await supabase
      .from("questoes")
      .update(payload)
      .eq("id", questionId);

    if (error) {
      console.error("Erro ao salvar questão:", error);
      setError(
        error.message
          ? `Não foi possível salvar as alterações: ${error.message}`
          : "Não foi possível salvar as alterações."
      );
      return { ok: false };
    }

    await logAdminAction({
      action: "question_updated",
      entityType: "questao",
      entityId: questionId,
      description: `Questão ${form.codigo || questionId} editada no ADM`,
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
        alternativaAImagem: form.alternativa_a_imagem || null,
        alternativaBImagem: form.alternativa_b_imagem || null,
        alternativaCImagem: form.alternativa_c_imagem || null,
        alternativaDImagem: form.alternativa_d_imagem || null,
        alternativaEImagem: form.alternativa_e_imagem || null,
      },
    });

    return { ok: true };
  }

  async function handleSave() {
    if (saving) return;

    try {
      setSaving(true);
      setError("");
      setSuccessMessage("");

      const result = await saveQuestion();

      if (!result.ok) return;

      setSuccessMessage("Questão salva com sucesso.");
    } catch (err) {
      console.error("Erro inesperado ao salvar questão:", err);
      setError("Ocorreu um erro inesperado ao salvar.");
    } finally {
      setSaving(false);
    }
  }

  async function handleSaveAndGoToResolution() {
    if (saving || !questionId) return;

    try {
      setSaving(true);
      setError("");
      setSuccessMessage("");

      const result = await saveQuestion();

      if (!result.ok) return;

      setSuccessMessage("Questão salva com sucesso. Indo para a resolução...");
      setLocation(`/admin/resolucoes/${questionId}`);
    } catch (err) {
      console.error("Erro inesperado ao salvar e ir para resolução:", err);
      setError("Ocorreu um erro inesperado ao salvar e abrir a resolução.");
    } finally {
      setSaving(false);
    }
  }

  function AlternativeImageField({
    label,
    imageField,
  }: {
    label: string;
    imageField:
      | "alternativa_a_imagem"
      | "alternativa_b_imagem"
      | "alternativa_c_imagem"
      | "alternativa_d_imagem"
      | "alternativa_e_imagem";
  }) {
    const imageValue = form[imageField];

    return (
      <div>
        <FieldLabel>{label}</FieldLabel>

        <div className="flex flex-wrap gap-3 mb-3">
          <label className="inline-flex">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleAlternativeImageUpload(imageField, e)}
            />
            <span className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm cursor-pointer hover:bg-slate-50">
              {uploadingAlternative === imageField ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando imagem...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Enviar imagem
                </>
              )}
            </span>
          </label>
        </div>

        <TextInput
          value={imageValue}
          onChange={(e) => updateField(imageField, e.target.value)}
          placeholder="https://..."
        />

        {imageValue ? (
          <img
            src={imageValue}
            alt={`Preview ${label}`}
            className="mt-3 max-h-40 rounded-xl border border-slate-200 bg-white"
          />
        ) : null}
      </div>
    );
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

            <div className="flex flex-wrap gap-3">
              <Link href="/admin/questoes">
                <Button variant="outline" className="rounded-2xl">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar para questões
                </Button>
              </Link>

              {questionId ? (
                <Link href={`/admin/resolucoes/${questionId}`}>
                  <Button variant="outline" className="rounded-2xl">
                    <Blocks className="w-4 h-4 mr-2" />
                    Ir para resolução
                  </Button>
                </Link>
              ) : null}
            </div>
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
                  <p className="text-emerald-700 font-medium">
                    {successMessage}
                  </p>
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
                    placeholder="Ex.: $$ v = \\frac{\\Delta s}{\\Delta t} $$"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Alternativas
              </h2>

              <div className="space-y-6">
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

                  <AlternativeImageField
                    label="Imagem da alternativa A"
                    imageField="alternativa_a_imagem"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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

                  <AlternativeImageField
                    label="Imagem da alternativa B"
                    imageField="alternativa_b_imagem"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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

                  <AlternativeImageField
                    label="Imagem da alternativa C"
                    imageField="alternativa_c_imagem"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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

                  <AlternativeImageField
                    label="Imagem da alternativa D"
                    imageField="alternativa_d_imagem"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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

                  <AlternativeImageField
                    label="Imagem da alternativa E"
                    imageField="alternativa_e_imagem"
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

            <div className="flex flex-wrap justify-end gap-3">
              <Button
                variant="outline"
                onClick={handleSaveAndGoToResolution}
                disabled={saving}
                className="rounded-2xl min-w-[220px]"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <Blocks className="w-4 h-4 mr-2" />
                    Salvar e ir para resolução
                  </>
                )}
              </Button>

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
