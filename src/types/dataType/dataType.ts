export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  registrationDate: Date;
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
  };
  tags: string[];
  profilePicture: File | null;
}

export type UserInput = Omit<User, "id" | "registrationDate"> & {
  registrationDate?: Date;
};

export type CrudOperation = "CREATE" | "GET" | "READ" | "UPDATE" | "DELETE";

export interface CrudParams {
  operation: CrudOperation;
  id?: number;
  data?: UserInput;
}
