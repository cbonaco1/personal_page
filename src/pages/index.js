import Head from 'next/head'

import Home from 'sections/Home'
import About from 'sections/About'
import Work from 'sections/Work'
import Skills from 'sections/Skills'
import Education from 'sections/Education'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Christian Bonacore</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic&display=swap" type="text/css"/>
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Raleway:400,300,700&display=swap" type="text/css"/>
      </Head>
      <main>
        <Home />
        <About />
        <Work />
        <Skills />
        <Education />
      </main>
    </div>
  )
}
