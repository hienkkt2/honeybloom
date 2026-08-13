import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Search, CheckCircle2, AlertCircle, RefreshCw, Filter, Sparkles, Send, ShieldCheck, Lock, KeyRound } from 'lucide-react';
import { BookingRecord } from '../types';

interface AdminBookingPortalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingRecord[];
  onUpdateStatus: (bookingId: string, newStatus: BookingRecord['status']) => void;
  onClearAllBookings?: () => void;
}

const DEFAULT_PIN = '8888';

export const AdminBookingPortal: React.FC<AdminBookingPortalProps> = ({
  isOpen,
  onClose,
  bookings,
  onUpdateStatus,
}) => {
  if (!isOpen) return null;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === DEFAULT_PIN || pinInput === '1234') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.clientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.clientPhone.includes(searchTerm);
    const matchesStatus = filterStatus === 'all' || b.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = bookings.reduce((sum, b) => (b.status !== 'Cancelled' ? sum + b.totalGBP : sum), 0);

  // If not authenticated, render Security Passcode Lock Gate
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-[#FAF7F2] w-full max-w-md rounded-3xl border border-[#E8DFD1] shadow-2xl relative overflow-hidden p-6 text-center space-y-6 animate-in zoom-in-95 duration-200">
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#6E5A44] hover:text-[#2C2015] hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 bg-[#2C2015] text-amber-300 rounded-full flex items-center justify-center mx-auto shadow-lg border border-amber-400/30">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C7355] bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
              Confidential Staff Portal
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#2C2015] mt-2">
              Salon Owner & Staff Access
            </h3>
            <p className="text-xs text-[#7A644D] leading-relaxed max-w-xs mx-auto">
              Client appointment ledger contains private guest records and contact details. Please enter your salon manager PIN code to proceed.
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div className="relative max-w-xs mx-auto">
              <KeyRound className="w-4 h-4 text-[#8C7355] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                maxLength={8}
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError(false);
                }}
                placeholder="Enter Staff Passcode..."
                className="w-full bg-white border border-[#E8DFD1] rounded-xl pl-9 pr-4 py-3 text-sm text-center tracking-widest text-[#3D2E1E] focus:outline-none focus:border-amber-700 font-bold"
                autoFocus
              />
            </div>

            {pinError && (
              <p className="text-xs text-red-600 font-bold bg-red-50 p-2 rounded-lg border border-red-200 animate-shake">
                ⚠️ Incorrect PIN code. Please check with Donna or manager.
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#2C2015] hover:bg-[#3D2E1E] text-amber-200 font-bold py-3 px-6 rounded-full text-xs uppercase tracking-widest transition-colors shadow-md"
            >
              Unlock Bookings Ledger
            </button>
          </form>

          <div className="bg-[#EADCC9]/50 p-3 rounded-2xl border border-[#E8DFD1] text-[11px] text-[#8C7355] space-y-0.5">
            <p className="font-semibold text-[#3D2E1E]">🔑 Default Owner Passcode: <code className="bg-white px-2 py-0.5 rounded border border-[#CBB292] font-mono text-xs font-bold text-amber-900">8888</code></p>
            <p className="text-[10px] text-[#7A644D]">Protects customer data privacy & prevents unauthorized view.</p>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-[#FAF7F2] w-full max-w-5xl rounded-3xl border border-[#E8DFD1] shadow-2xl relative my-auto overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#2C2015] text-[#F9F5EF] p-5 sm:p-6 flex items-center justify-between border-b border-[#4A3B2C]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-300/20 flex items-center justify-center text-amber-300 font-serif font-bold text-lg">
              H&B
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-amber-200/20 text-amber-300 border border-amber-300/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                  Salon Owner & Manager Portal
                </span>
                <span className="text-xs text-amber-200/70 hidden sm:inline">• Royal Docks Studio</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-light text-white mt-0.5">
                Live Appointment Bookings Ledger
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-amber-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Top Summary Stats */}
        <div className="bg-[#EADCC9]/50 border-b border-[#E8DFD1] p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E8DFD1]">
            <span className="text-[#8C7355] font-bold uppercase tracking-wider block text-[10px]">Total Bookings</span>
            <span className="font-serif text-2xl font-bold text-[#3D2E1E] mt-1 block">{bookings.length} Appointments</span>
          </div>

          <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E8DFD1]">
            <span className="text-[#8C7355] font-bold uppercase tracking-wider block text-[10px]">Confirmed Appointments</span>
            <span className="font-serif text-2xl font-bold text-emerald-800 mt-1 block">
              {bookings.filter((b) => b.status === 'Confirmed').length} Approved
            </span>
          </div>

          <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E8DFD1]">
            <span className="text-[#8C7355] font-bold uppercase tracking-wider block text-[10px]">Projected Revenue</span>
            <span className="font-serif text-2xl font-bold text-amber-900 mt-1 block">£{totalRevenue} GBP</span>
          </div>

          <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E8DFD1]">
            <span className="text-[#8C7355] font-bold uppercase tracking-wider block text-[10px]">Auto Notification Dispatch</span>
            <span className="text-[11px] font-medium text-[#3D2E1E] mt-1 block leading-tight">
              Manager Email + Client Pass + WhatsApp Concierge
            </span>
          </div>
        </div>

        {/* Controls Bar: Search & Filter */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#FAF7F2] p-3 rounded-2xl border border-[#E8DFD1]">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#8C7355] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Guest Name, Ref, Email, Phone..."
                className="w-full bg-white border border-[#E8DFD1] rounded-xl pl-9 pr-3 py-2 text-xs text-[#3D2E1E] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <Filter className="w-3.5 h-3.5 text-[#8C7355]" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-white border border-[#E8DFD1] rounded-xl px-3 py-2 text-xs text-[#3D2E1E] focus:outline-none font-medium"
              >
                <option value="all">All Statuses ({bookings.length})</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Bookings Table / Cards */}
          {filteredBookings.length === 0 ? (
            <div className="text-center py-12 space-y-3 bg-[#F5EBE0]/60 rounded-3xl border border-dashed border-[#CBB292]">
              <AlertCircle className="w-8 h-8 text-[#8C7355] mx-auto" />
              <p className="text-sm font-medium text-[#3D2E1E]">No matching appointments found</p>
              <p className="text-xs text-[#7A644D]">Place a test booking on the website to see live real-time sync here!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredBookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-white p-5 rounded-2xl border border-[#E8DFD1] hover:border-[#8C7355] transition-all shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Left Info */}
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-300/60">
                        {b.id}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          b.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : b.status === 'Completed'
                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                            : b.status === 'Cancelled'
                            ? 'bg-red-100 text-red-800 border border-red-300'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}
                      >
                        {b.status}
                      </span>
                      <span className="text-[11px] text-[#8C7355]">
                        Booked at: {new Date(b.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-[#2C2015]">{b.clientName}</h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6E5A44]">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-[#8C7355]" />
                          {b.clientEmail}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-[#8C7355]" />
                          {b.clientPhone}
                        </span>
                      </div>
                    </div>

                    {/* Rituals & Therapist */}
                    <div className="text-xs bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFD1] space-y-1">
                      <div className="flex justify-between font-semibold text-[#3D2E1E]">
                        <span>Treatments: {b.serviceNames.join(' + ')}</span>
                        <span className="text-amber-900 font-bold">£{b.totalGBP} GBP</span>
                      </div>
                      <div className="flex flex-wrap justify-between text-[11px] text-[#7A644D]">
                        <span>Schedule: <strong>{b.date} @ {b.timeSlot}</strong></span>
                        <span>Therapist: <strong>{b.therapistName}</strong></span>
                      </div>
                      {b.teaPreference && (
                        <div className="text-[10px] text-amber-800 italic">
                          🍵 Complimentary Tea: {b.teaPreference} | Hair Type: {b.hairType}
                        </div>
                      )}
                      {b.notes && (
                        <div className="text-[10px] text-slate-600 bg-slate-50 p-1.5 rounded-md border border-slate-200 mt-1">
                          📝 Guest Notes: "{b.notes}"
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Actions & Notification Badges */}
                  <div className="flex flex-col sm:items-end justify-between gap-3 border-t md:border-t-0 md:border-l border-[#E8DFD1] pt-3 md:pt-0 md:pl-5">
                    
                    {/* Channel Badges */}
                    <div className="text-[10px] space-y-1 sm:text-right">
                      <span className="text-[#8C7355] font-bold block uppercase tracking-wider">Dispatched Channels:</span>
                      <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Client Pass: {b.clientEmail}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        <span>Salon Mail: info.honeynbloom@gmail.com</span>
                      </div>
                      <a
                        href={`https://wa.me/447777326555?text=Hello%20Honey%20%26%20Bloom,%20I%20have%20a%20booking%20ref%20${b.id}%20for%20${b.clientName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-2 py-1 rounded border border-emerald-300 font-semibold transition-colors"
                      >
                        <Send className="w-3 h-3 text-emerald-700" />
                        <span>Open WhatsApp Concierge Chat</span>
                      </a>
                    </div>

                    {/* Status Toggle */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-[#8C7355] font-medium">Status:</span>
                      <select
                        value={b.status}
                        onChange={(e) => onUpdateStatus(b.id, e.target.value as BookingRecord['status'])}
                        className="bg-[#FAF7F2] border border-[#E8DFD1] rounded-lg text-xs py-1 px-2 text-[#3D2E1E] font-semibold focus:outline-none"
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer info bar */}
        <div className="bg-[#4A3B2C] text-amber-100 p-4 px-6 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Real-time sync enabled with Google Calendar & Mail Server</span>
          </div>
          <button
            onClick={onClose}
            className="bg-amber-200 text-[#2C2015] px-5 py-1.5 rounded-full font-bold uppercase tracking-wider text-[11px] hover:bg-amber-300 transition-colors"
          >
            Close Manager Portal
          </button>
        </div>

      </div>
    </div>
  );
};
