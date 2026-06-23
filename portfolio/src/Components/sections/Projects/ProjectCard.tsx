import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import type { Project } from '@/types';
import { GlassCard } from '@/Components/ui/GlassCard';
import { ProjectSitePreview } from './ProjectSitePreview';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const openDemo = () => {
    window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.cardWrapper}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <GlassCard className={`${styles.card} ${expanded ? styles.expanded : ''}`} hover={false}>
        <div className={styles.previewWrap}>
          <ProjectSitePreview
            demoUrl={project.demoUrl}
            title={project.title}
            fallbackImage={project.image}
          />
          <button
            type="button"
            className={styles.previewButton}
            onClick={openDemo}
            aria-label={`Open ${project.title} live demo`}
          >
            <span className={styles.previewLabel}>Open Live Site ↗</span>
          </button>
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.tech}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          <motion.div
            className={styles.highlights}
            initial={false}
            animate={{
              maxHeight: expanded ? 200 : 0,
              opacity: expanded ? 1 : 0,
              marginBottom: expanded ? 16 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </motion.div>

          <div className={styles.actions}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkPrimary}
            >
              Live Demo
            </a>
            <button
              type="button"
              className={styles.expandBtn}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? 'Less' : 'Highlights'}
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
