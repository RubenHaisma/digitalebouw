"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, ShoppingCart, Search, Server } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Websites",
    description:
      "Wij ontwikkelen op maat gemaakte websites die perfect aansluiten bij uw merk en doelstellingen.",
    icon: Monitor,
    href: "/diensten/custom-websites",
  },
  {
    title: "E-commerce Oplossingen",
    description:
      "Professionele webshops met alle functionaliteiten die u nodig heeft om online te verkopen.",
    icon: ShoppingCart,
    href: "/diensten/e-commerce",
  },
  {
    title: "SEO Optimalisatie",
    description:
      "Verbeter uw online zichtbaarheid en bereik meer potentiële klanten met onze SEO-diensten.",
    icon: Search,
    href: "/diensten/seo",
  },
  {
    title: "Webhosting",
    description:
      "Betrouwbare en snelle hosting oplossingen voor een optimale website performance.",
    icon: Server,
    href: "/diensten/webhosting",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Onze Diensten</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Wij bieden een compleet pakket aan digitale diensten om uw online
            succes te garanderen.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link href={service.href}>Lees meer</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}