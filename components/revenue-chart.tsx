"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", current: 12, previous: 7 },
  { month: "Feb", current: 8, previous: 16 },
  { month: "Mar", current: 7, previous: 13 },
  { month: "Apr", current: 15, previous: 10 },
  { month: "May", current: 19, previous: 11 },
  { month: "Jun", current: 20, previous: 23 },
];

export function RevenueChart() {
  return (
    <Card className="h-full relative">
      <CardHeader className="flex items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-sm">
          <CardTitle className="text-xl font-bold text-foreground">
            Revenue
          </CardTitle>

          <span className=" h-6 w-0.5 bg-[#1C1C1C33] dark:bg-[#FFFFFF33] rounded-sm hidden md:flex" />

          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--foreground)" }}
            />
            <span className="text-muted-foreground">Current Week</span>
            <span className="font-semibold text-foreground">$58,211</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#7BA7D1" }}
            />
            <span className="text-muted-foreground">Previous Week</span>
            <span className="font-semibold text-foreground">$68,768</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 18, right: 30, left: 20, bottom: 24 }}
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
                tickMargin={20}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: "var(--muted-foreground)" }}
                tickFormatter={(value) => `${value}M`}
                domain={[0, 30]}
                tickMargin={20}
              />
              <Tooltip
                wrapperStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: 8,
                }}
                contentStyle={{ background: "transparent", border: "none" }}
                itemStyle={{ color: "var(--foreground)" }}
                labelStyle={{ color: "var(--muted-foreground)" }}
              />
              <Line
                type="monotone"
                dataKey="current"
                stroke="var(--foreground)"
                strokeWidth={2}
                dot={false}
                strokeDasharray="0 0 5 5"
              />
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#7BA7D1"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
