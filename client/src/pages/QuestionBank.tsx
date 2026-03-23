import { useEffect, useState } from "react";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";
import { getQuestions } from "@/services/questions.service";
import type { Question } from "@/types/question";

export default function QuestionBank() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function loadQuestions() {
      const data = await getQuestions({
        subject: "fisica",
        topic: "cinematica",
      });
      setQuestions(data);
    }

    loadQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <InteractiveQuiz questions={questions} />
      </div>
    </div>
  );
}
