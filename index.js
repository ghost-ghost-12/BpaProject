const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var session = require('express-session')
var MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://dbuser:dbpassword1@ds063180.mlab.com:63180/heroku_3wvd8gzq');

var productRouter = require('./routes/product');
var crudRouter = require('./routes/index_crud');

// configure session
express()
.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: {maxAge: 180 * 60 * 1000}
}))
.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  //.engine('html', require('ejs').renderFile)
  //.set('view engine', 'html')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  //.get('/cart', (req, res) => res.render('pages/cart'))
  .use('/product', productRouter)
//  .get('/add/:id', (req, res) => res.render('pages/cart'))
  .use('/crud', crudRouter)
  //configure session
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))