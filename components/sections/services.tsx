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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold text-primary">Onze Diensten</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Wij bieden een compleet pakket aan digitale diensten om uw online succes te garanderen.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col items-center justify-between text-center shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 rounded-lg overflow-hidden">
                <CardHeader className="flex flex-col items-center justify-center mt-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 text-lg font-bold text-cyan">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4 mb-6 w-full px-6">
                  <Button variant="secondary" className="w-full py-3" asChild>
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
