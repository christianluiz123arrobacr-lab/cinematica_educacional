export function ExampleBlockRenderer({ block }: any) {
  return <div className="border-l-4 border-blue-500 pl-4 py-2"><strong>{block.title}</strong><p>{block.problem}</p></div>;
}
