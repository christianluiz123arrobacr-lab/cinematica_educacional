import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";
import { getQuestions } from "@/services/questions.service";
import type { Question } from "@/types/question";
import { ArrowLeft, Zap, BarChart3, BookMarked, Filter } from "lucide-react";

export default function QuestionBankPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("todos");
  const [selectedSubject, setSelectedSubject] = useState<string>("todos");
  const [selectedTopic, setSelectedTopic] = useState<string>("todos");
  const [selectedYear, setSelectedYear] = useState<string>("todos");
  const [selectedInstitution, setSelectedInstitution] = useState<string>("todos");

  const availableTopics = Array.from(
    new Set(questions.map((q) => q.topic).filter(Boolean))
  ).sort();

  const availableYears = Array.from(
    new Set(questions.map((q) => String(q.year)).filter(Boolean))
  ).sort((a, b) => Number(b) - Number(a));

  const availableInstitutions = Array.from(
    new Set(questions.map((q) => q.institution).filter(Boolean))
  ).sort();

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
      const data = await getQuestions({
        exam: "EsPCEx",
        year: 2017,
      });

      console.log("Questões carregadas:", data);
      console.log("Quantidade:", data.length);

      setQuestions(data);
      setFilteredQuestions(data);
    }

    loadQuestions();
  }, []);

  useEffect(() => {
    let filtered = questions;

    if (selectedDifficulty !== "todos") {
      filtered = filtered.filter((q) => q.difficulty === selectedDifficulty);
    }

    if (selectedSubject !== "todos") {
      filtered = filtered.filter((q) => q.subject === selectedSubject);
    }

    if (selectedTopic !== "todos") {
      filtered = filtered.filter((q) => q.topic === selectedTopic);
    }

    if (selectedYear !== "todos") {
      filtered = filtered.filter((q) => String(q.year) === selectedYear);
    }

    if (selectedInstitution !== "todos") {
      filtered = filtered.filter((q) => q.institution === selectedInstitution);
    }

    setFilteredQuestions(filtered);
  }, [
    selectedDifficulty,
    selectedSubject,
    selectedTopic,
    selectedYear,
    selectedInstitution,
    questions,
  ]);

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
              <h1 className="text-2xl font-bold text-slate-900">Banco de Questões</h1>
              <p className="text-xs text-slate-500">Premium - Questões Comentadas</p>
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
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookMarked className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total de Questões</p>
                <p className="text-3xl font-bold text-slate-900">{questions.length}</p>
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
                <p className="text-3xl font-bold text-slate-900">{totalSubjects}</p>
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
                <p className="text-3xl font-bold text-slate-900">{totalDifficulties}</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-white border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Questões por disciplina</h3>
            <div className="space-y-3">
              {subjectStats.length > 0 ? (
                subjectStats.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                  >
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="text-sm font-bold text-slate-900">{item.count}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">Nenhuma disciplina cadastrada ainda.</p>
              )}
            </div>
          </Card>

          <Card className="p-6 bg-white border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Questões por nível</h3>
            <div className="space-y-3">
              {difficultyStats.length > 0 ? (
                difficultyStats.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                  >
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="text-sm font-bold text-slate-900">{item.count}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500">Nenhuma dificuldade cadastrada ainda.</p>
              )}
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="p-6 bg-white border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-slate-600" />
              <h3 className="text-lg font-bold text-slate-900">Filtros</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Dificuldade
                </label>
                <div className="flex gap-2 flex-wrap">
                  {["todos", "facil", "medio", "dificil"].map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        selectedDifficulty === diff
                          ? "bg-purple-600 text-white shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {diff === "todos"
                        ? "Todos"
                        : diff === "facil"
                          ? "Fácil"
                          : diff === "medio"
                            ? "Médio"
                            : "Difícil"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Disciplina
                </label>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { value: "todos", label: "Todas" },
                    { value: "fisica", label: "Física" },
                    { value: "matematica", label: "Matemática" },
                    { value: "quimica", label: "Química" },
                  ].map((subject) => (
                    <button
                      key={subject.value}
                      onClick={() => setSelectedSubject(subject.value)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        selectedSubject === subject.value
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {subject.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Conteúdo</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="todos">Todos os conteúdos</option>
                  {availableTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Ano</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="todos">Todos os anos</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Instituição
                </label>
                <select
                  value={selectedInstitution}
                  onChange={(e) => setSelectedInstitution(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="todos">Todas as instituições</option>
                  {availableInstitutions.map((institution) => (
                    <option key={institution} value={institution}>
                      {institution}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-8">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <Card key={question.id} className="p-8 bg-white border-slate-200 shadow-sm">
                <InteractiveQuiz question={question} />
              </Card>
            ))
          ) : (
            <Card className="p-12 bg-white border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Nenhuma questão encontrada
              </h3>
              <p className="text-slate-600 mb-6">
                Tente ajustar os filtros para visualizar outras questões.
              </p>
              <Button
                onClick={() => {
                  setSelectedDifficulty("todos");
                  setSelectedSubject("todos");
                  setSelectedTopic("todos");
                  setSelectedYear("todos");
                  setSelectedInstitution("todos");
                }}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Limpar filtros
              </Button>
            </Card>
          )}
        </section>
      </main>
    </div>
  );
}
