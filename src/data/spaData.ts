import { ServiceItem, Therapist, Product, GalleryItem, Review, FAQItem } from '../types';

export const HERO_IMAGES = {
  hero: '/src/assets/images/honey_bloom_hero_1786591156509.jpg',
  headSpa: '/src/assets/images/honey_head_spa_1786591166315.jpg',
  nailArt: '/src/assets/images/honey_nail_art_1786591176285.jpg',
  interior: '/src/assets/images/honey_spa_interior_1786591187350.jpg'
};

export const SERVICES: ServiceItem[] = [
  // Head Spa Rituals
  {
    id: 'head-spa-signature',
    name: 'Honey & Bloom Signature Head Spa',
    category: 'head-spa',
    durationMinutes: 75,
    priceGBP: 110,
    tagline: 'Our flagship 7-step Eastern scalp hydrotherapy ritual with Halo Waterfall & Botanical Steam.',
    description: 'Experience deep relief and hair rejuvenation with our authentic Eastern scalp treatment. Includes microscopic scalp analysis, organic botanical oil steam, circular Halo Waterfall washing, acupressure neck & shoulder massage, custom scalp mask, herbal tea session, and gentle blowout.',
    highlights: [
      'Microscopic scalp & hair follicle analysis',
      'Warm organic herbal steam & hair bath',
      'Circular Halo Waterfall hydrotherapy ring',
      'Deep acupressure scalp, neck & shoulder massage',
      'Herbal tea pairing & soft styling'
    ],
    recommendedFor: 'Stress relief, dry scalp, hair loss prevention, tension headaches, ultimate relaxation',
    image: HERO_IMAGES.headSpa,
    popular: true
  },
  {
    id: 'head-spa-jade-imperial',
    name: 'Imperial Jade Scalp & Facial Renewal',
    category: 'head-spa',
    durationMinutes: 90,
    priceGBP: 140,
    tagline: 'The ultimate 90-minute holistic scalp, guasha & LED facial ritual for mind-body restoration.',
    description: 'An elevated journey incorporating authentic Jade Guasha scalp scraping, warm basalt stone neck therapy, organic herbal eye pillow compression, red-light hair follicle stimulation, and deep cleansing Halo Waterfall.',
    highlights: [
      'Jade Guasha scalp lymphatic drainage',
      'Basalt hot stone neck & decollete therapy',
      'LED Red Light hair follicle stimulation',
      'Halo Waterfall hydrotherapy & botanical steam',
      'Includes complimentary takeaway Cuticle Oil'
    ],
    recommendedFor: 'Chronic neck tension, insomnia, dry damaged hair, scalp lymphatic detox',
    image: HERO_IMAGES.hero,
    popular: true
  },
  {
    id: 'head-spa-express',
    name: 'Express Scalp Refresh & Halo Wash',
    category: 'head-spa',
    durationMinutes: 45,
    priceGBP: 75,
    tagline: 'A targeted 45-minute revitalizing scalp wash & halo waterfall hydro-session.',
    description: 'Ideal for busy schedules. Enjoy a clarifying scalp scrub, warm halo waterfall rinse, soothing head massage, organic conditioning rinse, and quick rough dry.',
    highlights: [
      'Clarifying tea tree scalp scrub',
      'Halo waterfall circulation rinse',
      'Focus head acupressure massage',
      'Leave-in botanical shine serum'
    ],
    recommendedFor: 'Quick mid-week refresh, post-workout scalp detox'
  },

  // Manicures
  {
    id: 'mani-biab',
    name: 'BIAB Builder Gel Structure Manicure',
    category: 'manicure',
    durationMinutes: 65,
    priceGBP: 60,
    tagline: 'Strengthening Builder in a Bottle with Russian precision cuticle care.',
    description: 'Protect and grow your natural nails with Builder in a Bottle (BIAB). Features immaculate dry Russian E-file cuticle work, nail shaping, BIAB apex reinforcement, non-toxic gel color, and organic honey balm massage.',
    highlights: [
      'Russian dry E-file precision cuticle prep',
      'BIAB structural apex builder layer',
      'Non-toxic 10-free vegan gel polish',
      'Organic Cuticle Honey & hand massage'
    ],
    recommendedFor: 'Weak, brittle nails wanting long natural growth and 3-4 week durability',
    image: HERO_IMAGES.nailArt,
    popular: true
  },
  {
    id: 'mani-clean-organic',
    name: 'Honey & Bloom Clean Organic Manicure',
    category: 'manicure',
    durationMinutes: 45,
    priceGBP: 45,
    tagline: 'Nourishing plant-based manicure with organic botanicals & natural polish.',
    description: 'A gentle, chemical-free manicure using 100% vegan, plant-derived care products. Hand soak in herbal rose water, warm jojoba cuticle oil treatment, shape, buff, organic polish, and hand reflexology.',
    highlights: [
      'Warm botanical floral hand soak',
      'Plant-based organic oils & sugar scrub',
      'Non-toxic 10-free air-dry or gel polish',
      'Warm towel wrap & massage'
    ],
    recommendedFor: 'Clean beauty lovers, pregnant clients, natural nail enthusiasts'
  },
  {
    id: 'mani-gel-x',
    name: 'Gel-X Full Soft Gel Extension Studio',
    category: 'manicure',
    durationMinutes: 75,
    priceGBP: 75,
    tagline: 'Lightweight, damage-free soft gel extensions tailored to your custom shape.',
    description: 'Aprés Gel-X soft gel extensions offer immediate length and flawless shape without acrylic fumes or nail plate damage. Includes full prep, custom tip fitting, gel coat, and cuticle hydration.',
    highlights: [
      'Damage-free Aprés Gel-X system',
      'Custom choice: Almond, Coffin, Square, Oval',
      'Ultra-natural lightweight feel',
      'Lasts up to 4 weeks cleanly'
    ],
    popular: false
  },

  // Pedicures
  {
    id: 'pedi-luxury-honey',
    name: 'Honey & Organic Botanical Spa Pedicure',
    category: 'pedicure',
    durationMinutes: 60,
    priceGBP: 65,
    tagline: 'Restorative foot bath in warm honey-milk, herbal scrub & warm stone calf massage.',
    description: 'Immerse your feet in a soothing warm honey and lavender flower foot soak. Followed by organic brown sugar exfoliation, calloused heel smoothing, cuticle prep, warm stone leg massage, and non-toxic polish.',
    highlights: [
      'Warm organic milk & honey foot bath',
      'Brown sugar & oat botanical scrub',
      'Basalt warm stone calf & foot reflexology',
      'Deep moisturizing honey butter wrap'
    ],
    recommendedFor: 'Tired feet, dry heels, complete lower body relaxation',
    image: HERO_IMAGES.interior,
    popular: true
  },
  {
    id: 'pedi-express',
    name: 'Express Clean Pedicure',
    category: 'pedicure',
    durationMinutes: 40,
    priceGBP: 50,
    tagline: 'Essential foot grooming, shaping & non-toxic polish refresh.',
    description: 'Foot soak, nail trim and shape, gentle cuticle care, light scrub, hydrating lotion, and long-lasting non-toxic polish.',
    highlights: [
      'Herbal foot soak',
      'Nail shaping & cuticle prep',
      'Non-toxic gel or lacquer polish'
    ]
  },

  // Packages
  {
    id: 'package-grand-bloom',
    name: 'The Grand Bloom Sanctuary Duo',
    category: 'packages',
    durationMinutes: 150,
    priceGBP: 185,
    tagline: 'Our signature Head Spa + BIAB Manicure ritual in a private luxury suite.',
    description: 'Combine our 75-minute Signature Head Spa with our Russian E-file BIAB Manicure. Served with organic sparkling flower tea, artisan macarons, and a complimentary take-home cuticle oil.',
    highlights: [
      '75-min Signature Halo Waterfall Head Spa',
      '65-min BIAB Builder Gel Manicure',
      'Glass of organic sparkling botanical tea',
      'Complementary gift bag (£25 value)'
    ],
    recommendedFor: 'Bridal prep, birthday pampering, self-love days, ultimate gifts',
    popular: true
  },
  {
    id: 'package-head-pedi',
    name: 'Head & Sole Botanical Harmony',
    category: 'packages',
    durationMinutes: 120,
    priceGBP: 160,
    tagline: '75-minute Head Spa paired with Honey Milk Spa Pedicure.',
    description: 'Total top-to-toe bliss. Experience the calming halo waterfall while your feet soak in warm honey botanical waters, followed by scalp hydrotherapy and foot stone massage.',
    highlights: [
      '75-min Signature Head Spa',
      '45-min Honey Spa Pedicure',
      'Herbal tea pairing'
    ]
  },

  // Add-ons
  {
    id: 'addon-nail-art-tier1',
    name: 'Nail Art Tier 1: Minimalist Line & Micro-French',
    category: 'add-ons',
    durationMinutes: 15,
    priceGBP: 15,
    tagline: 'Subtle micro-french tips, clean dots, chrome accent or single flower.',
    description: 'Elegant, minimal accents designed to elevate natural nails.',
    highlights: ['Micro-french', 'Chrome powder glow', 'Gold foil accents']
  },
  {
    id: 'addon-nail-art-tier2',
    name: 'Nail Art Tier 2: Blooming Gel & Honey Gold Art',
    category: 'add-ons',
    durationMinutes: 30,
    priceGBP: 28,
    tagline: 'Hand-painted floral blooms, honey drips, cat-eye velvet or pearl glaze.',
    description: 'Intricate custom artwork on all 10 fingers.',
    highlights: ['Handpainted floral bloom', 'Velvet cat-eye', 'Honey dripping gold']
  },
  {
    id: 'addon-scalp-led',
    name: 'Scalp LED Light Therapy & Follicle Ampoule',
    category: 'add-ons',
    durationMinutes: 15,
    priceGBP: 20,
    tagline: 'Targeted red LED light therapy to stimulate hair growth.',
    description: 'Complements any Head Spa with localized LED wavelength therapy and botanical peptide serum.',
    highlights: ['Red spectrum 650nm light', 'Peptide hair density serum']
  }
];

export const THERAPISTS: Therapist[] = [
  {
    id: 'donna-founder',
    name: 'Donna',
    role: 'Founder & Master Head Spa Practitioner',
    bio: 'Born in Vietnam and raised in East London, Donna founded Honey & Bloom to bring authentic Eastern scalp care and clean non-toxic beauty rituals to Royal Docks.',
    specialties: ['Signature Head Spa', 'Jade Guasha Scalp Therapy', 'Bridal Rituals'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    rating: 5.0
  },
  {
    id: 'maya-head-spa',
    name: 'Maya',
    role: 'Senior Scalp & Hydrotherapy Specialist',
    bio: 'Certified in Japanese Halo Waterfall techniques and holistic neck acupressure with 6+ years of scalp wellness experience.',
    specialties: ['Halo Waterfall Hydrotherapy', 'Hot Stone Neck Relief', 'Deep Scalp Detox'],
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    rating: 4.9
  },
  {
    id: 'chloe-nail-artist',
    name: 'Chloe',
    role: 'Russian Precision & BIAB Nail Artist',
    bio: 'Master of Russian E-file cuticle technique and delicate hand-painted honey bloom nail art.',
    specialties: ['BIAB Structure', 'Russian Cuticle Care', 'Blooming Gel Artistry'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    rating: 4.9
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-scalp-serum',
    name: 'Organic Scalp Elixir & Growth Oil',
    category: 'scalp-care',
    priceGBP: 28,
    volume: '50ml',
    description: 'Cold-pressed rosemary, honey extract, jojoba, and tea tree oil to nourish roots and balance scalp sebum.',
    ingredients: ['Rosemary Leaf Oil', 'Pure Honey Extract', 'Cold-pressed Jojoba', 'Peppermint Oil'],
    image: HERO_IMAGES.interior,
    inStock: true
  },
  {
    id: 'prod-cuticle-honey',
    name: 'Botanical Cuticle Honey Drop',
    category: 'nail-care',
    priceGBP: 18,
    volume: '15ml',
    description: 'Our signature cuticle oil infused with raw acacia honey, vitamin E, and sweet almond oil in a dropper bottle.',
    ingredients: ['Sweet Almond Oil', 'Raw Acacia Honey', 'Vitamin E Tocopherol', 'Chamomile Extract'],
    image: HERO_IMAGES.nailArt,
    inStock: true
  },
  {
    id: 'prod-tea-bloom',
    name: 'Honey & Bloom House Herbal Tea',
    category: 'wellness-tea',
    priceGBP: 16,
    volume: '100g loose leaf',
    description: 'Our custom blend of organic chamomile, chrysanthemum flowers, honeycomb shavings, and lemongrass.',
    ingredients: ['Organic Chamomile', 'Chrysanthemum', 'Dehydrated Honeycomb', 'Lemongrass'],
    image: HERO_IMAGES.interior,
    inStock: true
  },
  {
    id: 'prod-guasha-comb',
    name: 'Rose Quartz Scalp Guasha Comb',
    category: 'tools',
    priceGBP: 22,
    volume: '1 Piece',
    description: 'Hand-carved natural rose quartz comb designed to stimulate scalp blood flow and ease headache tension.',
    image: HERO_IMAGES.headSpa,
    inStock: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Honey Gold Leaf BIAB Manicure',
    category: 'nail-art',
    image: HERO_IMAGES.nailArt,
    description: 'Russian dry prep with BIAB nude base, real 24k gold foil accents, and glossy gel finish.',
    serviceIdToBook: 'mani-biab'
  },
  {
    id: 'gal-2',
    title: 'Japanese Halo Waterfall Head Spa Suite',
    category: 'head-spa',
    image: HERO_IMAGES.headSpa,
    description: 'Our custom water fountain halo ring circulating warm herbal infusion over scalp.',
    serviceIdToBook: 'head-spa-signature'
  },
  {
    id: 'gal-3',
    title: 'Tranquil Royal Docks Sanctuary',
    category: 'sanctuary',
    image: HERO_IMAGES.hero,
    description: 'Warm travertine stone, soft linen curtains, and peaceful organic lighting in London E16.',
    serviceIdToBook: 'package-grand-bloom'
  },
  {
    id: 'gal-4',
    title: 'Honey Milk Spa Pedicure',
    category: 'pedicure',
    image: HERO_IMAGES.interior,
    description: 'Aromatherapy soak with fresh rose petals and warm basalt stone leg massage.',
    serviceIdToBook: 'pedi-luxury-honey'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sophie L. (Royal Wharf resident)',
    rating: 5,
    date: 'August 2026',
    service: 'Signature Head Spa (75 mins)',
    comment: 'The absolute best experience in East London! The halo waterfall water ring gave me instant relaxation. My scalp feels completely weightless and clean. Donna is so attentive and welcoming!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Gemma M.',
    rating: 5,
    date: 'July 2026',
    service: 'BIAB Builder Gel Manicure',
    comment: 'Chloe’s Russian manicure work is unmatched. My cuticles have never looked this clean. The BIAB lasted 4 whole weeks without a single chip. Plus the complimentary herbal tea is divine.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Elena & Mark K.',
    rating: 5,
    date: 'August 2026',
    service: 'The Grand Bloom Duo Package',
    comment: 'Booked this for my birthday and it was pure bliss! The private head spa suite is so quiet, smells like honey and eucalyptus. 10/10 recommendation for anyone near Pontoon Dock.',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What should I wear or prepare for a Head Spa session?',
    answer: 'Wear comfortable clothing. We provide soft spa robes and towels. Please remove hair extensions or tight braids prior to your appointment so we can thoroughly analyze and treat your scalp.',
    category: 'head-spa'
  },
  {
    id: 'faq-2',
    question: 'Are your products non-toxic, vegan, and pregnancy-safe?',
    answer: 'Yes! We prioritize plant-based, 10-free, cruelty-free, and organic formulas. Our manicures and head spa oils are safe for expectant mothers (please inform therapist of any specific allergies).',
    category: 'nail-care'
  },
  {
    id: 'faq-3',
    question: 'How do I reach the sanctuary at 55 Royal Crest Avenue?',
    answer: 'We are located at Unit 1.1-02, 55 Royal Crest Avenue, London E16 2EB. We are a 3-minute walk from Pontoon Dock DLR Station (Royal Docks) or 5 minutes from Royal Wharf Pier.',
    category: 'location'
  },
  {
    id: 'faq-4',
    question: 'What is your cancellation and deposit policy?',
    answer: 'Free cancellations or rescheduling are permitted up to 24 hours before your scheduled appointment time via link in your email confirmation or WhatsApp +44 7777 326555.',
    category: 'booking'
  }
];

export const HEAD_SPA_STEPS = [
  {
    step: 1,
    title: 'Microscopic Scalp Diagnostic',
    description: 'High-definition digital camera analysis of your scalp pores, oil balance, and hair follicle health.',
    icon: 'Search'
  },
  {
    step: 2,
    title: 'Organic Botanical Oil Steam',
    description: 'Warm herbal steam mist combined with rosemary and honey oil to open pores and soften buildup.',
    icon: 'Sparkles'
  },
  {
    step: 3,
    title: 'Halo Waterfall Hydrotherapy',
    description: 'Our signature circular water ring cascading warm purified water over your forehead and scalp in gentle rhythmic waves.',
    icon: 'Waves'
  },
  {
    step: 4,
    title: 'Acupressure Scalp & Neck Massage',
    description: 'Relieves cranial tension, headache pressure points, and shoulder tightness using natural oil blends.',
    icon: 'HeartHandshake'
  },
  {
    step: 5,
    title: 'Botanical Hair Mask & Rinsing',
    description: 'Deep conditioning treatment enriched with raw honey proteins to lock in hydration and shine.',
    icon: 'Droplets'
  },
  {
    step: 6,
    title: 'Herbal Tea Ritual',
    description: 'Sip on our signature hot organic honey chrysanthemum tea while resting in our lounge.',
    icon: 'Coffee'
  },
  {
    step: 7,
    title: 'Gentle Blow-Dry & Styling',
    description: 'Finish with a soft rough dry or smooth blowout so you step out feeling radiant.',
    icon: 'Wind'
  }
];
