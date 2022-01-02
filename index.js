const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const userRoute = require("./routes/user");
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product.js');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
console.log("Updated")
app.use('/api/auth', authRoute);
app.use("/api/users", userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);


app.listen(5000, () => console.log("Listening on 5000"));