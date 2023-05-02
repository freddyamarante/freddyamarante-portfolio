import { Amarante } from 'next/font/google'
import { Suspense, lazy, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import DarkModeToggle from '@/components/DarkModeToggle'
import { Github, LinkedIn, Twitter } from './Icons/Icons'
const Experience = lazy(() => import('@/components/Experience/Experience'))

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <section className="h-screen">
      <nav className="relative flex flex-row justify-end pt-4 pr-8">
        <DarkModeToggle />
      </nav>
      <div className="h-full max-h-[88vh] border-2 border-night dark:border-white justify-center items-center mx-2 lg:mx-8 my-5">
        <div className="flex h-full w-full justify-center items-center">
          {isMounted && (
            <Suspense>
              <Experience />
            </Suspense>
          )}

          <div className="absolute text-center max-w-sm xs:max-w-lg lg:max-w-xl">
            <h2
              className={`text-2xl xs:text-2xl md:text-3xl lg:text-4xl ${amarante.className}`}
            >
              Greetings, I am
            </h2>
            <h1
              className={`text-4xl xs:text-4xl md:text-6xl lg:text-7xl pt-2 ${amarante.className} text-marian dark:text-madder`}
            >
              Freddy Amarante
            </h1>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl w-48 xs:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto pt-4">
              I&apos;m a frond-end developer, passionate about building stunning
              landing pages and user interfaces.
            </p>
            <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
              {/* Github */}
              <a
                href="https://github.com/freddyamarante"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/freddy-amarante/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/thecoolerdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              {/* My CV */}
              <a
                href="https://drive.google.com/file/d/1OiGBCJnTgniK4pBsehECLIOlUYF09WGb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 bg-transparent border-2 border-night dark:border-white px-2 py-1 text-sm md:text-md font-black text-night dark:text-white hover:text-white dark:hover:text-night shadow-sm hover:bg-night dark:hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night dark:focus-visible:outline-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  Read my CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
