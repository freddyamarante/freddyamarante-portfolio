import { Suspense } from 'react'
import JourneyExperience from './JourneyExperience'
import { Amarante } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'

import Skill from './Skill'
import { Figma, Firebase, Strapi, Tailwind, TypeScript } from '../Icons/Icons'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function Journey() {
  return (
    <section>
      <div className="border-2 border-night dark:border-white mx-2 lg:mx-8 my-5 ">
        <div className="flex flex-col px-8 lg:px-20 py-20 basis-1/6">
          <div className="flex lg:hidden justify-between mb-8">
            <div className="flex flex-row">
              <svg
                viewBox="0 0 100 100"
                className="h-4 w-4 mr-2 text-marian dark:text-madder"
              >
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  fill="currentColor"
                />
              </svg>
              <div className="uppercase text-sm font-black">Journey</div>
            </div>
            <div className="uppercase text-sm font-black text-right">
              Last updated: 25/04/23
            </div>
          </div>
          <div className="flex flex-row justify-center lg:justify-between items-center mb-8 lg:mb-14">
            <div className="hidden lg:flex flex-row items-center">
              <svg
                viewBox="0 0 100 100"
                className="h-4 w-4 mr-2 text-marian dark:text-madder"
              >
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  fill="currentColor"
                />
              </svg>
              <div className="uppercase text-sm font-black">Journey</div>
            </div>
            <h1
              className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-center mb-2 px-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
            >
              My journey as a developer
            </h1>
            <div className="uppercase text-sm font-black hidden lg:block">
              Last updated: 25/04/23
            </div>
          </div>
          <div className="text-left text-lg lg:text-xl mb-20">
            In college, I discovered my passion for web development and design
            while studying Systems Engineering. Learning the basics of HTML,
            CSS, and JS ignited my interest and led me to explore further. I
            used my free time to dive deeper into programming and learned new
            technologies like React, TypeScript, and Nuxt, building projects and
            gaining valuable experience along the way. Today, I continue to
            learn and explore new technologies, always striving to stay
            up-to-date with the latest trends and techniques. My journey has
            been an exciting and fulfilling one, and I look forward to the
            challenges and opportunities that lie ahead as I continue to grow
            and evolve.
          </div>
          <div className="basis-full">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="flex flex-col w-full lg:w-1/4 order-1 lg:order-1">
                <Skill
                  skill="HTML, CSS & JS (2019)"
                  description="Learned basic web development at college in 2018, that's when I fell in love with it!"
                />
                <Skill
                  skill="Vue.js (2020)"
                  description="My first framework! Made a to-do list for college and used
                    Nuxt.js to make a bibliometrics tool for college as a
                    final project for my bachelor's degree."
                />
                <Skill
                  skill="UX/UI Design (2021)"
                  description="Used Figma with the help of a great Codecademy course to learn and apply to my projects. Concepts like SWOT Analysis, Conceptual Design and Prototyping were my main focus. "
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/4 order-2 lg:order-3">
                <Skill
                  skill="React (2021)"
                  description="Swapped to React in order to use R3F, what I didn't expect was it becoming my main framework in the projects to come! I also love how well it works with Tailwind."
                  rightside
                />
                <Skill
                  skill="Shopify (2022)"
                  description="Hey, that's what I used in my first freelancing project! Learning it was very smooth and the clients were very happy with the result."
                  rightside
                />
                <Skill
                  skill="WebGL (2023)"
                  description="Fell in love with WebGL once I got my hands on Three.js and React Three Fiber. Seems like 3D visuals on front end projects are my thing now."
                  rightside
                />
              </div>
              <div className="flex justify-center align-center w-full lg:w-1/2 mx-6 h-[8rem] xs:h-[15rem] sm:h-[28rem] md:h-[40rem] lg:h-[24rem] xl:h-[32rem] 2xl:h-[40rem] order-3 lg:order-2">
                <Suspense>
                  <Canvas flat>
                    <JourneyExperience />
                  </Canvas>
                </Suspense>
              </div>
            </div>
          </div>
          <div
            className={`mx-auto my-20 text-3xl xs:text-4xl sm:text-5xl text-center ${amarante.className}`}
          >
            and other stuff I&apos;ve used along the way
          </div>
          <div className="py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {/* TypeScript */}
                <motion.div
                  whileHover={{ y: -50, color: '#007ACC' }}
                  className="lg:col-span-1 col-span-2 p-8"
                >
                  <TypeScript />
                </motion.div>
                {/* TailwindCSS */}
                <motion.div
                  whileHover={{ y: -50, color: '#1E293B' }}
                  className="lg:col-span-1 col-span-2 p-8"
                >
                  <Tailwind />
                </motion.div>
                {/* Firebase */}
                <motion.div
                  whileHover={{ y: -50, color: '#FFA611' }}
                  className="lg:col-span-1 col-span-2 p-8"
                >
                  <Firebase />
                </motion.div>
                {/* Figma */}
                <motion.div
                  whileHover={{ y: -50, color: '#F24E1E' }}
                  className="col-span-2 before:sm:col-start-2 lg:col-span-1 p-8"
                >
                  <Figma />
                </motion.div>
                {/* Strapi */}
                <motion.div
                  whileHover={{ y: -50, color: '#2E7DE1' }}
                  className="col-span-4 col-start-1 sm:col-start-auto lg:col-span-1 p-8"
                >
                  <Strapi />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
