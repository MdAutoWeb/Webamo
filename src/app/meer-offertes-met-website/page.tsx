import SeoLandingPage, { buildSeoMetadata } from "@/components/seo/SeoLandingPage";
import { getSeoPage } from "@/lib/seo-landing-pages";

const slug = "meer-offertes-met-website";
const config = getSeoPage(slug);

export const metadata = buildSeoMetadata(config);

export default function Page() {
  return <SeoLandingPage config={config} />;
}
