import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";

export default function AdminLogsPage() {
  return (
    <AdminGuard>
      <AdminLayout
        title="Logs ADM"
        subtitle="Área de acompanhamento de ações administrativas."
      >
        <Card className="p-8">
          <p className="text-slate-600">
            Aqui vamos construir o módulo de logs.
          </p>
        </Card>
      </AdminLayout>
    </AdminGuard>
  );
}
