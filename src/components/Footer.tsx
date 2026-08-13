import React, { useState } from 'react';
import { Send, Instagram, Facebook, Phone, MapPin, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo, onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#2C2015] text-[#F4ECE1] relative overflow-hidden pt-16 pb-12 border-t border-[#4A3B2C]">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Newsletter Card */}
        <div className="bg-[#3D2E1E] p-8 rounded-3xl border border-[#5A4836] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-amber-300 text-xs uppercase font-bold tracking-widest flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sanctuary Insider</span>
            </span>
            <h3 className="font-serif text-2xl font-light text-white">
              Enjoy 10% Off Your First Head Spa Ritual
            </h3>
            <p className="text-xs text-amber-200/80">
              Subscribe to receive private booking slots, botanical care tips & seasonal beauty drops.
            </p>
          </div>

          {subscribed ? (
            <div className="bg-emerald-900/60 text-emerald-200 border border-emerald-500/40 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider">
              ✨ Welcome! Check your inbox for your 10% voucher code.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="bg-[#2C2015] border border-[#6E5A44] text-xs text-white rounded-full px-5 py-3 focus:outline-none focus:border-amber-300 w-full sm:w-72 placeholder-[#A08C75]"
              />
              <button
                type="submit"
                className="bg-amber-200 hover:bg-amber-300 text-[#2C2015] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-amber-200/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-200/20 border border-amber-300/30 flex items-center justify-center font-serif text-lg font-bold text-amber-200">
                H&B
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.15em] font-bold text-white uppercase block leading-tight">
                  HONEY & BLOOM
                </span>
                <span className="text-[9px] tracking-[0.25em] text-amber-300 uppercase block">
                  London • Head Spa & Clean Nails
                </span>
              </div>
            </div>

            <p className="text-xs text-amber-200/70 leading-relaxed max-w-sm">
              A woman-owned sanctuary blending ancient Vietnamese scalp hydrotherapy with clean, plant-based non-toxic nail care in East London.
            </p>

            <div className="flex items-center space-x-3 text-amber-200">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#3D2E1E] hover:bg-[#5A4836] transition-colors"
                title="Instagram @honeynbloom"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#3D2E1E] hover:bg-[#5A4836] transition-colors"
                title="Facebook Honey & Bloom"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-amber-100">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateTo('hero')} className="hover:text-amber-300 transition-colors">
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('philosophy')} className="hover:text-amber-300 transition-colors">
                  Our Story & Founder Donna
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('head-spa')} className="hover:text-amber-300 transition-colors">
                  7-Step Japanese Head Spa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('services')} className="hover:text-amber-300 transition-colors">
                  Price List & Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('gallery')} className="hover:text-amber-300 transition-colors">
                  Nail Art & Spa Lookbook
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('gift-cards')} className="hover:text-amber-300 transition-colors">
                  Luxury Gift Vouchers
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
              Unit 1.1-02, 55 Royal Crest Avenue<br />
              Royal Docks, London E16 2EB<br />
              United Kingdom
            </p>
            <p className="text-xs text-amber-300 font-bold">
              WhatsApp: +44 7777 326555
            </p>
            <button
              onClick={onOpenBooking}
              className="mt-2 bg-amber-200 hover:bg-amber-300 text-[#2C2015] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Book Online
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#3D2E1E] flex flex-col sm:flex-row items-center justify-between text-[11px] text-amber-200/60 gap-3">
          <p>© {new Date().getFullYear()} Honey & Bloom London. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400 inline" />
            <span>in Royal Docks, East London</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
