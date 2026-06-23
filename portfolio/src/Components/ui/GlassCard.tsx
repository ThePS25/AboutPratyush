import { motion } from 'framer-motion';
import styles from './GlassCard.module.scss';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`${styles.card} ${hover ? styles.hoverable : ''} ${className ?? ''}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
