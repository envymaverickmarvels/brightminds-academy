"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="py-16 gradient-primary">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 100}
              className="text-center"
            >
              <AnimatedNumber value={stat.value} />
              <div className="text-white/80 text-sm sm:text-base mt-2">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = () => {
    const numericValue = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(numericValue * easeOutQuart);
      setDisplayValue(currentValue + suffix);

      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(interval);
      }
    }, stepDuration);
  };

  return (
    <div
      ref={ref}
      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
    >
      {displayValue}
    </div>
  );
}