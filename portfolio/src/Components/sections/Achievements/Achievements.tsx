import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ACHIEVEMENTS } from '@/data/portfolio';
import { useCounter } from '@/hooks/useCounter';
import { GlassCard } from '@/Components/ui/GlassCard';
import { ScrollReveal } from '@/Components/ui/ScrollReveal';
import { SectionHeading } from '@/Components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/utils/animations';
import styles from './Achievements.module.scss';

function StatCard({
  label,
  value,
  suffix = '',
  isActive,
}: {
  label: string;
  value: number;
  suffix?: string;
  isActive: boolean;
}) {
  const count = useCounter(value, 2000, isActive);

  return (
    <GlassCard className={styles.stat}>
      <span className={styles.value}>
        {count}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </GlassCard>
  );
}

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className={styles.achievements}
      aria-labelledby="achievements-heading"
    >
      <div className={styles.inner}>
        <ScrollReveal>
          <SectionHeading
            label="05 / Stats"
            title="Achievements"
            subtitle="Numbers that reflect continuous building and learning."
          />
        </ScrollReveal>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {ACHIEVEMENTS.map((achievement) => (
            <motion.div key={achievement.id} variants={fadeUp}>
              <StatCard
                label={achievement.label}
                value={achievement.value}
                suffix={achievement.suffix}
                isActive
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
