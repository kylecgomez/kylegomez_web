import Nav from '@/components/Nav';
import styles from './projects.module.css';
import homeStyles from '../page.module.css';

const inProgress = [
  { name: 'Roguelike Pinball', desc: 'An indie game built in Godot 4 combining roguelike run mechanics with pinball physics. Two tables, 20-30 upgrades, and 3-5 run types targeting a 1.0 release.', status: 'In progress' },
  { name: 'kylegomez.com', desc: 'This site built on Next.js, hosted on Vercel, designed to showcase my work and writing as a personal brand platform.', status: 'In progress' },
];

const planned = [
  { name: 'AI SaaS', desc: 'Exploring a SaaS product leveraging AI agents for workflow automation. Early concept stage covering space/robotics or analytics tooling.', status: 'Planned' },
  { name: 'Content - YouTube / TikTok', desc: 'Documenting personal growth, career strategy, and life as a PM. Building in public as a vehicle for accountability and audience.', status: 'Planned' },
];

export default function Projects() {
  return (
    <main className={homeStyles.main}>
      <div className={homeStyles.container}>
        <Nav />
        <section className={homeStyles.hero}>
          <p className={homeStyles.heroLabel}>Projects</p>
          <h1 className={homeStyles.heroName}>Things I'm<br />building.</h1>
          <p className={homeStyles.heroDesc}>A collection of side projects, experiments, and ideas in progress spanning AI tooling, indie games, and personal systems.</p>
        </section>
        <section className={homeStyles.section}>
          <p className={homeStyles.sectionLabel}>In progress</p>
          <div className={homeStyles.timeline}>
            {inProgress.map((p, i) => (
              <div key={i} className={homeStyles.timelineItem}>
                <div><span className={styles.statusBadge}>{p.status}</span></div>
                <div>
                  <p className={homeStyles.timelineRole}>{p.name}</p>
                  <p className={homeStyles.timelineDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={homeStyles.section}>
          <p className={homeStyles.sectionLabel}>On deck</p>
          <div className={homeStyles.timeline}>
            {planned.map((p, i) => (
              <div key={i} className={homeStyles.timelineItem}>
                <div><span className={`${styles.statusBadge} ${styles.planned}`}>{p.status}</span></div>
                <div>
                  <p className={homeStyles.timelineRole}>{p.name}</p>
                  <p className={homeStyles.timelineDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <footer className={homeStyles.footer}>
          <span className={homeStyles.footerCopy}>© 2025 Kyle Gomez</span>
          <div className={homeStyles.footerLinks}>
            <a href="https://linkedin.com/in/kylemitchellgomez" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:kylecgomez@gmail.com">Email</a>
            <a href="https://github.com/kylegomez" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
