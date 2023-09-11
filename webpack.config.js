// webpack.config.js

// .woff/woff2/ttf/eot: These are font files
// .png: png image
// .svg: svg image

const path = require('path');
const express = require('express');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(?:js|tsx|ts|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            target: 'es2015',
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader',
      },
      {
        test: /\.png$|.svg$/,
        use: 'file-loader',
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.use('/public/', express.static(path.resolve(__dirname, 'public')));
      return middlewares;
    },
  },
  entry: path.resolve(__dirname, 'app/javascript/src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'app/javascript'),
    },
    modules: [
      path.resolve(__dirname, 'app/javascript/(.*)'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.tsx', '.ts', '.js', '.json', '.wasm'],
  },
  mode: 'development',
};
