'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle(){
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(()=>setMounted(true),[]);
  if(!mounted) return <div className="px-3 py-2 rounded-xl border border-border" />;
  const isDark = theme !== 'light';
  return (
    <button className="px-3 py-2 rounded-xl border border-border hover:bg-muted/20" onClick={()=>setTheme(isDark?'light':'dark')}>
      {isDark ? '🌙' : '🌞'}
    </button>
  );
}
