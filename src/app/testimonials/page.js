import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Testimonials",
  description: "Read what parents say about BrightMinds Academy. Real stories from real families about their experience with our coaching institute.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-linear-to-b from-accent-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Testimonials</Badge>
            <h1 className="heading-1 mb-6">
              What <span className="text-gradient-primary">Parents</span> Say About Us
            </h1>
            <p className="body-large">
              Don't just take our word for it. Here's what parents of our students
              have to say about their experience with BrightMinds Academy. Their trust
              and appreciation drive us to do better every day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* All Testimonials */}
      <Testimonials showAll={true} />

      {/* Video Testimonials Section (Placeholder) */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Coming Soon</Badge>
            <h2 className="heading-2 mb-6">Video Testimonials</h2>
            <p className="body-large max-w-2xl mx-auto">
              We're working on bringing you video testimonials from our students and parents.
              Stay tuned for heartwarming stories of academic transformation!
            </p>
          </AnimatedSection>

          {/* Placeholder Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <AnimatedSection
                key={item}
                animation="fade-in-up"
                delay={item * 100}
              >
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-20 border-l-primary-500 border-t-12 border-t-transparent border-b-12 border-b-transparent ml-1" />
                    </div>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      Video Coming Soon
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted-light dark:bg-muted-dark">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-2xl mx-auto">
            <h2 className="heading-2 mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="body-large mb-8">
              Join the BrightMinds family and give your child the academic support
              they deserve. Book a free demo class today!
            </p>
            <Link href="/contact">
              <Button variant="gradient" size="xl" className="group">
                Book Free Demo Class
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}