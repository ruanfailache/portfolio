export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 text-fg-soft font-sans text-[15px] gap-3">
      <span className="text-[32px]">✦</span>
      <p>{message}</p>
    </div>
  );
}
