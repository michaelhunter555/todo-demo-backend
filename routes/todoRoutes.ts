import { Router } from "express";

import todoCompleted from "../controllers/todos/completed-todo";
import createTodo from "../controllers/todos/create-todo";
import deleteTodo from "../controllers/todos/delete-todo";
import getTodoById from "../controllers/todos/get-todo-by-id";
import getTodos from "../controllers/todos/get-todos";
import updateTodo from "../controllers/todos/update-todo";

const router = Router();

router.get("/get-todo/:userId", getTodos);
router.get("/get-todo-by-id", getTodoById);

router.post("/create-todo", createTodo);

router.patch("/update-todo", updateTodo);
router.patch("/mark-todo-completed", todoCompleted);

router.delete("/delete-todo", deleteTodo);

export default router;
