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
      <span style={{ color: '#4c9e7e' }}>{name}</span>
      <span style={{ color: '#f9b76c' }}>■</span>
    </span>
  );
}

export default function ManifestTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      className="border-y-4 py-3 overflow-hidden material-parcel marketplace-ticker"
      style={{
        borderColor: '#f9b76c',
        background: '#4c9e7e',
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
