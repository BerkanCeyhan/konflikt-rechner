"use client";

import { useState } from "react";
import { CalculatorState } from "@/lib/types";
import { DEFAULT_STATE } from "@/lib/calculator";
import ProgressBar from "./ProgressBar";
import Step1Company from "./steps/Step1Company";
import Step2Conflict from "./steps/Step2Conflict";
import Step3Consequences from "./steps/Step3Consequences";
import Step4Results from "./steps/Step4Results";

const TOTAL_STEPS = 4;

export default function ConflictCalculator() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<CalculatorState>(DEFAULT_STATE);

  const setCompany = (company: CalculatorState["company"]) =>
    setState((s) => ({ ...s, company }));
  const setConflict = (conflict: CalculatorState["conflict"]) =>
    setState((s) => ({ ...s, conflict }));
  const setConsequences = (consequences: CalculatorState["consequences"]) =>
    setState((s) => ({ ...s, consequences }));

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));
  const restart = () => {
    setState(DEFAULT_STATE);
    setStep(1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 space-y-6 max-w-lg mx-auto w-full">
      <ProgressBar current={step} total={TOTAL_STEPS} />

      {step === 1 && (
        <Step1Company data={state.company} onChange={setCompany} />
      )}
      {step === 2 && (
        <Step2Conflict data={state.conflict} onChange={setConflict} />
      )}
      {step === 3 && (
        <Step3Consequences data={state.consequences} onChange={setConsequences} />
      )}
      {step === 4 && <Step4Results state={state} onRestart={restart} />}

      {step < TOTAL_STEPS && (
        <div className="flex justify-between pt-2">
          {step > 1 ? (
            <button
              onClick={back}
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              ← Zurück
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={next}
            className="px-6 py-2 text-sm font-semibold bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            {step === TOTAL_STEPS - 1 ? "Kosten berechnen →" : "Weiter →"}
          </button>
        </div>
      )}
    </div>
  );
}
