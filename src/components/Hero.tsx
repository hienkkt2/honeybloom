import React from 'react';
import { Calendar, Sparkles, Star, ShieldCheck, ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { HERO_IMAGES, FRESHA_BOOKING_URL, SALON_INFO } from '../data/spaData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateTo }) => {
  return (
    <section id="hero" className="relative bg-[#FAF7F2] overflow-hidden py-12 lg:py-20">
      {/* Background Subtle Gradient & Pattern */}
      <div className="absolute inset-0 bg-radial from-[#F5EBE0]/80 via-[#FAF7F2] to-[#F5EBE0]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Rating Pill */}
            <div className="inline-flex items-center gap-2 bg-[#EADCC9]/80 border border-[#CBB292] px-4 py-1.5 rounded-full shadow-2xs text-[#4A3B2C] text-xs font-medium tracking-wide">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                ))}
              </div>
              <span className="font-semibold">Reverie Nail Studio</span>
              <span className="text-[#8C7355]">• 133 High Street, West Wickham</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C2015] font-light leading-[1.15] tracking-tight">
              Manicures, Pedicures, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#8C7355]">BIAB, Extensions & Dipping</span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-[#5A4836] font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to <strong className="font-semibold text-[#3D2E1E]">Reverie Nail Studio</strong> in West Wickham. We provide luxury gel manicures & pedicures with hot stone massages, structured BIAB overlays, sculpted acrylic extensions, dipping powder, and delicate nail care.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Book your session now</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={() => onNavigateTo('services')}
                className="w-full sm:w-auto border border-[#8C7355] hover:bg-[#EADCC9]/50 text-[#3D2E1E] px-7 py-4 rounded-full text-sm font-medium tracking-widest uppercase transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#8C7355]" />
                <span>View Full Price List</span>
              </button>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-6 border-t border-[#E8DFD1] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#8C7355] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#3D2E1E] uppercase tracking-wider">BIAB & Gel</h4>
                  <p className="text-[11px] text-[#7A644D]">Long-lasting nail strength</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-5 h-5 text-[#8C7355] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#3D2E1E] uppercase tracking-wider">Acrylic & Dipping</h4>
                  <p className="text-[11px] text-[#7A644D]">Extensions & Ombré sets</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#8C7355] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#3D2E1E] uppercase tracking-wider">West Wickham</h4>
                  <p className="text-[11px] text-[#7A644D]">133 High Street, BR4 0LU</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Featured Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] bg-[#EADCC9] aspect-4/5 sm:aspect-3/4 lg:aspect-4/5">
              <img
                src={HERO_IMAGES.hero}
                alt="Reverie Nail Studio West Wickham"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Overlay Badge 1 */}
              <div className="absolute top-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-3 rounded-2xl border border-[#E8DFD1] shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold">
                  💅
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#8C7355] tracking-widest">Instant Booking</p>
                  <p className="text-xs font-semibold text-[#3D2E1E]">Available on Fresha</p>
                </div>
              </div>

              {/* Floating Overlay Badge 2 */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8DFD1] shadow-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider">133 High Street</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Open Mon - Sat</span>
                </div>
                <p className="text-xs text-[#6E5A44]">
                  West Wickham, BR4 0LU • Call {SALON_INFO.phone}
                </p>
              </div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#EADCC9] rounded-full border-8 border-[#FAF7F2] -z-10 opacity-70 blur-xs" />
          </div>

        </div>
      </div>
    </section>
  );
};
