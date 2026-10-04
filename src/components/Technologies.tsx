"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiRust,
  SiCplusplus,
  SiPhp,
  SiRuby,
  SiDart,
  SiKotlin,
  SiSwift,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiOpenai,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiDjango,
  SiLaravel,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiLinux,
  SiFlutter,
  SiAndroidstudio,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostman
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

interface TechItem {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "AI & ML" | "Databases" | "Cloud & DevOps" | "Tools & Mobile";
  icon: React.ReactNode;
}

const allTechnologies: TechItem[] = [
  // Languages
  { name: "JavaScript", category: "Languages", icon: <SiJavascript className="w-8 h-8 text-white" /> },
  { name: "TypeScript", category: "Languages", icon: <SiTypescript className="w-8 h-8 text-white" /> },
  { name: "Python", category: "Languages", icon: <SiPython className="w-8 h-8 text-white" /> },
  { name: "Go", category: "Languages", icon: <SiGo className="w-8 h-8 text-white" /> },
  { name: "Rust", category: "Languages", icon: <SiRust className="w-8 h-8 text-white" /> },
  { name: "Java", category: "Languages", icon: <FaJava className="w-8 h-8 text-white" /> },
  { name: "C++", category: "Languages", icon: <SiCplusplus className="w-8 h-8 text-white" /> },
  { name: "PHP", category: "Languages", icon: <SiPhp className="w-8 h-8 text-white" /> },
  { name: "Ruby", category: "Languages", icon: <SiRuby className="w-8 h-8 text-white" /> },
  { name: "Dart", category: "Languages", icon: <SiDart className="w-8 h-8 text-white" /> },
  { name: "Kotlin", category: "Languages", icon: <SiKotlin className="w-8 h-8 text-white" /> },
  { name: "Swift", category: "Languages", icon: <SiSwift className="w-8 h-8 text-white" /> },

  // Frontend
  { name: "React", category: "Frontend", icon: <SiReact className="w-8 h-8 text-white" /> },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
  { name: "Vue.js", category: "Frontend", icon: <SiVuedotjs className="w-8 h-8 text-white" /> },
  { name: "Angular", category: "Frontend", icon: <SiAngular className="w-8 h-8 text-white" /> },
  { name: "Svelte", category: "Frontend", icon: <SiSvelte className="w-8 h-8 text-white" /> },
  { name: "HTML5", category: "Frontend", icon: <SiHtml5 className="w-8 h-8 text-white" /> },
  { name: "CSS3", category: "Frontend", icon: <SiCss className="w-8 h-8 text-white" /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="w-8 h-8 text-white" /> },

  // AI & ML
  { name: "PyTorch", category: "AI & ML", icon: <SiPytorch className="w-8 h-8 text-white" /> },
  { name: "TensorFlow", category: "AI & ML", icon: <SiTensorflow className="w-8 h-8 text-white" /> },
  { name: "OpenCV", category: "AI & ML", icon: <SiOpencv className="w-8 h-8 text-white" /> },
  { name: "OpenAI", category: "AI & ML", icon: <SiOpenai className="w-8 h-8 text-white" /> },

  // Backend
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs className="w-8 h-8 text-white" /> },
  { name: "Express", category: "Backend", icon: <SiExpress className="w-8 h-8 text-white" /> },
  { name: "NestJS", category: "Backend", icon: <SiNestjs className="w-8 h-8 text-white" /> },
  { name: "FastAPI", category: "Backend", icon: <SiFastapi className="w-8 h-8 text-white" /> },
  { name: "Django", category: "Backend", icon: <SiDjango className="w-8 h-8 text-white" /> },
  { name: "Laravel", category: "Backend", icon: <SiLaravel className="w-8 h-8 text-white" /> },
  { name: "GraphQL", category: "Backend", icon: <SiGraphql className="w-8 h-8 text-white" /> },

  // Databases
  { name: "PostgreSQL", category: "Databases", icon: <SiPostgresql className="w-8 h-8 text-white" /> },
  { name: "MongoDB", category: "Databases", icon: <SiMongodb className="w-8 h-8 text-white" /> },
  { name: "MySQL", category: "Databases", icon: <SiMysql className="w-8 h-8 text-white" /> },
  { name: "Redis", category: "Databases", icon: <SiRedis className="w-8 h-8 text-white" /> },
  { name: "Firebase", category: "Databases", icon: <SiFirebase className="w-8 h-8 text-white" /> },
  { name: "Supabase", category: "Databases", icon: <SiSupabase className="w-8 h-8 text-white" /> },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps", icon: <FaAws className="w-8 h-8 text-white" /> },
  { name: "Google Cloud", category: "Cloud & DevOps", icon: <SiGooglecloud className="w-8 h-8 text-white" /> },
  { name: "Azure", category: "Cloud & DevOps", icon: <VscAzure className="w-8 h-8 text-white" /> },
  { name: "Docker", category: "Cloud & DevOps", icon: <SiDocker className="w-8 h-8 text-white" /> },
  { name: "Kubernetes", category: "Cloud & DevOps", icon: <SiKubernetes className="w-8 h-8 text-white" /> },
  { name: "Terraform", category: "Cloud & DevOps", icon: <SiTerraform className="w-8 h-8 text-white" /> },
  { name: "Linux", category: "Cloud & DevOps", icon: <SiLinux className="w-8 h-8 text-white" /> },

  // Tools & Mobile
  { name: "Flutter", category: "Tools & Mobile", icon: <SiFlutter className="w-8 h-8 text-white" /> },
  { name: "Android Studio", category: "Tools & Mobile", icon: <SiAndroidstudio className="w-8 h-8 text-white" /> },
  { name: "Figma", category: "Tools & Mobile", icon: <SiFigma className="w-8 h-8 text-white" /> },
  { name: "Git", category: "Tools & Mobile", icon: <SiGit className="w-8 h-8 text-white" /> },
  { name: "GitHub", category: "Tools & Mobile", icon: <SiGithub className="w-8 h-8 text-white" /> },
  { name: "Postman", category: "Tools & Mobile", icon: <SiPostman className="w-8 h-8 text-white" /> },
];

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "AI & ML",
  "Databases",
  "Cloud & DevOps",
  "Tools & Mobile"
] as const;

type Category = typeof categories[number];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredTechnologies = activeCategory === "All"
    ? allTechnologies
    : allTechnologies.filter((t) => t.category === activeCategory);

  return (
    <section id="technologies" className="py-24 md:py-32 border-y border-border bg-[#02120D]/60 relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#064E3B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
            Modern Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight">
            Our Tech <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            From modern languages and reactive frontends to distributed backends, AI models, and secure cloud pipelines.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count = cat === "All"
              ? allTechnologies.length
              : allTechnologies.filter((t) => t.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-[#F8E7C9] text-[#064E3B] shadow-md border border-[#E5CFA6]"
                    : "bg-[#042017]/80 hover:bg-[#062F22] text-[#F8E7C9]/70 hover:text-[#F8E7C9] border border-[#F8E7C9]/15"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-[#064E3B]/15 text-[#064E3B]" : "bg-black/30 text-[#F8E7C9]/60"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Technologies 5-Column Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4.5"
        >
          <AnimatePresence>
            {filteredTechnologies.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-[#031A13]/90 border border-[#F8E7C9]/15 hover:border-[#F8E7C9]/45 hover:bg-[#05261C] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-black/40"
              >
                {/* Tech Logo - Strictly White as requested */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>

                {/* Tech Label */}
                <span className="mt-3 text-[11px] sm:text-xs font-semibold text-white/80 group-hover:text-white transition-colors text-center tracking-wide">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Capability summary */}
        <div className="mt-14 text-center">
          <p className="text-xs text-muted-foreground">
            Have a custom architecture or stack in mind? Our engineering team works across all standard enterprise ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
}
