import Head from 'next/head'

import Journey from '@/components/Journey/Journey'
import Hero from '@/components/Hero/Hero'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects/Projects'
import ContactMe from '@/components/ContactMe/ContactMe'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi! I am Freddy Amarante, I'm from Venezuela and I am a 22 years old front-end developer. I have +2 years of experience in JavaScript, Vue and React development. I'm currently a freelancer but I'm looking forward working for a company now."
        />
        <meta
          name="keywords"
          content="Freddy Amarante, Freddy amarante portfolio, Freddy amarante portafolio, Freddy amarante github, Freddy amarante twitter, Freddy amarante linkedin, web developer, portfolio, next.js, react, tailwind, front end developer, freddy amarante developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Freddy Amarante" />
        <link rel="icon" href="/favicon.ico" />
        <title>Freddy Amarante - Portfolio | Work in progress! </title>
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
