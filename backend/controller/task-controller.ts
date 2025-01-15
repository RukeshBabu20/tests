import { NextFunction, Request, Response } from "express";
import * as taskService from "../services/task-service";

export const createData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const result = await taskService.createService(req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create data" });
  }
};

export const showData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await taskService.showService();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get data" });
  }
};

export const approveData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const username = "admin";
    const { id } = req.params;
    const result = await taskService.approveService(id, username);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ message: "No dta found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to create data" });
  }
};
