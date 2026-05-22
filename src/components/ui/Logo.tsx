import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";

type Props = { href?: string; variant?: "light" | "dark" };

export default function Logo({ href = "/", variant = "light" }: Props) {
  const src = variant === "dark" ? images.brand.logoDark : images.brand.logo;

  return (
    <Link href={href} className="block leading-none shrink-0" aria-label="Webamo home">
      <Image
        src={src}
        alt="Webamo, Work less. Grow more."
        width={2133}
        height={714}
        className="h-14 md:h-[3.75rem] w-auto"
        priority={variant === "light"}
      />
    </Link>
  );
}
