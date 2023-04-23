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
    <main className={`flex flex-col text-white ${merriweather.className}`}>
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
          </div>
        </div>
      </section>
      <div className="h-screen w-screen p-24"></div>
    </main>
  )
}
