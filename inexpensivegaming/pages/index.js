import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inexpensive Gaming</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Inexpensive Gaming!
        </h1>
        
        <div className={styles.grid}>
          <Link href="/parts/graphics-cards">
            <a className={styles.card}>
              <h2>Graphics Cards &rarr;</h2>
            </a>
          </Link>

          <Link href="/parts/cpus">
            <a className={styles.card}>
              <h2>CPUs &rarr;</h2>
            </a>
          </Link>

          <Link href="/parts/motherboards">
            <a className={styles.card}>
              <h2>Motherboards &rarr;</h2>
            </a>
          </Link>

          <Link href="/parts/memory">
            <a className={styles.card}>
              <h2>Memory &rarr;</h2>
            </a>
          </Link>

          <Link href="/parts/power-supplies">
            <a className={styles.card}>
              <h2>Power Supplies &rarr;</h2>
            </a>
          </Link>

          <Link href="/parts/cases">
            <a className={styles.card}>
              <h2>Cases &rarr;</h2>
            </a>
          </Link>

          <Link href="/parts/cooling">
            <a className={styles.card}>
              <h2>Cooling &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
