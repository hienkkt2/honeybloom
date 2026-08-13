import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquarePlus, Sparkles, X } from 'lucide-react';
import { REVIEWS } from '../data/spaData';
import { Review } from '../types';

export const Reviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [author, setAuthor] = useState('');
  const [service, setService] = useState('Signature Head Spa');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    const newRev: Review = {
      id: 'rev-' + Date.now(),
      author,
      rating,
      date: 'Just Now',
      service,
      comment,
      verified: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setIsModalOpen(false);
    setAuthor('');
    setComment('');
  };

  return (
    <section className="py-20 bg-[#F5EBE0] relative border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/80 px-4 py-1.5 rounded-full border border-[#CBB292]">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Verified Client Love</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
              Sanctuary Experience Reviews
            </h2>
          </div>

          {/* Rating Summary Pill & Add Button */}
          <div className="flex items-center gap-4">
            <div className="bg-[#FAF7F2] p-3 px-5 rounded-2xl border border-[#E8DFD1] flex items-center gap-3 shadow-2xs">
              <span className="text-2xl font-serif font-bold text-[#3D2E1E]">4.9</span>
              <div className="text-left">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                  ))}
                </div>
                <span className="text-[10px] text-[#7A644D] uppercase tracking-wider font-medium">280+ London Guests</span>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-5 py-3 rounded-full text-xs font-medium uppercase tracking-widest transition-all shadow-2xs flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4 text-amber-300" />
              <span>Write Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E8DFD1] shadow-2xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      Verified Visit
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#5A4836] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8DFD1] text-xs">
                <strong className="block text-[#3D2E1E] font-semibold">{rev.author}</strong>
                <span className="text-[11px] text-[#8C7355]">{rev.service} • {rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] max-w-md w-full rounded-3xl p-6 border border-[#E8DFD1] shadow-2xl relative space-y-4">
            <div className="flex justify-between items-center border-b border-[#E8DFD1] pb-3">
              <h3 className="font-serif text-xl font-medium text-[#2C2015]">Share Your Experience</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-[#6E5A44]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#3D2E1E] block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Jessica M."
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-2.5 text-xs text-[#3D2E1E] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#3D2E1E] block mb-1">Service Enjoyed</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-2.5 text-xs text-[#3D2E1E] focus:outline-none"
                >
                  <option value="Signature Head Spa">Signature Head Spa</option>
                  <option value="BIAB Builder Gel Manicure">BIAB Builder Gel Manicure</option>
                  <option value="Imperial Jade Scalp Renewal">Imperial Jade Scalp Renewal</option>
                  <option value="Honey & Organic Spa Pedicure">Honey & Organic Spa Pedicure</option>
                  <option value="The Grand Bloom Duo Package">The Grand Bloom Duo Package</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#3D2E1E] block mb-1">Star Rating</label>
                <div className="flex gap-1 text-amber-500 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      onClick={() => setRating(star)}
                      className={`w-6 h-6 ${star <= rating ? 'fill-amber-400 stroke-amber-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#3D2E1E] block mb-1">Review Comments</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us about your head spa, nails, or tea service..."
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-2.5 text-xs text-[#3D2E1E] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4A3B2C] text-[#F9F5EF] py-3 rounded-full text-xs font-medium uppercase tracking-widest shadow-md"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
