"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, Code, Globe, Monitor, PenTool } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogContent = {
  title: "Hoe Bouw je een SEO-vriendelijke Website?",
  description: "In deze gids leer je hoe je een website bouwt die zoekmachine-optimalisatie (SEO) maximaliseert en zorgt voor hogere rankings.",
  sections: [
    {
      heading: "Wat is SEO en waarom is het belangrijk?",
      content:
        "SEO, of zoekmachine-optimalisatie, is het proces van het verbeteren van de zichtbaarheid van je website in zoekmachines zoals Google. Wanneer je website goed geoptimaliseerd is voor SEO, wordt deze gemakkelijker gevonden door mensen die zoektermen gebruiken die gerelateerd zijn aan jouw diensten of producten. Dit resulteert in meer organisch verkeer, wat kan leiden tot hogere conversies en verkoopcijfers."
    },
    {
      heading: "De Belangrijkste SEO-elementen voor een Website",
      content:
        "Er zijn verschillende belangrijke elementen die je moet optimaliseren om een SEO-vriendelijke website te creëren. Deze elementen omvatten technische SEO, on-page SEO, en contentstrategie. Elke van deze elementen speelt een cruciale rol in hoe zoekmachines jouw website rangschikken. Hieronder bespreken we deze elementen in detail."
    },
    {
      heading: "Technische SEO: De Basisprincipes",
      content:
        "Technische SEO gaat over de optimalisatie van de technische aspecten van je website die zoekmachines helpen om je site te crawlen en te indexeren. Belangrijke technische SEO-elementen zijn: \n\n" +
        "- Mobielvriendelijkheid: Zorg ervoor dat je website goed werkt op mobiele apparaten, aangezien Google mobiel-vriendelijkheid als een rankingfactor beschouwt.\n" +
        "- Laadsnelheid: Een snelle website is cruciaal voor zowel gebruikerservaring als SEO. Google heeft sneller ladende sites liever.\n" +
        "- SSL-certificaten: Beveiligde websites (met HTTPS) krijgen een hogere voorkeur van Google. Zorg ervoor dat je website een SSL-certificaat heeft."
    },
    {
      heading: "On-page SEO: Optimalisatie van Pagina-inhoud",
      content:
        "On-page SEO heeft te maken met de optimalisatie van de inhoud op je pagina's, inclusief tekst, afbeeldingen, en meta-informatie. Het draait om het structureren van je pagina's zodat ze zowel gebruikers als zoekmachines aanspreken. Dit omvat:\n\n" +
        "- Zoekwoordoptimalisatie: Kies de juiste zoekwoorden en gebruik ze op strategische plaatsen zoals in de paginatitels, koppen, URL's en metatags.\n" +
        "- Koppen en Subkoppen: Gebruik koppen (H1, H2, H3) om de inhoud goed te structureren en zoekwoorden op natuurlijke wijze in te voegen.\n" +
        "- Afbeeldingen Optimaliseren: Zorg ervoor dat afbeeldingen geoptimaliseerd zijn voor zowel laadsnelheid als zoekmachineindexering, inclusief alt-teksten die beschrijvend en relevant zijn."
    },
    {
      heading: "Contentstrategie: Waardevolle en Relevante Inhoud",
      content:
        "Content is koning als het gaat om SEO. Het is niet genoeg om alleen maar zoekwoorden in je teksten te stoppen. Je moet inhoud bieden die waardevol is voor je lezers. Dit omvat:\n\n" +
        "- Relevantie: Schrijf over onderwerpen die direct verband houden met je producten of diensten en die inspelen op de zoekintentie van je doelgroep.\n" +
        "- Lengte van de inhoud: Langere inhoud (minimaal 1500 woorden) heeft de neiging beter te ranken, maar zorg ervoor dat de inhoud waarde toevoegt en niet onnodig wordt verlengd.\n" +
        "- Regelmatige updates: Google geeft de voorkeur aan verse inhoud. Update regelmatig je blogposts en pagina's om ze relevant te houden."
    },
    {
      heading: "Conclusie: De Sleutels tot een SEO-vriendelijke Website",
      content:
        "Het bouwen van een SEO-vriendelijke website vereist zowel technische expertise als inhoudelijke creativiteit. Door te focussen op zowel technische SEO, on-page optimalisatie, en waardevolle content, kun je de zichtbaarheid van je website in zoekmachines verbeteren en de kans op succes vergroten."
    }
  ]
};

export default function BlogPost() {
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
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{blogContent.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {blogContent.description}
              </p>
            </motion.div>

            {/* Content Sections */}
            <div className="space-y-12">
              {blogContent.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{section.heading}</h2>
                  <p className="text-muted-foreground">{section.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Call-to-Action Section */}
            <div className="text-center mt-16">
              <Link href="/contact">
                <Button size="lg" className="px-6 py-3 text-lg font-semibold">
                  Neem contact op
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
