import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/ai-hub");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
