"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jan de Vries",
    role: "Directeur, BouwTech Solutions",
    content: "Digitalebouw.nl heeft onze online aanwezigheid compleet getransformeerd. Onze nieuwe website genereert nu 3x zoveel leads als voorheen.",
    rating: 5
  },
  {
    name: "Lisa van den Berg",
    role: "Marketing Manager, ConstructPro",
    content: "De expertise in de bouwsector is duidelijk merkbaar. Ze begrijpen onze doelgroep en hebben dit perfect vertaald naar een effectieve website.",
    rating: 5
  },
  {
    name: "Peter Bakker",
    role: "Eigenaar, Bakker Bouw",
    content: "Sinds de lancering van onze nieuwe website hebben we een significante toename gezien in het aantal aanvragen voor grote projecten.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Wat Onze Klanten Zeggen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdek waarom toonaangevende bouwbedrijven voor ons kiezen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}