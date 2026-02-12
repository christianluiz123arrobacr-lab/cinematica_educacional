export function VideoBlockRenderer({ block }: any) {
  return <video src={block.url} controls className="max-w-full rounded-lg" />;
}
