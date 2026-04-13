import { Card } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";

export default function AdminResolutionsPage() {
  return (
    <AdminGuard>
      <AdminLayout
        title="Resoluções ADM"
        subtitle="Área de gerenciamento de blocos de resolução."
      >
        <Card className="p-8">
          <p className="text-slate-600">
            Aqui vamos construir o módulo de resoluções.
          </p>
        </Card>
      </AdminLayout>
    </AdminGuard>
  );
}
