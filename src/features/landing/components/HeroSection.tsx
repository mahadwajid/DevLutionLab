import React from 'react';
import Link from 'next/link';

const TECH_BADGES = [
    { label: 'React / Next.js', color: '#61DAFB', bg: '#EFF9FE', icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <circle cx="12" cy="12" r="2" fill="#61DAFB" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
        </svg>
    )},
    { label: 'Node.js / Express', color: '#68A063', bg: '#F0FAF0', icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#68A063" stroke="#68A063" strokeWidth="0.5" />
            <path d="M12 12v5M12 12L7 9M12 12l5-3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    )},
    { label: 'Python / Django', color: '#3776AB', bg: '#EFF4FB', icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path d="M12 3c-2.5 0-4.5 1-4.5 3v3h4.5v.5H7c-1.5 0-2.5 1-2.5 2.5v3c0 1.5 1 2.5 2.5 2.5h2v-2.5c0-1.5 1.5-2.5 3-2.5h4.5c1.5 0 2.5-1 2.5-2.5V6c0-2-2-3-4.5-3h-2.5z" fill="#3776AB" />
            <path d="M12 21c2.5 0 4.5-1 4.5-3v-3H12v-.5h4.5c1.5 0 2.5-1 2.5-2.5v-3c0-1.5-1-2.5-2.5-2.5h-2v2.5c0 1.5-1.5 2.5-3 2.5H7c-1.5 0-2.5 1-2.5 2.5v3.5c0 2 2 3 4.5 3h2.5z" fill="#FFD43B" />
            <circle cx="9" cy="7" r="1" fill="#fff" />
            <circle cx="15" cy="17" r="1" fill="#fff" />
        </svg>
    )},
    { label: 'PostgreSQL / Redis', color: '#336791', bg: '#EEF4FA', icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path d="M12 3c-3 0-5.5 2-6 5-.3 2 .5 4 2 5.5.5.5 1 .8 1.5 1C10 16 10.5 18 11 20c.3 1 1 2 2 2s1.7-1 2-2c.5-2 1-4 1.5-5.5.5-.2 1-.5 1.5-1 1.5-1.5 2.3-3.5 2-5.5-.5-3-3-5-6-5z" fill="#336791" />
            <ellipse cx="12" cy="9" rx="3" ry="2" fill="#fff" opacity="0.3" />
        </svg>
    )},
    { label: 'Docker / K8s', color: '#2496ED', bg: '#EEF6FD', icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <rect x="6" y="10" width="2.5" height="2.5" fill="#2496ED" />
            <rect x="9" y="10" width="2.5" height="2.5" fill="#2496ED" />
            <rect x="12" y="10" width="2.5" height="2.5" fill="#2496ED" />
            <rect x="9" y="7" width="2.5" height="2.5" fill="#2496ED" />
            <rect x="12" y="7" width="2.5" height="2.5" fill="#2496ED" />
            <rect x="15" y="10" width="2.5" height="2.5" fill="#2496ED" />
            <path d="M20 11c-.5-1-1.5-1.5-2.5-1.5-.5 0-1 .2-1.5.5 0-2-1.5-3-3-3H4c-.5 2-.5 4 .5 6C6 15 8 16 10 16c1 0 2-.2 3-.6.8.4 1.7.6 2.5.6 2.5 0 4.5-1.5 4.5-4 0-.3 0-.7-.2-1z" stroke="#2496ED" strokeWidth="0.8" fill="none" />
        </svg>
    )},
    { label: 'Git / CI/CD', color: '#0F172A', bg: '#F1F5F9', icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#0F172A" />
        </svg>
    )},
];

const STATS = [
    { value: '15+', label: 'Projects Delivered' },
    { value: '10+', label: 'Happy Clients' },
    { value: '3+', label: 'Years Experience' },
];

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-background bg-tech-grid pt-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full pt-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <div className="flex flex-col space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 w-fit">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-[10px] font-bold text-secondary tracking-widest uppercase">Innovation Hub</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black text-text-primary leading-[1.08] tracking-tight">
                            Empowering Businesses with{' '}
                            <span className="text-gradient-blue">high Intelligence!</span>
                        </h1>

                        <p className="max-w-xl text-lg text-text-muted leading-relaxed">
                            Transforming enterprises with AI/ML model development, cutting-edge web solutions, scalable SAAS products, and robust ERP-based systems.
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-8 pt-2">
                            {STATS.map((s) => (
                                <div key={s.label}>
                                    <div className="text-3xl font-black text-text-primary">{s.value}</div>
                                    <div className="text-xs text-text-muted font-medium mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {[
                                { name: 'linkedin', link: 'https://www.linkedin.com/company/devlutionlab/' },
                                { name: 'facebook', link: 'https://www.facebook.com/devlutionlab/' },
                                { name: 'instagram', link: 'https://www.instagram.com/devlutionlab/' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-text-muted hover:border-secondary hover:text-secondary transition-all duration-300 hover:scale-110"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        {social.name === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                                        {social.name === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />}
                                        {social.name === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.42.42.679.819.896 1.377.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.42-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.42-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.42.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.261-2.911.558-.79.306-1.459.717-2.126 1.384-.667.667-1.078 1.336-1.384 2.126-.297.763-.501 1.634-.558 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.261 2.148.558 2.911.306.79.717 1.459 1.384 2.126.667.667 1.336 1.078 2.126 1.384.763.297 1.634.501 2.911.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.261 2.911-.558.79-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.336 1.384-2.126.297-.763.501-1.634.558-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.261-2.148-.558-2.911-.306-.79-.717-1.459-1.384-2.126-.667-.667-1.336-1.078-2.126-1.384-.763-.297-1.634-.501-2.911-.558-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="#contact"
                                className="px-8 py-4 rounded-full bg-secondary text-white font-bold hover:brightness-110 hover:shadow-lg hover:shadow-secondary/30 transition-all active:scale-95"
                            >
                                Start a project
                            </Link>
                            <Link
                                href="#about"
                                className="px-8 py-4 rounded-full border-2 border-primary/10 text-primary font-bold hover:bg-primary/5 transition-all active:scale-95"
                            >
                                More About Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Column — Tech Badge Grid */}
                    <div className="hidden lg:block">
                        <div className="bg-white/60 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-xl shadow-primary/5">
                            <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6">Our Technology Stack</p>
                            <div className="grid grid-cols-2 gap-4">
                                {TECH_BADGES.map((tech) => (
                                    <div
                                        key={tech.label}
                                        className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-surface hover:border-secondary/30 hover:shadow-md transition-all duration-200 group"
                                        style={{ background: tech.bg }}
                                    >
                                        <div className="flex-shrink-0">{tech.icon}</div>
                                        <span className="text-sm font-semibold text-text-primary leading-tight">{tech.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Tagline */}
                            <div className="mt-6 pt-6 border-t border-border flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                <span className="text-sm text-text-muted font-medium">Building Digital Futures from Islamabad, PK</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
