import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, Calendar, ExternalLink } from 'lucide-react';
import { FAQS, SALON_INFO, FRESHA_BOOKING_URL } from '../data/spaData';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#DBD3C9] relative border-b border-[#A99C90]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#736557] block">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#332C26] font-normal leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#5C5046] font-normal max-w-xl mx-auto">
            Everything you need to know about our treatments, booking on Fresha, and visiting our studio in West Wickham.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#F2EEE8] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#332C26]/40 shadow-xs' : 'border-[#A99C90]/30 hover:border-[#332C26]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#332C26] focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E3A868] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#DBD3C9] text-[#332C26] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#332C26] text-[#F2EEE8]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#5C5046] leading-relaxed border-t border-[#A99C90]/20 pt-4 animate-in fade-in-50 duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="bg-[#F2EEE8] p-6 sm:p-8 rounded-2xl border border-[#A99C90]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#332C26]">Have more questions?</h4>
            <p className="text-xs text-[#736557] mt-0.5">Call our studio directly or book your appointment online on Fresha.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={SALON_INFO.phoneTel}
              className="bg-[#DBD3C9] hover:bg-[#A99C90]/40 text-[#332C26] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-[#A99C90]/40"
            >
              <Phone className="w-3.5 h-3.5 text-[#332C26]" />
              <span>{SALON_INFO.phone}</span>
            </a>

            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#332C26] hover:bg-[#E3A868] hover:text-[#332C26] text-[#F2EEE8] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-2 shadow-2xs transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book on Fresha</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
