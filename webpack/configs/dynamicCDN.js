const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
module.exports = function dynamicCDN(config) {
  config.plugins.push(new DynamicCdnWebpackPlugin())
}