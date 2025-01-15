import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/employee/Dashboard";
import AddTask from "./components/employee/AddTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/table" element={<EmployeeTable />}></Route> */}
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/add-task" element={<AddTask />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
