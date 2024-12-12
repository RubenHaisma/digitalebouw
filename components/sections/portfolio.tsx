"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "AI-aangedreven E-commerce",
    description:
      "Een next-gen e-commerce platform met AI-aanbevelingen en razendsnelle afrekenprocessen.",
    image:
      "https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpfGVufDB8fDB8fHww",
    category: "AI E-commerce",
  },
  {
    title: "Interactieve Corporate Website",
    description:
      "Een indrukwekkende bedrijfswebsite met 3D-visualisaties, interactieve grafieken en WebGL-animaties.",
    image:
      "https://plus.unsplash.com/premium_photo-1711132342557-9a81847c7d0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFpJTIwZWNvbW1lcmNlfGVufDB8fDB8fHww",
    category: "Corporate",
  },
  {
    title: "SaaS",
    description:
      "Een SaaS-platform met realtime analyses, live datastreaming en een moderne dark mode interface.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FhcyUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "SaaS",
  }
];

export function PortfolioSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Wat wij bouwen</h2>
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
          <div className="col-span-full">
            <p className="text-center text-muted-foreground">
              En nog veel meer...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}