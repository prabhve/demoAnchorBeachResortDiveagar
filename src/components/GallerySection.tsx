import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { GALLERY_IMAGES } from '../data/resortData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'pool', label: 'Pool & Lawns' },
    { id: 'rooms', label: 'Suites' },
    { id: 'dining', label: 'Dining' },
    { id: 'beach', label: 'Diveagar Beach' },
  ];

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : filteredImages.length - 1);
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex < filteredImages.length - 1 ? selectedImageIndex + 1 : 0);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white text-stone-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">
            Visual Journal
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 tracking-tight mt-2">
            Moments by the Shore
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            A glimpse into the unhurried life at Anchor Beach Resort and the surrounding Konkan coastline.
          </p>

          {/* Minimalist Filter Tabs (Scrollable on Mobile) */}
          <div className="mt-6 sm:mt-8 w-full overflow-x-auto no-scrollbar pb-1">
            <div className="flex justify-start sm:justify-center gap-2 min-w-max px-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer select-none ${
                    activeCategory === cat.id
                      ? 'bg-stone-900 text-white shadow-sm font-semibold'
                      : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedImageIndex(idx)}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer bg-stone-100 shadow-sm hover:shadow-md"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-medium text-white drop-shadow">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={filteredImages[selectedImageIndex].image}
                alt={filteredImages[selectedImageIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white text-xs sm:text-sm font-light mt-3">
                {filteredImages[selectedImageIndex].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
