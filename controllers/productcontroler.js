const product_fetch_details = require('../model/Productdetails')

exports.createProduct = async(req,res)=>{
    try{
        const productDetails = await product_fetch_details.create(req.body)
        res.status(200).json(productDetails)
    }
    catch(err){
        console.log(err)
    }
}