import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["*"],
    headers() {
        return [];
    },
    rewrites() {
        return [];
    },
    redirects() {
        return [];
    },
    trailingSlash: false,
    // distDir: ".next",
    cleanDistDir: true,

    poweredByHeader: false,

    images: {
        unoptimized: true,
    },

    // productionBrowserSourceMaps: true,
    // reactCompiler: false,
    // reactProductionProfiling: false,
    reactStrictMode: true,

    output: "standalone",
    outputFileTracingRoot: import.meta.dirname,

    logging: false,
    cacheComponents: true,
    cacheLife: {
        minute: {
            stale: 60,
            revalidate: 60,
            expire: 60,
        },
    },
    partialPrefetching: true,

    agentRules: false,
    htmlLimitedBots: /.*/,

    // サーバーサイドでバンドルせず Node.js ネイティブの require を利用させるパッケージ
    serverExternalPackages: [
        "better-sqlite3",
    ],
};

export default nextConfig;
