import { Suspense } from 'react'
import JourneyExperience from './JourneyExperience'
import { Amarante } from 'next/font/google'
import { Canvas } from '@react-three/fiber'

import Skill from './Skill'
import { Firebase, Strapi, Tailwind, TypeScript } from '../Icons/Icons'

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
                <div className="lg:col-span-1 col-span-2">
                  <TypeScript />
                </div>
                {/* TailwindCSS */}
                <div className="lg:col-span-1 col-span-2">
                  <Tailwind />
                </div>
                {/* Firebase */}
                <div className="lg:col-span-1 col-span-2">
                  <Firebase />
                </div>
                {/* Figma */}
                <div className="col-span-2 before:sm:col-start-2 lg:col-span-1">
                  <svg
                    width="165"
                    height="166"
                    className="max-h-36 w-full h-full object-contain fill-night dark:fill-white"
                    viewBox="0 0 165 166"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M58.4375 14.25C52.9674 14.25 47.7214 16.423 43.8534 20.2909C39.9855 24.1589 37.8125 29.4049 37.8125 34.875C37.8125 40.3451 39.9855 45.5911 43.8534 49.4591C47.7214 53.327 52.9674 55.5 58.4375 55.5H106.563C112.033 55.5 117.279 53.327 121.147 49.4591C125.015 45.5911 127.188 40.3451 127.188 34.875C127.188 29.4049 125.015 24.1589 121.147 20.2909C117.279 16.423 112.033 14.25 106.563 14.25H58.4375ZM106.563 62.375C101.092 62.375 95.8464 64.548 91.9784 68.4159C88.1105 72.2839 85.9375 77.5299 85.9375 83C85.9375 88.4701 88.1105 93.7161 91.9784 97.5841C95.8464 101.452 101.092 103.625 106.563 103.625C112.033 103.625 117.279 101.452 121.147 97.5841C125.015 93.7161 127.188 88.4701 127.188 83C127.188 77.5299 125.015 72.2839 121.147 68.4159C117.279 64.548 112.033 62.375 106.563 62.375ZM37.8125 83C37.8125 77.5299 39.9855 72.2839 43.8534 68.4159C47.7214 64.548 52.9674 62.375 58.4375 62.375H79.0625V103.625H58.4375C52.9674 103.625 47.7214 101.452 43.8534 97.5841C39.9855 93.7161 37.8125 88.4701 37.8125 83ZM58.4375 110.5C54.3583 110.5 50.3706 111.71 46.9789 113.976C43.5871 116.242 40.9436 119.463 39.3825 123.232C37.8214 127.001 37.413 131.148 38.2088 135.149C39.0046 139.15 40.969 142.825 43.8534 145.709C46.7379 148.594 50.4129 150.558 54.4138 151.354C58.4146 152.15 62.5616 151.741 66.3304 150.18C70.0991 148.619 73.3203 145.975 75.5866 142.584C77.8529 139.192 79.0625 135.204 79.0625 131.125V110.5H58.4375Z" />
                  </svg>
                </div>
                {/* Strapi */}
                <div className="col-span-4 col-start-1 sm:col-start-auto lg:col-span-1">
                  <Strapi />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
