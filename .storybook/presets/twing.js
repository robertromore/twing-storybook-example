function webpack(webpackConfig = {}, options = {}) {
  const { module = {}, resolve = {}, optimization = {} } = webpackConfig;
  const { twingLoaderOptions } = options;
  let terserConfig = optimization.minimizer.shift()
  terserConfig['options']['terserOptions']['keep_classnames'] = true

  return {
    ...webpackConfig,
    module: {
      ...module,
      rules: [
        ...(module.rules || []),
        {
          test: /\.twig$/,
          use: [
            {
              loader: require.resolve('twing-loader'),
              options: twingLoaderOptions,
            }
          ]
        },
      ],
    },
    resolve: {
      ...resolve,
      extensions: [...(resolve.extensions || []), '.twig'],
    },
    optimization: {
      ...optimization,
      minimizer: [
        ...(optimization.minimizer || []),
        terserConfig
      ]
    }
  };
}

function managerWebpack(webpackConfig = {}, options = {}) {
  const { module = {}, resolve = {} } = webpackConfig;
  const { twingLoaderOptions, transpileManager = false } = options;

  if (!transpileManager) {
    return webpackConfig;
  }

  return {
    ...webpackConfig,
    module: {
      ...module,
      rules: [
        ...(module.rules || []),
        {
          test: /\.twig?$/,
          use: [
            {
              loader: require.resolve('twing-loader'),
              options: twingLoaderOptions
            },
          ]
        },
      ],
    },
    resolve: {
      ...resolve,
      extensions: [...(resolve.extensions || []), '.twig'],
    },
  };
}

module.exports = { webpack, managerWebpack };
