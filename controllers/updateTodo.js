const Todo = require("../models/Todo");

exports.updateTodo = async(req, res) =>{
    try{
        const {id}=req.params;
        const{tile, description} =req.body;

          const todo = await Todo.findByIdAndUpdate(
          {_id:id},
          {tile, description, update: Date.now()},
        )
        res.status(200)
        .json({
        success:true,
        data:todo,
        message:"update successfully",
        })
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        })

    }
}