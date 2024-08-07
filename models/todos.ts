import mongoose from "mongoose";

type Todo = {
  id: mongoose.Types.ObjectId;
  todo: string;
  completed: boolean;
  addDate: Date;
  completedDate: Date;
};

const TodoSchema = new mongoose.Schema<Todo>({
  id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users" },
  todo: { type: String, required: true },
  completed: { type: Boolean, required: false, default: false },
  addDate: { type: Date, required: true, default: Date.now },
  completedDate: { type: Date, require: false, default: null },
});

export default mongoose.model<Todo>("Todo", TodoSchema);
