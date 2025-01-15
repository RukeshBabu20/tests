export interface taskType {
  title: string;
  description: string;
  deadline: string;
  status: "Pending" | "Approved";
  approvedBy?: string;
  approvedAt?: string;
}

export interface authType {
  email: string;
  username: string;
  password: number;
  role: "admin" | "user";
}

export interface AddEmployee {
  name: string;
  department: string;
  salary: number;
}
