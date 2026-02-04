"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label={`Current theme: ${theme}. Click to change.`}
      className="relative"
    >
      <Sun
        className={`h-5 w-5 transition-all ${
          resolvedTheme === "light" && theme !== "system"
            ? "rotate-0 scale-100"
            : "rotate-90 scale-0"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all ${
          resolvedTheme === "dark" && theme !== "system"
            ? "rotate-0 scale-100"
            : "-rotate-90 scale-0"
        }`}
      />
      <Monitor
        className={`absolute h-5 w-5 transition-all ${
          theme === "system" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
    </Button>
  );
}