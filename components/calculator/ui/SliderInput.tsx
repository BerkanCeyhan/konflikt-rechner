"use client";

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
  hint?: string;
}

export default function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  formatValue,
  hint,
}: SliderInputProps) {
  const display = formatValue ? formatValue(value) : String(value);
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-lg font-semibold text-blue-700">{display}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #1d4ed8 0%, #1d4ed8 ${percent}%, #e5e7eb ${percent}%, #e5e7eb 100%)`,
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>{formatValue ? formatValue(min) : min}</span>
        <span>{formatValue ? formatValue(max) : max}</span>
      </div>
      {hint && <p className="text-xs text-gray-500 italic">{hint}</p>}
    </div>
  );
}
