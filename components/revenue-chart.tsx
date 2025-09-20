"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", current: 15, previous: 12 },
  { month: "Feb", current: 18, previous: 16 },
  { month: "Mar", current: 12, previous: 14 },
  { month: "Apr", current: 20, previous: 18 },
  { month: "May", current: 16, previous: 15 },
  { month: "Jun", current: 22, previous: 20 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Revenue</CardTitle>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-1"></div>
            <span className="text-muted-foreground">Current Week</span>
            <span className="font-semibold">$58,211</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-2"></div>
            <span className="text-muted-foreground">Previous Week</span>
            <span className="font-semibold">$68,768</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `${value}M`}
              />
              <Line
                type="monotone"
                dataKey="current"
                stroke="hsl(var(--chart-1))"
                strokeWidth={3}
                dot={false}
                strokeDasharray="5 5"
              />
              <Line type="monotone" dataKey="previous" stroke="hsl(var(--chart-2))" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
