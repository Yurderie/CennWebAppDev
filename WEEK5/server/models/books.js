let mongoose = require('mongoose');
let booksmodel=mongoose.Schema({
    name:String,
    author:String,
    published:String,
    description:String,
    price:Number
},
    {
        collection:'books'
    });

    module.exports = mongoose.model('book',booksmodel);