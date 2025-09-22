import React, { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Folder,
  PieChart,
  ShoppingBag,
  ShoppingCart,
  X,
} from "lucide-react";
import { GoDotFill } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import {
  PiChatsCircle,
  PiIdentificationBadgeDuotone,
  PiIdentificationCardDuotone,
  PiNotebookLight,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { cn } from "./lib/utils";

type IconType = React.ComponentType<Record<string, unknown>>;

interface SidebarItem {
  name: string;
  active: boolean;
  href?: string;
  children?: SidebarItem[];
  icon?: IconType;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const sidebarItems: SidebarSection[] = [
  {
    title: "Favorites",
    items: [
      { name: "Overview", active: false, icon: GoDotFill },
      { name: "Projects", active: false, icon: GoDotFill },
    ],
  },
  { title: "Recently", items: [] },
  {
    title: "Dashboards",
    items: [
      {
        name: "Default",
        active: true,
        href: "/",
        icon: PieChart,
        children: [
          { name: "Summary", active: false },
          { name: "Details", active: false },
        ],
      },
      {
        name: "eCommerce",
        active: false,
        href: "/",
        icon: ShoppingBag,
        children: [
          { name: "Sales", active: false },
          { name: "Customers", active: false },
        ],
      },
      {
        name: "Projects",
        active: false,
        href: "/",
        icon: Folder,
        children: [
          { name: "Active", active: false },
          { name: "Archived", active: false },
        ],
      },
      {
        name: "Online Courses",
        active: false,
        href: "/",
        icon: BookOpen,
        children: [
          { name: "Enrolled", active: false },
          { name: "Completed", active: false },
        ],
      },
    ],
  },
  {
    title: "Orders",
    items: [
      {
        name: "Order List",
        active: false,
        href: "/orders",
        icon: ShoppingCart,
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        name: "User Profile",
        active: false,
        icon: PiIdentificationBadgeDuotone,
        children: [
          { name: "Overview", active: false },
          { name: "Projects", active: false },
          { name: "Campaigns", active: false },
          { name: "Documents", active: false },
          { name: "Followers", active: false },
        ],
      },
      {
        name: "Account",
        active: false,
        icon: PiIdentificationCardDuotone,
        children: [
          { name: "Settings", active: false },
          { name: "Security", active: false },
        ],
      },
      {
        name: "Corporate",
        active: false,
        icon: GrGroup,
        children: [
          { name: "Teams", active: false },
          { name: "Partners", active: false },
        ],
      },
      {
        name: "Blog",
        active: false,
        icon: PiNotebookLight,
        children: [
          { name: "Posts", active: false },
          { name: "Comments", active: false },
        ],
      },
      {
        name: "Social",
        active: false,
        icon: PiChatsCircle,
        children: [
          { name: "Messages", active: false },
          { name: "Groups", active: false },
        ],
      },
    ],
  },
];

interface SidebarProps {
  onClose?: () => void;
  collapsed?: boolean;
}

export function Sidebar({ onClose, collapsed }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "User Profile",
  ]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((n) => n !== itemName)
        : [...prev, itemName]
    );
  };

  const renderIcon = (Icon?: IconType, props?: Record<string, unknown>) => {
    if (!Icon) return null;
    return React.createElement(Icon, props || {});
  };

  // helper to render a single item (Link or button-like)
  const renderItem = (item: SidebarItem) => {
    const baseClasses = cn(
      collapsed
        ? "flex items-center justify-center p-2 rounded-lg text-sm cursor-pointer transition-colors"
        : "flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors",
      item.active
        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
    );

    const iconNode = (
      <div className="w-6 h-6 flex items-center justify-center">
        {item.icon ? (
          renderIcon(item.icon, {
            className: cn(
              collapsed
                ? "w-4 h-4"
                : "w-5 h-5 text-[#1C1C1C33] dark:text-[#FFFFFF33]"
            ),
          })
        ) : collapsed ? (
          <div className="w-1 h-1 bg-current rounded-full opacity-60" />
        ) : null}
      </div>
    );

    const chevronNode = () => {
      if (!item.children || collapsed) return null;
      return (
        <div className="ml-auto pl-2 relative flex items-center">
          {/* active indicator: a thin vertical bar placed just left of the chevron */}
          {item.active && (
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-0.5 bg-[var(--foreground)] rounded-sm" />
          )}
          <div className="pl-3">
            {expandedItems.includes(item.name)
              ? renderIcon(ChevronDown, {
                  className: "w-4 h-4 text-muted-foreground",
                })
              : renderIcon(ChevronRight, {
                  className: "w-4 h-4 text-muted-foreground",
                })}
          </div>
        </div>
      );
    };

    if (item.href) {
      return (
        <Link to={item.href} className={baseClasses}>
          {chevronNode()}
          {iconNode}
          {!collapsed && <span className="truncate flex-1">{item.name}</span>}
        </Link>
      );
    }

    return (
      <div
        className={baseClasses}
        onClick={() => item.children && toggleExpanded(item.name)}
      >
        {chevronNode()}
        {iconNode}
        {!collapsed && <span className="truncate flex-1">{item.name}</span>}
      </div>
    );
  };

  return (
    <div
      className={cn(
        collapsed
          ? "w-16 bg-sidebar border-r border-sidebar-border flex flex-col h-full"
          : "w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-full"
      )}
    >
      {/* Logo */}
      <div className="p-4 border-sidebar-border flex items-center justify-between">
        <div
          className={
            collapsed
              ? "flex items-center justify-center w-full"
              : "flex items-center gap-2"
          }
        >
          <div
            className={
              collapsed
                ? "w-8 h-8 flex items-center justify-center"
                : "w-6 h-6 bg-white rounded-full flex items-center justify-center"
            }
          >
            <img src="images/User.png" alt="userlogo" />
          </div>
          {!collapsed && (
            <span className=" text-sidebar-foreground">ByeWind</span>
          )}
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-sidebar-accent rounded-md"
          >
            {renderIcon(X, { className: "w-5 h-5 text-sidebar-foreground" })}
          </button>
        )}
      </div>

      {/* Navigation */}
      <div
        className={cn(
          collapsed
            ? "flex-1 overflow-y-auto p-2"
            : "flex-1 overflow-y-auto p-4"
        )}
      >
        {/* Render Favorites and Recently in a two-column tab when expanded */}
        {!collapsed &&
        sidebarItems[0] &&
        sidebarItems[1] &&
        sidebarItems[0].title === "Favorites" ? (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-muted-foreground  tracking-wider">
                {sidebarItems[0].title}
              </h3>
              <h3 className="text-sm text-muted-foreground/40  tracking-wider mr-2">
                {sidebarItems[1].title}
              </h3>
            </div>

            <div>
              <div className="space-y-1">
                {sidebarItems[0].items.map((item) => (
                  <div key={item.name}>{renderItem(item)}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="space-y-1">
                {sidebarItems[1].items.map((item) => (
                  <div key={item.name}>{renderItem(item)}</div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // collapsed or not present: render the first section normally
          sidebarItems[0] && (
            <div className={cn(collapsed ? "mb-4" : "mb-6")}>
              {!collapsed && (
                <h3 className=" text-muted-foreground tracking-wider mb-3">
                  {sidebarItems[0].title}
                </h3>
              )}
              <div className={cn(collapsed ? "space-y-2" : "space-y-1")}>
                {sidebarItems[0].items.map((item) => (
                  <div key={item.name}>{renderItem(item)}</div>
                ))}
              </div>
            </div>
          )
        )}

        {/* Render remaining sections skipping Recently (idx 1) since handled above */}
        {sidebarItems.slice(2).map((section) => (
          <div key={section.title} className={cn(collapsed ? "mb-4" : "mb-6")}>
            {!collapsed && (
              <h3 className="text-sm font-medium text-muted-foreground  tracking-wider mb-3">
                {section.title}
              </h3>
            )}

            <div className={cn(collapsed ? "space-y-2" : "space-y-1")}>
              {section.items.map((item) => (
                <div key={item.name}>
                  {renderItem(item)}

                  {item.children &&
                    expandedItems.includes(item.name) &&
                    !collapsed && (
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
