"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  Mail,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Flower2,
} from "lucide-react";

export default function ContactPage({ initialInterest = "" }) {
  const router = useRouter();
  const { contactPage } = siteData;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: initialInterest || "holistic-coaching",
    sessionPreference: "online",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      errs.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.interest) {
      errs.interest = "Please select an offering of interest.";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Please share a few details about what you are seeking.";
    }
    if (!formData.consent) {
      errs.consent = "Please provide consent to contact you.";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Smooth submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-[#FBF9F5]">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              <span className="w-6 h-px bg-[#B88B4A]" />
              {contactPage.hero.badge}
              <span className="w-6 h-px bg-[#B88B4A]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1C59] leading-[1.12]">
              {contactPage.hero.title}
            </h1>

            <p className="text-lg text-[#475A51] leading-relaxed">
              {contactPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS STRIP */}
      <section className="py-12 border-b border-[#2D1C59]/10 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactPage.contactOptions.map((opt) => (
              <div
                key={opt.id}
                className="p-6 rounded-2xl bg-white border border-[#2D1C59]/10 space-y-2 flex items-start gap-4 shadow-xs"
              >
                <div className="p-3 rounded-xl bg-[#FAF4E6] text-[#B88B4A] border border-[#E9DCBF] shrink-0 mt-0.5">
                  {opt.icon === "mail" && <Mail className="w-5 h-5" />}
                  {opt.icon === "lotus" && <Flower2 className="w-5 h-5" />}
                  {opt.icon === "clock" && <Clock className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-sm font-serif font-bold text-[#2D1C59]">
                    {opt.title}
                  </h3>
                  <div className="text-sm font-medium text-[#0E6E6B] mt-0.5">
                    {opt.href ? (
                      <a href={opt.href} className="hover:underline">
                        {opt.value}
                      </a>
                    ) : (
                      opt.value
                    )}
                  </div>
                  <p className="text-xs text-[#61746B] mt-1">
                    {opt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & EXPECTATIONS SECTION */}
      <section id="contact-form" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#2D1C59]/12 shadow-sm">
              <div className="mb-8 space-y-2">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#2D1C59]">
                  {contactPage.form.title}
                </h2>
                <p className="text-sm text-[#4E6258]">
                  {contactPage.form.description}
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-emerald-900">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    {contactPage.form.messages.success}
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          interest: "holistic-coaching",
                          sessionPreference: "online",
                          message: "",
                          consent: false,
                        });
                      }}
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <Input
                    label="Full Name"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    error={errors.fullName}
                    required
                  />

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Email Address"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      error={errors.email}
                      required
                    />

                    <Input
                      label="Phone (Optional)"
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  {/* Area of Interest */}
                  <Select
                    label="What are you interested in?"
                    id="interest"
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    error={errors.interest}
                    options={[
                      { label: "Holistic Coaching", value: "holistic-coaching" },
                      { label: "Frequency Healing", value: "frequency-healing" },
                      {
                        label: "Conscious Movement & Yoga",
                        value: "movement-yoga",
                      },
                      {
                        label: "Meditation & Breathwork",
                        value: "meditation-breathwork",
                      },
                      {
                        label: "Freedom from Resistance (Signature)",
                        value: "freedom-from-resistance",
                      },
                      {
                        label: "General Wellness Enquiry",
                        value: "general-enquiry",
                      },
                    ]}
                    required
                  />

                  {/* Preferred Session Format */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#2D3F35] mb-2">
                      Preferred Session Format <span className="text-[#C53030]">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Online", value: "online" },
                        { label: "In Person", value: "in-person" },
                        { label: "Open to Either", value: "either" },
                      ].map((item) => (
                        <label
                          key={item.value}
                          className={`flex items-center justify-center gap-2 p-3 rounded-full border text-xs font-medium cursor-pointer transition-all ${
                            formData.sessionPreference === item.value
                              ? "bg-[#2D1C59]/10 border-[#2D1C59] text-[#2D1C59] font-bold"
                              : "bg-white border-[#D8CFBF] text-[#475A51] hover:bg-[#FAF7F2]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="sessionPreference"
                            value={item.value}
                            checked={formData.sessionPreference === item.value}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                sessionPreference: e.target.value,
                              })
                            }
                            className="sr-only"
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <Textarea
                    label="Your Message"
                    id="message"
                    rows={6}
                    placeholder="Tell us what you would like support with, your current life context, and any specific questions you have."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    error={errors.message}
                    required
                  />

                  {/* Consent Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            consent: e.target.checked,
                          })
                        }
                        className="mt-1 w-4 h-4 rounded text-[#2D1C59] border-[#D8CFBF] focus:ring-[#2D1C59]"
                      />
                      <span className="text-xs text-[#52655C] leading-normal">
                        I consent to Inner Being Wellness using these details to
                        respond to my enquiry with discretion and care.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Privacy note */}
                  <p className="text-[11px] text-[#7A8E83] leading-normal">
                    {contactPage.form.privacyNote}
                  </p>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? contactPage.form.submitButton.loadingLabel
                      : contactPage.form.submitButton.label}
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar / Expectations Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Expectations Steps */}
              <div className="p-8 rounded-3xl bg-white border border-[#2D1C59]/10 shadow-xs space-y-6">
                <h3 className="text-2xl font-serif text-[#2D1C59]">
                  {contactPage.expectations.title}
                </h3>
                <div className="space-y-6">
                  {contactPage.expectations.steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="text-xl font-serif font-bold text-[#B88B4A] shrink-0 mt-0.5">
                        {step.number}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-sm font-serif font-bold text-[#2D1C59]">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#52655B] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety notice */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1 leading-relaxed">
                  <strong className="block font-medium">
                    {contactPage.safetyNotice.title}
                  </strong>
                  <p>{contactPage.safetyNotice.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              COMMONLY ASKED
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
              {contactPage.faq.title}
            </h2>
          </div>

          <div className="space-y-4">
            {contactPage.faq.items.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#2D1C59]/10 bg-white overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#2D1C59] hover:text-[#0E6E6B] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#2D1C59] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#889C92] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#4E6258] leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
