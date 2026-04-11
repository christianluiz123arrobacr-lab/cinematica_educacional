import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Save, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

type VetProfileRow = {
  id: string;
  user_id: string;
  target_exam: string;
  months_until_exam: number;
  hours_per_day: number;
  focus_subject: string;
};

const EXAMS = ["EEAR", "EsPCEx", "EFOMM"];
const SUBJECTS = ["todas", "fisica", "matematica", "quimica"];

export default function VetObjectivePage() {
  const { user, loading: authLoading } = useSupabaseAuth();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [targetExam, setTargetExam] = useState("EEAR");
  const [monthsUntilExam, setMonthsUntilExam] = useState("6");
  const [hoursPerDay, setHoursPerDay] = useState("3");
  const [focusSubject, setFocusSubject] = useState("todas");

  useEffect(() => {
    async function loadProfile() {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");
      setSuccess("");

      const { data, error } = await supabase
        .from("user_vet_profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) {
        console.error("Erro ao buscar perfil do VET:", error);
        setError("Não foi possível carregar seu objetivo atual.");
        setLoading(false);
        return;
      }

      const profile = data as VetProfileRow | null;

      if (profile) {
        setTargetExam(profile.target_exam);
        setMonthsUntilExam(String(profile.months_until_exam));
        setHoursPerDay(String(profile.hours_per_day));
        setFocusSubject(profile.focus_subject);
      }

      setLoading(false);
    }

    if (!authLoading) {
      loadProfile();
    }
  }, [user?.id, authLoading]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();

    if (!user?.id) return;

    setSaving(true);
    setError("");
    setSuccess("");

    const payload = {
      user_id: user.id,
      target_exam: targetExam,
      months_until_exam: Number(monthsUntilExam),
      hours_per_day: Number(hoursPerDay),
      focus_subject: focusSubject,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("user_vet_profiles")
      .upsert(payload, { onConflict: "user_id" });

    setSaving(false);

    if (error) {
      console.error("Erro ao salvar objetivo do VET:", error);
      setError("Não foi possível salvar o objetivo do VET.");
      return;
    }

    setSuccess("Objetivo salvo com sucesso.");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/vet">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">Objetivo do VET</h1>
            <p className="text-sm text-slate-500">
              Defina seu alvo para o treino estratégico
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {authLoading || loading ? (
          <Card className="p-8">
            <p className="text-slate-600">Carregando objetivo...</p>
          </Card>
        ) : !user ? (
          <Card className="p-8">
            <p className="text-slate-700 font-medium">
              Você precisa estar logado para usar o VET.
            </p>
          </Card>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 md:p-8 border-emerald-200 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Configure seu objetivo
                  </h2>
                  <p className="text-sm text-slate-500">
                    Essas informações vão guiar o diagnóstico e as prioridades do VET.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Prova-alvo
                  </label>
                  <select
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                  >
                    {EXAMS.map((exam) => (
                      <option key={exam} value={exam}>
                        {exam}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Meses até a prova
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={monthsUntilExam}
                      onChange={(e) => setMonthsUntilExam(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Horas por dia
                    </label>
                    <input
                      type="number"
                      min="0.5"
                      step="0.5"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Disciplina foco
                  </label>
                  <select
                    value={focusSubject}
                    onChange={(e) => setFocusSubject(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                  >
                    {SUBJECTS.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
                    {success}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={saving}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {saving ? "Salvando..." : "Salvar objetivo"}
                </Button>
              </form>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
