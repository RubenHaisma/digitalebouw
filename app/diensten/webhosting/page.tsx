"use client";

import { motion } from "framer-motion";
import { Server, Shield, Gauge, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: Server,
    title: "Snelle Servers",
    description: "High-performance hosting voor optimale prestaties.",
  },
  {
    icon: Shield,
    title: "Dagelijkse Backups",
    description: "Automatische backups voor maximale veiligheid.",
  },
  {
    icon: Gauge,
    title: "99.9% Uptime",
    description: "Gegarandeerde beschikbaarheid van uw website.",
  },
  {
    icon: HeartPulse,
    title: "24/7 Monitoring",
    description: "Continue bewaking van uw website.",
  },
];

export default function Webhosting() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold mb-6">Webhosting</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Betrouwbare en snelle hosting oplossingen voor uw website.
              </p>
            </motion.div>

            {/* Features Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-64 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow duration-200">
                    <feature.icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call-to-Action Section */}
            <div className="text-center">
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
