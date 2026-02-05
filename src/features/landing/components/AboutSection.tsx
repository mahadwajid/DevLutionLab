"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const COMPANY_MODULES = [
    {
        key: "vision",
        title: "Strategic Vision",
        id: "01",
        description: "We don’t just write code — we craft a roadmap connecting your business goals with technology. Every feature we build drives measurable impact.",
        visual: (
            <div className="w-full h-full flex flex-col p-6 text-xs">
                <div className="flex justify-between items-center text-zinc-400 mb-4 border-b border-zinc-200 pb-2">
                    <span>Project Roadmap</span>
                    <span className="text-green-500">● On Track</span>
                </div>
                <div className="flex-1 relative flex items-center justify-center gap-6">
                    {/* Timeline Visual */}
                    <div className="h-36 w-1 bg-zinc-200 relative rounded-full">
                        {/* Start Marker */}
                        <div className="absolute top-4 -left-4 flex items-center gap-2">
                            <div className="w-24 text-right text-[10px] text-zinc-400 font-bold">Q1: Ideation</div>
                            <div className="w-0 h-0 border-l-[6px] border-l-green-500 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                        </div>
                        {/* End Marker */}
                        <div className="absolute bottom-4 -left-4 flex items-center gap-2">
                            <div className="w-24 text-right text-[10px] text-zinc-400 font-bold">Q4: Launch</div>
                            <div className="w-0 h-0 border-l-[6px] border-l-blue-500 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                        </div>
                        {/* Scroller */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/40 animate-bounce" />
                    </div>
                    {/* Goal Indicator */}
                    <div className="w-28 h-28 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center">
                        <span className="text-blue-500 font-bold animate-pulse">Goal</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        key: "performance",
        title: "High Performance",
        id: "02",
        description: "Fast, reliable, and scalable systems are at the heart of what we do. We optimize performance for users and business alike.",
        visual: (
            <div className="w-full h-full flex flex-col p-6 text-xs">
                <div className="flex justify-between items-center text-zinc-400 mb-4 border-b border-zinc-200 pb-2">
                    <span>System Performance</span>
                    <span className="text-blue-500">● Optimized</span>
                </div>
                <div className="flex-1 relative flex items-end justify-between gap-1 px-4 pb-4">
                    {[50, 70, 60, 85, 65, 95, 75, 55].map((h, i) => (
                        <div key={i} className="w-full bg-blue-100 rounded-t-sm relative overflow-hidden">
                            <div
                                className="absolute bottom-0 left-0 w-full bg-blue-500 transition-all duration-500"
                                style={{ height: '0%', animation: `fillUp 2s infinite ${i * 0.1}s` }}
                            />
                        </div>
                    ))}
                    {/* Smooth Curve Overlay */}
                    <svg className="absolute inset-x-4 bottom-4 h-full overflow-visible" preserveAspectRatio="none">
                        <path d="M0,85 C20,60 40,95 60,50 C80,25 100,55 120,35" className="stroke-blue-600 stroke-2 fill-none opacity-50" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        )
    },
    {
        key: "precision",
        title: "Attention to Detail",
        id: "03",
        description: "Every pixel, line of code, and interaction is crafted with care. Our focus on detail ensures a flawless experience across platforms.",
        visual: (
            <div className="w-full h-full flex flex-col p-6 text-xs">
                <div className="flex justify-between items-center text-zinc-400 mb-4 border-b border-zinc-200 pb-2">
                    <span>Quality Assurance</span>
                    <span className="text-purple-500">● Verified</span>
                </div>
                <div className="flex-1 relative bg-zinc-50 rounded border border-zinc-100 p-2 overflow-hidden flex flex-col gap-2">
                    <div className="h-2 w-3/4 bg-zinc-200 rounded" />
                    <div className="h-2 w-1/2 bg-zinc-200 rounded" />
                    <div className="h-20 w-full border-2 border-dashed border-purple-300 bg-purple-50/50 rounded flex items-center justify-center mt-4">
                        <span className="text-purple-500 font-bold bg-white px-2 py-1 rounded shadow-sm">100% Match</span>
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
        id: "04",
        description: "Our AI-driven systems learn from user behavior, anticipate needs, and optimize performance automatically, keeping your platform ahead of the curve.",
        visual: (
            <div className="w-full h-full flex flex-col p-6 text-xs bg-zinc-900 text-zinc-300 rounded-lg">
                <div className="flex justify-between items-center text-zinc-500 mb-2 border-b border-zinc-700 pb-2">
                    <span>Live Insights</span>
                    <span className="text-orange-500 animate-pulse">● Active</span>
                </div>
                <div className="flex-1 text-[10px] space-y-1 overflow-hidden">
                    <div className="opacity-50 text-zinc-500">System booting...</div>
                    <div className="text-blue-400">Traffic spike detected</div>
                    <div className="text-green-400">Auto-scaling triggered</div>
                    <div className="text-orange-400">New AI pattern recognized</div>
                    <div className="text-blue-400">Latest update deployed</div>
                    <div className="animate-pulse">_</div>
                </div>
            </div>
        )
    },
    {
        key: "security",
        title: "Robust Security",
        id: "05",
        description: "Security is non-negotiable. We design systems with multi-layered protection, data encryption, and proactive monitoring to keep your platform safe.",
        visual: (
            <div className="w-full h-full flex flex-col p-6 text-xs bg-red-50 rounded-lg border border-red-200">
                <div className="flex justify-between items-center text-red-600 mb-2 border-b border-red-200 pb-2">
                    <span>Security Status</span>
                    <span className="text-red-500 animate-pulse">● Secured</span>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-2">
                    <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-red-600 fill-current" viewBox="0 0 24 24"><path d="M12 1C8.14 1 5 4.14 5 8v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-3.86-3.14-7-7-7zm0 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                    </div>
                    <span className="text-red-600 font-bold">All layers active</span>
                </div>
            </div>
        )
    }
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useGSAP(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".about-panel");

        // Pin the entire section
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${panels.length * window.innerHeight}`,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const newIndex = Math.min(
                    Math.floor(progress * panels.length),
                    panels.length - 1
                );
                setActiveIndex(newIndex);
            }
        });

        // Animate panels based on active state
        panels.forEach((panel, i) => {
            // Initial state: all hidden except first
            if (i !== 0) {
                gsap.set(panel, { opacity: 0, y: 50 });
            }
        });

    }, { scope: sectionRef });

    // Animate panel changes with professional transitions
    useGSAP(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".about-panel");

        panels.forEach((panel, i) => {
            const content = panel.querySelector(".panel-content");
            const visual = panel.querySelector(".panel-visual");
            const isEven = i % 2 === 0;

            if (i === activeIndex) {
                // Animate in - staggered entrance
                gsap.to(panel, {
                    opacity: 1,
                    duration: 0.1,
                    ease: "none"
                });

                // Content slides in from left or right based on position
                gsap.fromTo(content,
                    {
                        x: isEven ? -80 : 80,
                        opacity: 0,
                        scale: 0.95
                    },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "power3.out"
                    }
                );

                // Visual slides in from opposite side with slight rotation
                gsap.fromTo(visual,
                    {
                        x: isEven ? 80 : -80,
                        opacity: 0,
                        scale: 0.9,
                        rotateY: isEven ? 15 : -15,
                        filter: "blur(10px)"
                    },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        filter: "blur(0px)",
                        duration: 0.7,
                        ease: "power2.out",
                        delay: 0.1
                    }
                );
            } else {
                // Animate out - quick fade with direction
                const direction = i < activeIndex ? -1 : 1;

                gsap.to(content, {
                    x: isEven ? direction * -60 : direction * 60,
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.4,
                    ease: "power2.in"
                });

                gsap.to(visual, {
                    x: isEven ? direction * 60 : direction * -60,
                    opacity: 0,
                    scale: 0.9,
                    filter: "blur(5px)",
                    duration: 0.35,
                    ease: "power2.in"
                });

                gsap.to(panel, {
                    opacity: 0,
                    duration: 0.4,
                    delay: 0.2
                });
            }
        });
    }, { dependencies: [activeIndex], scope: sectionRef });

    return (
        <section ref={sectionRef} id="about" className="relative bg-white bg-tech-grid h-screen overflow-hidden">

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex flex-col">
                {/* Header - Centered gradient text style */}
                <div className="pt-24 pb-6 border-b border-zinc-200 text-center">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-secondary opacity-20">
                        What We Do
                    </h2>
                </div>

                {/* Content Area - Panels stack here */}
                <div ref={contentRef} className="flex-1 relative py-12">
                    {COMPANY_MODULES.map((module, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <div
                                key={module.key}
                                className={`about-panel absolute inset-0 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? "" : "lg:flex-row-reverse"}`}
                            >
                                {/* Text Content */}
                                <div className="panel-content flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-zinc-100 rounded border border-zinc-200">
                                        <span className="text-xs font-bold text-zinc-500">{module.id}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                                        {module.title}
                                    </h2>
                                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                                    <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                                        {module.description}
                                    </p>
                                </div>

                                {/* Tech Visual Card */}
                                <div className="panel-visual flex-1 w-full max-w-[600px]">
                                    <div className="aspect-[4/3] w-full bg-white rounded-xl border border-zinc-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden relative group hover:border-blue-400 transition-colors duration-500">
                                        {/* Browser Bar */}
                                        <div className="h-8 bg-zinc-50 border-b border-zinc-100 flex items-center px-4 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                            <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                            <div className="w-3 h-3 rounded-full bg-zinc-300" />
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
