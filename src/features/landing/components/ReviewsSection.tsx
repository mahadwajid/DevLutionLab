"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
        quote: "The level of engineering rigor they apply is rare. It’s not just about code that works; it’s about code that scales effortlessly as we grow 10x year over year.",
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
    const containerRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Infinite Marquee Logic
        const duration = 20; // Time for one full cycle (adjust for speed)
        const content = marqueeRef.current;

        if (!content) return;

        // Clone content for seamless loop is handled by rendering it twice in JSX
        // We just need to animate x from 0 to -50% (assuming 2 copies)

        gsap.to(content, {
            xPercent: -50,
            repeat: -1,
            duration: duration,
            ease: "linear"
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative bg-zinc-50 py-32 overflow-hidden" id="reviews">

            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center mb-24">
                <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">Testimonials</h2>
                <h3 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">TRUSTED BY VISIONARIES</h3>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-64 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

                {/* Marquee Track */}
                <div ref={marqueeRef} className="flex gap-8 w-fit pl-8">
                    {/* Render items twice to create seamless loop opportunity */}
                    {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => ( // Tripled to ensure long enough track
                        <div
                            key={`${review.id}-${i}`}
                            className="aspect-[4/3] w-[300px] md:w-[450px] bg-white p-10 rounded-2xl shadow-xl shadow-zinc-200/50 flex flex-col justify-between shrink-0 group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="space-y-6">
                                <div className="text-zinc-900 opacity-20">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                    </svg>
                                </div>
                                <p className="text-lg font-medium text-zinc-600 leading-relaxed italic">
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
