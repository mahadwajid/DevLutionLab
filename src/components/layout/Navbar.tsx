'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
            <nav
                className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between"
                aria-label="Primary Navigation"
            >
                {/* Logo */}
                <Link href="#home" className="flex items-center gap-2 group flex-shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20">
                        <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <span className="text-xl font-bold text-text-primary tracking-tight">
                        devLution <span className="text-secondary">Lab</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-[15px] font-medium text-text-muted hover:text-secondary transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right: Social + CTA */}
                {/* <div className="flex items-center gap-4">
                  
                    <div className="hidden xl:flex items-center gap-3 text-text-muted">
                        {[
                            { name: 'linkedin', href: 'https://www.linkedin.com/company/devlutionlab/' },
                            { name: 'facebook', href: 'https://www.facebook.com/devlutionlab/' },
                            { name: 'instagram', href: 'https://www.instagram.com/devlutionlab/' },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-secondary transition-colors"
                                aria-label={social.name}
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    {social.name === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                                    {social.name === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />}
                                    {social.name === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.42.42.679.819.896 1.377.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.42-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.42-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.42.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.261-2.911.558-.79.306-1.459.717-2.126 1.384-.667.667-1.078 1.336-1.384 2.126-.297.763-.501 1.634-.558 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.261 2.148.558 2.911.306.79.717 1.459 1.384 2.126.667.667 1.336 1.078 2.126 1.384.763.297 1.634.501 2.911.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.261 2.911-.558.79-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.336 1.384-2.126.297-.763.501-1.634.558-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.261-2.148-.558-2.911-.306-.79-.717-1.459-1.384-2.126-.667-.667-1.336-1.078-2.126-1.384-.763-.297-1.634-.501-2.911-.558-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                                </svg>
                            </a>
                        ))}
                    </div>

                    <Link
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-accent text-white font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-accent/30"
                    >
                        Start a project
                    </Link>

                  
                    <button
                        className="lg:hidden p-2 text-text-primary hover:text-secondary transition-colors"
                        aria-label="Toggle Menu"
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        {mobileOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div> */}
            </nav>

            {/* Mobile menu dropdown */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md px-6 py-4">
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-3 text-base font-medium text-text-muted hover:text-secondary transition-colors border-b border-border/30 last:border-0"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
