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

export const metadata = {
  title: 'Timileyin Pelumi - Software Engineer',
  description: 'Software engineer and product-minded developer specializing in web, AI, and blockchain applications. Available for remote opportunities.',
  metadataBase: new URL('https://www.builtbytim.dev'),
  openGraph: {
    title: 'Timileyin Pelumi - Software Engineer',
    description: 'Software engineer and product-minded developer specializing in web, AI, and blockchain applications. Available for remote opportunities.',
    type: 'website',
    url: 'https://www.builtbytim.dev',
    images: [{
      url: 'https://www.builtbytim.dev/banner.png',
      alt: 'Timileyin Pelumi Portfolio Banner'
    }],
    siteName: 'Timileyin Pelumi'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timileyin Pelumi - Software Engineer',
    description: 'Software engineer and product-minded developer specializing in web, AI, and blockchain applications. Available for remote opportunities.',
    domain: 'www.builtbytim.dev',
    url: 'https://www.builtbytim.dev',
    images: ['https://www.builtbytim.dev/banner.png']
  },
  alternates: {
    canonical: 'https://www.builtbytim.dev'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/web-app-manifest-192x192.png',
    apple: '/web-app-manifest-192x192.png',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Timileyin Pelumi",
  alternateName: "Tim",
  description: "Software engineer and product-minded developer specializing in web, AI, and blockchain applications",
  url: "https://www.builtbytim.dev",
  image: "https://www.builtbytim.dev/profile.jpg",
  sameAs: [
    "https://github.com/builtbytim",
    "https://linkedin.com/in/builtbytim",
    "https://twitter.com/builtbytim",
    "https://t.me/builtbytim"
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
        <meta name="apple-mobile-web-app-title" content="Builtbytim" />
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
        <script data-goatcounter="https://builtbytim.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></script>
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
