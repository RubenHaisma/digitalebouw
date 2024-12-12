"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Settings, Globe, Smartphone, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Maatwerk websites die perfect aansluiten bij uw merk en doelstellingen.",
  },
  {
    icon: Palette,
    title: "Uniek Design",
    description: "Onderscheidende designs die uw merk laten opvallen.",
  },
  {
    icon: Zap,
    title: "Optimale Prestaties",
    description: "Snelle laadtijden en soepele gebruikerservaring.",
  },
  {
    icon: Settings,
    title: "Volledig Beheerbaar",
    description: "Gebruiksvriendelijk CMS voor eenvoudig onderhoud.",
  },
  {
    icon: Globe,
    title: "SEO-vriendelijk",
    description: "Verbeter uw zichtbaarheid online met een geoptimaliseerde website.",
  },
  {
    icon: Smartphone,
    title: "Mobielvriendelijk",
    description: "Responsieve websites die er geweldig uitzien op elk apparaat.",
  },
  {
    icon: Shield,
    title: "Veiligheid",
    description: "Geavanceerde beveiligingsfuncties om uw website te beschermen.",
  },
  {
    icon: Zap,
    title: "Schaalbaarheid",
    description: "Websites die meegroeien met uw bedrijf.",
  },
];

export default function CustomWebsites() {
  return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="py-20 bg-muted/50">
            <div className="container">
              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl font-bold mb-6 text-primary">Custom Websites</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Wij ontwikkelen op maat gemaakte websites die perfect aansluiten bij uw merk en doelstellingen.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-64 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg hover:translate-y-[-4px] transition-all duration-200 rounded-lg overflow-hidden">
                      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 text-primary rounded-full">
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Call-to-Action */}
              <div className="text-center mt-12">
                <Link href="/contact">
                  <Button size="lg" className="px-6 py-3 text-lg font-semibold">
                    Neem contact op
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}
