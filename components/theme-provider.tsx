/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableSystem?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;

    // Determine the actual theme to apply
    const actualTheme =
      theme === "system" && enableSystem
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    // On initial load, apply theme without transitions
    if (isInitialLoad) {
      root.className = root.className
        .replace(/\b(light|dark|theme-transition|no-transition)\b/g, "")
        .trim();
      root.classList.add("no-transition", actualTheme);

      // Remove no-transition class after a minimal delay
      const timeoutId = setTimeout(() => {
        root.classList.remove("no-transition");
        setIsInitialLoad(false);
      }, 10);

      return () => clearTimeout(timeoutId);
    }

    // For subsequent theme changes, use requestAnimationFrame for smooth DOM updates
    let timeoutId: number;

    requestAnimationFrame(() => {
      // Add transition class and update theme in single batch
      root.className = root.className
        .replace(/\b(light|dark|theme-transition)\b/g, "")
        .trim();
      root.classList.add("theme-transition", actualTheme);

      // Remove transition class after animation completes
      timeoutId = window.setTimeout(() => {
        root.classList.remove("theme-transition");
      }, 200); // Reduced from 300ms to 200ms
    });

    return () => window.clearTimeout(timeoutId);
  }, [theme, enableSystem, isInitialLoad]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme === "system" && enableSystem) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        const root = window.document.documentElement;
        root.classList.add("theme-transition");
        root.classList.remove("light", "dark");

        const systemTheme = mediaQuery.matches ? "dark" : "light";
        root.classList.add(systemTheme);

        setTimeout(() => {
          root.classList.remove("theme-transition");
        }, 300);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme, enableSystem]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
