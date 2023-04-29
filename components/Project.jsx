import Image from 'next/image'

import { Amarante } from 'next/font/google'
import { images } from '@/next.config'

const amarante = Amarante({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amarante',
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
}) {
  return (
    <div className="pb-20 lg:pb-28 px-0 lg:px-8">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col basis-2/5">
          <h1
            className={`${amarante.className} text-4xl sm:text-5xl lg:text-4xl xl:text-5xl`}
          >
            {title}
          </h1>
          <p className="text-lg xl:text-xl py-6">{description}</p>
          <div className="aspect-h-4 aspect-w-5">
            <Image
              className="object-center object-cover"
              src={imageSrc}
              alt="Freddy Amarante"
              width={511}
              height={767}
            />
          </div>
        </div>
        <div className="flex flex-col basis-3/5 mt-12 lg:mt-0 lg:pl-28 justify-center">
          <div className="pb-8">
            <h3 className="text-2xl xl:text-3xl font-bold pb-4">
              {pointTitle1}
            </h3>
            <p className="text-lg xl:text-xl">{pointDescription1}</p>
          </div>
          <div className="pb-8">
            <h3 className="text-2xl xl:text-3xl font-bold pb-4">
              {pointTitle2}
            </h3>
            <p className="text-lg xl:text-xl">{pointDescription2}</p>
          </div>
          <div className="pb-8">
            <h3 className="text-2xl xl:text-3xl font-bold pb-4">
              {pointTitle3}
            </h3>
            <p className="text-lg xl:text-xl">{pointDescription3}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-20 mx-auto mt-10">
            <button
              type="button"
              className="bg-night dark:bg-white px-20 md:px-5 py-2.5 text-sm font-semibold text-white dark:text-night dark:hover:text-white shadow-sm hover:bg-marian dark:hover:bg-madder focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night dark:focus-visible:outline-white"
            >
              Check the website
            </button>
            <button
              type="button"
              className="bg-night dark:bg-white px-3.5 md:px-5 py-2.5 text-sm font-semibold text-white dark:text-night dark:hover:text-white shadow-sm hover:bg-marian dark:hover:bg-madder focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night dark:focus-visible:outline-white"
            >
              Check the repository
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
