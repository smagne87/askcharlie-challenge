const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const configrules = require('./wconfig-rules.js');

const distConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'askcharlie-app.js',
  },
  module: {
    rules: configrules,
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};

var libConfig = {
  entry: './src/lib.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: configrules,
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],
};

const zipConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/askcharlie-app'),
    filename: 'js/script.js',
  },
  module: {
    rules: configrules,
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new ExtractTextPlugin({ filename: 'css/main.css', allChunks: true }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CopyWebpackPlugin([{ from: 'etc/manifest.js', to: 'meta-info/manifest.js' }]),
  ],
};

module.exports = [distConfig, libConfig, zipConfig];
