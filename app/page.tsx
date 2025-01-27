import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { PortfolioSection } from "@/components/sections/portfolio";
import { WhyUsSection } from "@/components/sections/why-us";
import { PricingSection } from "@/components/sections/pricing";
import { ContactSection } from "@/components/sections/contact";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ProcessSection } from "@/components/sections/process";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <WhyUsSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}