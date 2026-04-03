import Link from "next/link";
import heroimage from "../../../../public/images/hero2.png";
import Image from "next/image";



const STATS = [
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background pt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-bold text-secondary tracking-widest uppercase">
                Innovation Hub
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl md:text-5xl lg:text-[64px] font-black text-text-primary leading-[1.08] tracking-tight"
            >
              Empowering Businesses with{" "}
              <span className="text-gradient-blue">high Intelligence!</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="max-w-xl text-lg text-text-muted leading-relaxed"
            >
              Transforming enterprises with AI/ML model development,
              cutting-edge web solutions, scalable SAAS products, and robust
              ERP-based systems.
            </p>

            {/* Stats */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-8 pt-2"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-text-primary">
                    {s.value}
                  </div>
                  <div className="text-xs text-text-muted font-medium mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center gap-4"
            >
              {[
                {
                  name: "linkedin",
                  link: "https://www.linkedin.com/company/devlutionlab/",
                },
                {
                  name: "facebook",
                  link: "https://www.facebook.com/devlutionlab/",
                },
                {
                  name: "instagram",
                  link: "https://www.instagram.com/devlutionlab/",
                },
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
                    {social.name === "linkedin" && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                    {social.name === "facebook" && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                    )}
                    {social.name === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.42.42.679.819.896 1.377.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.42-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.42-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.42.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.261-2.911.558-.79.306-1.459.717-2.126 1.384-.667.667-1.078 1.336-1.384 2.126-.297.763-.501 1.634-.558 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.261 2.148.558 2.911.306.79.717 1.459 1.384 2.126.667.667 1.336 1.078 2.126 1.384.763.297 1.634.501 2.911.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.261 2.911-.558.79-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.336 1.384-2.126.297-.763.501-1.634.558-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.261-2.148-.558-2.911-.306-.79-.717-1.459-1.384-2.126-.667-.667-1.336-1.078-2.126-1.384-.763-.297-1.634-.501-2.911-.558-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex flex-wrap items-center gap-4"
            >
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

          {/* Right Column — Visual + Clients */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src={heroimage}
                  alt="Project Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg border border-border p-4 w-52">
  <p className="text-xs text-text-muted">Trusted By</p>
  <h4 className="text-lg font-bold text-text-primary">Growing Businesses</h4>
  <p className="text-xs text-secondary mt-1 font-semibold">Worldwide Clients</p>
</div>

              {/* Floating Card 2 */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg border border-border p-4 w-52">
  <p className="text-xs text-text-muted">Client Review</p>
  <h4 className="text-sm font-semibold text-text-primary">
    “Reliable team, great communication!”
  </h4>
  <div className="flex text-yellow-400 mt-1 text-sm">★★★★★</div>
</div>

              {/* Floating Card 3 */}
        <div className="absolute top-1/2 -right-10 bg-white rounded-xl shadow-md border border-border px-4 py-2">
  <p className="text-xs font-semibold text-text-muted">
    Active Clients
  </p>
  <p className="text-lg font-bold text-secondary">10+</p>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
