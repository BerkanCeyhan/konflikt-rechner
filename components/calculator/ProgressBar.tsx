const STEPS = [
  "Unternehmen",
  "Konflikte",
  "Folgen",
  "Ergebnis",
];

interface Props {
  current: number; // 1-based
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-gray-500">
        <span>Schritt {current} von {total}</span>
        <span>{STEPS[current - 1]}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < current ? "bg-blue-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
