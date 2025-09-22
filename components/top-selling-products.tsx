import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

export function TopSellingProducts() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Top Selling Products
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground text-center">
                Price
              </TableHead>
              <TableHead className="text-muted-foreground text-center">
                Quantity
              </TableHead>
              <TableHead className="text-muted-foreground text-right">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* thin divider similar to design */}
          <div className="border-t border-muted" />

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name} className="py-4">
                <TableCell className="font-medium py-4">
                  {product.name}
                </TableCell>
                <TableCell className="text-center py-4">
                  {product.price}
                </TableCell>
                <TableCell className="text-center py-4">
                  {product.quantity}
                </TableCell>
                <TableCell className="text-right py-4">
                  {product.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
