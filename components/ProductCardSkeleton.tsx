'use client';
import Skeleton from './Skeleton';
export default function ProductCardSkeleton(){
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
      <Skeleton className="w-full h-48 rounded-xl" />
      <Skeleton className="h-5 w-2/3 mt-3" />
      <div className="flex items-center justify-between mt-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-10 w-40 mt-3" />
    </div>
  );
}
