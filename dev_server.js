'use strict';

const DashboardPlugin = require('webpack-dashboard/plugin');
const express = require('express');
const path = require('path');

const app = new express();

app.use(express.static(path.resolve(__dirname)));

// Dev middleware:

const webpack = require('webpack');
const config = require('./webpack.dev.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);
compiler.apply(new DashboardPlugin());
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

const port = 8080 || process.env.port;
app.listen(port, () => console.log(`Listening on ${port}`));
