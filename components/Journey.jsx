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
              <div className="uppercase text-sm font-black">Journey</div>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
            aliquam arcu. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Aenean iaculis turpis
            non turpis condimentum auctor. Nullam tortor tellus, egestas non
            dapibus nec, convallis at nisl.
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
          <div className="row-span-6 col-start-4 col-span-6 mx-8">
            <JourneyExperience />
          </div>
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
  )
}
