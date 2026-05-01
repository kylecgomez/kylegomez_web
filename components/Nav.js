'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>Kyle Gomez</Link>
      <div className={styles.links}>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>Experience</Link>
        <Link href="/#writing">Writing</Link>
        <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>Projects</Link>
        <a href="mailto:kylecgomez@gmail.com" className={styles.contact}>Contact <span>↗</span></a>
      </div>
    </nav>
  );
}
