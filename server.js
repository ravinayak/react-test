const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack-dev-server.config.js'); // Import your webpack configuration
const express = require('express');
const compiler = webpack(webpackConfig);

const app = express();

// Serve static assets using Express from a specific folder
app.use('/public', express.static('public'));

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  open: true,
});

const server = new WebpackDevServer(devServerOptions, compiler);

server.start(8080, 'localhost', () => {
  console.log('Development server is running on http://localhost:8080');
});
