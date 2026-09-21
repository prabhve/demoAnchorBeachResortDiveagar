import React, { useState, useMemo } from 'react';
import { 
  X, 
  Calendar, 
  BedDouble, 
  Users, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2, 
  Download, 
  Coffee, 
  Wifi, 
  Waves, 
  ArrowRight,
  Receipt
} from 'lucide-react';
import { ROOMS, RESORT_INFO } from '../data/resortData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [roomId, setRoomId] = useState<string>(initialRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState<string>(initialCheckIn || today);
  const [checkOut, setCheckOut] = useState<string>(initialCheckOut || tomorrow);
  const [adults, setAdults] = useState<number>(initialGuests || 2);
  const [children, setChildren] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [confirmationId, setConfirmationId] = useState<string>('');

  // Selected Room Object
  const selectedRoom = useMemo(() => {
    return ROOMS.find((r) => r.id === roomId) || ROOMS[0];
  }, [roomId]);

  // Calculate Nights
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn).getTime();
    const end = new Date(checkOut).getTime();
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut]);

  // Financial calculations
  const subtotal = selectedRoom.price * nights;
  const gstRate = 0.12; // 12% GST standard for hotel rooms under 7500 in India
  const gst = Math.round(subtotal * gstRate);
  const total = subtotal + gst;

  if (!isOpen) return null;

  const handleOnlineConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'ABR-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationId(generatedId);
    setIsConfirmed(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Anchor Beach Resort Diveagar! 🌴\n\nI want to confirm a reservation:\n` +
      `• Guest Name: ${name || 'Prospective Guest'}\n` +
      `• Phone: ${phone || 'Not provided'}\n` +
      `• Room: ${selectedRoom.name} (₹${selectedRoom.price}/night)\n` +
      `• Check-In: ${checkIn}\n` +
      `• Check-Out: ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})\n` +
      `• Guests: ${adults} Adults, ${children} Children\n` +
      `• Estimated Total: ₹${total.toLocaleString()} (incl. GST & Breakfast)\n` +
      (specialRequests ? `• Special Notes: ${specialRequests}\n` : '') +
      `\nPlease let me know the availability and payment details!`
    );
    window.open(`https://wa.me/917773999979?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-stone-200 my-auto text-stone-800">
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#0a1826] text-white px-6 py-4 rounded-t-3xl flex items-center justify-between border-b border-stone-800">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-amber-300 font-light block">
              Anchor Beach Resort • Diveagar
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-normal text-white">
              {isConfirmed ? 'Reservation Voucher' : 'Direct Booking Reservation'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmed State Voucher */}
        {isConfirmed ? (
          <div className="p-6 sm:p-10 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              RESERVATION REQUEST PROCESSED
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-3">
              We Look Forward to Welcoming You!
            </h3>

            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
              Your provisional booking ID is <strong className="text-stone-900 font-mono text-base">{confirmationId}</strong>. Our front desk manager will call you on <strong>{phone}</strong> to confirm check-in arrangements.
            </p>

            {/* Voucher Summary Card */}
            <div className="mt-8 bg-stone-50 border border-stone-200 rounded-2xl p-6 text-left max-w-lg mx-auto shadow-sm">
              <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-3">
                <span className="text-xs text-stone-500 uppercase font-semibold">Resort Name</span>
                <span className="text-sm font-bold text-stone-900">Anchor Beach Resort</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-3">
                <span className="text-xs text-stone-500 uppercase font-semibold">Accommodation</span>
                <span className="text-sm font-bold text-stone-900">{selectedRoom.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-3">
                <span className="text-xs text-stone-500 uppercase font-semibold">Stay Duration</span>
                <span className="text-sm font-bold text-stone-900">{checkIn} to {checkOut} ({nights} Night{nights > 1 ? 's' : ''})</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-3">
                <span className="text-xs text-stone-500 uppercase font-semibold">Guests</span>
                <span className="text-sm font-bold text-stone-900">{adults} Adults, {children} Children</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-3">
                <span className="text-xs text-stone-500 uppercase font-semibold">Total Amount (incl. 12% GST)</span>
                <span className="text-lg font-serif font-bold text-amber-700">₹{total.toLocaleString()}</span>
              </div>
              <div className="text-[11px] text-stone-500 bg-amber-50 p-2.5 rounded-lg border border-amber-200/60 mt-4">
                ★ <strong>Complimentary:</strong> Daily hot Konkani breakfast, free Wi-Fi, swimming pool access, and parking are included in this stay.
              </div>
            </div>

            {/* Voucher Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify Host via WhatsApp</span>
              </button>
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-6 py-3 border border-stone-300 hover:bg-stone-100 text-stone-700 font-semibold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save Voucher</span>
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleOnlineConfirm} className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Dates & Guest Selection */}
              <div className="lg:col-span-7 space-y-5">
                {/* Room Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1 flex items-center gap-1.5">
                    <BedDouble className="w-3.5 h-3.5 text-amber-600" />
                    Select Room Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {ROOMS.map((room) => (
                      <button
                        type="button"
                        key={room.id}
                        onClick={() => setRoomId(room.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          roomId === room.id
                            ? 'border-amber-600 bg-amber-50/80 ring-2 ring-amber-500/30'
                            : 'border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <span className="block text-xs font-bold text-stone-900 leading-snug">
                          {room.name}
                        </span>
                        <span className="block text-xs font-serif font-bold text-amber-700 mt-1">
                          ₹{room.price.toLocaleString()}
                          <span className="text-[10px] font-sans text-stone-500 font-normal">/nt</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-600" />
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-stone-900 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-600" />
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      min={checkIn || today}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-stone-900 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1">
                      <Users className="w-3 h-3 text-amber-600" />
                      Adults (Age 12+)
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full bg-transparent text-sm font-semibold text-stone-900 focus:outline-none"
                    >
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adults</option>
                      <option value={3}>3 Adults (Extra Bed)</option>
                      <option value={4}>4 Adults (Family)</option>
                      <option value={5}>5+ Adults</option>
                    </select>
                  </div>

                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1">
                      <Users className="w-3 h-3 text-amber-600" />
                      Children (Below 12)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full bg-transparent text-sm font-semibold text-stone-900 focus:outline-none"
                    >
                      <option value={0}>0 Children</option>
                      <option value={1}>1 Child</option>
                      <option value={2}>2 Children</option>
                      <option value={3}>3 Children</option>
                    </select>
                  </div>
                </div>

                {/* Guest Contact Information */}
                <div className="pt-2 border-t border-stone-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Primary Guest Details
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile / WhatsApp Number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address (for voucher confirmation)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Any special requests? (e.g. Seafood preferences, arrival timing, extra mattress...)"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Price Breakdown & Inclusions */}
              <div className="lg:col-span-5 bg-stone-50 p-5 sm:p-6 rounded-2xl border border-stone-200/90 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-stone-500 tracking-wider mb-3">
                    <Receipt className="w-4 h-4 text-amber-600" />
                    <span>Price Summary & Inclusions</span>
                  </div>

                  {/* Room summary */}
                  <div className="bg-white p-3 rounded-xl border border-stone-200 mb-4">
                    <span className="text-xs font-semibold text-amber-800 block">Selected:</span>
                    <h5 className="font-serif font-bold text-stone-900 text-base">{selectedRoom.name}</h5>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {selectedRoom.occupancy} • {selectedRoom.bedType}
                    </p>
                  </div>

                  {/* Line Items */}
                  <div className="space-y-2.5 text-xs text-stone-600 border-b border-stone-200 pb-4">
                    <div className="flex justify-between items-center">
                      <span>Room Tariff ({nights} night{nights > 1 ? 's' : ''} × ₹{selectedRoom.price}):</span>
                      <span className="font-semibold text-stone-900 font-mono">₹{subtotal.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center text-emerald-700">
                      <span className="flex items-center gap-1">
                        <Coffee className="w-3.5 h-3.5" /> Complimentary Breakfast:
                      </span>
                      <span className="font-bold">FREE</span>
                    </div>

                    <div className="flex justify-between items-center text-sky-700">
                      <span className="flex items-center gap-1">
                        <Waves className="w-3.5 h-3.5" /> Pool & 200m Beach Access:
                      </span>
                      <span className="font-bold">FREE</span>
                    </div>

                    <div className="flex justify-between items-center text-stone-500">
                      <span>Estimated Taxes & GST (12%):</span>
                      <span className="font-mono">₹{gst.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center pt-4">
                    <div>
                      <span className="block text-xs font-bold uppercase text-stone-500">Total Payable:</span>
                      <span className="text-2xl font-serif font-bold text-[#0b2545]">
                        ₹{total.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[10px] text-stone-500 bg-white px-2 py-1 rounded border border-stone-200">
                      Pay at Check-in
                    </span>
                  </div>

                  {/* Trust guarantees */}
                  <div className="mt-4 pt-3 border-t border-stone-200 space-y-1.5 text-[11px] text-stone-600">
                    <div className="flex items-center gap-1.5 text-emerald-700">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>Free cancellation up to 48 hours before arrival</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-600">
                      <Wifi className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                      <span>24/7 Silent Generator Power Backup Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Submit Actions */}
                <div className="mt-6 pt-4 border-t border-stone-200 space-y-2">
                  <button
                    type="submit"
                    id="confirm-reservation-btn"
                    className="w-full py-3 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-stone-950 font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <span>Confirm Reservation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-sm transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book Directly via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
