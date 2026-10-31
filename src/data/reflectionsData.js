// src/data/reflectionsData.js
// Reflections page ka saara content yahin se aata hai.
// Naya question add karna ho to inquiries array mein ek object add kar do.
// accent options: "gold" | "cyan" | "amber" | "emerald"

export const reflectionsPage = {
  id: "reflections",
  path: "/reflections",

  meta: {
    title: "Reflections for Your Journey | Inner Being Wellness",
    description:
      "Journal and inner inquiry. Reflect deeply on work, relationships, money and identity, and save your answers privately.",
  },

  hero: {
    badge: "JOURNAL & INNER INQUIRY",
    title: "Reflections for Your Journey",
    description:
      "True realization arises from asking the right inner questions. Reflect deeply and save your answers below.",
  },

  inquiries: [
    {
      id: "career",
      category: "Career & Alignment",
      question: "At work, do you act from peace or pressure?",
      accent: "gold",
    },
    {
      id: "relationships",
      category: "Relationships & Source",
      question: "In relationships, do you give love or ask for love?",
      accent: "cyan",
    },
    {
      id: "wealth",
      category: "Abundance & Wealth",
      question:
        "With money, do you feel like a trustee, or operate from fear and ownership?",
      accent: "amber",
    },
    {
      id: "identity",
      category: "Identity & Future",
      question: "Who do you want to BE this year?",
      accent: "emerald",
    },
  ],

  form: {
    inquiryLabel: "Inquiry",
    placeholder: "Write your honest reflection here...",
    privacyNote: "Your reflections are stored privately in your session.",
    storageKey: "ibw-reflections",
    buttons: {
      save: "Save Reflections",
      saved: "Saved",
      copy: "Copy Notes",
      copied: "Copied!",
    },
    messages: {
      saved: "Your reflections have been saved in this session.",
      copied: "Notes copied to your clipboard.",
      error: "Something went wrong. Please try again.",
      empty: "Write at least one reflection first.",
    },
  },
};