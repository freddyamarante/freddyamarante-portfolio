import Image from 'next/image'
import { motion } from 'framer-motion'

import { Amarante } from 'next/font/google'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
})

export default function Project({
  title = 'Title',
  description = 'Description',
  imageSrc = '',
  pointTitle1 = 'Point title 1',
  pointDescription1 = 'Point description 1',
  pointTitle2 = 'Point title 2',
  pointDescription2 = 'Point description 2',
  pointTitle3 = 'Point title 3',
  pointDescription3 = 'Point description 3',
  url = '',
  repository = '',
}) {
  return (
    <div className="pb-20 lg:pb-28 px-0 lg:px-8">
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col basis-2/5 justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: 'spring', stifness: 100 },
            }}
            viewport={{ once: true }}
            className={`${amarante.className} text-4xl sm:text-5xl lg:text-4xl xl:text-5xl`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: 'spring', stifness: 100 },
            }}
            viewport={{ once: true }}
            className="text-lg xl:text-xl py-6"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: 'spring', stifness: 100 },
            }}
            viewport={{ once: true }}
            className="aspect-h-5 aspect-w-5 border-2 border-night dark:border-white"
          >
            <Image
              className="object-center object-cover"
              src={imageSrc}
              alt="Freddy Amarante"
              width={1920}
              height={1080}
            />
          </motion.div>
        </div>
        <div className="flex flex-col basis-3/5 mt-12 xl:mt-0 xl:pl-28 justify-center">
          <div className="pb-8">
            <motion.h3
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="text-2xl xl:text-3xl font-bold pb-4"
            >
              {pointTitle1}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="text-lg xl:text-xl"
            >
              {pointDescription1}
            </motion.p>
          </div>
          <div className="pb-8">
            <motion.h3
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="text-2xl xl:text-3xl font-bold pb-4"
            >
              {pointTitle2}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="text-lg xl:text-xl"
            >
              {pointDescription2}
            </motion.p>
          </div>
          <div className="pb-8">
            <motion.h3
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="text-2xl xl:text-3xl font-bold pb-4"
            >
              {pointTitle3}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="text-lg xl:text-xl"
            >
              {pointDescription3}
            </motion.p>
          </div>
          {url === '' && repository === '' ? null : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { type: 'spring', stifness: 100 },
              }}
              viewport={{ once: true }}
              className="grid grid-rows-2 grid-cols-none md:grid-rows-none md:grid-cols-4 justify-between items-center gap-y-4 gap-x-8 mx-auto mt-10"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2"
              >
                <button
                  type="button"
                  className={`flex justify-center items-center gap-2 px-5 py-3 w-full text-lg
                  ${
                    url
                      ? 'font-semibold bg-night dark:bg-white text-white dark:text-night shadow-sm hover:bg-marian dark:hover:bg-madder dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night dark:focus-visible:outline-white'
                      : 'font-normal bg-neutral-400 dark:bg-neutral-400 text-neutral-600 dark:text-neutral-600 border-neutral-400 dark:border-neutral-400 shadow-sm cursor-default'
                  } 
                  `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  Check the website
                </button>
              </a>

              <a
                href={repository !== '' ? repository : null}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2"
              >
                <button
                  type="button"
                  className={`flex flex-nowrap items-center gap-2 justify-center border-2 px-5 py-3 w-full text-lg
                  ${
                    repository
                      ? ' font-semibold bg-white dark:bg-blackbean border-night dark:border-white text-night dark:text-white dark:hover:text-white shadow-sm hover:bg-gray-300 dark:hover:bg-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night dark:focus-visible:outline-white'
                      : 'font-normal bg-neutral-400 dark:bg-neutral-400 text-neutral-600 dark:text-neutral-600 border-neutral-400 dark:border-neutral-400 shadow-sm cursor-default'
                  }`}
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.5 0C10.8585 0 9.23303 0.318095 7.71646 0.936124C6.19989 1.55415 4.8219 2.46001 3.66117 3.60198C1.31696 5.90829 0 9.03631 0 12.2979C0 17.7336 3.5875 22.3453 8.55 23.981C9.175 24.0793 9.375 23.6981 9.375 23.3661V21.2877C5.9125 22.0256 5.175 19.6398 5.175 19.6398C4.6 18.2132 3.7875 17.832 3.7875 17.832C2.65 17.0695 3.875 17.0941 3.875 17.0941C5.125 17.1802 5.7875 18.3608 5.7875 18.3608C6.875 20.2301 8.7125 19.6767 9.425 19.3815C9.5375 18.5822 9.8625 18.0411 10.2125 17.7336C7.4375 17.4262 4.525 16.3685 4.525 11.683C4.525 10.318 5 9.22344 5.8125 8.35029C5.6875 8.04284 5.25 6.76386 5.9375 5.10364C5.9375 5.10364 6.9875 4.77159 9.375 6.35803C10.3625 6.08747 11.4375 5.9522 12.5 5.9522C13.5625 5.9522 14.6375 6.08747 15.625 6.35803C18.0125 4.77159 19.0625 5.10364 19.0625 5.10364C19.75 6.76386 19.3125 8.04284 19.1875 8.35029C20 9.22344 20.475 10.318 20.475 11.683C20.475 16.3808 17.55 17.4139 14.7625 17.7213C15.2125 18.1025 15.625 18.8527 15.625 19.9964V23.3661C15.625 23.6981 15.825 24.0916 16.4625 23.981C21.425 22.333 25 17.7336 25 12.2979C25 10.6829 24.6767 9.08376 24.0485 7.59171C23.4203 6.09966 22.4996 4.74395 21.3388 3.60198C20.1781 2.46001 18.8001 1.55415 17.2835 0.936124C15.767 0.318095 14.1415 0 12.5 0Z" />
                  </svg>
                  Check the repository
                </button>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
