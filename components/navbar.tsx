"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Building2 } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold">Digitalebouw.nl</span>
        </div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
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
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === "/blog" && "bg-accent/50"
                  )}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="default">
            <Link href="/contact">Gratis Consultatie</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

const services = [
  {
    title: "Custom Websites",
    description: "Op maat gemaakte websites die perfect aansluiten bij uw merk en doelstellingen.",
    href: "/diensten/custom-websites",
  },
  {
    title: "E-commerce Oplossingen",
    description: "Professionele webshops met alle functionaliteiten die u nodig heeft.",
    href: "/diensten/e-commerce",
  },
  {
    title: "SEO Optimalisatie",
    description: "Verbeter uw online zichtbaarheid en bereik meer potentiële klanten.",
    href: "/diensten/seo",
  },
  {
    title: "Webhosting",
    description: "Betrouwbare en snelle hosting oplossingen voor uw website.",
    href: "/diensten/webhosting",
  },
];