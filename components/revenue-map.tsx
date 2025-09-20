import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const locations = [
  { city: "New York", value: "72K" },
  { city: "San Francisco", value: "39K" },
  { city: "Sydney", value: "25K" },
  { city: "Singapore", value: "61K" },
]

export function RevenueMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* World map placeholder */}
          <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 400 200" className="w-full h-full opacity-20">
              {/* Simplified world map outline */}
              <path
                d="M50 100 Q100 80 150 100 T250 100 Q300 120 350 100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="100" cy="90" r="3" fill="hsl(var(--chart-1))" />
              <circle cx="80" cy="95" r="3" fill="hsl(var(--chart-2))" />
              <circle cx="300" cy="110" r="3" fill="hsl(var(--chart-3))" />
              <circle cx="320" cy="85" r="3" fill="hsl(var(--chart-4))" />
            </svg>
          </div>

          {/* Location list */}
          <div className="space-y-3">
            {locations.map((location) => (
              <div key={location.city} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{location.city}</span>
                <span className="text-sm font-semibold">{location.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
