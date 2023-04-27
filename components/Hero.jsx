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
      <div className="h-full max-h-[88vh] border-2 border-night dark:border-white justify-center items-center mx-2 lg:mx-8 my-5">
        <div className="flex h-full w-full justify-center items-center">
          <Suspense>
            <Experience />
          </Suspense>
          <div className="absolute text-center max-w-sm xs:max-w-lg lg:max-w-xl">
            <h2
              className={`text-2xl xs:text-2xl md:text-4xl lg:text-5xl ${amarante.className}`}
            >
              Greetings, my name is
            </h2>
            <h1
              className={`text-4xl xs:text-4xl md:text-6xl lg:text-7xl pt-2 ${amarante.className} text-marian dark:text-madder`}
            >
              Freddy Amarante
            </h1>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl w-48 xs:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto pt-4">
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
