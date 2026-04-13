import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";

export default function AdminUsersPage() {
  return (
    <AdminGuard>
      <AdminLayout
        title="Usuários ADM"
        subtitle="Área de gerenciamento de usuários do sistema."
      >
        <Card className="p-8">
          <p className="text-slate-600">
            Aqui vamos construir o módulo de usuários.
          </p>
        </Card>
      </AdminLayout>
    </AdminGuard>
  );
}
