"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Users, Award, Clock, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Tevreden Klanten",
  },
  {
    icon: Award,
    value: "10+",
    label: "Jaar Ervaring",
  },
  {
    icon: Clock,
    value: "250+",
    label: "Projecten Voltooid",
  },
  {
    icon: ThumbsUp,
    value: "99%",
    label: "Klanttevredenheid",
  },
];

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary/10 py-20">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-6 text-primary">Over Ons</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Wij zijn een team van gepassioneerde experts die digitale oplossingen bouwen
                die uw bedrijf laten groeien.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Onze Impact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Onze ervaring en expertise hebben een blijvende impact op onze klanten en projecten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-48 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                    <stat.icon className="w-12 h-12 mb-4 text-primary" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
