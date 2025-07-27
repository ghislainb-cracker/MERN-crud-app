import { Router } from "express";
import { getProducts, getProduct, insertProducts, updateProduct, deleteProduct } from "../controllers/product.controler.js"

const route = Router()

// GET All Products
route.get("/", getProducts);

// GET Single Product
route.get("/:id", getProduct);

// Post Product/Products
route.post("/", insertProducts);

// UPDATE Single Product
route.put("/:id", updateProduct);

// DELETE Single Product
route.delete("/:id", deleteProduct);

const productRoute = route

export default productRoute