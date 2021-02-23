const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { 
    main: './src/main.ts' 
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: { 
    extensions: ['.tsx', '.ts', '.js'] 
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html'),
      scriptLoading: 'defer'
    })
  ]
};
