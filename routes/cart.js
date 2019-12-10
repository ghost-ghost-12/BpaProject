var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	console.log("im here in the get")
	res.render('pages/cart')
});

console.log (router)







module.exports = router;