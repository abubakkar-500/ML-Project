import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionTitle from './SectionTitle';
import { Database, Layers, GitCompare, Cpu } from 'lucide-react';

const Methodology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const steps = [
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Dataset Collection",
      description: "Our model was trained on the SRD (Shadow Removal Dataset) consisting of 3,000+ paired images with and without shadows. We also utilized the ISTD (ISTD Dataset) for validation."
    },
    {
      icon: <Layers className="h-8 w-8 text-purple-600" />,
      title: "Network Architecture",
      description: "We implemented a GAN-based architecture with a U-Net generator and PatchGAN discriminator, optimized for shadow detection and removal tasks."
    },
    {
      icon: <GitCompare className="h-8 w-8 text-purple-600" />,
      title: "Training Process",
      description: "Training was performed using a custom loss function combining adversarial, reconstruction, and perceptual losses to ensure realistic shadow removal."
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-600" />,
      title: "Evaluation Metrics",
      description: "Results were evaluated using PSNR, SSIM, and RMSE metrics, as well as through qualitative assessments by human evaluators."
    }
  ];

  return (
    <section 
      id="methodology" 
      ref={sectionRef}
      className="py-20 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <SectionTitle>Dataset & Methodology</SectionTitle>
        
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-100 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Our Approach</h3>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Our shadow removal system employs a specialized GAN architecture that 
              first identifies shadow regions and then reconstructs those areas with 
              proper lighting and texture that matches the surrounding non-shadow regions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Unlike traditional methods that rely on hand-crafted features, our 
              approach learns directly from paired examples of images with and without 
              shadows, allowing it to generalize to a wide variety of shadow types, 
              lighting conditions, and surface textures.
            </p>
          </div>
          
          <div className={`relative h-80 md:h-auto transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img 
              src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI Neural Network Visualization" 
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent rounded-lg flex items-end">
              <div className="p-6">
                <p className="text-white font-medium">Neural network architecture visualization</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm border border-slate-100 transition-all duration-700 delay-${index * 150} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 p-6 bg-purple-50 rounded-lg border border-purple-100 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-xl font-semibold mb-3 text-purple-800">Key Innovation</h3>
          <p className="text-slate-700">
            Our approach innovates by incorporating an attention mechanism that helps the 
            network focus specifically on shadow boundaries, which are typically the most 
            challenging areas to restore naturally. This results in smoother transitions 
            between previously shadowed and non-shadowed regions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;