import React from 'react';

const COMPANY_MODULES = [
    {
        id: '01',
        title: 'Strategic Vision',
        description: "We don't just write code — we craft a roadmap connecting your business goals with technology. Every feature we build drives measurable impact.",
        icon: (
            <svg className="w-6 h-6 text-secondary fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l7-7 4 4 7-8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 6h-4v4" />
            </svg>
        ),
    },
    {
        id: '02',
        title: 'High Performance',
        description: 'Fast, reliable, and scalable systems are at the heart of what we do. We optimize performance for users and business alike.',
        icon: (
            <svg className="w-6 h-6 text-secondary fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: '03',
        title: 'Attention to Detail',
        description: 'Every pixel, line of code, and interaction is crafted with care. Our focus on detail ensures a flawless experience across platforms.',
        icon: (
            <svg className="w-6 h-6 text-secondary fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: '04',
        title: 'Adaptive Intelligence',
        description: 'Our AI-driven systems learn from user behavior, anticipate needs, and optimize performance automatically, keeping your platform ahead of the curve.',
        icon: (
            <svg className="w-6 h-6 text-secondary fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" />
            </svg>
        ),
    },
    {
        id: '05',
        title: 'Robust Security',
        description: 'Security is non-negotiable. We design systems with multi-layered protection, data encryption, and proactive monitoring to keep your platform safe.',
        icon: (
            <svg className="w-6 h-6 text-secondary fill-none stroke-current" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-12 bg-white bg-tech-grid">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">What We Do</span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-text-primary">
                        Built on Solid Principles
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {COMPANY_MODULES.map((mod) => (
                        <div
                            key={mod.id}
                            className="group p-8 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-200"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                    {mod.icon}
                                </div>
                                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{mod.id}</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-3">{mod.title}</h3>
                            <p className="text-text-muted leading-relaxed text-sm">{mod.description}</p>
                        </div>
                    ))}

                    {/* Wide tagline card */}
                    <div className="md:col-span-2 lg:col-span-3 p-8 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Our Promise</p>
                            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                                We connect your vision with technology that delivers real results.
                            </h3>
                        </div>
                        <a
                            href="#contact"
                            className="flex-shrink-0 px-8 py-4 rounded-full bg-white text-primary font-bold text-sm hover:bg-accent hover:text-white transition-all duration-200 whitespace-nowrap"
                        >
                            Let's talk
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
