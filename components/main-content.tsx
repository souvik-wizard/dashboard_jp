import { MetricsCards } from "./metrics-cards"
import { ProjectionsChart } from "./projections-chart"
import { RevenueChart } from "./revenue-chart"
import { RevenueMap } from "./revenue-map"
import { TopSellingProducts } from "./top-selling-products"
import { TotalSales } from "./total-sales"

export function MainContent() {
  return (
    <div className="flex-1 p-3 md:p-6 overflow-y-auto">
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-foreground">eCommerce</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="md:col-span-2 lg:col-span-2">
          <MetricsCards />
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <ProjectionsChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <RevenueChart />
        <RevenueMap />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <TopSellingProducts />
        <TotalSales />
      </div>
    </div>
  )
}
