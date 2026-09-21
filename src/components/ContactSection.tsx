import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  ChevronDown, 
  Car
} from 'lucide-react';
import { RESORT_INFO, FAQS } from '../data/resortData';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dates: '',
    roomType: 'Deluxe AC Room',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*Inquiry for Anchor Beach Resort*\n*Name:* ${formData.name || 'Guest'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Dates:* ${formData.dates || 'Not specified'}\n*Suite:* ${formData.roomType}\n*Note:* ${formData.message || 'None'}`;
    window.open(`https://wa.me/917773999979?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF7F2] text-stone-800 overflow-hidden">
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
            Reservations & Location
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 tracking-tight mt-2">
            Arrive at the Shore
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Host Rahul Parkhe and our hospitality team look forward to welcoming you to Diveagar.
          </p>
        </motion.div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Host Contact & Address */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/70 shadow-sm space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Direct Inquiries & Bookings
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Connect directly with our front desk and host Rahul Parkhe.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${RESORT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-stone-400 font-light">Phone</span>
                    <span className="font-semibold text-stone-900">{RESORT_INFO.phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20would%20like%20to%20inquire%20about%20room%20availability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-700 hover:text-emerald-700 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-stone-400 font-light">WhatsApp Support</span>
                    <span className="font-semibold text-emerald-700">+91 7773 999 979</span>
                  </div>
                </a>

                <a
                  href={`mailto:${RESORT_INFO.email}`}
                  className="flex items-center gap-3 text-stone-700 hover:text-sky-700 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-stone-400 font-light">Email</span>
                    <span className="font-medium text-stone-800">{RESORT_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-stone-400 font-light">Address</span>
                    <span className="text-stone-700 font-light leading-snug block">
                      {RESORT_INFO.address}, Raigad District, Maharashtra - 402404
                    </span>
                    <span className="text-[11px] text-amber-700 font-medium block mt-1">
                      ★ 200m (2 min walk) from Diveagar Beach
                    </span>
                  </div>
                </div>
              </div>

              {/* Driving Directions */}
              <div className="pt-4 border-t border-stone-100 text-xs text-stone-600 font-light space-y-1.5">
                <div className="flex items-center gap-1.5 font-medium text-stone-800">
                  <Car className="w-3.5 h-3.5 text-amber-600" />
                  <span>How to Reach</span>
                </div>
                <p><strong>From Pune:</strong> ~160 km via Tamhini Ghat – Mangaon – Diveagar (~4.5 hrs drive)</p>
                <p><strong>From Mumbai:</strong> ~170 km via NH 66 or Ro-Ro ferry via Mandwa (~4.5 hrs drive)</p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20want%20to%20know%20about%20room%20availability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-stone-200/70 shadow-sm h-52 bg-stone-100">
              <iframe
                title="Anchor Beach Resort Diveagar Map"
                src="https://maps.google.com/maps?q=Anchor+Beach+Resort+Diveagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Right Column: Clean Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/70 shadow-sm"
          >
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Send a Stay Inquiry
            </h3>
            <p className="text-xs text-stone-500 font-light mt-1">
              Leave your details and dates. Host Rahul Parkhe or our front desk will reply promptly with tariffs and availability.
            </p>

            {formSubmitted ? (
              <div className="mt-8 p-6 bg-amber-50/50 border border-amber-200/70 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-amber-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-stone-900">
                  Thank you, {formData.name || 'Guest'}
                </h4>
                <p className="text-xs text-stone-600 font-light">
                  Your inquiry has been received. Our team will contact you on <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={handleWhatsAppSend}
                  className="px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-medium inline-flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Also Send on WhatsApp</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98200 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                      Tentative Dates
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 18th - 20th Oct (2 Nights)"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                      Preferred Suite
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
                    >
                      <option value="Deluxe AC Room">Deluxe AC Room (₹2,800/night)</option>
                      <option value="Super Deluxe AC Room">Super Deluxe AC Room (₹3,400/night)</option>
                      <option value="Semi Deluxe AC Room">Semi Deluxe AC Room (₹2,200/night)</option>
                      <option value="Multiple Rooms / Group">Multiple Rooms / Group</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Vegetarian meal preference, ground floor room request, water sports assistance..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto text-xs font-semibold text-emerald-700 hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Quick Send via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#0a1826] hover:bg-stone-800 text-white text-xs font-medium uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}

            {/* Essential FAQs Accordion */}
            <div className="mt-10 pt-6 border-t border-stone-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
                Frequently Asked Questions
              </h4>
              <div className="space-y-2">
                {FAQS.slice(0, 3).map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className="border border-stone-200/60 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full text-left px-4 py-3 flex items-center justify-between text-xs font-semibold text-stone-800 hover:bg-stone-50 transition cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-3 text-xs text-stone-600 font-light leading-relaxed border-t border-stone-100 bg-stone-50/40">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
