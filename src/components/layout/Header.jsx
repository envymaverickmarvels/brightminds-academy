"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="BrightMinds Academy Home"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-glow-primary transition-shadow duration-300">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gradient-primary">
                BrightMinds
              </span>
              <span className="block text-xs text-text-secondary-light dark:text-text-secondary-dark -mt-1">
                Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 animated-underline",
                  pathname === item.href
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                    : "text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-600 dark:hover:text-primary-400"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{SITE_CONFIG.phone}</span>
            </a>
            <Link href="/contact">
              <Button variant="gradient" size="default">
                Book Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-125 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="glass rounded-xl p-4 space-y-2">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                  pathname === item.href
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                    : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-muted-light dark:hover:bg-muted-dark"
                )}
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-border-light dark:border-border-dark my-2" />
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-text-secondary-light dark:text-text-secondary-dark"
            >
              <Phone className="w-5 h-5 text-primary-500" />
              {SITE_CONFIG.phone}
            </a>
            <Link href="/contact" className="block">
              <Button variant="gradient" className="w-full" size="lg">
                Book Free Demo Class
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}