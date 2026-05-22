/**
 * Afbeeldingen staan in public/images/
 * Op de site bereikbaar als /images/...
 *
 * - brand/  → logo, OG, favicon-achtige assets
 * - cases/  → portfolio-screenshots
 */
export function imageSrc(...parts: string[]) {
  return `/images/${parts.join("/")}`;
}

export const images = {
  brand: {
    logo: imageSrc("brand", "webamo-logo-light-transparent.png"),
    logoDark: imageSrc("brand", "webamo-logo-dark-transparent.png"),
    favicon: imageSrc("brand", "w-avatar-black.png"),
    og: imageSrc("brand", "webamo-og-dark.png"),
  },
  cases: {
    dakralux: imageSrc("cases", "Dakralux-demo.png"),
    khReflexologie: imageSrc("cases", "kh-reflexologie.png"),
  },
} as const;
