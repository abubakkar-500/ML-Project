import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import SectionTitle from './SectionTitle';
import { Search, X } from 'lucide-react';

interface GalleryImage {
  id: number;
  category: string;
  mask: string;
  before: string;
  after: string;
  title: string;
}

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      category: 'urban',
      mask: "/images/city-M.PNG",
      before: "/images/city.PNG",
      after: "/images/city-F.PNG",
      title: 'City Street Corner'
    },
    {
      id: 2,
      category: 'nature',
      mask: "/images/nature-M.PNG",
      before: "/images/nature1.PNG",
      after: "/images/nature-F.PNG",
      title: 'Forest Path'
    },
    {
      id: 3,
      category: 'interior',
      mask: "/images/img4_mask.PNG",
      before: "/images/img02.PNG",
      after: "/images/img03_free.PNG",
      title: 'Living Room'
    }
  ];

  const categories = ['all', 'urban', 'nature', 'interior'];
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="py-20 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <SectionTitle>Results Gallery</SectionTitle>
        
        <div className="mt-8 flex justify-center">
          <div className="inline-flex bg-white rounded-full shadow-sm p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  filter === category 
                    ? 'bg-purple-600 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-purple-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className={`group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-700 delay-${index * 100} hover:-translate-y-1 hover:shadow-lg ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[16/9]">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Search className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 grid grid-cols-3 gap-2">
                  <div className="relative">
                    <img 
                      src={image.mask} 
                      alt={`Mask - ${image.title}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                      MASK
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={image.before} 
                      alt={`Before - ${image.title}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={image.after} 
                      alt={`After - ${image.title}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-medium text-slate-800">{image.title}</h3>
                <p className="text-sm text-slate-500 mt-1 capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedImage(null)}>
            <div className="absolute top-4 right-4">
              <button 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div 
              className="bg-white rounded-lg shadow-xl max-w-6xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-3 gap-4 p-4">
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">MASK</div>
                  <img 
                    src={selectedImage.mask} 
                    alt={`Mask - ${selectedImage.title}`} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">BEFORE</div>
                  <img 
                    src={selectedImage.before} 
                    alt={`Before - ${selectedImage.title}`} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">AFTER</div>
                  <img 
                    src={selectedImage.after} 
                    alt={`After - ${selectedImage.title}`} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800">{selectedImage.title}</h3>
                <p className="text-slate-600 mt-2 capitalize">Category: {selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;