import React from 'react';
import { ShieldCheck, Coffee, Sparkles, Droplets } from 'lucide-react';
import { WHY_REVERIE_ITEMS } from '../data/spaData';

const ICONS = [
  ShieldCheck,
  Coffee,
  Sparkles,
  Droplets,
];

export const Philosophy: React.FC = () => {
  return (
    <section id="why-reverie" className="py-16 sm:py-24 bg-[#DBD3C9] relative border-b border-[#A99C90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#736557] block">
            The Reverie Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#332C26] font-normal leading-tight">
            Why Reverie
          </h2>
          <p className="text-sm sm:text-base text-[#5C5046] font-normal max-w-xl mx-auto">
            We believe high street nail care should feel thoughtful, hygienic, and genuinely relaxing from start to finish.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_REVERIE_ITEMS.map((item, index) => {
            const IconComponent = ICONS[index] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-[#F2EEE8] p-6 sm:p-7 rounded-2xl border border-[#A99C90]/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#DBD3C9] flex items-center justify-center text-[#332C26]">
                    <IconComponent className="w-5 h-5 text-[#E3A868]" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#332C26] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#A99C90]/20 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3A868]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#736557]">
                    Included Always
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
