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
  role: "admin" | "user";
  username: string;
  password: string;
}
