export interface CompanyData {
  totalEmployees: number;
  managementPercent: number;
  avgSalaryEmployee: number;
  avgSalaryManagement: number;
}

export interface ConflictData {
  conflictHoursEmployee: number;
  conflictHoursManagement: number;
  affectedEmployeesPercent: number;
  unresolvedConflicts: number;
}

export interface ConsequenceData {
  additionalSickDays: number;
  turnoverDueToConflict: number;
  productivityLossPercent: number;
  customerLossPerYear: number;
}

export interface CalculatorState {
  company: CompanyData;
  conflict: ConflictData;
  consequences: ConsequenceData;
}

export interface CalculationResult {
  timeCostsEmployees: number;
  timeCostsManagement: number;
  turnoverCosts: number;
  absenteeismCosts: number;
  productivityLoss: number;
  customerLoss: number;
  total: number;
  personnelCostPercent: number;
}
