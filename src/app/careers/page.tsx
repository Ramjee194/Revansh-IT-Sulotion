"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Briefcase,
  MapPin,
  Clock,
  IndianRupee,
  Search,
  ArrowRight,
  CheckCircle,
  X,
  Send,
  Users,
  Code2,
  Cpu,
  Shield,
  Laptop,
  UploadCloud,
  FileText,
  Trash2,
  Paperclip
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  experience: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  tags: string[];
}

const JOBS_DATA: JobOpening[] = [
  {
    id: "fullstack-developer",
    title: "Full Stack Developer (Next.js & Node.js)",
    department: "Engineering",
    experience: "2 - 5 Years",
    type: "Full-Time",
    salary: "₹8 - 18 LPA",
    description: "Looking for an experienced full-stack developer to build and maintain high-performance web applications, client portals, and APIs.",
    responsibilities: [
      "Develop responsive and modern frontend interfaces using Next.js and TypeScript.",
      "Build secure RESTful APIs and backend microservices using Node.js.",
      "Work with relational and NoSQL databases like PostgreSQL and MongoDB."
    ],
    requirements: [
      "Solid experience with React, Next.js, and Node.js.",
      "Good understanding of REST APIs, database queries, and version control (Git).",
      "Ability to write clean, maintainable, and well-tested code."
    ],
    tags: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"]
  },
  {
    id: "frontend-developer",
    title: "Frontend Engineer (React / Next.js)",
    department: "Engineering",
    experience: "1 - 4 Years",
    type: "Full-Time",
    salary: "₹6 - 14 LPA",
    description: "Join our frontend engineering team to craft clean, fast, and accessible user interfaces for web platforms and dashboards.",
    responsibilities: [
      "Translate Figma design mockups into pixel-perfect responsive web pages.",
      "Optimize frontend performance and page load speed for SEO and user experience.",
      "Collaborate with backend developers to integrate APIs seamlessly."
    ],
    requirements: [
      "Strong proficiency in HTML5, CSS3, modern JavaScript/TypeScript, and React.",
      "Experience with Tailwind CSS and component-driven architecture.",
      "Attention to detail regarding UI responsiveness and typography."
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Figma"]
  },
  {
    id: "backend-developer-java",
    title: "Backend Specialist (Java / Spring Boot)",
    department: "Engineering",
    experience: "3 - 6 Years",
    type: "Full-Time",
    salary: "₹10 - 20 LPA",
    description: "Responsible for designing and maintaining core backend services, transaction pipelines, and database integrations.",
    responsibilities: [
      "Develop robust backend services and microservices with Java and Spring Boot.",
      "Ensure high availability, low latency, and secure data storage.",
      "Participate in code reviews, bug fixes, and system improvements."
    ],
    requirements: [
      "Hands-on experience in Java, Spring Boot, and Hibernate.",
      "Knowledge of SQL databases, Redis caching, and messaging queues (Kafka/RabbitMQ).",
      "Understanding of cloud deployment and Docker containers."
    ],
    tags: ["Java", "Spring Boot", "MySQL", "Kafka", "Docker"]
  },
  {
    id: "uiux-designer",
    title: "UI / UX Designer",
    department: "Design",
    experience: "2 - 5 Years",
    type: "Full-Time",
    salary: "₹7 - 15 LPA",
    description: "Create thoughtful and clean digital user interfaces that prioritize usability, brand coherence, and real user experience.",
    responsibilities: [
      "Create wireframes, prototypes, and final UI designs for web and mobile products.",
      "Maintain our UI design system and component libraries in Figma.",
      "Work closely with developers to ensure accurate visual implementation."
    ],
    requirements: [
      "Proficient in Figma with an authentic portfolio showing real product design.",
      "Strong grasp of grid systems, visual hierarchy, typography, and spacing.",
      "Basic understanding of frontend implementation constraints."
    ],
    tags: ["Figma", "UI Design", "UX Research", "Wireframing", "Design Systems"]
  },
  {
    id: "cloud-devops-engineer",
    title: "DevOps & Cloud Engineer",
    department: "Infrastructure",
    experience: "2 - 5 Years",
    type: "Full-Time",
    salary: "₹9 - 18 LPA",
    description: "Manage and optimize cloud infrastructure, server deployment pipelines, automated monitoring, and security safeguards.",
    responsibilities: [
      "Configure and monitor cloud servers on AWS and DigitalOcean.",
      "Set up automated CI/CD pipelines with GitHub Actions and Docker.",
      "Maintain server security, SSL certificates, backups, and uptime monitoring."
    ],
    requirements: [
      "Experience with Linux server administration, Docker, and AWS services.",
      "Familiarity with CI/CD tools, Nginx web server, and monitoring tools.",
      "Good troubleshooting skills for production incidents."
    ],
    tags: ["AWS", "Docker", "Linux", "CI/CD", "Nginx"]
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive (IT Services)",
    department: "Sales",
    experience: "1 - 4 Years",
    type: "Full-Time",
    salary: "₹5 - 12 LPA + Incentives",
    description: "Drive new client partnerships for custom software, web development, and digital enterprise solutions.",
    responsibilities: [
      "Identify prospective enterprise clients and reach out with tailored solutions.",
      "Coordinate client discovery calls with our technical team.",
      "Prepare project proposals and follow up to contract completion."
    ],
    requirements: [
      "Prior experience in B2B IT services or software sales.",
      "Excellent communication and relationship-building skills.",
      "Self-driven attitude with consistent follow-through."
    ],
    tags: ["B2B Sales", "Client Relations", "IT Services", "Proposals"]
  }
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyState, setApplyState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [resumeFile, setResumeFile] = useState<{ name: string; size: string; base64: string } | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const departments = ["All", "Engineering", "Design", "Infrastructure", "Sales"];

  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Allowed extensions
    const validExtensions = [".pdf", ".doc", ".docx"];
    const fileExt = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (!validExtensions.includes(fileExt)) {
      setFileError("Please upload a valid PDF or Word document (.pdf, .doc, .docx).");
      return;
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size exceeds 5MB limit. Please upload a smaller file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      const sizeFormatted = file.size < 1024 * 1024 
        ? `${(file.size / 1024).toFixed(1)} KB` 
        : `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
      
      setResumeFile({
        name: file.name,
        size: sizeFormatted,
        base64: base64String.split(",")[1] || base64String
      });
    };
    reader.onerror = () => {
      setFileError("Failed to read file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resumeFile) {
      setFileError("Please upload your resume / CV file before submitting.");
      return;
    }

    setApplyState("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          subject: `Job Application: ${selectedJob?.title || "General Application"}`,
          message: `Applicant Details:\n- Role: ${selectedJob?.title}\n- Experience: ${data.experience}\n- Location: ${data.location || "Not specified"}\n- Notice Period: ${data.noticePeriod || "Not specified"}\n- Portfolio/LinkedIn: ${data.linkedin}\n- Resume Attached: ${resumeFile.name} (${resumeFile.size})\n- Cover Note:\n${data.coverNote || "None"}`,
          service: "Careers / Hiring",
          attachment: {
            filename: resumeFile.name,
            content: resumeFile.base64
          }
        })
      });

      if (res.ok) {
        setApplyState("success");
      } else {
        setApplyState("error");
      }
    } catch (err) {
      setApplyState("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border bg-muted/10 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#F8E7C9] px-3.5 py-1 rounded-full bg-[#064E3B]/10 dark:bg-[#F8E7C9]/10 border border-[#064E3B]/20 dark:border-[#F8E7C9]/20 inline-block">
            We Are Hiring • DLF Cyber City, Gurgaon
          </span>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            Careers at <span className="text-[#064E3B] dark:text-[#F8E7C9]">Orbous</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are looking for dedicated developers, designers, and problem solvers who take pride in writing clean code and building practical software products.
          </p>
        </motion.div>
      </section>

      {/* Culture Summary */}
      <section className="py-14 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code2, title: "Clean Code Culture", desc: "We believe in readable, maintainable software and practical engineering standards." },
              { icon: Laptop, title: "Modern Equipment", desc: "Work on fast hardware setups and modern tools to keep your development friction-free." },
              { icon: Users, title: "Team Collaboration", desc: "Open communication, supportive peer reviews, and direct project ownership." },
              { icon: Shield, title: "Fair Compensation", desc: "Competitive market salaries, timely appraisals, and health insurance coverage." },
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-[#064E3B]/40 dark:hover:border-[#F8E7C9]/40 transition-all shadow-sm"
                >
                  <ItemIcon size={24} className="text-[#064E3B] dark:text-[#F8E7C9] mb-3" />
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                Open Positions
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Showing {filteredJobs.length} active opportunities.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search roles or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-border bg-card text-xs focus:border-[#064E3B] dark:focus:border-[#F8E7C9] outline-none transition-all"
              />
            </div>
          </motion.div>

          {/* Department Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedDept === dept
                    ? "bg-[#064E3B] text-[#F8E7C9] dark:bg-[#F8E7C9] dark:text-[#064E3B] shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Job Openings Grid: 1 col on mobile, 2 cols on desktop */}
          <div>
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center rounded-2xl bg-card border border-border"
              >
                <Briefcase size={36} className="mx-auto text-muted-foreground opacity-40 mb-2" />
                <h4 className="text-base font-bold">No positions found</h4>
                <p className="text-xs text-muted-foreground mt-1">Try resetting the search filters.</p>
                <button
                  onClick={() => {
                    setSelectedDept("All");
                    setSearchQuery("");
                  }}
                  className="mt-3 px-4 py-2 rounded-lg bg-[#F8E7C9] text-[#064E3B] text-xs font-bold"
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
                {filteredJobs.map((job, idx) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.45,
                      delay: (idx % 2) * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative p-6 sm:p-7 rounded-2xl bg-card border border-border/80 hover:border-[#064E3B]/60 dark:hover:border-[#F8E7C9]/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#064E3B]/5 dark:hover:shadow-[#F8E7C9]/5 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Department & Type header */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#064E3B]/10 dark:bg-[#F8E7C9]/15 text-[#064E3B] dark:text-[#F8E7C9] border border-[#064E3B]/20 dark:border-[#F8E7C9]/20">
                          {job.department}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {job.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold font-display group-hover:text-[#064E3B] dark:group-hover:text-[#F8E7C9] transition-colors leading-snug">
                        {job.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {job.description}
                      </p>

                      {/* Meta badges: Experience & Salary */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-1">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/60">
                          <Clock size={13} className="text-[#064E3B] dark:text-[#F8E7C9]" />
                          <span>{job.experience}</span>
                        </span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/60 font-semibold text-foreground">
                          <IndianRupee size={13} className="text-[#064E3B] dark:text-[#F8E7C9]" />
                          <span>{job.salary}</span>
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-muted/50 text-muted-foreground border border-border/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-5 mt-4 border-t border-border/60 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground hover:underline transition-colors cursor-pointer"
                      >
                        View Details &rarr;
                      </button>

                      <button
                        onClick={() => {
                          setSelectedJob(job);
                          setIsApplyModalOpen(true);
                          setApplyState("idle");
                        }}
                        className="px-4 py-2 rounded-xl bg-[#F8E7C9] hover:bg-[#ECD3A7] text-[#064E3B] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                      >
                        <span>Apply Now</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Role Details Modal */}
      <AnimatePresence>
        {selectedJob && !isApplyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              className="bg-card w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border p-6 shadow-xl relative"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>

              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-muted">
                {selectedJob.department}
              </span>
              <h2 className="text-xl font-bold font-display mt-2">{selectedJob.title}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {selectedJob.salary} &bull; {selectedJob.experience} &bull; {selectedJob.type}
              </p>

              <div className="mt-5 space-y-4 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold mb-1">About the Role</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h4 className="font-bold mb-1">Key Responsibilities</h4>
                  <ul className="space-y-1.5">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-1">Requirements</h4>
                  <ul className="space-y-1.5">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border flex gap-3">
                  <button
                    onClick={() => setIsApplyModalOpen(true)}
                    className="w-full py-2.5 rounded-lg bg-[#F8E7C9] hover:bg-[#ECD3A7] text-[#064E3B] font-bold text-xs uppercase tracking-wider"
                  >
                    Apply for this Position
                  </button>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2.5 rounded-lg border border-border text-xs font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isApplyModalOpen && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              className="bg-card w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border p-6 shadow-xl relative"
            >
              <button
                onClick={() => {
                  setIsApplyModalOpen(false);
                  setSelectedJob(null);
                  setApplyState("idle");
                  setResumeFile(null);
                  setFileError(null);
                }}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>

              {applyState === "success" ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-display">Application Submitted</h3>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    Thank you for applying for the <strong>{selectedJob.title}</strong> role. Our team will review your application and get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setIsApplyModalOpen(false);
                      setSelectedJob(null);
                      setApplyState("idle");
                      setResumeFile(null);
                      setFileError(null);
                    }}
                    className="px-6 py-2 rounded-lg bg-[#F8E7C9] text-[#064E3B] text-xs font-bold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-3.5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Application
                    </span>
                    <h3 className="text-lg font-bold font-display">{selectedJob.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold">Full Name *</label>
                      <input
                        name="fullName"
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs focus:border-[#064E3B] dark:focus:border-[#F8E7C9] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold">Email Address *</label>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs focus:border-[#064E3B] dark:focus:border-[#F8E7C9] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold">Phone Number *</label>
                      <input
                        name="phone"
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs focus:border-[#064E3B] dark:focus:border-[#F8E7C9] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold">Experience *</label>
                      <input
                        name="experience"
                        required
                        type="text"
                        placeholder="e.g. 3 Years"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs focus:border-[#064E3B] dark:focus:border-[#F8E7C9] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold">Current City</label>
                      <input
                        name="location"
                        type="text"
                        placeholder="e.g. Delhi NCR"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs focus:border-[#064E3B] dark:focus:border-[#F8E7C9] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold">Notice Period</label>
                      <input
                        name="noticePeriod"
                        type="text"
                        placeholder="e.g. Immediate / 30 Days"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs focus:border-[#064E3B] dark:focus:border-[#F8E7C9] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold">LinkedIn or Portfolio URL *</label>
                    <input
                      name="linkedin"
                      required
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs focus:border-[#064E3B] dark:focus:border-[#F8E7C9] outline-none"
                    />
                  </div>

                  {/* Resume / CV File Upload */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Paperclip size={13} className="text-[#064E3B] dark:text-[#F8E7C9]" />
                        Resume / CV (PDF, DOC, DOCX) *
                      </span>
                      <span className="text-[10px] text-muted-foreground font-normal">Max 5MB</span>
                    </label>

                    {!resumeFile ? (
                      <label className="border-2 border-dashed border-border hover:border-[#064E3B] dark:hover:border-[#F8E7C9] rounded-xl p-3 flex flex-col items-center justify-center gap-1 cursor-pointer bg-background/50 hover:bg-muted/20 transition-all group">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <div className="w-7 h-7 rounded-full bg-[#064E3B]/10 dark:bg-[#F8E7C9]/15 flex items-center justify-center text-[#064E3B] dark:text-[#F8E7C9] group-hover:scale-110 transition-transform">
                          <UploadCloud size={15} />
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-medium text-foreground">
                            <span className="text-[#064E3B] dark:text-[#F8E7C9] font-bold underline underline-offset-2">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-[10px] text-muted-foreground">PDF or DOC format up to 5MB</p>
                        </div>
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#064E3B]/10 dark:bg-[#064E3B]/25 border border-[#064E3B]/30 dark:border-[#F8E7C9]/30">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-[#064E3B] text-[#F8E7C9] flex items-center justify-center shrink-0 shadow-sm">
                            <FileText size={16} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-foreground truncate max-w-[200px] sm:max-w-[260px]">{resumeFile.name}</p>
                            <p className="text-[10px] text-muted-foreground font-mono">{resumeFile.size}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => { setResumeFile(null); setFileError(null); }}
                          className="p-1.5 rounded-lg hover:bg-rose-500/10 text-muted-foreground hover:text-rose-500 transition-colors"
                          title="Remove file"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}

                    {fileError && (
                      <p className="text-[11px] text-rose-500 font-medium">{fileError}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Brief Note</label>
                    <textarea
                      name="coverNote"
                      rows={2}
                      placeholder="Tell us a little about your background..."
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs focus:border-[#064E3B] dark:focus:border-[#F8E7C9] outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={applyState === "submitting"}
                      className="w-full py-2.5 rounded-lg bg-[#F8E7C9] hover:bg-[#ECD3A7] text-[#064E3B] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                    >
                      <span>{applyState === "submitting" ? "Submitting..." : "Send Application"}</span>
                      <Send size={13} />
                    </button>
                    {applyState === "error" && (
                      <p className="text-rose-500 text-xs text-center mt-1.5">
                        Failed to send application. Please try again or email careers@orbous.com.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
