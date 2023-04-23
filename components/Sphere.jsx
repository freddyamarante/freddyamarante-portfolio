import * as THREE from 'three'
import { Float } from '@react-three/drei'

function Sphere({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const geometry = new THREE.SphereGeometry(scale, 64, 64)
  const material = new THREE.LineBasicMaterial({ color: 0xffffff })
  const wireframe = new THREE.EdgesGeometry(geometry)

  const lines = new THREE.LineSegments(wireframe, material)

  return (
    <>
      <group position={position} rotation={rotation}>
        <Float speed={0.25}>
          <primitive object={lines} />
          <mesh>
            <sphereGeometry args={[scale - 0.004, 36, 18]} />
            <meshBasicMaterial color="#0c0101" />
          </mesh>
        </Float>
      </group>
    </>
  )
}

export default Sphere
