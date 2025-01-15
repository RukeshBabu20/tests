import mongoose, { Schema, trusted } from "mongoose";
import { taskType } from "../interface/types";

const taskSchema: Schema<taskType> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500,
  },
  deadline: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved"],
    default: "Pending",
    required: true,
  },
  approvedBy: {
    type: String,
    default: null,
  },
  approvedAt: {
    type: String,
    default: null,
  },
});

const taskModel = mongoose.model<taskType>("Task", taskSchema);

export default taskModel;
