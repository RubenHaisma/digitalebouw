"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, Tablet } from "lucide-react";

export function UniqueFeature() {
  const [activeDevice, setActiveDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const devices = {
    desktop: { icon: Laptop, label: "Desktop" },
    tablet: { icon: Tablet, label: "Tablet" },
    mobile: { icon: Smartphone, label: "Mobile" },
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Live Website Preview</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Bekijk direct hoe uw website er uit zal zien op verschillende apparaten.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex justify-center space-x-4">
            {(Object.entries(devices) as [keyof typeof devices, typeof devices[keyof typeof devices]][]).map(([key, { icon: Icon, label }]) => (
              <Button
                key={key}
                variant={activeDevice === key ? "default" : "outline"}
                onClick={() => setActiveDevice(key as typeof activeDevice)}
                className="flex items-center space-x-2"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Button>
            ))}
          </div>
          <Card className="overflow-hidden">
            <div className="relative aspect-[16/9] bg-muted">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDevice}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className={`relative ${
                      activeDevice === "mobile"
                        ? "w-[375px]"
                        : activeDevice === "tablet"
                        ? "w-[768px]"
                        : "w-full"
                    }`}
                  >
                    <div className="rounded-lg border bg-background shadow-lg">
                      <div className="border-b p-4">
                        <div className="flex items-center space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-500"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="h-8 w-3/4 rounded bg-muted"></div>
                          <div className="h-4 w-full rounded bg-muted"></div>
                          <div className="h-4 w-2/3 rounded bg-muted"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}