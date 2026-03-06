"use client";

import { CalculatorState, CalculationResult } from "@/lib/types";
import { calculate, formatEuro } from "@/lib/calculator";
import ResultCard from "../ui/ResultCard";

interface Props {
  state: CalculatorState;
  onRestart: () => void;
}

const CATEGORIES = [
  {
    key: "timeCostsEmployees" as keyof CalculationResult,
    icon: "⏱️",
    label: "Zeitkosten Mitarbeiter",
    color: "bg-blue-100",
  },
  {
    key: "timeCostsManagement" as keyof CalculationResult,
    icon: "👔",
    label: "Zeitkosten Führungskräfte",
    color: "bg-indigo-100",
  },
  {
    key: "turnoverCosts" as keyof CalculationResult,
    icon: "🚪",
    label: "Fluktuationskosten",
    color: "bg-orange-100",
  },
  {
    key: "absenteeismCosts" as keyof CalculationResult,
    icon: "🤒",
    label: "Fehlzeitenkosten",
    color: "bg-red-100",
  },
  {
    key: "productivityLoss" as keyof CalculationResult,
    icon: "📉",
    label: "Produktivitätsverlust",
    color: "bg-yellow-100",
  },
  {
    key: "customerLoss" as keyof CalculationResult,
    icon: "🤝",
    label: "Kundenverluste",
    color: "bg-purple-100",
  },
];

export default function Step4Results({ state, onRestart }: Props) {
  const result = calculate(state);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Ihre Konfliktkostenanalyse
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Geschätzte jährliche Kosten durch ungelöste Konflikte
        </p>
      </div>

      {/* Hero total */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 text-center">
        <p className="text-sm font-medium text-red-600 uppercase tracking-wider">
          Jährliche Konfliktkosten
        </p>
        <p className="text-4xl font-extrabold text-red-700 mt-2">
          {formatEuro(result.total)}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          = <strong>{result.personnelCostPercent.toFixed(1)} %</strong> Ihrer
          gesamten Personalkosten
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Zum Vergleich: KPMG ermittelte im Durchschnitt ~20 % der Personalkosten
        </p>
      </div>

      {/* Breakdown */}
      <div className="space-y-3">
        {CATEGORIES.filter((c) => (result[c.key] as number) > 0).map((c) => {
          const amount = result[c.key] as number;
          const pct = result.total > 0 ? (amount / result.total) * 100 : 0;
          return (
            <ResultCard
              key={c.key}
              icon={c.icon}
              label={c.label}
              amount={amount}
              percent={pct}
              color={c.color}
            />
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-blue-700 text-white rounded-2xl p-6 text-center space-y-3">
        <p className="text-lg font-bold">
          Möchten Sie Ihre Konfliktkosten um bis zu 70 % senken?
        </p>
        <p className="text-sm text-blue-200">
          Unsere zertifizierten Konfliktberater helfen Ihnen, nachhaltige Lösungen
          zu entwickeln – individuell auf Ihr Unternehmen abgestimmt.
        </p>
        <a
          href="#kontakt"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Kostenloses Erstgespräch vereinbaren →
        </a>
      </div>

      {/* Source note + restart */}
      <div className="flex flex-col items-center gap-3 pt-2">
        <p className="text-xs text-gray-400 text-center">
          Diese Schätzung basiert auf der KPMG-Konfliktkostenstudie (2009) und
          anerkannten Branchendurchschnittswerten. Alle Angaben sind unverbindlich.
        </p>
        <button
          onClick={onRestart}
          className="text-sm text-blue-600 hover:underline"
        >
          Neue Berechnung starten
        </button>
      </div>
    </div>
  );
}
