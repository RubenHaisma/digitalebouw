"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
  isSelected: boolean;
  onSelect: () => void;
}

export function ProjectCard({
  title,
  description,
  image,
  url,
  technologies,
  isSelected,
  onSelect,
}: ProjectCardProps) {
  return (
    <Card className={`overflow-hidden transition-all duration-300 ${
      isSelected ? "ring-2 ring-primary" : ""
    }`}>
      <div className="p-6 cursor-pointer" onClick={onSelect}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={onSelect}>
            Preview
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Bezoek Site
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}