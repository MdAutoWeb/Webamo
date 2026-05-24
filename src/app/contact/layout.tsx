import type { Metadata } from "next";
import { withSocialMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = withSocialMetadata({
  title: "Contact",
  description: "Plan een gratis gesprek met Webamo. We bekijken samen wat jouw website nodig heeft en hoe snel we dat kunnen oplossen.",
  alternates: { canonical: "https://webamo.be/contact" },
  openGraph: {
    title: "Contact | Webamo",
    description: "Plan een gratis gesprek met Webamo. We bekijken samen wat jouw website nodig heeft.",
    url: "https://webamo.be/contact",
  },
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
