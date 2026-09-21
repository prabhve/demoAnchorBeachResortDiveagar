import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass } from 'lucide-react';
import { ATTRACTIONS } from '../data/resortData';

export const AttractionsSection: React.FC = () => {
  return (
    <section id="attractions" className="py-24 sm:py-32 bg-[#FAF7F2] text-stone-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">
            Local Excursions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 tracking-tight mt-2">
            The Charms of Diveagar
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Ancient sea forts, peaceful coastal shrines, and uncrowded Konkan shores await just moments from our gate.
          </p>
        </motion.div>

        {/* Attractions Grid (Clean, Editorial Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ATTRACTIONS.slice(0, 3).map((attraction, idx) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/70 hover:border-amber-400/40 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0a1826]/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{attraction.distance}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    {attraction.name}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 font-light leading-relaxed">
                    {attraction.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                  {attraction.highlights.slice(0, 2).map((h, i) => (
                    <span key={i} className="text-[10px] text-stone-500 font-light bg-stone-50 px-2 py-0.5 rounded">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
