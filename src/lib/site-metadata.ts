import type { Metadata } from "next";

const siteUrl = "https://webamo.be";

/** Absolute URL — vereist voor Facebook, WhatsApp, LinkedIn */
export const ogImageUrl = `${siteUrl}/images/brand/webamo-og-dark.png`;

export const defaultOgImages: NonNullable<Metadata["openGraph"]>["images"] = [
  {
    url: ogImageUrl,
    secureUrl: ogImageUrl,
    width: 1200,
    height: 630,
    alt: "Webamo, websites en automatisatie in Brugge",
    type: "image/png",
  },
];

export const defaultTwitter: Metadata["twitter"] = {
  card: "summary_large_image",
  images: [ogImageUrl],
};

/** Voeg OG + Twitter toe aan page-metadata (voorkomt dat child openGraph images wist) */
export function withSocialMetadata(metadata: Metadata): Metadata {
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: metadata.openGraph?.images ?? defaultOgImages,
    },
    twitter: {
      ...defaultTwitter,
      ...metadata.twitter,
      images: metadata.twitter?.images ?? [ogImageUrl],
    },
  };
}
