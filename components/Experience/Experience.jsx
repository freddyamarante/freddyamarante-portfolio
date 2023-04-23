import * as THREE from 'three'
import { CameraShake } from '@react-three/drei'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

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
  const [sphereLine, setSphereLine] = useState('#000000')
  const [sphereColor, setSphereColor] = useState('#ffffff')

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    if (currentTheme === 'light') {
      setSphereLine('#000000')
      setSphereColor('#ffffff')
    } else if (currentTheme === 'dark') {
      setSphereLine('#000000')
      setSphereColor('#0c0101')
    }
  }, [currentTheme])

  return (
    <>
      <CameraShake {...config} />
      <Sphere
        scale={8}
        position={[18, -12, -7]}
        rotation={[0, 0, Math.PI / 2 + 0.5]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={4}
        position={[-12, 2, 0]}
        rotation={[0, 0, Math.PI / 2 + 1.2]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={4}
        position={[14, -2, -5]}
        rotation={[0, 0, Math.PI / 2 + 1.2]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={15}
        position={[34, 2, -20]}
        rotation={[0, 0, Math.PI / 2 + 1.2]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={12}
        position={[-24, -8, -4]}
        rotation={[0, 0, Math.PI / 2 - 0.4]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={12}
        position={[-24, 10, -4]}
        rotation={[0, 0, Math.PI / 2 + 0.4]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={12}
        position={[15, 14, -4]}
        rotation={[0, 0, Math.PI / 2 - 0.4]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={40}
        position={[-35, 56, -36]}
        rotation={[0, Math.PI / 2, Math.PI / 2 + 0.4]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={35}
        position={[-48, -46, -32]}
        rotation={[0, Math.PI / 2, Math.PI / 2 + 0.4]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={35}
        position={[8, -55, -32]}
        rotation={[0, Math.PI / 2, Math.PI / 2 + 0.4]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={15}
        position={[8, 40, -32]}
        rotation={[0, Math.PI / 2, Math.PI / 2 + 0.4]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
      <Sphere
        scale={28}
        position={[-64, 0, -40]}
        rotation={[0, 0, Math.PI / 2 + 1.6]}
        sphereLine={sphereLine}
        sphereColor={sphereColor}
      />
    </>
  )
}
