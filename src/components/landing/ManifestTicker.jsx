const TICKER_ITEMS = [
  { id: 'MERCARI', item: 'Vintage Seiko 6139', city: 'Arrival photo', status: 'RECEIVED', statusColor: '#5d7042' },
  { id: 'YAHOO AUCTIONS', item: 'Meiji-era Imari Plate', city: 'Inspection', status: 'CHECKED', statusColor: '#c39a4a' },
  { id: 'SURUGAYA', item: 'Collector Figure Set', city: 'Temporary storage', status: 'HELD SAFELY', statusColor: '#5d7042' },
  { id: 'RAKUMA', item: '1970s Takamine Guitar', city: 'Seller review', status: 'PURCHASED', statusColor: '#5d9290' },
  { id: 'MANDARAKE', item: 'Vintage Manga Set', city: 'Consolidation', status: 'PACKING', statusColor: '#c39a4a' },
];

function TickerItem({ item }) {
  return (
    <span className="inline-flex items-center gap-3 px-4 font-pixel text-[7px]" style={{ whiteSpace: 'nowrap' }}>
      <span style={{ color: '#2a3f5a' }}>█</span>
      <span style={{ color: '#5d9290' }}>{item.id}</span>
      <span style={{ color: '#c39a4a' }}>{item.item}</span>
      <span style={{ color: '#a0b0c0' }}>[{item.city}]</span>
      <span style={{ color: item.statusColor }}>● {item.status}</span>
    </span>
  );
}

export default function ManifestTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      className="border-y-4 py-3 overflow-hidden material-parcel"
      style={{
        borderColor: '#a94f2c',
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
