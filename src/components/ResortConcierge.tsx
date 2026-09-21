import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageCircle, 
  Calendar
} from 'lucide-react';
import { RESORT_INFO, ROOMS } from '../data/resortData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

interface ResortConciergeProps {
  onOpenBooking: (roomId?: string) => void;
}

export const ResortConcierge: React.FC<ResortConciergeProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste 🙏 Welcome to Anchor Beach Resort, Diveagar. How may I assist you with room tariffs, beach distance, or Konkani seafood dining today?',
    },
  ]);

  const quickQuestions = [
    'How far is the beach?',
    'What are room tariffs?',
    'Seafood & vegetarian food?',
    'Swimming pool & power backup?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let reply = '';
      const q = query.toLowerCase();

      if (q.includes('beach') || q.includes('distance') || q.includes('sea') || q.includes('far')) {
        reply = 'Diveagar Beach is just 200 meters (a leisurely 2-minute stroll) along a quiet palm-lined path from our resort gates. The beach offers gentle swimmable waves, golden sands, and thrilling water sports!';
      } else if (q.includes('tariff') || q.includes('room') || q.includes('price') || q.includes('rate') || q.includes('cost')) {
        reply = `Our accommodations include:\n• Semi Deluxe AC: ₹2,200/night\n• Deluxe AC: ₹2,800/night\n• Super Deluxe AC: ₹3,400/night\nAll rooms feature air conditioning, private balconies, plush beds, and uninterrupted 24/7 power backup.`;
      } else if (q.includes('food') || q.includes('seafood') || q.includes('fish') || q.includes('veg') || q.includes('meal') || q.includes('dinner')) {
        reply = 'Our authentic Konkani kitchen prepares freshly caught Surmai & Pomfret Tawa Fry, delicious vegetarian thalis with Pithla Bhakri, Ukadiche Modak, and refreshing Solkadhi. Breakfast is served complimentary with your stay!';
      } else if (q.includes('pool') || q.includes('power') || q.includes('generator') || q.includes('backup')) {
        reply = 'Yes! We feature a crystal-clear outdoor swimming pool with a safe shallow kids wading zone (open 7 AM – 8 PM). We also have a 24/7 silent heavy-duty generator backup for uninterrupted air conditioning.';
      } else {
        reply = `Host Rahul Parkhe and our hospitality desk are always ready to assist! You can also chat directly with us on WhatsApp at +91 7773 999 979 or call our front desk.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: reply,
        },
      ]);
    }, 400);
  };

  return (
    <>
      {/* Floating Action Button (Concierge & WhatsApp - positioned above mobile bottom bar) */}
      <div className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-30 flex items-center gap-2 sm:gap-3">
        <a
          href="https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20have%20an%20inquiry%20regarding%20a%20stay"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg items-center justify-center transition-transform hover:scale-105"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#0a1826]/95 backdrop-blur-md hover:bg-stone-800 text-white shadow-xl flex items-center gap-1.5 sm:gap-2 text-xs font-medium tracking-wide transition-transform hover:scale-105 border border-white/15"
        >
          <Bot className="w-4 h-4 text-amber-400" />
          <span className="text-[11px] sm:text-xs">AI Assistant</span>
        </button>
      </div>

      {/* Concierge Dialog Window */}
      {isOpen && (
        <div className="fixed bottom-32 md:bottom-20 right-3 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-88 max-h-[500px] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#0a1826] text-white px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold">Resort Concierge</h4>
                <p className="text-[10px] text-stone-400 font-light">Online • Anchor Beach Resort</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick FAQ Chips */}
          <div className="p-2 bg-stone-50 border-b border-stone-200 flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap bg-white px-2.5 py-1 rounded-full border border-stone-200 text-stone-600 hover:bg-amber-50 hover:text-stone-900 transition text-[10px]"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF7F2] text-xs max-h-72">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl whitespace-pre-line text-xs font-light leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#0a1826] text-white rounded-br-none'
                      : 'bg-white text-stone-800 rounded-bl-none border border-stone-200/80 shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white border-t border-stone-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about rooms, seafood, pool..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="w-7 h-7 rounded-lg bg-[#0a1826] text-amber-400 flex items-center justify-center hover:bg-stone-800 transition"
            >
              <Send className="w-3 h-3" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
