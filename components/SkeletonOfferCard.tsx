export default function SkeletonOfferCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-oolee-line bg-white shadow-card">
      <div className="h-40 w-full animate-pulse bg-oolee-bg-alt" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="h-3 w-1/3 animate-pulse rounded bg-oolee-bg-alt" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-oolee-bg-alt" />
        <div className="h-3 w-full animate-pulse rounded bg-oolee-bg-alt" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-oolee-bg-alt" />
        <div className="mt-2 h-10 w-full animate-pulse rounded-pill bg-oolee-bg-alt" />
      </div>
    </div>
  );
}
