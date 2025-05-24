import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 300);
    
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in');
      }
    }, 600);
  }, []);

  const scrollToIntroduction = () => {
    const element = document.getElementById('introduction');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 text-center z-10">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
        >
          Shadow Detection and Removal from Images <br className="hidden md:block" />
          <span className="text-purple-400">using GANs</span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-0 transition-opacity duration-1000 delay-300"
        >
          A deep learning approach to automatically detect and remove shadows from photographs,
          preserving natural lighting and enhancing image quality.
        </p>
        <div 
          ref={ctaRef}
          className="opacity-0 transition-opacity duration-1000 delay-600"
        >
          <button
            onClick={scrollToIntroduction}
            className="group flex items-center mx-auto bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Explore Project
            <ArrowDownCircle className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDownCircle 
          onClick={scrollToIntroduction}
          className="text-white/70 hover:text-white cursor-pointer transition-colors duration-300" 
          size={32} 
        />
      </div>
    </section>
  );
};

export default Hero;