var express = require('express');
var router = express.Router();

var Product = require('../models/products');

/* GET products page. */
/* Select by shoes and display*/
router.get('/', function(req, res) {
	Product.find({Category: "Shoes"} , function(err, products){
		console.log("im here")
		
		//var productChunks = [];
		//var chunkSize = 3;
		//for (var i = 0; i < docs.length; i += chunkSize) {
		//	productChunks.push(docs.slice(i, i + chunkSize));
		//}
		//console.log(productChunks)
		if (err) {
			console.log(err);
		  } else {
		res.render('pages/product', { title: 'Shopping Cart', products: products });
		//console.log(products);
		  }
	});
});

router.get('/add/123', function(req, res) {
	Product.find({Category: "Shoes"} , function(err, products){
		console.log("im here")
		
		//var productChunks = [];
		//var chunkSize = 3;
		//for (var i = 0; i < docs.length; i += chunkSize) {
		//	productChunks.push(docs.slice(i, i + chunkSize));
		//}
		//console.log(productChunks)
		if (err) {
			console.log(err);
		  } else {
		res.render('pages/product', { title: 'Shopping Cart', products: products });
		//console.log(products);
		  }
	});
});

router.get('/add/:id', (req, res, next) => {
	console.log("im here22")
	var Cart = require('./models/Cart');
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	var product = products.filter(function(item) {
	  return item.id == productId;
	});
	cart.add(product[0], productId);
	req.session.cart = cart;
	res.redirect('/');
	inline();
  })

module.exports = router;