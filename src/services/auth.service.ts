import { LoginPayload } from "@/routes/Auth/Login";
import axios from "@/lib/axios";

const API_ENDPOINT = "/auth";

export const login = async (payload: LoginPayload) => {
  const data = await axios.post(`${API_ENDPOINT}/login`, payload);
  return data;
};
