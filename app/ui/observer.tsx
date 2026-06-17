'use client';
import { useEffect, useRef } from 'react';

export default function ObserverTarget({ onIntersect }: { onIntersect: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  const options = {
    threshold: 1.0 
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    }, options); 

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onIntersect]);

  return <div ref={ref} className="h-10 w-full" />;
}