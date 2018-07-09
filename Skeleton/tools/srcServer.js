import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/extract', callD_alembert);


const fileUpload = require('express-fileupload');


// default options
app.use(fileUpload());

app.post('/upload', function (req, res) {
  console.log("hello its me");
  
});


function callD_alembert(req, res) {
  console.log("pop");

  var spawn = require("child_process").spawn;
  var process = spawn('python', ["helloworld.py"]);

  process.stdout.on('data', function (data) {
    console.log(data.toString());
    res.sendFile(path.join(__dirname, '../src/index.html'));
  });
}


app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});