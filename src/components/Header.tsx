import React, { useState } from 'react';
import { Sparkles, Phone, Calendar, ShoppingBag, Menu, X, MapPin, Clock, Lock, ExternalLink } from 'lucide-react';
import { SALON_INFO, FRESHA_BOOKING_URL } from '../data/spaData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenCart: () => void;
  onOpenAdminPortal?: () => void;
  bookingCount?: number;
  cartCount: number;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenCart,
  onOpenAdminPortal,
  bookingCount = 0,
  cartCount,
  activeSection,
  setActiveSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Featured' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'philosophy', label: 'About' },
    { id: 'location', label: 'Contact' },
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
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD1] transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#4A3B2C] text-[#F4ECE1] text-xs font-light py-2 px-4 text-center flex justify-between items-center max-w-7xl mx-auto sm:px-6">
        <div className="hidden md:flex items-center space-x-4 text-amber-200/90 text-[11px] tracking-wider uppercase">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <MapPin className="w-3 h-3 text-amber-300" />
            133 High Street, West Wickham, BR4 0LU
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Clock className="w-3 h-3 text-amber-300" />
            Mon - Sat: 09:30 - 18:30
          </span>
        </div>
        
        <div className="mx-auto md:mx-0 flex items-center gap-2 text-xs font-medium tracking-wide whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
          <span>REVERIE NAIL STUDIO • West Wickham</span>
        </div>

        <div className="hidden lg:flex items-center space-x-3 text-xs">
          <a
            href={SALON_INFO.phoneTel}
            className="hover:text-amber-300 transition-colors flex items-center gap-1 text-[11px] tracking-wider uppercase whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            {SALON_INFO.phone}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group text-left flex items-center gap-3 focus:outline-none shrink-0"
        >
          <div className="w-10 h-10 rounded-full bg-[#EADCC9] border border-[#CBB292] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <span className="text-[#4A3B2C] font-serif text-lg font-bold">R</span>
          </div>
          <div>
            <span className="block font-serif text-2xl tracking-[0.15em] text-[#3D2E1E] font-semibold uppercase leading-tight whitespace-nowrap">
              REVERIE
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-[#8C7355] uppercase font-light whitespace-nowrap">
              NAIL STUDIO • WEST WICKHAM
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs uppercase tracking-[0.12em] font-medium transition-colors py-1 relative whitespace-nowrap ${
                activeSection === item.id
                  ? 'text-[#3D2E1E] font-semibold border-b-2 border-[#8C7355]'
                  : 'text-[#6E5A44] hover:text-[#3D2E1E]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* Phone call button */}
          <a
            href={SALON_INFO.phoneTel}
            className="hidden xl:flex items-center gap-1.5 text-xs text-[#5A4836] hover:text-[#2C2015] font-semibold px-3 py-2 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#8C7355]" />
            <span>{SALON_INFO.phone}</span>
          </a>

          {/* Primary Book Now CTA */}
          <a
            href={FRESHA_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all shadow-sm hover:shadow-md active:scale-98 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span>Book Now</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#4A3B2C] hover:bg-[#EADCC9]/50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD1] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm uppercase tracking-wider py-2 font-medium border-b border-[#E8DFD1]/50 ${
                  activeSection === item.id ? 'text-[#3D2E1E] font-bold text-amber-900' : 'text-[#6E5A44]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E8DFD1] space-y-3">
            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#4A3B2C] text-[#F9F5EF] py-3 rounded-full text-xs tracking-widest uppercase font-medium shadow-sm"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={SALON_INFO.phoneTel}
              className="w-full flex items-center justify-center gap-2 border border-[#8C7355] text-[#4A3B2C] py-2.5 rounded-full text-xs tracking-widest uppercase font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call {SALON_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
