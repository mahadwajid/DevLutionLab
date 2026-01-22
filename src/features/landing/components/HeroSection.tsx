'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import ParticleBackground to avoid SSR issues
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
    ssr: false,
    loading: () => null
});

// Tech Stack Icon Components
const ReactIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1" fill="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
    </svg>
);

const NodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#68A063" stroke="#68A063" strokeWidth="0.5" />
        <path d="M12 12v5M12 12L7 9M12 12l5-3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
);

const PythonIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 3c-2.5 0-4.5 1-4.5 3v3h4.5v.5H7c-1.5 0-2.5 1-2.5 2.5v3c0 1.5 1 2.5 2.5 2.5h2v-2.5c0-1.5 1.5-2.5 3-2.5h4.5c1.5 0 2.5-1 2.5-2.5V6c0-2-2-3-4.5-3h-2.5z" fill="#3776AB" />
        <path d="M12 21c2.5 0 4.5-1 4.5-3v-3H12v-.5h4.5c1.5 0 2.5-1 2.5-2.5v-3c0-1.5-1-2.5-2.5-2.5h-2v2.5c0 1.5-1.5 2.5-3 2.5H7c-1.5 0-2.5 1-2.5 2.5v3.5c0 2 2 3 4.5 3h2.5z" fill="#FFD43B" />
        <circle cx="9" cy="7" r="1" fill="#fff" />
        <circle cx="15" cy="17" r="1" fill="#fff" />
    </svg>
);

const PostgreSQLIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 3c-3 0-5.5 2-6 5-.3 2 .5 4 2 5.5.5.5 1 .8 1.5 1C10 16 10.5 18 11 20c.3 1 1 2 2 2s1.7-1 2-2c.5-2 1-4 1.5-5.5.5-.2 1-.5 1.5-1 1.5-1.5 2.3-3.5 2-5.5-.5-3-3-5-6-5z" fill="#336791" stroke="#336791" strokeWidth="0.5" />
        <ellipse cx="12" cy="9" rx="3" ry="2" fill="#fff" opacity="0.3" />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#0F172A" />
    </svg>
);

const DockerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="6" y="10" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="9" y="10" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="12" y="10" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="9" y="7" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="12" y="7" width="2.5" height="2.5" fill="#2496ED" />
        <rect x="15" y="10" width="2.5" height="2.5" fill="#2496ED" />
        <path d="M20 11c-.5-1-1.5-1.5-2.5-1.5-.5 0-1 .2-1.5.5 0-2-1.5-3-3-3H4c-.5 2-.5 4 .5 6C6 15 8 16 10 16c1 0 2-.2 3-.6.8.4 1.7.6 2.5.6 2.5 0 4.5-1.5 4.5-4 0-.3 0-.7-.2-1z" stroke="#2496ED" strokeWidth="0.8" fill="none" />
    </svg>
);

const TECH_NODES = [
    {
        id: 'react',
        label: 'React',
        icon: <ReactIcon />,
        stack: ['React', 'Next.js'],
        orbit: 'orbit-1',
        angle: 45,
        color: '#61DAFB'
    },
    {
        id: 'nodejs',
        label: 'Node.js',
        icon: <NodeIcon />,
        stack: ['Node.js', 'Express'],
        orbit: 'orbit-2',
        angle: 180,
        color: '#68A063'
    },
    {
        id: 'python',
        label: 'Python',
        icon: <PythonIcon />,
        stack: ['Django', 'FastAPI'],
        orbit: 'orbit-3',
        angle: 270,
        color: '#3776AB'
    },
    {
        id: 'postgresql',
        label: 'PostgreSQL',
        icon: <PostgreSQLIcon />,
        stack: ['PostgreSQL', 'Redis'],
        orbit: 'orbit-1',
        angle: 225,
        color: '#336791'
    },
    {
        id: 'github',
        label: 'GitHub',
        icon: <GitHubIcon />,
        stack: ['Git', 'CI/CD'],
        orbit: 'orbit-2',
        angle: 0,
        color: '#0F172A'
    },
    {
        id: 'docker',
        label: 'Docker',
        icon: <DockerIcon />,
        stack: ['Docker', 'K8s'],
        orbit: 'orbit-3',
        angle: 90,
        color: '#2496ED'
    },
];

export default function HeroSection() {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const globeRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!globeRef.current) return;
        const rect = globeRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setMousePos({ x: x * 20, y: y * 20 });
    };

    if (!isMounted) return <section className="min-h-screen bg-background" />;

    return (
        <section
            id="home"
            className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
            onMouseMove={handleMouseMove}
            style={{ perspective: '1000px' }}
        >
            {/* Three.js Particle Background Layer */}
            {isMounted && <ParticleBackground />}

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Content */}
                    <div className="flex flex-col space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 w-fit">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                <span className="text-[10px] font-bold text-secondary tracking-widest uppercase leading-none">Innovation Hub</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-[72px] font-[780] text-text-primary leading-[1.05] tracking-tight">
                                Empowering Businesses with <br />
                                <span className="text-gradient-blue font-[520]">high Intelligence!</span>
                            </h1>

                            <p className="max-w-xl text-lg md:text-xl text-text-muted leading-relaxed font-[520]">
                                Transforming enterprises with AI/ML model development, cutting-edge web solutions, scalable SAAS products, and robust ERP-based systems.
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            {['linkedin', 'facebook', 'instagram'].map((social) => (
                                <Link
                                    key={social}
                                    href={`#${social}`}
                                    className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-text-muted hover:border-secondary hover:text-secondary transition-all duration-300 hover:scale-110"
                                >
                                    <span className="sr-only">{social}</span>
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                                        {social === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />}
                                        {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.42.42.679.819.896 1.377.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.42-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.42-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.42.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.261-2.911.558-.79.306-1.459.717-2.126 1.384-.667.667-1.078 1.336-1.384 2.126-.297.763-.501 1.634-.558 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.261 2.148.558 2.911.306.79.717 1.459 1.384 2.126.667.667 1.336 1.078 2.126 1.384.763.297 1.634.501 2.911.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.261 2.911-.558.79-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.336 1.384-2.126.297-.763.501-1.634.558-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.261-2.148-.558-2.911-.306-.79-.717-1.459-1.384-2.126-.667-.667-1.336-1.078-2.126-1.384-.763-.297-1.634-.501-2.911-.558-1.28-.058-1.688-.072-4.947-.072z" />}
                                    </svg>
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link
                                href="#contact"
                                className="px-10 py-5 rounded-full bg-secondary text-white font-[650] hover:brightness-110 hover:shadow-2xl hover:shadow-secondary/30 transition-all active:scale-95 text-lg"
                            >
                                Start a project
                            </Link>
                            <Link
                                href="#about"
                                className="px-10 py-5 rounded-full border-2 border-primary/10 text-primary font-[650] hover:bg-primary/5 transition-all active:scale-95 text-lg"
                            >
                                More About Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Realistic 3D Globe with Tech Icons */}
                    <div
                        className="relative flex items-center justify-center min-h-[600px] lg:min-h-[700px]"
                        ref={globeRef}
                    >
                        {/* Atmospheric Bloom */}
                        <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-secondary/15 rounded-full blur-[90px] animate-pulse pointer-events-none" />

                        <div
                            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] transition-all duration-300 ease-out pointer-events-none transform-gpu"
                            style={{
                                transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) rotateX(${-mousePos.y / 5}deg) rotateY(${mousePos.x / 5}deg)`,
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {/* Realistic Earth Base with Volumetric Shading */}
                            <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_15px_60px_rgba(15,23,42,0.15)] z-10 transition-shadow duration-500 bg-white">
                                <div
                                    className="absolute inset-0 bg-[url('/images/earth_map.jpg')] bg-cover opacity-90 transition-opacity duration-300"
                                    style={{
                                        width: '200%',
                                        backgroundSize: '50% 100%',
                                        animation: 'earth-spin 50s linear infinite',
                                    }}
                                />

                                {/* 3D Shading Layer */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15)_0%,transparent_50%,rgba(0,0,0,0.6)_100%)] pointer-events-none mix-blend-overlay" />

                                {/* Deep Shadow */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

                                {/* Glassy Reflection */}
                                <div className="absolute top-[10%] left-[15%] w-[40%] h-[20%] bg-white/10 rounded-[100%] blur-sm rotate-[-35deg] pointer-events-none" />
                            </div>

                            {/* Pakistan Location Marker */}
                            <div
                                className="absolute top-[42%] left-[64%] z-20 pointer-events-none"
                                style={{ transform: 'translateZ(20px)' }}
                            >
                                <div className="relative group/marker">
                                    <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_20px_rgba(245,158,11,1)] animate-pulse" />
                                    <div className="absolute -inset-2 border-2 border-accent/40 rounded-full animate-ping" />
                                </div>
                            </div>

                            {/* Flat Orbit Layers with Front-Facing Tech Icons */}
                            {[1, 2, 3].map((num) => (
                                <div
                                    key={`orbit-${num}`}
                                    className="absolute inset-[-60px] pointer-events-none z-0"
                                    style={{
                                        transform: `scale(${0.95 + num * 0.05})`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 rounded-full border border-secondary/20 shadow-[0_0_30px_rgba(59,130,246,0.05)]"
                                        style={{
                                            animation: `rotate ${35 + num * 12}s linear infinite`,
                                        }}
                                    >
                                        {/* Tech Icon Nodes */}
                                        {TECH_NODES.filter(node => node.orbit === `orbit-${num}`).map((node) => (
                                            <div
                                                key={node.id}
                                                className="absolute pointer-events-auto"
                                                style={{
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: `rotate(${node.angle}deg) translateX(${180 + num * 45}px) rotate(${-node.angle}deg)`,
                                                }}
                                            >
                                                <div className="relative">
                                                    <button
                                                        onMouseEnter={() => setActiveNode(node.id)}
                                                        onMouseLeave={() => setActiveNode(null)}
                                                        onFocus={() => setActiveNode(node.id)}
                                                        onBlur={() => setActiveNode(null)}
                                                        className="relative w-16 h-16 flex items-center justify-center group focus:outline-none transition-all duration-300"
                                                    >
                                                        {/* Icon Background with Glow */}
                                                        <div
                                                            className={`absolute inset-0 rounded-full bg-white transition-all duration-300 ${activeNode === node.id
                                                                ? 'scale-110 shadow-[0_0_25px_rgba(59,130,246,0.4)]'
                                                                : 'scale-100 shadow-[0_5px_20px_rgba(15,23,42,0.08)]'
                                                                }`}
                                                            style={{
                                                                boxShadow: activeNode === node.id
                                                                    ? `0 0 25px ${node.color}40`
                                                                    : '0 5px 20px rgba(15,23,42,0.08)'
                                                            }}
                                                        />

                                                        {/* Tech Stack Icon */}
                                                        <div className={`relative w-9 h-9 transition-transform duration-300 ${activeNode === node.id ? 'scale-110' : 'scale-100'}`}>
                                                            {node.icon}
                                                        </div>

                                                        {/* Premium Tooltip */}
                                                        <div
                                                            className={`absolute left-1/2 bottom-[160%] -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 origin-bottom ${activeNode === node.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-2'
                                                                }`}
                                                            style={{
                                                                animation: `counter-rotate ${35 + num * 12}s linear infinite`,
                                                                transitionDelay: activeNode === node.id ? '100ms' : '0ms'
                                                            }}
                                                        >
                                                            <div className="bg-white/98 backdrop-blur-2xl border border-secondary/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(15,23,42,0.12)] min-w-[170px]">
                                                                <div className="flex items-center gap-3 mb-3">
                                                                    <div className="w-6 h-6">{node.icon}</div>
                                                                    <span className="text-base font-extrabold text-primary whitespace-nowrap tracking-tight">{node.label}</span>
                                                                </div>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {node.stack.map(s => (
                                                                        <span key={s} className="px-2 py-0.5 rounded-md bg-secondary/8 border border-secondary/15 text-[10px] font-black text-secondary uppercase tracking-widest">{s}</span>
                                                                    ))}
                                                                </div>
                                                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white/98" />
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Navigation Marker */}
            <div className="absolute bottom-10 left-10 flex items-center gap-4 group opacity-40 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-surface/50 backdrop-blur-md shadow-lg">
                    <span className="text-[11px] font-black text-text-muted tracking-tighter">TECH</span>
                </div>
                <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/50 to-transparent transition-all group-hover:w-32" />
            </div>
        </section>
    );
}
