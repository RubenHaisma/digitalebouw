"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Laptop, Tablet, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

type Device = "desktop" | "tablet" | "mobile";

interface WebsitePreviewProps {
  url: string;
}

export function WebsitePreview({ url }: WebsitePreviewProps) {
  const [device, setDevice] = useState<Device>("desktop");

  const deviceSizes = {
    desktop: "w-full",
    tablet: "w-[768px]",
    mobile: "w-[375px]",
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4">
        <Button
          variant={device === "desktop" ? "default" : "outline"}
          size="sm"
          onClick={() => setDevice("desktop")}
        >
          <Laptop className="h-4 w-4 mr-2" />
          Desktop
        </Button>
        <Button
          variant={device === "tablet" ? "default" : "outline"}
          size="sm"
          onClick={() => setDevice("tablet")}
        >
          <Tablet className="h-4 w-4 mr-2" />
          Tablet
        </Button>
        <Button
          variant={device === "mobile" ? "default" : "outline"}
          size="sm"
          onClick={() => setDevice("mobile")}
        >
          <Smartphone className="h-4 w-4 mr-2" />
          Mobile
        </Button>
      </div>
      <div className="relative bg-background rounded-lg border shadow-lg p-4 overflow-hidden">
        <div className="flex items-center space-x-2 mb-4 border-b pb-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={device}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center"
          >
            <div className={`${deviceSizes[device]} transition-all duration-300`}>
              <iframe
                src={url}
                className="w-full h-[600px] rounded-lg border bg-white"
                title="Website Preview"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}