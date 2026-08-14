import React from 'react';
import { Calendar, ExternalLink, ArrowDown, Star } from 'lucide-react';
import { HERO_IMAGES, FRESHA_BOOKING_URL, SALON_INFO } from '../data/spaData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateTo }) => {
  return (
    <section id="hero" className="relative bg-[#DBD3C9] overflow-hidden py-14 sm:py-20 lg:py-28 border-b border-[#A99C90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Luxury Pill Badge: 4.9 ⭐ Google + Brand Name + Address */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 bg-[#F2EEE8] border border-[#A99C90]/50 px-3.5 sm:px-4 py-1.5 rounded-full shadow-2xs text-xs sm:text-[13px] text-[#332C26]">
              {/* Rating Tag */}
              <div className="inline-flex items-center gap-1.5 bg-[#DBD3C9] px-2.5 py-0.5 rounded-full text-xs font-semibold">
                <span className="text-[#332C26]">4.9</span>
                <Star className="w-3.5 h-3.5 fill-[#E3A868] text-[#E3A868]" />
                <span className="text-[#736557] text-[10px] font-bold uppercase tracking-wider">Google</span>
              </div>

              <span className="text-[#A99C90]/70 hidden sm:inline">•</span>

              {/* Brand Name */}
              <span className="font-semibold text-[#332C26] whitespace-nowrap">
                Reverie Nail Studio
              </span>

              <span className="text-[#A99C90]/70">•</span>

              {/* Address */}
              <span className="text-[#5C5046] font-normal whitespace-nowrap">
                133 High Street, West Wickham
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#332C26] font-normal leading-[1.12] tracking-tight">
              Come for the nails. <br />
              <span className="italic font-light text-[#5C5046]">Stay for the rest.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#5C5046] font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to Reverie. We set out to do high street nails a little differently. A clean, relaxing space where you can properly switch off, products you can trust, and service that doesn’t feel rushed.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#332C26] hover:bg-[#E3A868] hover:text-[#332C26] text-[#F2EEE8] px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-xs flex items-center justify-center gap-2.5 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book on Fresha</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                onClick={() => onNavigateTo('menu')}
                className="w-full sm:w-auto bg-[#F2EEE8] border border-[#332C26]/20 hover:border-[#332C26] text-[#332C26] px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>View Service Menu</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#736557]" />
              </button>
            </div>

          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#A99C90]/30 bg-[#F2EEE8] aspect-4/5 sm:aspect-3/4 lg:aspect-4/5">
              <img
                src={HERO_IMAGES.hero}
                alt="Reverie Nail Studio West Wickham"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#332C26]/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#F2EEE8]/95 backdrop-blur-md p-4 rounded-2xl border border-[#A99C90]/30 shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[#332C26] uppercase tracking-wider">133 High Street</span>
                  <span className="text-[10px] bg-[#DBD3C9] text-[#332C26] px-2.5 py-0.5 rounded-full font-medium">West Wickham</span>
                </div>
                <p className="text-xs text-[#5C5046]">
                  BR4 0LU · 020 3143 6868
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
