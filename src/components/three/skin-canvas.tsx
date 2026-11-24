"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";
import { EditorialArt } from "@/components/ui/editorial-art";
import { SceneErrorBoundary } from "./scene-error-boundary";

interface SkinCanvasProps {
  progressRef: MutableRefObject<number>;
  labels: { title: string; description: string }[];
  fallbackLabel: string;
  loadingLabel: string;
}

function makeSheet(seed: number, size = 3.1, amplitude = 0.16): THREE.BufferGeometry {
  const geometry = new THREE.PlaneGeometry(size, size * 0.78, 70, 54);
  const position = geometry.attributes.position as THREE.BufferAttribute;
  const colors: number[] = [];
  const shallow = new THREE.Color("#F8F4EC");
  const deep = new THREE.Color("#C9A96A");
  const tinted = new THREE.Color("#B8935A");

  for (let i = 0; i < position.count; i += 1) {
    const x = position.getX(i);
    const y = position.getY(i);
    const z =
      amplitude * Math.sin(x * 1.9 + seed) * Math.cos(y * 2.3 + seed * 0.7) +
      amplitude * 0.45 * Math.sin((x + y) * 3.1 + seed * 1.3);
    position.setZ(i, z);
    const mix = THREE.MathUtils.clamp((z / amplitude + 1) / 2, 0, 1);
    const color = deep.clone().lerp(shallow, mix).lerp(tinted, seed * 0.045);
    colors.push(color.r, color.g, color.b);
  }

  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function makeFibers(): THREE.TubeGeometry[] {
  return Array.from({ length: 6 }, (_, index) => {
    const offset = (index - 2.5) * 0.42;
    const points = Array.from({ length: 6 }, (_, step) => {
      const t = step / 5;
      return new THREE.Vector3(
        -1.6 + t * 3.2,
        offset + Math.sin(t * Math.PI * 2 + index) * 0.18,
        Math.cos(t * Math.PI * 1.5 + index) * 0.22
      );
    });
    return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 48, 0.006, 4, false);
  });
}

function makeParticles(): Float32Array {
  const count = 320;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 4.6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2.6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
  }
  return positions;
}

function SkinScene({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const pearls = useRef<THREE.Group>(null);
  const layerRefs = useRef<Array<THREE.Mesh | null>>([]);
  const geometries = useMemo(() => [makeSheet(0.4), makeSheet(1.9), makeSheet(3.4)], []);
  const fibers = useMemo(makeFibers, []);
  const particles = useMemo(makeParticles, []);
  const baseY = useMemo(() => [0.5, 0.2, -0.14], []);

  useFrame((state, delta) => {
    const progress = THREE.MathUtils.clamp(progressRef.current, 0, 1);
    const time = state.clock.elapsedTime;
    const damp = 1 - Math.exp(-delta * 3.4);

    if (group.current) {
      const targetX = -0.92 + progress * 0.55;
      const targetY = -0.22 + progress * 0.9 + Math.sin(time * 0.08) * 0.03;
      group.current.rotation.x += (targetX - group.current.rotation.x) * damp;
      group.current.rotation.y += (targetY - group.current.rotation.y) * damp;
      group.current.rotation.z += (progress * 0.12 - group.current.rotation.z) * damp;
      group.current.position.y += ((progress - 0.5) * 0.25 - group.current.position.y) * damp;
    }

    layerRefs.current.forEach((mesh, index) => {
      if (!mesh) return;
      const drift = Math.sin(time * 0.42 + index * 1.3) * 0.012;
      const separation = progress * index * 0.14;
      mesh.position.y += (baseY[index] + separation + drift - mesh.position.y) * damp;
    });

    if (pearls.current) {
      pearls.current.rotation.y = time * 0.08 + progress * 0.6;
      pearls.current.rotation.x = Math.sin(time * 0.12) * 0.08;
    }

    const targetZ = 6.1 - progress * 1.15;
    const targetCamY = 0.45 + progress * 0.85;
    state.camera.position.x += ((progress - 0.5) * 0.5 - state.camera.position.x) * damp;
    state.camera.position.y += (targetCamY - state.camera.position.y) * damp;
    state.camera.position.z += (targetZ - state.camera.position.z) * damp;
    state.camera.lookAt(0, -0.05, 0);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3.5, 4, 2.5]} intensity={2.1} color="#FFF4E2" />
      <pointLight position={[-4, -1.5, 2.5]} intensity={26} color="#C9A96A" distance={14} />
      <pointLight position={[3, 2.5, -3]} intensity={18} color="#F8F4EC" distance={16} />

      <Environment resolution={256} frames={1}>
        <Lightformer
          form="rect"
          intensity={4}
          color="#FFF6E8"
          position={[0, 4, 2]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[9, 6, 1]}
        />
        <Lightformer form="rect" intensity={2.4} color="#C9A96A" position={[-4, 1, -2]} scale={[4, 5, 1]} />
        <Lightformer form="circle" intensity={2} color="#F8F4EC" position={[4, 2, 1]} scale={3.4} />
        <Lightformer form="rect" intensity={1.2} color="#8A7C69" position={[0, -3, 1]} scale={[8, 3, 1]} />
      </Environment>

      <group ref={group} position={[0, 0, 0]}>
        {geometries.map((geometry, index) => (
          <mesh
            key={index}
            ref={(node) => {
              layerRefs.current[index] = node;
            }}
            geometry={geometry}
            position={[0, baseY[index], 0]}
          >
            <meshPhysicalMaterial
              vertexColors
              color="#F4EADA"
              roughness={0.22}
              metalness={0}
              transmission={0.86}
              thickness={0.7}
              ior={1.36}
              clearcoat={0.7}
              clearcoatRoughness={0.25}
              attenuationColor="#E7D8C0"
              attenuationDistance={2.5}
              side={THREE.DoubleSide}
              transparent
              opacity={0.94}
            />
          </mesh>
        ))}

        {fibers.map((geometry, index) => (
          <mesh key={`fiber-${index}`} geometry={geometry} position={[0, 0.1 + index * 0.03, 0]}>
            <meshBasicMaterial color="#DCC7A6" transparent opacity={0.16} />
          </mesh>
        ))}

        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[particles, 3]} />
          </bufferGeometry>
          <pointsMaterial
            size={0.022}
            color="#F1E7D6"
            transparent
            opacity={0.55}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>

        <group ref={pearls}>
          <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.5}>
            <mesh position={[0.1, 0.34, 0.55]}>
              <sphereGeometry args={[0.46, 64, 64]} />
              <meshPhysicalMaterial
                color="#F8F4EC"
                roughness={0.06}
                metalness={0.05}
                transmission={0.6}
                thickness={1.1}
                ior={1.42}
                clearcoat={1}
                clearcoatRoughness={0.06}
                iridescence={0.35}
                iridescenceIOR={1.3}
              />
            </mesh>
          </Float>
          <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
            <mesh position={[-1.05, -0.1, 0.5]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshPhysicalMaterial color="#E7D8C0" roughness={0.12} clearcoat={0.9} metalness={0.1} />
            </mesh>
          </Float>
          <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
            <mesh position={[1.15, 0.15, 0.35]}>
              <sphereGeometry args={[0.09, 32, 32]} />
              <meshPhysicalMaterial color="#DCC7A6" roughness={0.14} clearcoat={0.9} metalness={0.15} />
            </mesh>
          </Float>
          <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.7}>
            <mesh position={[0.7, -0.35, 0.6]}>
              <sphereGeometry args={[0.055, 24, 24]} />
              <meshPhysicalMaterial color="#F8F4EC" roughness={0.1} clearcoat={1} />
            </mesh>
          </Float>
        </group>
      </group>
    </>
  );
}

function StaticFallback({ label }: { label: string }) {
  return <EditorialArt variant="strata" label={label} className="h-full w-full" />;
}

export default function SkinCanvas({
  progressRef,
  labels,
  fallbackLabel,
  loadingLabel
}: SkinCanvasProps) {
  const reduced = useReducedMotion();
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setSupported(Boolean(context));
    } catch {
      setSupported(false);
    }
  }, []);

  const fallback = <StaticFallback label={fallbackLabel} />;

  if (supported === null) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-espresso-900">
        <p className="eyebrow text-ivory-200/40">{loadingLabel}</p>
      </div>
    );
  }

  if (!supported || reduced) {
    return fallback;
  }

  return (
    <SceneErrorBoundary fallback={fallback}>
      <div className="h-full w-full">
        <Canvas
          dpr={[1, 1.8]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0.45, 6.1], fov: 38, near: 0.1, far: 40 }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.05;
          }}
        >
          <Suspense fallback={null}>
            <SkinScene progressRef={progressRef} />
          </Suspense>
        </Canvas>
      </div>
      <p className="sr-only">
        {labels.map((layer) => `${layer.title}: ${layer.description}`).join(" ")}
      </p>
    </SceneErrorBoundary>
  );
}
