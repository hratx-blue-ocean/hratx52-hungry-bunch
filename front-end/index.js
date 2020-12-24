const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);
const port = 3001;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, () => {
  console.log(`The amazing HUNGRY BUNCH front-end app listening at http://localhost:${port}`);
});