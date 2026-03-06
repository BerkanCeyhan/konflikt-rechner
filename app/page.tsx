import ConflictCalculator from "@/components/calculator/ConflictCalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
            Kostenloses Analysetool
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Was kosten Konflikte
            <br />
            <span className="text-blue-700">Ihr Unternehmen?</span>
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Berechnen Sie in 3 Minuten Ihre jährlichen Konfliktkosten – basierend
            auf validierten Forschungsdaten der KPMG-Konfliktkostenstudie.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Kostenlos &amp; anonym
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Basiert auf KPMG-Studie
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Ergebnis sofort sichtbar
            </span>
          </div>
        </div>

        {/* Calculator */}
        <ConflictCalculator />
      </div>
    </main>
  );
}
