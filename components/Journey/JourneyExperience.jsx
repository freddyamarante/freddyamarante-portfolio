import { OrbitControls } from '@react-three/drei'
import Sphere from '../Experience/Sphere'

export default function JourneyExperience() {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        dampingFactor={0.01}
        minPolarAngle={Math.PI / 2 - 0.8}
        maxPolarAngle={Math.PI / 2 + 0.8}
      />

      <Sphere scale={2.9} rotate />
    </>
  )
}
