import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  Users,
  Award,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GRADES, IMAGES } from "@/lib/constants";

export const metadata = {
  title: "Courses & Programs",
  description: "Explore our comprehensive coaching programs for Grades 1-8. Age-appropriate curriculum aligned with CBSE, ICSE, and State boards.",
};

const iconMap = {
  Sparkles,
  BookOpen,
  GraduationCap,
};

const scheduleData = {
  primary: {
    duration: "1.5 hours/session",
    frequency: "5 days/week",
    batchSizes: "12-15 students",
    timings: ["8:00 AM - 9:30 AM", "4:00 PM - 5:30 PM"],
  },
  middle: {
    duration: "2 hours/session",
    frequency: "5 days/week",
    batchSizes: "12-15 students",
    timings: ["8:00 AM - 10:00 AM", "4:30 PM - 6:30 PM"],
  },
  upper: {
    duration: "2.5 hours/session",
    frequency: "6 days/week",
    batchSizes: "10-12 students",
    timings: ["7:30 AM - 10:00 AM", "5:00 PM - 7:30 PM"],
  },
};

export default function CoursesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-linear-to-b from-secondary-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Our Programs</Badge>
            <h1 className="heading-1 mb-6">
              Comprehensive <span className="text-gradient-primary">Courses</span> for Every Grade
            </h1>
            <p className="body-large">
              Our curriculum is designed to complement school education while building strong
              foundations in core subjects. Each program is tailored to the specific needs
              and learning styles of different age groups.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grade Sections */}
      {GRADES.map((grade, index) => {
        const IconComponent = iconMap[grade.icon];
        const schedule = scheduleData[grade.id];
        const isEven = index % 2 === 0;

        return (
          <section
            key={grade.id}
            id={grade.id}
            className={`section-padding ${isEven ? "bg-white dark:bg-slate-900" : "bg-muted-light dark:bg-muted-dark"}`}
          >
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <AnimatedSection
                  animation={isEven ? "fade-in-left" : "fade-in-right"}
                  className={!isEven ? "lg:order-2" : ""}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={IMAGES.grades[grade.id]}
                      alt={`Students in ${grade.name}`}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        grade.color === "primary" ? "bg-primary-500" :
                        grade.color === "secondary" ? "bg-secondary-500" : "bg-accent-500"
                      }`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-white">
                        <div className="font-bold text-lg">{grade.name}</div>
                        <div className="text-sm opacity-90">Ages {grade.ageRange}</div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection
                  animation={isEven ? "fade-in-right" : "fade-in-left"}
                  className={!isEven ? "lg:order-1" : ""}
                >
                  <div className="space-y-6">
                    <div>
                      <Badge variant={grade.color} className="mb-4">
                        Grades {grade.grades}
                      </Badge>
                      <h2 className="heading-2 mb-4">{grade.name}</h2>
                      <p className="body-large">{grade.description}</p>
                    </div>

                    {/* Subjects */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Subjects Covered</h3>
                      <div className="flex flex-wrap gap-2">
                        {grade.subjects.map((subject) => (
                          <Badge key={subject} variant="outline" className="text-sm py-1.5 px-3">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3">What Students Learn</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {grade.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${
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

                    {/* Schedule */}
                    <Card className="border-2">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg">Schedule & Batch Information</CardTitle>
                      </CardHeader>
                      <CardContent className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-primary-500" />
                          <div>
                            <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                              Duration
                            </div>
                            <div className="font-medium">{schedule.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-secondary-500" />
                          <div>
                            <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                              Frequency
                            </div>
                            <div className="font-medium">{schedule.frequency}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-accent-500" />
                          <div>
                            <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                              Batch Size
                            </div>
                            <div className="font-medium">{schedule.batchSizes}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-tertiary-500" />
                          <div>
                            <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                              Available Timings
                            </div>
                            <div className="font-medium text-sm">
                              {schedule.timings.join(" | ")}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Link href="/contact">
                      <Button
                        variant={grade.color === "primary" ? "default" : grade.color === "secondary" ? "secondary" : "accent"}
                        size="lg"
                        className="group"
                      >
                        Enquire for {grade.name}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      {/* Fee Section */}
      <section className="section-padding bg-linear-to-b from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-2xl mx-auto">
            <h2 className="heading-2 mb-6">Fee Structure</h2>
            <p className="body-large mb-8">
              Our fees are competitive and transparent. We offer flexible payment options
              including monthly, quarterly, and annual plans with discounts for siblings.
            </p>
            <Card className="text-left">
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                      ₹3,500+
                    </div>
                    <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                      Monthly (Grades 1-3)
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">
                      ₹4,500+
                    </div>
                    <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                      Monthly (Grades 4-5)
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">
                      ₹5,500+
                    </div>
                    <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                      Monthly (Grades 6-8)
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-text-secondary-light dark:text-text-secondary-dark mt-6">
                  * Fees vary based on subjects selected. Contact us for a customized quote.
                </p>
              </CardContent>
            </Card>
            <Link href="/contact" className="inline-block mt-8">
              <Button variant="gradient" size="lg" className="group">
                Get Detailed Fee Information
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}