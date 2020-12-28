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

// const path = require('path');
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, './src/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.listen(port, () => {
  console.log(`The amazing HUNGRY BUNCH front-end app listening at http://localhost:${port}`);
});