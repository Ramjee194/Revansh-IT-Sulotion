"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAiWidget from "@/components/FloatingAiWidget";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const blogCategories = ["All Insights", "AI & Automation", "Software Engineering", "Digital Marketing", "Enterprise Cloud"];

const blogPosts = [
  {
    title: "How AI Agentic Workflows Are Revolutionizing Customer Service",
    description: "Traditional chatbots are dead. Discover how agentic workflows, LLMs, and multi-agent coordination are delivering 70%+ automated customer query resolution in production.",
    category: "AI & Automation",
    date: "May 28, 2026",
    readTime: "6 min read",
    author: "Devansh Ramjee",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    featured: true,
    slug: "ai-agentic-workflows-customer-service"
  },
  {
    title: "The Power of RCS & WhatsApp Business API in Modern Marketing",
    description: "Explore how brands are achieving 45%+ click-through rates by moving away from traditional SMS marketing to rich communication services (RCS) and WhatsApp Business automation.",
    category: "Digital Marketing",
    date: "May 24, 2026",
    readTime: "5 min read",
    author: "Amit Sharma",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    featured: false,
    slug: "rcs-whatsapp-business-api-marketing"
  },
  {
    title: "Building Scalable Microservices with Next.js and Cloud Infrastructure",
    description: "An architectural guide to deploying highly available web apps using Next.js, Docker, Kubernetes, and Serverless Edge functions for global clientele.",
    category: "Software Engineering",
    date: "May 19, 2026",
    readTime: "8 min read",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    featured: false,
    slug: "scalable-microservices-nextjs-cloud"
  },
  {
    title: "Maximizing Organic Reach: Essential Technical SEO Strategies for 2026",
    description: "Core Web Vitals, Schema markup, and semantic entities. Learn the advanced technical SEO standards required to rank for highly competitive international search terms.",
    category: "Digital Marketing",
    date: "May 15, 2026",
    readTime: "7 min read",
    author: "Devansh Ramjee",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop",
    featured: false,
    slug: "technical-seo-strategies-2026"
  },
  {
    title: "AWS vs. Google Cloud: Choosing the Right Enterprise Architecture",
    description: "A comparative deep-dive into multi-region cloud setups, database latency, serverless pricing, and enterprise security frameworks for fast-growing companies.",
    category: "Enterprise Cloud",
    date: "May 08, 2026",
    readTime: "9 min read",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    featured: false,
    slug: "aws-vs-gcp-enterprise-architecture"
  },
  {
    title: "Leveraging Social Media Algorithms for Viral B2B Growth",
    description: "A comprehensive playbook on LinkedIn B2B strategies, YouTube video marketing, and short-form video algorithms that command the attention of executive decision-makers.",
    category: "Digital Marketing",
    date: "May 02, 2026",
    readTime: "5 min read",
    author: "Elena Rostova",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    featured: false,
    slug: "social-media-algorithms-b2b-growth"
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Insights");

  const filteredPosts = selectedCategory === "All Insights" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => post.slug !== featuredPost?.slug || selectedCategory !== "All Insights");

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-border bg-slate-50 dark:bg-slate-950/20">
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-[35%] h-[35%] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <BookOpen size={13} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Orbous Insights</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Our <span className="text-primary">Blog &amp; Resources</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Stay updated with executive briefs, architectural analyses, and digital marketing trends compiled by our expert engineering team.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-border bg-white dark:bg-[#030712] sticky top-[64px] z-30 shadow-sm backdrop-blur-md bg-opacity-80 dark:bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto gap-2 md:gap-3 scrollbar-none pb-2 md:pb-0">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                  selectedCategory === category
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                    : "bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 bg-white dark:bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post (Only show on 'All Insights' or if selected category matches featured post category) */}
          {featuredPost && (selectedCategory === "All Insights" || selectedCategory === featuredPost.category) && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20 group bg-slate-50 dark:bg-white/5 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 relative h-80 md:h-[480px] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-2 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                      Featured Article
                    </span>
                  </div>
                </div>
                
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-wider text-primary">
                      <span>{featuredPost.category}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                      <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h2>
                    
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      {featuredPost.description}
                    </p>
                  </div>
                  
                  <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white">
                        <User size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">{featuredPost.author}</p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                          <span className="flex items-center gap-1"><Calendar size={10} /> {featuredPost.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><Clock size={10} /> {featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-primary group-hover:translate-x-1.5 transition-transform">
                      Read Full Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-slate-50 dark:bg-white/5 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40" />
                    
                    <div className="absolute top-6 left-6">
                      <span className="px-3.5 py-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 text-[9px] font-black uppercase tracking-wider text-slate-800 dark:text-white shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-4">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between mt-8">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white shrink-0">
                          <User size={12} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">{post.author}</p>
                          <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">{post.date}</p>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-primary group-hover:text-white transition-all">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10">
              <h3 className="text-xl font-black mb-2 text-slate-800 dark:text-white">No articles found</h3>
              <p className="text-slate-500 font-medium">We are currently writing new publications for this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
            <BookOpen size={28} />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-wider">Subscribe to Orbous Insights</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium max-w-lg mx-auto">
              Get the latest architectural designs, software trends, and growth campaigns delivered directly to your inbox monthly. No spam. Unsubscribe anytime.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your work email"
              required
              className="flex-grow px-5 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:border-primary outline-none text-sm transition-all"
            />
            <button type="submit" className="btn-premium px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <FloatingAiWidget />
    </main>
  );
}
