import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const locations = [
  { city: "New York", value: "72K", percentage: 100 },
  { city: "San Francisco", value: "39K", percentage: 54 },
  { city: "Sydney", value: "25K", percentage: 35 },
  { city: "Singapore", value: "61K", percentage: 85 },
];

export function RevenueMap() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Revenue by Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className=" flex items-center justify-center relative">
            <img src="/svg/World Map.svg" alt="World Map" className="w-56" />
          </div>

          <div className="space-y-4">
            {locations.map((location) => (
              <div key={location.city} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="  text-foreground">{location.city}</span>
                  <span className=" text-foreground">{location.value}</span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-1">
                  <div
                    className="bg-[#7BA7D1] h-1 rounded-full transition-all duration-300"
                    style={{ width: `${location.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
