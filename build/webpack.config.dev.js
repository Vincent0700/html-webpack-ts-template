const path = require('path');
const { merge } = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const PORT = 8096;

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  stats: 'errors-only',
  // performance: { hints: 'error' },
  cache: {  type: 'filesystem' },
  watchOptions: { ignored: /node_modules/ },
  devServer: {
    hot: true,
    port: PORT,
    quiet: true,
    compress: true,
    overlay: true,
    clientLogLevel : 'silent',
    contentBase: path.join(__dirname, '../src'),
  },
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`App is running at http://localhost:${PORT}`]
      }
    })
  ]
});
