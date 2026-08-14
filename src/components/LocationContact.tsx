import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { SALON_INFO, FRESHA_BOOKING_URL, GOOGLE_MAPS_URL } from '../data/spaData';

export const LocationContact: React.FC = () => {
  return (
    <section id="visit" className="py-16 sm:py-24 bg-[#DBD3C9] relative border-b border-[#A99C90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#736557] block">
            Find Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#332C26] font-normal leading-tight">
            Visit Reverie
          </h2>
          <p className="text-sm text-[#5C5046] font-normal">
            133 High Street, West Wickham, BR4 0LU. Walk-ins welcome when space permits, or book ahead on Fresha.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Studio Info Card */}
          <div className="lg:col-span-5 bg-[#F2EEE8] p-6 sm:p-8 rounded-2xl border border-[#A99C90]/30 shadow-xs flex flex-col justify-between space-y-6">
            
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#736557]">Location & Contact</span>
              <h3 className="font-serif text-2xl font-normal text-[#332C26]">
                Reverie Nail Studio
              </h3>
            </div>

            <div className="space-y-5 text-xs">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#DBD3C9] text-[#332C26] rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#E3A868]" />
                </div>
                <div>
                  <strong className="block text-[#332C26] uppercase tracking-wider mb-0.5 text-[11px] font-semibold">Address</strong>
                  <p className="text-[#5C5046] leading-relaxed">
                    133 High Street<br />
                    West Wickham, BR4 0LU, United Kingdom
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#332C26] font-semibold hover:text-[#E3A868] mt-1.5 text-[11px] transition-colors"
                  >
                    <span>Get directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-[#A99C90]/20">
                <div className="p-2.5 bg-[#DBD3C9] text-[#332C26] rounded-xl shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#E3A868]" />
                </div>
                <div>
                  <strong className="block text-[#332C26] uppercase tracking-wider mb-0.5 text-[11px] font-semibold">Telephone</strong>
                  <a
                    href={SALON_INFO.phoneTel}
                    className="text-sm font-semibold text-[#332C26] hover:text-[#E3A868] transition-colors"
                  >
                    020 3143 6868
                  </a>
                  <p className="text-[11px] text-[#736557] mt-0.5">Call our studio during open hours</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-[#A99C90]/20">
                <div className="p-2.5 bg-[#DBD3C9] text-[#332C26] rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#E3A868]" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1.5">
                    <strong className="text-[#332C26] uppercase tracking-wider text-[11px] font-semibold">Opening Hours</strong>
                    <span className="bg-[#DBD3C9] text-[#332C26] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      Open Mon - Sat
                    </span>
                  </div>
                  <table className="w-full text-xs text-[#5C5046]">
                    <tbody>
                      <tr className="border-b border-[#A99C90]/15">
                        <td className="py-1 font-medium">Monday – Saturday</td>
                        <td className="text-right font-semibold text-[#332C26]">09:30 – 18:30</td>
                      </tr>
                      <tr>
                        <td className="py-1 font-medium">Sunday</td>
                        <td className="text-right font-semibold text-[#332C26]">10:00 – 17:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Direct Fresha Button */}
            <div className="pt-2">
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#332C26] hover:bg-[#E3A868] hover:text-[#332C26] text-[#F2EEE8] py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 shadow-xs transition-all duration-200"
              >
                <span>Book on Fresha</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>

          {/* Map Preview */}
          <div className="lg:col-span-7 bg-[#F2EEE8] p-6 sm:p-8 rounded-2xl border border-[#A99C90]/30 shadow-xs flex flex-col justify-between space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase font-bold tracking-widest text-[#736557]">Location Map</span>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#332C26] font-semibold hover:text-[#E3A868] flex items-center gap-1.5 bg-[#DBD3C9] px-3.5 py-1.5 rounded-full transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E3A868]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="relative rounded-xl overflow-hidden border border-[#A99C90]/30 bg-[#DBD3C9] h-80 sm:h-96 shadow-inner">
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=133+High+Street,+West+Wickham,+BR4+0LU&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />

              <div className="absolute bottom-3 left-3 right-3 bg-[#F2EEE8]/95 backdrop-blur-md p-3 rounded-xl border border-[#A99C90]/30 shadow-md flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-semibold text-[#332C26] text-xs sm:text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E3A868]" />
                    Reverie Nail Studio
                  </h4>
                  <p className="text-[11px] text-[#5C5046]">133 High Street, West Wickham, BR4 0LU</p>
                </div>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#332C26] hover:text-[#E3A868] flex items-center gap-1 bg-[#DBD3C9] px-3 py-1.5 rounded-lg transition-colors"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
