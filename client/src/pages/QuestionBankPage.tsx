import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";
import { getQuestions } from "@/services/questions.service";
import type { Question } from "@/types/question";
import {
  ArrowLeft,
  Zap,
  BarChart3,
  BookMarked,
  Filter,
  BrainCircuit,
  ChevronDown,
} from "lucide-react";

function normalizeText(value?: string | null) {
  return (value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function parseVetFiltersFromUrl() {
  if (typeof window === "undefined") {
    return {
      subjects: [] as string[],
      institution: "",
      topics: [] as string[],
      block: "",
    };
  }

  const params = new URLSearchParams(window.location.search);

  const subject = params.get("subject") || "";
  const institution = params.get("institution") || "";
  const block = params.get("block") || "";
  const topicsParam = params.get("topics") || "";

  const topics = topicsParam
    .split(",")
    .map((item) => decodeURIComponent(item))
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    subjects: subject ? [subject] : [],
    institution,
    topics,
    block,
  };
}

function toggleValue(list: string[], value: string) {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

function matchesMulti(
  value: string | number | null | undefined,
  selected: string[]
) {
  if (selected.length === 0) return true;
  const normalizedValue = normalizeText(String(value ?? ""));
  return selected.some((item) => normalizeText(item) === normalizedValue);
}

function getMultiSelectLabel(
  selected: string[],
  placeholder: string
) {
  if (selected.length === 0) return placeholder;
  if (selected.length === 1) return selected[0];
  return `${selected.length} selecionados`;
}

type MultiSelectDropdownProps = {
  title: string;
  items: string[];
  selected: string[];
  onToggle: (value: string) => void;
  placeholder: string;
  emptyMessage: string;
};

function MultiSelectDropdown({
  title,
  items,
  selected,
  onToggle,
  placeholder,
  emptyMessage,
}: MultiSelectDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {title}
      </label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-left text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
      >
        <span className="truncate">
          {getMultiSelectLabel(selected, placeholder)}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-full rounded-2xl border border-slate-200 bg-white shadow-xl p-3 max-h-64 overflow-y-auto">
          {items.length > 0 ? (
            <div className="space-y-2">
              {items.map((item) => {
                const checked = selected.some(
                  (value) => normalizeText(value) === normalizeText(item)
                );

                return (
                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-50 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggle(item)}
                      className="h-4 w-4 rounded border-slate-300"
                    />
                    <span className="text-sm text-slate-700">{item}</span>
                  </label>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-slate-500 px-2 py-2">{emptyMessage}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function QuestionBankPage() {
  const initialVetFilters = useMemo(() => parseVetFiltersFromUrl(), []);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    initialVetFilters.subjects
  );
  const [selectedTopics, setSelectedTopics] = useState<string[]>(
    initialVetFilters.topics
  );
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedInstitutions, setSelectedInstitutions] = useState<string[]>(
    initialVetFilters.institution ? [initialVetFilters.institution] : []
  );

  const [vetTopics, setVetTopics] = useState<string[]>(initialVetFilters.topics);
  const [vetBlock, setVetBlock] = useState<string>(initialVetFilters.block);

  const hasVetFilter = vetTopics.length > 0;

  const effectiveTopics = selectedTopics.length > 0 ? selectedTopics : vetTopics;

  const questionsForTopics = useMemo(() => {
    return questions.filter((q) => matchesMulti(q.subject, selectedSubjects));
  }, [questions, selectedSubjects]);

  const availableTopics = useMemo(() => {
    return Array.from(
      new Set(questionsForTopics.map((q) => q.topic).filter(Boolean))
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [questionsForTopics]);

  const questionsForSubtopics = useMemo(() => {
    return questions.filter((q) => {
      const matchesSubject = matchesMulti(q.subject, selectedSubjects);
      const matchesTopic =
        effectiveTopics.length === 0 || matchesMulti(q.topic, effectiveTopics);

      return matchesSubject && matchesTopic;
    });
  }, [questions, selectedSubjects, effectiveTopics]);

  const availableSubtopics = useMemo(() => {
    return Array.from(
      new Set(questionsForSubtopics.map((q) => q.subtopic).filter(Boolean))
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [questionsForSubtopics]);

  const questionsForYears = useMemo(() => {
    return questions.filter((q) => {
      const matchesDifficulty = matchesMulti(q.difficulty, selectedDifficulties);
      const matchesSubject = matchesMulti(q.subject, selectedSubjects);
      const matchesTopic =
        effectiveTopics.length === 0 || matchesMulti(q.topic, effectiveTopics);
      const matchesSubtopic = matchesMulti(q.subtopic, selectedSubtopics);

      return (
        matchesDifficulty &&
        matchesSubject &&
        matchesTopic &&
        matchesSubtopic
      );
    });
  }, [
    questions,
    selectedDifficulties,
    selectedSubjects,
    effectiveTopics,
    selectedSubtopics,
  ]);

  const availableYears = useMemo(() => {
    return Array.from(
      new Set(questionsForYears.map((q) => String(q.year)).filter(Boolean))
    ).sort((a, b) => Number(b) - Number(a));
  }, [questionsForYears]);

  const questionsForInstitutions = useMemo(() => {
    return questions.filter((q) => {
      const matchesDifficulty = matchesMulti(q.difficulty, selectedDifficulties);
      const matchesSubject = matchesMulti(q.subject, selectedSubjects);
      const matchesTopic =
        effectiveTopics.length === 0 || matchesMulti(q.topic, effectiveTopics);
      const matchesSubtopic = matchesMulti(q.subtopic, selectedSubtopics);
      const matchesYear = matchesMulti(String(q.year), selectedYears);

      return (
        matchesDifficulty &&
        matchesSubject &&
        matchesTopic &&
        matchesSubtopic &&
        matchesYear
      );
    });
  }, [
    questions,
    selectedDifficulties,
    selectedSubjects,
    effectiveTopics,
    selectedSubtopics,
    selectedYears,
  ]);

  const availableInstitutions = useMemo(() => {
    return Array.from(
      new Set(
        questionsForInstitutions
          .map((q) => q.institution?.trim())
          .filter(
            (institution): institution is string =>
              !!institution && institution !== ""
          )
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [questionsForInstitutions]);

  const totalSubjects = useMemo(
    () => new Set(questions.map((q) => q.subject).filter(Boolean)).size,
    [questions]
  );

  const totalDifficulties = useMemo(
    () => new Set(questions.map((q) => q.difficulty).filter(Boolean)).size,
    [questions]
  );

  const subjectStats = useMemo(() => {
    const labels: Record<string, string> = {
      fisica: "Física",
      matematica: "Matemática",
      quimica: "Química",
    };

    const counts = questions.reduce<Record<string, number>>((acc, q) => {
      if (!q.subject) return acc;
      acc[q.subject] = (acc[q.subject] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts)
      .map(([key, count]) => ({
        key,
        label: labels[key] ?? key,
        count,
      }))
      .sort((a, b) => b.count - a.count);
  }, [questions]);

  const difficultyStats = useMemo(() => {
    const labels: Record<string, string> = {
      facil: "Fácil",
      medio: "Médio",
      dificil: "Difícil",
    };

    const counts = questions.reduce<Record<string, number>>((acc, q) => {
      if (!q.difficulty) return acc;
      acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
      return acc;
    }, {});

    const order: Record<string, number> = {
      facil: 1,
      medio: 2,
      dificil: 3,
    };

    return Object.entries(counts)
      .map(([key, count]) => ({
        key,
        label: labels[key] ?? key,
        count,
      }))
      .sort((a, b) => (order[a.key] ?? 99) - (order[b.key] ?? 99));
  }, [questions]);

  useEffect(() => {
    async function loadQuestions() {
      const data = await getQuestions();
      setQuestions(data);
      setFilteredQuestions(data);
    }

    loadQuestions();
  }, []);

  useEffect(() => {
    let filtered = questions;

    filtered = filtered.filter((q) =>
      matchesMulti(q.difficulty, selectedDifficulties)
    );
    filtered = filtered.filter((q) => matchesMulti(q.subject, selectedSubjects));

    if (effectiveTopics.length > 0) {
      filtered = filtered.filter((q) => matchesMulti(q.topic, effectiveTopics));
    }

    filtered = filtered.filter((q) =>
      matchesMulti(q.subtopic, selectedSubtopics)
    );
    filtered = filtered.filter((q) => matchesMulti(String(q.year), selectedYears));
    filtered = filtered.filter((q) =>
      matchesMulti(q.institution, selectedInstitutions)
    );

    setFilteredQuestions(filtered);
  }, [
    questions,
    selectedDifficulties,
    selectedSubjects,
    effectiveTopics,
    selectedSubtopics,
    selectedYears,
    selectedInstitutions,
  ]);

  function clearAllFilters() {
    setSelectedDifficulties([]);
    setSelectedSubjects([]);
    setSelectedTopics([]);
    setSelectedSubtopics([]);
    setSelectedYears([]);
    setSelectedInstitutions([]);
    setVetTopics([]);
    setVetBlock("");
  }

  function clearVetFilterOnly() {
    setVetTopics([]);
    setVetBlock("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </a>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Banco de Questões
              </h1>
              <p className="text-xs text-slate-500">
                Premium - Questões Comentadas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-600">
              {filteredQuestions.length} questões
            </span>
          </div>
        </div>
      </header>

      <main className="container py-12">
        {hasVetFilter && (
          <section className="mb-8">
            <Card className="p-6 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BrainCircuit className="w-5 h-5 text-emerald-700" />
                    <h3 className="text-lg font-bold text-slate-900">
                      Filtro vindo do VET
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 mb-3">
                    Você abriu o banco com uma recomendação estratégica do VET
                    {vetBlock ? ` para o bloco de ${vetBlock}` : ""}.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {vetTopics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-700 text-sm font-semibold"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={clearVetFilterOnly}
                  className="rounded-xl"
                >
                  Remover filtro do VET
                </Button>
              </div>
            </Card>
          </section>
        )}

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookMarked className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total de Questões</p>
                <p className="text-3xl font-bold text-slate-900">
                  {questions.length}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Disciplinas</p>
                <p className="text-3xl font-bold text-slate-900">
                  {totalSubjects}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Dificuldades</p>
                <p className="text-3xl font-bold text-slate-900">
                  {totalDifficulties}
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-white border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Questões por disciplina
            </h3>
            <div className="space-y-3">
              {subjectStats.length > 0 ? (
                subjectStats.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                  >
                    <span className="font-medium text-slate-700">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {item.count}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">
                  Nenhuma disciplina cadastrada ainda.
                </p>
              )}
            </div>
          </Card>

          <Card className="p-6 bg-white border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Questões por nível
            </h3>
            <div className="space-y-3">
              {difficultyStats.length > 0 ? (
                difficultyStats.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                  >
                    <span className="font-medium text-slate-700">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {item.count}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">
                  Nenhuma dificuldade cadastrada ainda.
                </p>
              )}
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="p-6 bg-white border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Filter className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Filtros</h3>
                <p className="text-sm text-slate-500">
                  Você pode combinar várias opções ao mesmo tempo
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Dificuldade
                </label>
                <div className="flex flex-wrap gap-3">
                  {["facil", "medio", "dificil"].map((diff) => {
                    const selected = selectedDifficulties.includes(diff);

                    return (
                      <button
                        key={diff}
                        onClick={() =>
                          setSelectedDifficulties((prev) =>
                            toggleValue(prev, diff)
                          )
                        }
                        className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                          selected
                            ? diff === "facil"
                              ? "bg-green-500 border-green-500 text-white shadow-sm"
                              : diff === "medio"
                                ? "bg-yellow-500 border-yellow-500 text-white shadow-sm"
                                : "bg-red-500 border-red-500 text-white shadow-sm"
                            : "bg-white border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        {diff === "facil"
                          ? "Fácil"
                          : diff === "medio"
                            ? "Médio"
                            : "Difícil"}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Disciplina
                </label>
                <div className="flex flex-wrap gap-3">
                  {["fisica", "matematica", "quimica"].map((subj) => {
                    const selected = selectedSubjects.includes(subj);

                    return (
                      <button
                        key={subj}
                        onClick={() =>
                          setSelectedSubjects((prev) => toggleValue(prev, subj))
                        }
                        className={`px-4 py-2.5 rounded-full border text-sm font-semibold transition-all ${
                          selected
                            ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                            : "bg-white border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        {subj === "fisica"
                          ? "Física"
                          : subj === "matematica"
                            ? "Matemática"
                            : "Química"}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                <MultiSelectDropdown
                  title="Conteúdo"
                  items={availableTopics}
                  selected={selectedTopics}
                  onToggle={(value) =>
                    setSelectedTopics((prev) => toggleValue(prev, value))
                  }
                  placeholder="Todos"
                  emptyMessage="Nenhum conteúdo disponível."
                />

                <MultiSelectDropdown
                  title="Assunto"
                  items={availableSubtopics}
                  selected={selectedSubtopics}
                  onToggle={(value) =>
                    setSelectedSubtopics((prev) => toggleValue(prev, value))
                  }
                  placeholder="Todos"
                  emptyMessage="Nenhum assunto disponível."
                />

                <MultiSelectDropdown
                  title="Ano"
                  items={availableYears}
                  selected={selectedYears}
                  onToggle={(value) =>
                    setSelectedYears((prev) => toggleValue(prev, value))
                  }
                  placeholder="Todos"
                  emptyMessage="Nenhum ano disponível."
                />

                <MultiSelectDropdown
                  title="Instituição"
                  items={availableInstitutions}
                  selected={selectedInstitutions}
                  onToggle={(value) =>
                    setSelectedInstitutions((prev) =>
                      toggleValue(prev, value)
                    )
                  }
                  placeholder="Todas"
                  emptyMessage="Nenhuma instituição disponível."
                />
              </div>

              <div className="flex justify-end">
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="rounded-xl"
                >
                  Limpar filtros
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <section>
          {filteredQuestions.length > 0 ? (
            <InteractiveQuiz
              key={[
                selectedDifficulties.join("|"),
                selectedSubjects.join("|"),
                selectedTopics.join("|"),
                selectedSubtopics.join("|"),
                selectedYears.join("|"),
                selectedInstitutions.join("|"),
                vetTopics.join("|"),
              ].join("::")}
              questions={filteredQuestions}
            />
          ) : (
            <Card className="p-12 text-center">
              <p className="text-lg text-slate-600 mb-4">
                Nenhuma questão encontrada com os filtros selecionados.
              </p>
              <Button onClick={clearAllFilters}>Limpar Filtros</Button>
            </Card>
          )}
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
        <div className="container text-center">
          <p className="mb-4">
            © 2026 Domine Exatas. Banco de Questões Premium.
          </p>
          <p className="text-sm text-slate-500">
            Questões comentadas, análise de desempenho e simulados estratégicos.
          </p>
        </div>
      </footer>
    </div>
  );
}
