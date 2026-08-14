import React, { useState } from 'react';
import { Search, Sparkles, Clock, Check, Info, Filter, ArrowUpRight, ExternalLink } from 'lucide-react';
import { SERVICES, FRESHA_BOOKING_URL } from '../data/spaData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServiceMenuProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const categories: { id: ServiceCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'manicure-pedicure', label: 'Mani & Pedi' },
    { id: 'biab', label: 'BIAB' },
    { id: 'extensions', label: 'Nail Extensions' },
    { id: 'dipping-powder', label: 'Dipping Powder' },
    { id: 'add-ons', label: 'Add-ons' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryBadgeLabel = (cat: ServiceCategory) => {
    switch (cat) {
      case 'manicure-pedicure':
        return 'Manicure & Pedicure';
      case 'biab':
        return 'BIAB (Builder In A Bottle)';
      case 'extensions':
        return 'Nail Extensions';
      case 'dipping-powder':
        return 'Dipping Powder';
      case 'add-ons':
        return 'Add-ons & Removals';
      default:
        return cat;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F5EBE0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/80 px-4 py-1.5 rounded-full border border-[#CBB292]">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Official Salon Price List</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
            Service Menu & Pricing
          </h2>
          <p className="text-sm text-[#6E5A44] font-light">
            Transparent pricing at Reverie Nail Studio (133 High Street, West Wickham). Book directly on Fresha for instant confirmation.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#FAF7F2] p-3 rounded-2xl border border-[#E8DFD1] shadow-2xs">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all ${
                    active
                      ? 'bg-[#4A3B2C] text-[#F9F5EF] shadow-xs'
                      : 'text-[#6E5A44] hover:bg-[#EADCC9]/50 hover:text-[#3D2E1E]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7355]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search BIAB, Ombré, Gel..."
              className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl pl-9 pr-4 py-2 text-xs text-[#3D2E1E] focus:outline-none focus:border-[#8C7355] placeholder-[#A08C75]"
            />
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#E8DFD1] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              {/* Top Row Badge & Popular Tag */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#EADCC9] text-[#5A4836] px-3 py-1 rounded-full">
                    {getCategoryBadgeLabel(service.category)}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {service.discountBadge && (
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-300">
                        {service.discountBadge}
                      </span>
                    )}
                    {service.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full border border-amber-300/50 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Title & Tagline */}
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#2C2015] group-hover:text-[#8C7355] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#7A644D] mt-1 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                {/* Price & Duration Banner */}
                <div className="flex items-center justify-between py-2 border-y border-[#E8DFD1]/60">
                  <div className="flex items-center gap-1.5 text-xs text-[#8C7355] font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{service.durationDisplay || `${service.durationMinutes} mins`}</span>
                  </div>
                  <div className="text-right flex items-baseline gap-2">
                    {service.originalPriceDisplay && (
                      <span className="text-xs text-[#A08C75] line-through">
                        {service.originalPriceDisplay}
                      </span>
                    )}
                    <span className="text-xl font-serif font-bold text-[#3D2E1E]">
                      {service.priceDisplay || (typeof service.priceGBP === 'number' ? `£${service.priceGBP}` : service.priceGBP)}
                    </span>
                  </div>
                </div>

                {/* Highlights preview */}
                <ul className="space-y-1.5 pt-1">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#5A4836] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Buttons */}
              <div className="pt-6 mt-4 border-t border-[#E8DFD1]/40 flex items-center gap-2">
                <button
                  onClick={() => setSelectedServiceDetail(service)}
                  className="p-2.5 rounded-xl border border-[#E8DFD1] text-[#6E5A44] hover:bg-[#EADCC9]/50 transition-colors text-xs font-medium flex items-center gap-1"
                  title="View full details"
                >
                  <Info className="w-4 h-4 text-[#8C7355]" />
                  <span className="hidden sm:inline">Details</span>
                </button>

                <a
                  href={FRESHA_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] py-2.5 px-4 rounded-xl text-xs font-medium tracking-wider uppercase transition-all shadow-2xs flex items-center justify-center gap-2"
                >
                  <span>Book your session now</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#FAF7F2] rounded-3xl border border-[#E8DFD1]">
            <Filter className="w-8 h-8 text-[#8C7355] mx-auto mb-3" />
            <p className="text-sm font-semibold text-[#3D2E1E]">No services match your search filter</p>
            <p className="text-xs text-[#7A644D] mt-1">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs underline text-[#8C7355] font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-2xl relative space-y-5 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-[#E8DFD1] pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#EADCC9] text-[#5A4836] px-3 py-1 rounded-full">
                  {getCategoryBadgeLabel(selectedServiceDetail.category)}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#2C2015] mt-2">
                  {selectedServiceDetail.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="p-1.5 rounded-full bg-[#EADCC9] text-[#4A3B2C] hover:bg-[#CBB292]"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#5A4836] leading-relaxed">
              {selectedServiceDetail.description}
            </p>

            <div className="bg-[#F5EBE0] p-4 rounded-2xl border border-[#E8DFD1] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3D2E1E]">Service Highlights:</h4>
              <ul className="space-y-1.5 text-xs text-[#6E5A44]">
                {selectedServiceDetail.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#7A644D] uppercase font-bold tracking-wider block">
                  {selectedServiceDetail.durationDisplay || `${selectedServiceDetail.durationMinutes} mins`}
                </span>
                <div className="flex items-baseline gap-2">
                  {selectedServiceDetail.originalPriceDisplay && (
                    <span className="text-sm text-[#A08C75] line-through">
                      {selectedServiceDetail.originalPriceDisplay}
                    </span>
                  )}
                  <p className="text-2xl font-serif font-bold text-[#3D2E1E]">
                    {selectedServiceDetail.priceDisplay || (typeof selectedServiceDetail.priceGBP === 'number' ? `£${selectedServiceDetail.priceGBP}` : selectedServiceDetail.priceGBP)}
                  </p>
                </div>
              </div>

              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A3B2C] text-[#F9F5EF] px-6 py-3 rounded-full text-xs font-medium tracking-widest uppercase shadow-md hover:bg-[#32271C] flex items-center gap-2"
              >
                <span>Book your session now</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
