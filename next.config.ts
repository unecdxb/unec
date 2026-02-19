// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     localPatterns: [
//       {
//         pathname: "/assets/images/**",
//       },
//     ],
//     dangerouslyAllowSVG: true,
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "dl.dropboxusercontent.com",
//       },
//     ],
//   },
// };

// export default nextConfig;



import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval'
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://www.google.com
        https://www.gstatic.com
        https://cdn.tiny.cloud;
      style-src 'self' 'unsafe-inline'
        https://fonts.googleapis.com
        https://cdn.tiny.cloud;
      img-src 'self' data: blob: https://*.dropboxusercontent.com https:;
      font-src 'self'
        https://fonts.gstatic.com
        https://cdn.tiny.cloud;
      connect-src 'self'
        https://www.google-analytics.com
        https://vitals.vercel-insights.com
        https://api.resend.com
        https://www.google.com
        https://cdn.tiny.cloud;
      frame-src 'self'
        https://www.youtube.com
        https://player.vimeo.com
        https://www.google.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `.replace(/\n/g, ""),
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/assets/images/**" },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl.dropboxusercontent.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
