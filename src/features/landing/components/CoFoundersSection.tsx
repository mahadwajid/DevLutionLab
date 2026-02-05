"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FOUNDERS = [
    {
        id: 1,
        name: "ABDUL AZIZ",
        role: "CO-FOUNDER & OPERATIONS LEAD",
        bio: "Overseeing execution, delivery, and process optimization. Abdul ensures projects move seamlessly from concept to deployment while maintaining quality and reliability.",
        image: "/assets/founders/abdul-aziz.jpg",
        accent: "text-zinc-900"
    },
    {
        id: 2,
        name: "MAHAD WAJID",
        role: "CO-FOUNDER & TECH LEAD",
        bio: "Shaping business strategy and client partnerships. Mahad bridges technology and business goals, translating vision into scalable, market-ready solutions.",
        image: "/assets/team/mahad.jpeg",
        accent: "text-stone-900"
    },
    {
        id: 3,
        name: "SAUD KHAN",
        role: "CO-FOUNDER & STRATEGY LEAD",
        bio: "Driving the technical vision of DevLutionLab. Saud architects scalable systems, leads engineering excellence, and ensures every solution is secure, efficient, and future-ready.",
        image: "/assets/team/saud.jpeg",
        accent: "text-slate-900"
    },
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
        <section ref={sectionRef} className="relative bg-zinc-50 bg-tech-grid h-screen z-10">

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
                        className="founder-panel absolute inset-0 flex items-center px-6 lg:px-12"
                    >
                        <div className="relative w-full h-[60vh] max-h-[600px] bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-2xl flex flex-col lg:flex-row">

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
                              <div className="founder-image flex-1 relative overflow-hidden bg-zinc-100">
    <img
        src={founder.image}
        alt={founder.name}
        className="w-full h-full object-cover object-center scale-[1.05]"
        draggable={false}
    />

    {/* Premium gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
</div>

                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
