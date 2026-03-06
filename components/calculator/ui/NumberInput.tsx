"use client";

interface NumberInputProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  hint?: string;
}

export default function NumberInput({
  label,
  value,
  min = 0,
  max,
  step = 1,
  onChange,
  prefix,
  suffix,
  hint,
}: NumberInputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent bg-white">
        {prefix && (
          <span className="px-3 py-2 bg-gray-50 text-gray-500 text-sm border-r border-gray-300 select-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) onChange(Math.max(min, v));
          }}
          className="flex-1 px-3 py-2 text-sm outline-none bg-white"
        />
        {suffix && (
          <span className="px-3 py-2 bg-gray-50 text-gray-500 text-sm border-l border-gray-300 select-none">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="text-xs text-gray-500 italic">{hint}</p>}
    </div>
  );
}
