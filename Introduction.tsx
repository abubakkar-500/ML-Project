import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Zap, Image, Award } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Introduction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const features = [
    {
      icon: <Zap size={24} className="text-purple-600" />,
      title: "Intelligent Detection",
      description: "Advanced algorithms identify shadows by analyzing light patterns and image properties."
    },
    {
      icon: <Image size={24} className="text-purple-600" />,
      title: "Seamless Removal",
      description: "GAN-based architecture preserves texture and color information while removing shadows."
    },
    {
      icon: <Award size={24} className="text-purple-600" />,
      title: "High Quality Results",
      description: "Results are indistinguishable from naturally lit photographs with minimal artifacts."
    }
  ];

  return (
    <section 
      id="introduction" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <SectionTitle>Introduction</SectionTitle>
        
        <div className={`mt-12 max-w-4xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Shadow removal is a challenging task in computer vision and image processing. 
            Shadows in photographs can obscure details, create unwanted visual elements, 
            and make image analysis more difficult. Our project uses Generative Adversarial 
            Networks (GANs) to automatically detect and remove shadows from images while 
            preserving the natural appearance and lighting of the scene.
          </p>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            By leveraging deep learning techniques, our system can process a wide variety 
            of natural images without manual intervention, making it useful for photography 
            enhancement, computer vision preprocessing, and image restoration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100 transition-all duration-1000 delay-${index * 200} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;