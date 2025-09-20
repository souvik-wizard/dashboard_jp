import { useState, useEffect } from "react";
import { Sidebar } from "../../components/sidebar";
import { Header } from "../../components/header";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import {
  Plus,
  Filter,
  ArrowUpDown,
  Search,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Calendar,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

const orders = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    selected: false,
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    selected: false,
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/placeholder.svg?height=32&width=32" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    selected: false,
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    selected: true,
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/placeholder.svg?height=32&width=32" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    selected: false,
  },
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    selected: false,
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    selected: false,
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/placeholder.svg?height=32&width=32" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    selected: false,
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    selected: false,
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/placeholder.svg?height=32&width=32" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    selected: false,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
    case "Complete":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    case "Pending":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    case "Approved":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "Rejected":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

export default function OrdersPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`
        ${
          isMobile
            ? "fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out"
            : "relative"
        }
        ${isMobile && !isMobileMenuOpen ? "-translate-x-full" : "translate-x-0"}
        lg:translate-x-0 lg:static lg:inset-0
      `}
      >
        <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header
          onMenuClick={() => setIsMobileMenuOpen(true)}
          showMenuButton={isMobile}
        />

        <main className="flex-1 overflow-auto p-3 md:p-6">
          <div className="space-y-4 md:space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl md:text-2xl font-semibold text-foreground">
                Order List
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Button size="sm" className="h-8">
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 bg-transparent"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 bg-transparent"
                >
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Sort
                </Button>
              </div>

              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search" className="pl-9 w-full sm:w-64" />
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-muted-foreground">
                        <Checkbox />
                      </th>
                      <th className="text-left p-4 font-medium text-muted-foreground">
                        Order ID
                      </th>
                      <th className="text-left p-4 font-medium text-muted-foreground">
                        User
                      </th>
                      <th className="text-left p-4 font-medium text-muted-foreground">
                        Project
                      </th>
                      <th className="text-left p-4 font-medium text-muted-foreground">
                        Address
                      </th>
                      <th className="text-left p-4 font-medium text-muted-foreground">
                        Date
                      </th>
                      <th className="text-left p-4 font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="text-left p-4 font-medium text-muted-foreground"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr
                        key={`${order.id}-${index}`}
                        className="border-b hover:bg-muted/30 transition-colors"
                      >
                        <td className="p-4">
                          <Checkbox checked={order.selected} />
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-foreground">
                            {order.id}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarImage
                                src={order.user.avatar || "/placeholder.svg"}
                                alt={order.user.name}
                              />
                              <AvatarFallback>
                                {order.user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-foreground">
                              {order.user.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-foreground">
                            {order.project}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-muted-foreground">
                            {order.address}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{order.date}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge
                            variant="secondary"
                            className={getStatusColor(order.status)}
                          >
                            {order.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          {index === 4 && (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                >
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>Edit Order</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="lg:hidden">
                {orders.map((order, index) => (
                  <div
                    key={`${order.id}-${index}`}
                    className="p-4 border-b last:border-b-0"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Checkbox checked={order.selected} />
                        <div>
                          <div className="font-medium text-foreground">
                            {order.id}
                          </div>
                          <Badge
                            variant="secondary"
                            className={`${getStatusColor(order.status)} mt-1`}
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                      {index === 4 && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Order</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={order.user.avatar || "/placeholder.svg"}
                          alt={order.user.name}
                        />
                        <AvatarFallback>
                          {order.user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-foreground text-sm">
                          {order.user.name}
                        </div>
                        <div className="text-sm text-foreground">
                          {order.project}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground mb-2">
                      {order.address}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="default" size="sm" className="h-8 w-8 p-0">
                1
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                3
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                4
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                5
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
