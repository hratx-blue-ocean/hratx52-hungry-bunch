const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);
const port = 3001;

var history = require('connect-history-api-fallback');
app.use(history());
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, () => {
  console.log(`The amazing HUNGRY BUNCH front-end app listening at http://localhost:${port}`);
});

