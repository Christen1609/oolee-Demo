export default function WaveDecoration() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${200 + i * 2} C 300 ${100 + i * 3}, 600 ${
              300 - i * 3
            }, 1200 ${180 + i * 2}`}
            fill="none"
            stroke="#F8C8DE"
            strokeWidth="1"
            opacity={0.5 - i * 0.01}
          />
        ))}
      </svg>
    </div>
  );
}
