import React, { useState } from 'react';
import { Gift, Sparkles, CheckCircle2, Send, Mail, Package } from 'lucide-react';
import { GiftCardState } from '../types';

export const GiftCards: React.FC = () => {
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [recipientName, setRecipientName] = useState<string>('Sophia Williams');
  const [recipientEmail, setRecipientEmail] = useState<string>('sophia@example.com');
  const [senderName, setSenderName] = useState<string>('Emma');
  const [personalMessage, setPersonalMessage] = useState<string>(
    'Wishing you an afternoon of pure halo head spa relaxation and pampering at Honey & Bloom! With love.'
  );
  const [deliveryMethod, setDeliveryMethod] = useState<'email' | 'printed-box'>('email');
  const [isPurchased, setIsPurchased] = useState<boolean>(false);

  const finalAmount = amount === -1 ? Number(customAmount) || 50 : amount;

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPurchased(true);
  };

  return (
    <section id="gift-cards" className="py-20 bg-[#F5EBE0] relative border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/80 px-4 py-1.5 rounded-full border border-[#CBB292]">
            <Gift className="w-3.5 h-3.5 text-amber-700" />
            <span>The Gift of Sanctuary</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
            Honey & Bloom Luxury Gift Cards
          </h2>
          <p className="text-sm text-[#6E5A44] font-light">
            Treat loved ones to a 7-step Eastern Head Spa or clean BIAB manicure session. Delivered instantly via E-Voucher or in a luxury physical box.
          </p>
        </div>

        {/* Builder & Live Card Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Controls */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-[#E8DFD1] shadow-xl space-y-6">
            
            {isPurchased ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-light text-[#2C2015]">
                  Gift Voucher Issued!
                </h3>
                <p className="text-xs text-[#7A644D]">
                  An elegant digital voucher voucher code <strong>HNB-GIFT-{Math.floor(1000 + Math.random() * 9000)}</strong> has been dispatched to {recipientEmail}.
                </p>
                <button
                  onClick={() => setIsPurchased(false)}
                  className="mt-4 bg-[#4A3B2C] text-[#F9F5EF] px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest"
                >
                  Create Another Voucher
                </button>
              </div>
            ) : (
              <form onSubmit={handlePurchase} className="space-y-5">
                
                {/* Amount Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3D2E1E] block mb-2">
                    1. Choose Voucher Value (£ GBP)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[50, 100, 150, 200].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => {
                          setAmount(val);
                          setCustomAmount('');
                        }}
                        className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                          amount === val
                            ? 'bg-[#4A3B2C] text-[#F9F5EF] border-[#4A3B2C]'
                            : 'bg-[#FAF7F2] border-[#E8DFD1] text-[#5A4836] hover:bg-[#EADCC9]/50'
                        }`}
                      >
                        £{val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery Method */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3D2E1E] block mb-2">
                    2. Select Delivery Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('email')}
                      className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                        deliveryMethod === 'email'
                          ? 'bg-[#EADCC9] border-[#8C7355] font-semibold text-[#3D2E1E]'
                          : 'bg-[#FAF7F2] border-[#E8DFD1] text-[#6E5A44]'
                      }`}
                    >
                      <Mail className="w-5 h-5 text-amber-800" />
                      <div>
                        <span className="block text-xs font-bold">Digital E-Voucher</span>
                        <span className="text-[10px] text-[#7A644D]">Instant Email Delivery</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('printed-box')}
                      className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                        deliveryMethod === 'printed-box'
                          ? 'bg-[#EADCC9] border-[#8C7355] font-semibold text-[#3D2E1E]'
                          : 'bg-[#FAF7F2] border-[#E8DFD1] text-[#6E5A44]'
                      }`}
                    >
                      <Package className="w-5 h-5 text-amber-800" />
                      <div>
                        <span className="block text-xs font-bold">Luxury Box (+£5)</span>
                        <span className="text-[10px] text-[#7A644D]">Physical UK Royal Mail</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Recipient Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#3D2E1E] block mb-1">To (Recipient Name)</label>
                    <input
                      type="text"
                      required
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-2.5 text-xs text-[#3D2E1E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#3D2E1E] block mb-1">Recipient Email</label>
                    <input
                      type="email"
                      required
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-2.5 text-xs text-[#3D2E1E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#3D2E1E] block mb-1">From (Your Name)</label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-2.5 text-xs text-[#3D2E1E] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-[#3D2E1E] block mb-1">Personal Message</label>
                    <textarea
                      rows={2}
                      value={personalMessage}
                      onChange={(e) => setPersonalMessage(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-2.5 text-xs text-[#3D2E1E] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] py-3.5 rounded-full text-xs font-medium tracking-widest uppercase shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Issue Gift Voucher (£{finalAmount + (deliveryMethod === 'printed-box' ? 5 : 0)})</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Live Voucher Preview Card */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C7355] block">
              Live Gift Voucher Preview
            </span>

            {/* Premium Voucher Render */}
            <div className="bg-gradient-to-br from-[#32271C] via-[#4A3B2C] to-[#201810] text-[#F9F5EF] rounded-3xl p-8 border-2 border-[#CBB292] shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300 font-light block">
                    Sanctuary Gift Pass
                  </span>
                  <h3 className="font-serif text-2xl tracking-[0.15em] font-semibold text-amber-100 uppercase mt-0.5">
                    HONEY & BLOOM
                  </h3>
                  <span className="text-[9px] uppercase tracking-widest text-amber-200/70 block">
                    London • Head Spa & Clean Nails
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-amber-200/80 block uppercase">Voucher Value</span>
                  <span className="font-serif text-3xl font-bold text-amber-300">
                    £{finalAmount} GBP
                  </span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-amber-100">
                  <span>To: <strong className="text-white">{recipientName || 'Recipient'}</strong></span>
                  <span>From: <strong className="text-white">{senderName || 'Sender'}</strong></span>
                </div>
                <p className="italic text-amber-200/90 text-[11px] leading-relaxed pt-1 border-t border-white/10">
                  "{personalMessage}"
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] text-amber-200/70 pt-2 border-t border-amber-900/50">
                <span>55 Royal Crest Avenue, London E16 2EB</span>
                <span>Valid for 12 Months • Non-refundable</span>
              </div>
            </div>

            <p className="text-xs text-[#7A644D] text-center italic">
              * Gift cards can be redeemed online or directly at our Royal Docks studio towards any head spa or nail service.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
