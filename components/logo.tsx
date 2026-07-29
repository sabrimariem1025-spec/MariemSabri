export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="50,12 88,50 50,88 12,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <polygon
        points="76.9,23.1 23.1,23.1 23.1,76.9 76.9,76.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <circle cx="50" cy="50" r="6" className="fill-teal dark:fill-teal-light" stroke="none" />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* <LogoMark size={28} className="text-gold dark:text-gold-light shrink-0" /> */}
      <span className="font-display italic text-lg leading-none tracking-tight">
        Mariem Sabri
      </span>
    </div>
  );
}
