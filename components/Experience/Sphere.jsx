import * as THREE from 'three'
import { useTheme } from 'next-themes'
import { Float } from '@react-three/drei'
import { useEffect, useState } from 'react'

THREE.ColorManagement.enabled = false

function Sphere({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const [sphereLine, setSphereLine] = useState('#151414')
  const [sphereColor, setSphereColor] = useState('#f1e9e9')

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    if (currentTheme === 'light') {
      setSphereLine('#151414')
      setSphereColor('#f1e9e9')
    } else if (currentTheme === 'dark') {
      setSphereLine('#f1e9e9')
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
