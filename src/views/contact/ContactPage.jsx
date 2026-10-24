// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { siteData } from "@/data/siteData";
// import Button from "@/components/ui/Button";
// import { Input, Textarea, Select } from "@/components/ui/Input";
// import {
//   Mail,
//   Clock,
//   CheckCircle2,
//   AlertTriangle,
//   ChevronDown,
//   ChevronUp,
//   Flower2,
// } from "lucide-react";

// export default function ContactPage({ initialInterest = "" }) {
//   const router = useRouter();
//   const { contactPage } = siteData;

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     interest: initialInterest || "holistic-coaching",
//     sessionPreference: "online",
//     message: "",
//     consent: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [openFaq, setOpenFaq] = useState(null);

//   const toggleFaq = (id) => {
//     setOpenFaq(openFaq === id ? null : id);
//   };

//   const validate = () => {
//     const errs = {};
//     if (!formData.fullName.trim() || formData.fullName.length < 2) {
//       errs.fullName = "Please enter your full name.";
//     }
//     if (!formData.email.trim() || !formData.email.includes("@")) {
//       errs.email = "Please enter a valid email address.";
//     }
//     if (!formData.interest) {
//       errs.interest = "Please select an offering of interest.";
//     }
//     if (!formData.message.trim() || formData.message.length < 10) {
//       errs.message = "Please share a few details about what you are seeking.";
//     }
//     if (!formData.consent) {
//       errs.consent = "Please provide consent to contact you.";
//     }
//     return errs;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setErrors({});
//     setIsSubmitting(true);

//     // Smooth submission simulation
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
//     }, 600);
//   };

//   return (
//     <div className="w-full bg-[#FBF9F5]">
//       {/* 1. HERO */}
//       <section className="relative py-16 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl space-y-4">
//             <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               <span className="w-6 h-px bg-[#B88B4A]" />
//               {contactPage.hero.badge}
//               <span className="w-6 h-px bg-[#B88B4A]" />
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1C59] leading-[1.12]">
//               {contactPage.hero.title}
//             </h1>

//             <p className="text-lg text-[#475A51] leading-relaxed">
//               {contactPage.hero.description}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 2. CONTACT OPTIONS STRIP */}
//       <section className="py-12 border-b border-[#2D1C59]/10 bg-[#FBF9F5]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {contactPage.contactOptions.map((opt) => (
//               <div
//                 key={opt.id}
//                 className="p-6 rounded-2xl bg-white border border-[#2D1C59]/10 space-y-2 flex items-start gap-4 shadow-xs"
//               >
//                 <div className="p-3 rounded-xl bg-[#FAF4E6] text-[#B88B4A] border border-[#E9DCBF] shrink-0 mt-0.5">
//                   {opt.icon === "mail" && <Mail className="w-5 h-5" />}
//                   {opt.icon === "lotus" && <Flower2 className="w-5 h-5" />}
//                   {opt.icon === "clock" && <Clock className="w-5 h-5" />}
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-serif font-bold text-[#2D1C59]">
//                     {opt.title}
//                   </h3>
//                   <div className="text-sm font-medium text-[#0E6E6B] mt-0.5">
//                     {opt.href ? (
//                       <a href={opt.href} className="hover:underline">
//                         {opt.value}
//                       </a>
//                     ) : (
//                       opt.value
//                     )}
//                   </div>
//                   <p className="text-xs text-[#61746B] mt-1">
//                     {opt.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. CONTACT FORM & EXPECTATIONS SECTION */}
//       <section id="contact-form" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#2D1C59]/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//             {/* Form Column */}
//             <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#2D1C59]/12 shadow-sm">
//               <div className="mb-8 space-y-2">
//                 <h2 className="text-2xl sm:text-3xl font-serif text-[#2D1C59]">
//                   {contactPage.form.title}
//                 </h2>
//                 <p className="text-sm text-[#4E6258]">
//                   {contactPage.form.description}
//                 </p>
//               </div>

//               {submitted ? (
//                 <div className="py-12 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
//                   <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
//                     <CheckCircle2 className="w-8 h-8" />
//                   </div>
//                   <h3 className="text-2xl font-serif text-emerald-900">
//                     Enquiry Received
//                   </h3>
//                   <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
//                     {contactPage.form.messages.success}
//                   </p>
//                   <div className="pt-4">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => {
//                         setSubmitted(false);
//                         setFormData({
//                           fullName: "",
//                           email: "",
//                           phone: "",
//                           interest: "holistic-coaching",
//                           sessionPreference: "online",
//                           message: "",
//                           consent: false,
//                         });
//                       }}
//                     >
//                       Submit Another Enquiry
//                     </Button>
//                   </div>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Full Name */}
//                   <Input
//                     label="Full Name"
//                     id="fullName"
//                     name="fullName"
//                     placeholder="Enter your full name"
//                     value={formData.fullName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, fullName: e.target.value })
//                     }
//                     error={errors.fullName}
//                     required
//                   />

//                   {/* Email & Phone Grid */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <Input
//                       label="Email Address"
//                       id="email"
//                       type="email"
//                       placeholder="you@example.com"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       error={errors.email}
//                       required
//                     />

//                     <Input
//                       label="Phone (Optional)"
//                       id="phone"
//                       type="tel"
//                       placeholder="+1 (555) 000-0000"
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                     />
//                   </div>

//                   {/* Area of Interest */}
//                   <Select
//                     label="What are you interested in?"
//                     id="interest"
//                     value={formData.interest}
//                     onChange={(e) =>
//                       setFormData({ ...formData, interest: e.target.value })
//                     }
//                     error={errors.interest}
//                     options={[
//                       { label: "Holistic Coaching", value: "holistic-coaching" },
//                       { label: "Frequency Healing", value: "frequency-healing" },
//                       {
//                         label: "Conscious Movement & Yoga",
//                         value: "movement-yoga",
//                       },
//                       {
//                         label: "Meditation & Breathwork",
//                         value: "meditation-breathwork",
//                       },
//                       {
//                         label: "Freedom from Resistance (Signature)",
//                         value: "freedom-from-resistance",
//                       },
//                       {
//                         label: "General Wellness Enquiry",
//                         value: "general-enquiry",
//                       },
//                     ]}
//                     required
//                   />

//                   {/* Preferred Session Format */}
//                   <div>
//                     <label className="block text-xs font-medium uppercase tracking-wider text-[#2D3F35] mb-2">
//                       Preferred Session Format <span className="text-[#C53030]">*</span>
//                     </label>
//                     <div className="grid grid-cols-3 gap-3">
//                       {[
//                         { label: "Online", value: "online" },
//                         { label: "In Person", value: "in-person" },
//                         { label: "Open to Either", value: "either" },
//                       ].map((item) => (
//                         <label
//                           key={item.value}
//                           className={`flex items-center justify-center gap-2 p-3 rounded-full border text-xs font-medium cursor-pointer transition-all ${
//                             formData.sessionPreference === item.value
//                               ? "bg-[#2D1C59]/10 border-[#2D1C59] text-[#2D1C59] font-bold"
//                               : "bg-white border-[#D8CFBF] text-[#475A51] hover:bg-[#FAF7F2]"
//                           }`}
//                         >
//                           <input
//                             type="radio"
//                             name="sessionPreference"
//                             value={item.value}
//                             checked={formData.sessionPreference === item.value}
//                             onChange={(e) =>
//                               setFormData({
//                                 ...formData,
//                                 sessionPreference: e.target.value,
//                               })
//                             }
//                             className="sr-only"
//                           />
//                           <span>{item.label}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Message */}
//                   <Textarea
//                     label="Your Message"
//                     id="message"
//                     rows={6}
//                     placeholder="Tell us what you would like support with, your current life context, and any specific questions you have."
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     error={errors.message}
//                     required
//                   />

//                   {/* Consent Checkbox */}
//                   <div>
//                     <label className="flex items-start gap-3 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         checked={formData.consent}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             consent: e.target.checked,
//                           })
//                         }
//                         className="mt-1 w-4 h-4 rounded text-[#2D1C59] border-[#D8CFBF] focus:ring-[#2D1C59]"
//                       />
//                       <span className="text-xs text-[#52655C] leading-normal">
//                         I consent to Inner Being Wellness using these details to
//                         respond to my enquiry with discretion and care.
//                       </span>
//                     </label>
//                     {errors.consent && (
//                       <p className="mt-1 text-xs text-red-600">
//                         {errors.consent}
//                       </p>
//                     )}
//                   </div>

//                   {/* Privacy note */}
//                   <p className="text-[11px] text-[#7A8E83] leading-normal">
//                     {contactPage.form.privacyNote}
//                   </p>

//                   {/* Submit Button */}
//                   <Button
//                     type="submit"
//                     variant="primary"
//                     size="lg"
//                     className="w-full justify-center"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting
//                       ? contactPage.form.submitButton.loadingLabel
//                       : contactPage.form.submitButton.label}
//                   </Button>
//                 </form>
//               )}
//             </div>

//             {/* Sidebar / Expectations Column */}
//             <div className="lg:col-span-5 space-y-8">
//               {/* Expectations Steps */}
//               <div className="p-8 rounded-3xl bg-white border border-[#2D1C59]/10 shadow-xs space-y-6">
//                 <h3 className="text-2xl font-serif text-[#2D1C59]">
//                   {contactPage.expectations.title}
//                 </h3>
//                 <div className="space-y-6">
//                   {contactPage.expectations.steps.map((step) => (
//                     <div key={step.number} className="flex gap-4">
//                       <span className="text-xl font-serif font-bold text-[#B88B4A] shrink-0 mt-0.5">
//                         {step.number}
//                       </span>
//                       <div className="space-y-1">
//                         <h4 className="text-sm font-serif font-bold text-[#2D1C59]">
//                           {step.title}
//                         </h4>
//                         <p className="text-xs text-[#52655B] leading-relaxed">
//                           {step.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Safety notice */}
//               <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
//                 <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
//                 <div className="space-y-1 leading-relaxed">
//                   <strong className="block font-medium">
//                     {contactPage.safetyNotice.title}
//                   </strong>
//                   <p>{contactPage.safetyNotice.text}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. FAQ ACCORDION */}
//       <section className="py-20 lg:py-28 bg-[#FBF9F5]">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
//           <div className="text-center space-y-3">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               COMMONLY ASKED
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//               {contactPage.faq.title}
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {contactPage.faq.items.map((faq) => {
//               const isOpen = openFaq === faq.id;
//               return (
//                 <div
//                   key={faq.id}
//                   className="rounded-2xl border border-[#2D1C59]/10 bg-white overflow-hidden shadow-xs transition-colors"
//                 >
//                   <button
//                     onClick={() => toggleFaq(faq.id)}
//                     className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#2D1C59] hover:text-[#0E6E6B] transition-colors cursor-pointer"
//                   >
//                     <span>{faq.question}</span>
//                     {isOpen ? (
//                       <ChevronUp className="w-5 h-5 text-[#2D1C59] shrink-0" />
//                     ) : (
//                       <ChevronDown className="w-5 h-5 text-[#889C92] shrink-0" />
//                     )}
//                   </button>
//                   {isOpen && (
//                     <div className="px-6 pb-5 text-sm text-[#4E6258] leading-relaxed border-t border-slate-100 pt-3">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




// new update code 


"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import {
  Mail,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  Flower2,
  MapPin,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Fallbacks: siteData.contactPage mein field na ho to ye use honge.  */
/* Sab kuch siteData se override ho sakta hai (neeche note dekho).    */
/* ------------------------------------------------------------------ */
const DEFAULT_LOGO = {
  src: "/inner_being_logo.png",
  alt: "Inner Being Wellness logo",
  width: 600,
  height: 600,
};

const DEFAULT_INTERESTS = [
  { label: "Holistic Coaching", value: "holistic-coaching" },
  { label: "Frequency Healing", value: "frequency-healing" },
  { label: "Conscious Movement & Yoga", value: "movement-yoga" },
  { label: "Meditation & Breathwork", value: "meditation-breathwork" },
  { label: "Freedom from Resistance (Signature)", value: "freedom-from-resistance" },
  { label: "General Wellness Enquiry", value: "general-enquiry" },
];

const DEFAULT_SESSION_FORMATS = [
  { label: "Online", value: "online" },
  { label: "In Person", value: "in-person" },
  { label: "Open to Either", value: "either" },
];

const DEFAULT_CONSENT =
  "I consent to Inner Being Wellness using these details to respond to my enquiry with discretion and care.";

const ICONS = {
  mail: Mail,
  lotus: Flower2,
  clock: Clock,
  location: MapPin,
  phone: Phone,
};

export default function ContactPage({ initialInterest = "" }) {
  const { contactPage } = siteData;

  /* ---------- dynamic content (data-driven) ---------- */
  const logo = { ...DEFAULT_LOGO, ...(contactPage.hero?.logo || {}) };
  const interests = contactPage.form?.interests || DEFAULT_INTERESTS;
  const sessionFormats = contactPage.form?.sessionFormats || DEFAULT_SESSION_FORMATS;
  const consentText = contactPage.form?.consentText || DEFAULT_CONSENT;
  const faqLabel = contactPage.faq?.label || "Commonly Asked";
  const successTitle = contactPage.form?.successTitle || "Enquiry Received";
  const resetLabel = contactPage.form?.resetLabel || "Submit Another Enquiry";

  // initialInterest sirf tab use hoga jab wo valid option ho
  const defaultInterest = useMemo(() => {
    const valid = interests.some((i) => i.value === initialInterest);
    return valid ? initialInterest : interests[0]?.value || "";
  }, [initialInterest, interests]);

  const emptyForm = {
    fullName: "",
    email: "",
    phone: "",
    interest: defaultInterest,
    sessionPreference: sessionFormats[0]?.value || "online",
    message: "",
    consent: false,
  };

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  /* ---------- helpers ---------- */
  const setField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // typing karte hi us field ka error hata do
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.interest) {
      errs.interest = "Please select an offering of interest.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
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
      // pehle error wale field par scroll
      const firstKey = Object.keys(validationErrors)[0];
      document
        .getElementById(firstKey)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // TODO: yahan API call lagao (fetch("/api/contact", ...))
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(emptyForm);
  };

  return (
    <div className="w-full overflow-x-hidden bg-[#FBF9F5]">
      {/* 1. HERO */}
      <section className="relative border-b border-[#2D1C59]/10 bg-[#FAF7F2] py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
            {/* Text: mobile par logo ke neeche, desktop par left */}
            <div className="order-2 space-y-4 md:order-1">
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#B88B4A] sm:text-xs">
                <span className="h-px w-6 bg-[#B88B4A]" />
                {contactPage.hero.badge}
                <span className="h-px w-6 bg-[#B88B4A]" />
              </div>

              <h1 className="font-serif text-3xl leading-[1.15] text-[#2D1C59] sm:text-5xl lg:text-6xl">
                {contactPage.hero.title}
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-[#475A51] sm:text-lg">
                {contactPage.hero.description}
              </p>
            </div>

            {/* Logo: mobile par upar & center, desktop par right */}
            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                priority
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 288px, 420px"
                className="h-auto w-44 object-contain sm:w-64 md:w-72 lg:w-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS STRIP */}
      <section className="border-b border-[#2D1C59]/10 bg-[#FBF9F5] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {contactPage.contactOptions.map((opt) => {
              const Icon = ICONS[opt.icon] || Mail;
              return (
                <div
                  key={opt.id}
                  className="flex items-start gap-4 rounded-2xl border border-[#2D1C59]/10 bg-white p-5 shadow-xs sm:p-6"
                >
                  <div className="mt-0.5 shrink-0 rounded-xl border border-[#E9DCBF] bg-[#FAF4E6] p-3 text-[#B88B4A]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-sm font-bold text-[#2D1C59]">
                      {opt.title}
                    </h3>
                    <div className="mt-0.5 break-words text-sm font-medium text-[#0E6E6B]">
                      {opt.href ? (
                        <a href={opt.href} className="hover:underline">
                          {opt.value}
                        </a>
                      ) : (
                        opt.value
                      )}
                    </div>
                    <p className="mt-1 text-xs text-[#61746B]">
                      {opt.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & EXPECTATIONS */}
      <section
        id="contact-form"
        className="scroll-mt-20 border-b border-[#2D1C59]/10 bg-[#FAF7F2] py-14 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Form Column */}
            <div className="rounded-3xl border border-[#2D1C59]/10 bg-white p-5 shadow-sm sm:p-8 lg:col-span-7 lg:p-10">
              <div className="mb-6 space-y-2 sm:mb-8">
                <h2 className="font-serif text-2xl text-[#2D1C59] sm:text-3xl">
                  {contactPage.form.title}
                </h2>
                <p className="text-sm text-[#4E6258]">
                  {contactPage.form.description}
                </p>
              </div>

              {submitted ? (
                <div
                  role="status"
                  className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-10 text-center sm:px-6 sm:py-12"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-emerald-900">
                    {successTitle}
                  </h3>
                  <p className="mx-auto max-w-md text-sm leading-relaxed text-emerald-800">
                    {contactPage.form.messages.success}
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" onClick={resetForm}>
                      {resetLabel}
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
                  <Input
                    label="Full Name"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    error={errors.fullName}
                    required
                  />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                    <Input
                      label="Email Address"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setField("email", e.target.value)}
                      error={errors.email}
                      required
                    />

                    <Input
                      label="Phone (Optional)"
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                    />
                  </div>

                  <Select
                    label="What are you interested in?"
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setField("interest", e.target.value)}
                    error={errors.interest}
                    options={interests}
                    required
                  />

                  {/* Session format: mobile par stack, sm+ par 3 columns */}
                  <fieldset>
                    <legend className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#2D3F35]">
                      Preferred Session Format{" "}
                      <span className="text-[#C53030]">*</span>
                    </legend>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {sessionFormats.map((item) => {
                        const active = formData.sessionPreference === item.value;
                        return (
                          <label
                            key={item.value}
                            className={`flex cursor-pointer items-center justify-center rounded-full border p-3 text-xs font-medium transition-all focus-within:ring-2 focus-within:ring-[#2D1C59]/40 ${
                              active
                                ? "border-[#2D1C59] bg-[#2D1C59]/10 font-bold text-[#2D1C59]"
                                : "border-[#D8CFBF] bg-white text-[#475A51] hover:bg-[#FAF7F2]"
                            }`}
                          >
                            <input
                              type="radio"
                              name="sessionPreference"
                              value={item.value}
                              checked={active}
                              onChange={(e) =>
                                setField("sessionPreference", e.target.value)
                              }
                              className="sr-only"
                            />
                            <span>{item.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <Textarea
                    label="Your Message"
                    id="message"
                    rows={6}
                    placeholder="Tell us what you would like support with, your current life context, and any specific questions you have."
                    value={formData.message}
                    onChange={(e) => setField("message", e.target.value)}
                    error={errors.message}
                    required
                  />

                  {/* Consent */}
                  <div>
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        id="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setField("consent", e.target.checked)}
                        className="mt-1 h-4 w-4 shrink-0 rounded border-[#D8CFBF] text-[#2D1C59] focus:ring-[#2D1C59]"
                      />
                      <span className="text-xs leading-normal text-[#52655C]">
                        {consentText}
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
                    )}
                  </div>

                  <p className="text-[11px] leading-normal text-[#7A8E83]">
                    {contactPage.form.privacyNote}
                  </p>

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

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8 lg:col-span-5">
              <div className="space-y-6 rounded-3xl border border-[#2D1C59]/10 bg-white p-6 shadow-xs sm:p-8">
                <h3 className="font-serif text-xl text-[#2D1C59] sm:text-2xl">
                  {contactPage.expectations.title}
                </h3>
                <div className="space-y-6">
                  {contactPage.expectations.steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="mt-0.5 shrink-0 font-serif text-xl font-bold text-[#B88B4A]">
                        {step.number}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-serif text-sm font-bold text-[#2D1C59]">
                          {step.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-[#52655B]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 text-xs text-amber-900 sm:p-6">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
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

      {/* 4. FAQ ACCORDION (smooth open/close, accessible) */}
      <section className="bg-[#FBF9F5] py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:space-y-10 sm:px-6 lg:px-8">
          <div className="space-y-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              {faqLabel}
            </span>
            <h2 className="font-serif text-2xl text-[#2D1C59] sm:text-4xl">
              {contactPage.faq.title}
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {contactPage.faq.items.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-serif text-base text-[#2D1C59] transition-colors hover:text-[#0E6E6B] sm:px-6 sm:text-lg"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#2D1C59]" : "text-[#889C92]"
                      }`}
                    />
                  </button>

                  <div
                    id={`faq-panel-${faq.id}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-[#4E6258] sm:px-6">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}