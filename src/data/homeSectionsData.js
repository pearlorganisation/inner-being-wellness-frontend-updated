


// const A = "/assets/aistudio";

// export const homeSectionsData = {
//   decorations: {
//     leaf: `${A}/Botanical_border_880a09be-removebg-preview.png`,
//     golden: `${A}/Golden_botanical_decoration_a0b38616.png`,
//   },

//   sections: [
//     {
//       id: "frequencies",
//       eyebrow: "ADVANCED BIORESONANCE",
//       imageSide: "right",
//       titleLines: [
//         [{ text: "Frequency-Based", tone: "deep-teal" }],
//         [{ text: "Energy Healing Protocols", tone: "teal", italic: true }],
//       ],
//       body: "We blend deep inner awareness with modern frequency technology to clear blockages, restore biological equilibrium, and align your energy state across specialized dimensions.",
//       button: { label: "Explore Frequencies", href: "/offerings#frequency-healing" },
//       image: {
//         src: `${A}/Original%20artwork%20(1).png`, // singing bowl
//         alt: "A brass singing bowl with glowing sound waves rising from it",
//         width: 673,
//         height: 448,
//       },
//     },
//     {
//       id: "reflections",
//       eyebrow: "JOURNAL & INNER INQUIRY",
//       imageSide: "left",
//       titleLines: [
//         [{ text: "Reflections for", tone: "purple" }],
//         [{ text: "Your Journey", tone: "purple" }],
//       ],
//       quote:
//         "True realization arises from asking the right inner questions. Reflect deeply.",
//       image: {
//         src: `${A}/Original%20artwork.png`, // notebook
//         alt: "A notebook on a wooden table with the handwritten words “A More Conscious You”",
//         width: 721,
//         height: 386,
//       },
//     },
//   ],
// };




// update code as per client requirement





// const A = "/assets/aistudio";

// export const homeSectionsData = {
//   decorations: {
//     leaf: `${A}/Botanical_border_880a09be-removebg-preview.png`,
//     golden: `${A}/Golden_botanical_decoration_a0b38616.png`,
//   },

//   sections: [
//     {
//       id: "frequencies",
//       eyebrow: "ADVANCED BIORESONANCE",
//       imageSide: "right",
//       titleLines: [
//         [{ text: "Frequency-Based", tone: "deep-teal" }],
//         [{ text: "Energy Healing Protocols", tone: "teal", italic: true }],
//       ],
//       body: "We blend deep inner awareness with modern frequency technology to clear blockages, restore biological equilibrium, and align your energy state across specialized dimensions.",
//       button: { label: "Explore Frequencies", href: "/offerings#frequency-healing" },
//       image: {
//         src: `${A}/Original%20artwork%20(1).png`, // singing bowl
//         alt: "A brass singing bowl with glowing sound waves rising from it",
//         width: 673,
//         height: 448,
//       },
//     },
//     {
//       id: "reflections",
//       eyebrow: "JOURNAL & INNER INQUIRY",
//       imageSide: "left",
//       titleLines: [
//         [{ text: "Reflections for", tone: "purple" }],
//         [{ text: "Your Journey", tone: "purple" }],
//       ],
//       quote:
//         "True realization arises from asking the right inner questions. Reflect deeply.",
//       image: {
//         src: `${A}/Original%20artwork.png`, // notebook
//         alt: "A notebook on a wooden table with the handwritten words “A More Conscious You”",
//         width: 721,
//         height: 386,
//       },
//     },
//   ],
// };








const A = "/assets/aistudio";

export const homeSectionsData = {
  decorations: {
    // CLIENT: large leaf graphic removed (blurry + distracting).
    // Components mein `decorations.leaf &&` guard rakhna.
    leaf: null,
    golden: `${A}/Golden_botanical_decoration_a0b38616.png`,
  },

  sections: [
    {
      id: "frequencies",
      eyebrow: "ADVANCED BIORESONANCE",
      imageSide: "right",
      titleLines: [
        [{ text: "Frequency-Based", tone: "deep-teal" }],
        [{ text: "Energy Healing Protocols", tone: "teal", italic: true }],
      ],
      body: "We blend deep inner awareness with modern frequency technology to clear blockages, restore biological equilibrium, and align your energy state across specialized dimensions.",
      // /offerings#frequency-healing ka anchor offerings page pe nahi hai (ids protocol ke naam pe hain)
        button: { label: "Explore Frequencies", href: "/offerings#frequency-healing" },
      image: {
        src: `${A}/Original%20artwork%20(1).png`, // singing bowl
        alt: "A brass singing bowl with glowing sound waves rising from it",
        width: 673,
        height: 448,
      },
    },
    {
      id: "reflections",
      eyebrow: "JOURNAL & INNER INQUIRY",
      imageSide: "left",
      titleLines: [
        [{ text: "Reflections for", tone: "purple" }],
        [{ text: "Your Journey", tone: "purple" }],
      ],
      quote:
        "True realization arises from asking the right inner questions. Reflect deeply.",
      image: {
        src: `${A}/Original%20artwork.png`, // notebook
        alt: "A notebook on a wooden table with the handwritten words “A More Conscious You”",
        width: 721,
        height: 386,
      },
    },
  ],
};