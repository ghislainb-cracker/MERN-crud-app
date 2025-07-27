
// import { getProducts, getProduct, insertProducts, updateProduct, deleteProduct } from "./controllers/product.controler.js";
import mongoose from "mongoose";
import express from "express";
import productRoute from "./routes/product.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
const PORT = 8000

app.get('/', (req, res) => {
    res.send("<h1>wow this is served by the backend</h1>")
});

app.use("/api/products", productRoute)

// app.get("/api/products", getProducts)

// app.get("/api/products/:id", getProduct)

// app.put("/api/products/:id", updateProduct)

// app.post('/api/products', insertProducts)

// app.delete("/api/products/:id", deleteProduct)

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:8000`);
})

const mongoUri = `mongodb+srv://byimbog250:${process.env.MONGO_DB_PASSWORD}@cluster0.lvob1gv.mongodb.net/node-api?retryWrites=true&w=majority&tls=true`;
mongoose.connect(mongoUri)
.then(() => {
    console.log('connected to the database');
})
.catch((error) => {
    console.log({message: error.message})
})