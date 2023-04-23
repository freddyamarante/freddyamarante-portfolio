import * as THREE from 'three'
import { Wireframe, Float, CameraShake } from '@react-three/drei'
import Sphere from './Sphere'

const config = {
  maxYaw: 0.005, // Max amount camera can yaw in either direction
  maxPitch: 0.1, // Max amount camera can pitch in either direction
  maxRoll: 0.1, // Max amount camera can roll in either direction
  yawFrequency: 0.1, // Frequency of the the yaw rotation
  pitchFrequency: 0.1, // Frequency of the pitch rotation
  rollFrequency: 0.1, // Frequency of the roll rotation
  intensity: 0.5, // initial intensity of the shake
  decay: false, // should the intensity decay over time
  decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
  controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
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
