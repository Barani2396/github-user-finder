// Import necessary modules and plugins
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// Load environment variables from .env.local file
const env = dotenv.config({ path: path.join(__dirname, '.env.local') }).parsed;

module.exports = {
  // Entry point of the application
  entry: './index.js',

  // Set the mode to development for this configuration
  mode: 'development',

  // Output configuration for the build
  output: {
    // Output directory for the build files
    path: path.resolve(__dirname, './build'),

    // Name of the output bundle file
    filename: 'index_bundle.js',

    // Public URL of the output directory when referenced in a browser
    publicPath: '/',
  },

  // Target platform for the build (web)
  target: 'web',

  // Configuration for webpack-dev-server
  devServer: {
    // Port number for the dev server
    port: '3000',

    // Directory to serve static files from
    static: {
      directory: path.join(__dirname, 'public'),
    },

    // Automatically open the browser after the server is started
    open: false,

    // Enable Hot Module Replacement
    hot: true,

    // Enable live reloading
    liveReload: true,

    // Fallback to index.html for single-page applications
    historyApiFallback: true,
  },

  // Extensions to resolve
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  // Module configuration and rules for different file types
  module: {
    rules: [
      // Rule for JavaScript and JSX files
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },

      // Rule for CSS files
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },

      // Rule for image files (PNG, JPEG, GIF)
      { test: /\.(png|jpe?g|gif)$/i, use: [{ loader: 'file-loader' }] },

      // Rule for ICO files
      { test: /\.(ico)$/, use: [{ loader: 'file-loader' }] },

      // Rule for SVG files as image files
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },

  // Plugins configuration
  plugins: [
    // Plugin to generate an HTML file and inject the bundle
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),

    // Plugin to generate favicons
    new FaviconsWebpackPlugin({
      logo: './public/favicon.ico',
    }),

    // Plugin to inject environment variables into the build
    new webpack.EnvironmentPlugin(env),
  ],
};
