import Link from "next/link";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG, NAVIGATION, GRADES } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">BrightMinds</span>
                <span className="block text-xs text-slate-400">Academy</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {SITE_CONFIG.tagline}. Empowering students from Grades 1-8 with
              quality education and personalized attention.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { 
                  icon: MessageCircle, 
                  label: "WhatsApp", 
                  href: getWhatsAppLink(SITE_CONFIG.whatsapp, "Hi! I'd like to know more about BrightMinds Academy.") 
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {GRADES.map((grade) => (
                <li key={grade.id}>
                  <Link
                    href={`/courses#${grade.id}`}
                    className="text-slate-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {grade.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm font-medium"
                >
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-primary-400 transition-colors duration-200 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-primary-500" />
                  <span className="text-sm">{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink(SITE_CONFIG.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 hover:text-[#25D366] transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 mt-0.5 text-[#25D366]" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-primary-400 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-primary-500" />
                  <span className="text-sm break-all">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-500 shrink-0" />
                <span className="text-sm">{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 mt-0.5 text-primary-500" />
                <span className="text-sm">{SITE_CONFIG.timings}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {currentYear} BrightMinds Academy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}