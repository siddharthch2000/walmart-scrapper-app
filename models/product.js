const mongoose = require('mongoose');

let produtScheme = new mongoose.Schema({
    title : String,
    newprice : String,
    oldprice : String,
    newstock : String,
    oldstock : String,
    sku : String,
    company : String,
    url : String,
    updatestatus : String

});

module.exports = mongoose.model('Product', produtScheme);