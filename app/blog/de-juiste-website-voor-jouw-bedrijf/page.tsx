"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogContent = {
  title: "De Juiste Website voor Jouw Bedrijf: Welke Website Past bij Jouw Doelen?",
  description: "Ontdek welke type website het beste past bij jouw bedrijf, of je nu een zakelijke website, portfolio, of evenementwebsite nodig hebt. Lees verder om te begrijpen welke websiteoplossing bij jouw behoeften past.",
  sections: [
    {
      heading: "Waarom het Type Website Essentieel is voor je Bedrijf",
      content:
        "Het kiezen van het juiste type website voor je bedrijf is cruciaal om je doelen te bereiken. Elke website heeft zijn eigen unieke doel, afhankelijk van wat je wilt bereiken: klanten aantrekken, je portfolio presenteren, of evenementen promoten. De juiste website kan je helpen je merk te versterken, je doelgroep beter te bereiken en je conversies te verhogen. Maar welke website past het beste bij jouw bedrijf?"
    },
    {
      heading: "1. Zakelijke Websites: Professionele Online Aanwezigheid",
      content:
        "Een zakelijke website is een online representatie van je bedrijf en biedt klanten de mogelijkheid om je producten of diensten te ontdekken. Het is essentieel dat deze website een professionele uitstraling heeft, gebruiksvriendelijk is, en makkelijk te navigeren.\n\n" +
        "Kenmerken van een goede zakelijke website zijn:\n\n" +
        "- **Zakelijke uitstraling**: Zorg voor een professioneel ontwerp dat je merk weerspiegelt.\n" +
        "- **Duidelijke informatie**: Geef klanten duidelijke informatie over je producten, diensten en contactgegevens.\n" +
        "- **Leadgeneratie**: Implementeer formulieren voor offerte-aanvragen of het aanvragen van een consultatie.\n" +
        "- **SEO-optimalisatie**: Zorg ervoor dat je website geoptimaliseerd is voor zoekmachines, zodat je beter zichtbaar wordt voor potentiële klanten."
    },
    {
      heading: "2. Portfolio Websites: Laat Je Werk Zien",
      content:
        "Een portfolio website is perfect voor creatieve professionals zoals ontwerpers, fotografen, schrijvers, of ontwikkelaars. Het is de ideale manier om je werk te tonen en potentiële klanten te overtuigen van je vaardigheden en expertise.\n\n" +
        "Kenmerken van een portfolio website:\n\n" +
        "- **Visueel aantrekkelijk**: Je portfolio moet visueel indrukwekkend zijn, omdat het jouw werk vertegenwoordigt.\n" +
        "- **Gallerijen en case studies**: Toon projecten in een overzichtelijke manier, met gedetailleerde uitleg en afbeeldingen.\n" +
        "- **Getuigenissen en aanbevelingen**: Voeg klantbeoordelingen en getuigenissen toe om vertrouwen op te bouwen bij nieuwe klanten."
    },
    {
      heading: "3. Persoonlijke Websites: Jouw Digitale Visitekaartje",
      content:
        "Een persoonlijke website kan dienen als een digitale visitekaartje voor mensen die zichzelf willen profileren, zoals freelancers, consultants, of bloggers. Het biedt een platform voor je persoonlijke merk en kan je helpen om je online aanwezigheid te versterken.\n\n" +
        "Kenmerken van een persoonlijke website:\n\n" +
        "- **Zelfexpressie**: Laat je persoonlijkheid door je ontwerp en inhoud zien.\n" +
        "- **Blogfunctie**: Gebruik een blog om je expertise te delen en je merk op te bouwen.\n" +
        "- **Sociale media integratie**: Voeg links naar je social media-profielen toe om je netwerk uit te breiden."
    },
    {
      heading: "4. Evenement Websites: Promoot en Beheer je Evenementen",
      content:
        "Als je evenementen organiseert, is een evenementwebsite essentieel om informatie te delen, registraties te beheren, en je doelgroep te bereiken. Een evenementwebsite moet functioneel zijn en tegelijkertijd aantrekkelijk voor je bezoekers.\n\n" +
        "Kenmerken van een evenementwebsite:\n\n" +
        "- **Evenementinformatie**: Zorg voor gedetailleerde informatie over het evenement, zoals datum, locatie, en agenda.\n" +
        "- **Registratieformulieren**: Voeg eenvoudige en veilige registratieformulieren toe om deelnemers te verzamelen.\n" +
        "- **Sociale integratie**: Maak het makkelijk om je evenement te delen op sociale media om een groter publiek te bereiken."
    },
    {
      heading: "5. Welke Website Past bij Jouw Bedrijf?",
      content:
        "De keuze voor het juiste type website hangt af van je bedrijfsdoelen. Als je bijvoorbeeld een product wilt verkopen, is een eCommerce website ideaal. Wil je je diensten promoten, dan is een zakelijke website de beste optie. Voor creatieven is een portfolio website onmisbaar, terwijl evenementenorganisatoren gebaat zijn bij een goed georganiseerde evenementwebsite.\n\n" +
        "Bij het kiezen van je website moet je rekening houden met de volgende factoren:\n\n" +
        "- **Doelen van je bedrijf**: Wil je verkopen, klanten aantrekken, of je expertise tonen?\n" +
        "- **Doelgroep**: Wie zijn je klanten en wat verwachten ze van jouw website?\n" +
        "- **Budget**: Wat is je budget voor de website en de bijbehorende functies?\n" +
        "- **Toekomstige groei**: Kies een website die kan meegroeien met je bedrijf en je toekomstige behoeften kan ondersteunen."
    },
    {
      heading: "Conclusie: Het Belang van het Juiste Type Website",
      content:
        "Of je nu een zakelijke website, portfolio website, persoonlijke website of evenementwebsite nodig hebt, het kiezen van het juiste type website is essentieel voor je succes. Een goed ontworpen website helpt je niet alleen je merk te versterken, maar verbetert ook je klantbetrokkenheid en conversies. Investeer in een website die niet alleen voldoet aan je huidige behoeften, maar ook toekomstbestendig is."
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
