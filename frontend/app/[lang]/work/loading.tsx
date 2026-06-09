import Skeleton from "@/components/ui/Skeleton";

export default function WorkLoading() {
  return (
    <div className="max-w-[1100px] mx-auto px-8 py-16">
      <div className="mb-12">
        <Skeleton className="w-[60px] h-3 mb-3" />
        <Skeleton className="w-[180px] h-9 mb-[14px]" />
        <Skeleton className="w-[75%] h-4" />
      </div>

      <div className="mb-16">
        <Skeleton className="w-[140px] h-[22px] mb-5" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border-[1.5px] border-border rounded-2xl p-6">
              <Skeleton className="w-20 h-3 mb-4" />
              <Skeleton className="w-[90%] h-[14px] mb-[10px]" />
              <Skeleton className="w-[80%] h-[14px] mb-[10px]" />
              <Skeleton className="w-[70%] h-[14px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Skeleton className="w-[160px] h-[22px] mb-5" />
        <div className="flex flex-col gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border-[1.5px] border-border rounded-2xl px-7 py-6">
              <Skeleton className="w-[60%] h-[22px] mb-[10px]" />
              <Skeleton className="w-[85%] h-[15px] mb-[10px]" />
              <div className="flex gap-2 mt-[14px]">
                <Skeleton className="w-[60px] h-[22px] rounded-full" />
                <Skeleton className="w-[70px] h-[22px] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
