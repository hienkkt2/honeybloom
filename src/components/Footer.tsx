import React from 'react';
import { Send, Instagram, Facebook, Phone, MapPin, Sparkles, Heart, ExternalLink, Navigation } from 'lucide-react';
import { FRESHA_BOOKING_URL, SALON_INFO, GOOGLE_MAPS_URL, FACEBOOK_URL, INSTAGRAM_URL } from '../data/spaData';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  return (
    <footer className="bg-[#2C2015] text-[#F4ECE1] relative overflow-hidden pt-16 pb-12 border-t border-[#4A3B2C]">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-amber-200/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-200/20 border border-amber-300/30 flex items-center justify-center font-serif text-lg font-bold text-amber-200">
                R
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.15em] font-bold text-white uppercase block leading-tight">
                  REVERIE NAIL STUDIO
                </span>
                <span className="text-[9px] tracking-[0.25em] text-amber-300 uppercase block">
                  West Wickham • 133 High Street
                </span>
              </div>
            </div>

            <p className="text-xs text-amber-200/70 leading-relaxed max-w-sm">
              Your premier nail studio in West Wickham offering luxury Manicures, Pedicures, BIAB builder gels, Ombré sets, Dipping powder and Acrylic enhancements.
            </p>

            {/* Social Channels in Footer */}
            <div className="flex flex-wrap items-center gap-3 text-amber-200 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#3D2E1E] hover:bg-[#5A4836] transition-colors flex items-center gap-1.5"
                title="Instagram @reverie.nail.studio"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-[11px]">Instagram</span>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#3D2E1E] hover:bg-[#5A4836] transition-colors flex items-center gap-1.5"
                title="Facebook Reverie Studio"
              >
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px]">Facebook</span>
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#3D2E1E] hover:bg-[#5A4836] transition-colors flex items-center gap-1.5"
                title="Google Maps Directions"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px]">Google Maps</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-amber-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateTo('hero')} className="hover:text-amber-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('services')} className="hover:text-amber-300 transition-colors">
                  Service Menu & Prices
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('gallery')} className="hover:text-amber-300 transition-colors">
                  Featured Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('faqs')} className="hover:text-amber-300 transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('philosophy')} className="hover:text-amber-300 transition-colors">
                  About Reverie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('location')} className="hover:text-amber-300 transition-colors">
                  Location & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Booking */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-amber-100">
              Studio Location
            </h4>
            <p className="text-xs text-amber-200/70">
              133 High Street<br />
              West Wickham, BR4 0LU<br />
              United Kingdom
            </p>
            <p className="text-xs text-amber-300 font-bold">
              Telephone:{' '}
              <a href={SALON_INFO.phoneTel} className="hover:underline">
                {SALON_INFO.phone}
              </a>
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-200 hover:bg-amber-300 text-[#2C2015] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Book your session now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#3D2E1E] hover:bg-[#4A3B2C] text-amber-200 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border border-amber-300/30"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Map</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="pt-8 border-t border-[#3D2E1E] flex flex-col md:flex-row items-center justify-between text-[11px] text-amber-200/60 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Reverie Nail Studio. All Rights Reserved.</p>
          
          {/* Digital Agency Credit */}
          <div className="flex items-center gap-1.5 text-xs text-amber-200/80">
            <span className="text-[11px] text-amber-200/70">Designed & Developed by</span>
            <a
              href="https://dinhhiendigital.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-100 font-semibold tracking-wide transition-all group px-2.5 py-1 rounded-full bg-[#3D2E1E] hover:bg-[#4A3B2C] border border-amber-300/25 shadow-2xs"
              title="Visit Dinh Hien Digital"
            >
              <span>Đình Hiển Digital</span>
              <ExternalLink className="w-3 h-3 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-1">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-300/80">
              133 High Street, West Wickham, BR4 0LU
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
