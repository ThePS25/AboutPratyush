import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useMousePosition } from '@/hooks/useMousePosition';
import styles from './CursorGlow.module.scss';

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!isDesktop) return null;

  return (
    <div
      className={styles.glow}
      aria-hidden="true"
      style={{
        left: x,
        top: y,
      }}
    />
  );
}
