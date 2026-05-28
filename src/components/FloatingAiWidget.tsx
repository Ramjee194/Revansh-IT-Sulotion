"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2, Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function FloatingAiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hi! Ask me anything about Orbous. I can help estimate your project stack or roadmap!"
    }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!chatInput.trim() || loading) return;

    const currentInput = chatInput;
    setChatInput("");
    setMessages(prev => [...prev, { sender: "user", text: currentInput }]);
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "support",
          prompt: currentInput,
          history: messages
        })
      });

      const data = await response.json();
      setMessages(prev => [...prev, { 
        sender: "ai", 
        text: data.text || "Sorry, I ran into an error. Try again!" 
      }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { 
        sender: "ai", 
        text: "Connection error. Please try again!" 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto flex flex-col items-end">
      
      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="w-[330px] md:w-[380px] h-[480px] bg-[#0c1220] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 border-b border-white/5 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white/10 text-white animate-pulse">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm tracking-wide">Orbous AI Assistant</h4>
                  <p className="text-[9px] text-indigo-200 font-bold uppercase tracking-wider">Powered by AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user" 
                      ? "bg-indigo-600 text-white rounded-tr-none" 
                      : "bg-white/5 border border-white/5 text-gray-200 rounded-tl-none"
                  }`}
                  style={{ whiteSpace: "pre-wrap" }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-4 py-2.5 flex items-center gap-2 text-gray-400 text-xs">
                    <Loader2 className="animate-spin" size={12} />
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Link to full AI Hub */}
            <div className="px-4 py-2 bg-indigo-500/5 border-t border-white/5 flex justify-between items-center text-[10px]">
              <span className="text-gray-400 font-semibold">Want to build roadmaps or tech specs?</span>
              <Link 
                href="/ai-hub" 
                onClick={() => setIsOpen(false)}
                className="text-indigo-400 hover:text-indigo-300 font-black uppercase flex items-center gap-1 transition-colors"
              >
                Open AI Hub <ExternalLink size={10} />
              </Link>
            </div>

            {/* Input Form */}
            <div className="p-3 border-t border-white/5 bg-white/5 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask us anything..."
                className="flex-1 px-3 py-2 rounded-xl bg-black/20 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-xs text-white"
              />
              <button
                onClick={handleSend}
                disabled={!chatInput.trim() || loading}
                className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition-all disabled:opacity-50"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Action Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-xl shadow-indigo-600/35 border border-white/10 cursor-pointer relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="flex items-center justify-center">
              <MessageSquare size={24} className="group-hover:rotate-6 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
}
