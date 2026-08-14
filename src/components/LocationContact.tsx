import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { SALON_INFO, FRESHA_BOOKING_URL, GOOGLE_MAPS_URL, FACEBOOK_URL, INSTAGRAM_URL } from '../data/spaData';

export const LocationContact: React.FC = () => {

  return (
    <section id="location" className="py-20 bg-[#FAF7F2] relative border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/60 px-4 py-1.5 rounded-full border border-[#CBB292]">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>West Wickham • London</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
            Visit Reverie Nail Studio
          </h2>
          <p className="text-sm text-[#6E5A44] font-light">
            133 High Street, West Wickham, BR4 0LU. Call us at {SALON_INFO.phone} or book directly online via Fresha.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Studio Info Card */}
          <div className="lg:col-span-5 bg-[#F5EBE0] p-6 sm:p-8 rounded-3xl border border-[#E8DFD1] shadow-xl space-y-6">
            
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C7355]">Studio Contact</span>
              <h3 className="font-serif text-2xl font-light text-[#2C2015] mt-1">
                Reverie Nail Studio
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#4A3B2C] text-amber-300 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#3D2E1E] uppercase tracking-wider mb-0.5">Address</strong>
                  <p className="text-[#6E5A44]">
                    133 High Street<br />
                    West Wickham, BR4 0LU, United Kingdom
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#8C7355] font-bold hover:underline mt-1 text-[11px]"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#4A3B2C] text-amber-300 rounded-xl shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#3D2E1E] uppercase tracking-wider mb-0.5">Telephone</strong>
                  <a
                    href={SALON_INFO.phoneTel}
                    className="text-[#8C7355] font-bold hover:underline text-sm"
                  >
                    {SALON_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 bg-[#FAF7F2] p-2.5 rounded-2xl border border-[#E8DFD1]">
                  <div className="p-2 bg-[#4A3B2C] text-amber-300 rounded-lg shrink-0">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[9px] uppercase font-bold tracking-wider text-[#8C7355]">Instagram</span>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D2E1E] font-bold hover:underline text-xs truncate block"
                    >
                      @reverie.nail.studio
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-[#FAF7F2] p-2.5 rounded-2xl border border-[#E8DFD1]">
                  <div className="p-2 bg-[#1877F2] text-white rounded-lg shrink-0">
                    <Facebook className="w-3.5 h-3.5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[9px] uppercase font-bold tracking-wider text-[#8C7355]">Facebook</span>
                    <a
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D2E1E] font-bold hover:underline text-xs truncate block"
                    >
                      Reverie Studio
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#E8DFD1]">
                <div className="p-2.5 bg-[#4A3B2C] text-amber-300 rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <strong className="text-[#3D2E1E] uppercase tracking-wider">Opening Hours</strong>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Open Mon - Sat
                    </span>
                  </div>
                  <table className="w-full text-[11px] text-[#6E5A44] space-y-1">
                    <tbody>
                      <tr>
                        <td className="py-0.5 font-medium">Monday - Saturday</td>
                        <td className="text-right font-bold text-[#3D2E1E]">09:30 - 18:30</td>
                      </tr>
                      <tr>
                        <td className="py-0.5 font-medium">Sunday</td>
                        <td className="text-right font-bold text-[#3D2E1E]">10:00 - 17:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Direct Fresha Button */}
            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#4A3B2C] hover:bg-[#32271C] text-amber-200 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Book your session now</span>
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>

          {/* Map Preview & Directions */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8DFD1] shadow-xl space-y-6 flex flex-col justify-between">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-widest text-[#8C7355]">Location on Map</span>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8C7355] font-bold hover:underline flex items-center gap-1 bg-[#EADCC9]/50 px-3 py-1.5 rounded-full border border-[#CBB292]"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-700" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Preview Graphic with Direct Google Maps Link */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden border border-[#E8DFD1] bg-[#EADCC9] h-64 shadow-inner cursor-pointer"
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8C7355_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Embed OpenStreetMap Preview tile representation */}
                <iframe
                  title="Google Maps Location"
                  src="https://maps.google.com/maps?q=133+High+Street,+West+Wickham,+BR4+0LU&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />

                <div className="absolute bottom-3 left-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E8DFD1] shadow-xl flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-[#2C2015] text-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-700" />
                      Reverie Nail Studio
                    </h4>
                    <p className="text-[11px] text-[#6E5A44]">133 High Street, West Wickham, BR4 0LU</p>
                  </div>
                  <span className="text-[11px] font-bold text-[#8C7355] group-hover:underline flex items-center gap-1 shrink-0 bg-[#EADCC9] px-2.5 py-1 rounded-lg">
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>

              {/* Social and Location Links Quick Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F5EBE0] p-3 rounded-xl border border-[#E8DFD1] hover:border-[#8C7355] transition-colors block"
                >
                  <strong className="block text-[#3D2E1E] font-bold mb-0.5 flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-amber-700" />
                    Google Maps
                  </strong>
                  <p className="text-[#6E5A44] text-[11px]">Get live GPS driving and walking directions.</p>
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F5EBE0] p-3 rounded-xl border border-[#E8DFD1] hover:border-[#8C7355] transition-colors block"
                >
                  <strong className="block text-[#3D2E1E] font-bold mb-0.5 flex items-center gap-1">
                    <Facebook className="w-3.5 h-3.5 text-blue-600" />
                    Facebook Page
                  </strong>
                  <p className="text-[#6E5A44] text-[11px]">Follow our official Facebook page for updates.</p>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F5EBE0] p-3 rounded-xl border border-[#E8DFD1] hover:border-[#8C7355] transition-colors block"
                >
                  <strong className="block text-[#3D2E1E] font-bold mb-0.5 flex items-center gap-1">
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    Instagram Feed
                  </strong>
                  <p className="text-[#6E5A44] text-[11px]">Explore latest nail designs and videos.</p>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
