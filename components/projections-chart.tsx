"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", projections: 15, actuals: 18 },
  { month: "Feb", projections: 20, actuals: 22 },
  { month: "Mar", projections: 18, actuals: 19 },
  { month: "Apr", projections: 25, actuals: 28 },
  { month: "May", projections: 22, actuals: 20 },
  { month: "Jun", projections: 28, actuals: 30 },
]

export function ProjectionsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
              <Bar dataKey="projections" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} opacity={0.7} />
              <Bar dataKey="actuals" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
