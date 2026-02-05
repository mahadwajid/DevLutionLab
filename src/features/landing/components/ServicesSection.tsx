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
        title: "AI Solutions",
        desc: "We design and deploy intelligent AI systems that automate workflows, enhance decision-making, and unlock data-driven growth.",
        image: "/assets/services/service_ai.png",
        color: "from-pink-500/20 to-purple-500/20",
        tags: ["MACHINE LEARNING", "AUTOMATION", "DATA INTELLIGENCE"]
    },
    {
        id: "02",
        title: "Web Development",
        desc: "High-performance, secure web applications engineered with modern technologies for scalability and long-term reliability.",
        image: "/assets/services/service_web.png",
        color: "from-cyan-500/20 to-blue-500/20",
        tags: ["NEXT.JS", "API", "SECURE APPS"]
    },
    {
        id: "03",
        title: "Mobile Applications",
        desc: "User-centric mobile apps built for iOS and Android with seamless performance and scalable backend integration.",
        image: "/assets/services/service_mob.jpeg",
        color: "from-blue-500/20 to-indigo-500/20",
        tags: ["IOS", "ANDROID", "CROSS-PLATFORM"]
    },
    {
        id: "04",
        title: "SaaS Platforms",
        desc: "End-to-end SaaS product development from architecture to deployment, optimized for scalability and business growth.",
        image: "/assets/services/service_design.png",
        color: "from-purple-500/20 to-fuchsia-500/20",
        tags: ["MULTI-TENANT", "SUBSCRIPTIONS", "SCALABLE"]
    },
    {
        id: "05",
        title: "Process Automation",
        desc: "Streamlining business operations through intelligent automation, system integrations, and workflow optimization.",
        image: "/assets/services/service_interface.png",
        color: "from-green-500/20 to-emerald-500/20",
        tags: ["WORKFLOWS", "INTEGRATION", "EFFICIENCY"]
    },
    {
        id: "06",
        title: "Cloud & DevOps",
        desc: "Secure, scalable cloud infrastructure and DevOps pipelines ensuring high availability, performance, and continuous delivery.",
        image: "/assets/services/service_cloud.png",
        color: "from-indigo-500/20 to-sky-500/20",
        tags: ["AWS", "CI/CD", "INFRASTRUCTURE"]
    }
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!cardsRef.current || !sectionRef.current) return;

        const cards = gsap.utils.toArray(".service-card");
        const totalWidth = cardsRef.current.scrollWidth - window.innerWidth;

        // Horizontal Scroll Animation - animate the container
        gsap.to(cardsRef.current, {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => `+=${totalWidth}`,
                invalidateOnRefresh: true,
            }
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative h-screen bg-zinc-50 bg-tech-grid overflow-hidden"
        >
            <div className="absolute inset-0 noise-overlay opacity-[0.05]" />

            <div className="relative h-full flex flex-col">
                {/* Header - Centered gradient text style */}
                <div className="bg-white/80 backdrop-blur-sm border-b border-zinc-200">
                    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-20 pb-6 text-center">
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-secondary opacity-20">
                            Our Services
                        </h2>
                    </div>
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
