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
