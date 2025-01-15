import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import * as api from "../../services/api-services";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    status: "Pending",
    approvedBy: "",
    approvedAt: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    deadline: "",
    status: "" as any,
    approvedBy: "",
    approvedAt: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const result = await api.createData(formData as any, token);
        if (result) {
          alert("Task Created Successfully!");
          navigate("/dashboard");
        } else {
          alert("User Creation Failed!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Button
        style={{ display: "flex", justifyContent: "center" }}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Go Back
      </Button>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h5" align="center" gutterBottom mb={2}>
          Add User
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              variant="outlined"
              value={formData.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              variant="outlined"
              value={formData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Deadline"
              name="deadline"
              type="date"
              variant="outlined"
              value={formData.deadline}
              onChange={handleChange}
              error={!!errors.deadline}
              helperText={errors.deadline}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Create User
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
