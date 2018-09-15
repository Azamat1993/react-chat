var fs = require('fs');
var MtpProxy = require('telejs');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var port = process.env.API_PORT || 8080;

console.log(port);

app.listen(port);

app.use(bodyParser.json());
app.use(cors());

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
    MtpProxy.mtpInvokeApi('auth.sendCode', {
      phone_number: '+77014495500',
      sms_type: 0,
      api_id: 404313,
      api_hash: '80cf01e174b3053074d2d0a8e3a5337f',
      lang_code: 'en'
    })
      .then(r => res.send(r))
      .catch(err => res.send(err));
  });
