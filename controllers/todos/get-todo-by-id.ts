import { Request, Response } from "express";

import Todo from "../../models/todos";

const getTodoById = async (req: Request, res: Response) => {
  const { todoId } = req.query;

  try {
    const todo = await Todo.findById(todoId);

    res.status(200).json({ todo, ok: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving todo", ok: false });
  }
};
export default getTodoById;
