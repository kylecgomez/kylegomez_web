import Nav from '@/components/Nav';
import styles from './page.module.css';

const experience = [
  { dates: '2022 — Present', role: 'Technical Project Manager', company: 'Feedonomics', desc: 'Leading cross-functional programs across feed optimization and digital advertising infrastructure. Driving delivery at scale across engineering and product teams.' },
  { dates: '2019 — 2022', role: 'Trust & Safety Operations', company: 'Accenture · Embedded at Meta', desc: 'Embedded within WhatsApp and Facebook enforcement teams, focusing on exploitation-specific policy enforcement and operational trust & safety programs.' },
  { dates: '2018 — 2019', role: 'Data & IP Operations', company: 'BCForward', desc: 'Managed data and intellectual property workflows, building operational programs across structured data pipelines.' },
];

const skills = [
  { label: 'Program Management', tags: ['Roadmapping', 'OKRs', 'Agile / Scrum', 'Cross-functional delivery'] },
  { label: 'Trust & Safety', tags: ['Policy enforcement', 'Exploitation ops', 'Risk frameworks', 'Content moderation'] },
  { label: 'Technical', tags: ['SQL', 'Python', 'Data pipelines', 'Feed optimization'] },
  { label: 'Platforms & Tools', tags: ['Jira', 'Confluence', 'Looker', 'Google Ads'] },
];

const writing = [
  { tag: 'Trust & Safety', title: 'What exploitation enforcement taught me about systems thinking', date: 'Apr 2025' },
  { tag: 'Program Management', title: 'The quiet skill every PM needs: knowing what not to ship', date: 'Mar 2025' },
  { tag: 'Career', title: 'From Paris to Austin: rebuilding intentionally', date: 'Feb 2025' },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Nav />
        <section className={styles.hero}>
          <p className={styles.heroLabel}>Project Manager · Austin, TX</p>
          <h1 className={styles.heroName}>Building systems<br />that scale.</h1>
          <p className={styles.heroDesc}>I'm Kyle — a Project Manager with 7+ years at the intersection of digital advertising, trust & safety, and data operations. I turn complex, ambiguous problems into programs that ship.</p>
          <div className={styles.heroActions}>
            <a href="/kyle-gomez-resume.pdf" download className={styles.btnPrimary}>Download resume</a>
            <a href="mailto:kylecgomez@gmail.com" className={styles.btnSecondary}>Get in touch</a>
          </div>
        </section>
        <section className={styles.section}>
          <p className={styles.sectionLabel}>Experience</p>
          <div className={styles.timeline}>
            {experience.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <p className={styles.timelineDate}>{item.dates}</p>
                <div>
                  <p className={styles.timelineRole}>{item.role}</p>
                  <p className={styles.timelineCompany}>{item.company}</p>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <p className={styles.sectionLabel}>Skills</p>
          <div className={styles.skillsGrid}>
            {skills.map((group, i) => (
              <div key={i} className={styles.skillGroup}>
                <p className={styles.skillGroupLabel}>{group.label}</p>
                <div className={styles.skillTags}>
                  {group.tags.map((tag, j) => (
                    <span key={j} className={styles.skillTag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.section} id="writing">
          <p className={styles.sectionLabel}>Writing</p>
          <div className={styles.blogGrid}>
            {writing.map((post, i) => (
              <div key={i} className={styles.blogItem}>
                <div>
                  <p className={styles.blogTag}>{post.tag}</p>
                  <p className={styles.blogTitle}>{post.title}</p>
                </div>
                <p className={styles.blogDate}>{post.date}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className={styles.footer}>
          <span className={styles.footerCopy}>© 2025 Kyle Gomez</span>
          <div className={styles.footerLinks}>
            <a href="https://linkedin.com/in/kylemitchellgomez" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:kylecgomez@gmail.com">Email</a>
            <a href="https://github.com/kylegomez" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
