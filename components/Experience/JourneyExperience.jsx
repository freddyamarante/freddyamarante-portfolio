import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center } from '@react-three/drei'

export default function JourneyExperience() {
  return (
    <>
      <Canvas>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          dampingFactor={0.005}
        />
        <ambientLight intensity={1} color="#2a4494" />

        <Center>
          <mesh>
            <sphereGeometry args={[3, 48, 48]} />
            <meshStandardMaterial color="#2a4494" />
          </mesh>
        </Center>
      </Canvas>
    </>
  )
}
