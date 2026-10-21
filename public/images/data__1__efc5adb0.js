/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Inner Being Wellness — Complete Website Content Data
 * Content organised page-wise for Home, About, Offerings,
 * Freedom from Resistance, Thoughts and Contact.
 *
 * All photographs use Pearl Photos URLs.
 */

const createPearlPhoto = ({
  query,
  width = 1200,
  height = 800,
  index = 0,
  alt,
}) => ({
  src: `https://products.pearlorganisation.in/api/public-products/pearl-ai/photo?q=${encodeURIComponent(
    query
  ).replace(/%20/g, "+")}&w=${width}&h=${height}&i=${index}`,
  alt,
  width,
  height,
});

export const siteData = {
  brand: {
    name: "INNER BEING WELLNESS",
    shortName: "Inner Being",
    tagline: "A deeper commitment to intentional everyday living.",
    founderName: "Muazzam Abdul Rehman",
    founderTitle: "Founder & Holistic Transformation Guide",
    logoText: "IBW",
    contact: {
      email: "hello@innerbeingwellness.com",
      responseTime: "We aim to respond within two working days.",
      serviceMode: "Private sessions and guided wellness experiences",
      sessionFormat: "Online and in-person sessions, subject to availability",
    },
    socialLinks: [],
  },

  siteSettings: {
    language: "en",
    locale: "en-US",
    themeColor: "#234B3D",
    backgroundColor: "#F8F4EC",
    defaultShareImage: createPearlPhoto({
      query: "peaceful meditation nature",
      width: 1200,
      height: 630,
      index: 0,
      alt: "A peaceful meditation setting surrounded by nature",
    }),
    skipLinkLabel: "Skip to main content",
    menuOpenLabel: "Open navigation menu",
    menuCloseLabel: "Close navigation menu",
  },

  navigation: {
    headerLinks: [
      { label: "Home", href: "/", id: "home" },
      { label: "About Us", href: "/about", id: "about" },
      { label: "Offerings", href: "/offerings", id: "offerings" },
      { label: "Thoughts", href: "/thoughts", id: "thoughts" },
      { label: "Contact", href: "/contact", id: "contact" },
    ],
    ctaButton: {
      label: "Book a Session",
      href: "/contact#contact-form",
      action: "scrollToContactForm",
    },
  },

  homePage: {
    id: "home",
    path: "/",
    meta: {
      title: "Inner Being Wellness | Rewire Within, Live Freely",
      description:
        "Modern holistic yoga, meditation, breathwork and frequency healing designed to support a healthier, more balanced daily existence.",
      keywords: [
        "holistic wellness",
        "yoga",
        "meditation",
        "breathwork",
        "frequency healing",
        "conscious living",
      ],
      image: createPearlPhoto({
        query: "woman meditation mountains",
        width: 1200,
        height: 630,
        index: 1,
        alt: "A woman meditating in a peaceful mountain landscape",
      }),
    },

    hero: {
      badge: "HOLISTIC WELLNESS",
      title: "Rewire Within, Live Freely.",
      description:
        "Leading to modern holistic yoga, meditation and consciousness awakening for a healthier, more balanced daily existence.",
      primaryCta: {
        label: "Start Your Journey",
        href: "/offerings",
      },
      secondaryCta: {
        label: "Meet the Founder",
        href: "/about",
      },
      image: createPearlPhoto({
        query: "yoga meditation sunrise",
        width: 1440,
        height: 1100,
        index: 2,
        alt: "A peaceful yoga and meditation practice at sunrise",
      }),
      highlights: [
        {
          id: "daily-yoga",
          label: "Daily Yoga",
          icon: "lotus",
          description: "Somatic movement for energetic vitality",
        },
        {
          id: "mindful-practice",
          label: "Mindful Practice",
          icon: "heart",
          description: "Centering techniques for clarity",
        },
        {
          id: "inner-peace",
          label: "Inner Peace",
          icon: "sun",
          description: "Restoring natural balance and harmony",
        },
      ],
    },

    introduction: {
      eyebrow: "RETURN TO YOUR CENTRE",
      title: "Wellness begins when you listen inward.",
      paragraphs: [
        "Inner Being Wellness offers a grounded path for people who want to move beyond stress, mental noise and disconnected living.",
        "Our practices bring together mindful movement, meditation, breath awareness, holistic coaching and therapeutic sound to encourage clarity, vitality and emotional balance.",
      ],
      image: createPearlPhoto({
        query: "calm woman breathing nature",
        width: 1000,
        height: 900,
        index: 3,
        alt: "A woman practising calm breathing in nature",
      }),
    },

    manifesto: {
      title: "Our Manifesto",
      subtitle: "A deeper commitment to intentional everyday living.",
      pillars: [
        {
          id: "awareness",
          title: "Awareness",
          icon: "leaf",
          color: "#E2F4EE",
          accentColor: "#2D6A4F",
          description:
            "Elevate your consciousness and build harmonising habits.",
        },
        {
          id: "healing",
          title: "Healing",
          icon: "lotus",
          color: "#EAE6F7",
          accentColor: "#6B46C1",
          description:
            "Cultivate inner strength and create space beyond past blockages.",
        },
        {
          id: "balance",
          title: "Balance",
          icon: "sun",
          color: "#FEF7E6",
          accentColor: "#D97706",
          description:
            "Align mind, body and spirit with a more natural sense of serenity.",
        },
        {
          id: "purpose",
          title: "Purpose",
          icon: "heart",
          color: "#FDE8E8",
          accentColor: "#E11D48",
          description:
            "Embrace everyday presence, authentic joy and conscious living.",
        },
      ],
    },

    founderSpotlight: {
      badge: "ABOUT THE FOUNDER",
      name: "Muazzam Abdul Rehman",
      subtitle: "From Executive Leadership to Inner Transformation",
      paragraphs: [
        "For over a decade, I was entrenched in high-pressure leadership roles across corporate environments. Along the way, I faced chronic fatigue, mental overwhelm and disconnected living. This prompted me to step back and re-evaluate everything I knew about success.",
        "My journey led me into the healing arts of yoga, meditation, breathwork and vibrational sound. Today, I dedicate my work to helping leaders and seekers rediscover inner equilibrium and true vitality.",
      ],
      cta: {
        label: "Read the Full Story",
        href: "/about",
      },
      image: createPearlPhoto({
        query: "male wellness coach portrait",
        width: 900,
        height: 1100,
        index: 4,
        alt: "A calm holistic wellness guide seated outdoors",
      }),
    },

    fourDefaults: {
      id: "four-defaults",
      title: "The Four Defaults",
      subtitle: "Core pillars that lead you towards inner transformation.",
      cards: [
        {
          id: "stillness",
          title: "Stillness",
          subtitle: "Mindful Meditation",
          icon: "lotus",
          description:
            "Cultivate a peaceful centre through grounded stillness and conscious breathing.",
          image: createPearlPhoto({
            query: "meditation mountain dawn",
            width: 760,
            height: 560,
            index: 5,
            alt: "A person meditating on a mountain at dawn",
          }),
        },
        {
          id: "emotional-freedom",
          title: "Emotional Freedom",
          subtitle: "Releasing Resistance",
          icon: "heart",
          description:
            "Release past narratives and emotional weight to live with greater ease.",
          image: createPearlPhoto({
            query: "zen stones forest",
            width: 760,
            height: 560,
            index: 6,
            alt: "Balanced zen stones in a peaceful forest",
          }),
        },
        {
          id: "conscious-movement",
          title: "Conscious Movement",
          subtitle: "Somatic Alignment",
          icon: "sparkles",
          description:
            "Awaken energetic vitality and embodiment through yoga and movement.",
          image: createPearlPhoto({
            query: "conscious yoga movement",
            width: 760,
            height: 560,
            index: 7,
            alt: "A person practising conscious yoga movement",
          }),
        },
        {
          id: "connection-clarity",
          title: "Connection & Clarity",
          subtitle: "Nature & Self",
          icon: "leaf",
          description:
            "Deepen your relationship with yourself, nature and the world around you.",
          image: createPearlPhoto({
            query: "sunlit forest pathway",
            width: 760,
            height: 560,
            index: 8,
            alt: "A sunlit pathway through a peaceful green forest",
          }),
        },
      ],
    },

    healingFrequencies: {
      badge: "SOUND & ENERGY",
      title: "The Power of Healing Frequencies",
      description:
        "Experience sound-led practices using resonant instruments and intentional listening to encourage relaxation, mindful awareness and nervous-system regulation.",
      note:
        "Wellness sessions complement, but do not replace, professional medical or mental-health care.",
      cta: {
        label: "Explore Frequencies",
        href: "/offerings#frequency-healing",
      },
      image: createPearlPhoto({
        query: "tibetan singing bowls",
        width: 1100,
        height: 850,
        index: 9,
        alt: "Tibetan singing bowls prepared for a sound wellness session",
      }),
    },

    journeySteps: {
      eyebrow: "YOUR PATH",
      title: "A simple way to begin",
      steps: [
        {
          number: "01",
          title: "Connect",
          description:
            "Share what you are experiencing and what you want to change.",
        },
        {
          number: "02",
          title: "Clarify",
          description:
            "Identify the practices and session format suited to your needs.",
        },
        {
          number: "03",
          title: "Practise",
          description:
            "Build grounded routines that can support you beyond each session.",
        },
      ],
    },

    thoughtsPreview: {
      badge: "INSIGHTS & REFLECTIONS",
      title: "Thoughts for Your Inner Journey",
      description:
        "Mindfulness reflections and practical guides to accompany your path towards lasting calm.",
      cta: {
        label: "Read All Thoughts",
        href: "/thoughts",
      },
      image: createPearlPhoto({
        query: "journal tea mindfulness",
        width: 1000,
        height: 760,
        index: 10,
        alt: "An open journal and tea arranged for mindful reflection",
      }),
      featuredArticles: [
        {
          id: "deconditioning-corporate-mind",
          slug: "deconditioning-the-corporate-mind",
          tag: "MINDFULNESS",
          title:
            "Deconditioning the Corporate Mind: Steps to Quiet Mental Chaos",
          excerpt:
            "A practical reflection on creating space between constant pressure and your inner state.",
          readTime: "5 min read",
          image: createPearlPhoto({
            query: "calm office mindfulness",
            width: 760,
            height: 520,
            index: 11,
            alt: "A calm workspace prepared for a mindfulness pause",
          }),
        },
        {
          id: "healing-frequencies",
          slug: "healing-frequencies-and-deep-rest",
          tag: "SOUND PRACTICE",
          title: "Healing Frequencies and the Practice of Deep Rest",
          excerpt:
            "How intentional sound can become part of a calming and restorative personal ritual.",
          readTime: "7 min read",
          image: createPearlPhoto({
            query: "sound healing bowls",
            width: 760,
            height: 520,
            index: 12,
            alt: "Singing bowls used during a restorative sound practice",
          }),
        },
        {
          id: "four-defaults",
          slug: "four-defaults-daily-rhythms",
          tag: "EMBODIMENT",
          title: "The Four Defaults: Daily Rhythms for Lasting Serenity",
          excerpt:
            "A gentle framework for bringing stillness, freedom, movement and clarity into daily life.",
          readTime: "6 min read",
          image: createPearlPhoto({
            query: "morning wellness routine",
            width: 760,
            height: 520,
            index: 13,
            alt: "A peaceful morning wellness routine",
          }),
        },
      ],
    },

    finalCta: {
      eyebrow: "BEGIN WITHIN",
      title: "Create space for clarity, vitality and inner peace.",
      description:
        "Begin with a private conversation about your goals and the support that may suit your journey.",
      primaryCta: {
        label: "Request a Session",
        href: "/contact#contact-form",
      },
      secondaryCta: {
        label: "Explore Offerings",
        href: "/offerings",
      },
      backgroundImage: createPearlPhoto({
        query: "serene lake sunrise",
        width: 1600,
        height: 700,
        index: 14,
        alt: "A serene lake reflecting the soft light of sunrise",
      }),
    },
  },

  aboutPage: {
    id: "about",
    path: "/about",
    meta: {
      title: "About Muazzam Abdul Rehman | Inner Being Wellness",
      description:
        "Discover the journey from executive leadership to inner transformation, holistic wellness and conscious living.",
      image: createPearlPhoto({
        query: "holistic coach nature portrait",
        width: 1200,
        height: 630,
        index: 15,
        alt: "A holistic wellness guide in a natural setting",
      }),
    },

    hero: {
      badge: "OUR ORIGIN STORY",
      title: "A Journey From Leadership to Inner Transformation",
      subtitle:
        "One person's path from executive pressure to holistic wellness and conscious living.",
      image: createPearlPhoto({
        query: "male meditation nature",
        width: 1400,
        height: 950,
        index: 16,
        alt: "A man meditating peacefully in nature",
      }),
    },

    story: {
      badge: "FOUNDER'S STORY",
      title: "The Story of Muazzam Abdul Rehman",
      subtitle: "From Executive Leadership to Inner Transformation",
      paragraphs: [
        "For over a decade, I was deeply involved in leadership roles in high-pressure corporate environments. Along the way, I faced chronic fatigue, mental overwhelm and disconnected living. This prompted me to step back and re-evaluate everything I knew about success.",
        "My journey led me into yoga, meditation, breathwork and vibrational sound. Through committed practice and continued learning, I experienced the value of aligning the mind, body and inner state.",
        "Now, through Inner Being Wellness, I guide leaders, professionals and individuals on a personal path towards emotional release, vibrant energy and grounded presence.",
      ],
      founderImage: createPearlPhoto({
        query: "mindful male portrait",
        width: 900,
        height: 1100,
        index: 17,
        alt: "Portrait of a calm and mindful wellness practitioner",
      }),
    },

    transition: {
      eyebrow: "THE TURNING POINT",
      title: "Success on the outside was no longer enough.",
      paragraphs: [
        "Slowing down revealed how deeply stress, expectation and constant performance had shaped everyday life.",
        "That realisation opened a new direction: not an escape from responsibility, but a more conscious way to meet it.",
      ],
      image: createPearlPhoto({
        query: "quiet reflection window",
        width: 1000,
        height: 780,
        index: 18,
        alt: "A person sitting quietly in reflection beside a window",
      }),
    },

    founderMessage: {
      badge: "A MESSAGE FROM OUR FOUNDER",
      quote:
        "When we stop fighting reality and begin to listen inward, true healing can begin.",
      paragraphs: [
        "Modern life pushes us into endless striving, yet our bodies and minds need balance, rhythm and calm awareness.",
        "Inner Being Wellness was created from the belief that each of us holds an innate capacity to self-regulate, reconsider old patterns and cultivate greater peace.",
        "Through holistic yoga, breathwork, meditation, coaching and acoustic practices, we guide individuals from overwhelm towards clarity, vitality and joy.",
      ],
      stillLifeImage: createPearlPhoto({
        query: "zen stones warm sunlight",
        width: 1000,
        height: 820,
        index: 19,
        alt: "Balanced stones illuminated by warm natural sunlight",
      }),
    },

    approach: {
      eyebrow: "OUR APPROACH",
      title: "Ancient wisdom, grounded daily practice.",
      description:
        "Every experience is designed to be calm, respectful and practical, allowing you to integrate inner work into real life.",
      principles: [
        {
          id: "personal",
          icon: "person",
          title: "Personal",
          description:
            "Sessions begin with your lived experience, needs and intentions.",
        },
        {
          id: "integrative",
          icon: "circles",
          title: "Integrative",
          description:
            "Mindful movement, breath, reflection and sound work together.",
        },
        {
          id: "grounded",
          icon: "roots",
          title: "Grounded",
          description:
            "Practices are translated into realistic rhythms for everyday life.",
        },
        {
          id: "compassionate",
          icon: "heart",
          title: "Compassionate",
          description:
            "Progress is approached without judgement, force or comparison.",
        },
      ],
    },

    visionMission: {
      title: "Our Vision & Mission",
      subtitle:
        "Guiding individuals towards conscious balance and joyful wholeness.",
      image: createPearlPhoto({
        query: "lotus pond sunrise",
        width: 1200,
        height: 720,
        index: 20,
        alt: "Lotus flowers on a peaceful pond at sunrise",
      }),
      vision: {
        title: "Our Vision",
        icon: "sunrise-lotus",
        description:
          "To create an empowering sanctuary where individuals awaken their potential, move beyond internal barriers and live with greater harmony.",
      },
      mission: {
        title: "Our Mission",
        icon: "leaf-circle",
        description:
          "To offer transformative holistic practices informed by ancient wisdom and contemporary understanding of mindful wellbeing.",
      },
    },

    values: {
      title: "What Guides Our Work",
      items: [
        {
          title: "Presence",
          description: "Meeting each moment with awareness and honesty.",
        },
        {
          title: "Integrity",
          description:
            "Offering responsible guidance within the scope of holistic wellness.",
        },
        {
          title: "Respect",
          description:
            "Honouring each person's pace, boundaries and lived experience.",
        },
        {
          title: "Integration",
          description:
            "Making inner transformation useful in relationships, work and daily life.",
        },
      ],
    },

    finalCta: {
      title: "Your inner journey can begin with one honest conversation.",
      description:
        "Connect with Inner Being Wellness to discuss your intentions and explore a suitable starting point.",
      cta: {
        label: "Contact Inner Being",
        href: "/contact#contact-form",
      },
    },
  },

  offeringsPage: {
    id: "offerings",
    path: "/offerings",
    meta: {
      title: "Holistic Wellness Offerings | Inner Being Wellness",
      description:
        "Explore holistic coaching, meditation, yoga, breathwork and sound-based wellness sessions from Inner Being Wellness.",
      image: createPearlPhoto({
        query: "wellness sound yoga",
        width: 1200,
        height: 630,
        index: 21,
        alt: "A calm holistic wellness space with yoga and sound instruments",
      }),
    },

    hero: {
      badge: "PATHWAYS TO INNER BALANCE",
      title: "Practices for a More Conscious Way of Living",
      description:
        "Explore personalised pathways designed to support awareness, emotional ease, embodied vitality and grounded presence.",
      primaryCta: {
        label: "Find Your Starting Point",
        href: "/contact#contact-form",
      },
      image: createPearlPhoto({
        query: "holistic wellness retreat",
        width: 1500,
        height: 980,
        index: 22,
        alt: "A peaceful holistic wellness retreat space",
      }),
    },

    introduction: {
      title: "Support shaped around your inner journey.",
      paragraphs: [
        "No two people experience stress, resistance or transformation in exactly the same way.",
        "Offerings can be experienced individually or combined into an integrative path based on your intentions, comfort and availability.",
      ],
    },

    services: [
      {
        id: "holistic-coaching",
        eyebrow: "CLARITY & AWARENESS",
        title: "Holistic Coaching",
        shortDescription:
          "Reflective one-to-one guidance for recognising patterns, reconnecting with personal values and taking grounded action.",
        description:
          "A confidential space to explore the beliefs, emotional habits and inner conflicts that may be shaping your daily experience.",
        outcomes: [
          "Greater self-awareness",
          "Clearer personal intentions",
          "Practical mindfulness rituals",
          "More conscious responses to pressure",
        ],
        sessionFormat:
          "Private one-to-one session; format confirmed after enquiry.",
        image: createPearlPhoto({
          query: "wellness coaching conversation",
          width: 1000,
          height: 760,
          index: 23,
          alt: "A calm one-to-one wellness coaching conversation",
        }),
        cta: {
          label: "Enquire About Coaching",
          href: "/contact?interest=holistic-coaching#contact-form",
        },
      },
      {
        id: "frequency-healing",
        eyebrow: "SOUND & REST",
        title: "Frequency Healing",
        shortDescription:
          "A calming sound-led experience created to encourage deep rest, mindful listening and energetic balance.",
        description:
          "Sessions may use singing bowls, resonant tones and other acoustic instruments within a quiet, intentional setting.",
        outcomes: [
          "A deeper state of relaxation",
          "Space away from mental noise",
          "Mindful body awareness",
          "A restorative personal ritual",
        ],
        sessionFormat:
          "Individual or small-group session, subject to availability.",
        image: createPearlPhoto({
          query: "crystal singing bowls",
          width: 1000,
          height: 760,
          index: 24,
          alt: "Crystal singing bowls arranged for a sound session",
        }),
        cta: {
          label: "Enquire About Sound Sessions",
          href: "/contact?interest=frequency-healing#contact-form",
        },
      },
      {
        id: "movement",
        eyebrow: "EMBODIMENT & VITALITY",
        title: "Conscious Movement & Yoga",
        shortDescription:
          "Mindful movement that encourages mobility, body awareness, steadiness and a renewed relationship with physical energy.",
        description:
          "Practices are approached without competition and can be adapted around comfort, experience and individual needs.",
        outcomes: [
          "Improved body awareness",
          "A steadier movement practice",
          "More conscious breathing",
          "A calmer transition into daily activity",
        ],
        sessionFormat:
          "Private or guided small-group practice, subject to availability.",
        image: createPearlPhoto({
          query: "gentle yoga studio",
          width: 1000,
          height: 760,
          index: 25,
          alt: "A gentle guided yoga practice in a calm studio",
        }),
        cta: {
          label: "Enquire About Yoga",
          href: "/contact?interest=movement-yoga#contact-form",
        },
      },
      {
        id: "meditation-breathwork",
        eyebrow: "STILLNESS & REGULATION",
        title: "Meditation & Breathwork",
        shortDescription:
          "Guided practices for settling attention, observing inner experience and developing a sustainable pause in daily life.",
        description:
          "Sessions focus on accessible techniques that can become part of your regular wellbeing routine.",
        outcomes: [
          "A more consistent meditation rhythm",
          "Greater awareness of breathing patterns",
          "Improved ability to pause",
          "Practical tools for moments of pressure",
        ],
        sessionFormat:
          "Private or small-group guided session, subject to availability.",
        image: createPearlPhoto({
          query: "breathwork meditation class",
          width: 1000,
          height: 760,
          index: 26,
          alt: "A guided breathwork and meditation practice",
        }),
        cta: {
          label: "Enquire About Meditation",
          href: "/contact?interest=meditation-breathwork#contact-form",
        },
      },
    ],

    signatureOffering: {
      badge: "SIGNATURE PATHWAY",
      title: "Freedom from Resistance",
      quote:
        "Freedom is being completely free from the effects of others' actions.",
      description:
        "An integrative pathway combining reflective coaching, mindful awareness and sound-led relaxation to help you reconsider reactive patterns and create more inner space.",
      image: createPearlPhoto({
        query: "tree meditation light",
        width: 1100,
        height: 900,
        index: 27,
        alt: "A person meditating beneath a luminous tree",
      }),
      cta: {
        label: "Explore Freedom from Resistance",
        href: "/freedom-from-resistance",
      },
    },

    choosingOffering: {
      title: "Not sure where to begin?",
      description:
        "You do not need to choose the perfect modality before reaching out. Share what you are experiencing, and we can identify a suitable first conversation.",
      cta: {
        label: "Ask for Guidance",
        href: "/contact#contact-form",
      },
    },

    importantNote: {
      title: "Important wellness note",
      text:
        "Inner Being Wellness provides complementary wellbeing and educational practices. It does not diagnose, treat or replace medical, psychological or emergency care. Please consult an appropriately qualified professional for personal health concerns.",
    },
  },

  freedomFromResistancePage: {
    id: "freedom-from-resistance",
    path: "/freedom-from-resistance",
    meta: {
      title: "Freedom from Resistance | Inner Being Wellness",
      description:
        "Explore holistic coaching, mindfulness and sound-led wellness practices designed to help create space beyond emotional resistance.",
      image: createPearlPhoto({
        query: "meditation tree sunrise",
        width: 1200,
        height: 630,
        index: 28,
        alt: "A peaceful meditation beneath a tree at sunrise",
      }),
    },

    hero: {
      badge: "CORE TEACHING & SIGNATURE OFFERING",
      title: "Freedom from Resistance",
      quote:
        "Freedom is being completely free from the effects of others' actions.",
      description:
        "A guided path towards observing reactive patterns, softening inner friction and responding to life with greater awareness.",
      image: createPearlPhoto({
        query: "spiritual meditation tree",
        width: 1500,
        height: 1000,
        index: 29,
        alt: "A practitioner meditating beneath a radiant tree",
      }),
    },

    understanding: {
      title: "Understanding Resistance",
      paragraphs: [
        "Resistance often appears when reality clashes with our expectations. When we hold tightly to how things should be, everyday experiences can create friction, anxiety and emotional exhaustion.",
        "A different kind of freedom becomes possible when we learn to observe our reactions without immediate judgement and meet the present moment with greater flexibility.",
      ],
      image: createPearlPhoto({
        query: "balanced stones moss",
        width: 1050,
        height: 800,
        index: 0,
        alt: "Balanced stones resting on soft green moss",
      }),
    },

    signs: {
      title: "Resistance may feel like",
      items: [
        "Replaying another person's words or actions",
        "Feeling emotionally controlled by external events",
        "Holding tightly to a preferred outcome",
        "Reacting before you have space to reflect",
        "Carrying tension long after a situation has passed",
        "Knowing a pattern is unhelpful but repeating it",
      ],
    },

    modalities: {
      title: "How the Path Can Support You",
      subtitle:
        "An integrative method for awareness, emotional space and sustainable daily practice.",
      cards: [
        {
          id: "coaching",
          title: "Coaching",
          icon: "spiral-mind",
          color: "#EAE6F7",
          accentColor: "#6B46C1",
          description:
            "Personalised sessions that help illuminate habitual loops, recognise triggers and cultivate more conscious responses.",
          bulletPoints: [
            "Pattern awareness",
            "Trigger recognition",
            "Grounded daily mindfulness rituals",
          ],
          image: createPearlPhoto({
            query: "mindful coaching session",
            width: 800,
            height: 560,
            index: 1,
            alt: "A private mindful coaching session",
          }),
        },
        {
          id: "frequency-healing",
          title: "Frequency Healing",
          icon: "sound-waves",
          color: "#E2F4EE",
          accentColor: "#0D9488",
          description:
            "A sound-led practice intended to encourage relaxation, embodied listening and restorative stillness.",
          bulletPoints: [
            "Singing bowl resonance",
            "Quiet nervous-system support",
            "Deep rest and body awareness",
          ],
          image: createPearlPhoto({
            query: "singing bowl therapy",
            width: 800,
            height: 560,
            index: 2,
            alt: "A singing bowl used during a sound wellness session",
          }),
        },
        {
          id: "synergy",
          title: "Synergy",
          icon: "radiant-lotus",
          color: "#FEF7E6",
          accentColor: "#D97706",
          description:
            "The intentional combination of reflective coaching and sound practice to support deeper awareness and integration.",
          bulletPoints: [
            "Mind-body awareness",
            "Emotional reflection",
            "Sustainable inner practices",
          ],
          image: createPearlPhoto({
            query: "lotus meditation wellness",
            width: 800,
            height: 560,
            index: 3,
            alt: "A peaceful lotus-inspired meditation space",
          }),
        },
      ],
    },

    process: {
      title: "The Experience",
      steps: [
        {
          number: "01",
          title: "Listen",
          description:
            "We begin with your current experience, concerns and intentions.",
        },
        {
          number: "02",
          title: "Observe",
          description:
            "You explore patterns and reactions with patience and curiosity.",
        },
        {
          number: "03",
          title: "Regulate",
          description:
            "Mindful and sound-led practices create space for calm awareness.",
        },
        {
          number: "04",
          title: "Integrate",
          description:
            "You identify simple practices to carry into daily life.",
        },
      ],
    },

    suitableFor: {
      title: "This pathway may suit you if you want to",
      items: [
        "Understand recurring emotional reactions",
        "Create space between triggers and responses",
        "Develop a more grounded reflective practice",
        "Experience guided stillness and restorative sound",
        "Bring greater awareness into work and relationships",
      ],
    },

    ctaBanner: {
      title: "Make Space for Genuine Freedom",
      subtitle:
        "Step away from emotional burnout and begin a more conscious journey towards inner serenity.",
      primaryCta: {
        label: "Request a Consultation",
        href: "/contact?interest=freedom-from-resistance#contact-form",
        action: "navigateToContactForm",
      },
      secondaryCta: {
        label: "View All Offerings",
        href: "/offerings",
      },
      backgroundImage: createPearlPhoto({
        query: "peaceful mountain horizon",
        width: 1600,
        height: 700,
        index: 4,
        alt: "A peaceful mountain horizon in soft evening light",
      }),
    },

    disclaimer: {
      title: "Please note",
      text:
        "This offering is a complementary wellness experience and is not psychotherapy, medical treatment or crisis support.",
    },
  },

  thoughtsPage: {
    id: "thoughts",
    path: "/thoughts",
    meta: {
      title: "Thoughts & Reflections | Inner Being Wellness",
      description:
        "Read mindful reflections on inner awareness, emotional freedom, conscious movement and sound-based wellness.",
      image: createPearlPhoto({
        query: "mindfulness journal nature",
        width: 1200,
        height: 630,
        index: 5,
        alt: "A mindfulness journal surrounded by natural elements",
      }),
    },

    hero: {
      badge: "THOUGHTS & REFLECTIONS",
      title: "Words for Your Inner Journey",
      description:
        "Reflections and practical perspectives for living with greater awareness, balance and intention.",
      image: createPearlPhoto({
        query: "writing journal sunlight",
        width: 1400,
        height: 920,
        index: 6,
        alt: "A person writing in a journal in warm natural light",
      }),
    },

    featuredArticle: {
      id: "deconditioning-the-corporate-mind",
      tag: "MINDFULNESS",
      title: "Deconditioning the Corporate Mind",
      subtitle: "Steps to quiet mental chaos and return to conscious attention.",
      excerpt:
        "When urgency becomes normal, stillness can feel unfamiliar. This reflection explores simple ways to notice pressure without allowing it to define every moment.",
      readTime: "5 min read",
      image: createPearlPhoto({
        query: "executive mindfulness window",
        width: 1100,
        height: 760,
        index: 7,
        alt: "A professional pausing for mindful reflection by a window",
      }),
    },

    categories: [
      { id: "all", label: "All Thoughts" },
      { id: "mindfulness", label: "Mindfulness" },
      { id: "sound-practice", label: "Sound Practice" },
      { id: "embodiment", label: "Embodiment" },
      { id: "conscious-living", label: "Conscious Living" },
    ],

    articles: [
      {
        id: "article-1",
        slug: "deconditioning-the-corporate-mind",
        category: "mindfulness",
        tag: "MINDFULNESS",
        title: "Deconditioning the Corporate Mind",
        excerpt:
          "Small practices for creating space beyond constant urgency, performance and mental noise.",
        readTime: "5 min read",
        image: createPearlPhoto({
          query: "mindful office pause",
          width: 800,
          height: 560,
          index: 8,
          alt: "A peaceful mindful pause in a modern workspace",
        }),
      },
      {
        id: "article-2",
        slug: "healing-frequencies-and-deep-rest",
        category: "sound-practice",
        tag: "SOUND PRACTICE",
        title: "Healing Frequencies and the Practice of Deep Rest",
        excerpt:
          "A grounded introduction to mindful sound, intentional listening and restorative ritual.",
        readTime: "7 min read",
        image: createPearlPhoto({
          query: "sound bath wellness",
          width: 800,
          height: 560,
          index: 9,
          alt: "A restorative sound bath arrangement",
        }),
      },
      {
        id: "article-3",
        slug: "four-defaults-daily-rhythms",
        category: "embodiment",
        tag: "EMBODIMENT",
        title: "The Four Defaults: Daily Rhythms for Serenity",
        excerpt:
          "Bring stillness, emotional freedom, movement and connection into ordinary days.",
        readTime: "6 min read",
        image: createPearlPhoto({
          query: "morning meditation routine",
          width: 800,
          height: 560,
          index: 10,
          alt: "A calm morning meditation routine",
        }),
      },
      {
        id: "article-4",
        slug: "the-space-between-trigger-and-response",
        category: "conscious-living",
        tag: "CONSCIOUS LIVING",
        title: "The Space Between Trigger and Response",
        excerpt:
          "How a conscious pause can change the way we meet difficult conversations and emotions.",
        readTime: "6 min read",
        image: createPearlPhoto({
          query: "calm reflection nature",
          width: 800,
          height: 560,
          index: 11,
          alt: "A person reflecting quietly in nature",
        }),
      },
      {
        id: "article-5",
        slug: "breathing-as-a-daily-anchor",
        category: "mindfulness",
        tag: "MINDFULNESS",
        title: "Breathing as a Daily Anchor",
        excerpt:
          "A simple way to reconnect with the present during demanding and distracted days.",
        readTime: "4 min read",
        image: createPearlPhoto({
          query: "breathing exercise outdoors",
          width: 800,
          height: 560,
          index: 12,
          alt: "A person practising a calm breathing exercise outdoors",
        }),
      },
      {
        id: "article-6",
        slug: "movement-without-performance",
        category: "embodiment",
        tag: "EMBODIMENT",
        title: "Movement Without Performance",
        excerpt:
          "Reframing yoga and movement as listening practices rather than achievements.",
        readTime: "5 min read",
        image: createPearlPhoto({
          query: "gentle mindful yoga",
          width: 800,
          height: 560,
          index: 13,
          alt: "A gentle and mindful yoga practice",
        }),
      },
    ],

    newsletter: {
      title: "Receive a quiet note for your inner journey.",
      description:
        "Occasional reflections on awareness, wellbeing and intentional living. No unnecessary noise.",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      consentText:
        "By subscribing, you agree to receive reflections from Inner Being Wellness. You may unsubscribe at any time.",
      submitLabel: "Subscribe",
      successMessage: "Thank you. Your subscription request has been received.",
      errorMessage: "Please enter a valid email address.",
    },
  },

  contactPage: {
    id: "contact",
    path: "/contact",
    meta: {
      title: "Contact Inner Being Wellness",
      description:
        "Contact Inner Being Wellness to enquire about holistic coaching, meditation, yoga, breathwork and sound-led wellness sessions.",
      image: createPearlPhoto({
        query: "peaceful wellness studio",
        width: 1200,
        height: 630,
        index: 14,
        alt: "A warm and peaceful holistic wellness studio",
      }),
    },

    hero: {
      badge: "BEGIN YOUR JOURNEY",
      title: "Let’s Start With a Conversation",
      description:
        "Share what you are experiencing, what you hope to explore and which offering interests you. Your message will be approached with care and discretion.",
      image: createPearlPhoto({
        query: "calm consultation space",
        width: 1400,
        height: 920,
        index: 15,
        alt: "A calm private space prepared for a wellness consultation",
      }),
    },

    contactOptions: [
      {
        id: "email",
        icon: "mail",
        title: "Email",
        value: "hello@innerbeingwellness.com",
        href: "mailto:hello@innerbeingwellness.com",
        description: "For session enquiries and general questions.",
      },
      {
        id: "session-format",
        icon: "lotus",
        title: "Session Format",
        value: "Online and in-person",
        description: "Final format is confirmed according to availability.",
      },
      {
        id: "response",
        icon: "clock",
        title: "Response Time",
        value: "Within two working days",
        description: "Complex enquiries may require additional time.",
      },
    ],

    form: {
      id: "contact-form",
      title: "Tell Us How We Can Support You",
      description:
        "Complete the form below, and Inner Being Wellness will respond using the contact details you provide.",
      method: "POST",
      action: "/api/contact",
      fields: [
        {
          id: "fullName",
          name: "fullName",
          label: "Full name",
          type: "text",
          placeholder: "Enter your full name",
          autoComplete: "name",
          required: true,
          minLength: 2,
          maxLength: 100,
          errorMessage: "Please enter your full name.",
        },
        {
          id: "email",
          name: "email",
          label: "Email address",
          type: "email",
          placeholder: "you@example.com",
          autoComplete: "email",
          required: true,
          maxLength: 160,
          errorMessage: "Please enter a valid email address.",
        },
        {
          id: "phone",
          name: "phone",
          label: "Phone number",
          type: "tel",
          placeholder: "Include your country code",
          autoComplete: "tel",
          required: false,
          maxLength: 30,
          errorMessage: "Please enter a valid phone number.",
        },
        {
          id: "interest",
          name: "interest",
          label: "What are you interested in?",
          type: "select",
          required: true,
          placeholder: "Choose an offering",
          options: [
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
              label: "Freedom from Resistance",
              value: "freedom-from-resistance",
            },
            { label: "General Enquiry", value: "general-enquiry" },
          ],
          errorMessage: "Please select an area of interest.",
        },
        {
          id: "sessionPreference",
          name: "sessionPreference",
          label: "Preferred session format",
          type: "radio",
          required: true,
          options: [
            { label: "Online", value: "online" },
            { label: "In person", value: "in-person" },
            { label: "Open to either", value: "either" },
          ],
          errorMessage: "Please choose a preferred session format.",
        },
        {
          id: "message",
          name: "message",
          label: "Your message",
          type: "textarea",
          placeholder:
            "Tell us what you would like support with and any questions you have.",
          required: true,
          minLength: 20,
          maxLength: 2000,
          rows: 7,
          errorMessage:
            "Please enter at least 20 characters so we can understand your enquiry.",
        },
        {
          id: "consent",
          name: "consent",
          label:
            "I consent to Inner Being Wellness using these details to respond to my enquiry.",
          type: "checkbox",
          required: true,
          errorMessage: "Please provide consent before submitting.",
        },
      ],
      submitButton: {
        label: "Send Enquiry",
        loadingLabel: "Sending…",
      },
      messages: {
        success:
          "Thank you. Your enquiry has been received, and we will respond as soon as possible.",
        error:
          "Your message could not be sent. Please try again or email hello@innerbeingwellness.com.",
      },
      privacyNote:
        "Please do not include medical records, passwords, payment information or other highly sensitive information in this form.",
    },

    expectations: {
      title: "What happens after you enquire?",
      steps: [
        {
          number: "01",
          title: "We read your message",
          description:
            "Your goals, concerns and preferred format help us understand your enquiry.",
        },
        {
          number: "02",
          title: "We respond personally",
          description:
            "You receive a reply with relevant guidance and available next steps.",
        },
        {
          number: "03",
          title: "You decide",
          description:
            "There is no obligation to continue until the format feels suitable for you.",
        },
      ],
    },

    safetyNotice: {
      title: "Need urgent support?",
      text:
        "Inner Being Wellness does not provide emergency or crisis services. If you or someone else may be in immediate danger, contact your local emergency service or an appropriate crisis-support provider now.",
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          id: "experience",
          question: "Do I need prior yoga or meditation experience?",
          answer:
            "No. Practices can be introduced at an accessible pace based on your comfort and experience.",
        },
        {
          id: "online",
          question: "Are online sessions available?",
          answer:
            "Online sessions may be available. Use the enquiry form to share your location and preferred format.",
        },
        {
          id: "choose-offering",
          question: "What if I do not know which offering to choose?",
          answer:
            "Select General Enquiry and describe what you are experiencing. A suitable starting point can then be discussed.",
        },
        {
          id: "medical-care",
          question: "Is this a replacement for medical or psychological care?",
          answer:
            "No. These are complementary wellbeing and educational practices, not medical diagnosis, psychotherapy or emergency care.",
        },
        {
          id: "confidentiality",
          question: "Will my enquiry be treated privately?",
          answer:
            "Your enquiry should be handled only for communication and service administration. Avoid sending highly sensitive health, identity or financial information through the form.",
        },
      ],
    },
  },

  imageLibrary: {
    heroMeditation: createPearlPhoto({
      query: "meditation nature sunrise",
      width: 1600,
      height: 1000,
      index: 16,
      alt: "A peaceful meditation practice in nature at sunrise",
    }),
    founderPortrait: createPearlPhoto({
      query: "male holistic coach",
      width: 900,
      height: 1100,
      index: 17,
      alt: "A male holistic wellness coach",
    }),
    yogaPractice: createPearlPhoto({
      query: "gentle yoga practice",
      width: 1200,
      height: 800,
      index: 18,
      alt: "A gentle and mindful yoga practice",
    }),
    meditationPractice: createPearlPhoto({
      query: "guided meditation practice",
      width: 1200,
      height: 800,
      index: 19,
      alt: "A guided meditation practice in a quiet setting",
    }),
    soundHealing: createPearlPhoto({
      query: "sound healing bowls",
      width: 1200,
      height: 800,
      index: 20,
      alt: "Singing bowls used in a sound healing practice",
    }),
    breathwork: createPearlPhoto({
      query: "mindful breathwork nature",
      width: 1200,
      height: 800,
      index: 21,
      alt: "A mindful breathwork practice surrounded by nature",
    }),
    zenStones: createPearlPhoto({
      query: "balanced zen stones",
      width: 1200,
      height: 800,
      index: 22,
      alt: "Balanced zen stones symbolising calm and stability",
    }),
    forestPath: createPearlPhoto({
      query: "peaceful forest path",
      width: 1200,
      height: 800,
      index: 23,
      alt: "A peaceful green path through a forest",
    }),
    journal: createPearlPhoto({
      query: "wellness journal tea",
      width: 1200,
      height: 800,
      index: 24,
      alt: "A wellness journal with a warm cup of tea",
    }),
    consultation: createPearlPhoto({
      query: "private wellness consultation",
      width: 1200,
      height: 800,
      index: 25,
      alt: "A private holistic wellness consultation",
    }),
  },

  footer: {
    brandName: "INNER BEING WELLNESS",
    tagline: "A deeper commitment to intentional everyday living.",
    description:
      "Holistic practices for awareness, balance, movement and conscious everyday living.",
    socialIcons: [],
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Offerings", href: "/offerings" },
          { label: "The Four Defaults", href: "/#four-defaults" },
          { label: "Thoughts", href: "/thoughts" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Offerings",
        links: [
          {
            label: "Holistic Coaching",
            href: "/offerings#holistic-coaching",
          },
          {
            label: "Frequency Healing",
            href: "/offerings#frequency-healing",
          },
          {
            label: "Movement & Yoga",
            href: "/offerings#movement",
          },
          {
            label: "Meditation & Breathwork",
            href: "/offerings#meditation-breathwork",
          },
          {
            label: "Freedom from Resistance",
            href: "/freedom-from-resistance",
          },
        ],
      },
      {
        title: "Contact",
        details: [
          {
            label: "Email",
            value: "hello@innerbeingwellness.com",
            href: "mailto:hello@innerbeingwellness.com",
          },
          {
            label: "Session Format",
            value: "Online and in-person, subject to availability",
          },
          {
            label: "Response",
            value: "Within two working days",
          },
        ],
      },
    ],
    copyright: "© 2026 Inner Being Wellness. All rights reserved.",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Settings", href: "/cookies" },
    ],
    wellnessDisclaimer:
      "Inner Being Wellness offers complementary wellbeing and educational practices. It does not provide medical diagnosis, psychotherapy or emergency services.",
  },
};

export const pages = {
  home: siteData.homePage,
  about: siteData.aboutPage,
  offerings: siteData.offeringsPage,
  freedomFromResistance: siteData.freedomFromResistancePage,
  thoughts: siteData.thoughtsPage,
  contact: siteData.contactPage,
};

export const getPageById = (pageId) => pages[pageId] ?? null;

export const getNavigationItemById = (itemId) =>
  siteData.navigation.headerLinks.find((item) => item.id === itemId) ?? null;

export const getOfferingById = (offeringId) =>
  siteData.offeringsPage.services.find(
    (offering) => offering.id === offeringId
  ) ?? null;

export const getArticleBySlug = (slug) =>
  siteData.thoughtsPage.articles.find((article) => article.slug === slug) ??
  null;

export default siteData;