import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with BrightMinds Academy. Book a free demo class, enquire about our programs, or visit our coaching center in Koramangala, Bangalore.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: SITE_CONFIG.phone,
    description: "Call us for immediate assistance",
    action: {
      label: "Call Now",
      href: `tel:${SITE_CONFIG.phone}`,
    },
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: "Quick Chat Support",
    description: "Get instant replies on WhatsApp",
    action: {
      label: "Chat Now",
      href: getWhatsAppLink(SITE_CONFIG.whatsapp, "Hi! I'd like to enquire about coaching at BrightMinds Academy."),
      external: true,
    },
    color: "whatsapp",
  },
  {
    icon: Mail,
    title: "Email",
    details: SITE_CONFIG.email,
    description: "Send us a detailed enquiry",
    action: {
      label: "Send Email",
      href: `mailto:${SITE_CONFIG.email}`,
    },
    color: "secondary",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-linear-to-b from-secondary-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Contact Us</Badge>
            <h1 className="heading-1 mb-6">
              Let's Start Your Child's <span className="text-gradient-primary">Success Journey</span>
            </h1>
            <p className="body-large">
              Have questions about our programs? Want to book a free demo class?
              We'd love to hear from you! Reach out to us through any of the
              channels below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <AnimatedSection
                key={index}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card className="h-full text-center card-hover">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        method.color === "primary"
                          ? "bg-primary-100 dark:bg-primary-900/30"
                          : method.color === "whatsapp"
                          ? "bg-[#25D366]/10"
                          : "bg-secondary-100 dark:bg-secondary-900/30"
                      }`}
                    >
                      <method.icon
                        className={`w-8 h-8 ${
                          method.color === "primary"
                            ? "text-primary-600 dark:text-primary-400"
                            : method.color === "whatsapp"
                            ? "text-[#25D366]"
                            : "text-secondary-600 dark:text-secondary-400"
                        }`}
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                    <p className="font-medium text-primary-600 dark:text-primary-400 mb-2">
                      {method.details}
                    </p>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">
                      {method.description}
                    </p>
                    <a
                      href={method.action.href}
                      target={method.action.external ? "_blank" : undefined}
                      rel={method.action.external ? "noopener noreferrer" : undefined}
                    >
                      <Button
                        variant={method.color === "whatsapp" ? "whatsapp" : method.color === "primary" ? "default" : "secondary"}
                        className="w-full"
                      >
                        {method.action.label}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fade-in-left">
              <ContactForm />
            </AnimatedSection>

            {/* Location & Info */}
            <AnimatedSection animation="fade-in-right">
              <div className="space-y-8">
                {/* Address Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary-500" />
                      Visit Our Center
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-text-primary-light dark:text-text-primary-dark">
                          BrightMinds Academy
                        </p>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark">
                          {SITE_CONFIG.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark">
                        <Clock className="w-4 h-4 text-primary-500" />
                        <span>{SITE_CONFIG.timings}</span>
                      </div>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="w-full group">
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="overflow-hidden">
                  <div className="aspect-4/3 bg-slate-100 dark:bg-slate-800 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5979876543!2d77.6192!3d12.9340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzAyLjQiTiA3N8KwMzcnMDkuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                      title="BrightMinds Academy Location"
                    />
                  </div>
                </Card>

                {/* Quick Info */}
                <Card className="bg-linear-to-br from-primary-500 to-secondary-500 text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Book a Free Demo Class</h3>
                    <p className="opacity-90 mb-6">
                      Experience our teaching methodology firsthand. Fill out the form
                      or WhatsApp us to schedule a free demo session for your child.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={getWhatsAppLink(
                          SITE_CONFIG.whatsapp,
                          "Hi! I'd like to book a free demo class for my child."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="whatsapp" className="w-full">
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </Button>
                      </a>
                      <a href={`tel:${SITE_CONFIG.phone}`} className="flex-1">
                        <Button
                          className="w-full bg-white text-primary-600 hover:bg-white/90"
                        >
                          <Phone className="w-4 h-4" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-padding bg-muted-light dark:bg-muted-dark">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center">
            <h2 className="heading-3 mb-4">Have More Questions?</h2>
            <p className="body-large mb-6 max-w-xl mx-auto">
              Check out our FAQ section for answers to common questions about
              our programs, fees, and more.
            </p>
            <Link href="/faq">
              <Button variant="outline" size="lg">
                View FAQs
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}