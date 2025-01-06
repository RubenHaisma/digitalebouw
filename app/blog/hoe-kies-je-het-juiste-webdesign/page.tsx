"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Palette, Code, Shield, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogContent = {
  title: "Hoe Kies je het Juiste Webdesign?",
  description: "Leer de belangrijkste factoren waarmee je rekening moet houden bij het kiezen van het juiste webdesign voor je bedrijf. Ontdek hoe je een website kiest die niet alleen visueel aantrekkelijk is, maar ook functioneel en gebruiksvriendelijk.",
  sections: [
    {
      heading: "Waarom Webdesign Belangrijk is voor je Bedrijf",
      content:
        "Een website is vaak het eerste contactpunt tussen een bedrijf en een potentiële klant. Het webdesign van je site kan het verschil maken tussen het aantrekken van nieuwe klanten of het verliezen van bezoekers aan je concurrenten. Een goed webdesign moet niet alleen visueel aantrekkelijk zijn, maar ook gebruiksvriendelijk, snel en geoptimaliseerd voor zoekmachines. Het is de basis voor een positieve gebruikerservaring (UX) en een goede online reputatie."
    },
    {
      heading: "1. Begrijp je Doelen en Doelgroep",
      content:
        "Voordat je begint met het kiezen van een webdesign, is het belangrijk om duidelijk te begrijpen wat je doelstellingen zijn en wie je doelgroep is. De keuze van het webdesign moet gebaseerd zijn op wat je wilt bereiken met je website en wie je wilt aantrekken.\n\n" +
        "- Wat zijn je zakelijke doelen?: Wil je meer leads genereren, producten verkopen, of je merkbekendheid vergroten? Je webdesign moet in lijn zijn met deze doelen.\n" +
        "- Wie is je doelgroep?: De behoeften en voorkeuren van je doelgroep moeten het ontwerp beïnvloeden. Een website voor een jongere doelgroep kan bijvoorbeeld speelser zijn, terwijl een zakelijke website meer formeel moet zijn."
    },
    {
      heading: "2. Kies het Juiste Type Webdesign",
      content:
        "Er zijn verschillende soorten webdesigns, afhankelijk van de aard van je bedrijf en je doelen. De twee belangrijkste soorten zijn:\n\n" +
        "- Statische websites: Deze websites bevatten vaste inhoud die niet vaak verandert. Ze zijn eenvoudig te maken, kosten minder, en kunnen geschikt zijn voor kleine bedrijven die geen frequente inhoudupdates nodig hebben.\n" +
        "- Dynamische websites: Deze websites bevatten interactieve elementen, zoals een blog, productcatalogus, of gebruikersaccounts. Ze zijn flexibeler en kunnen beter schalen naarmate je bedrijf groeit."
    },
    {
      heading: "3. Responsive Webdesign: Cruciaal voor Mobiele Gebruikers",
      content:
        "Met het groeiende aantal gebruikers die websites op hun mobiele apparaten bezoeken, is responsive webdesign essentieel. Een responsive ontwerp zorgt ervoor dat je website er goed uitziet en goed functioneert op alle apparaten, van desktops tot smartphones en tablets. Google beschouwt mobielvriendelijkheid als een belangrijke rankingfactor, dus het is cruciaal om een mobielvriendelijke website te hebben, zowel voor de gebruikerservaring als voor SEO."
    },
    {
      heading: "4. Gebruikerservaring (UX) en Navigatie",
      content:
        "De gebruikerservaring (UX) is een van de belangrijkste factoren bij het kiezen van een webdesign. Een goede gebruikerservaring zorgt ervoor dat bezoekers gemakkelijk kunnen vinden wat ze zoeken, zonder verwarring of frustratie. Hier zijn enkele UX-best practices om in gedachten te houden:\n\n" +
        "- Eenvoudige navigatie: Zorg ervoor dat bezoekers snel kunnen vinden wat ze nodig hebben. Een duidelijk menu en goed geplaatste links zijn cruciaal voor de navigatie.\n" +
        "- Oog voor detail: Zorg voor consistentie in de stijl en vormgeving van je website. Gebruik leesbare lettertypen, aantrekkelijke kleuren en duidelijke afbeeldingen.\n" +
        "- Snelle laadtijden: Bezoekers zullen een website snel verlaten als de laadtijd te lang is. Optimaliseer je afbeeldingen, minimaliseer onnodige scripts, en gebruik caching om de snelheid te verbeteren."
    },
    {
      heading: "5. Beveiliging en Betrouwbaarheid",
      content:
        "Webbeveiliging is essentieel voor elk type website, vooral als je gevoelige klantgegevens verzamelt. Zorg ervoor dat je website veilig is en de privacy van je gebruikers respecteert. Een website zonder SSL-certificaat (beveiligd met HTTPS) kan leiden tot verlies van vertrouwen van klanten en lagere rankings in zoekmachines. Zorg ervoor dat je website goed wordt onderhouden, met regelmatige software-updates en beveiligingspatches."
    },
    {
      heading: "6. Het Kiezen van de Juiste Webdesign Service of Ontwikkelaar",
      content:
        "Als je geen interne webdesigner hebt, kun je een externe webdesignservice of freelancer inhuren. Bij het kiezen van een webdesignpartner is het belangrijk om rekening te houden met:\n\n" +
        "- Ervaring en portfolio: Bekijk de portfolio's van de webdesigners om te zien of hun stijl en ervaring overeenkomen met je visie.\n" +
        "- Budget: Webdesign kan variëren van goedkoop tot zeer duur, afhankelijk van de complexiteit en maatwerk. Zorg ervoor dat je budget past bij de scope van het project.\n" +
        "- Ondersteuning en onderhoud: Een goede webdesigner biedt niet alleen ontwerp, maar ook ondersteuning en onderhoud na de lancering, voor het geval er technische problemen zijn."
    },
    {
      heading: "Conclusie: Kies een Webdesign Dat Past bij Je Bedrijf",
      content:
        "Het kiezen van het juiste webdesign is essentieel voor het succes van je online aanwezigheid. Of je nu een eenvoudige, statische website wilt of een complexe, dynamische website, zorg ervoor dat het ontwerp aansluit bij de doelen van je bedrijf en de behoeften van je doelgroep. Vergeet niet de gebruikerservaring, mobielvriendelijkheid en beveiliging in gedachten te houden. Door de juiste keuzes te maken, kun je een website creëren die je bedrijf helpt groeien."
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
