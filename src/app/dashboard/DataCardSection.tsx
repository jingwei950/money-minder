import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";

function DataCardSection({ cardData }: { cardData: CardData[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {cardData.map((card) => (
        <Card
          key={card.title}
          x-chunk={`dashboard-01-chunk-${cardData.indexOf(card)}`}
          className="space-y-2"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent className={!card.budget_progress ? "space-y-2" : ""}>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.subtitle}</p>
            {card.budget_progress && (
              <Progress
                className="mt-2"
                value={Number(card.budget_progress)}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default DataCardSection;
