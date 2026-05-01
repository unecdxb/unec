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


const ContentSecurityPolicy = `
  default-src 'self';
  connect-src 'self'
    https://www.google-analytics.com
    https://vitals.vercel-insights.com
    https://api.resend.com
    https://www.google.com
    https://cdn.tiny.cloud
    https://api.dropboxapi.com
    https://content.dropboxapi.com;
  img-src 'self' data: blob: https://dl.dropboxusercontent.com;
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tiny.cloud;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
`;

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
    {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
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
