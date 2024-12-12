"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';

const plans = [
  {
    name: "Starter",
    price: "999",
    description: "Perfect voor kleine bedrijven",
    features: [
      "Responsive website",
      "5 pagina's",
      "Contact formulier",
      "SEO basis optimalisatie",
      "3 maanden support",
    ],
  },
  {
    name: "Professional",
    price: "1999",
    description: "Voor groeiende ondernemingen",
    features: [
      "Alles uit Starter",
      "10 pagina's",
      "CMS systeem",
      "SSL certificaat",
      "6 maanden support",
      "Maandelijks onderhoud",
    ],
  },
  {
    name: "Enterprise",
    price: "Op maat",
    description: "Voor grote organisaties",
    features: [
      "Alles uit Professional",
      "Onbeperkt pagina's",
      "E-commerce integratie",
      "API koppelingen",
      "24/7 support",
      "Maandelijks SEO rapport",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Transparante Prijzen</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Kies het pakket dat het beste bij uw bedrijf past.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative h-full p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">€{plan.price}</span>
                    {plan.price !== "Op maat" && <span className="text-muted-foreground">/eenmalig</span>}
                  </div>
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button className="px-6 py-2">Neem Contact Op</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}