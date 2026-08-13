import React from 'react';
import { Heart, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGES } from '../data/spaData';

interface PhilosophyProps {
  onOpenBooking: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onOpenBooking }) => {
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
                    src={HERO_IMAGES.headSpa}
                    alt="Japanese Head Spa Hydrotherapy Session"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1] text-center shadow-2xs">
                  <span className="block text-2xl font-serif font-bold text-[#4A3B2C]">100%</span>
                  <span className="text-xs text-[#7A644D] uppercase tracking-wider font-medium">Plant-Based & Cruelty-Free</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1] text-center shadow-2xs">
                  <span className="block text-2xl font-serif font-bold text-[#8C7355]">London E16</span>
                  <span className="text-xs text-[#7A644D] uppercase tracking-wider font-medium">Royal Crest Avenue</span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-3/4 bg-[#EADCC9]">
                  <img
                    src={HERO_IMAGES.interior}
                    alt="Honey & Bloom Reception Spa Setup"
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
              <Leaf className="w-4 h-4 text-emerald-700" />
              <span>Our Roots & Sanctuary Ethos</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light leading-snug">
              "Beauty should nourish the soul as deeply as it strengthens the hair and nails."
            </h2>

            <p className="text-base text-[#5A4836] leading-relaxed font-light">
              Founded by <strong className="font-semibold text-[#3D2E1E]">Donna</strong>, Honey & Bloom was born from a passion for authentic Eastern scalp care rituals learned in Vietnam, paired with the modern aesthetic standards of East London.
            </p>

            <p className="text-sm text-[#6E5A44] leading-relaxed">
              We reject harsh chemicals, toxic fumes, and rushed appointments. In our peaceful Royal Docks studio, every client receives 1-on-1 personalized attention, Japanese Halo Waterfall hydrotherapy, organic raw honey botanicals, and Russian precision nail care.
            </p>

            {/* Our Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider">Clean & 10-Free</h4>
                  <p className="text-xs text-[#7A644D]">No toxic fumes, no phthalates, pregnancy-safe care.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]">
                <Heart className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider">Eastern Hydrotherapy</h4>
                  <p className="text-xs text-[#7A644D]">Japanese circular halo water flow for tension relief.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]">
                <Sparkles className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider">BIAB & Russian Prep</h4>
                  <p className="text-xs text-[#7A644D]">Damage-free dry cuticle care & builder gel strength.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]">
                <Leaf className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider">Botanical Tea Pairing</h4>
                  <p className="text-xs text-[#7A644D]">Complimentary fresh honey & flower loose teas.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-7 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all shadow-sm"
              >
                Experience the Sanctuary
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
