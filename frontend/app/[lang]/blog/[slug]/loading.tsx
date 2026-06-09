import Skeleton from "@/components/ui/Skeleton";

export default function PostLoading() {
  return (
    <div className="max-w-[720px] mx-auto px-8 py-12">
      <Skeleton className="w-[140px] h-[14px] mb-8" />

      <div className="flex gap-2 mb-5">
        <Skeleton className="w-[60px] h-[22px] rounded-full" />
        <Skeleton className="w-[50px] h-[22px] rounded-full" />
      </div>

      <Skeleton className="w-[85%] h-11 mb-3" />
      <Skeleton className="w-[65%] h-11 mb-6" />

      <Skeleton className="w-full h-4 mb-[10px]" />
      <Skeleton className="w-[90%] h-4 mb-[10px]" />
      <Skeleton className="w-[75%] h-4 mb-10" />

      <div className="h-px bg-border mb-10" />

      {[100, 95, 88, 92, 70, 80, 96, 85, 60].map((w, i) => (
        <Skeleton key={i} className={`w-[${w}%] h-4 mb-[14px]`} />
      ))}
    </div>
  );
}
