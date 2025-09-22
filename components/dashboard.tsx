import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { MainContent } from "./main-content";
import { NotificationsPanel } from "./notifications-panel";

export function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        // keep collapsed state only for desktop; when switching to desktop we keep it as-is
      } else {
        // if we become mobile, reset collapsed so mobile overlay behaves normally
        setCollapsed(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    // allow the document to scroll vertically; keep the dashboard full-height layout
    <div className="flex min-h-screen bg-background h-screen">
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

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          onMenuClick={() => setIsMobileMenuOpen(true)}
          showMenuButton={isMobile}
          onToggleCollapse={() => setCollapsed((s: boolean) => !s)}
          onToggleNotifications={() => setShowNotifications((s: boolean) => !s)}
        />
        <div className="flex-1 flex overflow-hidden">
          <MainContent />
        </div>
      </div>

      {showNotifications && (
        <>
          {/* Desktop: persistent panel */}
          <div className="hidden xl:block overflow-auto">
            <NotificationsPanel />
          </div>

          {/* Mobile: slide-over from right */}
          <div
            className={`fixed inset-y-0 right-0 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
              showNotifications ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <NotificationsPanel
              onClose={() => setShowNotifications(false)}
              className="w-screen max-w-sm"
            />
          </div>
        </>
      )}
    </div>
  );
}
