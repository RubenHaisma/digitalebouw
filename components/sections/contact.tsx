"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { isLoading, submitForm } = useContactForm();

  const onSubmit = async (data: FormData) => {
    await submitForm(data);
    reset();
  };

  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Contact</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Heeft u een vraag of wilt u meer informatie? Neem contact met ons op.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg bg-background p-8 shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <Input placeholder="Naam" {...register("name", { required: true })} />
                  <Input type="email" placeholder="Email" {...register("email", { required: true })} />
                  <Input placeholder="Telefoonnummer" {...register("phone", { required: true })} />
                  <Textarea 
                    placeholder="Uw bericht" 
                    className="min-h-[150px]" 
                    {...register("message", { required: true })}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Versturen..." : "Verstuur Bericht"}
                </Button>
              </form>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-xl font-semibold">Contact Informatie</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@digitalebouw.nl" 
                  className="flex items-center space-x-3 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@digitalebouw.nl</span>
                </a>
                <a 
                  href="tel:+31649753682" 
                  className="flex items-center space-x-3 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+31 6 49 75 36 82</span>
                </a>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Biltstraat 160, 3572 AS Utrecht</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.851995178111!2d5.120409415780244!3d52.08431137950683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c68a6f8c1a7d63%3A0x7a6f7d0e5a27f6f5!2sBiltstraat%20160%2C%203572%20AS%20Utrecht!5e0!3m2!1sen!2snl!4v1654789542982!5m2!1sen!2snl"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}