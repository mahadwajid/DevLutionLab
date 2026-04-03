/**
 * JSON-LD Structured Data for DevLution Lab
 * Targets: Organization, LocalBusiness, WebSite, FAQPage schemas
 * These are read directly by Google's crawlers and power rich results.
 */
export default function JsonLd() {
    const org = {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": "https://www.devlutionlab.tech/#organization",
        name: "DevLution Lab",
        legalName: "DevLution Lab",
        alternateName: ["DevLutionLab", "devlutionlab"],
        url: "https://www.devlutionlab.tech",
        logo: {
            "@type": "ImageObject",
            url: "https://www.devlutionlab.tech/assets/og-image.png",
            width: 1200,
            height: 630,
        },
        image: "https://www.devlutionlab.tech/assets/og-image.png",
        description:
            "DevLution Lab is a top-rated AI and software development agency in Islamabad, Pakistan. We specialize in AI/ML solutions, custom web development, mobile apps, SaaS platforms, ERP systems, and cloud infrastructure for startups and enterprises worldwide.",
        foundingDate: "2022",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
        slogan: "Empowering Businesses with High Intelligence",
        address: {
            "@type": "PostalAddress",
            streetAddress: "E-11/2 Markaz",
            addressLocality: "Islamabad",
            addressRegion: "Islamabad Capital Territory",
            postalCode: "44000",
            addressCountry: "PK",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 33.6844,
            longitude: 73.0479,
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                email: "devlutionlab@gmail.com",
                contactType: "customer support",
                availableLanguage: ["English", "Urdu"],
            },
            {
                "@type": "ContactPoint",
                email: "devlutionlab@gmail.com",
                contactType: "sales",
                availableLanguage: ["English"],
            },
        ],
        sameAs: [
            "https://www.linkedin.com/company/devlutionlab/",
            "https://www.facebook.com/devlutionlab/",
            "https://www.instagram.com/devlutionlab/",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Software & AI Development Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "AI & Machine Learning Development",
                        description:
                            "Custom AI/ML model development, intelligent automation, NLP, computer vision, and data-driven solutions for businesses.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Web Development",
                        description:
                            "High-performance, secure web applications built with Next.js, React, Node.js, and modern cloud infrastructure.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Mobile App Development",
                        description:
                            "Cross-platform iOS and Android mobile applications with seamless UX and scalable backend integration.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "SaaS Platform Development",
                        description:
                            "End-to-end SaaS product development from architecture to deployment, optimized for multi-tenancy and scalability.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Process Automation",
                        description:
                            "Intelligent business workflow automation, system integrations, and operational optimization.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Cloud & DevOps",
                        description:
                            "Scalable cloud infrastructure on AWS, CI/CD pipelines, containerization with Docker & Kubernetes.",
                    },
                },
            ],
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "10",
            bestRating: "5",
            worstRating: "1",
        },
        review: [
            {
                "@type": "Review",
                author: { "@type": "Person", name: "Zaheer Hosany" },
                reviewBody:
                    "DevLutionLab played a critical role in modernizing our digital infrastructure. Their technical depth, reliability, and ability to understand business needs made them a true long-term partner.",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
                publisher: { "@type": "Organization", name: "Palmis Global" },
            },
            {
                "@type": "Review",
                author: { "@type": "Person", name: "Wisal Khan" },
                reviewBody:
                    "DevLutionLab delivered exactly what we needed — a scalable, well-architected solution built with precision. Their team understands both technology and business execution.",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
                publisher: { "@type": "Organization", name: "Firnas.Tech" },
            },
            {
                "@type": "Review",
                author: { "@type": "Person", name: "Victor" },
                reviewBody:
                    "Working with DevLutionLab felt like extending our internal engineering team. Clean architecture, clear communication, and on-time delivery every single time.",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
                publisher: { "@type": "Organization", name: "Dr Schavit Store" },
            },
        ],
        areaServed: [
            { "@type": "Country", name: "Pakistan" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Saudi Arabia" },
            { "@type": "Country", name: "United Arab Emirates" },
            { "@type": "Country", name: "United Kingdom" },
        ],
        knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "Web Development",
            "Mobile App Development",
            "SaaS Development",
            "ERP Systems",
            "Cloud Computing",
            "DevOps",
            "Next.js",
            "React",
            "Node.js",
            "Python",
            "Django",
            "Docker",
            "Kubernetes",
            "AWS",
            "PostgreSQL",
        ],
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.devlutionlab.tech/#website",
        url: "https://www.devlutionlab.tech",
        name: "DevLution Lab",
        description:
            "AI & Web Development Agency in Islamabad, Pakistan — building AI, web, mobile & SaaS solutions.",
        publisher: { "@id": "https://www.devlutionlab.tech/#organization" },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.devlutionlab.tech/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    };

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.devlutionlab.tech",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://www.devlutionlab.tech/#services",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Projects",
                item: "https://www.devlutionlab.tech/#projects",
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "Contact",
                item: "https://www.devlutionlab.tech/#contact",
            },
        ],
    };

    const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What services does DevLution Lab offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "DevLution Lab offers AI/ML development, custom web development, mobile app development, SaaS platform development, business process automation, and cloud & DevOps services.",
                },
            },
            {
                "@type": "Question",
                name: "Where is DevLution Lab located?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "DevLution Lab is based in Islamabad, Pakistan (E-11/2 Markaz). We serve clients globally including the US, UK, Saudi Arabia, and UAE.",
                },
            },
            {
                "@type": "Question",
                name: "Does DevLution Lab work with international clients?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. DevLution Lab works with startups, SMBs, and enterprises across Pakistan, the US, UK, Saudi Arabia, UAE, and beyond.",
                },
            },
            {
                "@type": "Question",
                name: "What technologies does DevLution Lab use?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our technology stack includes Next.js, React, Node.js, Python, Django, PostgreSQL, Redis, Docker, Kubernetes, AWS, and various AI/ML frameworks.",
                },
            },
            {
                "@type": "Question",
                name: "How can I hire DevLution Lab for my project?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can reach us at devlutionlab@gmail.com or use the contact form at https://www.devlutionlab.tech/#contact. We typically respond within 24 hours.",
                },
            },
            {
                "@type": "Question",
                name: "Is DevLution Lab a good software house in Pakistan?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "DevLution Lab is one of the top software agencies in Islamabad, Pakistan with 15+ projects delivered, 10+ happy clients, and 3+ years of full-stack and AI development experience.",
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
            />
        </>
    );
}
