import Skeleton from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div className="max-w-[860px] mx-auto px-8 py-16">
      <div className="mb-12">
        <Skeleton className="w-[60px] h-3 mb-3" />
        <Skeleton className="w-[180px] h-9 mb-3.5" />
        <Skeleton className="w-[80%] h-4" />
      </div>

      <div className="flex flex-col gap-5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="border-1.5 border-border rounded-2xl px-7 py-6 flex flex-col gap-3"
          >
            <div className="flex gap-2">
              <Skeleton className="w-[60px] h-[22px] rounded-full" />
              <Skeleton className="w-[50px] h-[22px] rounded-full" />
            </div>
            <Skeleton className="w-[70%] h-6" />
            <Skeleton className="w-[90%] h-[15px]" />
            <Skeleton className="w-[60%] h-[15px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
