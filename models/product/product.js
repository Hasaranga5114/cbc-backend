import mongoose from "mongoose";

const productschema=new mongoose.Schema({
    name:String,
    price:Number,
    description:String
})
const Product=mongoose.model('products',productschema)

export default Product;