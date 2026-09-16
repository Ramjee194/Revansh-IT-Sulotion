"use client";

import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAiWidget from "@/components/FloatingAiWidget";
import { ArrowLeft, Calendar, Clock, User, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How AI Agentic Workflows Are Revolutionizing Customer Service",
    description: "Traditional chatbots are dead. Discover how agentic workflows, LLMs, and multi-agent coordination are delivering 70%+ automated customer query resolution in production.",
    category: "AI & Automation",
    date: "May 28, 2026",
    readTime: "6 min read",
    author: "Devansh Ramjee",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    slug: "ai-agentic-workflows-customer-service",
    content: `
      <p class="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
        For the last decade, customer support automation has been defined by decision-tree chatbots. These systems were brittle, frustrating to users, and limited to answering pre-scripted questions. Today, a paradigm shift is occurring: the rise of <strong>Agentic Workflows</strong>.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">What is an Agentic Workflow?</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        Unlike a simple prompt-and-response model, agentic workflows allow large language models (LLMs) to function as autonomous agents. These agents can plan multi-step actions, select tools (like querying databases or invoking APIs), and evaluate their own outputs.
      </p>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        In a customer support environment, this means the agent doesn't just match keywords. It understands the user's intent, retrieves their account status from the database, checks shipping logs, and determines the exact package location—all without human intervention.
      </p>
      <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-slate-800 dark:text-slate-200 font-medium">
        "By allowing the AI model to execute loops, verify facts, and correct its own errors, we achieve a success rate that was previously impossible."
      </blockquote>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">Production Results</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        At Orbous, we deployed an agentic support mesh for a global shipping company. Within 30 days, the platform successfully resolved 72% of incoming support requests without routing to a human representative. This led to a drastic reduction in customer churn and freed up the human support desk to handle complex enterprise account negotiations.
      </p>
    `
  },
  {
    title: "The Power of RCS & WhatsApp Business API in Modern Marketing",
    description: "Explore how brands are achieving 45%+ click-through rates by moving away from traditional SMS marketing to rich communication services (RCS) and WhatsApp Business automation.",
    category: "Digital Marketing",
    date: "May 24, 2026",
    readTime: "5 min read",
    author: "Amit Sharma",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    slug: "rcs-whatsapp-business-api-marketing",
    content: `
      <p class="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
        Traditional text messaging is losing its grip. Click-through rates on plain SMS campaigns have steadily declined over the past five years. Entering the limelight are two powerful channels: Rich Communication Services (RCS) and the WhatsApp Business API.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">The Visual Advantage</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        RCS and WhatsApp allow businesses to send rich media directly to a customer's default messaging inbox. This includes high-resolution images, video cards, interactive buttons, and verified business badges. It elevates the text thread from a plain message to an application-like interface.
      </p>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        Furthermore, verified sender badges immediately establish trust. Customers are far more likely to engage with a brand message that carries a green tick than an unknown shortcode number.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">Automating Conversational Commerce</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        The true power lies in automated back-and-forth communication. When a customer receives a promotional offer, they can tap a button to check sizes, choose a delivery date, and complete their purchase—all within the messaging app. This frictionless flow is driving conversion rates upwards of 45% for our retail clients.
      </p>
    `
  },
  {
    title: "Building Scalable Microservices with Next.js and Cloud Infrastructure",
    description: "An architectural guide to deploying highly available web apps using Next.js, Docker, Kubernetes, and Serverless Edge functions for global clientele.",
    category: "Software Engineering",
    date: "May 19, 2026",
    readTime: "8 min read",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    slug: "scalable-microservices-nextjs-cloud",
    content: `
      <p class="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
        Modern enterprise applications require high availability, global scale, and microsecond response times. Building such systems necessitates combining advanced frontend frameworks like Next.js with robust, isolated cloud microservices.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">Hybrid Rendering & Edge Routing</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        Next.js enables a hybrid rendering model where static marketing pages are served from the global edge CDN, and dynamic app dashboards are rendered on-demand. By utilizing middleware running on Edge runtime, we inspect requests, verify tokens, and serve targeted content close to the client.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">Containerization & Service Mesh</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        For heavy computational tasks (like billing processing, database queries, and AI generation), we decouple logic into isolated Go and Node.js microservices. These are built into lightweight Docker containers and orchestrated via Kubernetes. A service mesh facilitates internal secure communication and load balancing, keeping our systems online even under massive holiday traffic.
      </p>
    `
  },
  {
    title: "Maximizing Organic Reach: Essential Technical SEO Strategies for 2026",
    description: "Core Web Vitals, Schema markup, and semantic entities. Learn the advanced technical SEO standards required to rank for highly competitive international search terms.",
    category: "Digital Marketing",
    date: "May 15, 2026",
    readTime: "7 min read",
    author: "Devansh Ramjee",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop",
    slug: "technical-seo-strategies-2026",
    content: `
      <p class="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
        Search engines have evolved beyond simple keyword matching. In 2026, search algorithms analyze semantic context, authority entities, and absolute user experience. If your technical SEO foundation is weak, your organic visibility will remain zero.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">Core Web Vitals & Page Experience</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        Search engines penalize slow, unstable websites. Focus on optimizing the Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS). This involves lazy-loading non-critical assets, prioritizing CSS rendering, and using modern image formats like AVIF.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">Semantic Schema Markup</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        Search engines need to understand the structured relationships on your page. By injecting JSON-LD schema markup, you inform crawlers exactly who wrote the article, what organization published it, and how your products are structured. This generates rich snippets in search results, increasing click-through rates by up to 30%.
      </p>
    `
  },
  {
    title: "AWS vs. Google Cloud: Choosing the Right Enterprise Architecture",
    description: "A comparative deep-dive into multi-region cloud setups, database latency, serverless pricing, and enterprise security frameworks for fast-growing companies.",
    category: "Enterprise Cloud",
    date: "May 08, 2026",
    readTime: "9 min read",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    slug: "aws-vs-gcp-enterprise-architecture",
    content: `
      <p class="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
        Choosing a cloud provider is one of the most critical decisions for a CTO. AWS and Google Cloud both offer comprehensive suites, but their engineering philosophies, pricing models, and service performance vary significantly.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">Compute and Serverless Execution</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        AWS Lambda is the industry standard for serverless execution, but Google Cloud Functions offers seamless integration with Google's global private network. For containerized applications, Google Cloud Run is exceptionally developer-friendly and handles cold-starts faster than AWS ECS Fargate.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">Security & Global Compliance</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        Both providers offer robust Identity & Access Management (IAM) systems. AWS is favored by large institutions due to its historical compliance certifications, while Google Cloud is praised for its global VPC network security and ease of setup. Ultimately, the best choice depends on your team's existing skill sets and current system requirements.
      </p>
    `
  },
  {
    title: "Leveraging Social Media Algorithms for Viral B2B Growth",
    description: "A comprehensive playbook on LinkedIn B2B strategies, YouTube video marketing, and short-form video algorithms that command the attention of executive decision-makers.",
    category: "Digital Marketing",
    date: "May 02, 2026",
    readTime: "5 min read",
    author: "Elena Rostova",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    slug: "social-media-algorithms-b2b-growth",
    content: `
      <p class="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
        B2B marketing does not have to be boring. Executives and decision-makers consume short-form video, scrolling through professional networks daily. Understanding the algorithms of these platforms is the secret to inorganic organic growth.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">The LinkedIn Engagement Loop</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        LinkedIn rewards posts that generate deep discussion. The algorithm measures dwell time—how long users stop to read your post—and prioritized text comments over simple likes. Sharing authentic engineering logs, team accomplishments, and industry case studies will consistently yield high reach.
      </p>
      <h3 class="text-2xl font-black mt-10 mb-4 uppercase tracking-wide">YouTube and Short-form Video</h3>
      <p class="leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
        Short-form video is a powerful top-of-funnel capture. A 60-second video explaining a complex cloud architecture problem can direct viewers to a longer YouTube breakdown. That video, in turn, converts the viewer into an organic lead for your enterprise solution.
      </p>
    `
  }
];

interface BlogDetailsProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailsPage({ params }: BlogDetailsProps) {
  const resolvedParams = use(params);
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center py-32 px-6">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-wider">Article Not Found</h2>
          <p className="text-slate-500 font-medium mb-8">The requested publication does not exist or has been moved.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-primary hover:-translate-x-1 transition-transform">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <article className="pt-36 pb-24 md:pt-44 max-w-4xl mx-auto px-6 relative z-10">
        {/* Navigation */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-black text-xs uppercase tracking-widest mb-10 transition-colors">
          <ArrowLeft size={14} /> Back to Insights
        </Link>

        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black uppercase tracking-wider text-primary">
            <Sparkles size={12} />
            <span>{post.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-wider pt-4 border-t border-slate-200 dark:border-white/10">
            <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full h-80 md:h-[480px] rounded-3xl overflow-hidden mb-16 shadow-xl border border-slate-200 dark:border-white/10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-medium"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <Footer />
      <FloatingAiWidget />
    </main>
  );
}
