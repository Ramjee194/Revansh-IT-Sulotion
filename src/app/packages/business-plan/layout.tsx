import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/packages/business-plan");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
