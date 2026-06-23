import { useCallback, useEffect, useRef, useState } from 'react';

function getVisibleSections(sectionIds: string[]): Map<string, number> {
  const visibility = new Map<string, number>();
  const viewportMid = window.innerHeight * 0.4;

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const sectionMid = rect.top + rect.height / 2;
    const distance = Math.abs(sectionMid - viewportMid);
    const score = Math.max(0, 1 - distance / window.innerHeight);

    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      visibility.set(id, score);
    }
  });

  return visibility;
}

function pickActiveSection(sectionIds: string[]): string {
  const visibility = getVisibleSections(sectionIds);

  if (visibility.size === 0) {
    return sectionIds[0] ?? '';
  }

  let bestId = sectionIds[0] ?? '';
  let bestScore = -1;

  sectionIds.forEach((id) => {
    const score = visibility.get(id) ?? 0;
    if (score > bestScore) {
      bestScore = score;
      bestId = id;
    }
  });

  return bestId;
}

export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');
  const sectionIdsRef = useRef(sectionIds);
  sectionIdsRef.current = sectionIds;

  const update = useCallback(() => {
    const next = pickActiveSection(sectionIdsRef.current);
    setActiveId((prev) => (prev === next ? prev : next));
  }, []);

  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    update();

    // Lazy-loaded sections mount after nav — keep checking until all exist
    const retry = setInterval(() => {
      update();
      const allMounted = sectionIdsRef.current.every((id) => document.getElementById(id));
      if (allMounted) clearInterval(retry);
    }, 250);

    const stopRetry = setTimeout(() => clearInterval(retry), 10000);

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(retry);
      clearTimeout(stopRetry);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [update, sectionIds.join(',')]);

  return activeId;
}
