'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

// Generate particles outside component to avoid impure function warnings
const generateParticlePositions = (count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
        // Spread particles wider across viewport
        positions[i] = (Math.random() - 0.5) * 35; // x - wider spread
        positions[i + 1] = (Math.random() - 0.5) * 25; // y
        positions[i + 2] = (Math.random() - 0.5) * 20; // z - more depth
    }
    return positions;
};

function Particles({ count = 8000, mouse }: { count?: number; mouse: { x: number; y: number } }) {
    const pointsRef = useRef<THREE.Points>(null);
    const { viewport } = useThree();

    // Stable particle positions
    const positions = useMemo(() => generateParticlePositions(count), [count]);

    // Animate particles with organic movement + mouse parallax
    useFrame((state) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();

        // Mouse-driven rotation and parallax
        const targetRotationY = mouse.x * 0.3;
        const targetRotationX = -mouse.y * 0.2;

        // Smooth interpolation to target rotation
        pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y) * 0.05;
        pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.05;

        // Additional slow base rotation
        pointsRef.current.rotation.y += 0.0005;

        // Organic wave movement
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const x = positions[i3];
            const z = positions[i3 + 2];

            // Wave motion based on position and time
            positions[i3 + 1] += Math.sin(time * 0.5 + x * 0.2 + z * 0.15) * 0.003;
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#1E40AF"
                transparent
                opacity={0.35}
                sizeAttenuation
                blending={THREE.NormalBlending}
                depthWrite={false}
            />
        </points>
    );
}

export default function ParticleBackground() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Normalize mouse position to -1 to 1 range
            setMouse({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 75 }}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                dpr={[1, 2]}
            >
                <color attach="background" args={['transparent']} />
                <Particles count={8000} mouse={mouse} />
            </Canvas>
        </div>
    );
}
