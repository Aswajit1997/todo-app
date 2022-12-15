import app from "./app.js";
import mongoose from 'mongoose'
import todo from "./models/todoModel.js";

const port= 8080

const dbpath='mongodb+srv://chiku1997:mongoatlas@cluster0.w74vi8m.mongodb.net/mongo_learn'

mongoose.connect(dbpath).then(res=>console.log('successfully connect to the database')).catch(err=>console.log('connection failed'));


app.listen(port,()=>{
    console.log('Listining on port',port);
})


// const newtodo=new todo({
//     id:3,
//     title:"3rd todo task",
//     date:new Date()
// })

// newtodo.save().then(res=>console.log('Inserted successfully')).catch(err=>console.log(err))
