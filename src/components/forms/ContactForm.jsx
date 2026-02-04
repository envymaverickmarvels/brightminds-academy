"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        parentName: "",
        studentName: "",
        phone: "",
        email: "",
        grade: "",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Card className="border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-900/20">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-accent-600 dark:text-accent-400" />
          </div>
          <h3 className="text-xl font-semibold text-accent-700 dark:text-accent-300 mb-2">
            Thank You!
          </h3>
          <p className="text-accent-600 dark:text-accent-400">
            We've received your enquiry. Our team will contact you within 24 hours.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Send Us a Message</CardTitle>
        <CardDescription className="text-base">
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="parentName"
                className="block text-sm font-medium mb-2 text-text-primary-light dark:text-text-primary-dark"
              >
                Parent/Guardian Name *
              </label>
              <Input
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="studentName"
                className="block text-sm font-medium mb-2 text-text-primary-light dark:text-text-primary-dark"
              >
                Student's Name *
              </label>
              <Input
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter student's name"
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2 text-text-primary-light dark:text-text-primary-dark"
              >
                Phone Number *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-text-primary-light dark:text-text-primary-dark"
              >
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="grade"
              className="block text-sm font-medium mb-2 text-text-primary-light dark:text-text-primary-dark"
            >
              Current Grade *
            </label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="flex h-12 w-full rounded-lg border border-border-light bg-surface-light px-4 py-2 text-base text-text-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:border-border-dark dark:bg-surface-dark dark:text-text-primary-dark"
            >
              <option value="">Select Grade</option>
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              <option value="3">Grade 3</option>
              <option value="4">Grade 4</option>
              <option value="5">Grade 5</option>
              <option value="6">Grade 6</option>
              <option value="7">Grade 7</option>
              <option value="8">Grade 8</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-text-primary-light dark:text-text-primary-dark"
            >
              Additional Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your child's learning needs, preferred subjects, or any questions..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            variant="gradient"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Enquiry
              </>
            )}
          </Button>

          <p className="text-xs text-center text-text-secondary-light dark:text-text-secondary-dark">
            By submitting, you agree to our privacy policy. We'll never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}