import { Amarante } from 'next/font/google'

import DarkModeToggle from '@/components/DarkModeToggle'
import Experience from '@/components/Experience/Experience'
import { Suspense } from 'react'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amarante',
})

export default function Hero() {
  return (
    <section className="h-screen">
      <nav className="relative flex flex-row justify-end pt-4 pr-8">
        <DarkModeToggle />
      </nav>
      <div className="h-full max-h-[88vh] border-2 border-night dark:border-white mx-8 mt-4 mb-10 justify-center items-center">
        <div className="flex h-full w-full justify-center items-center">
          <Suspense>
            <Experience />
          </Suspense>
          <div className="absolute text-center max-w-sm lg:max-w-lg">
            <h2
              className={`text-lg xs:text-2xl lg:text-4xl ${amarante.className}`}
            >
              Greetings, my name is
            </h2>
            <h1
              className={`text-3xl xs:text-4xl lg:text-6xl pt-2 ${amarante.className} text-marian dark:text-madder`}
            >
              Freddy Amarante
            </h1>
            <p className="text-xs xs:text-sm w-48 xs:w-64 lg:w-auto mx-auto lg:text-xl pt-4">
              I&apos;m passionate about building stunning landing pages and user
              interfaces. And you&apos;re looking at one of my latest creations
              right now.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
