"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Wat zijn de kosten voor het laten maken van een website?",
      answer:
        "Digitalebouw.nl biedt verschillende pakketten aan: Starter (€999), Professional (€1999), en Enterprise (prijs op maat). Elk pakket bevat specifieke diensten die aansluiten bij uw bedrijfsbehoeften.",
    },
    {
      question: "Welke diensten bieden jullie aan naast webontwikkeling?",
      answer:
        "Naast het ontwikkelen van op maat gemaakte websites, biedt Digitalebouw.nl ook e-commerce oplossingen, SEO optimalisatie en webhosting diensten aan.",
    },
    {
      question: "Hoe kan ik contact opnemen voor een consult?",
      answer:
        "U kunt een gratis consult aanvragen via de website of direct contact opnemen via contact@digitalebouw.nl of telefonisch op +31 6 49 75 36 82.",
    },
    {
      question: "Waar is Digitalebouw.nl gevestigd?",
      answer:
        "Digitalebouw.nl is gevestigd aan de Biltstraat, 3572 AS Utrecht.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 w-full">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Veelgestelde{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              vragen
            </span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Hier vindt u antwoorden op de meest gestelde vragen over onze
            diensten. Staat uw vraag er niet bij? Neem contact met ons op!
          </p>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border rounded-lg overflow-hidden bg-muted-background text-left"
              >
                <button
                  className="flex w-full justify-between items-center p-4 text-lg font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all ${
                    activeIndex === index ? "max-h-[200px]" : "max-h-0"
                  }`}
                >
                  <p className="p-4 text-muted-foreground">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
    </section>
  );
}
