import { Merriweather, Amarante } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import Experience from '@/components/Experience'
import * as THREE from 'three'

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
})
const amarante = Amarante({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col text-white ${merriweather.className} overflow-x-hidden`}
    >
      <section className="h-screen">
        <div className="h-full px-8 py-10 justify-center items-center">
          <div className="flex flex-row h-full w-full border-2 border-white justify-center items-center">
            <Canvas
              onCreated={({ gl }) => {
                gl.toneMapping = THREE.NoToneMapping
              }}
              color={true}
            >
              <Experience />
            </Canvas>
            <div className="absolute flex flex-col justify-content text-center max-w-sm lg:max-w-lg">
              <h2 className={`text-2xl lg:text-4xl ${amarante.className}`}>
                Greetings, my name is
              </h2>
              <h1 className={`text-4xl lg:text-6xl ${amarante.className}`}>
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
      <div className="h-screen w-screen p-24"></div>
    </main>
  )
}
