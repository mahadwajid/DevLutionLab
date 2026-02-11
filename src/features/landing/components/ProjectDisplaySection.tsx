"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        id: 1,
        title: "MEDSYNC APPOINTMENT PLATFORM",
        category: "HEALTHCARE MANAGEMENT SYSTEM",
        description:
            "A full-stack doctor appointment and clinic workflow platform enabling real-time scheduling, patient record handling, and secure authentication.",
        tags: ["NEXT.JS", "NODE.JS", "MONGODB"],
        bgClass: "bg-slate-50",
        textClass: "text-slate-900",
        accent: "bg-blue-500",
        link: "https://doctor-appointment-system-beryl-six.vercel.app/login",
        image: "/images/DA1.png"
    },
    {
        id: 2,
        title: "RIYADH DIGITAL AGENCY PLATFORM",
        category: "BUSINESS WEBSITE SYSTEM",
        description:
            "A modern React agency website built for a Saudi client, optimized for performance, branding, and responsive UX.",
        tags: ["REACT", "TAILWIND", "VITE"],
        bgClass: "bg-zinc-50",
        textClass: "text-zinc-900",
        accent: "bg-purple-500",
        link: "https://react-agency-five.vercel.app/",
        image: "/images/DA2.png"
    },
    {
        id: 3,
        title: "MYTAILOR DIGITAL COMMERCE EXPERIENCE",
        category: "CUSTOM TAILORING PLATFORM",
        description:
            "A business website developed for CodeCrush Technology Pakistan showcasing tailoring services and digital presence.",
        tags: ["NEXT.JS", "UI/UX"],
        bgClass: "bg-stone-50",
        textClass: "text-stone-900",
        accent: "bg-emerald-500",
        link: "https://www.mytailor.app/",
        image: "/images/DA3.png"
    },
    {
        id: 4,
        title: "SENTINEL NETWORK DEFENSE SYSTEM",
        category: "CYBERSECURITY / IDS",
        description:
            "A custom intrusion detection system designed to monitor traffic, detect anomalies, and improve infrastructure security.",
        tags: ["PYTHON", "SECURITY"],
        bgClass: "bg-orange-50",
        textClass: "text-orange-900",
        accent: "bg-orange-500",
        image: "/images/DA4.png"
    }
];

export default function ProjectDisplaySection() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".project-card");

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                const cardContent = card.querySelector(".card-content");

                ScrollTrigger.create({
                    trigger: card,
                    start: "top 120px",
                    end: () => `+=${window.innerHeight * 0.8}`,
                    scrub: 0.5,
                    animation: gsap.timeline().to(cardContent, {
                        scale: 0.9,
                        y: -60,
                        opacity: 0,
                        filter: "blur(4px)",
                        ease: "power2.inOut"
                    })
                });
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="projects" className="relative bg-tech-grid">
            {/* Header */}
            <div className="sticky top-0 z-[100] bg-white/90 backdrop-blur-sm border-b border-zinc-200">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-20 pb-6 text-center">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-secondary opacity-20">
                        Our Projects
                    </h2>
                </div>
            </div>

            {/* Cards */}
            <div className="relative pb-[10vh]">
                {PROJECTS.map((project, i) => (
                    <div
                        key={project.id}
                        className="project-card sticky top-[120px] min-h-[80vh] w-full flex items-start justify-center px-4 lg:px-12 pt-8"
                        style={{ zIndex: i + 1 }}
                    >
                        <div className={`card-content relative w-full max-w-[1400px] h-[75vh] ${project.bgClass} rounded-[2rem] border border-black/5 shadow-2xl flex flex-col lg:flex-row overflow-hidden`}>

                            {/* Left */}
                            <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
                                <div className={`w-12 h-1 ${project.accent} mb-8`} />
                                <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4">
                                    {project.category}
                                </span>
                                <h2 className={`text-4xl md:text-6xl font-black ${project.textClass} tracking-tighter mb-6`}>
                                    {project.title}
                                </h2>
                                <p className="text-lg text-zinc-500 max-w-lg mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/50 border border-black/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="mt-12 w-fit px-8 py-4 bg-zinc-900 text-white font-bold tracking-widest uppercase text-xs rounded-full hover:bg-zinc-800 transition-colors"
                                    >
                                        View Project
                                    </a>
                                )}
                            </div>

                            {/* Right Image */}
                            <div className="flex-1 relative flex items-center justify-center p-10">
                                <div className="relative w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden border">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
