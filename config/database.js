const mongoose = require("mongoose");

require("dotenv").config();

const dbConnection =()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    } )
    .then(()=>console.log("db connection is successfull"))
    .catch((error) => {
        console.log("issed is ds connection");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports=dbConnection;