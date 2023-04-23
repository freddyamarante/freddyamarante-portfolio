import * as THREE from 'three'
import { Wireframe, Float } from '@react-three/drei'
import Sphere from './Sphere'

THREE.ColorManagement.legacyMode = false

export default function Experience() {
  return (
    <>
      <Sphere scale={1} />
    </>
  )
}
