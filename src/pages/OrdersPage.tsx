import {
  ArrowUpDown,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Dot,
  ListFilter,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { NotificationsPanel } from "../../components/notifications-panel";
// Replaced Avatar component with native <img> tags for simpler local image handling
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Input } from "../../components/ui/input";

const initialOrders = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "/images/DP1.png",
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
      avatar: "/images/DP2.png",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    selected: false,
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/images/DP3.png" },
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
      avatar: "/images/DP4.png",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    selected: true,
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/images/DP5.png" },
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
      avatar: "/images/DP1.png",
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
      avatar: "/images/DP2.png",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    selected: false,
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/images/DP3.png" },
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
      avatar: "/images/DP4.png",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    selected: false,
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/images/DP5.png" },
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
      return "text-[#8A8CD9]";
    case "Complete":
      return "text-[#4AA785]";
    case "Pending":
      return "text-[#59A8D4]";
    case "Approved":
      return "text-[#FFC555]";
    case "Rejected":
      return "text-[#1C1C1C66] dark:text-[#FFFFFF66]";
    default:
      return "text-gray-500/60  dark:text-gray-300/50";
  }
};

export default function OrdersPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);
  const [orders, setOrders] = useState(initialOrders);

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
        <Sidebar
          onClose={() => setIsMobileMenuOpen(false)}
          collapsed={collapsed}
        />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header
          onMenuClick={() => setIsMobileMenuOpen(true)}
          showMenuButton={isMobile}
          onToggleCollapse={() => setCollapsed((s: boolean) => !s)}
          onToggleNotifications={() => setShowNotifications((s: boolean) => !s)}
        />

        <main className="flex-1 overflow-auto p-3 md:p-6">
          <div className="space-y-4 md:space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl md:text-2xl font-semibold text-foreground">
                Order List
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-muted/50 dark:bg-[#FFFFFF0D] border border-transparent dark:border-transparent p-2 rounded-md">
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  size="sm"
                  className="h-8 bg-transparent hover:cursor-pointer "
                  variant="ghost"
                >
                  <Plus className="w-6 h-6 text-muted-foreground dark:text-muted-foreground/60" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 bg-transparent hover:cursor-pointer"
                >
                  <ListFilter className="w-6 h-6 text-muted-foreground dark:text-muted-foreground/60" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 bg-transparent hover:cursor-pointer "
                >
                  <ArrowUpDown className="w-6 h-6 text-muted-foreground dark:text-muted-foreground/60" />
                </Button>
              </div>

              <div className="relative w-full sm:w-auto ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground/30 dark:text-muted-foreground/40" />
                <Input
                  placeholder="Search"
                  className="pl-9 w-full sm:w-64 bg-transparent shadow-none border border-border/10 dark:border-border focus:ring-0 placeholder:text-muted-foreground/30 dark:placeholder:text-muted-foreground/40 dark:bg-[#10101066]"
                />
              </div>
            </div>

            <div className=" overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="">
                    <tr className="border-b">
                      <th className="text-left p-4 font-light text-muted-foreground">
                        <Checkbox />
                      </th>
                      <th className="text-left p-4 font-thin text-sm text-muted-foreground">
                        Order ID
                      </th>
                      <th className="text-left p-4 font-thin text-sm text-muted-foreground">
                        User
                      </th>
                      <th className="text-left p-4 font-thin text-sm text-muted-foreground">
                        Project
                      </th>
                      <th className="text-left p-4 font-thin text-sm text-muted-foreground">
                        Address
                      </th>
                      <th className="text-left p-4 font-thin text-sm text-muted-foreground">
                        Date
                      </th>
                      <th className="text-left p-4 font-thin text-sm text-muted-foreground">
                        Status
                      </th>
                      <th className="text-left p-4 font-thin text-sm text-muted-foreground"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr
                        key={`${order.id}-${index}`}
                        className="border-b hover:bg-muted/30 transition-colors group"
                      >
                        <td className="p-4">
                          <Checkbox
                            checked={order.selected}
                            onCheckedChange={(v) => {
                              setOrders((prev) => {
                                const copy = [...prev];
                                copy[index] = { ...copy[index], selected: !!v };
                                return copy;
                              });
                            }}
                            className={`transition-opacity duration-150 ${
                              order.selected
                                ? "opacity-100 pointer-events-auto"
                                : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                            }`}
                          />
                        </td>
                        <td className="p-4">
                          <span className="text-foreground">{order.id}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={
                                order.user.avatar ||
                                "/assets/images/placeholder.png"
                              }
                              alt={order.user.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <span className="text-foreground">
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
                            variant="noOutline"
                            className={getStatusColor(order.status)}
                          >
                            <Dot
                              size={20}
                              strokeWidth={6}
                              absoluteStrokeWidth
                            />
                            {order.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          {index === 4 && (
                            <DropdownMenu>
                              <DropdownMenuTrigger>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                >
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>Edit Order</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600 hover:bg-red-100 hover:text-red-600">
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
                    className="p-4 border-b last:border-b-0 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={order.selected}
                          onCheckedChange={(v) => {
                            setOrders((prev) => {
                              const copy = [...prev];
                              copy[index] = { ...copy[index], selected: !!v };
                              return copy;
                            });
                          }}
                          className={`transition-opacity duration-150 ${
                            order.selected
                              ? "opacity-100 pointer-events-auto"
                              : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                          }`}
                        />
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
                          <DropdownMenuTrigger>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
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
                      <img
                        src={
                          order.user.avatar || "/assets/images/placeholder.png"
                        }
                        alt={order.user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
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
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="default" size="sm" className="h-8 w-8 p-0">
                1
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                2
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                3
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                4
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                5
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>
      {showNotifications && (
        <div className="hidden xl:block overflow-auto">
          <NotificationsPanel />
        </div>
      )}
    </div>
  );
}
