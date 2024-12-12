"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce platform met geavanceerde filtering en zoekfuncties.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    category: "E-commerce",
  },
  {
    title: "Corporate Website",
    description: "Professionele website voor een internationaal bedrijf.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Corporate",
  },
  {
    title: "Webshop Mode",
    description: "Stijlvolle webshop voor een modebedrijf.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    category: "E-commerce",
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ons Portfolio</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ontdek onze recente projecten en zie hoe wij bedrijven helpen groeien met
            professionele websites.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block text-sm text-muted-foreground">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}