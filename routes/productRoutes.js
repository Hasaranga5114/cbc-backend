import express from 'express';
import { getProducts,createProduct,deleteProduct,getProductByName } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/',getProducts);
productRouter.get('/:name',getProductByName);  
productRouter.post('/',createProduct);
productRouter.delete('/:name',deleteProduct);

export default productRouter;