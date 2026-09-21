import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Fish, 
  Leaf, 
  Clock, 
  Sparkles, 
  Check, 
  Coffee,
  Heart
} from 'lucide-react';
import { DINING_ITEMS } from '../data/resortData';

export const DiningSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'seafood', label: 'Fresh Seafood', icon: Fish },
    { id: 'konkani-veg', label: 'Konkani Veg Thali', icon: Leaf },
    { id: 'breakfast', label: 'Complimentary Breakfast', icon: Coffee },
    { id: 'special', label: 'Sol Kadhi & Drinks', icon: Sparkles },
  ];

  const filteredItems = activeCategory === 'all'
    ? DINING_ITEMS
    : DINING_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="dining" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-500/30">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            AUTHENTIC KONKANI & SEAFOOD CUISINE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Flavours of the Konkan Coast
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Savour the true essence of coastal Maharashtra. From the morning catch prepared with hand-ground Malvani masalas to home-style vegetarian thalis and tangy pink Sol Kadhi, our kitchen celebrates coastal tradition.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-lg'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700/80 hover:text-white border border-stone-700'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-800/80 rounded-2xl overflow-hidden border border-stone-700/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col group shadow-md hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Veg / Non-Veg Indicator */}
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1.5 border border-white/20 text-[11px]">
                  <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-400' : 'bg-red-500'}`} />
                  <span className="font-semibold text-stone-200">
                    {item.isVeg ? 'Pure Veg' : 'Non-Veg'}
                  </span>
                </div>

                {item.isChefSpecial && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <Heart className="w-2.5 h-2.5 fill-stone-950" />
                    Guest Favourite
                  </div>
                )}
              </div>

              {/* Item Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition">
                      {item.name}
                    </h3>
                    {item.price && (
                      <span className="text-sm font-semibold text-amber-400 font-mono shrink-0">
                        {item.price}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Made to order
                  </span>
                  <span className="text-amber-400/90 font-medium">Local Konkan Spices</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dining Timings & Experience Card */}
        <div className="mt-14 bg-gradient-to-r from-stone-800 to-stone-850 rounded-3xl p-6 sm:p-8 border border-stone-700 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-700">
            {/* Breakfast */}
            <div className="text-center md:text-left md:pr-4 pt-2 md:pt-0">
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-sm font-bold uppercase tracking-wider mb-2">
                <Coffee className="w-4 h-4" />
                <span>Morning Breakfast</span>
              </div>
              <p className="text-2xl font-serif font-bold text-white">8:00 AM – 10:30 AM</p>
              <p className="text-xs text-stone-400 mt-1">
                Complimentary for all resident guests. Kanda Poha, Misal Pav, Upma, boiled eggs & hot tea/coffee.
              </p>
            </div>

            {/* Lunch */}
            <div className="text-center md:text-left md:px-4 pt-4 md:pt-0">
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-sm font-bold uppercase tracking-wider mb-2">
                <UtensilsCrossed className="w-4 h-4" />
                <span>Afternoon Lunch</span>
              </div>
              <p className="text-2xl font-serif font-bold text-white">1:00 PM – 3:30 PM</p>
              <p className="text-xs text-stone-400 mt-1">
                Fresh catch Surmai & Pomfret thalis, spicy Prawns masala, and traditional vegetarian Konkani bhakri feasts.
              </p>
            </div>

            {/* Dinner */}
            <div className="text-center md:text-left md:pl-4 pt-4 md:pt-0">
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-sm font-bold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Starlight Dinner</span>
              </div>
              <p className="text-2xl font-serif font-bold text-white">8:00 PM – 10:45 PM</p>
              <p className="text-xs text-stone-400 mt-1">
                Dine under the starry sky on our manicured garden lawn or inside the air-conditioned dining pavilion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
