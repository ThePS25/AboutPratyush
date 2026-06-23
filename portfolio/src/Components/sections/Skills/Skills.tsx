import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/portfolio';
import { getSkillLogo } from '@/data/skillLogos';
import { GlassCard } from '@/Components/ui/GlassCard';
import { ScrollReveal } from '@/Components/ui/ScrollReveal';
import { SectionHeading } from '@/Components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { TechLogoMarquee } from './TechLogoMarquee';
import styles from './Skills.module.scss';

function SkillBar({ name, level }: { name: string; level: number }) {
  const logo = getSkillLogo(name);

  return (
    <div className={styles.skill}>
      <div className={styles.skillHeader}>
        <div className={styles.skillNameRow}>
          {logo && (
            <span className={styles.skillIconWrap}>
              <img src={logo} alt="" className={styles.skillIcon} loading="lazy" />
            </span>
          )}
          <span className={styles.skillName}>{name}</span>
        </div>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <motion.div
          className={styles.skillFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <ScrollReveal>
          <SectionHeading
            label="02 / Skills"
            title="Skills Dashboard"
            subtitle="Interactive overview of technologies and competencies across the stack."
          />
        </ScrollReveal>

        <ScrollReveal>
          <TechLogoMarquee />
        </ScrollReveal>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div key={category.id} variants={fadeUp}>
              <GlassCard className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.skillList}>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
