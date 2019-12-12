var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({

    Name: {
        type: String,
    },

    Picture: {
        type: String
    },

    price: {
        type: Number
    },

    QTY:{
        type: Number
    },

    Description: {
        type: String
    },
    
    Category: {
        type: String
    }

},{collection:'Product'});

module.exports = mongoose.model('Product', ProductSchema);
