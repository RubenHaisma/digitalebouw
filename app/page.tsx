import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { PortfolioSection } from "@/components/sections/portfolio";
import { WhyUsSection } from "@/components/sections/why-us";
import { PricingSection } from "@/components/sections/pricing";
import { ContactSection } from "@/components/sections/contact";
import { UniqueFeature } from "@/components/sections/unique-feature";
import { FAQSection } from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyUsSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
}