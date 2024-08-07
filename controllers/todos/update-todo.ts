import { Request, Response } from "express";

import Todo from "../../models/todos";

const updateTodo = async (req: Request, res: Response) => {
  const { todoId } = req.query;
  const { updatedTodo } = req.body;

  try {
    await Todo.findByIdAndUpdate(todoId, {
      todo: updatedTodo,
    });

    res
      .status(200)
      .json({ success: "successfully updated your task.", ok: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Error updating your todo task", ok: false });
  }
};

export default updateTodo;
