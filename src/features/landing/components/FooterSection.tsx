"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const accentDotRef = useRef<HTMLDivElement>(null);
    const decorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const accentDot = accentDotRef.current;
        const decor = decorRef.current;

        if (!section || !text) return;

        // Main text: slides up from below to centered
        // Uses transform only, no opacity or scale - pure position-based reveal
        gsap.fromTo(text,
            { y: "20vh" },
            {
                y: "0",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            }
        );

        // Accent dot: slightly different scroll speed for micro-parallax
        if (accentDot) {
            gsap.fromTo(accentDot,
                { y: "20vh" },
                {
                    y: "-15vh",
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: true
                    }
                }
            );
        }

        // Decorative element: moves at different rate
        if (decor) {
            gsap.fromTo(decor,
                { y: "25vh" },
                {
                    y: "-20vh",
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: true
                    }
                }
            );
        }

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative h-[70vh] bg-zinc-50 bg-tech-grid overflow-hidden"
        >
            {/* Subtle noise overlay - matching other sections */}
            <div className="absolute inset-0 noise-overlay opacity-[0.03]" />

            {/* Gradient fade from previous section */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-zinc-50 to-transparent pointer-events-none z-10" />

            {/* Main typography container - overflow hidden creates the reveal */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

                {/* The main word - positioned to slide through */}
                <div
                    ref={textRef}
                    className="relative select-none whitespace-nowrap"
                >
                    {/* Full DevLution text with gradient */}
                    <h2 className="text-[22vw] md:text-[18vw] lg:text-[16vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-secondary opacity-20 leading-none">
                        DevLution
                    </h2>
                </div>

                {/* Accent dot - micro-parallax element */}
                <div
                    ref={accentDotRef}
                    className="absolute right-[18%] top-[45%] w-3 h-3 rounded-full bg-accent"
                />

                {/* Decorative glyph - different parallax layer */}
                <div
                    ref={decorRef}
                    className="absolute left-[12%] top-[55%] text-4xl font-bold text-secondary/20"
                >
                    ◆
                </div>

                {/* Static subtle decorations */}
                <div className="absolute right-[25%] bottom-[35%] w-2 h-2 rounded-full bg-zinc-300" />
                <div className="absolute left-[30%] top-[40%] w-1 h-1 rounded-full bg-zinc-400" />
            </div>

            {/* Bottom info bar - matching project styling */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-200 bg-white/50 backdrop-blur-sm">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        {/* Left: Copyright */}
                        <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                            © {new Date().getFullYear()} DevLution LAB. All Rights Reserved.
                        </span>

                        {/* Center: Tagline */}
                        <div className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
                            Building Digital Futures
                        </div>

                        {/* Right: Links */}
                        <div className="flex items-center gap-8">
                            <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors tracking-widest uppercase">
                                Privacy
                            </a>
                            <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors tracking-widest uppercase">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
