import Head from 'next/head'
import Image from 'next/image'

import About from 'sections/About'
import Work from 'sections/Work'
import Skills from 'sections/Skills'
import Education from 'sections/Education'

import styles from 'styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christian Bonacore</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic&display=swap" type="text/css"/>
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Raleway:400,300,700&display=swap" type="text/css"/>
      </Head>

      <main className={styles.main}>
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="columns">
              <div className="column">
                <h1 className={styles.title}>
                  Hi, I'm<br />
                  Christian Bonacore
                </h1>
                <p>Software Engineer</p>
                <p>
                  Did he just throw my cat out of the window? 
                  God help us, we're in the hands of engineers. 
                  Just my luck, no ice. Hey, take a look at the earthlings. 
                  Goodbye! Remind me to thank John for a lovely weekend. 
                  Forget the fat lady! You're obsessed with the fat lady!
                </p>
                <div className="buttons are-medium">
                  <button className="button is-primary">Contact Me</button>
                  <button className="button">Learn About Me</button>
                </div>
              </div>
              <div className="column">
                <img
                  src="/img/me.jpg"
                  alt="Christian Bonacore"
                  className={styles.me}
                />
              </div>
            </div>
          </div>
        </div>
        <About />
        <Work />
        <Skills />
        <Education />
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
