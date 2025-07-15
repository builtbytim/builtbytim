/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'www.gstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'python.langchain.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'colab.research.google.com',
            },
            {
                protocol: 'https',
                hostname: 'assets.vercel.com',
            },
            {
                protocol: 'https',
                hostname: 'ethereum.org',
            },
            {
                protocol: 'https',
                hostname: 'cursor.com',
            }
        ],
    },
};

export default nextConfig;
