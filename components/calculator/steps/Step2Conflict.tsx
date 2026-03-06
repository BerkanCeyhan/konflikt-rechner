"use client";

import { ConflictData } from "@/lib/types";
import NumberInput from "../ui/NumberInput";
import SliderInput from "../ui/SliderInput";

interface Props {
  data: ConflictData;
  onChange: (data: ConflictData) => void;
}

export default function Step2Conflict({ data, onChange }: Props) {
  const set = (key: keyof ConflictData) => (value: number) =>
    onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Konfliktsituation</h2>
        <p className="text-sm text-gray-500 mt-1">
          Wie viel Zeit geht durch Konflikte verloren?
        </p>
      </div>

      <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-700">
        <strong>Studienbasis:</strong> Laut KPMG verbringen Mitarbeiter
        durchschnittlich 10–15 % der Arbeitszeit mit Konflikten (ca. 2,8 Std./Woche).
        Führungskräfte sogar 30–50 % ihrer Zeit.
      </div>

      <SliderInput
        label="Stunden/Woche mit Konflikten (Mitarbeiter Ø)"
        value={data.conflictHoursEmployee}
        min={0}
        max={15}
        step={0.5}
        onChange={set("conflictHoursEmployee")}
        formatValue={(v) => `${v} Std.`}
        hint="Meetings, E-Mails, Gespräche, die durch Konflikte entstehen"
      />

      <SliderInput
        label="Stunden/Woche mit Konflikten (Führungskräfte Ø)"
        value={data.conflictHoursManagement}
        min={0}
        max={25}
        step={0.5}
        onChange={set("conflictHoursManagement")}
        formatValue={(v) => `${v} Std.`}
        hint="Inklusive Schlichtung, Dokumentation und Krisenmanagement"
      />

      <SliderInput
        label="Anteil Mitarbeiter in aktiven Konflikten"
        value={data.affectedEmployeesPercent}
        min={0}
        max={100}
        step={5}
        onChange={set("affectedEmployeesPercent")}
        formatValue={(v) => `${v} %`}
        hint="Wie viele Mitarbeitende sind derzeit in Konfliktsituationen involviert?"
      />

      <NumberInput
        label="Anzahl aktuell ungelöster Konflikte"
        value={data.unresolvedConflicts}
        min={0}
        step={1}
        onChange={set("unresolvedConflicts")}
        suffix="Konflikte"
        hint="Schwelende oder eskalierende Situationen im Unternehmen"
      />
    </div>
  );
}
