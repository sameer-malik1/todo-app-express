// importing schema from model
const Todo = require('../models/todo');

// defining router handler
exports.createTodo = async(req,res)=>{
    try{
        // extracting title and desc from request body
        const {title,description}=req.body;

        // create a todo and insert in db
        const response = await Todo.create({title,description});

        // send a json response with success flag
        res.status(200).json(
            {
            success:true,
            data:response,
            message:'Entery created successfully.'
            }
            )
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:err.message   
            }
        )

    }

}
