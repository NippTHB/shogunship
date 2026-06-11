// Pixel art star field background decoration
export default function PixelStars({ count = 30 }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    x: (i * 37 + 11) % 100,
    y: (i * 53 + 7) % 100,
    size: i % 3 === 0 ? 2 : 1,
    delay: (i * 0.3) % 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-px-gold"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size * 2}px`,
            height: `${star.size * 2}px`,
            imageRendering: 'pixelated',
            animation: `twinkle ${1.5 + star.delay}s step-end infinite`,
            opacity: 0.6,
            backgroundColor: i % 4 === 0 ? '#f9b76c' : '#f9b76c',
          }}
        />
      ))}
    </div>
  );
}