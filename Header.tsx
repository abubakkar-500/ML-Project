import React, { useState, useEffect } from 'react';
import { Layers, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Layers className="h-6 w-6 text-purple-700 mr-2" />
          <h1 className={`font-bold transition-all duration-300 ${
            isScrolled ? 'text-purple-800 text-xl' : 'text-purple-700 text-2xl'
          }`}>
            Shadow Removal GAN
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['introduction', 'methodology', 'comparison', 'gallery', 'team', 'references'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium capitalize transition-colors hover:text-purple-700 ${
                    isScrolled ? 'text-slate-800' : 'text-slate-700'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4 px-4 space-y-4">
            {['introduction', 'methodology', 'comparison', 'gallery', 'team', 'references'].map((item) => (
              <li key={item} className="border-b border-slate-100 pb-2">
                <button 
                  onClick={() => scrollToSection(item)}
                  className="w-full text-left py-2 text-slate-800 font-medium capitalize transition-colors hover:text-purple-700"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;