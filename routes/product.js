var express = require('express');
var router = express.Router();

var Product = require('../models/products');


/* GET products page. */
router.get('/', function(req, res) {
	Product.find(function(err, products){
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
		console.log(products);
		  }
	});
	
});

module.exports = router;