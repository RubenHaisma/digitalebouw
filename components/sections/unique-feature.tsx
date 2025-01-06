"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSpring, animated } from 'react-spring';
import Link from "next/link";

// Define Website Types and Options
const websiteTypes = [
  { value: "business", label: "Zakelijke Website" },
  { value: "portfolio", label: "Portfolio Website" },
  { value: "ecommerce", label: "eCommerce Website" },
  { value: "blog", label: "Blog Website" },
  { value: "landingpage", label: "Landing Page" },
  { value: "membership", label: "Leden Website" },
  { value: "nonprofit", label: "Non-profit Website" },
];

const UniqueFeature = () => {
  const [step, setStep] = useState(1);

  // State variables for interactive pricing and selection
  const [websiteType, setWebsiteType] = useState("business");
  const [pages, setPages] = useState(5);
  const [design, setDesign] = useState(3); // 1 - Basic, 2 - Advanced, 3 - Custom
  const [ecommerce, setEcommerce] = useState(false);
  const [seo, setSeo] = useState(false);
  const [multilingual, setMultilingual] = useState(false);
  const [price, setPrice] = useState(500); // Set initial price

  // Calculate price based on user input
  const calculatePrice = () => {
    let basePrice = 500;

    if (websiteType === "portfolio") basePrice = 400;
    if (websiteType === "ecommerce") basePrice = 800;
    if (websiteType === "blog") basePrice = 300;
    if (websiteType === "landingpage") basePrice = 250;
    if (websiteType === "membership") basePrice = 600;
    if (websiteType === "nonprofit") basePrice = 350;

    basePrice += pages * 50; // Pages adjustment
    if (design === 2) basePrice += 200;
    if (design === 3) basePrice += 500;
    if (ecommerce) basePrice += 300;
    if (seo) basePrice += 150;
    if (multilingual) basePrice += 200;

    setPrice(basePrice);
  };

  // Trigger price recalculation on each change
  useEffect(() => {
    calculatePrice();
  }, [websiteType, pages, design, ecommerce, seo, multilingual]);

  // Step Navigation
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="flex-1 w-full py-6 md:py-8"> {/* Reduced padding for better mobile responsiveness */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"  // Reduced margin for better mobile fit
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Bereken de kosten van je website
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Vul de gegevens in om een offerte te krijgen voor je op maat gemaakte website.
          </p>
        </motion.div>

        {/* Step 1: Website Type Selection */}
        {step === 1 && (
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-200 mb-6"> {/* Added margin-bottom */}
            <h3 className="text-lg md:text-xl font-semibold mb-4">Kies je Website Type</h3>
            <Select value={websiteType} onValueChange={(value) => setWebsiteType(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecteer het type website" />
              </SelectTrigger>
              <SelectContent>
                {websiteTypes.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="mt-6 text-center">
              <Button onClick={handleNext} size="lg" className="px-6 py-3 text-lg font-semibold">
                Volgende
              </Button>
            </div>
          </Card>
        )}

        {/* Step 2: Pages & Design Selection */}
        {step === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:px-6"> {/* Added responsive grid */}
            {/* Pages */}
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-200 mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Aantal Pagina&apos;s</h3>
              <Slider
                value={[pages]}
                min={1}
                max={20}
                step={1}
                onValueChange={([value]) => setPages(value)}
              />
              <p className="mt-2 text-center">Aantal Pagina&apos;s: {pages}</p>
            </Card>

            {/* Design Level */}
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-200 mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Kies het Ontwerp Niveau</h3>
              <Select value={design.toString()} onValueChange={(value) => setDesign(Number(value))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecteer het ontwerp niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Basis Ontwerp</SelectItem>
                  <SelectItem value="2">Geavanceerd Ontwerp</SelectItem>
                  <SelectItem value="3">Op Maat Ontwerp</SelectItem>
                </SelectContent>
              </Select>
            </Card>

            <div className="mt-6 text-center">
              <Button onClick={handleBack} size="lg" className="px-6 py-3 text-lg font-semibold mr-4">
                Terug
              </Button>
              <Button onClick={handleNext} size="lg" className="px-6 py-3 text-lg font-semibold">
                Volgende
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Extra Features Selection */}
        {step === 3 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:px-6"> {/* Added responsive grid */}
            {/* eCommerce Option */}
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-200 mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Wil je een eCommerce Website?</h3>
              <label className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={ecommerce}
                  onChange={(e) => setEcommerce(e.target.checked)}
                  className="w-6 h-6"
                />
                <span>Ja, ik wil een online winkel</span>
              </label>
            </Card>

            {/* SEO Option */}
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-200 mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4">SEO Optimalisatie</h3>
              <label className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={seo}
                  onChange={(e) => setSeo(e.target.checked)}
                  className="w-6 h-6"
                />
                <span>Ja, ik wil SEO optimalisatie</span>
              </label>
            </Card>

            {/* Multilingual Option */}
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-200 mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Meertaligheid</h3>
              <label className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={multilingual}
                  onChange={(e) => setMultilingual(e.target.checked)}
                  className="w-6 h-6"
                />
                <span>Ja, ik wil mijn website in meerdere talen</span>
              </label>
            </Card>

            <div className="mt-6 text-center">
              <Button onClick={handleBack} size="lg" className="px-6 py-3 text-lg font-semibold mr-4">
                Terug
              </Button>
              <Button onClick={handleNext} size="lg" className="px-6 py-3 text-lg font-semibold">
                Volgende
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Show Final Price */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              De kosten voor je Website zijn: €{price.toFixed(2)}
            </h2>
            <p className="text-muted-foreground">
              De kosten worden berekend op basis van het aantal pagina&apos;s, het ontwerp niveau en de extra opties.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button size="lg" className="px-6 py-3 text-lg font-semibold">
                  Vraag een Offerte aan
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default UniqueFeature;
