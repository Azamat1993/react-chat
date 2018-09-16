var fs = require('fs');
var MtpProxy = require('telejs');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var port = process.env.API_PORT || 8080;

app.listen(port);

app.use(bodyParser.json());
app.use(cors())

MtpProxy.init(
  (state) => new Promise((resolve, reject) => {
    fs.writeFile('state.json', state, 'utf8', (err) => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
  }),
  () => new Promise((resolve, reject) => {
    fs.readFile('state.json', 'utf8', (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
  , 'verbose').then(() => {
    app.post('/telegram/:command', (req, res) => {
      MtpProxy.mtpInvokeApi(req.params.command, req.body)
        .then(r => res.send(r))
        .catch(err => res.status(500).send(err));
    })
  });
