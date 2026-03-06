import { CalculatorState, CalculationResult } from "./types";

const WORKING_HOURS_PER_YEAR = 1720;
const WORKING_DAYS_PER_YEAR = 220;
const WEEKS_PER_YEAR = 52;
const REPLACEMENT_COST_FACTOR = 0.75; // 75% of annual salary

export function calculate(state: CalculatorState): CalculationResult {
  const { company, conflict, consequences } = state;

  const numManagement = Math.round(
    company.totalEmployees * (company.managementPercent / 100)
  );
  const numEmployees = company.totalEmployees - numManagement;

  const hourlyRateEmployee = company.avgSalaryEmployee / WORKING_HOURS_PER_YEAR;
  const hourlyRateManagement =
    company.avgSalaryManagement / WORKING_HOURS_PER_YEAR;
  const dailyRateEmployee = company.avgSalaryEmployee / WORKING_DAYS_PER_YEAR;

  // Time costs: hours per week × hourly rate × 52 weeks
  const timeCostsEmployees =
    numEmployees * hourlyRateEmployee * conflict.conflictHoursEmployee * WEEKS_PER_YEAR;

  const timeCostsManagement =
    numManagement *
    hourlyRateManagement *
    conflict.conflictHoursManagement *
    WEEKS_PER_YEAR;

  // Turnover: replacement costs = 75% of annual salary per person
  const turnoverCosts =
    consequences.turnoverDueToConflict *
    company.avgSalaryEmployee *
    REPLACEMENT_COST_FACTOR;

  // Absenteeism: additional sick days × daily rate per employee
  const absenteeismCosts =
    company.totalEmployees *
    consequences.additionalSickDays *
    dailyRateEmployee;

  // Productivity loss: affected employees × salary × loss%
  const affectedEmployees = Math.round(
    company.totalEmployees * (conflict.affectedEmployeesPercent / 100)
  );
  const productivityLoss =
    affectedEmployees *
    company.avgSalaryEmployee *
    (consequences.productivityLossPercent / 100);

  const customerLoss = consequences.customerLossPerYear;

  const total =
    timeCostsEmployees +
    timeCostsManagement +
    turnoverCosts +
    absenteeismCosts +
    productivityLoss +
    customerLoss;

  // Total personnel costs for benchmarking
  const totalPersonnelCosts =
    numEmployees * company.avgSalaryEmployee +
    numManagement * company.avgSalaryManagement;
  const personnelCostPercent =
    totalPersonnelCosts > 0 ? (total / totalPersonnelCosts) * 100 : 0;

  return {
    timeCostsEmployees,
    timeCostsManagement,
    turnoverCosts,
    absenteeismCosts,
    productivityLoss,
    customerLoss,
    total,
    personnelCostPercent,
  };
}

export function formatEuro(value: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export const DEFAULT_STATE: CalculatorState = {
  company: {
    totalEmployees: 50,
    managementPercent: 15,
    avgSalaryEmployee: 45000,
    avgSalaryManagement: 75000,
  },
  conflict: {
    conflictHoursEmployee: 2.8,
    conflictHoursManagement: 6,
    affectedEmployeesPercent: 30,
    unresolvedConflicts: 3,
  },
  consequences: {
    additionalSickDays: 1.5,
    turnoverDueToConflict: 2,
    productivityLossPercent: 20,
    customerLossPerYear: 0,
  },
};
