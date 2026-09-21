import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bed, 
  Maximize2, 
  Users, 
  Wind, 
  Tv, 
  Wifi, 
  Coffee,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { ROOMS } from '../data/resortData';
import { Room } from '../types';

interface RoomsSectionProps {
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenBooking }) => {
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  const openRoomModal = (room: Room) => {
    setActiveModalRoom(room);
    setModalImageIndex(0);
  };

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-white text-stone-800 overflow-hidden">
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
            Accommodations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 tracking-tight mt-2">
            Suites & Sanctuaries
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Thoughtfully appointed with whisper-quiet air conditioning, plush king beds, and coastal cross-ventilation. Designed for restorative sleep after sunlit days on the beach.
          </p>
        </motion.div>

        {/* Room Cards Grid (Airy, Minimal, Elegant) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-stone-200/70 hover:border-amber-400/50 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div 
                className="relative h-60 sm:h-64 overflow-hidden cursor-pointer"
                onClick={() => openRoomModal(room)}
              >
                <img
                  src={room.images[0]}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openRoomModal(room);
                  }}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition text-xs flex items-center gap-1 cursor-pointer"
                  title="View Photos"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="text-[11px] pr-1">{room.images.length} Photos</span>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-stone-900">
                      {room.name}
                    </h3>
                    <span className="text-xs font-light text-stone-500">
                      {room.size}
                    </span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-2">
                    {room.description}
                  </p>

                  {/* Core Features on a Clean Single Line */}
                  <div className="mt-4 pt-4 border-t border-stone-200 flex items-center gap-4 text-xs text-stone-500 font-light">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-stone-400" />
                      {room.bedType}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-stone-400" />
                      {room.occupancy}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wind className="w-3.5 h-3.5 text-stone-400" />
                      AC
                    </span>
                  </div>
                </div>

                {/* Footer / Price & Action */}
                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-light">Tariff from</span>
                    <span className="text-xl font-serif font-bold text-stone-900">
                      ₹{room.price.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-stone-500 font-light"> / night</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="px-5 py-2.5 rounded-full bg-[#0a1826] hover:bg-amber-600 text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Direct Booking Advantage */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-xs text-stone-500 font-light"
        >
          <span>Direct reservation benefits: Complimentary hot breakfast, best available rate guarantee & 24/7 power backup.</span>
        </motion.div>
      </div>

      {/* Room Photo & Spec Modal */}
      <AnimatePresence>
        {activeModalRoom && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalRoom(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Carousel */}
              <div className="relative h-72 sm:h-96 bg-black shrink-0">
                <img
                  src={activeModalRoom.images[modalImageIndex]}
                  alt={activeModalRoom.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {activeModalRoom.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setModalImageIndex((prev) => (prev > 0 ? prev - 1 : activeModalRoom.images.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setModalImageIndex((prev) => (prev < activeModalRoom.images.length - 1 ? prev + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                <div className="absolute bottom-3 left-4 text-xs text-white/80 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {modalImageIndex + 1} of {activeModalRoom.images.length}
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      {activeModalRoom.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-light mt-1">
                      {activeModalRoom.size} • {activeModalRoom.occupancy} • {activeModalRoom.bedType}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-serif font-bold text-stone-900">
                      ₹{activeModalRoom.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-500 block font-light">per night</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {activeModalRoom.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
                    Suite Amenities
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {activeModalRoom.amenities.map((item, idx) => (
                      <div key={idx} className="text-xs text-stone-600 font-light flex items-center gap-1.5 bg-stone-50 p-2 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-200">
                  <button
                    onClick={() => setActiveModalRoom(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const id = activeModalRoom.id;
                      setActiveModalRoom(null);
                      onOpenBooking(id);
                    }}
                    className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-bold uppercase tracking-wider shadow cursor-pointer"
                  >
                    Reserve This Suite
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
