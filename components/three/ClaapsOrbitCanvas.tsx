"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { StaticOrbitFallback } from "@/components/three/StaticOrbitFallback";

const ClaapsOrbitScene = dynamic(
  () => import("@/components/three/ClaapsOrbitScene").then((mod) => mod.ClaapsOrbitScene),
  { ssr: false }
);

/**
 * Mounts the WebGL orbit scene only when: the viewport is desktop-sized
 * (it's laid out for the hero's right-side column, which is hidden below
 * lg), prefers-reduced-motion is not set, and the hero has scrolled into
 * view. The static fallback is always present underneath so there's never
 * a layout shift and the 3D scene never contributes to LCP/TBT.
 */
export function ClaapsOrbitCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (prefersReducedMotion || !isDesktop) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true" className="relative h-full w-full overflow-visible">
      <div
        className={`absolute inset-0 overflow-visible transition-opacity duration-700 ${
          shouldRender ? "opacity-0" : "opacity-100"
        }`}
      >
        <StaticOrbitFallback />
      </div>
      {shouldRender ? (
        <div className="absolute inset-0 overflow-visible">
          <ClaapsOrbitScene />
        </div>
      ) : null}
    </div>
  );
}
