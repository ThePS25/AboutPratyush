import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { BOOT_STEPS } from '@/data/portfolio';
import { EASE_OUT_EXPO } from '@/utils/animations';
import styles from './BootScreen.module.scss';

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [skipped, setSkipped] = useState(false);

  const complete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  const skip = useCallback(() => {
    setSkipped(true);
    complete();
  }, [complete]);

  useEffect(() => {
    if (skipped) return;

    const step = BOOT_STEPS[currentStep];
    if (!step) {
      const timer = setTimeout(complete, 400);
      return () => clearTimeout(timer);
    }

    setProgress(0);
    const start = performance.now();
    let frameId: number;

    const animateProgress = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / step.duration) * 100, 100);
      setProgress(pct);

      if (elapsed < step.duration) {
        frameId = requestAnimationFrame(animateProgress);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    };

    frameId = requestAnimationFrame(animateProgress);
    return () => cancelAnimationFrame(frameId);
  }, [currentStep, skipped, complete]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') skip();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [skip]);

  return (
    <motion.div
      className={styles.boot}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
    >
        <div className={styles.terminal}>
          <div className={styles.header}>
            <span className={styles.dot} data-color="red" />
            <span className={styles.dot} data-color="yellow" />
            <span className={styles.dot} data-color="green" />
            <span className={styles.title}>portfolio-os v1.0</span>
          </div>

          <div className={styles.body}>
            {BOOT_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`${styles.line} ${index <= currentStep ? styles.visible : ''}`}
              >
                <span className={styles.prompt}>{'>'}</span>
                <span className={styles.text}>{step.text}</span>
                {index === currentStep && (
                  <span className={styles.cursor}>_</span>
                )}
                {index < currentStep && (
                  <span className={styles.check}>✓</span>
                )}
              </div>
            ))}
          </div>

          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button type="button" className={styles.skip} onClick={skip}>
          Skip →
        </button>
    </motion.div>
  );
}
