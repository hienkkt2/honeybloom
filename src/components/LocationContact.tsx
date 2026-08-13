import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Send, ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/spaData';

export const LocationContact: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="location" className="py-20 bg-[#FAF7F2] relative border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/60 px-4 py-1.5 rounded-full border border-[#CBB292]">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Royal Docks • East London</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
            Visit Our Sanctuary & Get in Touch
          </h2>
          <p className="text-sm text-[#6E5A44] font-light">
            Unit 1.1-02, 55 Royal Crest Avenue, Royal Docks, London E16 2EB. Just 3 minutes from Pontoon Dock DLR.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Studio Info Card */}
          <div className="lg:col-span-5 bg-[#F5EBE0] p-6 sm:p-8 rounded-3xl border border-[#E8DFD1] shadow-xl space-y-6">
            
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C7355]">Location Details</span>
              <h3 className="font-serif text-2xl font-light text-[#2C2015] mt-1">
                Honey & Bloom Studio
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
                    Unit 1.1-02, 55 Royal Crest Avenue<br />
                    Royal Docks, London E16 2EB, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#4A3B2C] text-amber-300 rounded-xl shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#3D2E1E] uppercase tracking-wider mb-0.5">Phone & WhatsApp</strong>
                  <a
                    href="https://wa.me/447777326555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8C7355] font-bold hover:underline"
                  >
                    +44 7777 326555
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#4A3B2C] text-amber-300 rounded-xl shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#3D2E1E] uppercase tracking-wider mb-0.5">Email Inquiry</strong>
                  <span className="text-[#6E5A44]">info.honeynbloom@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#E8DFD1]">
                <div className="p-2.5 bg-[#4A3B2C] text-amber-300 rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <strong className="text-[#3D2E1E] uppercase tracking-wider">Studio Opening Hours</strong>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Open Today
                    </span>
                  </div>
                  <table className="w-full text-[11px] text-[#6E5A44] space-y-1">
                    <tbody>
                      <tr>
                        <td className="py-0.5 font-medium">Monday - Saturday</td>
                        <td className="text-right font-bold text-[#3D2E1E]">10:00 - 19:30</td>
                      </tr>
                      <tr>
                        <td className="py-0.5 font-medium">Sunday</td>
                        <td className="text-right font-bold text-[#3D2E1E]">11:00 - 18:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Button */}
            <a
              href="https://wa.me/447777326555"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#128C7E] hover:bg-[#0e6f64] text-white py-3 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat via WhatsApp Concierge</span>
            </a>

          </div>

          {/* Interactive Map Simulator & Directions */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8DFD1] shadow-xl space-y-6 flex flex-col justify-between">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-widest text-[#8C7355]">Interactive Map & Directions</span>
                <a
                  href="https://maps.google.com/?q=55+Royal+Crest+Avenue+London+E16+2EB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8C7355] font-bold hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Google Maps</span>
                </a>
              </div>

              {/* Map Preview Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD1] bg-[#EADCC9] h-64 flex items-center justify-center shadow-inner">
                {/* Stylized London Map Canvas Graphic */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8C7355_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 bg-[#FAF7F2]/95 backdrop-blur-md p-6 rounded-2xl border border-[#E8DFD1] shadow-xl max-w-sm text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#4A3B2C] text-amber-300 flex items-center justify-center mx-auto font-serif font-bold">
                    H&B
                  </div>
                  <h4 className="font-serif font-bold text-[#2C2015] text-base">Honey & Bloom Sanctuary</h4>
                  <p className="text-xs text-[#6E5A44]">55 Royal Crest Avenue, Royal Docks, London E16 2EB</p>
                  <span className="inline-block bg-amber-100 text-amber-900 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-300">
                    Pontoon Dock DLR (3 Min Walk)
                  </span>
                </div>
              </div>

              {/* Transport Guide */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-[#F5EBE0] p-3 rounded-xl border border-[#E8DFD1]">
                  <strong className="block text-[#3D2E1E] font-bold mb-0.5">DLR Train</strong>
                  <p className="text-[#6E5A44] text-[11px]">Pontoon Dock Station is 3 mins walk directly down Royal Crest Avenue.</p>
                </div>

                <div className="bg-[#F5EBE0] p-3 rounded-xl border border-[#E8DFD1]">
                  <strong className="block text-[#3D2E1E] font-bold mb-0.5">Uber Boat / Ferry</strong>
                  <p className="text-[#6E5A44] text-[11px]">Royal Wharf Pier is 5 mins walk along the scenic Thames river path.</p>
                </div>

                <div className="bg-[#F5EBE0] p-3 rounded-xl border border-[#E8DFD1]">
                  <strong className="block text-[#3D2E1E] font-bold mb-0.5">Driving & Parking</strong>
                  <p className="text-[#6E5A44] text-[11px]">On-street visitor parking bays available on Royal Crest Avenue.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FAQs Accordion Section */}
        <div className="bg-[#F5EBE0] rounded-3xl p-6 sm:p-10 border border-[#E8DFD1] shadow-xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#8C7355]">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#2C2015]">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#FAF7F2] rounded-2xl border border-[#E8DFD1] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-serif text-base font-medium text-[#2C2015]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#8C7355] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#8C7355] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs text-[#5A4836] leading-relaxed border-t border-[#E8DFD1]/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
