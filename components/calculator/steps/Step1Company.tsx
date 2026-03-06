"use client";

import { CompanyData } from "@/lib/types";
import NumberInput from "../ui/NumberInput";
import SliderInput from "../ui/SliderInput";

interface Props {
  data: CompanyData;
  onChange: (data: CompanyData) => void;
}

export default function Step1Company({ data, onChange }: Props) {
  const set = (key: keyof CompanyData) => (value: number) =>
    onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Unternehmensdaten</h2>
        <p className="text-sm text-gray-500 mt-1">
          Grundlegende Informationen zu Ihrem Unternehmen
        </p>
      </div>

      <NumberInput
        label="Anzahl Mitarbeiter gesamt"
        value={data.totalEmployees}
        min={1}
        step={1}
        onChange={set("totalEmployees")}
        suffix="Personen"
        hint="Alle festangestellten Mitarbeitenden inkl. Führungskräfte"
      />

      <SliderInput
        label="Davon Führungskräfte"
        value={data.managementPercent}
        min={0}
        max={50}
        step={1}
        onChange={set("managementPercent")}
        formatValue={(v) => `${v} %`}
        hint={`= ${Math.round(data.totalEmployees * (data.managementPercent / 100))} Führungskräfte`}
      />

      <NumberInput
        label="Durchschn. Jahresgehalt (Mitarbeiter)"
        value={data.avgSalaryEmployee}
        min={10000}
        step={1000}
        onChange={set("avgSalaryEmployee")}
        suffix="€ / Jahr"
        hint="Brutto inkl. Arbeitgeberanteil Sozialversicherung"
      />

      <NumberInput
        label="Durchschn. Jahresgehalt (Führungskräfte)"
        value={data.avgSalaryManagement}
        min={10000}
        step={1000}
        onChange={set("avgSalaryManagement")}
        suffix="€ / Jahr"
        hint="Brutto inkl. Arbeitgeberanteil Sozialversicherung"
      />
    </div>
  );
}
