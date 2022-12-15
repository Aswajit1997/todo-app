import express from 'express'
import cors from 'cors'
import todoroutes from './routes/todoroute.js'
const app=express()

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    next()
})
app.use(cors())
app.use(express.json())
app.use('/api/v1/todo',todoroutes)

export default app;

