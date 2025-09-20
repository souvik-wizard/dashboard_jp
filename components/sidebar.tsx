import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "./lib/utils";

interface SidebarItem {
  name: string;
  active: boolean;
  href?: string;
  children?: SidebarItem[];
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const sidebarItems: SidebarSection[] = [
  {
    title: "Favorites",
    items: [
      { name: "Overview", active: false },
      { name: "Projects", active: false },
    ],
  },
  {
    title: "Recently",
    items: [],
  },
  {
    title: "Dashboards",
    items: [
      { name: "Default", active: true, href: "/" },
      { name: "eCommerce", active: false, href: "/" },
      { name: "Projects", active: false, href: "/" },
      { name: "Online Courses", active: false, href: "/" },
    ],
  },
  {
    title: "Orders",
    items: [{ name: "Order List", active: false, href: "/orders" }],
  },
  {
    title: "Pages",
    items: [
      {
        name: "User Profile",
        active: false,
        children: [
          { name: "Overview", active: false },
          { name: "Projects", active: false },
          { name: "Campaigns", active: false },
          { name: "Documents", active: false },
          { name: "Followers", active: false },
        ],
      },
      { name: "Account", active: false },
      { name: "Corporate", active: false },
      { name: "Blog", active: false },
      { name: "Social", active: false },
    ],
  },
];

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "User Profile",
  ]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
          <span className="font-semibold text-sidebar-foreground">ByeWind</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-sidebar-accent rounded-md"
          >
            <X className="w-5 h-5 text-sidebar-foreground" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        {sidebarItems.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors",
                        item.active
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )}
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-1 h-1 bg-current rounded-full opacity-60"></div>
                      </div>
                      <span className="truncate">{item.name}</span>
                    </Link>
                  ) : (
                    <div
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors",
                        item.active
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )}
                      onClick={() => item.children && toggleExpanded(item.name)}
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        {item.children ? (
                          expandedItems.includes(item.name) ? (
                            <ChevronDown className="w-3 h-3" />
                          ) : (
                            <ChevronRight className="w-3 h-3" />
                          )
                        ) : (
                          <div className="w-1 h-1 bg-current rounded-full opacity-60"></div>
                        )}
                      </div>
                      <span className="truncate">{item.name}</span>
                    </div>
                  )}
                  {item.children && expandedItems.includes(item.name) && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <div
                          key={child.name}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors",
                            child.active
                              ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                              : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                          )}
                        >
                          <div className="w-1 h-1 bg-current rounded-full opacity-60"></div>
                          <span className="truncate">{child.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
