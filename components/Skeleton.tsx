'use client';
export default function Skeleton({ className='' }: { className?: string }){
  return <div className={`animate-pulse rounded-md bg-muted/40 ${className}`} />;
}
