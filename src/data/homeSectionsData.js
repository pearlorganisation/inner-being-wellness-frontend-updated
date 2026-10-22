// /**
//  * Landing page — "Healing Frequencies" + "Thoughts" sections (above the footer).
//  * Edit text / images / links here. Add or remove objects in `sections` and the page adapts.
//  *
//  * titleLines : array of lines; each line is an array of { text, tone?, italic? } pieces
//  *              tone: "purple" (default) | "teal" | "deep-teal"
//  * imageSide  : "right" | "left"  (which side the picture sits on, desktop)
//  */
// const A = "/assets/aistudio";

// export const homeSectionsData = {
//   decorations: {
//     leaf: `${A}/Botanical_border_880a09be-removebg-preview.png`,
//     golden: `${A}/Golden_botanical_decoration_a0b38616.png`,
//   },

//   sections: [
//     {
//       id: "frequencies",
//       eyebrow: "FREQUENCIES",
//       imageSide: "right",
//       titleLines: [
//         [{ text: "The Power of", tone: "deep-teal" }],
//         [{ text: "Healing Frequencies", tone: "teal", italic: true }],
//       ],
//       body: "Using specific harmonic vibrations to harmonize the energy field, release entrenched energetic blocks, and support a state of inner calm and balance, making it easier to maintain good wishes.",
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
//       eyebrow: "REFLECTIONS",
//       imageSide: "left",
//       titleLines: [
//         [{ text: "Thoughts for", tone: "purple" }],
//         [{ text: "Your Inner Journey", tone: "purple" }],
//       ],
//       quote:
//         "The only solution is to have constant good wishes flowing through my mind, opening new pathways of genuine freedom.",
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
    leaf: `${A}/Botanical_border_880a09be-removebg-preview.png`,
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