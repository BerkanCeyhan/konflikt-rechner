"use client";

import { ConsequenceData } from "@/lib/types";
import NumberInput from "../ui/NumberInput";
import SliderInput from "../ui/SliderInput";

interface Props {
  data: ConsequenceData;
  onChange: (data: ConsequenceData) => void;
}

export default function Step3Consequences({ data, onChange }: Props) {
  const set = (key: keyof ConsequenceData) => (value: number) =>
    onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Konfliktfolgen</h2>
        <p className="text-sm text-gray-500 mt-1">
          Welche Konsequenzen entstehen durch ungelöste Konflikte?
        </p>
      </div>

      <SliderInput
        label="Zusätzliche Krankheitstage durch Konflikte (pro MA/Jahr)"
        value={data.additionalSickDays}
        min={0}
        max={15}
        step={0.5}
        onChange={set("additionalSickDays")}
        formatValue={(v) => `${v} Tage`}
        hint="Studien zeigen: Konflikte mit Vorgesetzten erzeugen Ø +1,4 Fehltage/Jahr"
      />

      <NumberInput
        label="Mitarbeiter-Abgänge durch Konflikte (pro Jahr)"
        value={data.turnoverDueToConflict}
        min={0}
        step={1}
        onChange={set("turnoverDueToConflict")}
        suffix="Personen"
        hint="Kündigungen oder Versetzungen, die maßgeblich durch Konflikte verursacht wurden"
      />

      <SliderInput
        label="Produktivitätsverlust bei betroffenen Mitarbeitern"
        value={data.productivityLossPercent}
        min={0}
        max={60}
        step={5}
        onChange={set("productivityLossPercent")}
        formatValue={(v) => `${v} %`}
        hint="Geschätzte Leistungsminderung bei Mitarbeitenden in aktiven Konflikten"
      />

      <NumberInput
        label="Kundenverluste durch Konflikte (€/Jahr)"
        value={data.customerLossPerYear}
        min={0}
        step={1000}
        onChange={set("customerLossPerYear")}
        suffix="€"
        hint="Optional: entgangene Aufträge oder verlorene Kunden durch interne Konflikte"
      />
    </div>
  );
}
