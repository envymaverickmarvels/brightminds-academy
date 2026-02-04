"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials({ showAll = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTestimonials = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="section-padding bg-linear-to-b from-secondary-50 to-primary-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container-custom">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <span className="inline-block text-accent-600 dark:text-accent-400 font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="heading-2 mb-6">
            What <span className="text-gradient-primary">Parents Say</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Don't just take our word for it. Here's what parents of our students
            have to say about their experience with BrightMinds Academy.
          </p>
        </AnimatedSection>

        {showAll ? (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {displayTestimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.id}
                animation="fade-in-up"
                delay={index * 100}
              >
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <>
            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <AnimatedSection animation="fade-in-up">
                <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
              </AnimatedSection>
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-6 bg-primary-500"
                          : "bg-slate-300 dark:bg-slate-600"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
              {displayTestimonials.map((testimonial, index) => (
                <AnimatedSection
                  key={testimonial.id}
                  animation="fade-in-up"
                  delay={index * 150}
                >
                  <TestimonialCard testimonial={testimonial} />
                </AnimatedSection>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <Card className="h-full relative overflow-hidden">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center opacity-50">
        <Quote className="w-6 h-6 text-primary-500" />
      </div>

      <CardContent className="p-6 lg:p-8">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6 italic">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary-200 dark:border-primary-700">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div>
            <div className="font-semibold text-text-primary-light dark:text-text-primary-dark">
              {testimonial.name}
            </div>
            <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {testimonial.role}
            </div>
            <div className="text-xs text-primary-600 dark:text-primary-400">
              {testimonial.location}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}