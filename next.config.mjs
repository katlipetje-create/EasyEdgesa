/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // If you later host photos on a CDN, add it here, e.g.
    // remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  poweredByHeader: false,
  // Lint still runs with `npm run lint`; it no longer blocks a production build.
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
