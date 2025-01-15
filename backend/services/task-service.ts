import taskModel from "../models/task-model";
import { taskType } from "../interface/types";

export const createService = async (data: taskType) => {
  return await taskModel.create(data);
};

export const showService = async () => {
  return await taskModel.find();
};

export const approveService = async (taskId: string, username: string) => {
  const approvedAt = new Date().toISOString();

  const updatedTask = await taskModel.findByIdAndUpdate(
    taskId,
    {
      $set: {
        status: "Approved",
        approvedBy: username,
        approvedAt: approvedAt,
      },
    },
    { new: true }
  );

  if (!updatedTask) {
    throw new Error("Task not found or update failed.");
  }

  return updatedTask;
};
