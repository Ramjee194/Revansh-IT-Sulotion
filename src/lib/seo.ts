import type { Metadata } from "next";

export const SITE_URL = "https://orbous.com";
export const SITE_NAME = "Orbous";

export interface SeoRoute {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
  /** Shown as a sitelink candidate in structured data */
  sitelink?: boolean;
}

/**
 * Single source of truth for page titles / descriptions.
 * Short, clear titles (e.g. "Careers", "Contact Us") are what Google
 * typically uses as sitelink labels under the main "Orbous" result.
 */
export const SEO_ROUTES: SeoRoute[] = [
  { path: "/about", title: "About Us", description: "Learn about Orbous IT & Software Solutions — DLF Cyber City Gurgaon. Our story, mission, and enterprise engineering capabilities.", priority: 0.95, changeFrequency: "weekly", sitelink: true },
  { path: "/services/web-service/ai-web-solutions", title: "Leading Software & AI", description: "Enterprise AI solutions, custom LLMs, intelligent automation, and machine learning software by Orbous.", priority: 0.95, changeFrequency: "weekly", sitelink: true },
  { path: "/careers", title: "Careers", description: "Join Orbous at DLF Cyber City, Gurgaon. Explore open roles in software engineering, AI, design, and digital marketing.", priority: 0.9, changeFrequency: "daily", sitelink: true },
  { path: "/contact", title: "Contact Us", description: "Contact Orbous IT & Software Solutions, DLF Cyber City, Gurgaon 122016. Call +91 84048 27541 or send your project inquiry.", priority: 0.9, changeFrequency: "monthly", sitelink: true },
  { path: "/services", title: "Our Services", description: "Explore Orbous services: web & mobile app development, AI solutions, SEO, cyber security, graphic design, and marketing.", priority: 0.9, changeFrequency: "weekly", sitelink: true },
  { path: "/services/web-service/custom-web-apps", title: "Software Development", description: "Custom web application and software development by Orbous — scalable, secure, high-performance products for businesses.", priority: 0.88, changeFrequency: "weekly", sitelink: true },
  { path: "/services/web-service/mobile-app-development", title: "Mobile App Development", description: "Android & iOS mobile app development by Orbous, Gurgaon. Native and cross-platform apps built for scale.", priority: 0.88, changeFrequency: "weekly", sitelink: true },
  { path: "/jobs", title: "Jobs", description: "Current job openings at Orbous IT & Software Solutions, DLF Cyber City, Gurgaon.", priority: 0.8, changeFrequency: "daily" },
  { path: "/team", title: "Our Team", description: "Meet the leadership and engineering team behind Orbous IT & Software Solutions.", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", title: "Blog", description: "Insights on software engineering, AI, cloud, SEO and digital growth from the Orbous team.", priority: 0.75, changeFrequency: "weekly" },
  { path: "/ai-hub", title: "AI Hub", description: "Explore AI tools, demos and solutions built by Orbous.", priority: 0.75, changeFrequency: "weekly" },

  { path: "/services/cyber-security", title: "Cyber Security Services", description: "Cyber security, threat defense, VAPT and compliance services by Orbous.", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/graphic-design", title: "Graphic Design & Branding", description: "Logo, brand identity, UI/UX and graphic design services by Orbous.", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/seo-services", title: "SEO Services", description: "Result-driven SEO services by Orbous: technical SEO, local SEO, content and link building.", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/seo-services/seo-audit", title: "SEO Audit", description: "Comprehensive website SEO audit by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/seo-services/technical-seo", title: "Technical SEO", description: "Technical SEO, Core Web Vitals and site-speed optimisation by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/seo-services/content-marketing", title: "Content Marketing", description: "SEO content writing and content marketing by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/seo-services/local-seo", title: "Local SEO", description: "Local SEO and Google Business Profile optimisation by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/seo-services/link-building", title: "Link Building", description: "White-hat link building services by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/seo-services/ecommerce-seo", title: "E-commerce SEO", description: "E-commerce SEO for Shopify, WooCommerce and custom stores by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/web-service/premium-web-design", title: "Website Design", description: "Premium, responsive website design by Orbous.", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/web-service/ecommerce-solutions", title: "E-commerce Development", description: "E-commerce website and store development by Orbous.", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/web-service/cloud-hosting-care", title: "Cloud Hosting & Maintenance", description: "Cloud hosting, deployment and website maintenance by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/sms-service/promotional-sms", title: "Promotional SMS", description: "Bulk promotional SMS service by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/sms-service/transactional-sms", title: "Transactional SMS", description: "OTP and transactional SMS service by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/sms-service/verified-sms", title: "Verified SMS", description: "Verified business SMS service by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/sms-service/whatsapp-business-api", title: "WhatsApp Business API", description: "Official WhatsApp Business API integration by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/sms-service/voice-call-ivr", title: "Voice Call & IVR", description: "Bulk voice call and IVR solutions by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/sms-service/global-bulk-email", title: "Bulk Email", description: "Global bulk email marketing service by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/smm-services/meta-fb-ig-advertising", title: "Facebook & Instagram Ads", description: "Meta (Facebook & Instagram) advertising by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/smm-services/instagram-reels-video", title: "Instagram Reels & Video", description: "Instagram reels and short video marketing by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/smm-services/linkedin-b2b-strategy", title: "LinkedIn B2B Marketing", description: "LinkedIn B2B marketing strategy by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/smm-services/youtube-marketing", title: "YouTube Marketing", description: "YouTube channel growth and marketing by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/smm-services/influencer-marketing", title: "Influencer Marketing", description: "Influencer marketing campaigns by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services/smm-services/brand-community", title: "Brand Community Management", description: "Social media community management by Orbous.", priority: 0.6, changeFrequency: "monthly" },
  { path: "/packages/startup-plan", title: "Startup Plan", description: "Orbous startup website & marketing package.", priority: 0.5, changeFrequency: "monthly" },
  { path: "/packages/business-plan", title: "Business Plan", description: "Orbous business website & marketing package.", priority: 0.5, changeFrequency: "monthly" },
  { path: "/packages/enterprise-plan", title: "Enterprise Plan", description: "Orbous enterprise software & marketing package.", priority: 0.5, changeFrequency: "monthly" },
  { path: "/packages/ecommerce-bundle", title: "E-commerce Bundle", description: "Orbous e-commerce development package.", priority: 0.5, changeFrequency: "monthly" },
  { path: "/packages/seo-yearly-plan", title: "SEO Yearly Plan", description: "Orbous yearly SEO package.", priority: 0.5, changeFrequency: "monthly" },
  { path: "/packages/custom-quote", title: "Get a Custom Quote", description: "Request a custom quote from Orbous.", priority: 0.5, changeFrequency: "monthly" },
];

/** Build per-page metadata with its OWN canonical URL (never the homepage). */
export function pageMetadata(path: string): Metadata {
  const route = SEO_ROUTES.find((r) => r.path === path);
  const title = route?.title ?? SITE_NAME;
  const description = route?.description;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${SITE_NAME}`, description, url: path },
  };
}
