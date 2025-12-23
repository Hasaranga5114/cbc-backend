import Product from "../models/product/product.js";

export function getProducts(req, res) {
    Product.find().then(
        (productList) => {
            res.json({
                list: productList
            });
        }
    )
}

export function createProduct(req, res) {
    console.log(req.user);

    if(req.user == null){
        res.json({error:"you are not loged in"})
        return
    }
    if(req.user.type !== "admin"){
        res.json({error:"you are not admin"})
        return
    }

    




    const product = new Product(req.body);

    product.save().then(() => {
        res.json({ message: "Product created successfully" });
    }).catch((error) => {
        res.json({ error: "Error creating product" });
    });

}

export function deleteProduct(req, res) {
    Product.deleteOne({ name: req.params.name }).then(() => {
        res.json({ message: "Product deleted successfully" });
    }).catch((error) => {
        res.json({ error: "Error deleting product" });
    });
}

export function getProductByName(req, res) {
    const name = req.params.name;
    Product.find({ name: name }).then(
        (productList) => {
            res.json({list : productList})}).catch((error) => {
                res.json({ error: "Error fetching product" });
            });
}   