export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const dockOffset = 100;
  const top = element.getBoundingClientRect().top + window.scrollY - dockOffset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
