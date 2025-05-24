import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import SectionTitle from './SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSet {
  id: number;
  title: string;
  mask: string;
  before: string;
  after: string;
  description: string;
}

const Comparison: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const imageSets: ImageSet[] = [
    {
      id: 1,
      title: "Urban Setting",
      mask: "/images/img4_mask.PNG",
      before: "/images/img02.PNG",
      after: "/images/img03_free.PNG",
      description: "Shadow removal in urban environments with complex textures and multiple light sources."
    },
    {
      id: 2,
      title: "Natural Landscape",
      mask: "/images/g-m.PNG",
      before: "/images/g-s.PNG",
      after: "/images/g-f.PNG",
      description: "Natural scenes present challenges with organic shadow patterns and varying surface properties."
    },
    {
      id: 3,
      title: "Object Shadows",
      mask: "/images/f-m.PNG",
      before: "/images/f-s.PNG",
      after: "/images/f-f.PNG",
      description: "Removing distinct shadows cast by solid objects while preserving texture details."
    }
  ];

  const navigateSlide = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveIndex((prev) => (prev === 0 ? imageSets.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === imageSets.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section 
      id="comparison" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <SectionTitle>Before & After Comparison</SectionTitle>
        
        <div className="mt-12 max-w-6xl mx-auto">
          <div className={`relative transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full md:w-1/3 aspect-video">
                <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">MASK</div>
                <img 
                  src={imageSets[activeIndex].mask} 
                  alt={`${imageSets[activeIndex].title} shadow mask`} 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="relative w-full md:w-1/3 aspect-video">
                <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">BEFORE</div>
                <img 
                  src={imageSets[activeIndex].before} 
                  alt={`${imageSets[activeIndex].title} with shadow`} 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="relative w-full md:w-1/3 aspect-video">
                <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">AFTER</div>
                <img 
                  src={imageSets[activeIndex].after} 
                  alt={`${imageSets[activeIndex].title} without shadow`} 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-slate-800">{imageSets[activeIndex].title}</h3>
              <p className="text-slate-600 mt-2">{imageSets[activeIndex].description}</p>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {imageSets.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === idx ? 'bg-purple-600 scale-110' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6">
              <button
                onClick={() => navigateSlide('prev')}
                className="bg-white text-slate-800 p-2 rounded-full shadow-md hover:bg-slate-100 transition-colors"
                aria-label="Previous comparison"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-6">
              <button
                onClick={() => navigateSlide('next')}
                className="bg-white text-slate-800 p-2 rounded-full shadow-md hover:bg-slate-100 transition-colors"
                aria-label="Next comparison"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Training Progress</h3>
            <div className="aspect-[2/1] bg-white rounded-lg overflow-hidden">
              <img 
                src="/images/accuracy_plot.jpg" 
                alt="GAN Training Loss Plot"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-slate-600">
              <p>The plot shows the convergence of our GAN model during training:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Generator Loss (G_loss): Decreases steadily, indicating improved shadow removal quality</li>
                <li>Discriminator Loss (D_loss): Stabilizes around 3.5, showing balanced adversarial training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;