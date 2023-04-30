import { OrbitControls, Center, Float } from '@react-three/drei'
import Sphere from '../Experience/Sphere'

export default function JourneyExperience() {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        dampingFactor={0.01}
      />

      <Sphere scale={2.9} rotate />
    </>
  )
}
