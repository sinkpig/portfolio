import React from 'react';
import Link from 'next/link'
import { textContent } from './data/textContent';
import styles from '@/app/page.module.css'

export default function Home() {
  const t = textContent.home
  return (
    <main className={styles.outerWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.introduction}>
            <h2 className={styles.heading}>{t.heading}</h2>
            <h1 className={styles.title}>
              {t.titles.map((title, index) => (
                <React.Fragment key={title}>
                  <span>{title}</span>
                  {t.titles.length > 1 && index < t.titles.length - 1 && (
                    <span>&nbsp;&&nbsp;</span>
                  )}
                </React.Fragment>
              ))}
            </h1>
            <h3 className={styles.description}>
              {t.description}
              &nbsp;<Link href={t.link}>{t.linkText}</Link>
            </h3>
            <div className={styles.message}>
              {t.message}
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
