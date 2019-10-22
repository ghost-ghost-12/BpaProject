var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({

    Name: {
        type: String,
        required: true
    },

    Picture: {
        type: String,
        required: true
    },

    Price: {
        type: Number,
        required: true
    },

    QTY:{
        type: Number,
        required: true
    },

    Description: {
        type: String,
        required: true
    }

},{collection:'Product'});

module.exports = mongoose.model('Product', ProductSchema);
