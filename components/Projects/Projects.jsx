import { Amarante } from 'next/font/google'

import Project from './Project'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function Projects() {
  return (
    <section>
      <div className="border-2 border-night dark:border-white mx-2 lg:mx-8 my-5 ">
        <div className="flex flex-col px-8 lg:px-20 py-20">
          <div className="flex flex-col md:flex-row justify-between pb-20">
            <h1
              className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-center md:text-right px-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
            >
              What I&apos;ve worked on
            </h1>
            <div className="flex flex-row items-center order-first mb-8 md:mb-0">
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
              <div className="uppercase text-sm font-black">Projects</div>
            </div>
          </div>
          {/* Projects here */}
          <Project
            title="Freelance e-commerce project using Shopify"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            venenatis sem ac lorem laoreet scelerisque. Nam id nulla ut nunc
            scelerisque efficitur ut vitae arcu. Sed vel porttitor mi. Etiam
            efficitur ullamcorper dapibus."
            imageSrc="/andrew-neel.jpg"
            pointTitle1="Applied Shopify Liquid to create and edit sections on the Shopify
            Theme"
            pointDescription1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            venenatis sem ac lorem laoreet scelerisque. Nam id nulla ut nunc
            scelerisque efficitur ut vitae arcu. Sed vel porttitor mi. Etiam
            efficitur ullamcorper dapibus."
            pointTitle2="Used my skills in CSS to adapt the website to the customer's
            design language"
            pointDescription2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            venenatis sem ac lorem laoreet scelerisque. Nam id nulla ut nunc
            scelerisque efficitur ut vitae arcu. Sed vel porttitor mi. Etiam
            efficitur ullamcorper dapibus."
            pointTitle3="Demonstrated ability to effectively manage time and meet deadlines
            while working in an agile framework"
            pointDescription3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            venenatis sem ac lorem laoreet scelerisque. Nam id nulla ut nunc
            scelerisque efficitur ut vitae arcu. Sed vel porttitor mi. Etiam
            efficitur ullamcorper dapibus."
            url="https://terrafusionshop.com/"
          />
          <Project
            title="Marble Race game using React Three Fiber"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            venenatis sem ac lorem laoreet scelerisque. Nam id nulla ut nunc
            scelerisque efficitur ut vitae arcu. Sed vel porttitor mi. Etiam
            efficitur ullamcorper dapibus."
            imageSrc="/andrew-neel.jpg"
            pointTitle1="Utilized Zustand for streamlined state management and improved React application performance"
            pointDescription1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            venenatis sem ac lorem laoreet scelerisque. Nam id nulla ut nunc
            scelerisque efficitur ut vitae arcu. Sed vel porttitor mi. Etiam
            efficitur ullamcorper dapibus."
            pointTitle2="Utilized React Three Fiber tools to create a fun project with replayability"
            pointDescription2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            venenatis sem ac lorem laoreet scelerisque. Nam id nulla ut nunc
            scelerisque efficitur ut vitae arcu. Sed vel porttitor mi. Etiam
            efficitur ullamcorper dapibus."
            pointTitle3="Employed Rapier to ensure realistic physics interactions"
            pointDescription3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            venenatis sem ac lorem laoreet scelerisque. Nam id nulla ut nunc
            scelerisque efficitur ut vitae arcu. Sed vel porttitor mi. Etiam
            efficitur ullamcorper dapibus."
            url="https://ballrace-r3f.vercel.app/"
            repository="https://github.com/freddyamarante/ballrace-r3f"
          />
        </div>
      </div>
    </section>
  )
}
