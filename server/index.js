const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// test env loading
console.log("ENV CHECK ->", process.env.MONGOURI);


app.get('/', (req, res)=>{
    res.send("API running");
})

app.listen(process.env.PORT, ()=>{
    console.log("Server running on ",process.env.PORT)
});