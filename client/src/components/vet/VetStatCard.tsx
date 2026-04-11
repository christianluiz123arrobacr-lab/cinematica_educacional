import type { LucideIcon } from "lucide-react";

type VetStatCardProps = {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  tone?: "default" | "red" | "yellow" | "green" | "blue" | "purple";
  helper?: string;
};

export function VetStatCard({
  label,
  value,
  icon: Icon,
  tone = "default",
  helper,
}: VetStatCardProps) {
  const toneMap = {
    default: {
      wrap: "border-slate-200 bg-white",
      icon: "bg-slate-100 text-slate-700",
      value: "text-slate-900",
    },
    red: {
      wrap: "border-red-200 bg-red-50",
      icon: "bg-red-100 text-red-600",
      value: "text-red-600",
    },
    yellow: {
      wrap: "border-yellow-200 bg-yellow-50",
      icon: "bg-yellow-100 text-yellow-700",
      value: "text-yellow-700",
    },
    green: {
      wrap: "border-emerald-200 bg-emerald-50",
      icon: "bg-emerald-100 text-emerald-700",
      value: "text-emerald-700",
    },
    blue: {
      wrap: "border-blue-200 bg-blue-50",
      icon: "bg-blue-100 text-blue-700",
      value: "text-blue-700",
    },
    purple: {
      wrap: "border-purple-200 bg-purple-50",
      icon: "bg-purple-100 text-purple-700",
      value: "text-purple-700",
    },
  };

  const styles = toneMap[tone];

  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${styles.wrap}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500 mb-1">{label}</p>
          <p className={`text-3xl font-bold ${styles.value}`}>{value}</p>
          {helper ? <p className="text-xs text-slate-500 mt-2">{helper}</p> : null}
        </div>

        {Icon ? (
          <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${styles.icon}`}>
            <Icon className="w-5 h-5" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
