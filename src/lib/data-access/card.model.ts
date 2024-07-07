interface CardData {
  title: string;
  subtitle: string;
  value: string;
  budget_progress?: string;
  icon: React.ReactNode;
}

interface TotalBalanceData {
  last_month_cutoff_amount: number;
  this_month_cutoff_amount: number;
}

interface ExpenseThisMonthData {
  last_month_cutoff_amount: number;
  this_month_cutoff_amount: number;
}

interface RemainingFundsData {
  last_month_cutoff_amount: number;
  this_month_cutoff_amount: number;
  remaining_funds: number;
}
