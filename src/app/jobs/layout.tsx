import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/jobs");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
