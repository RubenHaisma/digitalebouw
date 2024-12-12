"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const posts = [
  {
    title: "De Toekomst van Web Development in 2024",
    excerpt: "Ontdek de laatste trends en ontwikkelingen in web development en hoe deze uw bedrijf kunnen helpen groeien.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    date: "15 April 2024",
    author: "Jan de Vries",
    category: "Technologie",
  },
  {
    title: "SEO Strategieën voor Betere Rankings",
    excerpt: "Praktische tips en strategieën om uw website hoger in Google te laten ranken.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    date: "12 April 2024",
    author: "Lisa Bakker",
    category: "SEO",
  },
  {
    title: "Waarom Snelle Websites Belangrijk Zijn",
    excerpt: "De impact van laadsnelheid op gebruikerservaring en conversies.",
    image: "https://images.unsplash.com/photo-1558478551-1a378f63328e?w=800&h=400&fit=crop",
    date: "10 April 2024",
    author: "Mark Jansen",
    category: "Performance",
  },
];

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl font-bold mb-6">Blog</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ontdek de laatste ontwikkelingen en inzichten in web development,
                SEO en digitale marketing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                      </div>
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}