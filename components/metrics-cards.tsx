import { Card, CardContent } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const metrics = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    trend: "up",
    href: null as string | null,
    // explicit light mode colors via inline style, dark mode via Tailwind class
    lightBg: "#E3F5FF",
    bgClass: "dark:!bg-[#E3F5FF]",
    lightText: "#1C1C1C",
    textClass: "dark:!text-[#1C1C1C]",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    trend: "down",
    href: "/orders",
    lightBg: "#F7F9FB",
    bgClass: "dark:!bg-[#FFFFFF0D]",
    lightText: "#1C1C1C",
    textClass: "dark:!text-[#FFFFFF]",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    trend: "up",
    href: null as string | null,
    lightBg: "#F7F9FB",
    bgClass: "dark:!bg-[#FFFFFF0D]",
    lightText: "#1C1C1C",
    textClass: "dark:!text-[#FFFFFF]",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    trend: "up",
    href: null as string | null,
    lightBg: "#E5ECF6",
    bgClass: "dark:!bg-[#E5ECF6]",
    lightText: "#1C1C1C",
    textClass: "dark:!text-[#1C1C1C]",
  },
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:gap-8">
      {metrics.map((metric) => {
        const isLink = Boolean(metric.href);

        const card = (
          <Card
            style={{ backgroundColor: metric.lightBg, color: metric.lightText }}
            className={`${metric.bgClass || ""} ${metric.textClass || ""} ${
              isLink ? "cursor-pointer transition-all duration-200" : ""
            }`}
          >
            <CardContent className="p-4 md:p-6">
              <div className="space-y-2">
                <p className="text-xs md:text-sm font-medium">{metric.title}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg md:text-2xl font-bold">
                    {metric.value}
                  </p>
                  <div
                    className={`flex items-center gap-1 text-xs md:text-sm ${
                      metric.textClass || ""
                    } `}
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
