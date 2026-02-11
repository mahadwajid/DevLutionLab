"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Reveal animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center+=20%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(".contact-reveal",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative py-32 bg-zinc-50 bg-tech-grid overflow-hidden" id="contact">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-blue-50/50 opacity-50" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">

                    {/* LEFT: TEXT INFO */}
                    <div className="flex-1 space-y-12">
                        <div className="contact-reveal space-y-6">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">Start a Project</h2>
                            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-slate-900">
                                READY TO<br />EVOLVE?
                            </h3>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                                Let's build something that defines your industry. Reach out to discuss your next breakthrough.
                            </p>
                        </div>

                        <div className="contact-reveal space-y-8">
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Us</h4>
                                <a href="mailto:devlutionlab@gmail.com" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">devlutionlab@gmail.com</a>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Visit Us</h4>
                                <p className="text-xl text-slate-600">
                                    E-11/2 Markaz<br />
                                    Islamabad, Pakistan
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* RIGHT: FORM */}
                    <div className="flex-1">
                        <form
                            action="https://formspree.io/f/xeelezlr"
                            method="POST"
                            className="contact-reveal space-y-8 bg-zinc-50 p-8 md:p-12 rounded-[2rem] border border-zinc-100 shadow-xl shadow-zinc-200/50"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 py-4 text-lg font-medium text-slate-900 focus:border-blue-600 focus:outline-none transition-colors placeholder:text-zinc-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 py-4 text-lg font-medium text-slate-900 focus:border-blue-600 focus:outline-none transition-colors placeholder:text-zinc-300"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    className="w-full bg-transparent border-b border-zinc-200 py-4 text-lg font-medium text-slate-900 focus:border-blue-600 focus:outline-none transition-colors placeholder:text-zinc-300"
                                    placeholder="Acme Corp"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    className="w-full bg-transparent border-b border-zinc-200 py-4 text-lg font-medium text-slate-900 focus:border-blue-600 focus:outline-none transition-colors placeholder:text-zinc-300 resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            {/* Optional Formspree subject */}
                            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="group w-full bg-slate-900 text-white py-6 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}
