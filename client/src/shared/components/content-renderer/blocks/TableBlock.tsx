export function TableBlockRenderer({ block }: any) {
  return <table className="w-full border"><thead><tr>{block.headers.map((h: string, i: number) => <th key={i} className="border px-4 py-2">{h}</th>)}</tr></thead></table>;
}
