export function cn(...inputs: Array<string | undefined | null | false>): string {
  return inputs
    .filter((v): v is string => typeof v === "string" && v.trim().length > 0)
    .join(" ")
}

