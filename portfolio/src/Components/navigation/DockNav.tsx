import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { scrollToSection } from '@/utils/scroll';
import styles from './DockNav.module.scss';

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function DockNav() {
  const activeId = useActiveSection(SECTION_IDS);
  const isCompact = useMediaQuery('(max-width: 639px)');

  return (
    <div className={styles.anchor}>
      <motion.nav
        className={styles.dock}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        aria-label="Main navigation"
      >
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            const label =
              isCompact && item.shortLabel ? item.shortLabel : item.label;

            return (
              <li key={item.id} className={styles.listItem}>
                <button
                  type="button"
                  className={`${styles.item} ${isActive ? styles.active : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  aria-label={item.label}
                >
                  <span className={styles.label}>{label}</span>
                  {isActive && (
                    <motion.span
                      className={styles.indicator}
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </div>
  );
}
