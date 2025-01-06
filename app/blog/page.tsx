"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, Edit, FileText, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Blog posts data (simulated, you would usually fetch this from a database or file)
const blogPosts = [
  {
    slug: "hoe-bouw-je-een-seo-vriendelijke-website",
    title: "Hoe bouw je een SEO-vriendelijke website?",
    description: "Ontdek de beste manieren om je website SEO-vriendelijk te maken voor betere zoekmachine resultaten.",
  },
  {
    slug: "maatwerkwebsites-vs-templates",
    title: "Maatwerkwebsites versus Templates",
    description: "Waarom maatwerkwebsites beter zijn dan standaard templates voor je bedrijf.",
  },
  {
    slug: "hoe-kies-je-het-juiste-webdesign",
    title: "Hoe kies je het juiste webdesign voor je bedrijf?",
    description: "Een gids voor het kiezen van het juiste webdesign dat bij je merk en doelgroep past.",
  },
  {
    slug: "goedkope-en-unieke-websitebouwers",
    title: "Goedkope en unieke websitebouwers",
    description: "Op zoek naar een betaalbare websitebouwer die toch unieke en professionele websites levert?",
  },
  {
    slug: "waarom-ecommerce-websites-onmisbaar-is",
    title: "Waarom ecommerce websites onmisbaar is",
    description: "Ontdek waarom een professionele ecommerce website essentieel is voor de groei van je bedrijf.",
  },
  {
    slug: "de-juiste-website-voor-jouw-bedrijf",
    title: "De juiste website voor jouw bedrijf",
    description: "Ontdek welke website het beste past bij jouw bedrijf, van zakelijke websites tot portfolio's en evenementwebsites.",
  },
];

export default function BlogOverview() {
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
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Blog Overzicht</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Bekijk onze nieuwste blogposts over webdesign, SEO-optimalisatie en meer!
              </p>
            </motion.div>

            {/* Blog Posts Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-64 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow duration-200">
                    <Book className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                    <p className="text-muted-foreground">{post.description}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button size="sm" className="mt-4">
                        Lees meer
                      </Button>
                    </Link>
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
