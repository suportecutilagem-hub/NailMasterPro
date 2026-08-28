import { useEffect, useRef, useState, type ReactNode } from "react";

interface DeferredSectionProps {
  children: ReactNode;
  fallbackHeight: number;
  rootMargin?: string;
}

/**
 * Keeps the page height stable while deferring below-the-fold React trees.
 * The generous root margin lets content render before the visitor reaches it.
 */
export default function DeferredSection({
  children,
  fallbackHeight,
  rootMargin = "900px 0px",
}: DeferredSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={sectionRef}
      style={shouldRender ? undefined : { minHeight: `${fallbackHeight}px` }}
      aria-busy={!shouldRender}
    >
      {shouldRender ? children : null}
    </div>
  );
}