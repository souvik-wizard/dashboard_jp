import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { MainContent } from "./main-content";
import { NotificationsPanel } from "./notifications-panel";

export function Dashboard() {
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
        <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          onMenuClick={() => setIsMobileMenuOpen(true)}
          showMenuButton={isMobile}
        />
        <div className="flex-1 flex overflow-hidden">
          <MainContent />
          <div className="hidden xl:block overflow-auto">
            <NotificationsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
