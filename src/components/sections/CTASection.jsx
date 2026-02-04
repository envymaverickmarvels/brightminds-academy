import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-secondary-600 via-primary-600 to-tertiary-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="heading-2 text-white mb-6">
              Ready to Give Your Child the Academic Edge?
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Book a FREE demo class today and see the BrightMinds difference.
              Our expert teachers are ready to help your child succeed!
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="xl"
                  className="bg-white text-primary-600 hover:bg-white/90 shadow-xl group w-full sm:w-auto"
                >
                  Book Free Demo Class
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href={getWhatsAppLink(
                  SITE_CONFIG.whatsapp,
                  "Hi! I'd like to book a demo class for my child."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="whatsapp"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={300}>
            <p className="mt-8 text-white/80 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Or call us at </span>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="font-semibold hover:text-white transition-colors underline underline-offset-2"
              >
                {SITE_CONFIG.phone}
              </a>
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}