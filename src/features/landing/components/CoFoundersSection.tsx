"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FOUNDERS = [
    {
        id: 1,
        name: "ALEXANDER VANE",
        role: "CHIEF ARCHITECT",
        bio: "Building digital cathedrals from raw logic. Alex oversees the technical vision, ensuring every line of code serves a higher purpose of scalability and resilience.",
        imageColor: "bg-slate-200",
        accent: "text-slate-900"
    },
    {
        id: 2,
        name: "ELARA VOSS",
        role: "HEAD OF STRATEGY",
        bio: "Bridging the gap between abstract innovation and market reality. Elara turns chaotic creativity into structured, shippable products that define markets.",
        imageColor: "bg-zinc-200",
        accent: "text-zinc-900"
    },
    {
        id: 3,
        name: "JULIAN KAIN",
        role: "CREATIVE DIRECTOR",
        bio: "Pixel perfectionist and interaction designer. Julian believes that software should feel organic, intuitive, and alive, pushing the boundaries of UI physics.",
        imageColor: "bg-stone-200",
        accent: "text-stone-900"
    }
];

export default function CoFoundersSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useGSAP(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".founder-panel");

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

        // Initial state: all hidden except first
        panels.forEach((panel, i) => {
            if (i !== 0) {
                gsap.set(panel, { opacity: 0 });
            }
        });

    }, { scope: sectionRef });

    // Animate panel changes with smooth transitions
    useGSAP(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".founder-panel");

        panels.forEach((panel, i) => {
            const content = panel.querySelector(".founder-content");
            const image = panel.querySelector(".founder-image");

            if (i === activeIndex) {
                // Animate in
                gsap.to(panel, { opacity: 1, duration: 0.1 });

                gsap.fromTo(content,
                    { x: -80, opacity: 0, scale: 0.95 },
                    { x: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
                );

                gsap.fromTo(image,
                    { x: 80, opacity: 0, scale: 0.9, filter: "blur(10px)" },
                    { x: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7, ease: "power2.out", delay: 0.1 }
                );
            } else {
                const direction = i < activeIndex ? -1 : 1;

                gsap.to(content, {
                    x: direction * -60,
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.4,
                    ease: "power2.in"
                });

                gsap.to(image, {
                    x: direction * 60,
                    opacity: 0,
                    scale: 0.9,
                    filter: "blur(5px)",
                    duration: 0.35,
                    ease: "power2.in"
                });

                gsap.to(panel, { opacity: 0, duration: 0.4, delay: 0.2 });
            }
        });
    }, { dependencies: [activeIndex], scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative bg-zinc-50 bg-tech-grid h-screen">

            {/* Header - Centered gradient text style */}
            <div className="bg-white border-b border-zinc-200">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-6 text-center">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-secondary opacity-20">
                        The Visionaries
                    </h2>
                </div>
            </div>

            {/* Content Area - Panels transition here */}
            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 h-[calc(100vh-120px)] flex items-center">
                {FOUNDERS.map((founder, i) => (
                    <div
                        key={founder.id}
                        className="founder-panel absolute inset-0 flex items-center"
                    >
                        <div className="relative w-full h-[70vh] bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-2xl flex flex-col lg:flex-row">

                            {/* Left: Text Content */}
                            <div className="founder-content flex-1 p-12 lg:p-24 flex flex-col justify-center relative z-20 bg-white/50 backdrop-blur-md">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">0{founder.id}</span>
                                    <div className="h-px bg-zinc-200 w-12" />
                                </div>

                                <h4 className="text-lg font-bold text-zinc-500 tracking-widest mb-2 uppercase">{founder.role}</h4>
                                <h2 className="text-4xl lg:text-6xl font-black text-zinc-900 tracking-tighter mb-8">{founder.name}</h2>
                                <p className="text-xl text-zinc-600 font-medium leading-relaxed max-w-xl">
                                    {founder.bio}
                                </p>
                            </div>

                            {/* Right: Image Content */}
                            <div className="founder-image flex-1 relative overflow-hidden bg-zinc-100">
                                <div className={`w-full h-full ${founder.imageColor} relative flex items-center justify-center`}>
                                    {/* Mockup Figure */}
                                    <div className="w-[60%] h-[70%] bg-zinc-300 rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                    <span className="text-[12rem] font-black text-black/5 select-none">{founder.name[0]}</span>

                                    {/* Abstract Portrait Placeholder */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 to-transparent" />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
