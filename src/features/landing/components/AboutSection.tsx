"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const COMPANY_MODULES = [
    {
        key: "vision",
        title: "Strategic Vision",
        id: "MOD_STRATEGY",
        description: "We don't just write code; we architect futures. Our strategic roadmap aligns technical execution with your long-term business goals, ensuring every deploy moves the needle.",
        visual: (
            <div className="w-full h-full flex flex-col p-6 font-mono text-xs">
                <div className="flex justify-between items-center text-zinc-400 mb-4 border-b border-zinc-200 pb-2">
                    <span>ROADMAP_CONTROLLER</span>
                    <span className="text-green-500">● ON TRACK</span>
                </div>
                <div className="flex-1 relative flex items-center justify-center gap-4">
                    {/* Timeline Visual */}
                    <div className="h-32 w-1 bg-zinc-200 relative rounded-full">
                        {/* Start Marker */}
                        <div className="absolute top-4 -left-3 flex items-center gap-2">
                            <div className="w-20 text-right text-[10px] text-zinc-400 font-bold">Q1: INIT</div>
                            <div className="w-0 h-0 border-l-[6px] border-l-green-500 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                        </div>
                        {/* End Marker */}
                        <div className="absolute bottom-4 -left-3 flex items-center gap-2">
                            <div className="w-20 text-right text-[10px] text-zinc-400 font-bold">Q4: LAUNCH</div>
                            <div className="w-0 h-0 border-l-[6px] border-l-blue-500 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                        </div>
                        {/* Scroller */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30 animate-bounce" />
                    </div>
                    {/* Animated Objective */}
                    <div className="w-24 h-24 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center">
                        <span className="text-blue-500 font-bold animate-pulse">GOAL</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        key: "performance",
        title: "High Performance",
        id: "MOD_VELOCITY",
        description: "Speed is a feature. We optimize the physics of your digital ecosystem to ensure zero latency and maximum throughput, handling millions of requests without breaking a sweat.",
        visual: (
            <div className="w-full h-full flex flex-col p-6 font-mono text-xs">
                <div className="flex justify-between items-center text-zinc-400 mb-4 border-b border-zinc-200 pb-2">
                    <span>ENGINE_METRICS</span>
                    <span className="text-blue-500">● OPTIMIZED</span>
                </div>
                <div className="flex-1 relative flex items-end justify-between gap-1 px-4 pb-4">
                    {/* Bars representing speed/load */}
                    {[40, 60, 45, 80, 55, 90, 70, 50].map((h, i) => (
                        <div key={i} className="w-full bg-blue-100 rounded-t-sm relative group overflow-hidden" style={{ height: `${h}%` }}>
                            <div className="absolute bottom-0 left-0 w-full bg-blue-500 transition-all duration-500" style={{ height: '0%', animation: `fillUp 2s infinite ${i * 0.1}s` }} />
                        </div>
                    ))}
                    {/* Curve Overlay */}
                    <svg className="absolute inset-x-4 bottom-4 h-full overflow-visible" preserveAspectRatio="none">
                        <path d="M0,80 C20,60 40,90 60,40 C80,20 100,50 120,30" className="stroke-blue-600 stroke-2 fill-none opacity-50" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <style jsx>{`
                    @keyframes fillUp {
                        0% { height: 0%; }
                        50% { height: 100%; }
                        100% { height: 0%; }
                    }
                `}</style>
            </div>
        )
    },
    {
        key: "precision",
        title: "Precision Engineering",
        id: "MOD_ACCURACY",
        description: "We obsess over the details. From pixel-perfect UI execution to robust backend logic, our targeting systems ensure that the final product matches the initial blueprint exactly.",
        visual: (
            <div className="w-full h-full flex flex-col p-6 font-mono text-xs">
                <div className="flex justify-between items-center text-zinc-400 mb-4 border-b border-zinc-200 pb-2">
                    <span>QUALITY_CONTROL</span>
                    <span className="text-purple-500">● LOCKED</span>
                </div>
                <div className="flex-1 relative bg-zinc-50 rounded border border-zinc-100 p-2 overflow-hidden flex flex-col gap-2">
                    {/* Mock Blueprint */}
                    <div className="h-2 w-3/4 bg-zinc-200 rounded" />
                    <div className="h-2 w-1/2 bg-zinc-200 rounded" />
                    <div className="h-20 w-full border-2 border-dashed border-purple-300 bg-purple-50/50 rounded flex items-center justify-center mt-4">
                        <span className="text-purple-500 font-bold bg-white px-2 py-1 rounded shadow-sm">100% MATCH</span>
                    </div>
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full border border-purple-500 flex items-center justify-center">
                            <svg className="w-4 h-4 text-purple-600 fill-current animate-bounce" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        key: "intelligence",
        title: "Adaptive Intelligence",
        id: "MOD_OBSERVER",
        description: "Markets shift, and so do users. We build systems that listen, learn, and adapt. Our real-time event monitoring ensures your platform stays ahead of critical trends.",
        visual: (
            <div className="w-full h-full flex flex-col p-6 font-mono text-xs bg-zinc-900 text-zinc-300 rounded-lg">
                <div className="flex justify-between items-center text-zinc-500 mb-2 border-b border-zinc-700 pb-2">
                    <span>LIVE_STREAM</span>
                    <span className="text-orange-500 animate-pulse">● LISTENING</span>
                </div>
                <div className="flex-1 font-mono text-[10px] space-y-1 overflow-hidden">
                    <div className="opacity-50 text-zinc-500">[SYS_INIT] MONITORING...</div>
                    <div className="text-blue-400">[EVENT] USER_GROWTH_SPIKE</div>
                    <div className="text-green-400">[ACTION] AUTO_SCALE_UP</div>
                    <div className="text-orange-400">[ALERT] NEW_MARKET_DETECTED</div>
                    <div className="text-blue-400">[UPDATE] DEPLOYING_PATCH_V2</div>
                    <div className="animate-pulse">_</div>
                </div>
            </div>
        )
    }
];

export default function AboutSection() {
    const scopeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray(".about-step");

        sections.forEach((section: any, i) => {
            const content = section.querySelector(".tech-content");
            const visual = section.querySelector(".tech-visual");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top center+=15%",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                    scrub: 0.5
                }
            });

            const isEven = i % 2 === 0;

            tl.fromTo(content,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )
                .fromTo(visual,
                    { scale: 0.9, opacity: 0, filter: "blur(10px)" },
                    { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power2.out" },
                    "<0.1"
                );
        });
    }, { scope: scopeRef });

    return (
        <section ref={scopeRef} id="about" className="relative bg-white bg-tech-grid py-32 overflow-hidden">

            {/* Background Grid - Standardized */}


            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-zinc-200 pb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase font-mono">SYSTEM_ARCHITECTURE</h2>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight">CORE PROTOCOLS</h3>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="font-mono text-xs text-zinc-400">BUILD_VER: 2026.1.0</div>
                        <div className="font-mono text-xs text-zinc-400">STATUS: OPERATIONAL</div>
                    </div>
                </div>

                {/* Modules List */}
                <div className="space-y-32">
                    {COMPANY_MODULES.map((module, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <div key={module.key} className={`about-step flex flex-col items-center gap-12 lg:gap-24 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                                {/* Text Content */}
                                <div className="tech-content flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-zinc-100 rounded border border-zinc-200">
                                        <span className="font-mono text-xs font-bold text-zinc-500">{module.id}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                                        {module.title}
                                    </h2>
                                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                                    <p className="text-lg text-zinc-600 font-medium leading-relaxed font-mono">
                                        {module.description}
                                    </p>
                                    <div className="flex gap-2 pt-4">
                                        <div className="px-3 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase border border-blue-100">Capability</div>
                                        <div className="px-3 py-1 rounded bg-zinc-100 text-zinc-500 text-[10px] font-bold tracking-wider uppercase border border-zinc-200">System</div>
                                    </div>
                                </div>

                                {/* Tech Visual Card */}
                                <div className="tech-visual flex-1 w-full max-w-[600px]">
                                    <div className="aspect-[4/3] w-full bg-white rounded-xl border border-zinc-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden relative group hover:border-blue-400 transition-colors duration-500">
                                        {/* Browser/System Bar */}
                                        <div className="h-8 bg-zinc-50 border-b border-zinc-100 flex items-center px-4 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                            <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                            <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                            <div className="ml-auto font-mono text-[9px] text-zinc-400">LATENCY: 1ms</div>
                                        </div>

                                        {/* Content */}
                                        <div className="h-[calc(100%-2rem)]">
                                            {module.visual}
                                        </div>

                                        {/* Scanner Line Overlay */}
                                        <div className="absolute top-0 w-full h-[1px] bg-blue-400 opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[2s] ease-linear shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20" />
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
