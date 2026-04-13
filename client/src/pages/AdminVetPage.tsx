import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";

export default function AdminVetPage() {
  return (
    <AdminGuard>
      <AdminLayout
        title="VET ADM"
        subtitle="Área de gerenciamento estratégico do VET."
      >
        <Card className="p-8">
          <p className="text-slate-600">
            Aqui vamos construir o módulo do VET.
          </p>
        </Card>
      </AdminLayout>
    </AdminGuard>
  );
}
