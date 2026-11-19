/** Static export: host anywhere (Cloudflare Pages, Netlify, Vercel, any file host). */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // images are pre-built responsive webp in /public/img
  reactStrictMode: true,
};
export default nextConfig;
