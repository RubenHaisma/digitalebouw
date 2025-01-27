"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary/5 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-background p-8 md:p-12 shadow-lg border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Building2 className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Klaar om uw digitale transformatie te starten?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Plan een vrijblijvend strategiegesprek en ontdek hoe wij uw bouwbedrijf kunnen helpen groeien met doelgerichte digitale oplossingen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contact">
                  Plan Strategiegesprek
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/portfolio">Bekijk Onze Cases</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}