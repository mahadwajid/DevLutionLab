"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        id: 1,
        title: "NEBULA DASHBOARD",
        category: "FINTECH INTERFACE",
        description: "A high-frequency trading platform reimagined for clarity. We stripped away the noise to focus on the signal, delivering real-time data visualization with zero latency.",
        tags: ["REACT", "D3.JS", "WEBSOCKETS"],
        bgClass: "bg-slate-50",
        textClass: "text-slate-900",
        accent: "bg-blue-500"
    },
    {
        id: 2,
        title: "AETHER COMMERCE",
        category: "ECOMMERCE ECOSYSTEM",
        description: "Orchestrating a seamless shopping experience. From intelligent search to predictive checkout, every interaction is engineered for conversion.",
        tags: ["NEXT.JS", "SHOPIFY", "STRIPE"],
        bgClass: "bg-zinc-50",
        textClass: "text-zinc-900",
        accent: "bg-purple-500"
    },
    {
        id: 3,
        title: "CHRONOS SYSTEM",
        category: "ENTERPRISE SAAS",
        description: "Time management for the post-industrial age. Automated scheduling, resource allocation, and predictive analytics in one unified workspace.",
        tags: ["TYPESCRIPT", "NODE.JS", "POSTGRES"],
        bgClass: "bg-stone-50",
        textClass: "text-stone-900",
        accent: "bg-emerald-500"
    },
    {
        id: 4,
        title: "LUMINA HEALTH",
        category: "MEDTECH SOLUTION",
        description: "HIPAA-compliant telemedicine platform connecting patients with specialists. Secure, intuitive, and accessible healthcare for everyone.",
        tags: ["WEBARTC", "AWS", "UI/UX"],
        bgClass: "bg-orange-50",
        textClass: "text-orange-900",
        accent: "bg-orange-500"
    }
];

export default function ProjectDisplaySection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".project-card");

        cards.forEach((card, i) => {
            // 1. Scale Down Animation for the card as it gets covered
            // The animation runs while the *next* card is entering
            ScrollTrigger.create({
                trigger: card,
                start: "top top", // When card hits top of viewport
                end: "bottom top",
                pin: true, // Pin the card
                pinSpacing: false, // Allow next card to scroll over it
                scrub: true, // Smooth scrub
                id: `card-${i}`,
                onUpdate: (self) => {
                    // Optional: manually handle scale if GSAP tween isn't enough
                },
                animation: gsap.to(card, {
                    scale: 0.9, // Scale down slightly to create "stack" depth
                    opacity: 0.8, // Fade out slightly
                    filter: "blur(5px)", // Blur slightly
                    ease: "none"
                })
            });
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative bg-white" id="projects">

            {/* Header outside the stack flow */}
            <div className="py-24 px-6 lg:px-24 text-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">Selected Works</h2>
                <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight">DIGITAL ARCHIVES</h3>
            </div>

            <div className="relative pb-24">
                {PROJECTS.map((project, i) => (
                    <div
                        key={project.id}
                        className={`project-card sticky top-0 h-screen w-full flex items-center justify-center p-4 lg:p-12 overflow-hidden`}
                        style={{ zIndex: i + 1 }} // Ensure correct stacking order
                    >
                        {/* Visual Card Container */}
                        <div className={`relative w-full max-w-[1400px] h-[85vh] ${project.bgClass} rounded-[2rem] border border-black/5 shadow-2xl flex flex-col lg:flex-row overflow-hidden transform transition-transform`}>

                            {/* Left: Content */}
                            <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative z-10">
                                <div className={`w-12 h-1 ${project.accent} mb-8`} />
                                <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4">{project.category}</span>
                                <h2 className={`text-4xl md:text-6xl font-black ${project.textClass} tracking-tighter mb-6`}>{project.title}</h2>
                                <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-lg mb-8">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/50 border border-black/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="mt-12 w-fit px-8 py-4 bg-zinc-900 text-white font-bold tracking-widest uppercase text-xs rounded-full hover:bg-zinc-800 transition-colors">
                                    View Case Study
                                </button>
                            </div>

                            {/* Right: Abstract Visual */}
                            <div className="flex-1 relative bg-gradient-to-br from-black/5 to-transparent flex items-center justify-center overflow-hidden">
                                {/* Decorative Circles */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full border-[100px] border-white/20 opacity-50`} />
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-gradient-to-tr from-white/40 to-transparent backdrop-blur-3xl`} />

                                {/* Big Number */}
                                <span className={`text-[12rem] lg:text-[20rem] font-black ${project.textClass} opacity-10 select-none`}>
                                    0{i + 1}
                                </span>

                                {/* Floating Mockup Placeholder */}
                                <div className="absolute inset-x-12 lg:inset-x-24 -bottom-24 lg:-bottom-48 h-[80%] bg-white rounded-t-3xl shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5 transform rotate-3 flex flex-col items-center pt-8">
                                    <div className="w-16 h-1 bg-zinc-200 rounded-full" />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
