import { useRoute } from "wouter";
import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";

export default function AdminResolutionEditorPage() {
  const [, params] = useRoute("/admin/resolucoes/:questaoId");

  return (
    <AdminGuard>
      <AdminLayout
        title="Editar resolução"
        subtitle="Aqui vamos montar o editor real de blocos da resolução."
      >
        <Card className="p-8">
          <p className="text-slate-600 mb-2">
            Questão selecionada:
          </p>
          <p className="font-mono text-sm text-slate-900 break-all">
            {params?.questaoId || "Sem ID"}
          </p>
        </Card>
      </AdminLayout>
    </AdminGuard>
  );
}
