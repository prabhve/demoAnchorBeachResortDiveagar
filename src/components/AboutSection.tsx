import React from 'react';
import { motion } from 'motion/react';
import { 
  Palmtree, 
  Waves, 
  Utensils, 
  ShieldCheck, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF7F2] text-stone-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">
              The Sanctuary
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 tracking-tight leading-snug">
              Unhurried Days, <br />
              <span className="italic font-light text-stone-700">Gentle Ocean Breezes</span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              Hidden away in the peaceful coastal hamlet of Karle in Diveagar, <strong>Anchor Beach Resort</strong> was founded by host <strong>Rahul Parkhe</strong> with a singular vision: to offer travelers a peaceful coastal sanctuary with the warmth of genuine Konkani hospitality.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              Just 200 meters down a shaded coconut grove path lies Diveagar Beach — known for its gentle, swimmable waves and golden evening skies. Return to comfortable air-conditioned suites, a refreshing dip in our crystal swimming pool, and freshly prepared coastal seafood cooked with heirloom Malvani recipes.
            </p>

            {/* Quiet Host Note */}
            <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
              <div>
                <p className="font-semibold text-stone-800 text-sm">Rahul Parkhe</p>
                <p className="font-light">Host & Manager, Anchor Beach Resort</p>
              </div>
              <div className="flex items-center gap-1.5 text-amber-800 font-medium">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>200m from Shoreline</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 rounded-full bg-[#0a1826] hover:bg-stone-800 text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
              >
                Plan Your Getaway
              </button>
              <button
                onClick={() => onNavigate('rooms')}
                className="text-xs font-semibold text-stone-700 hover:text-amber-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Suites</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Imagery Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
                  alt="Anchor Beach Resort diveagar rooms and lawns"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Smaller Complementary Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -left-6 w-44 sm:w-52 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] hidden sm:block aspect-[4/3]"
              >
                <img
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80"
                  alt="Swimming pool at Anchor Beach Resort"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 3 Minimalist Pillars */}
        <div className="mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-stone-200">
          {[
            {
              icon: Palmtree,
              color: 'bg-amber-100/70 text-amber-800',
              title: 'Steps to Diveagar Beach',
              text: 'A gentle 2-minute stroll along a quiet coconut grove path brings you straight to Diveagar\'s quiet shoreline.',
            },
            {
              icon: Waves,
              color: 'bg-sky-100/70 text-sky-800',
              title: 'Pool & Private Lawns',
              text: 'Cool off in the filtered swimming pool with a safe kids area, or relax on manicured grass lawns under the stars.',
            },
            {
              icon: Utensils,
              color: 'bg-amber-100/70 text-amber-800',
              title: 'Authentic Konkani Kitchen',
              text: 'Savor fresh Surmai and Pomfret thalis, handmade Ukadiche Modak, and comforting home-style vegetarian delicacies.',
            },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className="space-y-2 p-4 rounded-xl hover:bg-white/60 transition-colors"
              >
                <div className={`w-10 h-10 rounded-full ${pillar.color} flex items-center justify-center mb-4 shadow-xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
