"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ClipboardList, Users, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Strategische Analyse",
    description: "We analyseren uw bedrijfsdoelen en marktpositie om een effectieve digitale strategie te ontwikkelen."
  },
  {
    icon: Users,
    title: "2. Maatwerk Ontwikkeling",
    description: "Ons team ontwikkelt een op maat gemaakte oplossing die perfect aansluit bij uw behoeften."
  },
  {
    icon: Rocket,
    title: "3. Implementatie",
    description: "We zorgen voor een soepele implementatie en training van uw team voor optimaal gebruik."
  },
  {
    icon: LineChart,
    title: "4. Groei & Optimalisatie",
    description: "Continue monitoring en optimalisatie om uw digitale prestaties te maximaliseren."
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ons Proces</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Een bewezen aanpak voor digitale transformatie in de bouwsector
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}