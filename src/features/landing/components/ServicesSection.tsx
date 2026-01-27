"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        id: "01",
        title: "Product Design",
        desc: "We craft high-end technical blueprints and prototypes that bridge the gap between concept and reality.",
        image: "/assets/services/service_design.png",
        color: "from-blue-500/20 to-cyan-500/20",
        tags: ["UI/UX", "PROTOTYPING", "BLUEPRINTS"]
    },
    {
        id: "02",
        title: "AI & Intelligence",
        desc: "Integrating sophisticated neural networks and AI cores to automate complexity and drive efficiency.",
        image: "/assets/services/service_ai.png",
        color: "from-pink-500/20 to-purple-500/20",
        tags: ["NEURAL CORES", "AUTOMATION", "DATA"]
    },
    {
        id: "03",
        title: "Scalable Systems",
        desc: "Robust cloud infrastructure designed for global reach, performance, and future-proof resilience.",
        image: "/assets/services/service_cloud.png",
        color: "from-purple-500/20 to-indigo-500/20",
        tags: ["CLOUD", "DEVOPS", "SCALING"]
    },
    {
        id: "04",
        title: "Premium Interfaces",
        desc: "Pixel-perfect web applications built with modern stacks for the most demanding digital ecosystems.",
        image: "/assets/services/service_interface.png",
        color: "from-cyan-500/20 to-blue-500/20",
        tags: ["NEXT.JS", "REACTIVE UI", "PERFORMANCE"]
    }
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".service-card");

        // Horizontal Scroll Animation
        gsap.to(cards, {
            xPercent: -100 * (cards.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (cards.length - 1),
                start: "top top",
                end: () => `+=${containerRef.current?.offsetWidth}`,
            }
        });

        // Individual Card Floating / Reveal
        cards.forEach((card: any) => {
            gsap.fromTo(card.querySelector(".card-inner"),
                { y: 50, opacity: 0, rotate: 2 },
                {
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: gsap.to(cards, { xPercent: -100 * (cards.length - 1) }), // Reference for horizontal trigger
                        start: "left center+=100",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative h-screen bg-background overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid-soft opacity-[0.2]" />
            <div className="absolute inset-0 noise-overlay opacity-[0.05]" />

            <div className="relative h-full flex flex-col justify-center">
                {/* Title Layer */}
                <div className="absolute top-20 left-12 lg:left-24 z-20">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-secondary opacity-20">
                        Our Services
                    </h2>
                </div>

                <div ref={containerRef} className="flex px-12 lg:px-24 h-[60vh]">
                    <div ref={cardsRef} className="flex gap-12 lg:gap-24 items-center">
                        {SERVICES.map((service, i) => (
                            <div
                                key={service.id}
                                className="service-card flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw]"
                            >
                                <div className="card-inner group relative aspect-video rounded-[3rem] p-1 glass-surface glow-border overflow-hidden">
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                    <div className="relative h-full w-full rounded-[2.8rem] bg-white/40 backdrop-blur-xl overflow-hidden flex flex-col lg:flex-row border border-white/20">
                                        {/* Image Side */}
                                        <div className="w-full lg:w-1/2 h-48 lg:h-auto relative overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden" />
                                        </div>

                                        {/* Content Side */}
                                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-mono text-sm font-bold text-accent">{service.id}</span>
                                                    <div className="h-px w-8 bg-accent/30" />
                                                </div>
                                                <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-text-primary">
                                                    {service.title}
                                                </h3>
                                                <p className="text-text-muted font-medium leading-relaxed">
                                                    {service.desc}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-6">
                                                {service.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 font-mono text-[9px] font-bold text-secondary uppercase tracking-widest">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scanning Line Utility */}
                                    <div className="absolute inset-0 scanline opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}

                        {/* Final Empty Spacer for horizontal scroll feel */}
                        <div className="w-[10vw] flex-shrink-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
