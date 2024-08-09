const mongoose=require("mongoose");
const todoSchema = new mongoose.Schema(

    {
        tile:{
            type:String,
            require:true,
            maxLenght:50,
        },

        description:{
            type:String,
            require:true,
            maxLenght:50,

        },
        creatAt:{
            type:Date,
            require:true,
            default:Date.now(),
        },
        updateAT:{
            type:Date,
            require:true,
            default:Date.now(),
        }
    }
);
module.exports = mongoose.model("Todo", todoSchema);