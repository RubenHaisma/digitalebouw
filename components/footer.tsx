"use client";

import { Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold">Digitalebouw.nl</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Wij bouwen hoogwaardige websites op maat voor uw bedrijf.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/diensten/custom-websites" className="text-muted-foreground hover:text-foreground">
                  Custom Websites
                </Link>
              </li>
              <li>
                <Link href="/diensten/e-commerce" className="text-muted-foreground hover:text-foreground">
                  E-commerce Oplossingen
                </Link>
              </li>
              <li>
                <Link href="/diensten/seo" className="text-muted-foreground hover:text-foreground">
                  SEO Optimalisatie
                </Link>
              </li>
              <li>
                <Link href="/diensten/webhosting" className="text-muted-foreground hover:text-foreground">
                  Webhosting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Bedrijf</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/over-ons" className="text-muted-foreground hover:text-foreground">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground">
                  Portfolio
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Digitalebouw.nl. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}