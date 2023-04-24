import { Merriweather, Amarante } from 'next/font/google'
import { useTheme } from 'next-themes'
import { Suspense } from 'react'

import DarkModeToggle from '@/components/DarkModeToggle'
import Experience from '@/components/Experience/Experience'

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
})
const amarante = Amarante({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const { systemTheme, theme } = useTheme()

  console.log(theme)

  return (
    <main
      className={`dark text-night dark:text-white ${merriweather.className}`}
    >
      <div className="flex flex-col overflow-x-hidden">
        <section className="flex flex-col h-screen">
          <nav className="relative flex flex-row justify-end pt-4 pr-8">
            <DarkModeToggle />
          </nav>
          <div className="h-full max-h-[95vh] border-2 border-night mx-8 mt-4 mb-10 justify-center items-center">
            <div className="flex flex-row border-2 h-full dark:border-white w-full justify-center items-center">
              <Suspense>
                <Experience />
              </Suspense>
              <div className="absolute flex flex-col justify-content text-center max-w-sm lg:max-w-lg">
                <h2 className={`text-2xl lg:text-4xl ${amarante.className}`}>
                  Greetings, my name is
                </h2>
                <h1
                  className={`text-4xl lg:text-6xl pt-2 ${amarante.className}`}
                >
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
      </div>
    </main>
  )
}
