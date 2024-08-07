import { Request, Response } from "express";

import Todo from "../../models/todos";
import User from "../../models/user";

const deleteTodo = async (req: Request, res: Response) => {
  const { todoId, userId } = req.query;

  try {
    const todo = await Todo.findByIdAndDelete(todoId);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found", ok: false });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { todos: todoId },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found", ok: false });
    }

    res.status(200).json({ success: "Todo deleted successfully", ok: false });
  } catch (err) {
    res.status(500).json({ message: "Error updating todo" + err, ok: false });
  }
};

export default deleteTodo;
