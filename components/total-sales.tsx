"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#90EE90" },
  { name: "Sponsored", value: 154.02, color: "#8A7FFF" },
  { name: "E-mail", value: 48.96, color: "#87CEEB" },
];

export function TotalSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Total Sales</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="relative flex justify-center">
            <div className="h-56 w-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={108}
                    paddingAngle={8}
                    cornerRadius={20}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="#f8fafc"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* percentage badge shifted slightly lower-left to match design */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className=" bg-gray-800 text-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-lg font-semibold">38.6%</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-lg font-medium">{item.name}</span>
                </div>
                <span className="text-lg font-semibold">
                  ${item.value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
