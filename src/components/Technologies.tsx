"use client";

import { motion } from "framer-motion";

const technologies = {
  Frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
  Backend: ["Node.js", "Express.js", "Python", "Go"],
  Database: ["MongoDB", "PostgreSQL", "Redis", "ChromaDB"],
  Mobile: ["React Native", "Flutter", "Swift"],
  AI_ML: ["TensorFlow", "LangChain", "OpenAI", "PyTorch", "Ollama"],
  Cloud_DevOps: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Jenkins"],
};

export default function Technologies() {
  return (
    <section className="py-24 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Tech Ecosystem</h2>
          <p className="text-muted-foreground">Powering next-generation applications with the best-in-class tools.</p>
        </div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, items], idx) => (
            <div key={category}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 text-center md:text-left">
                {category.replace("_", " & ")}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                {items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + idx * 0.1 }}
                    className="px-6 py-3 rounded-xl bg-muted border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    <span className="text-lg font-semibold font-display">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
