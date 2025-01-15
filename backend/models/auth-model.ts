import mongoose, { Schema, trusted } from "mongoose";
import { authType } from "../interface/types";

const authSchema: Schema<authType> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const authModel = mongoose.model<authType>("auth", authSchema);
export default authModel;
