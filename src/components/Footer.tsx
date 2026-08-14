import React from 'react';
import { Instagram, Facebook, Phone, MapPin, ExternalLink, Navigation, Clock } from 'lucide-react';
import { FRESHA_BOOKING_URL, SALON_INFO, GOOGLE_MAPS_URL, FACEBOOK_URL, INSTAGRAM_URL } from '../data/spaData';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  return (
    <footer className="bg-[#332C26] text-[#DBD3C9] relative overflow-hidden pt-16 pb-12 border-t border-[#A99C90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-[#DBD3C9]/80">
          
          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#DBD3C9]/15 border border-[#DBD3C9]/30 flex items-center justify-center font-serif text-lg font-bold text-[#DBD3C9]">
                R
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.15em] font-normal text-[#F2EEE8] uppercase block leading-tight">
                  REVERIE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#A99C90] uppercase block">
                  NAIL STUDIO
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A99C90] leading-relaxed max-w-sm">
              West Wickham’s boutique nail studio offering BIAB builder gel, luxury manicures & pedicures, acrylic enhancements, and bespoke nail art.
            </p>

            {/* Social Channels */}
            <div className="flex flex-wrap items-center gap-2.5 text-[#F2EEE8] pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#26211C] hover:bg-[#DBD3C9] hover:text-[#332C26] transition-colors flex items-center gap-1.5 border border-[#A99C90]/30 text-[11px]"
                title="Instagram @reverie.nail.studio"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E3A868]" />
                <span>Instagram</span>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#26211C] hover:bg-[#DBD3C9] hover:text-[#332C26] transition-colors flex items-center gap-1.5 border border-[#A99C90]/30 text-[11px]"
                title="Facebook Reverie Studio"
              >
                <Facebook className="w-3.5 h-3.5 text-[#E3A868]" />
                <span>Facebook</span>
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#26211C] hover:bg-[#DBD3C9] hover:text-[#332C26] transition-colors flex items-center gap-1.5 border border-[#A99C90]/30 text-[11px]"
                title="Google Maps Directions"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E3A868]" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-[#F2EEE8]">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <button onClick={() => onNavigateTo('hero')} className="text-left hover:text-[#E3A868] transition-colors">
                Home
              </button>
              <button onClick={() => onNavigateTo('recent-work')} className="text-left hover:text-[#E3A868] transition-colors">
                Recent Work
              </button>
              <button onClick={() => onNavigateTo('studio')} className="text-left hover:text-[#E3A868] transition-colors">
                The Studio
              </button>
              <button onClick={() => onNavigateTo('menu')} className="text-left hover:text-[#E3A868] transition-colors">
                The Menu & Prices
              </button>
              <button onClick={() => onNavigateTo('why-reverie')} className="text-left hover:text-[#E3A868] transition-colors">
                Why Reverie
              </button>
              <button onClick={() => onNavigateTo('policy')} className="text-left hover:text-[#E3A868] transition-colors">
                Salon Policy
              </button>
              <button onClick={() => onNavigateTo('reviews')} className="text-left hover:text-[#E3A868] transition-colors">
                Client Reviews
              </button>
              <button onClick={() => onNavigateTo('faqs')} className="text-left hover:text-[#E3A868] transition-colors">
                FAQs
              </button>
              <button onClick={() => onNavigateTo('visit')} className="text-left hover:text-[#E3A868] transition-colors">
                Visit & Location
              </button>
            </div>
          </div>

          {/* Col 3: Opening Hours & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-[#F2EEE8]">
              Opening Hours & Contact
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-[#DBD3C9]">
                <Clock className="w-3.5 h-3.5 text-[#E3A868] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p>Mon – Sat: <span className="text-[#F2EEE8] font-semibold">09:30 – 18:30</span></p>
                  <p>Sun: <span className="text-[#F2EEE8] font-semibold">10:00 – 17:00</span></p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#DBD3C9] pt-1">
                <Phone className="w-3.5 h-3.5 text-[#E3A868] shrink-0" />
                <a href={SALON_INFO.phoneTel} className="text-[#F2EEE8] font-semibold hover:text-[#E3A868] transition-colors">
                  020 3143 6868
                </a>
              </div>

              <div className="flex items-start gap-2 text-[#A99C90] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#E3A868] shrink-0 mt-0.5" />
                <p>133 High Street, West Wickham, BR4 0LU</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#DBD3C9] hover:bg-[#E3A868] text-[#332C26] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <span>Book on Fresha</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#26211C] hover:bg-[#DBD3C9] hover:text-[#332C26] text-[#DBD3C9] px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors border border-[#A99C90]/30"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E3A868]" />
                <span>Map</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#A99C90]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A99C90] gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Reverie Nail Studio. All rights reserved.</p>
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#F2EEE8] transition-colors">
            133 High Street, West Wickham, BR4 0LU · 020 3143 6868
          </a>
        </div>

      </div>
    </footer>
  );
};
