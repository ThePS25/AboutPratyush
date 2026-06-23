import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/utils/scroll';
import styles from './DockNav.module.scss';

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function DockNav() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
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
          return (
            <li key={item.id}>
              <button
                type="button"
                className={`${styles.item} ${isActive ? styles.active : ''}`}
                onClick={() => scrollToSection(item.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className={styles.label}>{item.label}</span>
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
  );
}
