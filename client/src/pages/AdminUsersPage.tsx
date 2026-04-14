import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";
import { supabase } from "@/lib/supabase";
import {
  Loader2,
  AlertTriangle,
  Shield,
  ShieldCheck,
  Trash2,
  RefreshCcw,
  Plus,
} from "lucide-react";

type AdminUserRow = {
  id: string;
  user_id: string;
  role: "admin" | "editor";
  created_at: string;
};

function formatDate(date?: string | null) {
  if (!date) return "Sem data";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "Sem data";

  return parsed.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [busyUserId, setBusyUserId] = useState<string | null>(null);

  const [newUserId, setNewUserId] = useState("");
  const [newRole, setNewRole] = useState<"admin" | "editor">("editor");
  const [addingUser, setAddingUser] = useState(false);

  async function loadAdminUsers() {
    try {
      setLoading(true);
      setError("");

      const { data, error } = await supabase
        .from("admin_users")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erro ao carregar admin_users:", error);
        setError("Não foi possível carregar os usuários administrativos.");
        return;
      }

      setUsers((data as AdminUserRow[]) || []);
    } catch (err) {
      console.error("Erro inesperado ao carregar usuários ADM:", err);
      setError("Ocorreu um erro inesperado ao carregar os usuários administrativos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAdminUsers();
  }, []);

  async function handleAddAccess() {
    try {
      setAddingUser(true);
      setError("");
      setSuccessMessage("");

      const trimmedUserId = newUserId.trim();

      if (!trimmedUserId) {
        setError("Digite um user_id válido.");
        return;
      }

      const { error } = await supabase.from("admin_users").upsert(
        {
          user_id: trimmedUserId,
          role: newRole,
        },
        {
          onConflict: "user_id",
        }
      );

      if (error) {
        console.error("Erro ao adicionar acesso administrativo:", error);
        setError("Não foi possível adicionar o acesso administrativo.");
        return;
      }

      setSuccessMessage(
        `Acesso ${newRole} adicionado/atualizado com sucesso.`
      );
      setNewUserId("");
      setNewRole("editor");
      await loadAdminUsers();
    } catch (err) {
      console.error("Erro inesperado ao adicionar acesso:", err);
      setError("Ocorreu um erro inesperado ao adicionar o acesso.");
    } finally {
      setAddingUser(false);
    }
  }

  async function handleChangeRole(user: AdminUserRow) {
    try {
      setBusyUserId(user.id);
      setError("");
      setSuccessMessage("");

      const nextRole = user.role === "admin" ? "editor" : "admin";

      const { error } = await supabase
        .from("admin_users")
        .update({ role: nextRole })
        .eq("id", user.id);

      if (error) {
        console.error("Erro ao alterar papel do usuário:", error);
        setError("Não foi possível alterar o papel do usuário.");
        return;
      }

      setUsers((prev) =>
        prev.map((item) =>
          item.id === user.id ? { ...item, role: nextRole } : item
        )
      );

      setSuccessMessage(`Papel alterado com sucesso para ${nextRole}.`);
    } catch (err) {
      console.error("Erro inesperado ao alterar papel:", err);
      setError("Ocorreu um erro inesperado ao alterar o papel.");
    } finally {
      setBusyUserId(null);
    }
  }

  async function handleRemoveAccess(user: AdminUserRow) {
    try {
      setBusyUserId(user.id);
      setError("");
      setSuccessMessage("");

      const { error } = await supabase
        .from("admin_users")
        .delete()
        .eq("id", user.id);

      if (error) {
        console.error("Erro ao remover acesso administrativo:", error);
        setError("Não foi possível remover o acesso administrativo.");
        return;
      }

      setUsers((prev) => prev.filter((item) => item.id !== user.id));
      setSuccessMessage("Acesso administrativo removido com sucesso.");
    } catch (err) {
      console.error("Erro inesperado ao remover acesso:", err);
      setError("Ocorreu um erro inesperado ao remover o acesso.");
    } finally {
      setBusyUserId(null);
    }
  }

  return (
    <AdminGuard>
      <AdminLayout
        title="Usuários ADM"
        subtitle="Gerencie quem tem acesso administrativo ao sistema."
      >
        <Card className="p-6 bg-white border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Acessos administrativos
              </h2>
              <p className="text-sm text-slate-500">
                Total de usuários com acesso: {users.length}
              </p>
            </div>

            <Button
              variant="outline"
              className="rounded-2xl"
              onClick={loadAdminUsers}
              disabled={loading}
            >
              <RefreshCcw className="w-4 h-4 mr-2" />
              Atualizar lista
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-white border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Adicionar novo acesso
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                User ID
              </label>
              <input
                type="text"
                value={newUserId}
                onChange={(e) => setNewUserId(e.target.value)}
                placeholder="Cole aqui o user_id do usuário"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Papel
              </label>
              <select
                value={newRole}
                onChange={(e) =>
                  setNewRole(e.target.value as "admin" | "editor")
                }
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <Button
              onClick={handleAddAccess}
              disabled={addingUser}
              className="rounded-2xl"
            >
              {addingUser ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Adicionando...
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar acesso
                </>
              )}
            </Button>
          </div>
        </Card>

        {loading ? (
          <Card className="p-10 flex items-center justify-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin text-slate-500" />
            <p className="text-slate-600">Carregando usuários administrativos...</p>
          </Card>
        ) : null}

        {!loading && error ? (
          <Card className="p-6 border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <h2 className="text-lg font-bold text-red-700 mb-1">
                  Erro no módulo de usuários
                </h2>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          </Card>
        ) : null}

        {!loading && successMessage ? (
          <Card className="p-5 border-emerald-200 bg-emerald-50">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <p className="text-emerald-700 font-medium">{successMessage}</p>
            </div>
          </Card>
        ) : null}

        {!loading && users.length === 0 ? (
          <Card className="p-10 text-center">
            <Shield className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Nenhum usuário administrativo encontrado
            </h2>
            <p className="text-slate-500">
              Quando houver usuários na tabela admin_users, eles aparecerão aqui.
            </p>
          </Card>
        ) : null}

        {!loading && users.length > 0 ? (
          <div className="space-y-4">
            {users.map((user) => {
              const busy = busyUserId === user.id;

              return (
                <Card
                  key={user.id}
                  className="p-6 bg-white border-slate-200 shadow-sm"
                >
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold">
                          {user.role}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            user.role === "admin"
                              ? "bg-blue-100 text-blue-700 border-blue-200"
                              : "bg-purple-100 text-purple-700 border-purple-200"
                          }`}
                        >
                          {user.role === "admin" ? "Administrador" : "Editor"}
                        </span>
                      </div>

                      <div className="space-y-2 text-sm text-slate-600">
                        <p>
                          <span className="font-semibold text-slate-800">User ID:</span>{" "}
                          <span className="font-mono break-all">{user.user_id}</span>
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">Registro:</span>{" "}
                          <span className="font-mono break-all">{user.id}</span>
                        </p>
                        <p>
                          <span className="font-semibold text-slate-800">Criado em:</span>{" "}
                          {formatDate(user.created_at)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 shrink-0">
                      <Button
                        variant="outline"
                        className="rounded-2xl"
                        onClick={() => handleChangeRole(user)}
                        disabled={busy}
                      >
                        {busy ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <RefreshCcw className="w-4 h-4 mr-2" />
                        )}
                        Tornar {user.role === "admin" ? "editor" : "admin"}
                      </Button>

                      <Button
                        variant="outline"
                        className="rounded-2xl border-red-200 text-red-600 hover:bg-red-50"
                        onClick={() => handleRemoveAccess(user)}
                        disabled={busy}
                      >
                        {busy ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4 mr-2" />
                        )}
                        Remover acesso
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : null}
      </AdminLayout>
    </AdminGuard>
  );
}
