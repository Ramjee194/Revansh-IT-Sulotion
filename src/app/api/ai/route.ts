import { NextResponse } from "next/server";

// High-fidelity fallback data for Offline Demo Mode
const MOCK_ROADMAPS: Record<string, any> = {
  "frontend": {
    topic: "Frontend Developer Roadmap",
    description: "Master the art of building beautiful, interactive, and responsive user interfaces.",
    steps: [
      {
        phase: "Phase 1: The Core Fundamentals",
        title: "HTML5 & CSS3 Mastery",
        description: "Learn semantic HTML, document structure, modern layout systems (Flexbox and Grid), responsive design, and CSS variables.",
        duration: "2-3 weeks",
        keySkills: ["Semantic HTML", "Flexbox & Grid", "Media Queries", "CSS Animations"],
        resources: ["MDN Web Docs - HTML & CSS", "CSS-Tricks Guides", "Kevin Powell YouTube Channel"]
      },
      {
        phase: "Phase 2: Programming the Web",
        title: "JavaScript (ES6+) & DOM Manipulation",
        description: "Understand variables, data types, functions, control flows, arrays, objects, asynchronous programming (Promises, Async/Await), and fetch API.",
        duration: "3-4 weeks",
        keySkills: ["ES6 Syntax", "DOM Manipulation", "Fetch API & AJAX", "Scope & Closures"],
        resources: ["javascript.info", "Eloquent JavaScript Book", "Namaste JavaScript - YouTube"]
      },
      {
        phase: "Phase 3: Modern UI Frameworks",
        title: "React.js & Next.js Ecosystem",
        description: "Master component-based architecture, state management (hooks), routing, server-side rendering (SSR), and static site generation (SSG).",
        duration: "4 weeks",
        keySkills: ["React Hooks", "Next.js App Router", "Tailwind CSS", "State Management (Zustand/Redux)"],
        resources: ["React official docs", "Next.js Learn Course", "Lee Robinson Blogs"]
      },
      {
        phase: "Phase 4: Tooling & Deployment",
        title: "Git, Build Tools, and Cloud Hosting",
        description: "Learn version control with Git/GitHub, package managers (npm/yarn/pnpm), build tooling (Vite), and deploying to Vercel or Netlify.",
        duration: "1-2 weeks",
        keySkills: ["Git & GitHub workflows", "Vite / Turbopack", "CI/CD Basics", "Vercel Deployment"],
        resources: ["Git Book", "Vercel Docs", "Vite Documentation"]
      }
    ]
  },
  "backend": {
    topic: "Backend Developer Roadmap",
    description: "Learn to build scalable APIs, design databases, and orchestrate server architectures.",
    steps: [
      {
        phase: "Phase 1: Language Fundamentals",
        title: "Backend Language (Node.js/Express)",
        description: "Choose a backend language. Node.js is recommended for JavaScript devs. Learn HTTP protocols, routing, middleware, and filesystem APIs.",
        duration: "3 weeks",
        keySkills: ["Node.js Runtime", "Express.js Framework", "HTTP Methods", "RESTful API Design"],
        resources: ["Node.js official docs", "Express.js Guides", "The Odin Project Node.js Course"]
      },
      {
        phase: "Phase 2: Data Persistence",
        title: "Database Design (SQL & NoSQL)",
        description: "Understand database fundamentals. Learn PostgreSQL (SQL) and MongoDB (NoSQL). Master schemas, migrations, indices, and ORMs/ODMs (Mongoose, Prisma).",
        duration: "3 weeks",
        keySkills: ["SQL Queries", "Mongoose / Prisma", "Database Indexing", "Data Modeling"],
        resources: ["MongoDB University", "Prisma Docs", "SQL Bolt Tutorial"]
      },
      {
        phase: "Phase 3: Security & Authentication",
        title: "Identity & Token Management",
        description: "Implement user authentication and authorization securely. Learn password hashing, JWTs, OAuth2, and session management.",
        duration: "2 weeks",
        keySkills: ["JWT Tokens", "bcrypt Hashing", "OAuth & NextAuth.js", "CORS & Security Headers"],
        resources: ["OWASP Top 10 Security Guide", "Authjs.dev Docs", "Web Dev Simplified Security Videos"]
      },
      {
        phase: "Phase 4: Scaling & Devops",
        title: "Docker, Cloud Deployments, and Caching",
        description: "Containerize applications using Docker. Deploy backend servers on AWS/Render/VPS. Learn Redis caching and API rate limiting.",
        duration: "3 weeks",
        keySkills: ["Docker Containers", "Redis Caching", "PM2 / Process Managers", "Nginx Reverse Proxy"],
        resources: ["Docker Curriculum", "Redis University", "AWS Fundamentals Guide"]
      }
    ]
  },
  "fullstack": {
    topic: "Full-Stack Web Developer",
    description: "Bridge the gap between frontend aesthetics and backend logic to deploy complete SaaS applications.",
    steps: [
      {
        phase: "Phase 1: Frontend Basics",
        title: "Responsive Web Interfaces",
        description: "Learn HTML, CSS, Tailwind CSS, and core JavaScript. Master responsive design and flexbox setups.",
        duration: "3 weeks",
        keySkills: ["HTML/CSS", "JavaScript Basics", "Tailwind CSS", "Flexbox/Grid"],
        resources: ["MDN Docs", "Tailwind CSS Documentation"]
      },
      {
        phase: "Phase 2: Frontend Frameworks & State",
        title: "React/Next.js and Client-Server APIs",
        description: "Master React hook mechanics, state flow, Next.js App Router, and server actions or client-side fetch calls.",
        duration: "4 weeks",
        keySkills: ["React Hooks", "Next.js App Router", "Server Components", "API Fetching"],
        resources: ["Next.js Learn Docs", "React Dev Guides"]
      },
      {
        phase: "Phase 3: Databases & Servers",
        title: "API Implementation & DB Modelling",
        description: "Build serverless or microservice APIs. Connect to MongoDB or PostgreSQL. Create mongoose schemas and secure API routes.",
        duration: "4 weeks",
        keySkills: ["Next.js API Routes", "Mongoose/Prisma", "Relational & NoSQL Concepts", "CRUD API Design"],
        resources: ["Mongoose Documentation", "MongoDB Atlas Tutorial"]
      },
      {
        phase: "Phase 4: Launch & Operations",
        title: "Auth, Payments, and Vercel Deploy",
        description: "Integrate NextAuth for user identity, Stripe for SaaS monetization, and deploy to Vercel/AWS with continuous integration.",
        duration: "3 weeks",
        keySkills: ["NextAuth", "Stripe API Integration", "Vercel Deployments", "Git Actions CI/CD"],
        resources: ["NextAuth Docs", "Stripe API Documentation"]
      }
    ]
  }
};

const MOCK_CONSULTANT_RESPONSES = {
  ecommerce: `### Premium E-Commerce Platform Consultation
**Suggested Tech Stack:**
* **Frontend:** Next.js (React 19) + Tailwind CSS (v4) for blistering performance, static generation of product pages, and dynamic client checkout.
* **Backend/API:** Next.js Serverless API routes (or NestJS/Node.js if microservices are needed).
* **Database:** PostgreSQL (using Prisma) or MongoDB (using Mongoose) for product catalogs, user accounts, and order history.
* **Services:** Stripe API (payments), Nodemailer/SendGrid (emails), WhatsApp API (order notifications).

**Recommended Development Timeline:**
* **Phase 1: Strategy & Wireframing (1-2 weeks):** Define user flow, product listings, cart layout, and admin portals.
* **Phase 2: UI/UX & High-fidelity designs (2 weeks):** Design with dark/light themes, smooth transitions, and conversion-optimized components.
* **Phase 3: Core Development (4-5 weeks):** Database setup, authentication, product catalogue rendering, cart functionality, and Stripe checkout.
* **Phase 4: Launch & Quality Assurance (1 week):** Perform load testing, secure payment pathways, and SEO audit.

**Orbous Advantage:**
Orbous can build your E-Commerce application with built-in Bulk SMS and WhatsApp messaging, sending real-time automated updates for delivery, OTP verification, and marketing notifications!`,
  saas: `### Enterprise SaaS Application Architecture
**Suggested Tech Stack:**
* **Frontend:** Next.js (App Router) + Tailwind CSS + Framer Motion (animated dashboard UI).
* **Backend:** Node.js (Express/Fastify) or Next.js server actions.
* **Database:** PostgreSQL for robust transactional consistency + Redis for caching sessions and data.
* **Auth:** NextAuth.js / Clerk for multi-tenant enterprise logins, MFA, and SSO.
* **Hosting:** Vercel (frontend) + AWS / Docker containerization on Render (backend services).

**Recommended Development Timeline:**
* **Phase 1: Technical Scoping & Database Modeling (2 weeks):** Plan workspace isolation, multi-tenant databases, and workspace subscription tiers.
* **Phase 2: Core SaaS Engine (4-5 weeks):** User registration, tenant spaces, subscription tiers, Stripe subscription checkout, billing portal, and key dashboard panels.
* **Phase 3: Dashboard & Team Collaborations (3 weeks):** Live updates, team member invitation system, roles/permissions (RBAC), and analytics graphs.
* **Phase 4: Launch & SEO Optimizations (2 weeks):** Complete penetration testing, rate-limiting configuration, and optimization of marketing landing page.

**Orbous Advantage:**
Our A+ Engineering Standard ensures your SaaS is highly scalable, containerized using Docker, and features clean code with rigid unit tests.`,
  mobile: `### High-Performance Cross-Platform Mobile App
**Suggested Tech Stack:**
* **Frontend:** React Native (with Expo) for cross-platform iOS & Android deployments sharing 90% of the codebase, or Flutter.
* **Backend:** Node.js / Express API deployed on AWS Elastic Beanstalk.
* **Database:** MongoDB for flexible storage of user profiles and dynamic feed configurations.
* **Push Notifications:** Firebase Cloud Messaging (FCM) + Expo Notifications.

**Recommended Development Timeline:**
* **Phase 1: Interactive Figma Design (2-3 weeks):** High-fidelity mobile viewports following iOS and Android platform design guidelines.
* **Phase 2: Frontend & Navigation Setup (3 weeks):** Screen flows, bottom-tabs, drawer layout, state management, and local storage (AsyncStorage).
* **Phase 3: API Integration & Backend Logic (4 weeks):** User Auth (social login), database interactions, push notification servers, and image uploads.
* **Phase 4: App Store & Play Store Submissions (2 weeks):** Bundling applications, beta testing via TestFlight / Google Play Console, and store listings.

**Orbous Advantage:**
We have experienced mobile app engineers who build sleek, native-speed layouts and handle the entire app store submission process for you.`
};

const MOCK_SUPPORT_RESPONSES = [
  {
    keywords: ["service", "what do you do", "offer", "capabilities", "features"],
    answer: "Orbous is a premium IT & Software Solutions agency offering:\n1. **Web Services**: Premium Web Design, Custom Web Apps, E-Commerce Solutions, Mobile App Development, AI Web Solutions, and Cloud Care.\n2. **SMS Services**: Bulk SMS (Promotional & Transactional), Voice Calls & IVR, and WhatsApp Business API integration.\n3. **SEO & SMM Services**: Local SEO, technical auditing, Meta/Google ads management, and YouTube marketing."
  },
  {
    keywords: ["contact", "email", "phone", "address", "reach", "hire", "talk"],
    answer: "You can reach Orbous in multiple ways:\n* **Email**: ramjeekumaryadav733@gmail.com\n* **Contact Form**: Scroll down on our website to fill out our contact form.\n* **Office**: Reach out directly via our contact channels to arrange a face-to-face or video consultation. We'd love to discuss how to build your custom tech solution!"
  },
  {
    keywords: ["tech", "technology", "stack", "react", "next", "mongodb", "node"],
    answer: "We employ an elite technical stack to construct our high-availability services:\n* **Frontend**: Next.js, React, Tailwind CSS, Framer Motion, and GSAP for fluid micro-animations.\n* **Backend**: Node.js, Express, Python/Django, and Serverless architectures.\n* **Databases**: MongoDB, PostgreSQL, and Redis.\n* **DevOps**: Docker, AWS, Vercel, and GitHub Actions CI/CD workflows."
  },
  {
    keywords: ["why", "excellence", "standard", "choose"],
    answer: "Clients choose Orbous because:\n* We follow **A+ Engineering Standards** (clean code, modular layout, high security).\n* We provide custom-tailored solutions rather than cookie-cutter templates.\n* We have a proven track record (1+ years of delivery, 5-star testimonials).\n* We offer full-stack support: from web development to Bulk SMS marketing and SEO optimization."
  }
];

export async function POST(req: Request) {
  let mode = "support";
  let prompt = "";
  try {
    const body = await req.json();
    mode = body.mode || "support";
    prompt = body.prompt || "";
    const history = body.history;

    if (!mode || !prompt) {
      return NextResponse.json({ error: "Missing mode or prompt" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // IF GEMINI_API_KEY IS MISSING, OPERATE IN OFFLINE DEMO MODE
    if (!apiKey) {
      console.log(`AI API running in OFFLINE mode (no GEMINI_API_KEY found) for mode: ${mode}`);
      return handleOfflineMode(mode, prompt);
    }

    // ONLINE MODE - INTEGRATING GOOGLE GEMINI API (v1beta/gemini-2.5-flash)
    let systemPrompt = "";
    if (mode === "support") {
      systemPrompt = `You are the official AI Support Agent for "Orbous IT & Software Solutions" (also known as Orbous).
Your task is to answer inquiries about our services, technologies, values, and contact details.
Our details:
- **Services**: Web Development (Custom Web Apps, E-Commerce, React/Next.js apps), Mobile Apps (React Native, Flutter), Bulk SMS, WhatsApp Business API integrations, Voice calls/IVR, SEO optimization, and Social Media Marketing (Meta, IG, FB ads).
- **Core Values**: A+ Engineering Standards, clean code, scalable architecture, transparent pricing, and 1+ years of excellence.
- **Contact**: Email is ramjeekumaryadav733@gmail.com. We can build anything. Suggest client to fill the contact form or send a message.
Be professional, friendly, and structure answers with clear bullet points. Keep responses relatively concise.`;
    } else if (mode === "consultant") {
      systemPrompt = `You are a Senior Tech Consultant and Software Architect at Orbous.
Analyze the user's project idea, product description, or technical issue.
Provide a highly detailed, professional consulting output containing:
1. **Suggested Tech Stack** (Frontend, Backend, Database, Cloud & Deployment) with reasons why.
2. **Phase-by-Phase Development Timeline** (e.g. scoping, UI/UX, core coding, testing, release).
3. **Rough Price/Complexity Estimate** (explain factors like integrations, database complexity).
4. **How Orbous can execute this** (integrating SMS APIs, Next.js framework, scaling cloud infrastructure).
Use beautiful, structured markdown formatting.`;
    } else if (mode === "roadmap") {
      systemPrompt = `You are an expert technical educator and curriculum developer.
Generate a structured, sequential learning or execution roadmap for the user's topic: "${prompt}".
You MUST return a JSON object ONLY. Do not write normal markdown wrapper text around the JSON, except possibly standard \`\`\`json ... \`\`\` blocks which we will parse.
The JSON structure MUST follow this exact schema:
{
  "topic": "Topic Name",
  "description": "Brief description of the roadmap",
  "steps": [
    {
      "phase": "Phase 1: Topic",
      "title": "Step Title",
      "description": "Detailed explanation of what to learn/do in this step",
      "duration": "Recommended time, e.g. 2 weeks",
      "keySkills": ["Skill A", "Skill B"],
      "resources": ["Resource Name 1", "Resource Name 2"]
    }
  ]
}
Please output exactly 4-6 sequential steps. Be detailed in descriptions and provide high-quality learning resources.`;
    }

    // Build the request contents payload
    const contents: any[] = [];
    
    // Add chat history if available and in support mode
    if (mode === "support" && history && Array.isArray(history)) {
      history.slice(-6).forEach((msg: any) => {
        contents.push({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        });
      });
    }
    
    // Add the current prompt
    contents.push({
      role: "user",
      parts: [{ text: prompt }]
    });

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          generationConfig: mode === "roadmap" ? { responseMimeType: "application/json" } : undefined
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error Response:", errorText);
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!resultText) {
      throw new Error("Empty response from Gemini API");
    }

    // If we are in roadmap mode, parse the response as JSON
    if (mode === "roadmap") {
      try {
        // Clean markdown JSON tags if present
        let cleanedText = resultText.trim();
        if (cleanedText.startsWith("```")) {
          cleanedText = cleanedText.replace(/^```json\s*/i, "").replace(/```$/, "").trim();
        }
        const parsedRoadmap = JSON.parse(cleanedText);
        return NextResponse.json({ offline: false, roadmap: parsedRoadmap });
      } catch (parseError) {
        console.error("Failed to parse AI Roadmap JSON. Falling back to offline roadmap.", parseError);
        return handleOfflineMode(mode, prompt);
      }
    }

    return NextResponse.json({ offline: false, text: resultText });

  } catch (error: any) {
    console.error("AI API Critical Error:", error);
    // On server error, fallback to offline demo instead of crashing
    return handleOfflineMode(
      mode,
      prompt || "error_fallback"
    );
  }
}

// Handler for offline demo simulation
function handleOfflineMode(mode: string, prompt: string) {
  const query = prompt.toLowerCase();

  if (mode === "support") {
    // Find matching mock response keywords
    for (const item of MOCK_SUPPORT_RESPONSES) {
      if (item.keywords.some(kw => query.includes(kw))) {
        return NextResponse.json({
          offline: true,
          text: `[Offline Demo Mode]\n\n${item.answer}`
        });
      }
    }
    // Default Support Answer
    return NextResponse.json({
      offline: true,
      text: `[Offline Demo Mode]\n\nHello! I am the Orbous AI Support Bot. 
I can tell you about our **services**, our **technologies**, why you should **choose** us, or how to **contact** us.
(Try asking: 'What services do you offer?', 'What technologies do you use?', or 'How can I contact you?')`
    });
  }

  if (mode === "consultant") {
    if (query.includes("shop") || query.includes("store") || query.includes("commerce") || query.includes("cart")) {
      return NextResponse.json({ offline: true, text: `[Offline Demo Mode]\n\n${MOCK_CONSULTANT_RESPONSES.ecommerce}` });
    } else if (query.includes("saas") || query.includes("dashboard") || query.includes("platform") || query.includes("portal")) {
      return NextResponse.json({ offline: true, text: `[Offline Demo Mode]\n\n${MOCK_CONSULTANT_RESPONSES.saas}` });
    } else if (query.includes("app") || query.includes("mobile") || query.includes("android") || query.includes("ios") || query.includes("phone")) {
      return NextResponse.json({ offline: true, text: `[Offline Demo Mode]\n\n${MOCK_CONSULTANT_RESPONSES.mobile}` });
    }

    // Default Consultant Response
    return NextResponse.json({
      offline: true,
      text: `[Offline Demo Mode]

### Technical Consultation Summary
Thank you for your project query: *"__${prompt}__"*. 

**Recommended Tech Stack:**
* **Frontend:** Next.js (React 19) + Tailwind CSS (v4) with Framer Motion.
* **Backend:** Next.js Serverless API endpoints or standard Node.js/Express framework.
* **Database:** MongoDB (using Mongoose) for document-based storage, or PostgreSQL (using Prisma) for relational structures.
* **Hosting:** Vercel for high-speed global frontend distribution; AWS/Render for server runtimes.

**Estimated Timeline:**
* **Strategy & Design:** 1-2 Weeks
* **MVP Core Development:** 3-5 Weeks
* **Testing & Deployment:** 1 Week

**Orbous Execution:**
We specialize in building responsive, high-performance web and mobile software solutions. Let's arrange a consultation! Please scroll down to our contact form or contact us at **ramjeekumaryadav733@gmail.com** to schedule a detailed session.`
    });
  }

  if (mode === "roadmap") {
    // Check keywords for offline roadmaps
    if (query.includes("front") || query.includes("ui") || query.includes("react") || query.includes("html") || query.includes("design")) {
      return NextResponse.json({ offline: true, roadmap: MOCK_ROADMAPS.frontend });
    } else if (query.includes("back") || query.includes("node") || query.includes("api") || query.includes("server") || query.includes("database")) {
      return NextResponse.json({ offline: true, roadmap: MOCK_ROADMAPS.backend });
    }

    // Default roadmap: Full Stack
    return NextResponse.json({ offline: true, roadmap: MOCK_ROADMAPS.fullstack });
  }

  return NextResponse.json({ error: "Invalid mode" }, { status: 400 });
}
