import { api } from "@/app/api";
import { AxiosResponse } from "axios";

export interface User {
  id: number;
  email: string;
  is_active: boolean;
}

export interface RegisterData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface LoginData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface AuthResponse {
  id: number;
}

export class UserService {
  static async register(
    registerData: RegisterData
  ): Promise<AxiosResponse<AuthResponse>> {
    const res = await api.post<AuthResponse>("/auth/sign-up", registerData);
    return res;
  }

  static async login(
    loginData: LoginData
  ): Promise<AxiosResponse<AuthResponse>> {
    const res = await api.post<AuthResponse>("/auth/login", loginData);
    return res;
  }

  static async getUser(userId: number): Promise<AxiosResponse<User>> {
    const url = `/user/${userId}`;
    const res = await api.get<User>(url);
    return res;
  }
}
