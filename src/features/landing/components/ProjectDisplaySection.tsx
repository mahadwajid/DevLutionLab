import React from 'react';
import Image from 'next/image';

const PROJECTS = [
    {
        id: 1,
        title: 'MEDSYNC APPOINTMENT PLATFORM',
        category: 'HEALTHCARE MANAGEMENT SYSTEM',
        description: 'A full-stack doctor appointment and clinic workflow platform enabling real-time scheduling, patient record handling, and secure authentication.',
        tags: ['NEXT.JS', 'NODE.JS', 'MONGODB'],
        accent: 'bg-blue-500',
        link: 'https://doctor-appointment-system-beryl-six.vercel.app/login',
        image: '/images/DA1.png',
    },
    {
        id: 2,
        title: 'RIYADH DIGITAL AGENCY PLATFORM',
        category: 'BUSINESS WEBSITE SYSTEM',
        description: 'A modern React agency website built for a Saudi client, optimized for performance, branding, and responsive UX.',
        tags: ['REACT', 'TAILWIND', 'VITE'],
        accent: 'bg-purple-500',
        link: 'https://react-agency-five.vercel.app/',
        image: '/images/DA2.png',
    },
    {
        id: 3,
        title: 'MYTAILOR DIGITAL COMMERCE EXPERIENCE',
        category: 'CUSTOM TAILORING PLATFORM',
        description: 'A business website developed for CodeCrush Technology Pakistan showcasing tailoring services and digital presence.',
        tags: ['NEXT.JS', 'UI/UX'],
        accent: 'bg-emerald-500',
        link: 'https://www.mytailor.app/',
        image: '/images/DA3.png',
    },
    {
        id: 4,
        title: 'SENTINEL NETWORK DEFENSE SYSTEM',
        category: 'CYBERSECURITY / IDS',
        description: 'A custom intrusion detection system designed to monitor traffic, detect anomalies, and improve infrastructure security.',
        tags: ['PYTHON', 'SECURITY'],
        accent: 'bg-orange-500',
        image: '/images/DA4.png',
    },
];

export default function ProjectDisplaySection() {
    return (
        <section id="projects" className="py-12 bg-white bg-tech-grid">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Portfolio</span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-text-primary">
                        Our Projects
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                </div>

                {/* Projects List */}
                <div className="flex flex-col gap-8">
                    {PROJECTS.map((project, i) => (
                        <div
                            key={project.id}
                            className={`group flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 bg-zinc-50 rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 lg:min-h-[400px]`}
                        >
                            {/* Image */}
                            <div className="relative w-full lg:w-1/2 h-72 lg:h-auto lg:self-stretch overflow-hidden bg-zinc-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                <div className={`w-10 h-1 ${project.accent} mb-5 rounded-full`} />
                                <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed mb-6 max-w-lg">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-fit px-6 py-3 bg-zinc-900 text-white font-bold tracking-widest uppercase text-xs rounded-full hover:bg-secondary transition-colors duration-200"
                                    >
                                        View Project →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
