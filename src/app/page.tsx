import { CreditCard, DollarSign, HandCoins, Users } from "lucide-react";

import { CustomisedPieChart } from "@/components/ui/CustomisedPieChart";
import { CustomisedBarChart } from "@/components/ui/CustomisedBarChart";
import DataCardSection from "./dashboard/DataCardSection";
import TransactionSection from "./dashboard/TransactionSection";

// Grab from backend
const cardData: CardData[] = [
  {
    title: "Total Balance",
    subtitle: "+20.1% from last month",
    value: "$45,231.89",
    icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Expense this month",
    subtitle: "+180.1% from last month",
    value: "2350",
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Remaining funds",
    subtitle: "-20% from last month",
    budget_progress: "90",
    value: "573",
    icon: <HandCoins className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Upcoming bill",
    subtitle: "Netflix - Manual payment (due in 10 days)",
    value: "$19",
    icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
  },
];

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <DataCardSection cardData={cardData} />
      <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-2">
        <CustomisedBarChart />
        <CustomisedPieChart />
      </div>
      <TransactionSection />
    </main>
  );
}
