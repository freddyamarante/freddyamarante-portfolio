import * as THREE from 'three'
import { useTheme } from 'next-themes'
import { Float } from '@react-three/drei'
import { useEffect, useState } from 'react'

THREE.ColorManagement.enabled = false

function Sphere({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const [sphereLine, setSphereLine] = useState('#000000')
  const [sphereColor, setSphereColor] = useState('#ffffff')

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    if (currentTheme === 'light') {
      setSphereLine('#000000')
      setSphereColor('#ffffff')
    } else if (currentTheme === 'dark') {
      setSphereLine('#ffffff')
      setSphereColor('#0c0101')
    }
  }, [currentTheme])

  const geometry = new THREE.SphereGeometry(scale, 64, 64)
  const material = new THREE.LineBasicMaterial({ color: sphereLine })
  const wireframe = new THREE.EdgesGeometry(geometry)

  const lines = new THREE.LineSegments(wireframe, material)

  return (
    <>
      <group position={position} rotation={rotation}>
        <Float speed={0.25}>
          <primitive object={lines} />
          <mesh>
            <sphereGeometry args={[scale - 0.004, 36, 18]} />
            <meshBasicMaterial color={sphereColor} />
          </mesh>
        </Float>
      </group>
    </>
  )
}

export default Sphere
