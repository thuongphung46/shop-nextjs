/** @format */

"use client";
import { useState } from "react";
import Skeleton from "./Skeleton";

export default function ImageWithSkeleton({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={className} style={{ position: "relative" }}>
      {!loaded && <Skeleton className="absolute inset-0 rounded-xl" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-t-xl ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
