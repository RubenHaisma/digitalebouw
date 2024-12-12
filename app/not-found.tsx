"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MonitorOff } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-muted/50 p-4">
            <main className="flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <MonitorOff className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-primary mb-4">404 - Pagina Niet Gevonden</h1>
                    <p className="text-base sm:text-lg text-muted-foreground mb-6">
                        Het lijkt erop dat deze pagina offline is gegaan... Misschien heeft ze een nieuwe hostingprovider nodig?
                    </p>
                    <p className="italic text-xs sm:text-sm text-muted-foreground mb-6">
                        &quot;Waarom worden websites nooit ziek? Omdat ze een goede cache hebben!&quot;
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/">
                        <Button size="lg" className="px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold">
                            Terug naar Home
                        </Button>
                    </Link>
                </motion.div>
            </main>
        </div>
    );
}
