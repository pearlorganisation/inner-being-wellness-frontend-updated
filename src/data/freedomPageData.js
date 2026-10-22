// /**
//  * Freedom from Resistance — page content (Figma).
//  * Edit text, images and links here; the page renders everything from this file.
//  *
//  * - hero.titleLines : array of lines, each line is an array of { text, italic? } pieces
//  * - help.items      : add or remove items and the grid adapts (1 col mobile, N cols desktop)
//  * - decorations     : optional botanical images, set a value to null to hide it
//  */
// const A = "/assets/aistudio";
// const F = "/assets/products";

// export const freedomPageData = {
//   meta: {
//     title: "Freedom from Resistance",
//     description:
//       "Coaching and frequency healing to help you release resistance and live with constant good wishes.",
//   },

//   decorations: {
//     heroLeft: `${A}/Botanical_border_880a09be-removebg-preview.png`,
//     understandingRight: `${A}/Botanical_border_880a09be-removebg-preview.png`,
//     ctaLeft: `${A}/Botanical_corner_f25f6ac7.png`,
//     ctaRight: `${A}/Golden_botanical_decoration_a0b38616.png`,
//     divider: `${F}/lotus-divider.png`,
//   },

//   hero: {
//     label: "INNER FREEDOM",
//     titleLines: [
//       [{ text: "Freedom " }, { text: "from", italic: true }],
//       [{ text: "Resistance" }],
//     ],
//     quote: "Freedom is being completely free from the effects of others’ defects.",
//     image: {
//       src: `${A}/Meditation_beneath_the_tree_of_life_9b10f3cb.png`,
//       alt: "A woman meditating beneath a glowing tree of life",
//       width: 740,
//       height: 518,
//     },
//   },

//   understanding: {
//     title: "Understanding Resistance",
//     image: {
//       src: `${F}/balanced-stones.png`,
//       alt: "Balanced stones resting in soft sunlight beside green leaves",
//       width: 472,
//       height: 275,
//     },
//     paragraphs: [
//       "When I resist people for not behaving as I desire, that very resistance creates a subtle, constant communication with their shortcomings. This allows their defects to influence my mind, character, and personality.",
//       "The only true solution is to have constant good wishes flowing through my mind, opening new pathways of genuine freedom.",
//     ],
//   },

//   help: {
//     title: "How Coaching & Frequency Healing Can Help",
//     items: [
//       {
//         title: "Coaching",
//         icon: `${F}/icon-coaching.png`,
//         text: "Provides tools to identify and shift internal resistance patterns, fostering conscious communication and emotional sovereignty.",
//       },
//       {
//         title: "Frequency Healing",
//         icon: `${F}/icon-frequency.png`,
//         text: "Uses specific harmonic vibrations to harmonize the energy field, release entrenched energetic blocks, and support a state of inner calm and balance, making it easier to maintain good wishes.",
//       },
//       {
//         title: "Synergy",
//         icon: `${F}/icon-synergy.png`,
//         text: "Combines to create a profound shift in perception, allowing you to release the past and step into your true freedom.",
//       },
//     ],
//   },

//   cta: {
//     title: "Make Space for Genuine Freedom",
//     button: { label: "Explore Healing Sessions", href: "/offerings" },
//   },
// };



/**
 * Freedom from Resistance — page content (Figma).
 * Edit text, images and links here; the page renders everything from this file.
 *
 * - hero.titleLines : array of lines, each line is an array of { text, italic? } pieces
 * - help.items      : add or remove items and the grid adapts (1 col mobile, N cols desktop)
 * - decorations     : optional botanical images, set a value to null to hide it
 */
const A = "/assets/aistudio";
const F = "/assets/products";

export const freedomPageData = {
  meta: {
    title: "Freedom from Resistance",
    description:
      "Fix the Being first, and the Doing will naturally follow. Coaching, subconscious reprogramming and frequency healing to return you to your original default settings.",
  },

  decorations: {
    heroLeft: `${A}/Botanical_border_880a09be-removebg-preview.png`,
    understandingRight: `${A}/Botanical_border_880a09be-removebg-preview.png`,
    ctaLeft: `${A}/Botanical_corner_f25f6ac7.png`,
    ctaRight: `${A}/Golden_botanical_decoration_a0b38616.png`,
    divider: `${F}/lotus-divider.png`,
  },

  hero: {
    label: "INNER FREEDOM",
    titleLines: [
      [{ text: "Freedom " }, { text: "from", italic: true }],
      [{ text: "Resistance" }],
    ],
    quote: "Fix the Being first, and the Doing will naturally follow.",
    image: {
      src: `${A}/Meditation_beneath_the_tree_of_life_9b10f3cb.png`,
      alt: "A woman meditating beneath a glowing tree of life",
      width: 740,
      height: 518,
    },
  },

  understanding: {
    title: "Understanding Resistance",
    image: {
      src: `${F}/balanced-stones.png`,
      alt: "Balanced stones resting in soft sunlight beside green leaves",
      width: 472,
      height: 275,
    },
    paragraphs: [
      "As children, we lived in pure presence, without barriers, beliefs or cultural conditioning. As we grew, labels like gender, nationality, status and career titles were layered on, creating fragile egos, stress and self-sabotage.",
      "If I am peace, my career decisions will be peaceful. If I am love, my relationships will be loving. So we don't fix career, money or relationships. We fix the BEING, and return to our original default settings: Love, Peace, Joy, Contentment, Truth, Purity and Honesty.",
    ],
  },

  help: {
    title: "How Coaching & Frequency Healing Can Help",
    items: [
      {
        title: "Coaching",
        icon: `${F}/icon-coaching.png`,
        text: "Uses NLP, EFT, Ho'oponopono and subconscious reprogramming to release deep-seated mental and emotional blockages, so you act from peace instead of pressure.",
      },
      {
        title: "Frequency Healing",
        icon: `${F}/icon-frequency.png`,
        text: "Uses bioenergetic frequency protocols such as Chakra Balancing, Vagus, Mental Clarity and Detoxify to release stored stress, support the nervous system and restore a state of inner calm and balance.",
      },
      {
        title: "Synergy",
        icon: `${F}/icon-synergy.png`,
        text: "Human touch meets modern technology. Pre- and post-session measurement and personalised integration guidance help you see your journey from illness to wellness and step into your true freedom.",
      },
    ],
  },

  cta: {
    title: "Make Space for Genuine Freedom",
    button: { label: "Explore Frequency Protocols", href: "/offerings" },
  },
};