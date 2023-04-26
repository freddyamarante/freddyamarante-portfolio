import { Canvas } from '@react-three/fiber'
import Sphere from './Sphere'
import { OrbitControls } from '@react-three/drei'

export default function JourneyExperience() {
  return (
    <>
      <Canvas flat>
        <OrbitControls enablePan={false} dampingFactor={0.005} />
        <Sphere scale={2.8} />
      </Canvas>
    </>
  )
}
