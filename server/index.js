const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// test env loading
//console.log("ENV CHECK ->", process.env.MONGO_URI);

//mongoDB connection
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB Connected...")).catch(err=>console.log(err));

app.get('/', (req, res)=>{
    res.send("API running");
})

app.listen(process.env.PORT, ()=>{
    console.log("Server running on ",process.env.PORT)
});