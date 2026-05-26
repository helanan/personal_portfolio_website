"use client";

import { useState } from "react";
import { ArrowRight, Mail, Calendar } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", company: "", service: "", message: "", budget: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-rose shrink-0" />
          <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
            Let&apos;s Talk
          </span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-light text-charcoal leading-none mb-6">
          Work With Me
        </h1>
        <p className="font-sans text-base text-gray-warm leading-relaxed max-w-xl">
          Whether you have a specific project in mind or just want to explore
          what&apos;s possible — I&apos;d love to hear from you. I typically
          respond within one business day.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-smoke" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {status === "sent" ? (
              <div className="bg-mist p-12 text-center">
                <div className="w-12 h-12 bg-charcoal flex items-center justify-center mx-auto mb-6">
                  <ArrowRight size={20} className="text-rose" />
                </div>
                <h2 className="font-serif text-3xl text-charcoal mb-3">
                  Message received.
                </h2>
                <p className="font-sans text-sm text-gray-warm">
                  Thank you for reaching out. I&apos;ll be in touch within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-2">
                      Name <span className="text-rose">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-smoke bg-cream px-4 py-3 text-sm font-sans text-charcoal placeholder-gray-mid focus:outline-none focus:border-charcoal transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-2">
                      Email <span className="text-rose">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-smoke bg-cream px-4 py-3 text-sm font-sans text-charcoal placeholder-gray-mid focus:outline-none focus:border-charcoal transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-smoke bg-cream px-4 py-3 text-sm font-sans text-charcoal placeholder-gray-mid focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Company name (optional)"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-2">
                      Service Area
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-smoke bg-cream px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:border-charcoal transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option>Data Pipeline Architecture</option>
                      <option>Cloud Data Warehouse</option>
                      <option>ML Data Infrastructure</option>
                      <option>Analytics Engineering</option>
                      <option>Data Strategy Consulting</option>
                      <option>Fractional Data Lead</option>
                      <option>Other / Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full border border-smoke bg-cream px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:border-charcoal transition-colors appearance-none"
                    >
                      <option value="">Select a range</option>
                      <option>Under $10K</option>
                      <option>$10K – $25K</option>
                      <option>$25K – $50K</option>
                      <option>$50K – $100K</option>
                      <option>$100K+</option>
                      <option>Let&apos;s discuss</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-widest text-gray-mid mb-2">
                    How Can I Help? <span className="text-rose">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-smoke bg-cream px-4 py-3 text-sm font-sans text-charcoal placeholder-gray-mid focus:outline-none focus:border-charcoal transition-colors resize-none"
                    placeholder="Tell me about your data challenge, current stack, and what success looks like..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-sans text-rose">
                    Something went wrong. Please email me directly at
                    helanan@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal text-cream text-sm font-sans tracking-wide hover:bg-rose disabled:opacity-50 transition-colors duration-300 group"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <p className="text-xs font-sans text-gray-mid">
                  Or email me directly:{" "}
                  <a
                    href="mailto:helanan@gmail.com"
                    className="text-charcoal hover:text-rose transition-colors"
                  >
                    helanan@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-10">
            <div>
              <div className="w-8 h-px bg-rose mb-5" />
              <h3 className="font-serif text-2xl text-charcoal mb-4">
                What to Expect
              </h3>
              <ul className="space-y-4">
                {[
                  "Response within 1 business day",
                  "30-minute discovery call to understand your needs",
                  "Written proposal with clear scope and pricing",
                  "Flexible engagement structures (project, retainer, fractional)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-rose mt-1.5" />
                    <span className="font-sans text-sm text-gray-warm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-smoke" />

            <div>
              <h3 className="font-serif text-2xl text-charcoal mb-6">
                Connect
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:helanan@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 border border-smoke flex items-center justify-center group-hover:border-rose transition-colors">
                    <Mail size={15} className="text-gray-mid group-hover:text-rose transition-colors" />
                  </div>
                  <span className="font-sans text-sm text-gray-warm group-hover:text-charcoal transition-colors">
                    helanan@gmail.com
                  </span>
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 border border-smoke flex items-center justify-center group-hover:border-rose transition-colors">
                    <Calendar size={15} className="text-gray-mid group-hover:text-rose transition-colors" />
                  </div>
                  <span className="font-sans text-sm text-gray-warm group-hover:text-charcoal transition-colors">
                    Book a 30-min call
                  </span>
                </a>
              </div>
            </div>

            <div className="h-px bg-smoke" />

            <div className="bg-mist p-8">
              <div className="font-serif text-4xl font-light text-rose/60 mb-3">
                &ldquo;
              </div>
              <p className="font-sans text-sm text-gray-warm leading-relaxed italic mb-4">
                The best data infrastructure is the kind nobody notices —
                because it just works.
              </p>
              <div className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
                — Helana Nosratbakhsh
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
