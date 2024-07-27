const Todo = require('../models/todo');


exports.getTodo = async (req,res)=> {
    try{
        // getting data from database
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data:todos,
            message:'data is fetch successfully'
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'internal server error'

        })
    }
}

exports.getTodoById = async (req,res)=>{
    try{
        // extracting id from params
        const id = req.params.id;
        // fetching data based on provided id
        const todo = await Todo.findById({_id:id});

        // for data given not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message:'no Id found with given Id'
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`data is fetch associated with id:${id}`
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'internal server error'

        })

    }
}