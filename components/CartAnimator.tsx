'use client';
import { useEffect } from 'react';
export default function CartAnimator(){
  useEffect(()=>{
    function onAdd(e: Event){
      const detail = (e as CustomEvent).detail as { image?: string; from: { x:number;y:number;w:number;h:number } };
      const targetEl = document.querySelector('[data-minicart]') as HTMLElement | null;
      if(!targetEl) return;
      const t = targetEl.getBoundingClientRect();
      const startX = detail.from.x + detail.from.w/2;
      const startY = detail.from.y + detail.from.h/2;
      const endX = t.left + t.width/2;
      const endY = t.top + t.height/2;
      const el = document.createElement('div');
      el.className = 'fly-item';
      el.style.left = `${startX-24}px`;
      el.style.top = `${startY-24}px`;
      if(detail.image) el.style.backgroundImage = `url("${detail.image}")`;
      document.body.appendChild(el);
      void el.offsetWidth;
      el.style.transform = `translate(${endX-startX}px, ${endY-startY}px) scale(0.2) rotate(25deg)`;
      el.style.opacity = '0.1';
      const cleanup = () => { el.removeEventListener('transitionend', cleanup); el.remove(); targetEl.classList.add('minicart-bump'); setTimeout(()=>targetEl.classList.remove('minicart-bump'), 300); };
      el.addEventListener('transitionend', cleanup);
    }
    window.addEventListener('cart:add', onAdd as EventListener);
    return ()=>window.removeEventListener('cart:add', onAdd as EventListener);
  },[]);
  return null;
}
