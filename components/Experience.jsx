import * as THREE from 'three'
import { CameraShake } from '@react-three/drei'
import Sphere from './Sphere'

THREE.ColorManagement.legacyMode = false

const config = {
  maxYaw: 0.005,
  maxPitch: 0.1,
  maxRoll: 0.1,
  yawFrequency: 0.1,
  pitchFrequency: 0.1,
  rollFrequency: 0.1,
  intensity: 0.5,
  decay: false,
  decayRate: 0.65,
}

export default function Experience() {
  return (
    <>
      <CameraShake {...config} />
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
        scale={4}
        position={[14, -2, -5]}
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
