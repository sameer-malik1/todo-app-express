const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        length:50
    },
    description:{
        type:String,
        required:true,
        length:50
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        require:true,
        default:Date.now()
    }
});

module.exports = mongoose.model('Todo',todoSchema);