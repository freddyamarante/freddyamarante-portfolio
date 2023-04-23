import { Merriweather, Amarante } from 'next/font/google'
import Experience from '@/components/Experience/Experience'

import DarkModeToggle from '@/components/DarkModeToggle'

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
})
const amarante = Amarante({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col text-night dark:text-white ${merriweather.className} overflow-x-hidden dark`}
    >
      <section className="flex flex-col h-screen">
        <nav class="relative flex flex-row justify-end pt-2 pr-8">
          <DarkModeToggle />
        </nav>
        <div className="h-full px-8 pt-4 pb-10 justify-center items-center">
          <div className="flex flex-row h-full w-full border-2 dark:border-white justify-center items-center">
            <Experience />
            <div className="absolute flex flex-col justify-content text-center max-w-sm lg:max-w-lg">
              <h2 className={`text-2xl lg:text-4xl ${amarante.className}`}>
                Greetings, my name is
              </h2>
              <h1 className={`text-4xl lg:text-6xl pt-2 ${amarante.className}`}>
                Freddy Amarante
              </h1>
              <p className="text-sm w-64 lg:w-auto mx-auto lg:text-xl pt-4">
                I&apos;m passionate about building stunning landing pages and
                user interfaces. And you&apos;re looking at one of my latest
                creations right now.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-screen w-screen p-24"></div>
    </main>
  )
}
