import React from 'react';
import { Calendar, ExternalLink, ArrowUpRight } from 'lucide-react';
import { FRESHA_BOOKING_URL, FEATURED_MENU_CARDS } from '../data/spaData';

interface ServiceMenuProps {
  onOpenBooking?: (serviceId?: string) => void;
}

export const ServiceMenu: React.FC<ServiceMenuProps> = () => {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#DBD3C9] relative border-b border-[#A99C90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#736557] block">
            Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#332C26] font-normal leading-tight">
            The Menu
          </h2>
          <p className="font-serif text-lg sm:text-xl italic text-[#5C5046]">
            Treatments, done properly
          </p>
          <p className="text-xs sm:text-sm text-[#736557] font-normal">
            A taste of the full menu, starting prices shown
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_MENU_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#F2EEE8] p-6 sm:p-7 rounded-2xl border border-[#A99C90]/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between gap-2 border-b border-[#A99C90]/20 pb-3">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#332C26] leading-snug">
                    {card.title}
                  </h3>
                </div>

                <div className="inline-block bg-[#DBD3C9] px-3 py-1 rounded-full text-xs font-semibold text-[#332C26] tracking-wide">
                  {card.price}
                </div>

                <p className="text-xs text-[#5C5046] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#A99C90]/20">
                <a
                  href={FRESHA_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#332C26] hover:bg-[#E3A868] hover:text-[#332C26] text-[#F2EEE8] py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book on Fresha</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Link */}
        <div className="mt-12 text-center">
          <a
            href={FRESHA_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F2EEE8] hover:bg-[#332C26] hover:text-[#F2EEE8] text-[#332C26] px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#A99C90]/40 transition-all shadow-xs"
          >
            <span>View the full menu and prices</span>
            <ArrowUpRight className="w-4 h-4 text-[#E3A868]" />
          </a>
        </div>

      </div>
    </section>
  );
};

