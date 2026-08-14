import React, { useState } from 'react';
import { X, Calendar, Clock, User, Sparkles, CheckCircle2, Coffee, MapPin, Download, ShieldCheck, ChevronRight, Mail, Send, BellRing } from 'lucide-react';
import { SERVICES, THERAPISTS } from '../data/spaData';
import { BookingRecord, BookingState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  onAddBooking?: (newBooking: BookingRecord) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  onAddBooking,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Initial Selected Service
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ['head-spa-signature']
  );
  const [therapistId, setTherapistId] = useState<string>('donna-founder');
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-14');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('11:00 AM');
  
  // Custom Addons & Tea
  const [teaPreference, setTeaPreference] = useState<string>('Organic Honey Chrysanthemum');
  const [customAddons, setCustomAddons] = useState<string[]>([]);
  const [hairType, setHairType] = useState<string>('Medium / Straight');

  // Contact Info
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Confirmation
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Service toggle helper
  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter((s) => s !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const toggleAddon = (addon: string) => {
    if (customAddons.includes(addon)) {
      setCustomAddons(customAddons.filter((a) => a !== addon));
    } else {
      setCustomAddons([...customAddons, addon]);
    }
  };

  // Calculate Totals
  const selectedServices = SERVICES.filter((s) => selectedServiceIds.includes(s.id));
  const subtotalGBP = selectedServices.reduce((sum, s) => {
    const p = typeof s.priceGBP === 'number' ? s.priceGBP : parseFloat(String(s.priceGBP).replace(/[^0-9.]/g, '')) || 0;
    return sum + p;
  }, 0);
  const totalDuration = selectedServices.reduce((sum, s) => sum + (s.durationMinutes || 30), 0);

  const availableDates = [
    { label: 'Thu, Aug 13', value: '2026-08-13' },
    { label: 'Fri, Aug 14', value: '2026-08-14' },
    { label: 'Sat, Aug 15', value: '2026-08-15' },
    { label: 'Mon, Aug 17', value: '2026-08-17' },
    { label: 'Tue, Aug 18', value: '2026-08-18' },
  ];

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:15 PM',
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'REV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsConfirmed(true);

    const newRecord: BookingRecord = {
      id: randomRef,
      clientName: clientName || 'Valued Guest',
      clientEmail: clientEmail || 'guest@example.com',
      clientPhone: clientPhone || '+44 7000 000000',
      serviceNames: selectedServices.map((s) => s.name),
      therapistName: THERAPISTS.find((t) => t.id === therapistId)?.name || 'Reverie Specialist',
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      teaPreference,
      hairType,
      notes,
      totalGBP: subtotalGBP,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
    };

    if (onAddBooking) {
      onAddBooking(newRecord);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#332C26]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#F2EEE8] w-full max-w-3xl rounded-3xl border border-[#A99C90]/30 shadow-2xl relative my-auto overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#332C26] text-[#F2EEE8] p-5 sm:p-6 flex items-center justify-between border-b border-[#A99C90]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#DBD3C9]/20 flex items-center justify-center text-[#E3A868] font-serif font-bold text-lg border border-[#A99C90]/30">
              R
            </div>
            <div>
              <span className="text-[10px] text-[#E3A868] uppercase tracking-widest block font-semibold">Boutique Appointment</span>
              <h2 className="font-serif text-xl sm:text-2xl font-normal">Reverie Nail Studio</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#DBD3C9] hover:text-[#F2EEE8] hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        {!isConfirmed && (
          <div className="bg-[#DBD3C9] border-b border-[#A99C90]/30 px-6 py-3 flex items-center justify-between text-xs font-semibold text-[#5C5046]">
            <span className={step >= 1 ? 'text-[#332C26] font-bold' : ''}>1. Treatments ({selectedServices.length})</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <span className={step >= 2 ? 'text-[#332C26] font-bold' : ''}>2. Date & Time</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <span className={step >= 3 ? 'text-[#332C26] font-bold' : ''}>3. Personalisation</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
            <span className={step >= 4 ? 'text-[#332C26] font-bold' : ''}>4. Details & Confirm</span>
          </div>
        )}

        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          
          {/* CONFIRMED PASS VIEW */}
          {isConfirmed ? (
            <div className="text-center space-y-6 py-4 animate-in fade-in duration-300">
              
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#8C7355]">Booking Confirmed</span>
                <h3 className="font-serif text-3xl font-light text-[#2C2015] mt-1">
                  We look forward to welcoming you, {clientName || 'Valued Guest'}!
                </h3>
                <p className="text-xs text-[#7A644D] mt-2">
                  A confirmation email and WhatsApp invitation have been dispatched.
                </p>
              </div>

              {/* Digital Pass Voucher Card */}
              <div className="bg-[#F5EBE0] border-2 border-dashed border-[#CBB292] p-6 rounded-3xl text-left max-w-md mx-auto space-y-4 shadow-sm relative">
                <div className="flex justify-between items-center border-b border-[#E8DFD1] pb-3">
                  <span className="font-serif text-lg font-bold text-[#3D2E1E]">Reverie Nail Studio</span>
                  <span className="font-mono text-xs font-bold text-amber-900 bg-amber-200/80 px-2.5 py-1 rounded-md">
                    REF: {bookingRef}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#8C7355] block">Date & Time</span>
                    <strong className="text-[#3D2E1E]">{selectedDate} @ {selectedTimeSlot}</strong>
                  </div>
                  <div>
                    <span className="text-[#8C7355] block">Specialist</span>
                    <strong className="text-[#3D2E1E]">
                      {THERAPISTS.find((t) => t.id === therapistId)?.name || 'Reverie Technician'}
                    </strong>
                  </div>
                </div>

                <div className="text-xs border-t border-[#E8DFD1] pt-3 space-y-1">
                  <span className="text-[#8C7355] block">Selected Services</span>
                  {selectedServices.map((s) => (
                    <div key={s.id} className="flex justify-between font-medium text-[#3D2E1E]">
                      <span>{s.name}</span>
                      <span>£{s.priceGBP}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm font-bold text-[#2C2015] pt-2 border-t border-[#E8DFD1]">
                    <span>Total Due at Studio</span>
                    <span>£{subtotalGBP} GBP</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#7A644D] flex items-center gap-1.5 pt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8C7355] shrink-0" />
                  <span>133 High Street, West Wickham, BR4 0LU</span>
                </div>
              </div>

              {/* Explicit Notification Channels Summary Box */}
              <div className="bg-[#3D2E1E] text-amber-100 p-5 rounded-2xl text-left max-w-md mx-auto space-y-3 shadow-md border border-[#5A4836]">
                <div className="flex items-center gap-2 border-b border-[#5A4836] pb-2 text-amber-300">
                  <BellRing className="w-4 h-4 animate-bounce" />
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wider">
                    Where Has Your Confirmation Been Sent?
                  </h4>
                </div>

                <ul className="text-xs space-y-2.5 text-amber-200/90">
                  <li className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">1. Guest Email ({clientEmail || 'Your Email'}):</strong>
                      <span className="text-[11px] text-amber-200/80">
                        Instant reservation pass, reference code {bookingRef} & Google Calendar event file.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2">
                    <Send className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">2. WhatsApp Spa Concierge:</strong>
                      <span className="text-[11px] text-amber-200/80">
                        Direct alert dispatched to +44 7777 326555 so therapists prepare your treatment room.
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">3. Salon Manager & Staff Portal:</strong>
                      <span className="text-[11px] text-amber-200/80">
                        Synced automatically to the studio's live appointment ledger at Royal Docks, London.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => alert('Calendar invite (.ics) generated!')}
                  className="bg-[#4A3B2C] text-[#F9F5EF] px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#32271C]"
                >
                  Add to Google Calendar
                </button>
                <button
                  onClick={onClose}
                  className="border border-[#8C7355] text-[#3D2E1E] px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#EADCC9]/50"
                >
                  Close & Return
                </button>
              </div>

            </div>
          ) : (
            <form onSubmit={handleConfirmBooking} className="space-y-6">
              
              {/* STEP 1: SELECT RITUALS */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-light text-[#2C2015]">Select Your Sanctuary Rituals</h3>
                      <p className="text-xs text-[#7A644D]">Select one or multiple services for a combined session.</p>
                    </div>
                    <span className="text-xs font-bold text-[#8C7355] bg-[#EADCC9] px-3 py-1 rounded-full">
                      Step 1 of 4
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-1">
                    {SERVICES.map((s) => {
                      const isSelected = selectedServiceIds.includes(s.id);
                      return (
                        <div
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#EADCC9]/80 border-[#8C7355] shadow-xs'
                              : 'bg-[#FAF7F2] border-[#E8DFD1] hover:bg-[#F5EBE0]'
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-base font-semibold text-[#2C2015]">{s.name}</span>
                            </div>
                            <p className="text-xs text-[#6E5A44] line-clamp-1">{s.tagline}</p>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="font-serif text-base font-bold text-[#3D2E1E]">£{s.priceGBP}</span>
                            <div
                              className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                                isSelected ? 'bg-[#4A3B2C] border-[#4A3B2C] text-amber-300' : 'border-[#CBB292]'
                              }`}
                            >
                              {isSelected && <CheckCircle2 className="w-4 h-4" />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#7A644D] uppercase font-bold tracking-wider">{selectedServices.length} Service{selectedServices.length > 1 ? 's' : ''} Selected</span>
                      <p className="text-lg font-serif font-bold text-[#3D2E1E]">Subtotal: £{subtotalGBP} GBP</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-[#4A3B2C] text-[#F9F5EF] px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#32271C] flex items-center gap-2"
                    >
                      <span>Continue to Schedule</span>
                      <ChevronRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: DATE, TIME & THERAPIST */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-light text-[#2C2015]">Date, Time & Therapist</h3>
                      <p className="text-xs text-[#7A644D]">Pick your preferred specialist and time slot.</p>
                    </div>
                    <span className="text-xs font-bold text-[#8C7355] bg-[#EADCC9] px-3 py-1 rounded-full">
                      Step 2 of 4
                    </span>
                  </div>

                  {/* Therapist Picker */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3D2E1E] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#8C7355]" />
                      Select Therapist
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {THERAPISTS.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTherapistId(t.id)}
                          className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                            therapistId === t.id
                              ? 'bg-[#EADCC9] border-[#8C7355] shadow-xs'
                              : 'bg-[#FAF7F2] border-[#E8DFD1] hover:bg-[#F5EBE0]'
                          }`}
                        >
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-10 h-10 rounded-full object-cover border border-[#CBB292]"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <span className="block text-xs font-bold text-[#3D2E1E]">{t.name}</span>
                            <span className="block text-[10px] text-[#7A644D] line-clamp-1">{t.role.split('&')[0]}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Picker Buttons */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3D2E1E] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8C7355]" />
                      Select Date (August 2026)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {availableDates.map((d) => (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => setSelectedDate(d.value)}
                          className={`py-3 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                            selectedDate === d.value
                              ? 'bg-[#4A3B2C] text-[#F9F5EF] border-[#4A3B2C]'
                              : 'bg-[#FAF7F2] border-[#E8DFD1] text-[#5A4836] hover:bg-[#EADCC9]/50'
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slot Grid */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3D2E1E] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8C7355]" />
                      Available Time Slot
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                            selectedTimeSlot === slot
                              ? 'bg-[#8C7355] text-white border-[#8C7355]'
                              : 'bg-[#FAF7F2] border-[#E8DFD1] text-[#4A3B2C] hover:bg-[#EADCC9]/50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-[#7A644D] hover:underline"
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-[#4A3B2C] text-[#F9F5EF] px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#32271C] flex items-center gap-2"
                    >
                      <span>Personalize Session</span>
                      <ChevronRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PERSONALIZATION & TEA */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-light text-[#2C2015]">Custom Ritual Preferences</h3>
                      <p className="text-xs text-[#7A644D]">Tailor your tea service and scalp treatments.</p>
                    </div>
                    <span className="text-xs font-bold text-[#8C7355] bg-[#EADCC9] px-3 py-1 rounded-full">
                      Step 3 of 4
                    </span>
                  </div>

                  {/* Botanical Tea Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3D2E1E] flex items-center gap-1.5">
                      <Coffee className="w-3.5 h-3.5 text-amber-700" />
                      Complimentary Botanical Tea Pairing
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        'Organic Honey Chrysanthemum',
                        'Calming Lavender Rose Bath Tea',
                        'Iced Botanical Lemongrass & Mint',
                      ].map((tea) => (
                        <button
                          key={tea}
                          type="button"
                          onClick={() => setTeaPreference(tea)}
                          className={`p-3 rounded-2xl border text-left text-xs transition-all ${
                            teaPreference === tea
                              ? 'bg-[#EADCC9] border-[#8C7355] font-semibold text-[#3D2E1E]'
                              : 'bg-[#FAF7F2] border-[#E8DFD1] text-[#6E5A44]'
                          }`}
                        >
                          {tea}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hair Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3D2E1E]">Hair / Scalp Profile</label>
                    <select
                      value={hairType}
                      onChange={(e) => setHairType(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-3 text-xs text-[#3D2E1E] focus:outline-none"
                    >
                      <option value="Fine / Straight">Fine / Straight</option>
                      <option value="Medium / Straight">Medium / Straight</option>
                      <option value="Wavy / Textured">Wavy / Textured</option>
                      <option value="Curly / Coily">Curly / Coily</option>
                      <option value="Dry / Sensitive Scalp">Dry / Sensitive Scalp</option>
                      <option value="Color Treated / Bleached">Color Treated / Bleached</option>
                    </select>
                  </div>

                  <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-[#7A644D] hover:underline"
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="bg-[#4A3B2C] text-[#F9F5EF] px-8 py-3 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-[#32271C] flex items-center gap-2"
                    >
                      <span>Final Guest Details</span>
                      <ChevronRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: GUEST CONTACT INFO & SUBMIT */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-light text-[#2C2015]">Contact & Reservation Confirmation</h3>
                      <p className="text-xs text-[#7A644D]">Enter details to lock in your appointment.</p>
                    </div>
                    <span className="text-xs font-bold text-[#8C7355] bg-[#EADCC9] px-3 py-1 rounded-full">
                      Step 4 of 4
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-3 text-xs text-[#3D2E1E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="eleanor@example.com"
                        className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-3 text-xs text-[#3D2E1E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider block mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+44 7123 456789"
                        className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-3 text-xs text-[#3D2E1E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#3D2E1E] uppercase tracking-wider block mb-1">Special Requests</label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Birthday celebration, soft pressure"
                        className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-3 text-xs text-[#3D2E1E] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-[#F5EBE0] p-4 rounded-2xl border border-[#E8DFD1] text-xs space-y-2">
                    <div className="flex justify-between font-bold text-[#3D2E1E]">
                      <span>Selected Session</span>
                      <span>{selectedDate} @ {selectedTimeSlot}</span>
                    </div>
                    <div className="text-[#6E5A44]">
                      {selectedServices.map((s) => s.name).join(' + ')}
                    </div>
                    <div className="flex justify-between text-sm font-bold text-[#2C2015] pt-2 border-t border-[#E8DFD1]">
                      <span>Total Due Upon Arrival</span>
                      <span>£{subtotalGBP} GBP</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="text-xs text-[#7A644D] hover:underline"
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      className="bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-8 py-3.5 rounded-full text-xs font-medium tracking-widest uppercase shadow-md flex items-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Confirm Reservation</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
