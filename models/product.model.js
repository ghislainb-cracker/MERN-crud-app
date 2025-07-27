import { timeStamp } from "console"
import mongoose from "mongoose"
import { type } from "os"

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please ']
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false
    }
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

export default Product