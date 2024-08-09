const Todo=require("../models/Todo");

exports.createTodo=async(req, res) =>{
  try{
    const{tile, description} = req.body;
    const response=await Todo.create({tile, description})

    res.status(200).json(

        {
            success:true,
            data:response,
            message:'emtry created successfully'
        }
    );
  }

catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json({
        success:false,
        data:"internet servel error",
        message:err.message,
    })
}
}