export function QuoteBlockRenderer({ block }: any) {
  return <blockquote className="border-l-4 border-gray-300 pl-4 italic">{block.content}</blockquote>;
}
