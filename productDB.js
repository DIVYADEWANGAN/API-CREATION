require("dotenv").config();
const connectDB = require("./db/connect");

const Product = require("./models/product"); // Ensure the correct path

const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson); // Change 'Product' to 'product'
        console.log("success");
    } catch (error) {
        console.error(error);
    }
};

start();
