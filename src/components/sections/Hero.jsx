"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { IMAGES, STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-tertiary-100/20 dark:bg-tertiary-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-[10%] w-16 h-16 bg-primary-400 rounded-2xl rotate-12 float opacity-60" />
        <div className="absolute top-48 right-[15%] w-12 h-12 bg-secondary-400 rounded-full float opacity-60" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-32 left-[20%] w-20 h-20 bg-accent-400 rounded-3xl -rotate-12 float opacity-60" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-48 right-[25%] w-14 h-14 bg-tertiary-400 rounded-xl rotate-45 float opacity-60" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container-custom py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <AnimatedSection animation="fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Trusted by 500+ Parents in Bangalore</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="heading-1">
                <span className="text-text-primary-light dark:text-text-primary-dark">
                  Unlock Your Child's
                </span>
                <br />
                <span className="text-gradient-playful">Full Potential</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="body-large max-w-xl mx-auto lg:mx-0">
                Expert coaching for Grades 1-8 with personalized attention,
                interactive learning, and proven results. Give your child the
                academic edge they deserve!
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button variant="gradient" size="xl" className="group w-full sm:w-auto">
                    Book Free Demo Class
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    <Play className="w-5 h-5" />
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Quick Stats */}
            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                {STATS.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Hero Image */}
          <AnimatedSection animation="fade-in-right" delay={200} className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.hero.main}
                  alt={IMAGES.hero.alt}
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary-900/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                      Small Batches
                    </div>
                    <div className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Max 15 students
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                      98% Pass Rate
                    </div>
                    <div className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Proven Results
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}