import SeoLandingPage, { buildSeoMetadata } from "@/components/seo/SeoLandingPage";
import { getSeoPage } from "@/lib/seo-landing-pages";

const slug = "website-laten-maken-zedelgem";
const config = getSeoPage(slug);

export const metadata = buildSeoMetadata(config);

export default function Page() {
  return <SeoLandingPage config={config} />;
}
