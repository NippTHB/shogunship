const TICKER_ITEMS = [
  { id: 'MRC-0412', item: 'Vintage Seiko 5 Automatic', city: 'Tokyo', status: 'ARRIVED', statusColor: '#69A18E' },
  { id: 'YAH-0891', item: 'Kyo-yaki Tea Bowl', city: 'Kyoto', status: 'INSPECTED', statusColor: '#69A18E' },
  { id: 'SRG-0234', item: 'Famicom Game Lot', city: 'Osaka', status: 'IN STORAGE', statusColor: '#C1A562' },
  { id: 'RKM-0567', item: 'Showa-era Denim Jacket', city: 'Tokyo', status: 'CONSOLIDATING', statusColor: '#C1A562' },
  { id: 'MDK-0103', item: 'Dragon Ball Manga Vol.1–42', city: 'Nagoya', status: 'ARRIVED', statusColor: '#69A18E' },
  { id: 'YAH-0892', item: '1970s Takamine Guitar', city: 'Tokyo', status: 'PACKING', statusColor: '#C1A562' },
  { id: 'MRC-0568', item: 'Raku Chawan — Black', city: 'Kyoto', status: 'INSPECTED', statusColor: '#69A18E' },
  { id: 'SRG-0235', item: 'Vintage Canon F-1 Body', city: 'Osaka', status: 'SHIPPED', statusColor: '#4C9E7E' },
];

function TickerItem({ item }) {
  return (
    <span className="inline-flex items-center gap-3 px-5 font-pixel text-[7px]" style={{ whiteSpace: 'nowrap' }}>
      <span style={{ color: '#C1A562' }}>▸</span>
      <span style={{ color: '#8a7a6a' }}>{item.id}</span>
      <span style={{ color: '#4a3a2a' }}>{item.item}</span>
      <span style={{ color: '#8a7a6a' }}>[{item.city}]</span>
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
        borderColor: '#6A4A3A',
        background: '#F2E1B1',
      }}
    >
      <div className="font-pixel text-[6px] px-4 mb-1" style={{ color: '#6A4A3A', opacity: 0.6 }}>
        ACTIVE MANIFEST
      </div>
      <div className="flex animate-ticker" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <TickerItem key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}