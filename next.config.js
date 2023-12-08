const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withContentlayer } = require('next-contentlayer');

module.exports = withBundleAnalyzer(
  withContentlayer()({
    swcMinify: true,
    reactStrictMode: true,
    webpack(config, { dev, isServer }) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      // Replace React with Preact only in client production build
      // Waiting aksara-ui supports preact
      // if (!dev && !isServer) {
      //   Object.assign(config.resolve.alias, {
      //     react: 'preact/compat',
      //     'react-dom/test-utils': 'preact/test-utils',
      //     'react-dom': 'preact/compat',
      //   });
      // }
      return config;
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
      reactRemoveProperties: true,
      removeConsole: {
        exclude: ['error'],
      },
    },
  })
);
