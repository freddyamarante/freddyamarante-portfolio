import Image from 'next/image'
import { Amarante } from 'next/font/google'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function AboutMe() {
  return (
    <section>
      <div className="h-full border-2 border-night dark:border-white mx-2 lg:mx-8 my-5 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:w-2/3 px-8 pb-10 lg:py-20 lg:pr-8 lg:pl-20 justify-center">
            <div className="flex flex-row items-center pb-3 lg:pb-12">
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
              <div className="uppercase text-sm font-black">About me</div>
            </div>
            <h1
              className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
            >
              Cooler than your average developer
            </h1>
            <h2
              className={`${amarante.className} text-xl xs:text-2xl lg:text-3xl mb-8`}
            >
              Venezuelan front-end developer with a love for web development,
              carbonated drinks, and FC Barcelona.
            </h2>
            <p className="text-lg mb-6">
              Hi there! I&apos;m Freddy Amarante, a passionate web developer &
              designer from Venezuela. My interest in programming began while
              studying Systems Engineering in Lima, Peru, where I discovered my
              true passion for web development & design. During my college
              years, I developed my skills in algorithms, programming patterns,
              and models, and became proficient in HTML, CSS, & JS, which served
              as the foundation for most of my college projects.
            </p>
            <p className="text-lg mb-6">
              After college, I started taking my self-taught learning journey
              more seriously and began mastering React and TypeScript. I also
              completed Bruno Simon&apos;s Three.js Journey, a course that took
              my skills in web development to the next level by creating amazing
              WebGL experiences using JS frameworks like Three.js and React
              Three Fiber. Now, I&apos;m focused on contributing to open-source
              projects, freelancing, and building projects that will continue to
              challenge and improve my skills. When I&apos;m not coding, I enjoy
              playing video games and football (FC Barcelona is my favorite
              team).
            </p>
            <p className="text-lg mb-6">
              As a web developer, my main goal is to create meaningful digital
              experiences for users. I strongly believe that good design and
              user experience can make a huge difference in the success of a
              project. I have experience in designing and developing responsive,
              user-friendly websites that not only look great but also deliver
              great results. I&apos;m a hard worker, an eager learner, and
              always open to new challenges and opportunities. I&apos;m
              currently freelancing, and I&apos;m looking forward to working
              with companies that value creativity, innovation, and teamwork.
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
  )
}
