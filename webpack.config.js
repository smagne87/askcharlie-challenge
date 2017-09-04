const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const configrules = require('./wconfig-rules.js');

const gitHashCommand = 'rev-parse --short HEAD';
const gitRevisionPlugin = new GitRevisionPlugin({ commithashCommand: gitHashCommand });
const appVersion = JSON.stringify(gitRevisionPlugin.version());
const appGitBranch = JSON.stringify(gitRevisionPlugin.branch());
const appGitCommit = JSON.stringify(gitRevisionPlugin.commithash());

const distConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'savi-stats-correg.js',
  },
  module: {
    rules: configrules,
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new GitRevisionPlugin({
      branch: true,
      commithashCommand: gitHashCommand,
    }),
    new webpack.DefinePlugin({
      VERSION: appVersion,
      BRANCH: appGitBranch,
      COMMIT: appGitCommit,
    }),
    new webpack.BannerPlugin(`savi-stats-correg\n version: ${appVersion}\n branch: ${appGitBranch}\n commit: ${appGitCommit}`),
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
    path: path.resolve(__dirname, 'dist/savi-stats-correg'),
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
    new webpack.DefinePlugin({
      VERSION: appVersion,
    }),
    new webpack.BannerPlugin(`savi-stats-correg ${appVersion}`),

  ],
};

module.exports = [distConfig, libConfig, zipConfig];
