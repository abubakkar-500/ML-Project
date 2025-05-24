import React from 'react';
import { Layers, Github, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Layers className="h-8 w-8 text-purple-400 mr-2" />
            <h2 className="text-xl font-bold">Shadow Removal GAN</h2>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:research@example.com" 
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-center md:justify-start"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    researcher@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/abubakkar-2004/ML-project" 
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-center md:justify-start"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    @GANsShadowRemoval
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="text-slate-400 hover:text-white transition-colors">
                    Project Overview
                  </a>
                </li>
                <li>
                  <a href="#methodology" className="text-slate-400 hover:text-white transition-colors">
                    Methodology
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-slate-400 hover:text-white transition-colors">
                    Results Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col items-center">
          <p className="text-slate-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for the Final Year Project
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © {currentYear} Shadow Removal GAN Project. FYP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;