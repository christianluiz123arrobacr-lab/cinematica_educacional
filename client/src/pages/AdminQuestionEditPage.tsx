import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";

export default function AdminQuestionEditPage() {
  return (
    <AdminGuard>
      <AdminLayout
        title="Editar questão"
        subtitle="Aqui vamos montar a edição completa da questão."
      >
        <Card className="p-8">
          <p className="text-slate-600">
            Página de edição em construção.
          </p>
        </Card>
      </AdminLayout>
    </AdminGuard>
  );
}
