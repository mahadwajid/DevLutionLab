import React from 'react';

const REVIEWS = [
    {
        id: 1,
        name: 'Zaheer Hosany',
        role: 'COO, Palmis Global',
        company: 'Palmis Global',
        quote: 'DevLutionLab played a critical role in modernizing our digital infrastructure. Their technical depth, reliability, and ability to understand business needs made them a true long-term partner.',
    },
    {
        id: 2,
        name: 'Wisal Khan',
        role: 'CEO, Firnas.Tech',
        company: 'Firnas.Tech',
        quote: 'DevLutionLab delivered exactly what we needed — a scalable, well-architected solution built with precision. Their team understands both technology and business execution.',
    },
    {
        id: 3,
        name: 'Victor',
        role: 'Founder, Dr Schavit Store (US)',
        company: 'Dr Schavit E-commerce',
        quote: 'Working with DevLutionLab felt like extending our internal engineering team. Clean architecture, clear communication, and on-time delivery every single time.',
    },
];

export default function ReviewsSection() {
    return (
        <section id="reviews" className="py-12 bg-white ">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-8" data-aos="fade-up">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Client Stories</span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-text-primary">
                        Testimonials
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {REVIEWS.map((review, i) => (
                        <div
                            key={review.id}
                            data-aos="fade-up"
                            data-aos-delay={i * 120}
                            className="group flex flex-col bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-200"
                        >
                            {/* Quote icon */}
                            <div className="text-secondary/20 mb-4">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-3c0-1.105.896-2 2-2h3c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v2c0 .552-.448 1-1 1h-1V5h10v10c0 3.314-2.686 6-6 6h-2zm-11 0v-3c0-1.105.896-2 2-2h3c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1H4c-.552 0-1 .448-1 1v2c0 .552-.448 1-1 1H1V5h10v10c0 3.314-2.686 6-6 6H3z" />
                                </svg>
                            </div>

                            <p className="text-zinc-600 leading-relaxed text-sm flex-1 mb-6">
                                &quot;{review.quote}&quot;
                            </p>

                            <div className="pt-6 border-t border-zinc-100">
                                <div className="font-bold text-zinc-900">{review.name}</div>
                                <div className="text-xs font-bold text-text-muted uppercase tracking-widest mt-0.5">{review.role}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
