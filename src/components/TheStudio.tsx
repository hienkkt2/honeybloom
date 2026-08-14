import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, Coffee, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { STUDIO_SLIDES } from '../data/spaData';

export const TheStudio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % STUDIO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + STUDIO_SLIDES.length) % STUDIO_SLIDES.length);
  }, []);

  // Auto-play timer (slides every 3.8s)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3800);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="studio" className="py-16 sm:py-24 bg-[#DBD3C9] relative border-b border-[#A99C90]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Core Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#736557] block">
            Our Space
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#332C26] font-normal leading-tight">
            The Studio
          </h2>
          <p className="text-base sm:text-lg text-[#5C5046] font-normal leading-relaxed max-w-2xl mx-auto">
            West Wickham’s dreamiest nail studio. Warm light, soft seating, and complimentary drinks & snacks where you can truly switch off.
          </p>
        </div>

        {/* Studio Interactive Slider Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Carousel Stage (7 cols) */}
          <div
            className="lg:col-span-8 relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Image Frame with Smooth Fade/Transition */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#A99C90]/30 bg-[#F2EEE8] aspect-16/10 sm:aspect-16/9 relative group">
              {STUDIO_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#332C26]/70 via-transparent to-transparent pointer-events-none" />

                    {/* Overlay Caption Bar */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#F2EEE8]/95 backdrop-blur-md p-4 rounded-2xl border border-[#A99C90]/30 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#736557] block">
                          {slide.tag}
                        </span>
                        <h4 className="font-serif text-sm sm:text-base font-medium text-[#332C26]">
                          {slide.title}
                        </h4>
                        <p className="text-xs text-[#5C5046] hidden sm:block">
                          {slide.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 self-end sm:self-center">
                        <span className="text-xs font-semibold text-[#332C26] bg-[#DBD3C9] px-2.5 py-1 rounded-full">
                          {index + 1} / {STUDIO_SLIDES.length}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Prev / Next Floating Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                <button
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="pointer-events-auto w-10 h-10 rounded-full bg-[#F2EEE8]/90 hover:bg-[#F2EEE8] text-[#332C26] border border-[#A99C90]/30 shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="pointer-events-auto w-10 h-10 rounded-full bg-[#F2EEE8]/90 hover:bg-[#F2EEE8] text-[#332C26] border border-[#A99C90]/30 shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Carousel Thumbnail Navigation Strip */}
            <div className="flex items-center justify-between gap-2 sm:gap-3 mt-4 overflow-x-auto pb-1 scrollbar-none">
              {STUDIO_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`shrink-0 flex items-center gap-2 p-1.5 sm:p-2 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-[#F2EEE8] border-[#332C26] shadow-xs'
                        : 'bg-[#DBD3C9] border-[#A99C90]/30 hover:border-[#332C26]/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-10 h-8 sm:w-12 sm:h-9 object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[11px] font-medium text-[#332C26] hidden md:inline pr-1 truncate max-w-28">
                      {slide.title}
                    </span>
                  </button>
                );
              })}

              {/* Play / Pause indicator button */}
              <button
                onClick={() => setIsAutoPlaying((prev) => !prev)}
                className="shrink-0 p-2 rounded-xl bg-[#F2EEE8] border border-[#A99C90]/30 text-[#332C26] hover:bg-[#DBD3C9] transition-colors"
                title={isAutoPlaying ? 'Pause Slideshow' : 'Resume Slideshow'}
              >
                {isAutoPlaying ? <Pause className="w-4 h-4 text-[#736557]" /> : <Play className="w-4 h-4 text-[#E3A868]" />}
              </button>
            </div>

          </div>

          {/* Atmosphere Highlight Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#F2EEE8] p-6 rounded-2xl border border-[#A99C90]/30 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#DBD3C9] text-[#332C26] shrink-0 mt-0.5">
                  <Coffee className="w-4 h-4 text-[#E3A868]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#332C26]">Complimentary Refreshments</h3>
                  <p className="text-xs text-[#5C5046] mt-0.5 leading-relaxed">
                    Selection of herbal teas, fresh artisan coffee, cold drinks, and sweet treats served with every treatment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3.5 border-t border-[#A99C90]/20">
                <div className="p-2.5 rounded-xl bg-[#DBD3C9] text-[#332C26] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#E3A868]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#332C26]">Unrushed, Mindful Care</h3>
                  <p className="text-xs text-[#5C5046] mt-0.5 leading-relaxed">
                    A calm sanctuary crafted for you to unwind, catch up on your favourite book, or simply switch off from a busy week.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-3 bg-[#DBD3C9] rounded-xl text-center">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#332C26] block">
                    133 High Street, West Wickham
                  </span>
                  <span className="text-[10px] text-[#736557] mt-0.5 block">
                    Walk-ins & Fresha Appointments
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
