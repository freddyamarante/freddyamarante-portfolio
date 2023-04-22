import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Merriweather, Amarante } from 'next/font/google'

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
})
const amarante = Amarante({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${merriweather.className}`}
    >
      <h1 className={`text-8xl bg-saffron ${amarante.className}`}>Amarante</h1>
      <div class="absolute w-[50rem] h-[40rem] z-10">
        <Canvas>
          <OrbitControls />
          <mesh scale={2}>
            <sphereGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        </Canvas>
      </div>
    </main>
  )
}
