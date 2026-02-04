import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { GradeShowcase } from "@/components/sections/GradeShowcase";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <GradeShowcase />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}