import Image from "next/image";
import Link from "next/link";
import { Sparkles, BookOpen, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GRADES, IMAGES } from "@/lib/constants";

const iconMap = {
  Sparkles,
  BookOpen,
  GraduationCap,
};

const colorClasses = {
  primary: {
    gradient: "from-primary-500 to-primary-600",
    badge: "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300",
    hover: "hover:border-primary-300 dark:hover:border-primary-700",
    icon: "bg-primary-500",
  },
  secondary: {
    gradient: "from-secondary-500 to-secondary-600",
    badge: "bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300",
    hover: "hover:border-secondary-300 dark:hover:border-secondary-700",
    icon: "bg-secondary-500",
  },
  accent: {
    gradient: "from-accent-500 to-accent-600",
    badge: "bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300",
    hover: "hover:border-accent-300 dark:hover:border-accent-700",
    icon: "bg-accent-500",
  },
};

export function GradeShowcase() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <span className="inline-block text-secondary-600 dark:text-secondary-400 font-semibold mb-4">
            Our Programs
          </span>
          <h2 className="heading-2 mb-6">
            Programs for <span className="text-gradient-primary">Every Grade</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Age-appropriate curriculum designed to build strong foundations and
            prepare students for academic success.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {GRADES.map((grade, index) => {
            const IconComponent = iconMap[grade.icon];
            const colors = colorClasses[grade.color];
            const imageKey = grade.id;

            return (
              <AnimatedSection
                key={grade.id}
                animation="fade-in-up"
                delay={index * 150}
              >
                <Card
                  id={grade.id}
                  className={`h-full overflow-hidden card-hover border-2 ${colors.hover}`}
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={IMAGES.grades[imageKey]}
                      alt={`Students in ${grade.name}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-linear-to-t ${colors.gradient} opacity-60`} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className={`${colors.badge} text-sm`}>
                        Grades {grade.grades} • Ages {grade.ageRange}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl ${colors.icon} flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-xl">{grade.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {grade.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Subjects */}
                    <div>
                      <h4 className="font-semibold text-sm text-text-secondary-light dark:text-text-secondary-dark mb-2">
                        SUBJECTS COVERED
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {grade.subjects.map((subject) => (
                          <Badge key={subject} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-sm text-text-secondary-light dark:text-text-secondary-dark mb-3">
                        KEY FEATURES
                      </h4>
                      <ul className="space-y-2">
                        {grade.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                              grade.color === "primary" ? "text-primary-500" :
                              grade.color === "secondary" ? "text-secondary-500" : "text-accent-500"
                            }`} />
                            <span className="text-text-secondary-light dark:text-text-secondary-dark">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link href="/contact" className="block pt-2">
                      <Button
                        variant={grade.color === "primary" ? "default" : grade.color === "secondary" ? "secondary" : "accent"}
                        className="w-full group"
                      >
                        Enquire Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* View All Link */}
        <AnimatedSection animation="fade-in-up" delay={500} className="text-center mt-12">
          <Link href="/courses">
            <Button variant="outline" size="lg" className="group">
              View Detailed Course Information
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}