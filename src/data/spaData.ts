import { ServiceItem, Therapist, Product, GalleryItem, Review, FAQItem } from '../types';

export const FRESHA_BOOKING_URL = 'https://www.fresha.com/en-GB/a/reverie-nail-studio-west-wickham-133-high-street-iahgkjhe?pId=2873666';
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/2TzY5SyqYPgQvU237';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61589489720653';
export const INSTAGRAM_URL = 'https://www.instagram.com/reverie.nail.studio';
export const SALON_PHONE = '020 3143 6868';
export const SALON_PHONE_TEL = 'tel:02031436868';

export const SALON_INFO = {
  name: 'REVERIE NAIL STUDIO',
  address: '133 High Street, West Wickham, BR4 0LU',
  phone: SALON_PHONE,
  phoneTel: SALON_PHONE_TEL,
  instagram: '@reverie.nail.studio',
  instagramUrl: INSTAGRAM_URL,
  facebookUrl: FACEBOOK_URL,
  googleMapsUrl: GOOGLE_MAPS_URL,
  freshaUrl: FRESHA_BOOKING_URL,
  rating: '4.9',
  ratingLabel: '4.9 ⭐ Google',
  openingHours: [
    { days: 'Monday – Saturday', hours: '09:30 – 18:30' },
    { days: 'Sunday', hours: '10:00 – 17:00' },
  ]
};

export const SALON_POLICIES = [
  {
    id: 'guarantee',
    title: '7-Day Quality Guarantee',
    short: 'Complimentary repairs',
    description: 'We stand firmly behind our artistry. If any chipping, lifting, or breakage occurs within 7 days of your treatment, contact us or visit the studio and we will repair it free of charge.',
  },
  {
    id: 'cancellation',
    title: 'Bookings & Cancellations',
    short: '24-hour advance notice',
    description: 'We welcome bookings via Fresha and walk-ins when space allows. If you need to reschedule or cancel your appointment, please let us know at least 24 hours in advance.',
  },
  {
    id: 'punctuality',
    title: 'Arrivals & Punctuality',
    short: '5 minutes early',
    description: 'Please arrive 5 minutes before your scheduled appointment time. To maintain our relaxing atmosphere and respect subsequent guests, arrivals over 15 minutes late may require a modified service.',
  },
  {
    id: 'hygiene',
    title: 'Hospital-Grade Hygiene',
    short: 'Strict sanitisation',
    description: 'Every metal instrument is sealed and medical-grade autoclaved between appointments. Files, buffers, and pedicure tub liners are strictly single-use.',
  },
  {
    id: 'natural-health',
    title: 'Natural Nail Health',
    short: 'Gentle, safe care',
    description: 'We prioritise the integrity of your natural nail bed. We use gentle soak-off techniques, HEMA & TPO-free quality gels, and never aggressively file the natural plate.',
  },
  {
    id: 'consultation',
    title: 'Consultation & Refreshments',
    short: 'Tailored for you',
    description: 'Complimentary herbal teas, fresh coffee, and sweets are offered during your visit. Please inform our technicians if you have any allergies or sensitive skin conditions.',
  },
];

export const STUDIO_SLIDES = [
  {
    id: 'slide-1',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    title: 'The Main Studio Floor',
    subtitle: 'Warm lighting, botanical touches, and calm acoustic atmosphere',
    tag: '133 High Street',
  },
  {
    id: 'slide-2',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200',
    title: 'Bespoke Nail Artistry Stations',
    subtitle: 'Equipped with medical-grade ventilation and ergonomic seating',
    tag: 'BIAB & Acrylics',
  },
  {
    id: 'slide-3',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200',
    title: 'Pedicure & Hot Stone Sanctuary',
    subtitle: 'Plush armchairs with soothing foot baths and complimentary treats',
    tag: 'Relaxation Area',
  },
  {
    id: 'slide-4',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1200',
    title: 'Complimentary Refreshment Bar',
    subtitle: 'Selection of fresh coffee, organic herbal teas, and artisan sweets',
    tag: 'Guest Comfort',
  },
  {
    id: 'slide-5',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1200',
    title: 'Sterilisation & Hygiene Suite',
    subtitle: 'Hospital-grade autoclaved instruments and single-use buffers',
    tag: 'Hospital-Grade',
  },
];

export const HERO_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1200',
  nails1: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
  nails2: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
  interior: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
  studio1: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
  studio2: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  studio3: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
};

export const FEATURED_MENU_CARDS = [
  {
    id: 'gel-manicure',
    title: 'Gel Manicure',
    price: 'from £33',
    description: 'Full cuticle care, shaping, gel polish, hand massage and hot towel.',
    duration: '45 mins',
  },
  {
    id: 'gel-pedicure',
    title: 'Gel Pedicure',
    price: 'from £38',
    description: 'Callus removal, exfoliation, hot towel wrap and hot stone massage.',
    duration: '50 mins',
  },
  {
    id: 'biab-overlay',
    title: 'BIAB Overlay',
    price: 'from £35',
    description: 'Builder gel over your natural nails for added strength and structure.',
    duration: '50 mins',
  },
  {
    id: 'acrylic-extensions',
    title: 'Acrylic Extensions with Gel Colour',
    price: 'from £38',
    description: 'Sculpted to your desired length and shape, finished with gel colour.',
    duration: '60 mins',
  },
];

export const WHY_REVERIE_ITEMS = [
  {
    id: 'why-1',
    title: 'Seven-day guarantee',
    description: 'If anything happens to your gel or extensions in the first week, come back and we’ll fix it free of charge.',
  },
  {
    id: 'why-2',
    title: 'A drink while you’re here',
    description: 'Tea, coffee, something cold, and a biscuit or sweet.',
  },
  {
    id: 'why-3',
    title: 'Products worth the price',
    description: 'Gel colour that’s HEMA and TPO free, Aesop at the basin, L’Occitane at the table.',
  },
  {
    id: 'why-4',
    title: 'Clean tools, every client',
    description: 'Tools are disinfected between every appointment.',
  },
];

export const SERVICES: ServiceItem[] = [
  // MANICURE & PEDICURE
  {
    id: 'gel-pedicure',
    name: 'Gel Pedicure',
    category: 'manicure-pedicure',
    durationMinutes: 50,
    durationDisplay: '50 mins',
    priceGBP: 38,
    priceDisplay: '£38',
    tagline: 'Pamper your feet with an indulgent treatment that combines essential foot care practices.',
    description: 'Pamper your feet with an indulgent treatment that combines essential foot care practices. This luxurious gel pedicure includes detailed cuticle grooming, effective callus removal, and gentle exfoliation to reveal softer skin. Enjoy the soothing warmth of a hot towel wrap and the relaxing touch of a hot stone massage, followed by a flawless application of gel polish for a stunning finish. Rejuvenate your feet and step out feeling fresh and fabulous.',
    highlights: ['Cuticle grooming & callus removal', 'Gentle exfoliation & hot towel wrap', 'Hot stone massage & flawless gel polish'],
    popular: true
  },
  {
    id: 'gel-mani-pedi',
    name: 'Gel Mani & Pedi',
    category: 'manicure-pedicure',
    durationMinutes: 95,
    durationDisplay: '1 hour 35 mins • 2 services',
    priceGBP: 68,
    priceDisplay: '£68',
    originalPriceDisplay: '£71',
    discountBadge: 'Save £3',
    tagline: 'Experience complete hand and foot care with our Gel Mani & Pedi bundle.',
    description: 'Experience complete hand and foot care with our Gel Mani & Pedi bundle. Enjoy nail shaping, cuticle care, and exfoliation, followed by a soothing hot towel wrap. Relax with a rejuvenating hot stone massage, finished off with a flawless regular polish. Indulge in this comprehensive treatment that leaves your nails looking their best.',
    highlights: ['Nail shaping & precision cuticle care', 'Exfoliation, hot towel wrap & hot stone massage', 'Flawless polish application bundle'],
    popular: true
  },
  {
    id: 'classic-manicure',
    name: 'Classic Manicure',
    category: 'manicure-pedicure',
    durationMinutes: 30,
    durationDisplay: '30 mins',
    priceGBP: 20,
    priceDisplay: '£20',
    tagline: 'Transform your hands into a canvas of beauty with our Classic Manicure.',
    description: 'Transform your hands into a canvas of beauty with our Classic Manicure. Enjoy meticulous shaping and cuticle care, alongside a soothing hand massage that revitalises your skin. Experience gentle exfoliation followed by a pampering hot towel wrap, leaving you feeling refreshed. Finally, choose your favourite regular polish to complete your stunning look. Step out with nails that are perfectly polished and hands that are beautifully nourished.',
    highlights: ['Meticulous shaping & cuticle care', 'Soothing hand massage & gentle exfoliation', 'Pampering hot towel wrap & regular polish'],
    popular: true
  },
  {
    id: 'classic-pedicure',
    name: 'Classic Pedicure',
    category: 'manicure-pedicure',
    durationMinutes: 45,
    durationDisplay: '45 mins',
    priceGBP: 33,
    priceDisplay: '£33',
    tagline: 'Treat your feet to a rejuvenating experience that goes beyond the basics.',
    description: 'Treat your feet to a rejuvenating experience that goes beyond the basics. Our Classic Pedicure includes meticulous shaping, expert cuticle care, and thorough callus removal, leaving your feet smooth and revitalised. Enjoy a gentle exfoliation followed by a soothing hot stone massage, and indulge in a warming hot towel wrap for ultimate relaxation. To finish, choose a regular polish that adds a touch of elegance to your look. Relax and unwind as we pamper your feet in a serene atmosphere.',
    highlights: ['Meticulous shaping & expert cuticle care', 'Thorough callus removal & gentle exfoliation', 'Soothing hot stone massage & hot towel wrap with regular polish'],
    popular: true
  },
  {
    id: 'classic-mani-pedi',
    name: 'Classic Mani & Pedi',
    category: 'manicure-pedicure',
    durationMinutes: 75,
    durationDisplay: '1 hour 15 mins • 2 services',
    priceGBP: 50,
    priceDisplay: '£50',
    originalPriceDisplay: '£53',
    discountBadge: 'Save 6%',
    tagline: 'Indulge in a complete hand and foot care experience that rejuvenates and refreshes.',
    description: 'Indulge in a complete hand and foot care experience that rejuvenates and refreshes. This bundle includes nail shaping, meticulous cuticle care, and gentle exfoliation to enhance your skin’s texture. Enjoy a soothing hot towel wrap and a relaxing hot stone massage that melts away tension, followed by a fresh application of regular polish. Treat yourself to essential pampering today!',
    highlights: ['Nail shaping & meticulous cuticle care', 'Gentle exfoliation & soothing hot towel wrap', 'Relaxing hot stone massage & fresh regular polish'],
    popular: true
  },
  {
    id: 'gel-colour-only',
    name: 'Gel Colour only - Hands or Toes',
    category: 'manicure-pedicure',
    durationMinutes: 30,
    durationDisplay: '30 mins',
    priceGBP: 28,
    priceDisplay: '£28',
    tagline: 'Elevate your nail game with a stunning gel polish application that enhances your natural beauty.',
    description: 'Elevate your nail game with a stunning gel polish application that enhances your natural beauty. Experience a meticulous gel colour treatment for your hands or toes, providing a flawless finish that lasts. Our premium gel polish delivers vibrant colour and a lasting shine, keeping your nails looking immaculate for weeks on end.',
    highlights: ['Hands or toes options', 'Vibrant colour & high-gloss lasting shine', 'Meticulous and long-lasting gel polish']
  },
  {
    id: 'regular-polish-change',
    name: 'Regular Polish Change',
    category: 'manicure-pedicure',
    durationMinutes: 15,
    durationDisplay: '15 mins',
    priceGBP: 'from £10',
    priceDisplay: 'from £10',
    tagline: 'Transform your nails with a beautiful new polish that elevates your look.',
    description: 'Transform your nails with a beautiful new polish that elevates your look. This quick service refreshes your manicure or pedicure, ensuring your hands and feet remain stylish and well-groomed. Perfect for keeping your nails in top condition.',
    highlights: ['Quick shape and fresh polish coat', 'Hands or feet refresh', 'Keeps nails stylish & well-groomed']
  },
  {
    id: 'manicure-ibx',
    name: 'Manicure with IBX treatment',
    category: 'manicure-pedicure',
    durationMinutes: 40,
    durationDisplay: '40 mins',
    priceGBP: 33,
    priceDisplay: '£33',
    tagline: 'Pamper your hands with a rejuvenating manicure that includes the nourishing IBX treatment.',
    description: 'Pamper your hands with a rejuvenating manicure that includes the nourishing IBX treatment. This service will care for your nails and help improve their strength, leaving you with beautifully polished and healthy-looking hands.',
    highlights: ['Nourishing IBX strengthening treatment', 'Repairs and protects natural nails', 'Leaves hands beautifully polished & healthy'],
    popular: true
  },

  // BIAB (BUILDER IN A BOTTLE)
  {
    id: 'biab-overlay',
    name: 'BIAB Overlay',
    category: 'biab',
    durationMinutes: 50,
    durationDisplay: '50 mins',
    priceGBP: 35,
    priceDisplay: '£35',
    tagline: 'Transform your nails with our exceptional BIAB Overlay, designed to enhance strength and structure.',
    description: 'Transform your nails with our exceptional BIAB Overlay, designed to enhance strength and structure while maintaining a natural look. This service includes thorough nail preparation and allows you to choose your favourite colour, ensuring a stunning finish that suits your style.',
    highlights: ['Builder In A Bottle strength & apex reinforcement', 'Thorough professional nail preparation', 'Choice of colour for a stunning natural look'],
    popular: true
  },
  {
    id: 'biab-infill',
    name: 'BIAB Infill',
    category: 'biab',
    durationMinutes: 40,
    durationDisplay: '40 mins',
    priceGBP: 32,
    priceDisplay: '£32',
    tagline: 'Revitalize your nails with our expert maintenance service designed specifically for your BIAB set.',
    description: 'Revitalize your nails with our expert maintenance service designed specifically for your BIAB set. This treatment includes filling in new growth, reshaping your nails to perfection, and applying a fresh coat of gel colour for a stunning finish.',
    highlights: ['Fills in new natural growth', 'Reshaping & balancing to perfection', 'Fresh coat of gel colour'],
    popular: true
  },

  // NAIL EXTENSIONS (ACRYLIC & OMBRÉ)
  {
    id: 'acrylic-extensions-gel',
    name: 'Acrylic Extensions with Gel Colour',
    category: 'extensions',
    durationMinutes: 50,
    durationDisplay: '50 mins',
    priceGBP: 38,
    priceDisplay: '£38',
    tagline: 'Transform your nails with beautiful extensions shaped to your unique style.',
    description: 'Transform your nails with beautiful extensions shaped to your unique style. Our expert team sculpts acrylic enhancements to your desired length and finish with high-gloss gel colour.',
    highlights: ['Sculpted to desired length & shape', 'Meticulous preparation', 'Vibrant long-lasting gel colour'],
    popular: true
  },
  {
    id: 'acrylic-infill-gel',
    name: 'Acrylic Infill with Gel Colour',
    category: 'extensions',
    durationMinutes: 45,
    durationDisplay: '45 mins',
    priceGBP: 35,
    priceDisplay: '£35',
    tagline: 'Revitalize your acrylic nails with our exceptional infill service, expertly crafted to keep your manicure looking flawless.',
    description: 'Revitalize your acrylic nails with our exceptional infill service, expertly crafted to keep your manicure looking flawless. This treatment effectively addresses new growth while providing reshaping for the perfect finish. Choose from a vibrant selection of gel colours to complement your unique style.',
    highlights: ['Addresses new growth effectively', 'Expert reshaping for a perfect finish', 'Vibrant selection of gel colours'],
    popular: true
  },
  {
    id: 'acrylic-extensions-regular',
    name: 'Acrylic Extensions with Regular Polish',
    category: 'extensions',
    durationMinutes: 45,
    durationDisplay: '45 mins',
    priceGBP: 33,
    priceDisplay: '£33',
    tagline: 'Transform your look with stunning nail enhancements tailored to your preferred length and shape.',
    description: 'Transform your look with stunning nail enhancements tailored to your preferred length and shape. Our treatment includes meticulous nail preparation followed by a regular polish of your choice.',
    highlights: ['Tailored to preferred length and shape', 'Meticulous nail preparation', 'Choice of classic regular polish']
  },
  {
    id: 'acrylic-infill-regular',
    name: 'Acrylic Infill with Regular Polish',
    category: 'extensions',
    durationMinutes: 40,
    durationDisplay: '40 mins',
    priceGBP: 30,
    priceDisplay: '£30',
    tagline: 'Revitalize your acrylic nails with our infill service, designed to keep your manicure looking flawless.',
    description: 'Revitalize your acrylic nails with our infill service, designed to keep your manicure looking flawless. This treatment includes a fill to address new growth, expert reshaping for a perfect finish, and a selection of regular polish to suit your style. Enjoy beautifully maintained nails.',
    highlights: ['Fill to address new growth', 'Expert reshaping for a perfect finish', 'Selection of regular polish to suit your style']
  },
  {
    id: 'full-set-ombre',
    name: 'Full Set Ombré',
    category: 'extensions',
    durationMinutes: 50,
    durationDisplay: '50 mins',
    priceGBP: 40,
    priceDisplay: '£40',
    tagline: 'Transform your nails with a beautiful blend of colours that seamlessly transitions from one hue to another.',
    description: 'Transform your nails with a beautiful blend of colours that seamlessly transitions from one hue to another. Each nail is expertly shaped to your desired length and finished with a stunning soft ombré effect, giving your hands a chic and elegant look.',
    highlights: ['Seamless blend of colours', 'Expertly shaped to desired length', 'Stunning soft ombré effect'],
    popular: true
  },
  {
    id: 'infill-ombre',
    name: 'Infill Ombré',
    category: 'extensions',
    durationMinutes: 40,
    durationDisplay: '40 mins',
    priceGBP: 37,
    priceDisplay: '£37',
    tagline: 'Revitalize your nails with our infill ombré service, designed to maintain the beauty of your existing ombré set.',
    description: 'Revitalize your nails with our infill ombré service, designed to maintain the beauty of your existing ombré set. Enjoy a thorough refill and precise shaping, topped off with a flawlessly blended ombré finish that will leave your nails looking stunning.',
    highlights: ['Thorough ombré refill', 'Precise shaping & structure rebalance', 'Flawlessly blended ombré finish']
  },

  // DIPPING POWDER
  {
    id: 'dipping-powder-overlay',
    name: 'Dipping Powder Overlay',
    category: 'dipping-powder',
    durationMinutes: 45,
    durationDisplay: '45 mins',
    priceGBP: 35,
    priceDisplay: '£35',
    tagline: 'Elevate your nail game with our lightweight dipping powder overlay.',
    description: 'Elevate your nail game with our lightweight dipping powder overlay. This innovative treatment not only enhances the beauty of your natural nails but also adds exceptional strength. Choose from a stunning array of colours to express your unique style, ensuring a flawless and long-lasting finish that leaves your nails looking fabulous and feeling resilient.',
    highlights: ['Lightweight & adds exceptional strength', 'Stunning array of colours', 'Flawless, resilient & long-lasting finish'],
    popular: true
  },
  {
    id: 'dipping-powder-extensions',
    name: 'Dipping Powder Extensions',
    category: 'dipping-powder',
    durationMinutes: 50,
    durationDisplay: '50 mins',
    priceGBP: 37,
    priceDisplay: '£37',
    tagline: 'Transform your nails with stunning colour and added length through our innovative dipping powder technique.',
    description: 'Transform your nails with stunning colour and added length through our innovative dipping powder technique. Your extensions are expertly shaped to fit your personal style, providing a strong and long-lasting finish. Experience vibrant hues and exceptional durability, ensuring your nails look fabulous for weeks to come.',
    highlights: ['Added length with dipping powder', 'Expertly shaped to personal style', 'Vibrant hues & exceptional durability']
  },

  // ADD-ONS
  {
    id: 'addon-nail-repair',
    name: 'Nail repair',
    category: 'add-ons',
    durationMinutes: 15,
    durationDisplay: '15 mins',
    priceGBP: 5,
    priceDisplay: '£5',
    tagline: 'Quick and gentle repair for broken, chipped or cracked nails.',
    description: 'Quick and gentle repair for broken, chipped or cracked nails to restore strength and seamless beauty to your manicure.',
    highlights: ['Quick 15-minute repair', 'Restores strength & beauty', 'Seamless fix for chipped or cracked nails']
  },
  {
    id: 'addon-removal-only',
    name: 'Removal only',
    category: 'add-ons',
    durationMinutes: 20,
    durationDisplay: '15 mins - 20 mins',
    priceGBP: 'from £10',
    priceDisplay: 'from £10',
    tagline: 'Experience a gentle and professional removal of gel polish or acrylic extensions.',
    description: 'Experience a gentle and professional removal of gel polish or acrylic extensions. Our expert team at Reverie Nail Studio ensures a safe process that protects your natural nails while effectively removing any old enhancements.',
    highlights: ['Safe and gentle removal process', 'Protects natural nail beds', 'Suitable for gel polish or acrylic extensions']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'spotlight-gel-pedicure',
    title: 'Gel Pedicure',
    category: 'pedicure',
    categoryLabel: 'Manicure & Pedicure',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=800',
    description: 'Pamper your feet with an indulgent treatment that combines essential foot care practices. This luxurious gel pedicure includes detailed cuticle grooming, effective callus removal, and gentle exfoliation to reveal softer skin. Enjoy the soothing warmth of a hot towel wrap and the relaxing touch of a hot stone massage, followed by a flawless application of gel polish for a stunning finish. Rejuvenate your feet and step out feeling fresh and fabulous.',
    duration: '50 mins',
    price: '£38',
    badge: 'Guest Favorite',
    highlights: ['Cuticle grooming & callus removal', 'Gentle exfoliation & hot towel wrap', 'Hot stone massage & flawless gel polish'],
    serviceIdToBook: 'gel-pedicure'
  },
  {
    id: 'spotlight-gel-mani-pedi',
    title: 'Gel Mani & Pedi',
    category: 'combo',
    categoryLabel: 'Manicure & Pedicure Combo',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    description: 'Experience complete hand and foot care with our Gel Mani & Pedi bundle. Enjoy nail shaping, cuticle care, and exfoliation, followed by a soothing hot towel wrap. Relax with a rejuvenating hot stone massage, finished off with a flawless regular polish. Indulge in this comprehensive treatment that leaves your nails looking their best.',
    duration: '1 hour 35 mins • 2 services',
    price: '£68',
    originalPrice: '£71',
    badge: 'Save £3',
    highlights: ['Nail shaping & precision cuticle care', 'Exfoliation, hot towel wrap & hot stone massage', 'Flawless polish application bundle'],
    serviceIdToBook: 'gel-mani-pedi'
  },
  {
    id: 'spotlight-biab-overlay',
    title: 'BIAB Overlay',
    category: 'biab',
    categoryLabel: 'BIAB (Builder In A Bottle)',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800',
    description: 'Transform your nails with our exceptional BIAB Overlay, designed to enhance strength and structure while maintaining a natural look. This service includes thorough nail preparation and allows you to choose your favourite colour, ensuring a stunning finish that suits your style.',
    duration: '50 mins',
    price: '£35',
    badge: 'Nail Health',
    highlights: ['Builder In A Bottle strength & apex reinforcement', 'Thorough professional nail preparation', 'Choice of colour for a stunning natural look'],
    serviceIdToBook: 'biab-overlay'
  },
  {
    id: 'spotlight-acrylic-extensions-gel',
    title: 'Acrylic Extensions with Gel Colour',
    category: 'extensions',
    categoryLabel: 'Nail Extensions (Acrylic)',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    description: 'Transform your nails with beautiful extensions shaped to your unique style. Our expert team sculpts acrylic enhancements to your desired length and finish with high-gloss gel colour.',
    duration: '50 mins',
    price: '£38',
    badge: 'Popular',
    highlights: ['Sculpted to desired length & shape', 'Meticulous preparation', 'Vibrant long-lasting gel colour'],
    serviceIdToBook: 'acrylic-extensions-gel'
  },
  {
    id: 'spotlight-full-set-ombre',
    title: 'Full Set Ombré',
    category: 'extensions',
    categoryLabel: 'Ombré Extensions',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    description: 'Transform your nails with a beautiful blend of colours that seamlessly transitions from one hue to another. Each nail is expertly shaped to your desired length and finished with a stunning soft ombré effect, giving your hands a chic and elegant look.',
    duration: '50 mins',
    price: '£40',
    badge: 'Trending',
    highlights: ['Seamless blend of colours', 'Expertly shaped to desired length', 'Stunning soft ombré effect'],
    serviceIdToBook: 'full-set-ombre'
  },
  {
    id: 'spotlight-dipping-powder-overlay',
    title: 'Dipping Powder Overlay',
    category: 'dipping-powder',
    categoryLabel: 'Dipping Powder',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800',
    description: 'Elevate your nail game with our lightweight dipping powder overlay. This innovative treatment not only enhances the beauty of your natural nails but also adds exceptional strength. Choose from a stunning array of colours to express your unique style, ensuring a flawless and long-lasting finish that leaves your nails looking fabulous and feeling resilient.',
    duration: '45 mins',
    price: '£35',
    badge: 'Resilient',
    highlights: ['Lightweight & adds exceptional strength', 'Stunning array of colours', 'Flawless, resilient & long-lasting finish'],
    serviceIdToBook: 'dipping-powder-overlay'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Loulou Gielly',
    badge: 'Local Guide',
    rating: 5,
    date: '3 weeks ago',
    service: 'Gel Pedicure with Massage Chair & Drink',
    comment: 'Honestly one the one best nail studios in my opinion. Had a gel pedicure done here and they had massage chairs and a drink menu included within the appointment. All that at an affordable price?!? Perfect! And the lady who did my pedicure took extra care of my feet and not just my toes. I appreciate it 🙏🏻 thank you and I’ll be back !!',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-2',
    author: 'Seycha Rashman',
    badge: 'Local Guide',
    rating: 5,
    date: '2 months ago',
    service: 'Pedicure, Coffee & Hot Stone Steam',
    comment: 'Such beautiful people just go above and beyond for you…. Coffee hot stone steam it’s just perfection!! My nail colour didn’t work out well but that’s ok because the kindness of the staff made up for it! Thank you for my incredible pedicure!',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-3',
    author: 'Joanna Drew',
    rating: 5,
    date: '3 weeks ago',
    service: 'Gel Pedicure & Full Set Gel Acrylics',
    comment: 'I had the most amazing experience at this nail salon today! I had a pedicure with gel and a full set of gel acrylics, and I honestly couldn’t be happier with the results. The salon is beautifully clean, tidy and has a lovely minimalistic feel. Both the male and female staff were so welcoming, polite and friendly — they made me feel comfortable straight away and were great at keeping conversation flowing. The pedicure was honestly the best I have ever had in my life! They don’t rush their work; they take their time, pay attention to every little detail and are true perfectionists. You can really tell they care about the quality of what they do. I’ve tried nearly all the nail salons around West Wickham and had been going to Beautiful Nails for over three years, but I can confidently say I’ve found my new favourite place. I’ll definitely be returning! 💅✨',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-4',
    author: 'Quynh Nhu',
    rating: 5,
    date: '2 months ago',
    service: 'Pedicure & Full Set',
    comment: 'I got a pedicure and a full set here right when they opened. Even though they were very busy, they still took great care of me, and my nails look absolutely beautiful — 10/10. I highly recommend coming to experience it yourself; you’ll love it I can’t wait for my next appointment in two weeks',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-5',
    author: 'Hatis',
    rating: 5,
    date: '4 weeks ago',
    service: 'Nail Styling & Care',
    comment: 'I had such a lovely experience today. Everyone was so friendly, welcoming, and easy to chat to, which made me feel comfortable from the moment I walked in. They took great care with my nails and did an amazing job – I absolutely love the result! The salon has such a warm and relaxing atmosphere. I highly recommend this place and will definitely be coming back. Thank you so much!',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-6',
    author: 'Sauran Gurung',
    rating: 5,
    date: '2 months ago',
    service: 'Full Set Nail Art & Care',
    comment: 'Absolutely loved my visit! The team was so warm, friendly, and welcoming, and they made me feel comfortable right away. The service was professional, and the attention to detail was fantastic. I’m really happy with how my nails turned out and couldn’t have asked for a better experience. I would definitely recommend this salon to anyone looking for quality service and a lovely atmosphere! Defo the best in town 10/10',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-7',
    author: 'Sophia Louise',
    rating: 5,
    date: '2 months ago',
    service: 'Nail Care & Shaping',
    comment: 'Really lovely experience. The salon is clean, modern and stylish, and the two guys working there were so welcoming and friendly. They chatted with me the whole time and made me feel really comfortable. They listened to exactly what I wanted and I felt really well looked after from start to finish. Both of them were so lovely, and I’m really happy with my nails. Would definitely recommend! ⭐ 💅',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-8',
    author: 'Katie Musham',
    rating: 5,
    date: '1 month ago',
    service: 'Manicure Treatment',
    comment: 'Very nice nail bar, kept to appointment time, lovely nails 💅 relaxing - leave enough time as they take their time to do a good job.',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-9',
    author: 'Kate Lawrence',
    rating: 5,
    date: '1 month ago',
    service: 'Pedicure & Manicure',
    comment: 'I have had a lovely time today at the reverie nail salon in West Wickham: I had a pedicure and a manicure. Prien looked after me so well and did a fantastic job - we had a lovely conversation and I will definitely be returning 🤩😘🤗',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-10',
    author: 'Women Thrive Media',
    badge: 'Verified Business',
    rating: 5,
    date: '2 months ago',
    service: 'Couple Pedicure Ritual with Hot Stone & Steam',
    comment: 'What a lovely salon. Me and my husband went to get a pedicure done on a Sunday, and was warmly welcomed (even at nearly closing time). It was a great experience and really thorough service, with hot stone foot massage, scrub, foot steam and massage. I really enjoyed it and happy with end result. Also, the salon is really clean, modern, staff is friendly and the chairs so comfy. It is a lovely family run business. Thanks so very much',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-11',
    author: 'Jasmin Gurung',
    rating: 5,
    date: '2 months ago',
    service: 'Holiday Nail Care & Shaping',
    comment: 'I was referred to this salon by a friend who had a really good experience here, so I thought I’d give it a try before my upcoming holiday. I’m so glad I did! I had pre-booked my appointment and it ran exactly on time. From the moment I walked in, everyone was friendly and welcoming. The lady who did my nails was lovely – very professional, friendly, and easy to talk to. She did an amazing job with my nails, but what stood out even more was the level of service. She checked in with me throughout the appointment to make sure I was happy with everything and asked if I had any questions or wanted anything changed. The salon itself was also very clean and well looked after. I left really happy with my nails and felt like they genuinely cared about making sure I was happy with the final result. Overall, it was a great experience and I’ll definitely be coming back in the future. Thank you!',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-12',
    author: 'John Smith',
    rating: 5,
    date: '2 months ago',
    service: 'Manicure & Pedicure',
    comment: 'I recently had manicure and pedicure here, and I was thoroughly happy. The staff were polite and professional, the salon is spotless, and all tools are hygienically maintained. I truly enjoyed the service and will definitely be returning. Highly recommended!',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-13',
    author: 'Lisa P',
    rating: 5,
    date: '1 month ago',
    service: 'Gel Manicure & Pedicure',
    comment: 'My first visit here today after reading lots of great local reviews. Such a lovely welcoming atmosphere, instantly calm with relaxing music and aromatherapy oil being diffused. I had a gel manicure & pedicure & so much care was taken my nails look wonderful and my feet feel fabulous and ready for summer! I\'ll be rebooking in a few weeks time. Wishing this new salon all the best- I know there are different nail shops locally but this is spending really different 😊',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-14',
    author: 'Louise Davies',
    rating: 5,
    date: '1 month ago',
    service: 'Deluxe Pedicure with Hot Stone & Towel Wrap',
    comment: 'I have just had the best pedicure at this new nail studio in West Wickham. Everyone who works there is so friendly and the salon is absolutely spotless. It has a really welcoming atmosphere from the moment you walk in. The pedicure itself was fantastic with excellent attention to detail. I particularly loved the hot stone massage and hot towel wrap which made it feel that little bit more special. My feet have never looked or felt better. I’ll definitely be back and highly recommend!',
    verified: true,
    source: 'Google Review'
  }
];

export const THERAPISTS: Therapist[] = [
  {
    id: 'th-1',
    name: 'Reverie Master Technician',
    title: 'Senior BIAB & Nail Artist',
    bio: 'Specialist in custom nail art, Russian precision manicure, and durable BIAB apex overlays.',
    specialties: ['BIAB Overlay', 'Custom Nail Art', 'Full Set Ombré'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    experienceYears: 7,
    rating: 5.0
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Nourishing Botanical Cuticle Elixir',
    tagline: 'Organic Jojoba, Vitamin E & Sweet Almond Oil',
    priceGBP: 14,
    rating: 5.0,
    reviewCount: 48,
    category: 'nail-care',
    description: 'Ultra-nourishing organic oil blend to restore healthy cuticles and enhance nail shine.',
    volume: '30ml Dropper',
    benefits: ['Deep hydration', 'Prevents hangnails', 'Non-greasy rapid absorption'],
    image: 'https://images.unsplash.com/photo-1608248597359-002d91b490a6?auto=format&fit=crop&q=80&w=600',
    stockCount: 15,
    isBestSeller: true
  }
];

export const GIFT_VOUCHERS = [
  {
    id: 'voucher-1',
    name: 'Classic Luxury Nail Gift Card',
    amountGBP: 50,
    popular: true,
    description: 'Perfect for Gel Manicures, BIAB Overlays & Custom Nail Art.'
  },
  {
    id: 'voucher-2',
    name: 'Deluxe Mani + Pedi Experience',
    amountGBP: 68,
    popular: false,
    description: 'Full Gel Manicure + Pedicure with hot stone massage treatment.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book?',
    answer: 'Online through Fresha any time, by phone on 020 3143 6868, or send us a message on Instagram or Facebook.',
    category: 'booking'
  },
  {
    id: 'faq-2',
    question: 'Can you recreate a design from a photo?',
    answer: 'Yes. Send us your inspiration when you book, or bring it with you, and we’ll let you know what’s possible and how much time we’ll need. Nail art starts from £5.',
    category: 'nail-art'
  },
  {
    id: 'faq-3',
    question: 'How long will my appointment take?',
    answer: 'A gel manicure takes around 45 minutes and a gel pedicure around 50. Extensions, ombré and detailed nail art take longer, so allow extra time if you’re booking those.',
    category: 'timing'
  },
  {
    id: 'faq-4',
    question: 'How long does BIAB last?',
    answer: 'Up to three weeks, then most clients come back for an infill.',
    category: 'biab'
  },
  {
    id: 'faq-5',
    question: 'What if a nail chips or lifts?',
    answer: 'Get in touch and come back in. Anything that happens in the first week is fixed free of charge, and please don’t pick at it, as that takes layers of your natural nail with it.',
    category: 'guarantee'
  },
  {
    id: 'faq-6',
    question: 'What if I need to cancel?',
    answer: 'Please let us know at least 12 hours before your appointment time.',
    category: 'policy'
  }
];

export const HEAD_SPA_STEPS = [
  {
    step: 1,
    title: 'Consultation & Nail Health Analysis',
    duration: '5 Mins',
    description: 'Assessment of natural nail strength, cuticle health, and style consultation.',
    iconName: 'Search',
    sensoryDetail: 'Personalized treatment recommendation.'
  },
  {
    step: 2,
    title: 'Precision Shaping & Cuticle Grooming',
    duration: '15 Mins',
    description: 'Gentle, damage-free dry cuticle refinement and custom nail shaping.',
    iconName: 'Sparkles',
    sensoryDetail: 'Clean aesthetic nail contours.'
  },
  {
    step: 3,
    title: 'Exfoliation & Hot Towel Wrap',
    duration: '10 Mins',
    description: 'Invigorating skin exfoliation followed by steaming aromatic hot towels.',
    iconName: 'Droplets',
    sensoryDetail: 'Smooth skin and relaxed muscles.'
  },
  {
    step: 4,
    title: 'Hot Stone & Botanical Massage',
    duration: '10 Mins',
    description: 'Heated basalt stones with essential oils for soothing hand and foot relaxation.',
    iconName: 'HeartHandshake',
    sensoryDetail: 'Deep thermal tension relief.'
  },
  {
    step: 5,
    title: 'BIAB Apex / Gel Application',
    duration: '20 Mins',
    description: 'Precision builder gel or high-gloss gel polish cured under low-heat LED.',
    iconName: 'Waves',
    sensoryDetail: 'Flawless, mirror-shine finish.'
  }
];



