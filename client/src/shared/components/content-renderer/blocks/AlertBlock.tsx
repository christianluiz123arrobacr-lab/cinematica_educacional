export function AlertBlockRenderer({ block }: any) {
  return <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">{block.content}</div>;
}
