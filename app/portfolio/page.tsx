"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/portfolio/project-card";
import { WebsitePreview } from "@/components/portfolio/website-preview";

const projects = [
  {
    title: "De Luchtwacht",
    description: "Een moderne website voor een toonaangevend luchtvaartbedrijf.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=400&fit=crop",
    url: "https://deluchtwacht.nl",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Duo Compensatie",
    description: "Platform voor het aanvragen van studiefinanciering compensatie.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    url: "https://duocompensatie.nl",
    technologies: ["React", "TypeScript", "Material UI"],
  },
  {
    title: "Financial Times",
    description: "Geavanceerd financieel nieuws- en analyseplatform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    url: "https://financialtimes.io",
    technologies: ["Vue.js", "Nuxt", "TailwindCSS"],
  },
  {
    title: "Klimaat Afdruk",
    description: "Innovatief platform voor het meten van CO2-uitstoot.",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=400&fit=crop",
    url: "https://klimaatafdruk.nl",
    technologies: ["Next.js", "GraphQL", "Prisma"],
  },
];

export default function Portfolio() {
  const [selectedUrl, setSelectedUrl] = useState(projects[0].url);

  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Ons Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ontdek onze succesvolle projecten en zie hoe wij bedrijven helpen groeien
              met professionele websites.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard
                  {...project}
                  isSelected={selectedUrl === project.url}
                  onSelect={() => setSelectedUrl(project.url)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <WebsitePreview url={selectedUrl} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}