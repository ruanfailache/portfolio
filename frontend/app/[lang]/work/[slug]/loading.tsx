import Skeleton from "@/components/ui/Skeleton";

export default function CaseStudyLoading() {
  return (
    <div className="max-w-[920px] mx-auto px-8 pt-12">
      <Skeleton className="w-[140px] h-[14px] mb-8" />

      <div className="flex gap-2.5 mb-4">
        <Skeleton className="w-20 h-3" />
        <Skeleton className="w-[70px] h-3" />
      </div>

      <Skeleton className="w-[70%] h-11 mb-3" />
      <Skeleton className="w-[140px] h-4 mb-8" />
      <Skeleton className="w-full aspect-video mb-9 rounded-2xl" />

      <div className="grid grid-cols-[1fr_240px] gap-12">
        <div>
          <Skeleton className="w-[100px] h-[22px] mb-4" />
          <Skeleton className="w-full h-4 mb-2.5" />
          <Skeleton className="w-[95%] h-4 mb-2.5" />
          <Skeleton className="w-[85%] h-4 mb-2.5" />
          <Skeleton className="w-[90%] h-4 mb-2.5" />
          <Skeleton className="w-[70%] h-4 mb-8" />
          <div className="h-20 border-1.5 border-border rounded-xl" />
        </div>

        <div className="border-l-[1.5px] border-border pl-7">
          <Skeleton className="w-20 h-3 mb-3" />
          <Skeleton className="w-[90%] h-[14px] mb-6" />
          <Skeleton className="w-20 h-3 mb-3" />
          <div className="flex flex-wrap gap-1.5">
            <Skeleton className="w-[60px] h-[22px] rounded-full" />
            <Skeleton className="w-[70px] h-[22px] rounded-full" />
            <Skeleton className="w-[55px] h-[22px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
