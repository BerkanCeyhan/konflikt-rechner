import { formatEuro } from "@/lib/calculator";

interface ResultCardProps {
  icon: string;
  label: string;
  amount: number;
  percent: number;
  color: string;
}

export default function ResultCard({
  icon,
  label,
  amount,
  percent,
  color,
}: ResultCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0 ${color}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-600 truncate">{label}</p>
        <div className="mt-1 h-1.5 bg-gray-100 rounded-full">
          <div
            className="h-1.5 rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${Math.min(percent, 100)}%` }}
          />
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="font-semibold text-gray-900">{formatEuro(amount)}</p>
        <p className="text-xs text-gray-400">{percent.toFixed(1)} %</p>
      </div>
    </div>
  );
}
