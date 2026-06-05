// Reusable pixel art divider
export default function PixelDivider({ label, color = 'orange' }) {
  const borderColor = color === 'orange' ? '#ff6b2b' : '#e8c87a';
  const textColor = color === 'orange' ? '#ff6b2b' : '#e8c87a';
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="flex-1 h-[3px]" style={{ background: `repeating-linear-gradient(90deg, ${borderColor} 0px, ${borderColor} 6px, transparent 6px, transparent 10px)` }} />
      {label && (
        <span className="font-pixel text-[7px] px-3" style={{ color: textColor }}>
          {label}
        </span>
      )}
      <div className="flex-1 h-[3px]" style={{ background: `repeating-linear-gradient(90deg, ${borderColor} 0px, ${borderColor} 6px, transparent 6px, transparent 10px)` }} />
    </div>
  );
}