import { useState } from "react";
import { trpc } from "@/lib/trpc";

export default function AdminUsersPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const createStudent = trpc.admin.createStudent.useMutation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMensagem("");

    try {
      await createStudent.mutateAsync({ nome, email, senha });
      setMensagem("Aluno criado com sucesso.");
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error: any) {
      setMensagem(error?.message ?? "Erro ao criar aluno.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-2">Criar aluno</h1>
        <p className="text-sm text-slate-500 mb-6">
          Somente o administrador pode cadastrar contas.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
            type="password"
            placeholder="Senha inicial"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          {mensagem && (
            <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm">
              {mensagem}
            </div>
          )}

          <button
            type="submit"
            disabled={createStudent.isPending}
            className="w-full rounded-xl bg-slate-900 text-white py-3 font-semibold"
          >
            {createStudent.isPending ? "Criando..." : "Criar aluno"}
          </button>
        </form>
      </div>
    </div>
  );
}
