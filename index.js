//const mongoose = require("mongoose");
const express= require("express")
const app=express();    
const PORT =process.env.PORT || 4000;

app.use(express.json());

const todoRoutes=require("./routes/todos");

app.use("/api/v1", todoRoutes);

app.listen(3000, ()=>{
    console.log("app is running successfully");
})

const dbConnection=require("./config/database");
dbConnection();

app.get("/", (req, res)=>{
    res.send(`<h1> this is me, myself Rabi</h1>`);
});