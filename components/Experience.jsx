import * as THREE from 'three'
import { Wireframe, Float } from '@react-three/drei'
import Sphere from './Sphere'

THREE.ColorManagement.legacyMode = false

export default function Experience() {
  return (
    <>
      <Sphere
        scale={8}
        position={[18, -12, -7]}
        rotation={[0, 0, Math.PI / 2 + 0.5]}
      />
      <Sphere
        scale={4}
        position={[-12, 2, 0]}
        rotation={[0, 0, Math.PI / 2 + 1.2]}
      />
      <Sphere
        scale={3}
        position={[12, 0, 0]}
        rotation={[0, 0, Math.PI / 2 + 1.2]}
      />
      <Sphere
        scale={15}
        position={[34, 2, -20]}
        rotation={[0, 0, Math.PI / 2 + 1.2]}
      />
      <Sphere
        scale={12}
        position={[-24, -8, -4]}
        rotation={[0, 0, Math.PI / 2 - 0.4]}
      />
      <Sphere
        scale={12}
        position={[-24, 10, -4]}
        rotation={[0, 0, Math.PI / 2 + 0.4]}
      />
      <Sphere
        scale={12}
        position={[15, 14, -4]}
        rotation={[0, 0, Math.PI / 2 - 0.4]}
      />
      <Sphere
        scale={40}
        position={[-35, 56, -36]}
        rotation={[0, Math.PI / 2, Math.PI / 2 + 0.4]}
      />
      <Sphere
        scale={35}
        position={[-48, -46, -32]}
        rotation={[0, Math.PI / 2, Math.PI / 2 + 0.4]}
      />
      <Sphere
        scale={35}
        position={[8, -55, -32]}
        rotation={[0, Math.PI / 2, Math.PI / 2 + 0.4]}
      />
      <Sphere
        scale={15}
        position={[8, 40, -32]}
        rotation={[0, Math.PI / 2, Math.PI / 2 + 0.4]}
      />
      <Sphere
        scale={28}
        position={[-64, 0, -40]}
        rotation={[0, 0, Math.PI / 2 + 1.6]}
      />
    </>
  )
}
