"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
    {
        id: 1,
        name: "SARAH JENKINS",
        role: "CTO, FINTECH GLOBAL",
        quote: "DevLution Lab didn't just build our platform; they re-engineered our entire approach to high-frequency data handling. The speed improvement is simply impossible to ignore.",
        company: "FINTECH"
    },
    {
        id: 2,
        name: "MICHAEL CHEN",
        role: "FOUNDER, AETHER",
        quote: "We needed a partner who understood luxury aesthetics as deeply as they understood serverless architecture. They delivered a masterpiece that feels alive.",
        company: "AETHER"
    },
    {
        id: 3,
        name: "ELENA ROSSI",
        role: "VP PRODUCT, LUMINA",
        quote: "Healthcare software is usually clunky and ugly. They proved it can be beautiful, secure, and incredibly fast. Patients actually love using our app now.",
        company: "LUMINA"
    },
    {
        id: 4,
        name: "DAVID OKONJO",
        role: "CEO, ORBITAL",
        quote: "The level of engineering rigor they apply is rare. It's not just about code that works; it's about code that scales effortlessly as we grow 10x year over year.",
        company: "ORBITAL"
    },
    {
        id: 5,
        name: "JESSICA LEE",
        role: "DIRECTOR, VELOCITY",
        quote: "Professional, transparent, and incredibly talented. They assimilated into our team structure immediately and drove the project to launch ahead of schedule.",
        company: "VELOCITY"
    }
];

export default function ReviewsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const track = trackRef.current;
        if (!track) return;

        // Calculate how far to scroll (total width minus viewport width)
        const totalWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        // Create scroll-triggered horizontal animation
        gsap.to(track, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="reviews" className="relative bg-white bg-tech-grid overflow-hidden">

            {/* Header - Centered gradient text style */}
            <div className="bg-white border-b border-zinc-200">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-20 pb-6 text-center">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-secondary opacity-20">
                        Testimonials
                    </h2>
                </div>
            </div>

            {/* Reviews Track - Horizontal scroll on vertical scroll */}
            <div className="relative h-[calc(100vh-140px)] flex items-center">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Track */}
                <div ref={trackRef} className="flex gap-8 pl-12 lg:pl-24 pr-[50vw]">
                    {REVIEWS.map((review) => (
                        <div
                            key={review.id}
                            className="w-[350px] md:w-[450px] bg-white p-10 rounded-2xl shadow-xl shadow-zinc-200/50 flex flex-col justify-between shrink-0 group hover:-translate-y-2 transition-transform duration-300 border border-zinc-100"
                        >
                            <div className="space-y-6">
                                <div className="text-blue-600 opacity-30">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                    </svg>
                                </div>
                                <p className="text-lg font-medium text-zinc-600 leading-relaxed">
                                    "{review.quote}"
                                </p>
                            </div>

                            <div className="pt-8 border-t border-zinc-100 mt-auto">
                                <h4 className="font-bold text-zinc-900 tracking-tight">{review.name}</h4>
                                <span className="text-xs font-bold text-zinc-400 tracking-widest uppercase">{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
