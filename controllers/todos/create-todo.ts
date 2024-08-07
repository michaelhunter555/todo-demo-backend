import { Request, Response } from "express";

import Todo from "../../models/todos";
import User from "../../models/user";

const createTodo = async (req: Request, res: Response) => {
  const { id } = req.query;
  const { todo } = req.body;

  //find the user
  const user = await User.findById(id);

  //make sure the user exists
  if (!user) {
    return res.status(404).json({ message: "User not found", ok: false });
  }

  //create todo data
  const newTodo = new Todo({
    id: user._id,
    todo: todo,
    complete: false,
    addDate: new Date(),
    completedDate: null,
  });

  try {
    //save new todo
    const newTodoId = await newTodo.save();
    //update user todo array of ids.
    user.todos.push(newTodoId._id);
    await user.save();
    res.status(201).json({ success: "Todo successfully created", ok: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Error with adding Todo" + err, ok: false });
  }
};

export default createTodo;
