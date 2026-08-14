import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle, Phone, Calendar, ExternalLink } from 'lucide-react';
import { FAQS, SALON_INFO, FRESHA_BOOKING_URL } from '../data/spaData';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-[#F5EBE0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/80 px-4 py-1.5 rounded-full border border-[#CBB292]">
            <HelpCircle className="w-4 h-4 text-amber-700" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#6E5A44] font-light max-w-xl mx-auto">
            Everything you need to know about our Acrylic, Dipping Powder, Ombré services, bookings on Fresha, and visiting our studio in West Wickham.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#FAF7F2] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#8C7355] shadow-md' : 'border-[#E8DFD1] hover:border-[#CBB292]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-[#2C2015] focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#8C7355] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#EADCC9] text-[#4A3B2C] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#4A3B2C] text-amber-300' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#5A4836] leading-relaxed border-t border-[#E8DFD1]/60 pt-4 animate-in fade-in-50 duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8DFD1] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#2C2015]">Have more questions?</h4>
            <p className="text-xs text-[#6E5A44] mt-0.5">Call our studio directly or book your appointment online anytime.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={SALON_INFO.phoneTel}
              className="border border-[#8C7355] hover:bg-[#EADCC9]/50 text-[#3D2E1E] px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{SALON_INFO.phone}</span>
            </a>

            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-2 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book your session now</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
