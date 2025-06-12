import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: "media.rawg.io",
      
    },
    {
      protocol: 'https',
      hostname: "placehold.co",
      
    },
    {
      protocol: 'https',
      hostname: "img.itch.zone",
      
    }
  
  ],
  },
};

export default nextConfig;
