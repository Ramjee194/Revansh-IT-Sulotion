import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/packages/custom-quote");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
