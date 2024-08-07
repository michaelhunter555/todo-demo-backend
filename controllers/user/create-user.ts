import { Request, Response } from "express";

import User from "../../models/user";

const createUser = async (req: Request, res: Response) => {
  const { data } = req.body;

  if (!data.name || !data.password || !data.email) {
    return res
      .status(500)
      .json({ messaage: "The form is incomplete", ok: false });
  }

  const newUser = new User({
    name: data.name,
    password: data.password,
    email: data.email,
  });

  try {
    const user = await newUser.save();
    res.status(201).json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "There was an error: " + err, ok: false });
  }
};

export default createUser;
