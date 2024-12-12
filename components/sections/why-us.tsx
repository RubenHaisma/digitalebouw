"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    title: "Snelle Laadtijden",
    description: "Geoptimaliseerde websites voor maximale snelheid en prestaties.",
    icon: Zap,
  },
  {
    title: "Veilig & Betrouwbaar",
    description: "Hoogste beveiligingsstandaarden voor uw online aanwezigheid.",
    icon: Shield,
  },
  {
    title: "24/7 Support",
    description: "Altijd bereikbaar voor ondersteuning en onderhoud.",
    icon: Clock,
  },
  {
    title: "Ervaren Team",
    description: "Experts met jarenlange ervaring in webontwikkeling.",
    icon: Users,
  },
];

export function WhyUsSection() {
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
          <h2 className="mb-4 text-4xl font-extrabold text-primary">
            Waarom Digitalebouw.nl?
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Ontdek waarom bedrijven voor ons kiezen als hun partner in digitale groei.
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
              <Card className="h-full flex flex-col items-center justify-between text-center shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 rounded-lg overflow-hidden">
                <CardHeader className="flex flex-col items-center justify-center mt-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 text-lg font-bold text-cyan">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4 mb-6 w-full px-6"></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
