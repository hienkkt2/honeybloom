import React from 'react';
import { Heart, Sparkles, CheckCircle2, Shield, ExternalLink } from 'lucide-react';
import { HERO_IMAGES, FRESHA_BOOKING_URL } from '../data/spaData';

interface PhilosophyProps {
  onOpenBooking: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = () => {
  return (
    <section id="philosophy" className="py-20 bg-[#F5EBE0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-3/4 bg-[#EADCC9]">
                  <img
                    src={HERO_IMAGES.nails1}
                    alt="Reverie Nail Art & BIAB"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1] text-center shadow-2xs">
                  <span className="block text-xl font-serif font-bold text-[#4A3B2C]">BIAB & Gel</span>
                  <span className="text-xs text-[#7A644D] uppercase tracking-wider font-medium">Long-Lasting Strength</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1] text-center shadow-2xs">
                  <span className="block text-xl font-serif font-bold text-[#8C7355]">West Wickham</span>
                  <span className="text-xs text-[#7A644D] uppercase tracking-wider font-medium">133 High Street</span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-3/4 bg-[#EADCC9]">
                  <img
                    src={HERO_IMAGES.interior}
                    alt="Reverie Nail Studio Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>About Reverie Nail Studio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light leading-snug">
              Exceptional Nail Artistry, BIAB Care & Relaxing Pedicures
            </h2>

            <p className="text-base text-[#5A4836] leading-relaxed font-light">
              At <strong className="font-semibold text-[#3D2E1E]">Reverie Nail Studio</strong> on West Wickham High Street, we are dedicated to providing immaculate nail care, healthy BIAB overlays, stylish acrylic extensions, ombré finishes, and soothing pedicures with hot stone massage.
            </p>

            {/* Our Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider">Flawless BIAB</h4>
                  <p className="text-xs text-[#7A644D]">Apex architecture to grow strong natural nails.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]">
                <Heart className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider">Hot Stone Pedicures</h4>
                  <p className="text-xs text-[#7A644D]">Callus grooming & soothing hot stone wraps.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]">
                <Sparkles className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider">Custom Ombré & Art</h4>
                  <p className="text-xs text-[#7A644D]">Baby boomer ombré, chrome & French tips.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]">
                <Shield className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider">Strict Hygiene</h4>
                  <p className="text-xs text-[#7A644D]">Hospital-grade sanitation & single-use files.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-7 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all shadow-sm"
              >
                <span>Book your session now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
