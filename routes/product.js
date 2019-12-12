var express = require('express');
var router = express.Router();

var Product = require('../models/products');
var Cart = require('../models/cart');


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


router.get('/add-to-cart/:id', function (req, res) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
        if(err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/product');
    })
});

router.get('/cart', function(req, res) {
	console.log("im here in the get")
	res.render('pages/cart')
});

/*
router.get('/add/:id', (req, res, next) => {
	console.log("im here22")
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
*/

module.exports = router;