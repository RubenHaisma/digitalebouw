"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Snelle Laadtijden",
    description: "Geoptimaliseerde websites voor maximale snelheid en prestaties.",
  },
  {
    icon: Shield,
    title: "Veilig & Betrouwbaar",
    description: "Hoogste beveiligingsstandaarden voor uw online aanwezigheid.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Altijd bereikbaar voor ondersteuning en onderhoud.",
  },
  {
    icon: Users,
    title: "Ervaren Team",
    description: "Experts met jarenlange ervaring in webontwikkeling.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Waarom Digitalebouw.nl?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ontdek waarom bedrijven voor ons kiezen als hun partner in digitale groei.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}