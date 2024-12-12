"use client";

import React from 'react';
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

const team = [
  {
    name: "Jan de Vries",
    role: "Oprichter & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Lisa Bakker",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Mark Jansen",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
  },
];

export default function AboutUs() {
  return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="py-20">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl font-bold mb-6">Over Ons</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Wij zijn een team van gepassioneerde experts die digitale oplossingen bouwen
                  die uw bedrijf laten groeien.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-center">
                      <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <div className="text-3xl font-bold mb-2">{stat.value}</div>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Ons Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {team.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden">
                        <div className="relative h-64">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                          <p className="text-muted-foreground">{member.role}</p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}