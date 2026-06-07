const TICKER_ITEMS = [
  'MERCARI',
  'YAHOO AUCTIONS',
  'SURUGAYA',
  'RAKUMA',
  'MANDARAKE',
  'BOOKOFF',
  'LASHINBANG',
  'MERCARI SHOPS',
  'YAHOO FLEA MARKET',
];

function TickerItem({ name }) {
  return (
    <span className="inline-flex items-center gap-4 px-4 font-pixel text-[7px]" style={{ whiteSpace: 'nowrap' }}>
      <span style={{ color: '#14304D' }}>{name}</span>
      <span style={{ color: '#D8B15A' }}>■</span>
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
        {doubled.map((name, i) => (
          <TickerItem key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}
