import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0a1826]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_20px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${RESORT_INFO.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-stone-200 text-[10px] font-medium transition active:scale-95 border border-white/5"
          aria-label="Call Resort"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="truncate max-w-full">Call Desk</span>
        </a>

        {/* WhatsApp Host Button */}
        <a
          href="https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20am%20inquiring%20about%20room%20availability"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-[10px] font-medium transition active:scale-95 shadow-sm"
          aria-label="WhatsApp Host"
        >
          <MessageCircle className="w-4 h-4 text-white mb-0.5" />
          <span className="truncate max-w-full">WhatsApp</span>
        </a>

        {/* Primary Book Stay Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.6] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-600 hover:to-amber-700 text-stone-950 text-xs font-bold uppercase tracking-wider transition active:scale-95 shadow-md cursor-pointer"
          aria-label="Book a Room"
        >
          <Calendar className="w-4 h-4 text-stone-950 shrink-0" />
          <span className="truncate">Book Suite</span>
        </button>
      </div>
    </div>
  );
};
