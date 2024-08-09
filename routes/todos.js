const expess = require("express");
const router = expess.Router();

// import controller


const{createTodo} = require("../controllers/createTodo");
const{getTodo, getTodoById} = require("../controllers/getTodo");
const{udateTodo, updateTodo}=require("../controllers/updateTodo");
const{deleteTodo}=require("../controllers/delete.Todo");
router.post("/too", createTodo);
router.get("/getTodos", getTodo)
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports =router;