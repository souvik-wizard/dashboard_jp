import { Card, CardContent } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const metrics = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    trend: "up",
    href: null as string | null,
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    trend: "down",
    href: "/orders",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    trend: "up",
    href: null as string | null,
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    trend: "up",
    href: null as string | null,
  },
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
      {metrics.map((metric, index) => {
        const isLink = Boolean(metric.href);

        const card = (
          <Card
            className={`${
              index === 0 ? "bg-blue-50 dark:bg-blue-950/20" : ""
            } ${
              isLink
                ? "cursor-pointer hover:shadow-md transition-all duration-200"
                : ""
            }`}
          >
            <CardContent className="">
              <div className="space-y-2">
                <p className="text-xs md:text-sm font-medium text-muted-foreground">
                  {metric.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg md:text-2xl font-bold text-foreground">
                    {metric.value}
                  </p>
                  <div
                    className={`flex items-center gap-1 text-xs md:text-sm ${
                      metric.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {metric.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                    ) : (
                      <TrendingDown className="w-3 h-3 md:w-4 md:h-4" />
                    )}
                    <span className="hidden sm:inline">{metric.change}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

        return isLink ? (
          <a key={metric.title} href={metric.href || undefined}>
            {card}
          </a>
        ) : (
          <div key={metric.title}>{card}</div>
        );
      })}
    </div>
  );
}
