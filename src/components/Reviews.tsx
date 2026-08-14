import React, { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle2, MessageSquarePlus, Sparkles, X, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';
import { REVIEWS } from '../data/spaData';
import { Review } from '../types';

export const Reviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  // Form states for adding review
  const [author, setAuthor] = useState('');
  const [service, setService] = useState('Gel Pedicure');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Determine items per page based on window width
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviewsList.length - itemsPerPage);

  // Auto-play effect
  useEffect(() => {
    if (isPaused || isModalOpen || selectedReview) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, maxIndex, isModalOpen, selectedReview]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

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
      verified: true,
      source: 'Google Review'
    };

    setReviewsList([newRev, ...reviewsList]);
    setCurrentIndex(0);
    setIsModalOpen(false);
    setAuthor('');
    setComment('');
  };

  // Generate pleasant avatar color
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-[#8C7355] text-[#FAF7F2]',
      'bg-[#4A3B2C] text-amber-200',
      'bg-[#6E5A44] text-[#F9F5EF]',
      'bg-[#7A644D] text-[#FAF7F2]',
      'bg-[#5A4836] text-amber-100'
    ];
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i);
    }
    return colors[sum % colors.length];
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="reviews" className="py-20 bg-[#F5EBE0] relative border-t border-[#E8DFD1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/80 px-4 py-1.5 rounded-full border border-[#CBB292]">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Google 5.0 Star Rated Salon</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
              Client Stories & Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5A44] font-light max-w-xl">
              Discover why guests across West Wickham choose Reverie Nail Studio for their pedicures, acrylics, and nail care.
            </p>
          </div>

          {/* Rating Summary Pill & Actions */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Google Rating badge */}
            <div className="bg-[#FAF7F2] p-2.5 px-4 rounded-2xl border border-[#E8DFD1] flex items-center gap-3 shadow-2xs">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-serif font-bold text-[#3D2E1E]">5.0</span>
                <span className="text-amber-500 text-lg">★</span>
              </div>
              <div className="text-left border-l border-[#E8DFD1] pl-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-500" />
                  ))}
                </div>
                <span className="text-[10px] text-[#7A644D] uppercase tracking-wider font-semibold">100% 5-Star Reviews</span>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-1 rounded-full border border-[#E8DFD1] shadow-2xs">
              <button
                onClick={handlePrev}
                aria-label="Previous review slide"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#4A3B2C] hover:bg-[#EADCC9] active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-medium text-[#7A644D] px-2">
                {String(currentIndex + 1).padStart(2, '0')} / {String(reviewsList.length).padStart(2, '0')}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next review slide"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#4A3B2C] hover:bg-[#EADCC9] active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-4 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all shadow-2xs flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-amber-300" />
              <span>Share Review</span>
            </button>
          </div>
        </div>

        {/* Carousel Slider Container */}
        <div
          className="relative overflow-hidden pt-2 pb-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {reviewsList.map((rev) => (
              <div
                key={rev.id}
                style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                className="px-2.5 sm:px-3"
              >
                <div className="bg-[#FAF7F2] p-6 rounded-3xl border border-[#E8DFD1] shadow-2xs hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between space-y-4 group">
                  
                  {/* Top Bar: Stars, Badge, Quote Icon */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5">
                        {rev.badge ? (
                          <span className="text-[10px] bg-amber-100 text-amber-900 border border-amber-300/60 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                            <Award className="w-2.5 h-2.5 text-amber-700" />
                            {rev.badge}
                          </span>
                        ) : (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-700" />
                            Verified
                          </span>
                        )}
                        <span className="text-[9px] text-[#A08C75] bg-[#EADCC9]/50 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                          Google
                        </span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="relative pt-1">
                      <Quote className="w-6 h-6 text-[#EADCC9] absolute -top-2 -left-1 opacity-60 pointer-events-none" />
                      <p className="text-xs text-[#5A4836] leading-relaxed relative z-10 line-clamp-5">
                        "{rev.comment}"
                      </p>
                      {rev.comment.length > 220 && (
                        <button
                          onClick={() => setSelectedReview(rev)}
                          className="text-[11px] text-amber-800 hover:text-amber-950 font-semibold underline mt-1.5 block cursor-pointer"
                        >
                          Read full review
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Bottom Author Info */}
                  <div className="pt-3 border-t border-[#E8DFD1]/80 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${getAvatarColor(rev.author)}`}>
                      {getInitials(rev.author)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <strong className="block text-xs text-[#3D2E1E] font-semibold truncate">
                        {rev.author}
                      </strong>
                      <div className="flex items-center gap-1.5 text-[10px] text-[#8C7355] truncate">
                        <span>{rev.service}</span>
                        <span>•</span>
                        <span>{rev.date}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-7 bg-[#4A3B2C]'
                  : 'w-2 bg-[#D1C3B2] hover:bg-[#A08C75]'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Full Review Detail Modal */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] max-w-lg w-full rounded-3xl p-6 sm:p-7 border border-[#E8DFD1] shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-[#E8DFD1] pb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${getAvatarColor(selectedReview.author)}`}>
                  {getInitials(selectedReview.author)}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2C2015]">{selectedReview.author}</h3>
                  <div className="flex items-center gap-2 text-xs text-[#8C7355]">
                    <span>{selectedReview.service}</span>
                    <span>•</span>
                    <span>{selectedReview.date}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedReview(null)}
                className="text-[#6E5A44] hover:text-[#3D2E1E] p-1 rounded-full hover:bg-[#EADCC9]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {[...Array(selectedReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                ))}
              </div>
              {selectedReview.badge && (
                <span className="text-[10px] bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full font-bold">
                  {selectedReview.badge}
                </span>
              )}
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                Google Verified
              </span>
            </div>

            <p className="text-sm text-[#4A3B2C] leading-relaxed italic bg-[#F5EBE0]/60 p-4 rounded-2xl border border-[#E8DFD1]">
              "{selectedReview.comment}"
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedReview(null)}
                className="bg-[#4A3B2C] text-[#F9F5EF] px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Review Modal */}
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
                  placeholder="e.g. Joanna D."
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
                  <option value="Gel Pedicure">Gel Pedicure</option>
                  <option value="Gel Mani & Pedi">Gel Mani & Pedi</option>
                  <option value="Classic Manicure">Classic Manicure</option>
                  <option value="Classic Pedicure">Classic Pedicure</option>
                  <option value="Classic Mani & Pedi">Classic Mani & Pedi</option>
                  <option value="Gel Colour only - Hands or Toes">Gel Colour only - Hands or Toes</option>
                  <option value="Regular Polish Change">Regular Polish Change</option>
                  <option value="Manicure with IBX treatment">Manicure with IBX treatment</option>
                  <option value="BIAB Overlay">BIAB Overlay</option>
                  <option value="BIAB Infill">BIAB Infill</option>
                  <option value="Acrylic Extensions with Gel Colour">Acrylic Extensions with Gel Colour</option>
                  <option value="Acrylic Infill with Gel Colour">Acrylic Infill with Gel Colour</option>
                  <option value="Acrylic Extensions with Regular Polish">Acrylic Extensions with Regular Polish</option>
                  <option value="Acrylic Infill with Regular Polish">Acrylic Infill with Regular Polish</option>
                  <option value="Full Set Ombré">Full Set Ombré</option>
                  <option value="Infill Ombré">Infill Ombré</option>
                  <option value="Dipping Powder Overlay">Dipping Powder Overlay</option>
                  <option value="Dipping Powder Extensions">Dipping Powder Extensions</option>
                  <option value="Nail repair">Nail repair</option>
                  <option value="Removal only">Removal only</option>
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
                  placeholder="Share your experience with our team and salon in West Wickham..."
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD1] rounded-xl p-2.5 text-xs text-[#3D2E1E] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4A3B2C] text-[#F9F5EF] py-3 rounded-full text-xs font-medium uppercase tracking-widest shadow-md cursor-pointer hover:bg-[#32271C] transition-all"
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
