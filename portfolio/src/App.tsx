import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BootScreen } from '@/Components/boot/BootScreen';
import { CursorGlow } from '@/Components/layout/CursorGlow';
import { GridBackground } from '@/Components/layout/GridBackground';
import { DockNav } from '@/Components/navigation/DockNav';
import { About } from '@/Components/sections/About/About';
import { Achievements } from '@/Components/sections/Achievements/Achievements';
import { Contact } from '@/Components/sections/Contact/Contact';
import { Experience } from '@/Components/sections/Experience/Experience';
import { Hero } from '@/Components/sections/Hero/Hero';
import { Projects } from '@/Components/sections/Projects/Projects';
import { Skills } from '@/Components/sections/Skills/Skills';
import styles from './App.module.scss';

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className={styles.app}>
      <GridBackground />
      <CursorGlow />

      <AnimatePresence mode="wait">
        {!booted && <BootScreen key="boot" onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <>
          <main className={styles.main}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </main>
          <DockNav />
        </>
      )}
    </div>
  );
}
