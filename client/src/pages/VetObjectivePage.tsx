import { useEffect, useMemo, useState } from "react";
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
  study_days_per_week: number | null;
  study_weekdays: string[] | null;
};

const EXAMS = ["EEAR", "EsPCEx", "EFOMM"];
const SUBJECTS = ["todas", "fisica", "matematica", "quimica"];

const WEEKDAYS = [
  { value: "segunda", label: "Segunda" },
  { value: "terca", label: "Terça" },
  { value: "quarta", label: "Quarta" },
  { value: "quinta", label: "Quinta" },
  { value: "sexta", label: "Sexta" },
  { value: "sabado", label: "Sábado" },
  { value: "domingo", label: "Domingo" },
];

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
  const [studyDaysPerWeek, setStudyDaysPerWeek] = useState("5");
  const [studyWeekdays, setStudyWeekdays] = useState<string[]>([]);

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
        setStudyDaysPerWeek(
          profile.study_days_per_week !== null && profile.study_days_per_week !== undefined
            ? String(profile.study_days_per_week)
            : "5"
        );
        setStudyWeekdays(profile.study_weekdays ?? []);
      }

      setLoading(false);
    }

    if (!authLoading) {
      loadProfile();
    }
  }, [user?.id, authLoading]);

  const selectedDaysCount = useMemo(() => studyWeekdays.length, [studyWeekdays]);

  function handleToggleWeekday(day: string) {
    setStudyWeekdays((prev) => {
      if (prev.includes(day)) {
        return prev.filter((item) => item !== day);
      }
      return [...prev, day];
    });
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();

    if (!user?.id) return;

    setSaving(true);
    setError("");
    setSuccess("");

    const parsedMonths = Number(monthsUntilExam);
    const parsedHours = Number(hoursPerDay);
    const parsedDaysPerWeek = Number(studyDaysPerWeek);

    if (!targetExam) {
      setSaving(false);
      setError("Escolha a prova-alvo.");
      return;
    }

    if (Number.isNaN(parsedMonths) || parsedMonths < 0) {
      setSaving(false);
      setError("Informe um valor válido para meses até a prova.");
      return;
    }

    if (Number.isNaN(parsedHours) || parsedHours <= 0) {
      setSaving(false);
      setError("Informe um valor válido para horas por dia.");
      return;
    }

    if (Number.isNaN(parsedDaysPerWeek) || parsedDaysPerWeek < 0 || parsedDaysPerWeek > 7) {
      setSaving(false);
      setError("Informe um valor válido para dias por semana.");
      return;
    }

    if (studyWeekdays.length > 0 && studyWeekdays.length !== parsedDaysPerWeek) {
      setSaving(false);
      setError(
        "A quantidade de dias selecionados na semana precisa bater com o número de dias por semana."
      );
      return;
    }

    const payload = {
      user_id: user.id,
      target_exam: targetExam,
      months_until_exam: parsedMonths,
      hours_per_day: parsedHours,
      focus_subject: focusSubject,
      study_days_per_week: parsedDaysPerWeek,
      study_weekdays: studyWeekdays,
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
                    Essas informações vão guiar o diagnóstico, as prioridades e o treino do VET.
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

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Dias por semana que consegue estudar
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="7"
                      value={studyDaysPerWeek}
                      onChange={(e) => setStudyDaysPerWeek(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
                    />
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
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Quais dias da semana você consegue estudar?
                  </label>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {WEEKDAYS.map((day) => {
                      const selected = studyWeekdays.includes(day.value);

                      return (
                        <button
                          key={day.value}
                          type="button"
                          onClick={() => handleToggleWeekday(day.value)}
                          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                            selected
                              ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                              : "border-slate-300 bg-white text-slate-700 hover:border-emerald-400"
                          }`}
                        >
                          {day.label}
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-xs text-slate-500 mt-3">
                    Selecionados: {selectedDaysCount} dia(s)
                  </p>
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
