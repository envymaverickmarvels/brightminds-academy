import Link from "next/link";
import { ArrowRight, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { FAQ_DATA, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about BrightMinds Academy's coaching programs, fee structure, timings, and more.",
};

export default function FAQPage() {
  // Split FAQs into two columns for larger screens
  const halfLength = Math.ceil(FAQ_DATA.length / 2);
  const leftFAQs = FAQ_DATA.slice(0, halfLength);
  const rightFAQs = FAQ_DATA.slice(halfLength);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-linear-to-b from-tertiary-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">FAQ</Badge>
            <h1 className="heading-1 mb-6">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h1>
            <p className="body-large">
              Find answers to common questions about our coaching programs, timings,
              fee structure, and more. Can't find what you're looking for? Feel free
              to contact us directly!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <Accordion type="single" collapsible className="w-full">
                    {FAQ_DATA.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <span className="flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                            <span>{faq.question}</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pl-8">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section-padding bg-muted-light dark:bg-muted-dark">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="heading-2 mb-6">Still Have Questions?</h2>
            <p className="body-large max-w-2xl mx-auto">
              We're here to help! Reach out to us through any of these channels
              and we'll get back to you as soon as possible.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <Card className="h-full text-center card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                    Speak directly with our team
                  </p>
                  <a href={`tel:${SITE_CONFIG.phone}`}>
                    <Button variant="outline" className="w-full">
                      {SITE_CONFIG.phone}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card className="h-full text-center card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                    Quick responses via WhatsApp
                  </p>
                  <a
                    href={getWhatsAppLink(SITE_CONFIG.whatsapp, "Hi! I have a question about BrightMinds Academy.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="whatsapp" className="w-full">
                      WhatsApp Us
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300} className="sm:col-span-2 lg:col-span-1">
              <Card className="h-full text-center card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                    Come for a personal visit
                  </p>
                  <Link href="/contact">
                    <Button variant="secondary" className="w-full">
                      Get Directions
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="gradient-hero p-8 md:p-12 text-center text-white">
                <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Book a free demo class and experience our teaching methodology firsthand.
                  See why parents trust BrightMinds for their child's education.
                </p>
                <Link href="/contact">
                  <Button
                    size="xl"
                    className="bg-white text-primary-600 hover:bg-white/90 shadow-xl group"
                  >
                    Book Free Demo Class
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}