import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Users, 
  BedDouble, 
  ArrowRight,
  Palmtree,
  Waves,
  Utensils,
  ShieldCheck,
  Image as ImageIcon
} from 'lucide-react';
import { ROOMS } from '../data/resortData';

interface HeroSectionProps {
  onOpenBooking: (roomId?: string, checkIn?: string, checkOut?: string, guests?: number) => void;
  onNavigate: (sectionId: string) => void;
}

const BACKGROUND_SCENES = [
  {
    id: 'resort-sanctuary',
    label: 'Coastal Resort & Pool Sanctuary',
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2400&q=85',
    tagline: 'Where tranquil waters and coconut palms meet',
  },
  {
    id: 'sunset-palms',
    label: 'Konkan Sunset & Palms',
    url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2400&q=85',
    tagline: 'Golden hour tranquility on the Arabian coast',
  },
  {
    id: 'diveagar-shore',
    label: 'Diveagar Beach Shoreline',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85',
    tagline: 'Uncrowded golden sands 200m away',
  },
  {
    id: 'beachfront-haven',
    label: 'Boutique Beachfront Haven',
    url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2400&q=85',
    tagline: 'Calm ocean air and lush greenery',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onNavigate }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0].id);
  const [guests, setGuests] = useState(2);
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedRoom, checkIn, checkOut, guests);
  };

  const currentBg = BACKGROUND_SCENES[activeBgIndex];

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[#071727]">
      {/* High-definition, peaceful coastal background with high-contrast darkening scrim */}
      <div className="absolute inset-0 z-0 bg-[#071727] overflow-hidden pointer-events-none">
        <img
          key={currentBg.id}
          src={currentBg.url}
          alt={`Anchor Beach Resort Diveagar - ${currentBg.label}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-all duration-700 brightness-[0.85] scale-105"
        />
        {/* Multi-tier luxury dark overlays ensuring 100% text legibility */}
        <div className="absolute inset-0 bg-[#07131e]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06121e]/85 via-[#0a1826]/70 to-[#07131e]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(6,18,30,0.5)_100%)]" />
      </div>

      {/* Subtle Background Scene Switcher in top right */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-28 right-4 sm:right-8 z-20 hidden sm:flex items-center gap-2 bg-[#0a1826]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] text-stone-200 shadow-xl"
      >
        <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
        <span className="text-stone-400 font-light">Scenic View:</span>
        <div className="flex items-center gap-1.5">
          {BACKGROUND_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => setActiveBgIndex(idx)}
              className={`px-2.5 py-0.5 rounded-full transition cursor-pointer font-medium ${
                activeBgIndex === idx
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-white/10'
              }`}
              title={scene.tagline}
            >
              {scene.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center pt-8 sm:pt-14 pb-8">
        {/* High-visibility Pill Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1826]/90 border border-amber-400/40 shadow-lg backdrop-blur-md mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-amber-300 uppercase">
            Boutique Coastal Sanctuary • Diveagar, Konkan
          </span>
        </motion.div>

        {/* High-contrast, Crisp Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white tracking-tight leading-[1.2] max-w-4xl mx-auto drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)]"
        >
          Where Arabian Sea Breezes <br className="hidden sm:inline" />
          <span className="italic font-serif font-light text-amber-300">Meet Konkan Serenity</span>
        </motion.h1>

        {/* Clearly Visible Hero Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 text-sm sm:text-base md:text-lg text-stone-100 max-w-2xl mx-auto font-normal sm:font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
        >
          Tucked among lush coconut palms, just 200 meters from the golden sands of Diveagar Beach. Experience boutique air-conditioned rooms, a tranquil swimming pool, and authentic Malvani flavors.
        </motion.p>

        {/* High-Contrast, Crystal-Clear Booking Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <form 
            onSubmit={handleSearch}
            className="bg-white p-3.5 sm:p-4 rounded-2xl sm:rounded-full shadow-2xl border border-stone-200 text-stone-900 ring-1 ring-black/10"
            id="hero-quick-booking-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-left items-center">
              {/* Check-in Date */}
              <div className="px-4 py-2 bg-stone-50/90 hover:bg-stone-100 rounded-xl sm:rounded-full transition border border-stone-200/80">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-600">
                  Check-in Date
                </label>
                <div className="flex items-center gap-2 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-stone-900 focus:outline-none cursor-pointer"
                    required
                  />
                </div>
              </div>

              {/* Check-out Date */}
              <div className="px-4 py-2 bg-stone-50/90 hover:bg-stone-100 rounded-xl sm:rounded-full transition border border-stone-200/80">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-600">
                  Check-out Date
                </label>
                <div className="flex items-center gap-2 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <input
                    type="date"
                    min={checkIn || today}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-stone-900 focus:outline-none cursor-pointer"
                    required
                  />
                </div>
              </div>

              {/* Room Selection */}
              <div className="px-4 py-2 bg-stone-50/90 hover:bg-stone-100 rounded-xl sm:rounded-full transition border border-stone-200/80">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-600">
                  Suite Type
                </label>
                <div className="flex items-center gap-2 mt-0.5">
                  <BedDouble className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-bold text-stone-900 focus:outline-none cursor-pointer"
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Check Rates CTA */}
              <div className="pt-2 sm:pt-0">
                <button
                  type="submit"
                  id="hero-check-availability-btn"
                  className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs sm:text-sm rounded-xl sm:rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <span>Check Rates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Prominent, Clearly Legible Feature Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="relative z-10 max-w-4xl mx-auto px-4 w-full"
      >
        <div className="bg-[#0a1826]/90 backdrop-blur-md rounded-2xl py-3.5 px-6 border border-white/15 shadow-xl flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-stone-100 font-medium">
          <div className="flex items-center gap-2">
            <Palmtree className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="drop-shadow-xs">200m to Beach Shore</span>
          </div>
          <div className="flex items-center gap-2">
            <Waves className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="drop-shadow-xs">Clean Swimming Pool</span>
          </div>
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="drop-shadow-xs">Fresh Konkani Cuisine</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="drop-shadow-xs">24/7 Power Backup</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
