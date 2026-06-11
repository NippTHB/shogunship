// Layered pixel-art clouds — GBA/SNES overworld style
const CLOUDS = [
  // Far layer — small, lighter
  { top: '7%',  left: '3%',   scale: 0.7,  delay: 0,  opacity: 0.6,  layer: 'far' },
  { top: '12%', left: '60%',  scale: 0.6,  delay: 8,  opacity: 0.5,  layer: 'far' },
  { top: '5%',  left: '82%',  scale: 0.75, delay: 14, opacity: 0.55, layer: 'far' },
  // Mid layer
  { top: '9%',  left: '28%',  scale: 1.0,  delay: 4,  opacity: 0.75, layer: 'mid' },
  { top: '16%', left: '50%',  scale: 0.85, delay: 11, opacity: 0.7,  layer: 'mid' },
  // Near layer — larger, more opaque
  { top: '6%',  left: '14%',  scale: 1.3,  delay: 2,  opacity: 0.88, layer: 'near' },
  { top: '13%', left: '72%',  scale: 1.2,  delay: 7,  opacity: 0.82, layer: 'near' },
];

// Small far-layer cloud shape
function SmallCloud({ fill, shadow }) {
  return (
    <svg width="36" height="18" viewBox="0 0 36 18" style={{ imageRendering: 'pixelated' }}>
      <rect x="4"  y="12" width="28" height="6" fill={fill}/>
      <rect x="2"  y="8"  width="32" height="6" fill={fill}/>
      <rect x="8"  y="4"  width="20" height="6" fill={fill}/>
      <rect x="12" y="2"  width="12" height="4" fill={fill}/>
      <rect x="4"  y="16" width="28" height="2" fill={shadow} opacity="0.35"/>
    </svg>
  );
}

// Standard mid-layer cloud
function MidCloud({ fill, highlight, shadow }) {
  return (
    <svg width="52" height="26" viewBox="0 0 52 26" style={{ imageRendering: 'pixelated' }}>
      <rect x="6"  y="18" width="40" height="8" fill={fill}/>
      <rect x="2"  y="12" width="48" height="8" fill={fill}/>
      <rect x="8"  y="6"  width="36" height="8" fill={fill}/>
      <rect x="14" y="2"  width="24" height="6" fill={highlight}/>
      <rect x="18" y="0"  width="12" height="4" fill={highlight}/>
      <rect x="6"  y="24" width="40" height="2" fill={shadow} opacity="0.3"/>
    </svg>
  );
}

// Large near-layer cloud
function LargeCloud({ fill, highlight, shadow }) {
  return (
    <svg width="72" height="34" viewBox="0 0 72 34" style={{ imageRendering: 'pixelated' }}>
      <rect x="8"  y="24" width="56" height="10" fill={fill}/>
      <rect x="4"  y="16" width="64" height="10" fill={fill}/>
      <rect x="10" y="8"  width="52" height="10" fill={fill}/>
      <rect x="16" y="2"  width="40" height="8"  fill={highlight}/>
      <rect x="24" y="0"  width="24" height="4"  fill={highlight}/>
      {/* pixel dither detail */}
      <rect x="10" y="18" width="2" height="2" fill={highlight} opacity="0.5"/>
      <rect x="50" y="14" width="2" height="2" fill={highlight} opacity="0.4"/>
      <rect x="30" y="10" width="2" height="2" fill={highlight} opacity="0.45"/>
      <rect x="8"  y="30" width="56" height="2" fill={shadow} opacity="0.28"/>
    </svg>
  );
}

function Cloud({ top, left, scale, delay, opacity, layer }) {
  const fill      = '#FDF8ED';
  const highlight = '#fffdf5';
  const shadow    = '#e8dfc0';

  const CloudShape = layer === 'far' ? SmallCloud : layer === 'mid' ? MidCloud : LargeCloud;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        opacity,
        animationDelay: `${delay}s`,
        animation: `cloud-drift ${22 + delay * 0.8}s linear infinite alternate`,
      }}
    >
      <CloudShape fill={fill} highlight={highlight} shadow={shadow} />
    </div>
  );
}

export default function PixelClouds() {
  return (
    <>
      {CLOUDS.map((c, i) => (
        <Cloud key={i} {...c} />
      ))}
    </>
  );
}