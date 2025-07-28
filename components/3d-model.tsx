"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, ContactShadows } from "@react-three/drei"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

// --- R3F subcomponents ---
function AnimatedCube({ color = "#3b82f6" }) {
  const meshRef = useRef()
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function AnimatedSphere({ position = [2, 0, 0], color = "#60a5fa" }) {
  const meshRef = useRef()
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
      meshRef.current.rotation.y += delta * 0.2
    }
  })
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function AnimatedTorus({ position = [-2, 0, 0], color = "#93c5fd" }) {
  const meshRef = useRef()
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.8, 0.2, 16, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <AnimatedCube />
      <AnimatedSphere />
      <AnimatedTorus />
    </>
  )
}

// --- Main export ---
export default function ThreeDModel({ height = 400 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Only render <Canvas> when in view to avoid R3F hook errors
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ height: `${height}px` }}
      className="w-full rounded-xl overflow-hidden bg-blue-50 dark:bg-blue-950/30"
    >
      {isInView && (
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Scene />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={1.5} far={1} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      )}
    </motion.div>
  )
}