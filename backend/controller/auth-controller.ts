import { NextFunction, Request, Response } from "express";
import * as authService from "../services/auth-service";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.util";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, username, password, role } = req.body;

  try {
    const result = await authService.registerUser(username, password, email, role);

    // const existingUser = await findUser(username);
    // if (existingUser) {
    //   return res.status(400).json({ message: "User already exists" });
    // }

    res.status(200).json({ message: "User created successfuly" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create data" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authService.findUser(email);
    console.log(user);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(401).json({ message: "Invalid Password" });
      }

      const token = generateToken({ email });
      res
        .status(200)
        .json({ message: "Login successful", token, role: user.role });
    } else {
      res.status(401).json({ message: "User not found!" });
    }
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
};
