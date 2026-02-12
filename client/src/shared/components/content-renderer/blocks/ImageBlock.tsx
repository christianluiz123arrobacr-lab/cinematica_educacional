export function ImageBlockRenderer({ block }: any) {
  return <img src={block.url} alt={block.alt} className="max-w-full rounded-lg" />;
}
