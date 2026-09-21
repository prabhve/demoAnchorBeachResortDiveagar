import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, RESORT_INFO } from '../data/resortData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white text-stone-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">
            Guest Reflections
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 tracking-tight mt-2">
            Cherished Memories
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Kind words from families and travelers who made Anchor Beach Resort their coastal home in Diveagar.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-xs text-stone-500 font-light">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span>{RESORT_INFO.rating} Rating across 350+ traveler reviews</span>
          </div>
        </motion.div>

        {/* Minimalist Editorial Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#FAF7F2] p-7 rounded-2xl border border-stone-200/70 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-amber-700/30 mb-3" />
                <p className="text-xs sm:text-sm text-stone-700 font-light leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/70 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-stone-900 text-xs sm:text-sm">
                    {t.guestName}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-light">
                    {t.location} • {t.stayDate}
                  </p>
                </div>
                <div className="flex text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
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
