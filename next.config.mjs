/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Apply this rule to SVG files
      use: ["@svgr/webpack"], // Use @svgr/webpack to handle SVG files as React components
    });

    return config;
  },
};

export default nextConfig;
