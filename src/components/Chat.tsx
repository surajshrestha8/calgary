'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I\'m your Calgary Prep assistant. How can I help you with your FBA prep or storage needs today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const nextMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Chat request failed');
      }

      const assistantMessage = data.message || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: error instanceof Error ? error.message : "I'm having trouble connecting right now. Feel free to email us at hello@calgaryprep.ca!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1000] w-14 h-14 bg-amber text-paper rounded-full shadow-2xl flex items-center justify-center cursor-pointer group"
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
        aria-controls="chat-assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="absolute right-full mr-4 bg-ink text-paper text-[12px] font-mono py-1.5 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          CHAT WITH US
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            id="chat-assistant"
            role="dialog"
            aria-label="Calgary Prep chat assistant"
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-[1000] w-[360px] max-w-[calc(100vw-32px)] h-[min(500px,calc(100vh-112px))] bg-paper border border-ink/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-ink text-paper p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-narrow font-bold text-[14px] uppercase tracking-wide">Assistant</h3>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-paper/60 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Always Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
            >
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-[14px] leading-[1.5] ${
                    m.role === 'user' 
                      ? 'bg-amber text-paper rounded-tr-none' 
                      : 'bg-paper-2 text-ink rounded-tl-none border border-ink/5'
                  }`}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-paper-2 p-3 rounded-2xl rounded-tl-none border border-ink/5 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-ink-3" />
                    <span className="text-[12px] font-mono text-ink-3 uppercase">Typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-ink/10 bg-paper-2/50">
              <div className="relative">
                <input
                  aria-label="Chat message"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about prep rates..."
                  className="w-full bg-paper border border-ink/10 rounded-xl py-3 pl-4 pr-12 text-[14px] focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={`absolute right-2 top-2 p-1.5 rounded-lg transition-colors ${
                    input.trim() && !isLoading ? 'bg-amber text-paper' : 'bg-ink/5 text-ink/30'
                  }`}
                  aria-label="Send chat message"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-2 text-center">
                <span className="font-mono text-[9px] text-ink-3 uppercase tracking-wider">
                  AI-Powered · Real help anytime
                </span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
