export default function PixelDivider({ label, color = 'brown' }) {
  const borderColor = color === 'gold' || color === 'brass' ? '#C1A562' : '#6A4A3A';
  const textColor = color === 'gold' || color === 'brass' ? '#C1A562' : '#6A4A3A';

  return (
    <div className="flex items-center gap-3 my-2">
      <div
        className="flex-1 h-0.5"
        style={{
          background: `repeating-linear-gradient(90deg, ${borderColor} 0, ${borderColor} 6px, transparent 6px, transparent 12px)`,
        }}
      />
      {label && (
        <span className="font-pixel text-[7px] px-2 shrink-0" style={{ color: textColor }}>
          {label}
        </span>
      )}
      <div
        className="flex-1 h-0.5"
        style={{
          background: `repeating-linear-gradient(90deg, ${borderColor} 0, ${borderColor} 6px, transparent 6px, transparent 12px)`,
        }}
      />
    </div>
  );
}