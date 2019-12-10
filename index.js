const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var mongoose = require('mongoose')
var bodyParser = require('body-parser');


mongoose.connect('mongodb://dbuser:dbpassword1@ds063180.mlab.com:63180/heroku_3wvd8gzq');

var productRouter = require('./routes/product');
var cartRouter = require('./routes/cart');
var crudRouter = require('./routes/index_crud');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  //.engine('html', require('ejs').renderFile)
  //.set('view engine', 'html')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  //.get('/cart', (req, res) => res.render('pages/cart'))
  .use('/product', productRouter)
  .use('/cart', cartRouter)
//  .get('/add/:id', (req, res) => res.render('pages/cart'))
  .use('/crud', crudRouter)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))