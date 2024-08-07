import { Request, Response } from "express";

import Todo from "../../models/todos";

const getTodos = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const { page, limit } = req.query;

  const pageNum = parseInt(page as string, 10) || 1;
  const limitNum = parseInt(limit as string, 10) || 5;

  try {
    const userTodos = await Todo.find({ id: userId })
      .sort({ addDate: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    const totalTodos = await Todo.countDocuments({ id: userId });
    const totalPages = Math.ceil(totalTodos / limitNum);

    res.status(200).json({ userTodos, pageNum, totalPages, totalTodos });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error getting todos." + err, ok: false });
  }
};

export default getTodos;
