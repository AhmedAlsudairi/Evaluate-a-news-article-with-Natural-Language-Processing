const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))

const aylien = require("aylien_textapi");
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

console.log(__dirname)


app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('listening on port 8081!')
})

app.get('/test', function (req, res) {

  // textapi.hashtags({
  //   url: req.query.text
  // }, function (error, response) {
  //   if (error === null) {
  //     res.send(response.hashtags);
  //   } else {
  //     console.log(error);
  //   }
  // });

  textapi.sentiment({
    url: req.query.text,
    mode: 'tweet'
  }, function(error, response) {
    if (error === null) {
      res.send(response);
    }else{
      console.log(error);
    }
  });
})
