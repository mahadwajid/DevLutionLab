import React from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FOUNDERS = [
    {
        id: 1,
        name: 'Abdul Aziz',
        role: 'Co-Founder & Operations Lead',
        bio: 'Ensures smooth execution, delivery, and operational excellence across all projects.',
        image: '/assets/team/AI-AbdulAziz.png',
        linkedin: 'https://www.linkedin.com/in/abdulaziz-dev/',
        instagram: '#',
    },
    {
        id: 2,
        name: 'Mahad Wajid',
        role: 'Co-Founder & Tech Lead',
        bio: 'Bridging business and technology to build scalable and impactful solutions.',
        image: '/assets/team/AI-Mahad-1.png',
        linkedin: 'https://www.linkedin.com/in/mahadwajid/',
        instagram: '#',
    },
    {
        id: 3,
        name: 'Saud Khan',
        role: 'Co-Founder & Strategy Lead',
        bio: 'Architecting systems and leading innovation for future-ready products.',
        image: '/assets/team/Saud-AI.PNG',
        linkedin: 'https://www.linkedin.com/in/saud-khan-dev/',
        instagram: '#',
    },
     {
        id: 4,
        name: 'Bilal Khattak',
        role: 'Business Development Lead',
        bio: 'Driving growth through strategic partnerships and client acquisition.',
        image: '/assets/team/Bilal.png',
        linkedin: 'https://www.linkedin.com/in/hazrat-bilal7/',
        instagram: '#',
    },
];

export default function CoFoundersSection() {
    return (
        <section className="py-16 bg-white ">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="text-xs font-bold text-secondary uppercase tracking-[0.3em]">
                        Leadership
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black text-zinc-900">
                        Meet Our Founders
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-16 bg-secondary rounded-full" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FOUNDERS.map((founder, i) => (
                        <div
                            key={founder.id}
                            data-aos="fade-up"
                            data-aos-delay={i * 120}
                            className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative w-full h-82 overflow-hidden">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                                    <a
                                        href={founder.linkedin}
                                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-800 hover:bg-secondary hover:text-white transition"
                                    >
                                        <FaLinkedinIn size={16} />
                                    </a>
                                    <a
                                        href={founder.instagram}
                                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-800 hover:bg-secondary hover:text-white transition"
                                    >
                                        <FaInstagram size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-zinc-900">
                                    {founder.name}
                                </h3>
                                <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
                                    {founder.role}
                                </p>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    {founder.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}