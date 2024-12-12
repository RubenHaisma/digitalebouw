"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Building2, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <Link href="/" className="font-bold">
            Digitalebouw.nl
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className={cn(navLinkClasses(pathname === "/"))}>
            Home
          </Link>
          <div className="relative group">
            <button className="inline-flex items-center text-sm font-medium transition-colors hover:text-accent">
              Diensten
            </button>
            <div className="absolute left-0 hidden w-48 mt-2 bg-background shadow-md group-hover:block">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/portfolio" className={cn(navLinkClasses(pathname === "/portfolio"))}>
            Portfolio
          </Link>
          {/* <Link href="/blog" className={cn(navLinkClasses(pathname === "/blog"))}>
            Blog
          </Link> */}
        </nav>

        {/* Mobile Navigation and Theme Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <button
            className="inline-flex items-center justify-center w-10 h-10 text-primary rounded-md focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Call to Action and Theme Toggle for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="default">
            <Link href="/contact">Gratis consult</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/" className={cn(navLinkClasses(pathname === "/"))}>
              Home
            </Link>
            <div>
              <button className="w-full text-left text-sm font-medium">
                Diensten
              </button>
              <ul className="mt-2 space-y-2 pl-4">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href} className="block text-sm hover:text-accent">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/portfolio" className={cn(navLinkClasses(pathname === "/portfolio"))}>
              Portfolio
            </Link>
            {/* <Link href="/blog" className={cn(navLinkClasses(pathname === "/blog"))}>
              Blog
            </Link> */}
            <Link href="/contact" className="block text-sm font-medium text-primary hover:text-accent">
              Gratis consult
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

const services = [
  {
    title: "Custom Websites",
    href: "/diensten/custom-websites",
  },
  {
    title: "E-commerce Oplossingen",
    href: "/diensten/e-commerce",
  },
  {
    title: "SEO Optimalisatie",
    href: "/diensten/seo",
  },
  {
    title: "Webhosting",
    href: "/diensten/webhosting",
  },
];

const navLinkClasses = (isActive: boolean) =>
  cn(
    "block text-sm font-medium transition-colors hover:text-accent",
    isActive && "text-accent"
  );
