import { Suspense } from 'react'
import Image from 'next/image'
import { Amarante } from 'next/font/google'

import DarkModeToggle from '@/components/DarkModeToggle'
import Experience from '@/components/Experience/Experience'
import Skill from '@/components/Skill'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amarante',
})

export default function Home() {
  return (
    <main className={`text-night dark:text-white`}>
      <div className="flex flex-col overflow-x-hidden">
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
                  I&apos;m passionate about building stunning landing pages and
                  user interfaces. And you&apos;re looking at one of my latest
                  creations right now.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-full border-2 border-night dark:border-white mx-8 mt-4 mb-10 ">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col lg:w-2/3 px-8 lg:py-20 lg:pr-8 lg:pl-20 justify-center">
                <div class="flex flex-row items-center pb-3 lg:pb-12">
                  <svg
                    viewBox="0 0 100 100"
                    class="h-4 w-4 mr-2 text-marian dark:text-madder"
                  >
                    <rect
                      x="10"
                      y="10"
                      width="80"
                      height="80"
                      fill="currentColor"
                    />
                  </svg>
                  <div class="uppercase text-sm font-black">About me</div>
                </div>
                <h1
                  className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
                >
                  Cooler than your average developer
                </h1>
                <h2
                  className={`${amarante.className} text-xl xs:text-2xl lg:text-3xl mb-8`}
                >
                  and definitely not cocky...
                </h2>
                <p className="text-sm lg:text-lg mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis aliquam arcu. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Aenean
                  iaculis turpis non turpis condimentum auctor. Nullam tortor
                  tellus, egestas non dapibus nec, convallis at nisl. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  mauris velit, volutpat et felis id, vehicula tempus turpis.
                  Etiam lacinia purus ac mi fringilla, at pellentesque justo
                  pharetra. Morbi vulputate varius lectus, a pulvinar odio
                  lobortis semper. Ut hendrerit, magna gravida ullamcorper
                  faucibus, justo massa euismod enim, et ullamcorper lorem
                  turpis at dolor. Donec vel ullamcorper tortor. Phasellus
                  pellentesque consectetur facilisis.
                </p>
                <p className="text-sm lg:text-lg mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis aliquam arcu. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Aenean
                  iaculis turpis non turpis condimentum auctor. Nullam tortor
                  tellus, egestas non dapibus nec, convallis at nisl. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  mauris velit, volutpat et felis id, vehicula tempus turpis.
                  Etiam lacinia purus ac mi fringilla, at pellentesque justo
                  pharetra. Morbi vulputate varius lectus, a pulvinar odio
                  lobortis semper. Ut hendrerit, magna gravida ullamcorper
                  faucibus, justo massa euismod enim, et ullamcorper lorem
                  turpis at dolor. Donec vel ullamcorper tortor. Phasellus
                  pellentesque consectetur facilisis.
                </p>
              </div>
              <div className="flex lg:w-1/2 order-first lg:order-last justify-center aspect-w-8 aspect-h-7 lg:aspect-none">
                <Image
                  className="object-center object-cover lg:w-full lg:h-full p-8 lg:p-14 max-h-lg outline outline-night dark:outline-white outline-offset-[-32px] lg:outline-offset-[-56px]"
                  src="/andrew-neel.jpg"
                  alt="Freddy Amarante"
                  width={511}
                  height={767}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Journey */}
        <section>
          <div className="border-2 border-night dark:border-white mx-8 mt-4 mb-10 ">
            <div className="flex flex-col h-screen p-20">
              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-between items-center basis-1/6 mb-6">
                  <div class="flex flex-row items-center">
                    <svg
                      viewBox="0 0 100 100"
                      class="h-4 w-4 mr-2 text-marian dark:text-madder"
                    >
                      <rect
                        x="10"
                        y="10"
                        width="80"
                        height="80"
                        fill="currentColor"
                      />
                    </svg>
                    <div class="uppercase text-sm font-black">Journey</div>
                  </div>
                  <h1
                    className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
                  >
                    My journey as a developer
                  </h1>
                  <div class="uppercase text-sm font-black">
                    Last updated: 25/04/23
                  </div>
                </div>
                <div className="text-left text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis aliquam arcu. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Aenean
                  iaculis turpis non turpis condimentum auctor. Nullam tortor
                  tellus, egestas non dapibus nec, convallis at nisl.
                </div>
              </div>
              <div className="basis-full grid grid-cols-12 grid-rows-6 mt-8">
                <div className="flex flex-col justify-between row-span-6 col-span-3">
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
                <div className="row-span-6 col-start-4 col-span-6 mx-8"></div>
                <div className="flex flex-col justify-between row-span-6 col-span-3">
                  <Skill
                    skill="HTML, CSS & JS (2019)"
                    description="Learned basic web development at college in 2018, that's when I fell in love with it!"
                    rightside
                  />
                  <Skill
                    skill="Vue.js (2020)"
                    description="My first framework! Made a to-do list for college and used
                    Nuxt.js to make a bibliometrics tool for college as a
                    final project for my bachelor's degree."
                    rightside
                  />
                  <Skill
                    skill="UX/UI Design (2021)"
                    description="Used Figma with the help of a great Codecademy course to learn and apply to my projects. Concepts like SWOT Analysis, Conceptual Design and Prototyping were my main focus. "
                    rightside
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
