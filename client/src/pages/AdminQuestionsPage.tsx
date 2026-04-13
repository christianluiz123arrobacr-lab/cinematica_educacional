import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";

export default function AdminQuestionsPage() {
  return (
    <AdminGuard>
      <AdminLayout
        title="Questões ADM"
        subtitle="Área de gerenciamento de questões do banco."
      >
        <Card className="p-8">
          <p className="text-slate-600">
            Aqui vamos construir o módulo de questões.
          </p>
        </Card>
      </AdminLayout>
    </AdminGuard>
  );
}
