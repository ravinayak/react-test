const express = require('express');
const path = require('path');
const Dotenv = require('dotenv-webpack');
// Redirect specific routes
// Define regex for matching main.js and manifest.json
const mainJsRegex = /^\/(.)+\/main\.js$/;
const manifestJsonRegex = /^\/(.)+\/public\/manifest\.json$/;

module.exports = {
  plugins: [new Dotenv()],
  devServer: {
    devMiddleware: {
      index: true,
      publicPath: '/',
      serverSideRender: true,
      writeToDisk: true,
    },
    historyApiFallback: true,
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.use((req, res, next) => {
        if (mainJsRegex.test(req.url)) {
          res.redirect('/main.js');
        } else if (manifestJsonRegex.test(req.url)) {
          res.redirect('/public/manifest.json');
        } else {
          next();
        }
      });
      devServer.app.use('/public/', express.static(path.resolve(__dirname, 'public')));
      return middlewares;
    },
    liveReload: true,
    port: 8080,
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
  mode: 'development',
};
