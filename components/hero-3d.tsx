"use client"

import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, Sphere, MeshDistortMaterial, RoundedBox, Torus } from "@react-three/drei"

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Main sphere representing digital transformation */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </Float>

      {/* Orbiting elements representing different technologies */}
      <Float speed={5} rotationIntensity={2} floatIntensity={1}>
        <RoundedBox args={[0.5, 0.5, 0.5]} radius={0.1} position={[3, 1, 1]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
        </RoundedBox>
      </Float>

      <Float speed={4} rotationIntensity={1.5} floatIntensity={1}>
        <Torus args={[0.4, 0.1, 16, 32]} position={[-3, -1, 1]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
        </Torus>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.1} position={[2, -2, -1]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
        </RoundedBox>
      </Float>

      <Float speed={6} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[0.3, 0.1, 16, 32]} position={[-2, 2, -1]}>
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
        </Torus>
      </Float>

      {/* Connection lines */}
      {[
        [3, 1, 1, 0, 0, 0],
        [-3, -1, 1, 0, 0, 0],
        [2, -2, -1, 0, 0, 0],
        [-2, 2, -1, 0, 0, 0],
      ].map((points, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry">
            <float32BufferAttribute
              attach="attributes-position"
              array={new Float32Array(points)}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="#8b5cf6" opacity={0.5} transparent />
        </line>
      ))}

      {/* Particles */}
      {Array.from({ length: 50 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 10
        const y = (Math.random() - 0.5) * 10
        const z = (Math.random() - 0.5) * 10
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
          </mesh>
        )
      })}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  )
}
