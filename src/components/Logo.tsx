type LogoProps = {
  className?: string
  stroke?: string
  strokeWidth?: number
}

// Deepy mark — outlined "D" + bar, reproduced from src/imports/Group_303.svg
export default function Logo({ className, stroke = "var(--color-lime)", strokeWidth = 15 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 308 285"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Deepy"
    >
      <path
        d="M178.529 7.5C217.171 7.5 247.975 20.9612 269.018 45.1387C289.938 69.1766 300.5 102.983 300.5 142.5C300.5 182.017 289.938 215.823 269.018 239.861C247.975 264.039 217.171 277.5 178.529 277.5H113.794V220H178.529C201.184 220 217.31 212.238 227.934 199.354C238.736 186.252 244.617 166.912 244.617 142.5C244.617 118.088 238.736 98.7483 227.934 85.6465C217.31 72.7622 201.184 65 178.529 65H7.5V7.5H178.529Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path d="M83.5 112.5V277.5H38.5V112.5H83.5Z" stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  )
}
