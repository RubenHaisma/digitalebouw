"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 w-full">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Wij bouwen jouw{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              online toekomst
            </span>
            <br />
            snel, betrouwbaar en op maat
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Transformeer uw online aanwezigheid met onze expertise in het bouwen
            van hoogwaardige, op maat gemaakte websites die uw bedrijf laten
            groeien.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">Gratis consult</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/quote">Prijs indicatie</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
    </section>
  );
}