import { motion } from 'framer-motion';
import aboutImg from '@/assets/me-sit.png';
import { ABOUT_CARDS } from '@/data/portfolio';
import { GlassCard } from '@/Components/ui/GlassCard';
import { ScrollReveal } from '@/Components/ui/ScrollReveal';
import { SectionHeading } from '@/Components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/utils/animations';
import styles from './About.module.scss';

export function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <ScrollReveal>
          <SectionHeading
            label="01 / About"
            title="Developer Profile"
            subtitle="Engineering scalable systems with a focus on clean architecture and intuitive experiences."
          />
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <img
                src={aboutImg}
                alt="Pratyush at workstation"
                className={styles.image}
                loading="lazy"
                width={400}
                height={480}
              />
              <div className={styles.imageOverlay} />
            </div>
          </ScrollReveal>

          <motion.div
            className={styles.cards}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {ABOUT_CARDS.map((card, index) => (
              <motion.div key={card.id} variants={fadeUp} custom={index}>
                <GlassCard className={styles.card}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    {card.icon}
                  </span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardContent}>{card.content}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
