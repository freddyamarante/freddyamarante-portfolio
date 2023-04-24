import { Merriweather, Amarante } from 'next/font/google'
import { useTheme } from 'next-themes'
import { Suspense } from 'react'

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
            <div className="flex h-full  w-full justify-center items-center">
              <Suspense>
                <Experience />
              </Suspense>
              <div className="absolute flex flex-col justify-content text-center max-w-sm lg:max-w-lg">
                <h2 className={`text-2xl lg:text-4xl ${amarante.className}`}>
                  Greetings, my name is
                </h2>
                <h1
                  className={`text-4xl lg:text-6xl pt-2 ${amarante.className}`}
                >
                  Freddy Amarante
                </h1>
                <p className="text-sm w-64 lg:w-auto mx-auto lg:text-xl pt-4">
                  I&apos;m passionate about building stunning landing pages and
                  user interfaces. And you&apos;re looking at one of my latest
                  creations right now.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col h-screen">
          <div className="h-full border-2 border-night dark:border-white mx-8 mt-4 mb-10 justify-center items-center">
            <div className="h-full  w-full justify-center items-center">
              <div className="grid grid-rows-2 lg:grid-cols-2 justify-items-center">
                <div className="flex flex-col px-12 py-8">
                  <h1>Hola chavale</h1>
                  <h2>Soy tu pana</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos unde non, soluta quibusdam a fuga esse cumque aliquid
                    saepe, quo similique sequi dolor officiis? Eaque dignissimos
                    id veniam, eligendi facilis quos ad provident assumenda
                    ipsum voluptate esse, molestiae reiciendis earum nihil!
                    Laudantium magnam dicta mollitia quidem hic, optio tenetur
                    reiciendis est officia porro sunt nisi voluptas dolorum
                    praesentium magni debitis totam aliquam voluptatem qui quia!
                    Culpa, amet, nihil eos consectetur corporis est labore fugit
                    dolorem consequuntur cumque, dolor officia velit magnam.
                    Omnis unde, commodi eveniet, sunt officia voluptates vero
                    itaque a optio architecto dolor illum beatae cumque eos, hic
                    voluptatum?
                  </p>
                </div>
                <div className="order-first mt-12 lg:order-last mx-auto w-96 h-96 bg-green-500"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
