import { Suspense } from 'react'
import JourneyExperience from './JourneyExperience'
import { Amarante } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'

import Skill from './Skill'
import ExtraSkills from './ExtraSkills'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function Journey() {
  return (
    <section>
      <div className="border-2 border-night dark:border-white mx-2 lg:mx-8 my-5 ">
        <div className="flex flex-col px-8 lg:px-20 py-20 basis-1/6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { type: 'spring', stifness: 100 },
            }}
            viewport={{ once: true }}
            className="flex lg:hidden justify-between mb-8"
          >
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
          </motion.div>
          <div
            viewport={{ once: true }}
            className="flex flex-row justify-center lg:justify-between items-center mb-8 lg:mb-14"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="hidden lg:flex flex-row items-center"
            >
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
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-center mb-2 px-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
            >
              My journey as a developer
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="uppercase text-sm font-black hidden lg:block"
            >
              Last updated: 25/04/23
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: 'spring', stifness: 100 },
            }}
            viewport={{ once: true }}
            className="text-left text-lg lg:text-xl mb-20"
          >
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
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stifness: 100 },
            }}
            viewport={{ once: true }}
            className={`mx-auto my-20 text-3xl xs:text-4xl sm:text-5xl text-center ${amarante.className}`}
          >
            and other stuff I&apos;ve used along the way
          </motion.div>
          <div className="py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <ExtraSkills />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
