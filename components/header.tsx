import { Search, Star, Menu, Bell, Settings, History } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ThemeToggle } from "./theme-toggle";

interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function Header({ onMenuClick, showMenuButton }: HeaderProps) {
  return (
    <header className="h-14 border-b border-border bg-background flex items-center justify-between px-4">
      <div className="flex items-center gap-2 md:gap-4">
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

        <Button variant="ghost" size="sm" className="p-2 hidden sm:flex">
          <Menu className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" className="p-2 hidden sm:flex">
          <Star className="w-4 h-4" />
        </Button>

        <div className="text-sm text-muted-foreground hidden md:block">
          Dashboards / <span className="text-foreground">Default</span>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-2 md:mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-10 pr-10 bg-muted/50 text-sm"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 hidden sm:block">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
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
        <Button variant="ghost" size="sm" className="p-2 hidden sm:flex">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
