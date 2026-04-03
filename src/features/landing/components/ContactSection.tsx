import React from 'react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-12 bg-zinc-50 ">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Text Info */}
                    <div className="flex-1 space-y-10" data-aos="fade-right" data-aos-delay="100">
                        <div>
                            <span className="text-xs font-bold text-secondary uppercase tracking-widest">Start a Project</span>
                            <h2 className="mt-3 text-5xl md:text-6xl font-black tracking-tighter leading-none text-zinc-900">
                                READY TO<br />EVOLVE?
                            </h2>
                            <p className="mt-5 text-lg text-zinc-500 font-medium leading-relaxed max-w-md">
                                Let's build something that defines your industry. Reach out to discuss your next breakthrough.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Email Us</p>
                                <a
                                    href="mailto:devlutionlab@gmail.com"
                                    className="text-xl font-bold text-zinc-900 hover:text-secondary transition-colors"
                                >
                                    devlutionlab@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Visit Us</p>
                                <p className="text-lg text-zinc-600">
                                    E-11/2 Markaz<br />Islamabad, Pakistan
                                </p>
                            </div>

                            {/* Socials */}
                            <div className="flex gap-3">
                                {[
                                    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/devlutionlab/' },
                                    { name: 'Facebook', href: 'https://www.facebook.com/devlutionlab/' },
                                    { name: 'Instagram', href: 'https://www.instagram.com/devlutionlab/' },
                                ].map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-full border border-border bg-white text-xs font-bold text-zinc-600 hover:border-secondary hover:text-secondary transition-colors"
                                    >
                                        {s.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="flex-1" data-aos="fade-left" data-aos-delay="200">
                        <form
                            action="https://formspree.io/f/xeelezlr"
                            method="POST"
                            className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-md space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full border-b border-zinc-200 py-3 text-base font-medium text-zinc-900 focus:border-secondary focus:outline-none transition-colors placeholder:text-zinc-300 bg-transparent"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@company.com"
                                        className="w-full border-b border-zinc-200 py-3 text-base font-medium text-zinc-900 focus:border-secondary focus:outline-none transition-colors placeholder:text-zinc-300 bg-transparent"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Acme Corp"
                                    className="w-full border-b border-zinc-200 py-3 text-base font-medium text-zinc-900 focus:border-secondary focus:outline-none transition-colors placeholder:text-zinc-300 bg-transparent"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    placeholder="Tell us about your project..."
                                    className="w-full border-b border-zinc-200 py-3 text-base font-medium text-zinc-900 focus:border-secondary focus:outline-none transition-colors placeholder:text-zinc-300 resize-none bg-transparent"
                                />
                            </div>

                            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-secondary transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
