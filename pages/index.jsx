import Head from 'next/head'

import Journey from '@/components/Journey/Journey'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects/Projects'
import ContactMe from '@/components/ContactMe/ContactMe'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Work in progress! | Freddy Amarante - Portfolio</title>
      </Head>
      <main className={`text-night dark:text-white`}>
        <div className="flex flex-col overflow-x-hidden">
          <Hero />
          <AboutMe />
          <Journey />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      </main>
    </>
  )
}
