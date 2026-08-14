import React from 'react';
import { ShieldCheck, Clock, Sparkles, HeartHandshake, RefreshCw, Sparkle, Phone, ExternalLink } from 'lucide-react';
import { SALON_POLICIES, SALON_INFO, FRESHA_BOOKING_URL } from '../data/spaData';

const POLICY_ICONS = [
  ShieldCheck,
  RefreshCw,
  Clock,
  Sparkles,
  HeartHandshake,
  Sparkle,
];

export const SalonPolicy: React.FC = () => {
  return (
    <section id="policy" className="py-16 sm:py-24 bg-[#DBD3C9] relative border-b border-[#A99C90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#736557] block">
            Studio Etiquette & Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#332C26] font-normal leading-tight">
            Salon Policy
          </h2>
          <p className="text-sm sm:text-base text-[#5C5046] font-normal">
            Designed to ensure every client experiences a serene, unhurried, and perfectly hygienic appointment.
          </p>
        </div>

        {/* 6 Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SALON_POLICIES.map((item, index) => {
            const IconComponent = POLICY_ICONS[index] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="bg-[#F2EEE8] p-6 sm:p-7 rounded-2xl border border-[#A99C90]/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#DBD3C9] flex items-center justify-center text-[#332C26]">
                      <IconComponent className="w-5 h-5 text-[#E3A868]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#736557] bg-[#DBD3C9] px-2.5 py-1 rounded-full">
                      {item.short}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#332C26] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#A99C90]/20 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3A868]" />
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#736557]">
                    Reverie Guarantee
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Policy Inquiries & Booking Assistance Banner */}
        <div className="mt-12 bg-[#F2EEE8] p-6 sm:p-8 rounded-2xl border border-[#A99C90]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg sm:text-xl font-medium text-[#332C26]">
              Questions about our policies or treatments?
            </h4>
            <p className="text-xs sm:text-sm text-[#5C5046]">
              Our team is always delighted to assist you before your visit.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={SALON_INFO.phoneTel}
              className="bg-[#DBD3C9] hover:bg-[#A99C90]/40 text-[#332C26] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-[#A99C90]/40 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#332C26]" />
              <span>020 3143 6868</span>
            </a>

            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#332C26] hover:bg-[#E3A868] hover:text-[#332C26] text-[#F2EEE8] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-2 shadow-2xs transition-colors"
            >
              <span>Book on Fresha</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
