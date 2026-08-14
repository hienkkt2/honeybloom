import React, { useState } from 'react';
import { Sparkles, Calendar, Maximize2, X, Check, Clock, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS, FRESHA_BOOKING_URL } from '../data/spaData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Featured' },
    { id: 'pedicure', label: 'Mani & Pedi' },
    { id: 'biab', label: 'BIAB' },
    { id: 'extensions', label: 'Nail Extensions' },
    { id: 'dipping-powder', label: 'Dipping Powder' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'pedicure') {
      return item.category === 'pedicure' || item.category === 'combo';
    }
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F2] relative border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/60 px-4 py-1.5 rounded-full border border-[#CBB292]">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Signature Treatments Spotlight</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
            Popular & Signature Services
          </h2>
          <p className="text-sm text-[#6E5A44] font-light">
            Explore our guests’ most-loved treatments at Reverie Nail Studio — from restorative hot stone pedicures and gentle BIAB overlays to flawless ombré nail art.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#4A3B2C] text-[#F9F5EF] shadow-sm'
                  : 'bg-[#F5EBE0] text-[#6E5A44] hover:bg-[#EADCC9] hover:text-[#3D2E1E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFD1] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Quick Action Overlay */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#EADCC9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge Overlay */}
                {item.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#4A3B2C]/90 backdrop-blur-xs text-amber-200 text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                )}

                {/* Price Pill */}
                {item.price && (
                  <div className="absolute top-3 right-3 z-10 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8DFD1] shadow-sm flex items-center gap-1.5">
                    <span className="font-serif font-bold text-sm text-[#2C2015]">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-[10px] text-[#A08C75] line-through">{item.originalPrice}</span>
                    )}
                  </div>
                )}

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => setActiveLightboxItem(item)}
                    className="p-3 bg-white/95 text-[#3D2E1E] rounded-full hover:bg-white shadow-md transition-transform hover:scale-110"
                    title="View Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  {item.serviceIdToBook && (
                    <button
                      onClick={() => onOpenBooking(item.serviceIdToBook)}
                      className="p-3 bg-[#4A3B2C] text-amber-300 rounded-full hover:bg-[#32271C] shadow-md transition-transform hover:scale-110"
                      title="Book Service"
                    >
                      <Calendar className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Service Information */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7355]">
                      {item.categoryLabel || item.category.replace('-', ' ')}
                    </span>
                    {item.duration && (
                      <span className="text-[11px] text-[#7A644D] flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-[#8C7355]" />
                        {item.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#2C2015] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5A4836] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="pt-2 space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-[#6E5A44]">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-[#E8DFD1]/80 flex gap-2">
                  <button
                    onClick={() => onOpenBooking(item.serviceIdToBook)}
                    className="flex-1 bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    <span>Book Service</span>
                  </button>

                  <a
                    href={FRESHA_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 bg-[#F5EBE0] hover:bg-[#EADCC9] text-[#3D2E1E] py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-center border border-[#E8DFD1]"
                    title="Book directly on Fresha"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#8C7355]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Service Details Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] max-w-xl w-full rounded-3xl overflow-hidden border border-[#E8DFD1] shadow-2xl relative space-y-4 animate-in zoom-in-95 duration-200">
            
            <div className="relative aspect-16/9 bg-[#EADCC9]">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-[#8C7355]">
                  {activeLightboxItem.categoryLabel || activeLightboxItem.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-2">
                  {activeLightboxItem.duration && (
                    <span className="text-xs text-[#7A644D] bg-[#F5EBE0] px-2.5 py-1 rounded-full font-medium">
                      {activeLightboxItem.duration}
                    </span>
                  )}
                  {activeLightboxItem.price && (
                    <span className="font-serif font-bold text-base text-[#2C2015] bg-amber-100/70 border border-amber-300 px-3 py-0.5 rounded-full">
                      {activeLightboxItem.price}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="font-serif text-2xl font-light text-[#2C2015]">
                {activeLightboxItem.title}
              </h3>
              
              <p className="text-sm text-[#5A4836] leading-relaxed">
                {activeLightboxItem.description}
              </p>

              {activeLightboxItem.highlights && (
                <div className="bg-[#F5EBE0]/60 p-4 rounded-2xl border border-[#E8DFD1] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#3D2E1E]">Treatment Inclusions:</h4>
                  <ul className="space-y-1.5">
                    {activeLightboxItem.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#6E5A44]">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-[#E8DFD1] flex justify-end gap-3">
                <button
                  onClick={() => setActiveLightboxItem(null)}
                  className="px-5 py-2.5 rounded-full border border-[#8C7355] text-xs uppercase font-medium text-[#3D2E1E]"
                >
                  Close
                </button>
                {activeLightboxItem.serviceIdToBook && (
                  <button
                    onClick={() => {
                      const id = activeLightboxItem.serviceIdToBook;
                      setActiveLightboxItem(null);
                      onOpenBooking(id);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#4A3B2C] text-[#F9F5EF] text-xs uppercase font-medium hover:bg-[#32271C] transition-colors flex items-center gap-2 shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    <span>Book This Service</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

