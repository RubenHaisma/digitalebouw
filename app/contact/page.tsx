"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/contact";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactSection />
        </motion.div>
      </main>
    </div>
  );
}