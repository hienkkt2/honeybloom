import React, { useState } from 'react';
import { Instagram, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { INSTAGRAM_URL } from '../data/spaData';

const RECENT_WORK_IMAGES = [
  {
    id: 'work-1',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800',
    title: 'Clean Minimal BIAB Overlay',
    tag: 'BIAB Nails',
  },
  {
    id: 'work-2',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    title: 'Classic French Tip & Gel Finish',
    tag: 'French Manicure',
  },
  {
    id: 'work-3',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    title: 'Soft Blush Ombré Gel',
    tag: 'Ombré Set',
  },
  {
    id: 'work-4',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    title: 'Sculpted Acrylic Extensions',
    tag: 'Extensions',
  },
  {
    id: 'work-5',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800',
    title: 'Glazed Chrome Gel Manicure',
    tag: 'Gel Polish',
  },
  {
    id: 'work-6',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=800',
    title: 'Deluxe Pedicure & Cuticle Care',
    tag: 'Pedicure',
  },
];

export const RecentWork: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? RECENT_WORK_IMAGES.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= RECENT_WORK_IMAGES.length - 3 ? 0 : prev + 1));
  };

  return (
    <section id="recent-work" className="py-16 sm:py-24 bg-[#DBD3C9] relative border-b border-[#A99C90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#736557] block mb-2">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#332C26] font-normal">
              Recent Work
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F2EEE8] hover:bg-[#332C26] hover:text-[#F2EEE8] text-[#332C26] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#A99C90]/40 transition-all shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E3A868]" />
              <span>View more on Instagram</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RECENT_WORK_IMAGES.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F2EEE8] rounded-2xl overflow-hidden border border-[#A99C90]/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#DBD3C9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#332C26]/90 backdrop-blur-xs text-[#F2EEE8] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <span className="font-serif text-base text-[#332C26] font-medium">
                  {item.title}
                </span>
                <span className="text-xs text-[#736557]">@reverie</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Instagram Link Prompt */}
        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#332C26] hover:text-[#E3A868] transition-colors border-b border-[#332C26] pb-1 hover:border-[#E3A868]"
          >
            <Instagram className="w-4 h-4 text-[#E3A868]" />
            <span>Follow our daily work & design inspiration on Instagram @reverie.nail.studio</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
