"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", actuals: 16, projections: 4 },
  { month: "Feb", actuals: 19, projections: 5 },
  { month: "Mar", actuals: 17, projections: 4 },
  { month: "Apr", actuals: 22, projections: 5 },
  { month: "May", actuals: 14, projections: 4 },
  { month: "Jun", actuals: 19, projections: 6 },
];

export function ProjectionsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">
          Projections vs Actuals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-62">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="30%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                opacity={0.25}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: "var(--muted-foreground)" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: "var(--muted-foreground)" }}
                tickFormatter={(value) => `${value}M`}
                domain={[0, 30]}
              />
              <Tooltip
                wrapperStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: 8,
                  boxShadow: "0 6px 18px rgba(13, 38, 59, 0.08)",
                }}
                contentStyle={{ background: "transparent", border: "none" }}
                itemStyle={{ color: "var(--foreground)" }}
                labelStyle={{ color: "var(--muted-foreground)" }}
              />
              <Bar
                dataKey="actuals"
                stackId="a"
                fill="#7BA7D1"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="projections"
                stackId="a"
                fill="#B8D0E8"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
