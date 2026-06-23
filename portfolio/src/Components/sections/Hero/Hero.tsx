import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import avatarImg from '@/assets/me-stand.png';
import { HERO_SUBTITLES, SITE } from '@/data/portfolio';
import { ParticleField } from '@/Components/layout/ParticleField';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { scrollToSection } from '@/utils/scroll';
import styles from './Hero.module.scss';

export function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % HERO_SUBTITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleResume = () => {
    if (SITE.resumeUrl) {
      window.open(SITE.resumeUrl, '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <ParticleField />

      <motion.div
        className={styles.content}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.badge} variants={fadeUp}>
          <span className={styles.badgeDot} />
          {SITE.title} @ {SITE.company}
        </motion.div>

        <motion.h1 className={styles.name} variants={fadeUp}>
          {SITE.name.split(' ').map((word, i) => (
            <span key={word} className={styles.nameWord} style={{ animationDelay: `${i * 0.1}s` }}>
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.p className={styles.role} variants={fadeUp}>
          {SITE.title}
        </motion.p>

        <motion.div className={styles.subtitleWrap} variants={fadeUp}>
          <AnimatePresence mode="wait">
            <motion.span
              key={subtitleIndex}
              className={styles.subtitle}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {HERO_SUBTITLES[subtitleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div className={styles.actions} variants={fadeUp}>
          <button type="button" className={styles.primaryBtn} onClick={handleResume}>
            Resume
          </button>
          <button
            type="button"
            className={styles.secondaryBtn}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.avatarWrap}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div className={styles.avatarGlow} />
        <img
          src={avatarImg}
          alt="Pratyush Srivastava"
          className={styles.avatar}
          loading="eager"
          width={400}
          height={500}
        />
      </motion.div>
    </section>
  );
}
