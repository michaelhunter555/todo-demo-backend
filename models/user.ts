import mongoose from "mongoose";

export interface User extends mongoose.Document {
  name: string;
  password: string;
  email: string;
  todos: mongoose.Types.ObjectId[];
}

const UserSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  todos: {
    type: [mongoose.Types.ObjectId],
    required: false,
    default: [],
    ref: "Todo",
  },
});

export default mongoose.model<User>("User", UserSchema);
