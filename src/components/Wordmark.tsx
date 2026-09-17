import Logo from "./Logo"

type WordmarkProps = {
  size?: "sm" | "lg"
}

// Logo + group name "Deepy" beneath it (used on cover + closing per brief)
export default function Wordmark({ size = "lg" }: WordmarkProps) {
  const logoSize = size === "lg" ? "h-24 w-24 sm:h-28 sm:w-28" : "h-12 w-12"
  const nameSize = size === "lg" ? "text-2xl sm:text-3xl" : "text-lg"
  return (
    <div className="flex flex-col items-center gap-4">
      <Logo className={logoSize} />
      <span
        className={`font-display font-semibold tracking-[0.25em] ${nameSize}`}
        style={{ color: "var(--color-lime)" }}
      >
        DeepY
      </span>
    </div>
  )
}
