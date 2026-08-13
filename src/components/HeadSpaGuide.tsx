import React, { useState } from 'react';
import { Waves, Sparkles, Search, HeartHandshake, Droplets, Coffee, Wind, ChevronRight, Calendar } from 'lucide-react';
import { HEAD_SPA_STEPS, HERO_IMAGES } from '../data/spaData';

interface HeadSpaGuideProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const HeadSpaGuide: React.FC<HeadSpaGuideProps> = ({ onOpenBooking }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Waves': return <Waves className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      default: return <Waves className="w-5 h-5" />;
    }
  };

  const currentStep = HEAD_SPA_STEPS[activeStepIndex];

  return (
    <section id="head-spa" className="py-20 bg-[#FAF7F2] relative border-t border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#8C7355] text-xs font-semibold tracking-widest uppercase bg-[#EADCC9]/60 px-4 py-1.5 rounded-full border border-[#CBB292]">
            <Waves className="w-4 h-4 text-amber-700" />
            <span>The Japanese Hydrotherapy Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2015] font-light">
            Our Signature 7-Step Head Spa Ritual
          </h2>
          <p className="text-sm sm:text-base text-[#6E5A44] font-light">
            A deeply rhythmic, multi-sensory treatment engineered to detoxify hair follicles, improve scalp blood circulation, and melt away mental tension.
          </p>
        </div>

        {/* Interactive Steps Grid & Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Step Selector Column */}
          <div className="lg:col-span-5 space-y-2">
            {HEAD_SPA_STEPS.map((stepItem, index) => {
              const isActive = index === activeStepIndex;
              return (
                <button
                  key={stepItem.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#4A3B2C] text-[#F9F5EF] border-[#4A3B2C] shadow-md transform scale-[1.02]'
                      : 'bg-[#FAF7F2] text-[#4A3B2C] border-[#E8DFD1] hover:bg-[#EADCC9]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                        isActive
                          ? 'bg-amber-300 text-[#4A3B2C]'
                          : 'bg-[#EADCC9] text-[#6E5A44] group-hover:bg-[#CBB292]'
                      }`}
                    >
                      {stepItem.step}
                    </div>
                    <div>
                      <h4 className={`text-xs uppercase tracking-wider font-semibold ${isActive ? 'text-amber-200' : 'text-[#3D2E1E]'}`}>
                        Step {stepItem.step}
                      </h4>
                      <p className={`text-sm font-serif ${isActive ? 'text-[#F9F5EF]' : 'text-[#5A4836]'}`}>
                        {stepItem.title}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-300 translate-x-1' : 'text-[#8C7355]'}`} />
                </button>
              );
            })}
          </div>

          {/* Step Detailed Visual Showcase Card */}
          <div className="lg:col-span-7 bg-[#F5EBE0] p-6 sm:p-10 rounded-3xl border border-[#E8DFD1] shadow-xl space-y-6 relative overflow-hidden">
            
            {/* Step Number Banner */}
            <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#4A3B2C] text-amber-300 rounded-2xl shadow-xs">
                  {getStepIcon(currentStep.icon)}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#8C7355]">
                    Step {currentStep.step} of 7
                  </span>
                  <h3 className="font-serif text-2xl text-[#2C2015] font-normal">
                    {currentStep.title}
                  </h3>
                </div>
              </div>
              <span className="hidden sm:inline text-xs font-semibold bg-[#EADCC9] text-[#4A3B2C] px-3 py-1 rounded-full uppercase tracking-wider">
                Eastern Protocol
              </span>
            </div>

            {/* Visual Image */}
            <div className="rounded-2xl overflow-hidden shadow-md aspect-16/9 bg-[#EADCC9] relative">
              <img
                src={HERO_IMAGES.headSpa}
                alt={currentStep.title}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-light">
                <p className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  {currentStep.description}
                </p>
              </div>
            </div>

            {/* Detailed Description text */}
            <div className="space-y-3">
              <p className="text-sm text-[#5A4836] leading-relaxed">
                {currentStep.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6E5A44]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
                  <span>Purified warm water temperature control</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
                  <span>Organic botanical honey extract</span>
                </li>
              </ul>
            </div>

            {/* Quick Action */}
            <div className="pt-4 border-t border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#7A644D]">Signature Head Spa (75 mins)</span>
                <p className="text-lg font-serif font-bold text-[#3D2E1E]">£110 GBP</p>
              </div>

              <button
                onClick={() => onOpenBooking('head-spa-signature')}
                className="w-full sm:w-auto bg-[#4A3B2C] hover:bg-[#32271C] text-[#F9F5EF] px-6 py-3 rounded-full text-xs font-medium tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Signature Head Spa</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
