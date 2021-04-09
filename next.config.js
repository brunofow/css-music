module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(svg|png|ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/assets/images/`,
            outputPath: `${isServer ? '../' : ''}assets/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};