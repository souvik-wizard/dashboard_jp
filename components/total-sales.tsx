"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "hsl(var(--chart-1))" },
  { name: "Affiliate", value: 135.18, color: "hsl(var(--chart-2))" },
  { name: "Sponsored", value: 154.02, color: "hsl(var(--chart-3))" },
  { name: "E-mail", value: 48.96, color: "hsl(var(--chart-4))" },
];

export function TotalSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Total Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="h-48 w-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className=" inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">38.6%</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {data.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {item.name}
                  </span>
                  <span className="text-sm font-semibold">${item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
