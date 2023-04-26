import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  MeshTransmissionMaterial,
  Sphere,
  Environment,
} from '@react-three/drei'

export default function JourneyExperience() {
  return (
    <>
      <Canvas>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          dampingFactor={0.005}
        />
        <Environment preset="city" near={1} far={1000} resolution={256} />
        <Sphere args={[2.9, 64, 64]}>
          <MeshTransmissionMaterial
            transmission={0.3}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Canvas>
    </>
  )
}
