"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_STEPS = [
    {
        key: "origin",
        leftTitle: "THE ARCHITECT",
        leftDesc: "Crafting digital legacies through deep engineering and minimalist design philosophy.",
        rightTitle: "WHO WE ARE",
        rightDesc: "DevLution Lab is a sanctuary for high-end technical creation, where we merge logic with aesthetics.",
        points: ["SCALABLE CORES", "PIXEL-PERFECT", "RESEARCH-DRIVEN"]
    },
    {
        key: "design",
        leftTitle: "THE NEURAL INTERFACE",
        leftDesc: "Bridging the gap between human intuition and machine intelligence through UI systems.",
        rightTitle: "WHAT WE DO",
        rightDesc: "We build intuitive interfaces that feel like natural extensions of the user's workflow.",
        points: ["ADAPTIVE UX", "MOTION SYSTEMS", "DATA VIZ"]
    },
    {
        key: "build",
        leftTitle: "THE CORE ENGINE",
        leftDesc: "Powering the next generation of digital products with resilient backend architectures.",
        rightTitle: "HOW WE WORK",
        rightDesc: "Iterative sprints, rigorous testing, and transparent communication are our building blocks.",
        points: ["CLEAN ARCH", "DEVOPS FIRST", "ZERO LATENCY"]
    },
    {
        key: "impact",
        leftTitle: "THE GLOBAL VECTOR",
        leftDesc: "Scaling impact across continents with localized intelligence and global standards.",
        rightTitle: "WHAT YOU GET",
        rightDesc: "A complete technological partner focused on your long-term evolution and success.",
        points: ["GLOBAL SCALE", "FUTURE PROOF", "SUPPORT 24/7"]
    }
];

export default function AboutSection() {
    const scopeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray(".about-step");

        sections.forEach((section: any, i) => {
            const leftPart = section.querySelector(".left-part");
            const rightPart = section.querySelector(".right-part");
            const visualPart = section.querySelector(".visual-part");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    toggleActions: "play reverse play reverse"
                }
            });

            // Swap positions principle: 
            // Step 1: Left (Text), Right (Card)
            // Step 2: Right (Text), Left (Card)
            const isEven = i % 2 === 0;

            tl.fromTo(leftPart,
                { x: isEven ? -100 : 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }
            )
                .fromTo(rightPart,
                    { x: isEven ? 100 : -100, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1 },
                    "<"
                )
                .fromTo(visualPart,
                    { scale: 0.8, opacity: 0, rotate: isEven ? -5 : 5 },
                    { scale: 1, opacity: 1, rotate: 0, duration: 1.2 },
                    "<0.2"
                );
        });
    }, { scope: scopeRef });

    return (
        <section ref={scopeRef} id="about" className="relative bg-background">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-grid-soft opacity-[0.1]" />

            {ABOUT_STEPS.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                    <div
                        key={step.key}
                        className="about-step min-h-screen flex items-center relative py-24 overflow-hidden"
                    >
                        <div className="max-w-[1600px] mx-auto px-12 lg:px-24 w-full h-full">
                            <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${isEven ? "" : "lg:flex-row-reverse"}`}>

                                {/* Left/Right Text Column */}
                                <div className={`left-part flex-1 space-y-12 ${isEven ? "" : "text-right"}`}>
                                    <div className="space-y-6">
                                        <div className={`flex items-center gap-4 ${isEven ? "" : "flex-row-reverse"}`}>
                                            <span className="font-mono text-sm font-bold text-accent">0{i + 1}</span>
                                            <div className="h-px flex-1 bg-accent/20" />
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-[0.9]">
                                            {step.leftTitle}
                                        </h2>
                                        <p className="text-xl text-text-muted font-medium leading-relaxed max-w-xl">
                                            {step.leftDesc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Visual Column */}
                                <div className="visual-part flex-1 relative aspect-square max-w-[500px] w-full glass-surface rounded-[3rem] overflow-hidden group">
                                    <div className="absolute inset-0 noise-overlay opacity-[0.1]" />
                                    <div className="absolute inset-0 scanline opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {/* Simplified Center Visual for now */}
                                    <div className="h-full w-full flex items-center justify-center p-12">
                                        <div className="w-full h-full rounded-2xl border border-accent/10 bg-accent/5 relative overflow-hidden flex items-center justify-center">
                                            <span className="font-mono text-[10px] text-accent/20 absolute top-4 left-4">SYNC_RECOVERING...</span>
                                            <div className="w-32 h-32 rounded-full border-2 border-accent animate-pulse flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full border-2 border-secondary animate-spin-slow" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right/Left Info Column */}
                                <div className="right-part flex-1 space-y-8">
                                    <div className="glass-surface p-10 rounded-[2.5rem] border-white/20 shadow-2xl space-y-6">
                                        <h3 className="text-2xl font-bold text-text-primary">{step.rightTitle}</h3>
                                        <p className="text-text-muted leading-relaxed">
                                            {step.rightDesc}
                                        </p>
                                        <div className="space-y-3">
                                            {step.points.map(p => (
                                                <div key={p} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                    <span className="text-sm font-bold text-text-primary tracking-wide">{p}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
