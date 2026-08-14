import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ExternalLink, Star, MapPin } from 'lucide-react';
import { SALON_INFO, FRESHA_BOOKING_URL } from '../data/spaData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenCart?: () => void;
  onOpenAdminPortal?: () => void;
  bookingCount?: number;
  cartCount?: number;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'recent-work', label: 'GALLERY' },
    { id: 'studio', label: 'STUDIO' },
    { id: 'menu', label: 'PRICES' },
    { id: 'visit', label: 'VISIT' },
    { id: 'policy', label: 'POLICY' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#DBD3C9]/95 backdrop-blur-md border-b border-[#A99C90]/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => handleNavClick('hero')}
            className="group text-left flex items-center gap-3 focus:outline-none shrink-0"
            aria-label="Reverie Nail Studio Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#F2EEE8] border border-[#A99C90]/40 flex items-center justify-center shadow-xs group-hover:border-[#332C26] transition-colors shrink-0">
              <span className="text-[#332C26] font-serif text-xl font-medium tracking-tight">R</span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl tracking-[0.14em] text-[#332C26] font-normal uppercase leading-none whitespace-nowrap">
                REVERIE NAIL STUDIO
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs uppercase tracking-[0.16em] font-medium transition-all py-1 relative whitespace-nowrap ${
                activeSection === item.id
                  ? 'text-[#332C26] font-bold border-b border-[#332C26]'
                  : 'text-[#5C5046] hover:text-[#332C26]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* Phone call CTA (Desktop) */}
          <a
            href={SALON_INFO.phoneTel}
            className="hidden xl:flex items-center gap-1.5 text-xs text-[#332C26] hover:text-[#9F8355] font-semibold px-3 py-2 transition-colors whitespace-nowrap tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 text-[#332C26]" />
            <span>020 3143 6868</span>
          </a>

          {/* Primary Book on Fresha CTA (hidden on mobile header as requested) */}
          <a
            href={FRESHA_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#332C26] hover:bg-[#E3A868] hover:text-[#332C26] text-[#F2EEE8] px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all shadow-xs active:scale-98 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book on Fresha</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#332C26] hover:bg-[#F2EEE8] focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F2EEE8] border-b border-[#A99C90]/30 px-6 py-6 space-y-5 animate-in slide-in-from-top-2 duration-200">
          {/* Rating tag on mobile */}
          <div className="flex items-center justify-between pb-3 border-b border-[#A99C90]/20">
            <span className="text-xs text-[#5C5046] tracking-wider uppercase font-medium">Reverie Studio</span>
            <div className="flex items-center gap-1 bg-[#DBD3C9] px-2.5 py-0.5 rounded-full text-xs text-[#332C26] font-semibold">
              <span>4.9</span>
              <Star className="w-3 h-3 fill-[#E3A868] text-[#E3A868]" />
              <span className="text-[10px] text-[#5C5046] font-normal uppercase">Google</span>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm uppercase tracking-[0.16em] py-2 font-medium border-b border-[#A99C90]/15 ${
                  activeSection === item.id ? 'text-[#332C26] font-bold' : 'text-[#5C5046]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#332C26] text-[#F2EEE8] hover:bg-[#E3A868] hover:text-[#332C26] py-3 rounded-full text-xs tracking-widest uppercase font-semibold shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book on Fresha</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={SALON_INFO.phoneTel}
              className="w-full flex items-center justify-center gap-2 border border-[#332C26] text-[#332C26] hover:bg-[#DBD3C9] py-2.5 rounded-full text-xs tracking-widest uppercase font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#332C26]" />
              <span>Call 020 3143 6868</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
