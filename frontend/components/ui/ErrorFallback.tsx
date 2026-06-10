"use client";

export default function ErrorFallback({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 gap-4 font-sans text-center">
      <p className="text-[15px] text-fg-mid max-w-[360px]">
        {error.message || "Something went wrong. Please try again."}
      </p>
      <button
        onClick={reset}
        className="px-5 py-2 rounded-lg border-1.5 border-border bg-transparent text-indigo font-sans font-semibold text-sm cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
