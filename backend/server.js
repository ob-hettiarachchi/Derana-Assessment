//
const express = require("express");
const mongoose = require("mongoose");
//import mongoose from "mongoose";
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//
const PORT = process.env.PORT || 5000;

//
app.use(cors());
app.use(bodyParser.json);

//
const URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", false);
mongoose.connect(URL,{
    // useCreateIndex: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connection Success")).catch(err => console.log(err))


app.listen(PORT, () => {
    console.log(`Server is up & running on port number: ${PORT}`)
})