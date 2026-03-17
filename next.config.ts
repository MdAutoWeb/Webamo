import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Forceer www naar non-www, inclusief alle paden en query params
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.webamo.be",
          },
        ],
        destination: "https://webamo.be/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
