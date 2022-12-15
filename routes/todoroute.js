import express from 'express'
import {allTodos,createTodos,updateTodoById,deleteTodo} from '../controllers/todoController.js'

const router=express.Router()
router.route('/').get(allTodos).post(createTodos)
router.route("/:_id").put(updateTodoById).delete(deleteTodo)

export default router