export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="block w-6 h-0.5 bg-indigo rounded-full" />
      <span className="text-xs font-bold tracking-[0.12em] uppercase text-indigo font-sans">
        {children}
      </span>
    </div>
  );
}
