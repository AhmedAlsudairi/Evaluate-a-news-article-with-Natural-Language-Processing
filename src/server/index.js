const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors');
var aylien = require("aylien_textapi");

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))


var textapi = new aylien({    application_id: "8bd40d36",    application_key: "304c1d7d75bac0a13ae68de7e3849dbf"});

//   textapi.classify({
//       text:'hi my brother'
//   }, (error,response)=>{
//       console.log(response);
//       console.log(error);
//   })

textapi.classify({
    url: 'http://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile'
  }, function(error, response) {
    console.log(response);
    console.log(error);
    if (error === null) {
      response['categories'].forEach(function(c) {
        console.log(c);
      });
    }
  });
  
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
