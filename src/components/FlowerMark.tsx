interface FlowerMarkProps {
  className?: string;
  petal?: string;
  center?: string;
}

/** Small abstract five-petal mark used as a recurring brand motif. */
export function FlowerMark({ className, petal = "currentColor", center = "currentColor" }: FlowerMarkProps) {
  const petals = Array.from({ length: 5 });
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g transform="translate(50 50)">
        {petals.map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-26"
            rx="14"
            ry="22"
            fill={petal}
            opacity="0.9"
            transform={`rotate(${(360 / petals.length) * i})`}
          />
        ))}
        <circle r="10" fill={center} />
      </g>
    </svg>
  );
}
