import { Merriweather, Amarante } from 'next/font/google'
import { useTheme } from 'next-themes'
import { Suspense } from 'react'
import Image from 'next/image'

import DarkModeToggle from '@/components/DarkModeToggle'
import Experience from '@/components/Experience/Experience'

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
})
const amarante = Amarante({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const { systemTheme, theme } = useTheme()

  console.log(theme)

  return (
    <main className={`text-night dark:text-white ${merriweather.className}`}>
      <div className="flex flex-col overflow-x-hidden">
        <section className="flex flex-col h-screen">
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
                  className={`text-3xl xs:text-4xl lg:text-6xl pt-2 ${amarante.className}`}
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
        <section className="flex flex-col">
          <div className="h-full border-2 border-night dark:border-white mx-8 mt-4 mb-10 ">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col lg:w-2/3 px-8 lg:py-20 lg:pr-8 lg:pl-20 justify-center ">
                <h1
                  className={`${amarante.className} text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-2`}
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
              <div className="flex lg:w-1/2 order-first lg:order-last justify-center aspect-w-8 aspect-h-6 lg:aspect-none">
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
      </div>
    </main>
  )
}
