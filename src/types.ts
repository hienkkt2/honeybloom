export type ServiceCategory = 'head-spa' | 'manicure' | 'pedicure' | 'packages' | 'add-ons';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  durationMinutes: number;
  priceGBP: number;
  tagline: string;
  description: string;
  highlights: string[];
  recommendedFor?: string;
  image?: string;
  popular?: boolean;
}

export interface Therapist {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  avatar: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'scalp-care' | 'nail-care' | 'wellness-tea' | 'tools';
  priceGBP: number;
  volume: string;
  description: string;
  image: string;
  ingredients?: string[];
  inStock: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'nail-art' | 'head-spa' | 'sanctuary' | 'pedicure';
  image: string;
  description: string;
  serviceIdToBook?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'head-spa' | 'nail-care' | 'location';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BookingRecord {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceNames: string[];
  therapistName: string;
  date: string;
  timeSlot: string;
  teaPreference: string;
  hairType: string;
  notes?: string;
  totalGBP: number;
  status: 'Confirmed' | 'Completed' | 'Pending' | 'Cancelled';
  createdAt: string;
}

export interface BookingState {
  selectedServiceIds: string[];
  therapistId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
  customAddons: string[];
  teaPreference: string;
  hairType?: string;
  isConfirmed: boolean;
  bookingRef?: string;
}

export interface GiftCardState {
  amount: number;
  customAmount?: number;
  recipientName: string;
  recipientEmail: string;
  senderName: string;
  personalMessage: string;
  deliveryMethod: 'email' | 'printed-box';
}
