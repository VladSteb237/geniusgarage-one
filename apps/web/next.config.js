// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   turbopack: {
//     root: "/Users/vlad/Desktop/geniusgarage-one", // <- отсюда путь идёт до geniusgarage-one
//   },
// };

// export default nextConfig;
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname, "../../"),
  },
};

module.exports = nextConfig;
