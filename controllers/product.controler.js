import Product from "../models/product.model.js";

const getProducts = async (req, res) =>{
    try{
        const product = await Product.find({});
        res.status(200).json(product)
    }catch (err){
        console.log({message: err.message})
        res.status(500).json({message: err.message})
    }
}
const getProduct = async (req, res) =>{
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    }catch(err){
        console.log({message: err.message});
        res.status(500).json({message: err.message})
    }
}
const insertProducts = async (req, res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product)
      }catch(err){
        console.log({message: err.message})
        res.status(500).json({message: err.message})
      }
}
const updateProduct = async (req, res) =>{
    try{
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    }catch(err){
        console.log({message: err.message})
        res.status(500).json({message: err.message})
    }
}
const deleteProduct = async (req, res) =>{
    try{
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id, req.body);

        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(" Product Deleted successful")
    }catch(err){
        console.log({message: err.message});
        res.status(500).json({message: err.message})  
    } 
}

export { getProducts, getProduct, insertProducts, updateProduct, deleteProduct };