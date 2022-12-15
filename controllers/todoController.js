import mongoose from "mongoose";
// import todo from "../models/todoModel.js";
import todo from "../models/todoModel.js";

const createTodos=async(req,res)=>{
    try{
        console.log(req.body)
        let newTodo=await todo.create(req.body)
        res.status(200).json({
            status:'success',
            data:newTodo
        })
    }
    catch(err){
        res.status(500).json({
            status:"failue",
            message:err?.message
        })
    }
}
const allTodos=async(req,res)=>{
    try{
        const todos=await todo.find()
        res.status(200).json({
            status:'success',
            length:todos.length,
            Todos:todos
        })
    }
    catch(err){
        res.status(500).json({
            status:'failure',
            message:err?.message
        })
    }

}
const updateTodoById = async(req, res) => {
    //console.log(req.params,req.query)
    try {
        const todo1 = await todo.findOneAndUpdate(req.params,req.body,{
            new:true
        })
        
        res.status(200).json({
            status: 'success',
            data: todo1
        })
    }
    catch(err){
        res.status(500).json({
            status:'error',
            message:err?.message
        })
    }
    
}
const deleteTodo = async (req,res)=>{
    try{
     const deleted = await todo.deleteOne(req.params)
      
     res.status(200).json({
         status:'success',
        //  results:todo.length,
         data:deleted
     })
    }catch(err){
     res.status(500).json({
         status:'failure',
         message:err?.message
     })
    }
 }


export {allTodos,createTodos,updateTodoById,deleteTodo}