import express from "express";
const router = express.Router();
import * as authController from "../controller/auth-controller";
import * as TaskController from "../controller/task-controller";
import { verifyToken } from "../middleware/auth-middleware";

router.get("/tasks", TaskController.showData);
router.post("/tasks", TaskController.createData);
router.post("/tasks/:id/approve", TaskController.approveData);

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
