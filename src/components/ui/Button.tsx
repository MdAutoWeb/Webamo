import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "outline-dark";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
};

const variants: Record<Variant, string> = {
  primary:      "bg-[#2563EB] text-white hover:bg-[#1E54CE]",
  outline:      "border border-[#E5E7EB] text-[#0A0A0A] hover:border-[#0A0A0A]",
  "outline-dark": "border border-white/20 text-white hover:border-white/60",
};

const sizes = {
  sm: "px-4 py-[10px] text-[14px] rounded-[8px]",
  md: "px-5 py-[13px] text-[15px] rounded-[10px]",
  lg: "px-6 py-4 text-[16px] rounded-[12px]",
};

export default function Button({ href, variant = "primary", size = "md", className = "", children, ...rest }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-medium transition-colors whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
