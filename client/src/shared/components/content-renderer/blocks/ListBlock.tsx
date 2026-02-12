export function ListBlockRenderer({ block }: any) {
  return <ul className="list-disc pl-6">{block.items.map((item: any, i: number) => <li key={i}>{item.content}</li>)}</ul>;
}
