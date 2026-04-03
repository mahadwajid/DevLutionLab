import React from 'react';

export default function FooterSection() {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">

                {/* Top row */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-white/10">

                    {/* Brand */}
                    <div className="space-y-4 max-w-xs" data-aos="fade-right" data-aos-delay="100">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shadow-lg shadow-secondary/30">
                                <span className="text-white font-bold text-lg">D</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                devLution <span className="text-secondary">Lab</span>
                            </span>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed">
                            Empowering businesses with high intelligence. Building digital futures from Islamabad, Pakistan.
                        </p>
                    </div>

                    {/* Nav columns */}
                    <div className="flex flex-wrap gap-12" data-aos="fade-left" data-aos-delay="200">
                        <div>
                            <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Company</p>
                            <ul className="space-y-3">
                                {['About Us', 'Our Projects', 'Services', 'Contact Us'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase().replace(' ', '')}`}
                                            className="text-sm text-white/60 hover:text-white transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Connect</p>
                            <ul className="space-y-3">
                                {[
                                    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/devlutionlab/' },
                                    { label: 'Facebook', href: 'https://www.facebook.com/devlutionlab/' },
                                    { label: 'Instagram', href: 'https://www.instagram.com/devlutionlab/' },
                                ].map((s) => (
                                    <li key={s.label}>
                                        <a
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white/60 hover:text-white transition-colors"
                                        >
                                            {s.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Contact</p>
                            <ul className="space-y-3">
                                <li>
                                    <a href="mailto:devlutionlab@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">
                                        devlutionlab@gmail.com
                                    </a>
                                </li>
                                <li className="text-sm text-white/60">
                                    E-11/2 Markaz, Islamabad
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <span className="text-xs text-white/40 tracking-widest uppercase">
                        © {new Date().getFullYear()} DevLution Lab. All Rights Reserved.
                    </span>
                    <span className="text-xs text-white/40 tracking-widest uppercase">
                        Building Digital Futures
                    </span>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest">Privacy</a>
                        <a href="#" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-widest">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
