import axios from "axios";
import { taskType } from "../types/type";

const url = "http://localhost:3000";

export const createData = async (data: taskType, token: string) => {
  try {
    const response = await axios.post(url + "/tasks", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const approveData = async (id: any, token: string) => {
  try {
    const response = await axios.post(
      url + "/tasks/" + id + "/approve",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const showData = async (token: string) => {
  try {
    const response = await axios.get(url + "/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data: any) => {
  try {
    const response = await axios.post(url + "/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data: any) => {
  try {
    const response = await axios.post(url + "/register", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
