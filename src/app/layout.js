import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Timileyin Pelumi",
  alternateName: "Tim",
  description: "Full-stack developer and product-minded engineer specializing in web development, AI, and blockchain applications",
  url: "https://builtbytim.dev",
  image: "https://builtbytim.dev/profile.jpg",
  sameAs: [
    "https://github.com/builtbytim",
    "https://linkedin.com/in/builtbytim",
    "https://twitter.com/builtbytim",
    "https://t.me/builtbytim"
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "Nigeria"
  },
  email: "hey@builtbytim.dev",
  knowsAbout: [
    "Web Development",
    "AI Development", 
    "Blockchain Development",
    "React",
    "Next.js",
    "Python",
    "JavaScript",
    "Smart Contracts",
    "DeFi",
    "Full Stack Development"
  ]
};

export const metadata = {
  title: {
    default: "Timileyin Pelumi - Full Stack Developer | Web, AI & Blockchain Expert",
    template: "%s | Timileyin Pelumi - Full Stack Developer"
  },
  description: "Timileyin Pelumi is a product-minded full-stack developer from Nigeria specializing in web development, AI solutions, and blockchain applications. Expert in React, Next.js, Python, and modern tech stacks. Available for remote opportunities.",
  metadataBase: new URL('https://builtbytim.dev'),
  openGraph: {
    title: "Timileyin Pelumi - Full Stack Developer | Web, AI & Blockchain Expert",
    description: "Product-minded full-stack developer from Nigeria building clean, scalable solutions in web development, AI, and blockchain. Available for remote opportunities.",
    type: "website",
    url: "https://builtbytim.dev",
    siteName: "Timileyin Pelumi - Full Stack Developer",
    images: [{
      url: "/banner.png",
      width: 1200,
      height: 630,
      alt: "Timileyin Pelumi - Full Stack Developer Portfolio"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Timileyin Pelumi - Full Stack Developer | Web, AI & Blockchain Expert",
    description: "Product-minded full-stack developer building clean, scalable solutions in web development, AI, and blockchain.",
    domain: "builtbytim.dev",
    url: "https://builtbytim.dev",
    images: ["/banner.png"]
  },
  alternates: {
    canonical: "https://builtbytim.dev"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: {
    icon: "/web-app-manifest-192x192.png",
    apple: "/web-app-manifest-192x192.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-white`}
        suppressHydrationWarning={true}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        <div id="root" role="application" aria-label="Timileyin Pelumi Portfolio">
          {children}
        </div>
      </body>
    </html>
  );
}
