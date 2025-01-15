import { AddTask } from "@mui/icons-material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../../services/api-services";
import { useNavigate } from "react-router-dom";
import { taskType } from "../../types/type";

export default function Dashboard() {
  const [role, setRole] = useState<string>();
  const [tasks, setTasks] = useState<taskType[]>([
    {
      title: "",
      description: "",
      deadline: "",
      status: "pending" as any,
      approvedBy: "",
      approvedAt: "",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const result = await api.showData(token);
          setTasks(result);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role) return;
    setRole(role);
  }, []);

  const handleApprove = async (id: any) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const result = await api.approveData(id, token);
      console.log(result);
      window.location.reload();
    }
  };

  return (
    <>
      <Button
        style={{ display: "flex", justifyContent: "center" }}
        onClick={() => {
          navigate("/add-task");
        }}
      >
        Add Task
      </Button>
      <Button
        style={{ display: "flex", justifyContent: "center" }}
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Approved At</TableCell>
              <TableCell>Approved By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task: any, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.deadline}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.approvedAt}</TableCell>
                <TableCell>{task.approvedBy}</TableCell>
                {role === "admin" && (
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        handleApprove(task._id);
                      }}
                      disabled={task.status === "Approved"}
                    >
                      <AddTask />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
