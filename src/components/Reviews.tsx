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
    }, 5000);

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

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#DBD3C9] relative border-b border-[#A99C90]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#736557] block">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#332C26] font-normal">
              Reviews & Stories
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5046] font-normal max-w-xl">
              Discover what our clients have to say about their visits to Reverie Nail Studio.
            </p>
          </div>

          {/* Rating Summary Pill & Actions */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Google Rating badge */}
            <div className="bg-[#F2EEE8] p-3 px-5 rounded-2xl border border-[#A99C90]/30 flex items-center gap-3 shadow-2xs">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-serif font-semibold text-[#332C26]">4.9</span>
                <span className="text-[#E3A868] text-lg">★</span>
              </div>
              <div className="text-left border-l border-[#A99C90]/30 pl-3">
                <div className="flex text-[#E3A868]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#E3A868] stroke-[#E3A868]" />
                  ))}
                </div>
                <span className="text-[10px] text-[#736557] uppercase tracking-wider font-semibold">Google Reviews</span>
              </div>
            </div>

            {/* Slider Navigation Arrows - No 1/14 indicator */}
            <div className="flex items-center gap-1 bg-[#F2EEE8] p-1.5 rounded-full border border-[#A99C90]/30 shadow-2xs">
              <button
                onClick={handlePrev}
                aria-label="Previous review slide"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#332C26] hover:bg-[#DBD3C9] active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review slide"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#332C26] hover:bg-[#DBD3C9] active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#332C26] hover:bg-[#E3A868] hover:text-[#332C26] text-[#F2EEE8] px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
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
                className="px-3"
              >
                <div className="bg-[#F2EEE8] p-6 sm:p-7 rounded-2xl border border-[#A99C90]/30 shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between space-y-4 group">
                  
                  {/* Top Bar: Stars & Source */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#E3A868]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#E3A868] stroke-[#E3A868]" />
                        ))}
                      </div>

                      <span className="text-[10px] text-[#736557] bg-[#DBD3C9] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                        Google Review
                      </span>
                    </div>

                    {/* Review Text */}
                    <div className="relative pt-1">
                      <p className="text-xs sm:text-sm text-[#5C5046] leading-relaxed relative z-10 line-clamp-5">
                        "{rev.comment}"
                      </p>
                      {rev.comment.length > 200 && (
                        <button
                          onClick={() => setSelectedReview(rev)}
                          className="text-xs text-[#332C26] hover:text-[#E3A868] font-semibold underline mt-1.5 block cursor-pointer"
                        >
                          Read full review
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Bottom Author Info */}
                  <div className="pt-3 border-t border-[#A99C90]/20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 bg-[#DBD3C9] text-[#332C26]">
                      {getInitials(rev.author)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <strong className="block text-xs text-[#332C26] font-semibold truncate">
                        {rev.author}
                      </strong>
                      <div className="flex items-center gap-1.5 text-[10px] text-[#736557] truncate">
                        <span>{rev.service}</span>
                        <span>·</span>
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
                  ? 'w-7 bg-[#332C26]'
                  : 'w-2 bg-[#A99C90]/60 hover:bg-[#332C26]'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Full Review Detail Modal */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 bg-[#332C26]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#F2EEE8] max-w-lg w-full rounded-2xl p-6 sm:p-7 border border-[#A99C90]/30 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-[#A99C90]/20 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-[#DBD3C9] text-[#332C26]">
                  {getInitials(selectedReview.author)}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#332C26]">{selectedReview.author}</h3>
                  <div className="flex items-center gap-2 text-xs text-[#736557]">
                    <span>{selectedReview.service}</span>
                    <span>·</span>
                    <span>{selectedReview.date}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedReview(null)}
                className="text-[#736557] hover:text-[#332C26] p-1 rounded-full hover:bg-[#DBD3C9]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-[#E3A868]">
                {[...Array(selectedReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E3A868] stroke-[#E3A868]" />
                ))}
              </div>
              <span className="text-[10px] bg-[#DBD3C9] text-[#332C26] px-2 py-0.5 rounded-full font-semibold">
                Google Verified
              </span>
            </div>

            <p className="text-sm text-[#5C5046] leading-relaxed italic bg-[#DBD3C9]/40 p-4 rounded-xl border border-[#A99C90]/20">
              "{selectedReview.comment}"
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedReview(null)}
                className="bg-[#332C26] text-[#F2EEE8] px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#332C26]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#F2EEE8] max-w-md w-full rounded-2xl p-6 border border-[#A99C90]/30 shadow-2xl relative space-y-4">
            <div className="flex justify-between items-center border-b border-[#A99C90]/20 pb-3">
              <h3 className="font-serif text-xl font-medium text-[#332C26]">Share Your Experience</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-[#736557] hover:text-[#332C26]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#332C26] block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Joanna D."
                  className="w-full bg-[#DBD3C9]/40 border border-[#A99C90]/40 rounded-xl p-2.5 text-xs text-[#332C26] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#332C26] block mb-1">Service Enjoyed</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#DBD3C9]/40 border border-[#A99C90]/40 rounded-xl p-2.5 text-xs text-[#332C26] focus:outline-none"
                >
                  <option value="Gel Pedicure">Gel Pedicure</option>
                  <option value="Gel Manicure">Gel Manicure</option>
                  <option value="BIAB Overlay">BIAB Overlay</option>
                  <option value="Acrylic Extensions with Gel Colour">Acrylic Extensions with Gel Colour</option>
                  <option value="French Manicure">French Manicure</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#332C26] block mb-1">Star Rating</label>
                <div className="flex gap-1 text-[#E3A868] cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      onClick={() => setRating(star)}
                      className={`w-6 h-6 ${star <= rating ? 'fill-[#E3A868] stroke-[#E3A868]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#332C26] block mb-1">Review Comments</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience at Reverie Nail Studio in West Wickham..."
                  className="w-full bg-[#DBD3C9]/40 border border-[#A99C90]/40 rounded-xl p-2.5 text-xs text-[#332C26] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#332C26] text-[#F2EEE8] py-3 rounded-full text-xs font-semibold uppercase tracking-widest shadow-xs cursor-pointer hover:bg-[#E3A868] hover:text-[#332C26] transition-all"
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
