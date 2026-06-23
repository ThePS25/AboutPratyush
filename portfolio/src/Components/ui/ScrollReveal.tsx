import { motion, type HTMLMotionProps } from 'framer-motion';
import { fadeUp } from '@/utils/animations';
import styles from './ScrollReveal.module.scss';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      className={`${styles.reveal} ${className ?? ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
