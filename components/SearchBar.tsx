/** @format */

"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [q, setQ] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    setQ(searchParams.get("q") ?? "");
  }, [searchParams]);

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    const sp = new URLSearchParams(Array.from(searchParams.entries()));
    if (q) sp.set("q", q);
    else sp.delete("q");
    router.push(pathname + "?" + sp.toString());
  }

  return (
    <form onSubmit={submit}>
      <div className="relative">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm sản phẩm..."
          className="w-full rounded-2xl border border-border bg-card px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-fuchsia-500"
        />
        <button
          aria-label="Tìm"
          onClick={submit}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl border border-border hover:bg-muted/20"
        >
          🔍
        </button>
      </div>
    </form>
  );
}
