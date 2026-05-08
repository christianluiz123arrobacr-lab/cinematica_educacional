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
  return list.some((item) => normalizeText(item) === normalizeText(value))
    ? list.filter((item) => normalizeText(item) !== normalizeText(value))
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

function getQuestionTopics(question: Question) {
  if (Array.isArray(question.topics) && question.topics.length > 0) {
    return question.topics.filter(Boolean);
  }

  return question.topic ? [question.topic] : [];
}

function getQuestionSubtopics(question: Question) {
  if (Array.isArray(question.subtopics) && question.subtopics.length > 0) {
    return question.subtopics.filter(Boolean);
  }

  return question.subtopic ? [question.subtopic] : [];
}

function getQuestionSubtopicsForTopics(
  question: Question,
  selectedTopics: string[]
) {
  if (selectedTopics.length === 0) {
    return getQuestionSubtopics(question);
  }

  const grouped = question.subtopicsByTopic ?? [];

  if (grouped.length === 0) {
    return getQuestionSubtopics(question);
  }

  const selectedNormalized = selectedTopics.map((topic) => normalizeText(topic));

  const subtopics = grouped
    .filter((item) => selectedNormalized.includes(normalizeText(item.topic)))
    .flatMap((item) => item.subtopics)
    .filter(Boolean);

  return Array.from(new Set(subtopics));
}

function matchesMultiList(values: string[], selected: string[]) {
  if (selected.length === 0) return true;

  const normalizedValues = values.map((value) => normalizeText(value));

  return selected.some((item) => normalizedValues.includes(normalizeText(item)));
}

function formatSubject(value: string) {
  const normalized = normalizeText(value);

  if (normalized === "fisica") return "Física";
  if (normalized === "matematica") return "Matemática";
  if (normalized === "quimica") return "Química";

  return value;
}

function formatDifficulty(value: string) {
  const normalized = normalizeText(value);

  if (normalized === "facil") return "Fácil";
  if (normalized === "medio") return "Médio";
  if (normalized === "dificil") return "Difícil";

  return value;
}

function getMultiSelectLabel(
  selected: string[],
  placeholder: string,
  getItemLabel?: (value: string) => string
) {
  if (selected.length === 0) return placeholder;
  if (selected.length === 1) {
    return getItemLabel ? getItemLabel(selected[0]) : selected[0];
  }

  return `${selected.length} selecionados`;
}

function sortSubjects(subjects: string[]) {
  const order: Record<string, number> = {
    fisica: 1,
    matematica: 2,
    quimica: 3,
  };

  return [...subjects].sort(
    (a, b) =>
      (order[normalizeText(a)] ?? 99) - (order[normalizeText(b)] ?? 99) ||
      a.localeCompare(b, "pt-BR")
  );
}

function sortDifficulties(difficulties: string[]) {
  const order: Record<string, number> = {
    facil: 1,
    medio: 2,
    dificil: 3,
  };

  return [...difficulties].sort(
    (a, b) =>
      (order[normalizeText(a)] ?? 99) - (order[normalizeText(b)] ?? 99) ||
      a.localeCompare(b, "pt-BR")
  );
}

type MultiSelectDropdownProps = {
  title: string;
  items: string[];
  selected: string[];
  onToggle: (value: string) => void;
  placeholder: string;
  emptyMessage: string;
  getItemLabel?: (value: string) => string;
};

function MultiSelectDropdown({
  title,
  items,
  selected,
  onToggle,
  placeholder,
  emptyMessage,
  getItemLabel,
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
          {getMultiSelectLabel(selected, placeholder, getItemLabel)}
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

                    <span className="text-sm text-slate-700">
                      {getItemLabel ? getItemLabel(item) : item}
                    </span>
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

  const [selectedInstitutions, setSelectedInstitutions] = useState<string[]>(
    initialVetFilters.institution ? [initialVetFilters.institution] : []
  );
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

  const [vetTopics, setVetTopics] = useState<string[]>(
    initialVetFilters.topics
  );
  const [vetBlock, setVetBlock] = useState<string>(initialVetFilters.block);

  const hasVetFilter = vetTopics.length > 0;

  const effectiveTopics =
    selectedTopics.length > 0 ? selectedTopics : vetTopics;

  const availableInstitutions = useMemo(() => {
    return Array.from(
      new Set(
        questions
          .map((q) => q.institution?.trim())
          .filter(
            (institution): institution is string =>
              !!institution && institution !== ""
          )
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [questions]);

  const questionsForYears = useMemo(() => {
    return questions.filter((q) =>
      matchesMulti(q.institution, selectedInstitutions)
    );
  }, [questions, selectedInstitutions]);

  const availableYears = useMemo(() => {
    return Array.from(
      new Set(questionsForYears.map((q) => String(q.year)).filter(Boolean))
    ).sort((a, b) => Number(b) - Number(a));
  }, [questionsForYears]);

  const questionsForSubjects = useMemo(() => {
    return questions.filter((q) => {
      const matchesInstitution = matchesMulti(
        q.institution,
        selectedInstitutions
      );
      const matchesYear = matchesMulti(String(q.year), selectedYears);

      return matchesInstitution && matchesYear;
    });
  }, [questions, selectedInstitutions, selectedYears]);

  const availableSubjects = useMemo(() => {
    return sortSubjects(
      Array.from(
        new Set(questionsForSubjects.map((q) => q.subject).filter(Boolean))
      )
    );
  }, [questionsForSubjects]);

  const questionsForTopics = useMemo(() => {
    return questions.filter((q) => {
      const matchesInstitution = matchesMulti(
        q.institution,
        selectedInstitutions
      );
      const matchesYear = matchesMulti(String(q.year), selectedYears);
      const matchesSubject = matchesMulti(q.subject, selectedSubjects);

      return matchesInstitution && matchesYear && matchesSubject;
    });
  }, [questions, selectedInstitutions, selectedYears, selectedSubjects]);

  const availableTopics = useMemo(() => {
    return Array.from(
      new Set(
        questionsForTopics
          .flatMap((q) => getQuestionTopics(q))
          .filter(Boolean)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [questionsForTopics]);

  const questionsForSubtopics = useMemo(() => {
    return questions.filter((q) => {
      const matchesInstitution = matchesMulti(
        q.institution,
        selectedInstitutions
      );
      const matchesYear = matchesMulti(String(q.year), selectedYears);
      const matchesSubject = matchesMulti(q.subject, selectedSubjects);
      const matchesTopic = matchesMultiList(
        getQuestionTopics(q),
        effectiveTopics
      );

      return matchesInstitution && matchesYear && matchesSubject && matchesTopic;
    });
  }, [
    questions,
    selectedInstitutions,
    selectedYears,
    selectedSubjects,
    effectiveTopics,
  ]);

  const availableSubtopics = useMemo(() => {
    return Array.from(
      new Set(
        questionsForSubtopics
          .flatMap((q) => getQuestionSubtopicsForTopics(q, effectiveTopics))
          .filter(Boolean)
      )
    ).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, [questionsForSubtopics, effectiveTopics]);

  const questionsForDifficulties = useMemo(() => {
    return questions.filter((q) => {
      const matchesInstitution = matchesMulti(
        q.institution,
        selectedInstitutions
      );
      const matchesYear = matchesMulti(String(q.year), selectedYears);
      const matchesSubject = matchesMulti(q.subject, selectedSubjects);
      const matchesTopic = matchesMultiList(
        getQuestionTopics(q),
        effectiveTopics
      );
      const matchesSubtopic = matchesMultiList(
        getQuestionSubtopicsForTopics(q, effectiveTopics),
        selectedSubtopics
      );

      return (
        matchesInstitution &&
        matchesYear &&
        matchesSubject &&
        matchesTopic &&
        matchesSubtopic
      );
    });
  }, [
    questions,
    selectedInstitutions,
    selectedYears,
    selectedSubjects,
    effectiveTopics,
    selectedSubtopics,
  ]);

  const availableDifficulties = useMemo(() => {
    return sortDifficulties(
      Array.from(
        new Set(
          questionsForDifficulties
            .map((q) => q.difficulty)
            .filter(Boolean)
            .map((item) => String(item))
        )
      )
    );
  }, [questionsForDifficulties]);

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
      matchesMulti(q.institution, selectedInstitutions)
    );

    filtered = filtered.filter((q) =>
      matchesMulti(String(q.year), selectedYears)
    );

    filtered = filtered.filter((q) =>
      matchesMulti(q.subject, selectedSubjects)
    );

    if (effectiveTopics.length > 0) {
      filtered = filtered.filter((q) =>
        matchesMultiList(getQuestionTopics(q), effectiveTopics)
      );
    }

    filtered = filtered.filter((q) =>
      matchesMultiList(
        getQuestionSubtopicsForTopics(q, effectiveTopics),
        selectedSubtopics
      )
    );
  
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    initialVetFilters.subjects
  );
  const [selectedTopics, setSelectedTopics] = useState<string[]>(
    initialVetFilters.topics
  );
    filtered = filtered.filter((q) =>
      matchesMulti(q.difficulty, selectedDifficulties)
    );

    setFilteredQuestions(filtered);
  }, [
    questions,
    selectedInstitutions,
    selectedYears,
    selectedSubjects,
    effectiveTopics,
    selectedSubtopics,
    selectedDifficulties,
  ]);

  function clearAllFilters() {
    setSelectedInstitutions([]);
    setSelectedYears([]);
    setSelectedSubjects([]);
    setSelectedTopics([]);
    setSelectedSubtopics([]);
    setSelectedDifficulties([]);
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
                  Ordem estratégica: instituição, ano, disciplina, conteúdo,
                  assunto e dificuldade.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              <MultiSelectDropdown
                title="Instituição"
                items={availableInstitutions}
                selected={selectedInstitutions}
                onToggle={(value) =>
                  setSelectedInstitutions((prev) => toggleValue(prev, value))
                }
                placeholder="Todas"
                emptyMessage="Nenhuma instituição disponível."
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
                title="Disciplina"
                items={availableSubjects}
                selected={selectedSubjects}
                onToggle={(value) =>
                  setSelectedSubjects((prev) => toggleValue(prev, value))
                }
                placeholder="Todas"
                emptyMessage="Nenhuma disciplina disponível."
                getItemLabel={formatSubject}
              />

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
                title="Dificuldade"
                items={availableDifficulties}
                selected={selectedDifficulties}
                onToggle={(value) =>
                  setSelectedDifficulties((prev) => toggleValue(prev, value))
                }
                placeholder="Todas"
                emptyMessage="Nenhuma dificuldade disponível."
                getItemLabel={formatDifficulty}
              />
            </div>

            <div className="flex justify-end mt-6">
              <Button
                variant="outline"
                onClick={clearAllFilters}
                className="rounded-xl"
              >
                Limpar filtros
              </Button>
            </div>
          </Card>
        </section>

        <section>
          {filteredQuestions.length > 0 ? (
            <InteractiveQuiz
              key={[
                selectedInstitutions.join("|"),
                selectedYears.join("|"),
                selectedSubjects.join("|"),
                selectedTopics.join("|"),
                selectedSubtopics.join("|"),
                selectedDifficulties.join("|"),
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
