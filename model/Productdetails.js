const mongoose = require('mongoose')

const newProductDetails = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    brand:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    expire:{
        type:Number,
        require:true
    },
    
},{timestamps:true})

module.exports = mongoose.model("Productdetails",newProductDetails);

