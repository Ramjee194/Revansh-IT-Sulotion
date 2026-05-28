"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  MessageSquare, 
  Lightbulb, 
  Map, 
  Send, 
  Sparkles, 
  Loader2, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  CheckCircle,
  HelpCircle,
  AlertCircle
} from "lucide-react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

interface RoadmapStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
  keySkills: string[];
  resources: string[];
}

interface RoadmapData {
  topic: string;
  description: string;
  steps: RoadmapStep[];
}

export default function AiHubPage() {
  const [activeTab, setActiveTab] = useState<"support" | "consultant" | "roadmap">("support");
  const [loading, setLoading] = useState(false);
  const [offlineNotice, setOfflineNotice] = useState(false);

  // Support Chat State
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I am your Orbous AI Support Bot. How can I help you build, market, or scale your software ideas today?"
    }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Consultant State
  const [projectIdea, setProjectIdea] = useState("");
  const [consultationResult, setConsultationResult] = useState<string | null>(null);

  // Roadmap State
  const [roadmapTopic, setRoadmapTopic] = useState("");
  const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSupportSend = async (textToSend?: string) => {
    const input = textToSend || chatInput;
    if (!input.trim() || loading) return;

    if (!textToSend) setChatInput("");
    setChatMessages(prev => [...prev, { sender: "user", text: input }]);
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "support",
          prompt: input,
          history: chatMessages
        })
      });

      const data = await response.json();
      if (data.offline) setOfflineNotice(true);
      
      setChatMessages(prev => [...prev, { 
        sender: "ai", 
        text: data.text || "Sorry, I encountered an issue processing that. Please try again." 
      }]);
    } catch (err) {
      console.error(err);
      setChatMessages(prev => [...prev, { 
        sender: "ai", 
        text: "I am having trouble connecting to the server. Please check your connection." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleConsultantSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectIdea.trim() || loading) return;

    setLoading(true);
    setConsultationResult(null);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "consultant",
          prompt: projectIdea
        })
      });

      const data = await response.json();
      if (data.offline) setOfflineNotice(true);
      setConsultationResult(data.text);
    } catch (err) {
      console.error(err);
      setConsultationResult("Failed to generate consultation details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRoadmapSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!roadmapTopic.trim() || loading) return;

    setLoading(true);
    setRoadmapData(null);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "roadmap",
          prompt: roadmapTopic
        })
      });

      const data = await response.json();
      if (data.offline) setOfflineNotice(true);
      if (data.roadmap) {
        setRoadmapData(data.roadmap);
        setSelectedStepIndex(0);
      } else {
        throw new Error("No roadmap returned");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    "What services does Orbous offer?",
    "What is your tech stack?",
    "How do I request a custom web app?",
    "What is your Engineering Standard?"
  ];

  return (
    <main className="min-h-screen bg-[#090d16] text-white selection:bg-indigo-500/35 overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-44 pb-12 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles size={14} className="text-indigo-400 animate-spin" style={{ animationDuration: '3s' }} />
            Orbous AI Solutions Hub
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Build Smarter with <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Get client support, project architectures, timelines, and customized topic roadmaps instantly.
          </motion.p>
        </div>
      </section>

      {/* Tabs & Working Arena */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Offline Notice Banner */}
        <AnimatePresence>
          {offlineNotice && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-start gap-3 max-w-3xl mx-auto text-xs md:text-sm"
            >
              <AlertCircle className="shrink-0 mt-0.5" size={18} />
              <div>
                <span className="font-bold">Offline Demo Mode:</span> Responses are currently generated locally using high-fidelity simulations. Add a <code className="bg-black/30 px-1 py-0.5 rounded border border-white/5">GEMINI_API_KEY</code> in <code className="bg-black/30 px-1 py-0.5 rounded border border-white/5">.env.local</code> to enable full, live AI features.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {[
              { id: "support", label: "AI Support", icon: <MessageSquare size={16} /> },
              { id: "consultant", label: "Tech Architect", icon: <Lightbulb size={16} /> },
              { id: "roadmap", label: "Roadmap Gen", icon: <Map size={16} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* PANEL 1: AI SUPPORT CHAT */}
            {activeTab === "support" && (
              <motion.div
                key="support"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-[600px]"
              >
                {/* Chat Panel Header */}
                <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
                    <div>
                      <h4 className="font-bold text-sm">Orbous AI Support Agent</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Online and responsive</p>
                    </div>
                  </div>
                </div>

                {/* Messages Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-indigo-600 text-white rounded-tr-none"
                            : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-none"
                        }`}
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-5 py-3 flex items-center gap-2 text-gray-400 text-xs">
                        <Loader2 className="animate-spin" size={14} />
                        AI is thinking...
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Preset suggestions */}
                <div className="px-6 py-2 border-t border-white/5 bg-white/2 flex flex-wrap gap-2">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSupportSend(q)}
                      disabled={loading}
                      className="text-[10px] md:text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-gray-300 disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/5 bg-white/5 flex gap-3">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSupportSend()}
                    placeholder="Ask about our SMS Services, web design templates, pricing, or custom features..."
                    className="flex-1 px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-sm text-white"
                  />
                  <button
                    onClick={() => handleSupportSend()}
                    disabled={!chatInput.trim() || loading}
                    className="px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition-all disabled:opacity-50"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* PANEL 2: AI TECH ARCHITECT */}
            {activeTab === "consultant" && (
              <motion.div
                key="consultant"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">Request Technical Architecture & Budget Estimation</h3>
                  <p className="text-gray-400 text-sm">
                    Enter details about your app idea, business model, or software vision. The AI will output a recommended stack, milestones, and structural architecture.
                  </p>
                </div>

                <form onSubmit={handleConsultantSubmit} className="space-y-4">
                  <textarea
                    rows={4}
                    value={projectIdea}
                    onChange={(e) => setProjectIdea(e.target.value)}
                    placeholder="Describe your project (e.g. 'I want to build an e-commerce platform for selling organic spices with dynamic user dashboards, inventory logs, and automatic WhatsApp order updates...')"
                    className="w-full p-4 rounded-2xl bg-black/20 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-sm"
                    required
                  />
                  <button
                    type="submit"
                    disabled={!projectIdea.trim() || loading}
                    className="btn-premium py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-bold tracking-wider uppercase text-xs disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="animate-spin" size={14} /> : <Lightbulb size={14} />}
                    Generate Tech Architecture
                  </button>
                </form>

                {/* Consultation Result Display */}
                {consultationResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4"
                  >
                    <div className="flex items-center gap-2 text-indigo-400 font-bold border-b border-white/5 pb-3">
                      <Sparkles size={16} />
                      Architectural Blueprint
                    </div>
                    <div 
                      className="prose prose-invert max-w-none text-sm text-gray-300 space-y-4 leading-relaxed"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {consultationResult}
                    </div>

                    <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
                      <p className="text-xs text-gray-500">
                        This is an AI estimation. Ready to turn this layout into fully coded production software?
                      </p>
                      <a 
                        href="#contact" 
                        className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors text-black font-black text-xs uppercase tracking-wider"
                      >
                        Hire Orbous Engineers
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* PANEL 3: INTERACTIVE ROADMAP GENERATOR */}
            {activeTab === "roadmap" && (
              <motion.div
                key="roadmap"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">Create Custom Learning & Engineering Roadmaps</h3>
                  <p className="text-gray-400 text-sm">
                    Enter any technical skill or objective (e.g. 'Next.js 15 Master', 'SaaS Deployments', 'AI Integrations'). The AI will generate a structured timeline guide.
                  </p>
                </div>

                <form onSubmit={handleRoadmapSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={roadmapTopic}
                    onChange={(e) => setRoadmapTopic(e.target.value)}
                    placeholder="e.g. Frontend Web Developer, Docker & DevOps, Python for Data Science"
                    className="flex-1 px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all text-sm"
                    required
                  />
                  <button
                    type="submit"
                    disabled={!roadmapTopic.trim() || loading}
                    className="btn-premium px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold tracking-wider uppercase text-xs disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="animate-spin" size={14} /> : <Map size={14} />}
                    Build Roadmap
                  </button>
                </form>

                {/* Interactive Roadmap Layout */}
                {roadmapData && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4"
                  >
                    {/* Roadmap Visual Stepper (Col: 5) */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h4 className="font-bold text-sm text-indigo-400">{roadmapData.topic}</h4>
                        <p className="text-xs text-gray-400 mt-1">{roadmapData.description}</p>
                      </div>

                      {/* Stepper Nodes */}
                      <div className="relative pl-4 border-l border-white/10 space-y-6">
                        {roadmapData.steps.map((step, idx) => {
                          const isSelected = selectedStepIndex === idx;
                          return (
                            <div 
                              key={idx} 
                              onClick={() => setSelectedStepIndex(idx)}
                              className="relative cursor-pointer group"
                            >
                              {/* Node Circle */}
                              <div className={`absolute -left-[25px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                                isSelected 
                                  ? "bg-indigo-500 border-indigo-400 scale-125 shadow-lg shadow-indigo-500/50" 
                                  : "bg-[#090d16] border-white/20 group-hover:border-white/50"
                              }`} />

                              {/* Content Card */}
                              <div className={`p-4 rounded-2xl border transition-all ${
                                isSelected 
                                  ? "bg-indigo-500/10 border-indigo-500/40" 
                                  : "bg-white/2 border-white/5 hover:border-white/10 hover:bg-white/5"
                              }`}>
                                <span className="text-[10px] font-black uppercase text-indigo-400 tracking-wider">
                                  {step.phase}
                                </span>
                                <h5 className="font-bold text-sm text-white mt-1 flex items-center justify-between">
                                  {step.title}
                                  <ChevronRight size={14} className={`transition-transform duration-300 ${isSelected ? "rotate-90 text-indigo-400" : "text-gray-600"}`} />
                                </h5>
                                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-semibold mt-2">
                                  <Clock size={10} />
                                  Duration: {step.duration}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step Expansion Panel (Col: 7) */}
                    <div className="lg:col-span-7 bg-white/2 border border-white/5 rounded-3xl p-6 space-y-6 self-start">
                      <div className="flex justify-between items-start border-b border-white/5 pb-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                            {roadmapData.steps[selectedStepIndex]?.phase}
                          </span>
                          <h4 className="text-xl font-bold text-white mt-1">
                            {roadmapData.steps[selectedStepIndex]?.title}
                          </h4>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                          <Clock size={12} className="text-indigo-400" />
                          {roadmapData.steps[selectedStepIndex]?.duration}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500">Milestone Focus</h5>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {roadmapData.steps[selectedStepIndex]?.description}
                        </p>
                      </div>

                      {/* Key Skills */}
                      <div className="space-y-3">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500">Key Skills to Master</h5>
                        <div className="flex flex-wrap gap-2">
                          {roadmapData.steps[selectedStepIndex]?.keySkills.map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="px-2.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 font-semibold flex items-center gap-1.5"
                            >
                              <CheckCircle size={10} className="text-indigo-400" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Learning Resources */}
                      <div className="space-y-3 pt-2">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500">Suggested Resources</h5>
                        <div className="space-y-2">
                          {roadmapData.steps[selectedStepIndex]?.resources.map((res, rIdx) => (
                            <div 
                              key={rIdx}
                              className="flex items-center gap-2 p-2.5 rounded-xl bg-black/20 border border-white/5 text-xs text-gray-300"
                            >
                              <BookOpen size={12} className="text-amber-500" />
                              <span className="font-semibold">{res}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
