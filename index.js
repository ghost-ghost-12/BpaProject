const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mydb');

var productRouter = require('./routes/product');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  //.engine('html', require('ejs').renderFile)
  //.set('view engine', 'html')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .use('/product', productRouter)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))