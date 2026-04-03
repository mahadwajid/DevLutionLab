import React from 'react';
import Image from 'next/image';

const SERVICES = [
    {
        id: '01',
        title: 'AI Solutions',
        desc: 'We design and deploy intelligent AI systems that automate workflows, enhance decision-making, and unlock data-driven growth.',
        image: '/assets/services/AI.png',
        tags: ['MACHINE LEARNING', 'AUTOMATION', 'DATA INTELLIGENCE'],
    },
    {
        id: '02',
        title: 'Web Development',
        desc: 'High-performance, secure web applications engineered with modern technologies for scalability and long-term reliability.',
        image: '/assets/services/Web.png',
        tags: ['NEXT.JS', 'API', 'SECURE APPS'],
    },
    {
        id: '03',
        title: 'Mobile Applications',
        desc: 'User-centric mobile apps built for iOS and Android with seamless performance and scalable backend integration.',
        image: '/assets/services/Mobile.png',
        tags: ['IOS', 'ANDROID', 'CROSS-PLATFORM'],
    },
    {
        id: '04',
        title: 'SaaS Platforms',
        desc: 'End-to-end SaaS product development from architecture to deployment, optimized for scalability and business growth.',
        image: '/assets/services/SaaS.png',
        tags: ['MULTI-TENANT', 'SUBSCRIPTIONS', 'SCALABLE'],
    },
    {
        id: '05',
        title: 'Process Automation',
        desc: 'Streamlining business operations through intelligent automation, system integrations, and workflow optimization.',
        image: '/assets/services/BS automation.png',
        tags: ['WORKFLOWS', 'INTEGRATION', 'EFFICIENCY'],
    },
    {
        id: '06',
        title: 'Cloud & DevOps',
        desc: 'Secure, scalable cloud infrastructure and DevOps pipelines ensuring high availability, performance, and continuous delivery.',
        image: '/assets/services/Cloud Infrastructure.png',
        tags: ['AWS', 'CI/CD', 'INFRASTRUCTURE'],
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-12 bg-zinc-50 bg-tech-grid">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-8" data-aos="fade-up">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">What We Offer</span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-text-primary">
                        Our Services
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                </div>

                {/* 3×2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, i) => (
                        <div
                            key={service.id}
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                            className="group bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg hover:border-secondary/20 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="font-mono text-xs font-bold text-accent">{service.id}</span>
                                    <div className="h-px flex-1 bg-border" />
                                </div>
                                <h3 className="text-xl font-black tracking-tight text-text-primary mb-2">{service.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed mb-4">{service.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 rounded-full bg-secondary/5 border border-secondary/10 font-mono text-[9px] font-bold text-secondary uppercase tracking-widest"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
