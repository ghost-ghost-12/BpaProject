/*var express = require('express');
var app = express();
var path = require('path');

app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

var server = app.listen(5000, function () {
    console.log('Its been Chazzed')
});
*/

//.get('/', (req, res) => res.render('home.html'))


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

