import React from 'react';

const FOUNDERS = [
    {
        id: 1,
        name: 'Abdul Aziz',
        role: 'Co-Founder & Operations Lead',
        bio: 'Overseeing execution, delivery, and process optimization. Abdul ensures projects move seamlessly from concept to deployment while maintaining quality and reliability.',
        image: '/assets/team/AI-AbdulAziz.png',
        initials: 'AA',
    },
    {
        id: 2,
        name: 'Mahad Wajid',
        role: 'Co-Founder & Tech Lead',
        bio: 'Shaping business strategy and client partnerships. Mahad bridges technology and business goals, translating vision into scalable, market-ready solutions.',
        image: '/assets/team/AI-Mahad.png',
        initials: 'MW',
    },
    {
        id: 3,
        name: 'Saud Khan',
        role: 'Co-Founder & Strategy Lead',
        bio: 'Driving the technical vision of DevLutionLab. Saud architects scalable systems, leads engineering excellence, and ensures every solution is secure, efficient, and future-ready.',
        image: '/assets/team/saud.jpeg',
        initials: 'SK',
    },
    // {
    //     id: 4,
    //     name: 'Bilal Khattak',
    //     role: 'Business Development Lead',
    //     bio: 'Leading growth strategy and client partnerships at DevLutionLab. Bilal focuses on building strong relationships, identifying new opportunities, and expanding the company\'s global presence.',
    //     image: '/assets/team/Bilal.png',
    //     initials: 'BK',
    // },
];

export default function CoFoundersSection() {
    return (
        <section className="py-12 bg-zinc-50 bg-tech-grid">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">The Team</span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-text-primary">
                        The Visionaries
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                </div>

                {/* 2×2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FOUNDERS.map((founder) => (
                        <div
                            key={founder.id}
                            className="group flex items-center gap-6 p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-200"
                        >
                            {/* Photo */}
                            <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-zinc-100 shadow-sm">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-text-muted tracking-widest uppercase">0{founder.id}</span>
                                </div>
                                <h3 className="text-xl font-black text-zinc-900 tracking-tight">{founder.name}</h3>
                                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">{founder.role}</p>
                                <p className="text-sm text-zinc-500 leading-relaxed">{founder.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
