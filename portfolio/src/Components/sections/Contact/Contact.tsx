import { motion } from 'framer-motion';
import { CONTACT_LINKS, SITE } from '@/data/portfolio';
import { GlassCard } from '@/Components/ui/GlassCard';
import { ScrollReveal } from '@/Components/ui/ScrollReveal';
import { SectionHeading } from '@/Components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/utils/animations';
import styles from './Contact.module.scss';

export function Contact() {
  const handleClick = (href: string, type: string) => {
    if (type === 'download' && !href) return;
    if (type === 'email') {
      window.location.href = href;
    } else if (type === 'download' && href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <ScrollReveal>
          <SectionHeading
            label="06 / Contact"
            title="Communication Panel"
            subtitle="Open channels for collaboration, opportunities, and conversations."
          />
        </ScrollReveal>

        <motion.div
          className={styles.panel}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.div variants={fadeUp} className={styles.intro}>
            <GlassCard className={styles.introCard}>
              <p className={styles.greeting}>
                Ready to connect? I&apos;m always open to discussing engineering,
                products, and new opportunities.
              </p>
              <p className={styles.status}>
                <span className={styles.statusDot} />
                Available for opportunities
              </p>
            </GlassCard>
          </motion.div>

          <div className={styles.links}>
            {CONTACT_LINKS.map((link) => {
              const disabled = link.type === 'download' && !link.href;
              return (
                <motion.div key={link.id} variants={fadeUp} className={styles.linkItem}>
                  <button
                    type="button"
                    className={`${styles.linkCard} ${disabled ? styles.disabled : ''}`}
                    onClick={() => handleClick(link.href, link.type)}
                    disabled={disabled}
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <span className={styles.linkIcon}>
                      {link.id === 'linkedin' && 'in'}
                      {link.id === 'github' && '{ }'}
                      {link.id === 'email' && '@'}
                      {link.id === 'resume' && '↓'}
                    </span>
                    <span className={styles.linkLabel}>{link.label}</span>
                    <span className={styles.linkValue}>{link.value}</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <footer className={styles.footer}>
          <p>
            © {new Date().getFullYear()} {SITE.name}. Built with React, TypeScript & Framer Motion.
          </p>
        </footer>
      </div>
    </section>
  );
}
