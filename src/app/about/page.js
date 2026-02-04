import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Heart,
  Lightbulb,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Stats } from "@/components/sections/Stats";
import { IMAGES } from "@/lib/constants";

export const metadata = {
  title: "About Us",
  description: "Learn about BrightMinds Academy, our mission, teaching philosophy, and the dedicated faculty behind our students' success.",
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide quality education that builds strong academic foundations while nurturing curiosity, creativity, and confidence in every child.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "We believe in patience, personalized attention, and creating a supportive environment where every student feels valued and motivated to excel.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description: "We combine traditional teaching methods with modern, interactive techniques to make learning engaging, effective, and enjoyable for young minds.",
  },
];

const faculty = [
  {
    name: "Dr. Priya Raghavan",
    role: "Director & Mathematics Expert",
    experience: "15+ years",
    qualification: "Ph.D. Mathematics, B.Ed",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Suresh Kumar",
    role: "Senior Science Teacher",
    experience: "12+ years",
    qualification: "M.Sc. Physics, B.Ed",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Anitha Menon",
    role: "English & Language Arts",
    experience: "10+ years",
    qualification: "M.A. English Literature, B.Ed",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Rajesh Iyer",
    role: "Social Studies Expert",
    experience: "8+ years",
    qualification: "M.A. History, B.Ed",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

const milestones = [
  { year: "2016", event: "BrightMinds Academy founded with 20 students" },
  { year: "2018", event: "Expanded to cover Grades 1-8" },
  { year: "2020", event: "Successfully transitioned to hybrid learning" },
  { year: "2022", event: "Crossed 500+ student enrollments" },
  { year: "2024", event: "Opened second branch in HSR Layout" },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-linear-to-b from-primary-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <Badge className="mb-4">About Us</Badge>
              <h1 className="heading-1 mb-6">
                Nurturing <span className="text-gradient-primary">Young Minds</span> Since 2016
              </h1>
              <p className="body-large mb-6">
                BrightMinds Academy was founded with a simple yet powerful vision: to provide
                quality education that goes beyond textbooks. We believe every child has
                the potential to excel, and our job is to unlock that potential.
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                Located in the heart of Koramangala, Bangalore, we have been serving
                students from Grades 1-8 with personalized coaching that complements
                their school education. Our focus on small batch sizes, experienced
                teachers, and interactive learning methods has helped hundreds of
                students achieve academic success.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={IMAGES.about.classroom}
                    alt="BrightMinds Academy classroom"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center">
                      <Trophy className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        8+ Years
                      </div>
                      <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        of Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Values, Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="heading-2 mb-6">What Drives Us</h2>
            <p className="body-large max-w-2xl mx-auto">
              Our foundation is built on strong values that guide everything we do.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animation="fade-in-up"
                delay={index * 150}
              >
                <Card className="h-full text-center card-hover border-2 border-transparent hover:border-primary-200 dark:hover:border-primary-800">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Our Story Timeline */}
      <section className="section-padding bg-muted-light dark:bg-muted-dark">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Journey</h2>
            <p className="body-large max-w-2xl mx-auto">
              From a small coaching center to one of Bangalore's trusted education institutes.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />

              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-in-left"
                  delay={index * 100}
                  className="relative pl-20 pb-10 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900 shadow" />
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                    <Badge variant="secondary" className="mb-2">
                      {milestone.year}
                    </Badge>
                    <p className="text-text-primary-light dark:text-text-primary-dark font-medium">
                      {milestone.event}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="heading-2 mb-6">Meet Our Expert Faculty</h2>
            <p className="body-large max-w-2xl mx-auto">
              Our teachers are not just educators but mentors who are passionate
              about helping students succeed.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <AnimatedSection
                key={index}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card className="h-full text-center card-hover overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="font-bold text-lg">{member.name}</div>
                      <div className="text-sm opacity-90">{member.role}</div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-center gap-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4 text-primary-500" />
                        {member.experience}
                      </span>
                    </div>
                    <p className="text-xs mt-2 text-text-secondary-light dark:text-text-secondary-dark">
                      {member.qualification}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-linear-to-b from-secondary-50 to-primary-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <Badge className="mb-4">Our Facilities</Badge>
              <h2 className="heading-2 mb-6">
                A <span className="text-gradient-primary">Conducive</span> Learning Environment
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: BookOpen,
                    title: "Well-Equipped Classrooms",
                    description: "Air-conditioned rooms with modern teaching aids and comfortable seating",
                  },
                  {
                    icon: Users,
                    title: "Small Batch Sizes",
                    description: "Maximum 15 students per batch for personalized attention",
                  },
                  {
                    icon: GraduationCap,
                    title: "Resource Library",
                    description: "Reference books, study materials, and digital resources available",
                  },
                ].map((facility, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                      <facility.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{facility.title}</h3>
                      <p className="text-text-secondary-light dark:text-text-secondary-dark">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={IMAGES.about.teacher}
                      alt="Teacher with students"
                      width={300}
                      height={250}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={IMAGES.decorative.books}
                      alt="Study materials"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={IMAGES.about.students}
                      alt="Students learning"
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
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
                <h2 className="heading-2 mb-4">Ready to Join the BrightMinds Family?</h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Take the first step towards your child's academic success. Book a free
                  demo class and experience the BrightMinds difference.
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