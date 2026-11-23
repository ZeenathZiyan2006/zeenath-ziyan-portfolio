import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Linkedin,
  Github,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { contactData, personalInfo } from '../../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please write a message of at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger mail client with entered values
    const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hello ${personalInfo.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setIsSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="LET'S CONNECT"
          title={contactData.heading}
          subtitle={contactData.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Contact Information & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Info Card */}
            <div className="card-sage rounded-3xl bg-[#FFFFFF] border border-[#DCE8D5] p-6 sm:p-8 space-y-6 shadow-card">
              <h3 className="text-xl font-bold text-[#343D32]">
                Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-[#F7F5EC] border border-[#DCE8D5]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#DCE8D5] text-[#526B50] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-[#76946C] block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${contactData.email}`}
                        className="text-sm font-semibold text-[#343D32] hover:text-[#526B50] transition-colors break-all"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-xl text-[#526B50] hover:bg-[#DCE8D5] transition-colors shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#526B50]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F7F5EC] border border-[#DCE8D5]">
                  <div className="w-10 h-10 rounded-xl bg-[#DCE8D5] text-[#526B50] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#76946C] block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-[#343D32]">
                      {contactData.location}
                    </span>
                  </div>
                </div>

                {/* Availability Item */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#DCE8D5]/50 border border-[#A3B899]/60">
                  <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] text-[#526B50] flex items-center justify-center shrink-0 shadow-subtle">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-[#526B50] block">
                      Availability Status
                    </span>
                    <p className="text-xs sm:text-sm text-[#343D32] font-medium leading-relaxed mt-0.5">
                      {contactData.availability}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-[#DCE8D5] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#526B50] block">
                  Connect On Socials
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] text-xs font-semibold text-[#343D32] hover:bg-[#DCE8D5] hover:text-[#526B50] transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#526B50]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] text-xs font-semibold text-[#343D32] hover:bg-[#DCE8D5] hover:text-[#526B50] transition-all"
                  >
                    <Github className="w-4 h-4 text-[#526B50]" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="card-sage rounded-3xl bg-[#FFFFFF] border border-[#DCE8D5] p-6 sm:p-9 shadow-card">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DCE8D5]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#343D32]">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#76946C] mt-1">
                    Fill in your details below and I will get back to you promptly.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#DCE8D5] text-[#526B50] hidden sm:flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-[#DCE8D5]/70 border border-[#A3B899] text-[#343D32] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#526B50] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="font-bold text-[#526B50] block">
                      Message Prepared for Dispatch!
                    </strong>
                    Your default email application was prompted. You can also directly reach out at{' '}
                    <span className="font-semibold text-[#526B50]">{contactData.email}</span>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#526B50] mb-2"
                    >
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F7F5EC] border text-sm text-[#343D32] placeholder-[#A3B899] focus:outline-none focus:ring-2 focus:ring-[#526B50] transition-all ${
                        errors.name ? 'border-red-400 bg-red-50/40' : 'border-[#DCE8D5]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#526B50] mb-2"
                    >
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. jane@example.com"
                      className={`w-full px-4 py-3 rounded-2xl bg-[#F7F5EC] border text-sm text-[#343D32] placeholder-[#A3B899] focus:outline-none focus:ring-2 focus:ring-[#526B50] transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/40' : 'border-[#DCE8D5]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold uppercase tracking-wider text-[#526B50] mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Internship Inquiry / Project Discussion"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#F7F5EC] border text-sm text-[#343D32] placeholder-[#A3B899] focus:outline-none focus:ring-2 focus:ring-[#526B50] transition-all ${
                      errors.subject ? 'border-red-400 bg-red-50/40' : 'border-[#DCE8D5]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#526B50] mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-2xl bg-[#F7F5EC] border text-sm text-[#343D32] placeholder-[#A3B899] focus:outline-none focus:ring-2 focus:ring-[#526B50] transition-all resize-y ${
                      errors.message ? 'border-red-400 bg-red-50/40' : 'border-[#DCE8D5]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#526B50] text-[#FFFFFF] font-bold text-sm hover:bg-[#343D32] shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <span className="text-xs text-[#76946C]">
                    No spam guaranteed • Response within 24-48 hours
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
