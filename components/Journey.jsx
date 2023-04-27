import { Suspense } from 'react'
import JourneyExperience from './Experience/JourneyExperience'
import Skill from './Skill'
import { Amarante } from 'next/font/google'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amarante',
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
          <div className="text-left text-md lg:text-xl mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
            aliquam arcu. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Aenean iaculis turpis
            non turpis condimentum auctor. Nullam tortor tellus, egestas non
            dapibus nec, convallis at nisl.
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
                  <JourneyExperience />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
