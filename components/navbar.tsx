"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Building2, Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
        <div className="hidden md:flex flex-grow justify-center ml-14"> {/* Added ml-4 for margin-left */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-4"> {/* Added space-x-4 for spacing */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      pathname === "/" && "bg-accent/50"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Diensten</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      pathname === "/portfolio" && "bg-accent/50"
                    )}
                  >
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      pathname === "/blog" && "bg-accent/50"
                    )}
                  >
                    Blog
                  </NavigationMenuLink>
                </Link> */}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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
            <Link href="/" className={cn(navLinkClasses(pathname === "/"))} onClick={closeMobileMenu}>
              Home
            </Link>
            <div>
              <button className="w-full text-left text-sm font-medium">
                Diensten
              </button>
              <ul className="mt-2 space-y-2 pl-4">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href} className="block text-sm hover:text-accent" onClick={closeMobileMenu}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/portfolio" className={cn(navLinkClasses(pathname === "/portfolio"))} onClick={closeMobileMenu}>
              Portfolio
            </Link>
            {/* <Link href="/blog" className={cn(navLinkClasses(pathname === "/blog"))} onClick={closeMobileMenu}>
              Blog
            </Link> */}
            <Link href="/contact" className="block text-sm font-medium text-primary hover:text-accent" onClick={closeMobileMenu}>
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
    description: "Custom website development services",
  },
  {
    title: "E-commerce Oplossingen",
    href: "/diensten/e-commerce",
    description: "E-commerce solutions for your business",
  },
  {
    title: "SEO Optimalisatie",
    href: "/diensten/seo",
    description: "SEO optimization services for your website",
  },
  {
    title: "Webhosting",
    href: "/diensten/webhosting",
    description: "Reliable web hosting services for your website",
  },
];

const navLinkClasses = (isActive: boolean) =>
  cn(
    "block text-sm font-medium transition-colors hover:text-accent",
    isActive && "text-accent"
  );
