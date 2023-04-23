import * as THREE from 'three'
import { Float } from '@react-three/drei'

function Sphere({ scale = 1 }) {
  const geometry = new THREE.SphereGeometry(scale, 48, 48)
  const material = new THREE.LineBasicMaterial({ color: 0xd3d3d3 })
  const wireframe = new THREE.EdgesGeometry(geometry)

  const lines = new THREE.LineSegments(wireframe, material)

  return (
    <>
      <Float>
        <primitive object={lines} />
        <mesh>
          <sphereGeometry args={[scale - 0.01, 36, 18]} />
          <meshBasicMaterial color="#040101" />
        </mesh>
      </Float>
    </>
  )
}

export default Sphere
