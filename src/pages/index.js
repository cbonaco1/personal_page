import Head from 'next/head'
import Image from "next/image";

import About from "../sections/About";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Bonacore</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic&display=swap" type="text/css"/>
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Raleway:400,300,700&display=swap" type="text/css"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Christian Bonacore</h1>
        <p>Software Engineer</p>
        <Image
          src="/img/me.jpg"
          alt="Christian Bonacore"
          height={200}
          width={200}
          className={styles.me}
        />
        <About />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
