const path = require('path')

module.exports = [
  {
    name: '@storybook/preset-scss',
    options: {
      sassLoaderOptions: {
      }
    }
  },
  {
    name: path.resolve(__dirname, 'presets', 'twing'),
    options: {
      twingLoaderOptions: {
        environmentModulePath: path.resolve(__dirname, 'environment.js')
      }
    }
  }
];
