import authModel from "../models/auth-model";
import bcrypt from "bcryptjs";
import { authType } from "../interface/types";

export const createUser = async (data: authType) => {
  return await authModel.create(data);
};

interface User {
  username: string;
  password: string;
  email: string;
  role: string;
}

const users: User[] = [];

// Create a new user
export const registerUser = async (
  username: string,
  password: string,
  email: string,
  role: "admin" | "user"
) => {
  console.log(username, password, email, "Register user service");
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const newUser: authType = { username, email, password: hashedPassword, role };
  // users.push(newUser);
  console.log(newUser);
  return await authModel.create(newUser);
};

// Find user by username
export const findUser = async (email: string) => {
  const user = await authModel.findOne({ email });
  return user;
};
