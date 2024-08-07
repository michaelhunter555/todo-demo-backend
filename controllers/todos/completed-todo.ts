import { Request, Response } from "express";

import Todo from "../../models/todos";

const todoCompleted = async (req: Request, res: Response) => {
  const { todoId } = req.query;
  const { isCompleted } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(todoId, {
      completed: isCompleted,
      completedDate: new Date(),
    });

    if (!todo) {
      return res
        .status(404)
        .json({ message: "No todo exists with the given id", ok: false });
    }
    res
      .status(200)
      .json({ success: "todo updated to completed successfully", ok: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "failed to update to completed" + err, ok: false });
  }
};

export default todoCompleted;
