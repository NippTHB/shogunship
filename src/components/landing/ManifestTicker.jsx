const TICKER_ITEMS = [
  { id: 'TK-0891', item: 'Vintage Seiko 6139', city: 'Tokyo', status: 'SECURED', statusColor: '#6abf5e' },
  { id: 'OS-0234', item: 'Meiji-era Imari Plate', city: 'Osaka', status: 'IN TRANSIT', statusColor: '#ff6b2b' },
  { id: 'KY-0567', item: 'Kyo-yaki Tea Bowl', city: 'Kyoto', status: 'INSPECTED', statusColor: '#6abf5e' },
  { id: 'TK-0892', item: '1970s Takamine Guitar', city: 'Tokyo', status: 'SECURED', statusColor: '#6abf5e' },
  { id: 'YK-0103', item: 'Edo Period Netsuke', city: 'Yokohama', status: 'PACKING', statusColor: '#e8c87a' },
  { id: 'OS-0235', item: 'Showa Denim Jacket', city: 'Osaka', status: 'IN TRANSIT', statusColor: '#ff6b2b' },
  { id: 'TK-0893', item: 'Vintage Canon F-1', city: 'Tokyo', status: 'SECURED', statusColor: '#6abf5e' },
  { id: 'KY-0568', item: 'Raku Chawan Black', city: 'Kyoto', status: 'INSPECTED', statusColor: '#6abf5e' },
];

function TickerItem({ item }) {
  return (
    <span className="inline-flex items-center gap-3 px-4 font-pixel text-[7px]" style={{ whiteSpace: 'nowrap' }}>
      <span style={{ color: '#2a3f5a' }}>█</span>
      <span style={{ color: '#7ab8ff' }}>{item.id}</span>
      <span style={{ color: '#e8c87a' }}>{item.item}</span>
      <span style={{ color: '#a0b0c0' }}>[{item.city}]</span>
      <span style={{ color: item.statusColor }}>● {item.status}</span>
    </span>
  );
}

export default function ManifestTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      className="border-y-4 py-3 overflow-hidden"
      style={{
        borderColor: '#ff6b2b',
        background: '#0f1b2d',
      }}
    >
      <div className="flex animate-ticker" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <TickerItem key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}