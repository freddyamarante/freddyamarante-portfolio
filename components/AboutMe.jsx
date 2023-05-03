import Image from 'next/image'
import { Amarante } from 'next/font/google'
import { motion } from 'framer-motion'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function AboutMe() {
  return (
    <section>
      <div className="h-full border-2 border-night dark:border-white mx-2 xl:mx-8 my-5 ">
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="flex flex-col xl:w-1/2 px-8 pb-10 xl:py-20 xl:pr-8 xl:pl-20 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="flex flex-row items-center pb-3 xl:pb-12"
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
              <div className="uppercase text-sm font-black">About me</div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-2 underline decoration-4 underline-offset-4 decoration-marian dark:decoration-madder`}
            >
              Cooler than your average developer
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className={`${amarante.className} text-xl xs:text-2xl lg:text-3xl mb-8`}
            >
              Venezuelan front-end developer with a love for web development,
              carbonated drinks, and FC Barcelona.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="text-lg md:text-xl mb-6"
            >
              Hi there! I&apos;m Freddy Amarante, a passionate web developer &
              designer from Venezuela. My interest in programming began while
              studying Systems Engineering in Lima, Peru, where I discovered my
              true passion for web development & design. During my college
              years, I developed my skills in algorithms, programming patterns,
              and models, and became proficient in HTML, CSS, & JS, which served
              as the foundation for most of my college projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="text-lg md:text-xl mb-6"
            >
              As a web developer, my main goal is to create meaningful digital
              experiences for users. I strongly believe that good design and
              user experience can make a huge difference in the success of a
              project. I have experience in designing and developing responsive,
              user-friendly websites that not only look great but also deliver
              great results. I&apos;m a hard worker, an eager learner, and
              always open to new challenges and opportunities. I&apos;m
              currently freelancing, and I&apos;m looking forward to working
              with companies that value creativity, innovation, and teamwork.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: 'spring', stifness: 100 },
            }}
            viewport={{ once: true }}
            className="flex xl:w-1/2 my-auto xl:h-full order-first xl:order-last justify-center aspect-w-8 aspect-h-7 xl:aspect-none"
          >
            <Image
              className="object-center object-cover xl:w-full xl:h-full p-8 xl:p-14 xl:max-h-[56rem] outline outline-night dark:outline-white outline-offset-[-32px] xl:outline-offset-[-56px]"
              src="/coding.jpg"
              alt="Freddy Amarante"
              width={511}
              height={767}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
