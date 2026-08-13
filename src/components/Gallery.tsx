import React, { useState } from 'react';
import { Sparkles, Calendar, Maximize2, X, Check } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/spaData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'nail-art' | 'head-spa' | 'sanctuary' | 'pedicure'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'nail-art', label: 'Nail Artistry & BIAB' },
    { id: 'head-spa', label: 'Halo Head Spa' },
    { id: 'sanctuary', label: 'Studio Interior' },
    { id: 'pedicure', label: 'Spa Pedicures' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F2] relative border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/60 px-4 py-1.5 rounded-full border border-[#CBB292]">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Inspiration</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
            Sanctuary & Artistry Lookbook
          </h2>
          <p className="text-sm text-[#6E5A44] font-light">
            Browse our real Russian BIAB nail artistry, Japanese head spa halo waterfall suites, and clean aesthetic studio at 55 Royal Crest Avenue.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFD1] shadow-2xs hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#EADCC9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => setActiveLightboxItem(item)}
                    className="p-3 bg-white/90 text-[#3D2E1E] rounded-full hover:bg-white shadow-md"
                    title="Enlarge Photo"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  {item.serviceIdToBook && (
                    <button
                      onClick={() => onOpenBooking(item.serviceIdToBook)}
                      className="p-3 bg-[#4A3B2C] text-amber-300 rounded-full hover:bg-[#32271C] shadow-md"
                      title="Book This Look"
                    >
                      <Calendar className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7355] block mb-1">
                    {item.category.replace('-', ' ')}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[#2C2015] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A644D] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {item.serviceIdToBook && (
                  <button
                    onClick={() => onOpenBooking(item.serviceIdToBook)}
                    className="w-full mt-2 bg-[#F5EBE0] hover:bg-[#EADCC9] text-[#3D2E1E] py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 border border-[#E8DFD1]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#8C7355]" />
                    <span>Book This Look</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] max-w-2xl w-full rounded-3xl overflow-hidden border border-[#E8DFD1] shadow-2xl relative space-y-4 animate-in zoom-in-95 duration-200">
            
            <div className="relative aspect-16/10 bg-[#EADCC9]">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8C7355]">
                {activeLightboxItem.category.replace('-', ' ')}
              </span>
              <h3 className="font-serif text-2xl font-light text-[#2C2015]">
                {activeLightboxItem.title}
              </h3>
              <p className="text-sm text-[#5A4836] leading-relaxed">
                {activeLightboxItem.description}
              </p>

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
                    className="px-6 py-2.5 rounded-full bg-[#4A3B2C] text-[#F9F5EF] text-xs uppercase font-medium hover:bg-[#32271C]"
                  >
                    Book This Service
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
