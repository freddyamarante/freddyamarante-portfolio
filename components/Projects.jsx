import { Amarante } from 'next/font/google'

import Project from './Project'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amarante',
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
          <Project />
          <Project />
        </div>
      </div>
    </section>
  )
}
