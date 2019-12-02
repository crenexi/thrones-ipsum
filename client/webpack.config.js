const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;

// const APP_PATH = path.resolve(__dirname, '/src/app');
const DIST_PATH = path.join(__dirname, '/dist');

/* #################
#### Loaders #######
################# */

const jsLoaderRule = () => ({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
});

const scssLoaderRule = () => ({
  test: /\.scss$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        sourceMap: false,
        localIdentName: '[hash:base64:5]',
      },
    },
    {
      loader: 'sass-loader',
      options: {
        includePaths: [bourbon],
      },
    },
  ],
});

/* #################
#### Plugins #######
################# */

const htmlWebpack = () =>
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
  });

const copyWebpack = () => (
  new CopyWebpackPlugin([
    { from: '../public' },
  ])
);

/* #################
#### Config ########
################# */

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: DIST_PATH,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, './src'),
      config: path.resolve(__dirname, './src/config'),
      routes: path.resolve(__dirname, './src/routes'),
      utils: path.resolve(__dirname, './src/utils'),
      components: path.resolve(__dirname, './src/components'),
      scss: path.resolve(__dirname, './src/scss'),
    },
  },
  module: {
    rules: [jsLoaderRule(), scssLoaderRule()],
  },
  plugins: [
    htmlWebpack(),
    copyWebpack(),
  ],
  devServer: {
    port: 4200,
    historyApiFallback: true,
  },
};
