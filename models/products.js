var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({

    Picture: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    Description: {
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
    }

});

module.exports = mongoose.model('Product', schema);
