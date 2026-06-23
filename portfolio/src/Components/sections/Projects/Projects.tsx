import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/portfolio';
import { ScrollReveal } from '@/Components/ui/ScrollReveal';
import { SectionHeading } from '@/Components/ui/SectionHeading';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.scss';

export function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <ScrollReveal>
          <SectionHeading
            label="03 / Projects"
            title="Command Center"
            subtitle="Selected builds spanning AI products, analytics, system design, and full-stack platforms."
          />
        </ScrollReveal>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
