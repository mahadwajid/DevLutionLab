"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const FOUNDERS = [
    {
        id: 1,
        name: "ALEXANDER VANE",
        role: "CHIEF ARCHITECT",
        bio: "Building digital cathedrals from raw logic. Alex oversees the technical vision, ensuring every line of code serves a higher purpose of scalability and resilience.",
        imageColor: "bg-slate-200", // Placeholder for actual image
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
    const [active, setActive] = useState(0);
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % FOUNDERS.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + FOUNDERS.length) % FOUNDERS.length);
    };

    useGSAP(() => {
        // Animation when 'active' changes
        const tl = gsap.timeline();

        // Animate Text Out
        tl.to(".founder-text-content", { y: -20, opacity: 0, duration: 0.3, ease: "power2.in" })
            .to(".founder-image-content", { opacity: 0.5, scale: 0.95, duration: 0.3, ease: "power2.in" }, "<")

            // Update State visually (React handles layout, we just crossfade the content mostly)
            .call(() => {
                // This is purely visual sync, React state update already happened or drives this
            })

            // Animate In NEW content
            .to(".founder-text-content", { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
            .to(".founder-image-content", { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }, "<");

    }, { scope: containerRef, dependencies: [active] });

    const currentFounder = FOUNDERS[active];

    return (
        <section ref={containerRef} className="relative bg-white py-32 overflow-hidden" id="founders">

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Title */}
                <div className="mb-24 text-center">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">Leadership</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">THE VISIONARIES</h3>
                </div>

                {/* Slider Container */}
                <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] bg-zinc-50 rounded-[2rem] overflow-hidden border border-black/5 shadow-2xl flex flex-col lg:flex-row">

                    {/* Left: Text Content */}
                    <div className="flex-1 p-12 lg:p-24 flex flex-col justify-center relative z-20 bg-white/50 backdrop-blur-md">
                        <div className="founder-text-content">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">0{currentFounder.id} — {active + 1}/3</span>
                                <div className="h-px bg-zinc-200 w-12" />
                            </div>

                            <h4 className="text-lg font-bold text-zinc-500 tracking-widest mb-2 uppercase">{currentFounder.role}</h4>
                            <h2 className="text-5xl lg:text-7xl font-black text-zinc-900 tracking-tighter mb-8">{currentFounder.name}</h2>
                            <p className="text-xl text-zinc-600 font-medium leading-relaxed max-w-xl">
                                {currentFounder.bio}
                            </p>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center gap-6 mt-12">
                            <button onClick={handlePrev} className="group p-4 rounded-full border border-zinc-200 hover:border-zinc-900 transition-colors">
                                <span className="block w-4 h-4 border-l-2 border-b-2 border-zinc-900 rotate-45 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button onClick={handleNext} className="group p-4 rounded-full border border-zinc-200 hover:border-zinc-900 transition-colors">
                                <span className="block w-4 h-4 border-r-2 border-t-2 border-zinc-900 rotate-45 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Image Content */}
                    <div className="flex-1 relative overflow-hidden bg-zinc-100">
                        <div className={`founder-image-content w-full h-full ${currentFounder.imageColor} relative flex items-center justify-center`}>
                            {/* Mockup Figure */}
                            <div className="w-[60%] h-[70%] bg-zinc-300 rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                            <span className="text-[12rem] font-black text-black/5 select-none">{currentFounder.name[0]}</span>

                            {/* Abstract Portrait Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 to-transparent" />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}
