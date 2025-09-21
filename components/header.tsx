import { Bell, History, Menu, Search, Star } from "lucide-react";
import { PiSidebar } from "react-icons/pi";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  onToggleCollapse?: () => void;
  onToggleNotifications?: () => void;
}

export function Header({
  onMenuClick,
  showMenuButton,
  onToggleCollapse,
  onToggleNotifications,
}: HeaderProps) {
  return (
    <header className="h-14 border-b border-border bg-background flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        {showMenuButton && (
          <Button
            variant="ghost"
            size="sm"
            className="p-2 lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="w-4 h-4" />
          </Button>
        )}

        {/* Desktop collapse toggle: visible on desktop, hidden on mobile */}
        <Button
          variant="ghost"
          size="sm"
          className="p-2 hidden lg:flex"
          onClick={() => onToggleCollapse && onToggleCollapse()}
        >
          <PiSidebar className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" className="p-2 hidden sm:flex">
          <Star className="w-4 h-4" />
        </Button>

        <div className="text-sm text-muted-foreground hidden md:block">
          Dashboards / <span className="text-foreground">Default</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-1 w-[180px] mx-2 bg-muted/80 rounded-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-10 pr-10 bg-muted text-sm border-none"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 hidden sm:block">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                ⌘/
              </kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="p-2 hidden sm:flex">
            <History className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hidden sm:flex"
            onClick={() => onToggleNotifications && onToggleNotifications()}
          >
            <PiSidebar className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
