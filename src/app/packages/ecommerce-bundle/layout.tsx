import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/packages/ecommerce-bundle");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
