const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const configrules = require('./wconfig-rules.js');

var serverConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: configrules,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    disableHostCheck: true,
  },
};

module.exports = [serverConfig];
