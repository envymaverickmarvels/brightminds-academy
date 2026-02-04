import {
  Users,
  Award,
  BookMarked,
  LineChart,
  Gamepad2,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { BENEFITS } from "@/lib/constants";

const iconMap = {
  Users,
  Award,
  BookMarked,
  LineChart,
  Gamepad2,
  Shield,
};

export function Benefits() {
  return (
    <section className="section-padding bg-muted-light dark:bg-muted-dark">
      <div className="container-custom">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <span className="inline-block text-primary-600 dark:text-primary-400 font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-2 mb-6">
            The <span className="text-gradient-primary">BrightMinds</span> Advantage
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            We combine expert teaching with modern methods to create an environment
            where every child can thrive and excel.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <AnimatedSection
                key={index}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card className="h-full card-hover border-2 border-transparent hover:border-primary-200 dark:hover:border-primary-800">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-lg">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-text-primary-light dark:text-text-primary-dark">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}