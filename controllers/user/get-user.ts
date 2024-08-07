import { NextFunction, Request, Response } from "express";

import User from "../../models/user";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { password, email } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({
        message: "No user with that email exists in the database.",
        ok: false,
      });
    }

    if (user?.password !== password) {
      const error = "Invalid Password";
      return next(error);
    }

    res.status(200).json({ user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error finding user: " + err, ok: false });
  }
};

export default getUser;
