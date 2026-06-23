import { TECH_STACK_LOGOS } from '@/data/skillLogos';
import styles from './TechLogoMarquee.module.scss';

export function TechLogoMarquee() {
  const track = [...TECH_STACK_LOGOS, ...TECH_STACK_LOGOS];

  return (
    <div className={styles.wrap} aria-label="Technology stack logos">
      <div className={styles.label}>
        <span className={styles.labelTitle}>Tech Stack</span>
        <span className={styles.labelSub}>Tools & frameworks</span>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {track.map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.tile}>
              <div className={styles.logoFrame}>
                <img src={item.logo} alt={item.name} className={styles.logo} loading="lazy" />
              </div>
              <span className={styles.name}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
