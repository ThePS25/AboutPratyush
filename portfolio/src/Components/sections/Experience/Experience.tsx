import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/data/portfolio';
import { GlassCard } from '@/Components/ui/GlassCard';
import { ScrollReveal } from '@/Components/ui/ScrollReveal';
import { SectionHeading } from '@/Components/ui/SectionHeading';
import { fadeUp, slideInLeft, slideInRight } from '@/utils/animations';
import styles from './Experience.module.scss';

function AmazonLogo() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
      <text x="2" y="18" fill="#FF9900" fontSize="14" fontWeight="bold" fontFamily="Arial">
        a
      </text>
    </svg>
  );
}

export function Experience() {
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-heading">
      <div className={styles.inner}>
        <ScrollReveal>
          <SectionHeading
            label="04 / Experience"
            title="Career Timeline"
            subtitle="From internships to SDE at Amazon — building systems that scale."
          />
        </ScrollReveal>

        <div className={styles.timeline}>
          {EXPERIENCE.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <motion.div
                className={`${styles.item} ${item.featured ? styles.featured : ''}`}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <div className={styles.marker}>
                  <span className={styles.dot} />
                  {index < EXPERIENCE.length - 1 && <span className={styles.line} />}
                </div>

                <GlassCard className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.logo}>
                      {item.logoIcon === 'amazon' ? (
                        <AmazonLogo />
                      ) : item.logo ? (
                        <img src={item.logo} alt={item.company} loading="lazy" />
                      ) : null}
                    </div>
                    <div>
                      <h3 className={styles.role}>{item.role}</h3>
                      <p className={styles.company}>
                        {item.company}
                        {item.featured && <span className={styles.featuredBadge}>Featured</span>}
                      </p>
                      <p className={styles.meta}>
                        {item.period} · {item.location}
                      </p>
                    </div>
                  </div>

                  <ul className={styles.highlights}>
                    {item.highlights.map((highlight) => (
                      <motion.li key={highlight} variants={fadeUp}>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
